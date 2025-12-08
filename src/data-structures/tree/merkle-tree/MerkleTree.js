var crypto = require('crypto');

class MerkleTree {
    /**
     * @desc Constructs a Merkle Tree.
     * If the number of nodes is odd, last node is duplicated while calculating next level up:
     * Hash(LN) = Hash(LN+LN)
     * @param {[]} array - Array of inputs. Each value must be a string/number/object.
     * @param {Object} options - Additional options: {inputHash, hash}
     * inputHash: - string 
     *              ex: 'sha256' | 'md5' 
     *              (*listOfSupportedHashes = crypto.getHashes())
     * 
     *            - function
     *              ex:
     *              function sha256(data) {
     *                   return crypto.createHash('sha256').update(data).digest('hex')
     *               }
     *               
     * @example
     * ```js
     * const tree = new MerkleTree([1,2,3,4,5,6], {hash: 'md5'})
     * ```
     */

    constructor (array, option = {}) {
        if (!array) {
            array = []
        } else {
            if (!Array.isArray(array)) {
                throw new Error('Input has to be an array')
            }
        }

        if (option.constructor !== Object) {
            throw new Error('Invalid option object: has to be {hash, inputHash}')
        }
        
        this.option = {
            hash: option.hash || 'sha256',
            inputHash: option.inputHash || 'sha256'
        }
        this.originalArray = array
        this.buildTree()
    }
    buildTree() {
        // Hash all the inputs with inputHash()
        this.hashedArray = this.originalArray.map(item => {
            return this.inputHash(item)
        })
        // Initiate a 2D map to store all the hash values
        this.fullPath = []
        // Hash first row
        let currentRow = this.hashedArray.map(item => {
            return this.hash(item)
        })
        while (currentRow.length > 1) {
            let nextRow = []
            if ((currentRow.length % 2) !== 0) {
                // Duplicate last node in the row if the node is alone
                currentRow.push(currentRow[currentRow.length-1])
            }
            for (let i = 0; i < currentRow.length; i += 2) {
                nextRow.push(this.hash(currentRow[i]+currentRow[i+1]))
            }
            this.fullPath.unshift(currentRow)
            currentRow = nextRow
        }
        this.fullPath.unshift(currentRow)
        // Set the final hash as root
        this.root = currentRow[0]
    }
    inputHash(node) {
        return this.hashBase(node, this.option.inputHash)
    }

    hash(node) {
        return this.hashBase(node, this.option.hash)
    }

    hashBase(node, method = this.option.hash) {
        node = this._toString(node)
        if (method && (typeof method === 'function')) {
            return method(node)
        }
        const hash = crypto.createHash(method)
        return hash.update(node, 'utf8').digest('hex')
    }
    _toString(node) {
        if (node.constructor === String) return node
        if (node.constructor === Number) return node.toString()
        if (node.constructor === Object) return JSON.stringify(node)
        throw new Error('Input object only takes string, number, object')
    }
    
    addNode(node) {
        this.originalArray.push(node)
        // Rebuild tree
        this.buildTree()
    }

    getRoot() {
        return this.root
    }

    /**
     * getProof
     * @desc Returns the proof for a node.
     * @param {} node
     * @param {Number} [index] - claimed node index of the input array.
     * If not provided, getProof will set it default to first found index in the input array
     * @return {Object} - An object provides the claim of the proof including: 
     * {
     *    node - the original input node,
     *    index - the original input index(if valid/applicable for the current tree), -1 otherwise,
     *    path - an array contains the coordinates of a  bottom-up merkle path
     * }
     *@example
     * ```js
     *const tree = new MerkleTree(['a', 'b', 'c', 'd', 'e']);
     *console.log(tree.getProof('b'))
     * // {node: 'b', index: 1, path: [[3,0],[2,1],[1,1]]}
     *```
     */

    getProof(node, index) {
        const result = {node, index: -1, path: []}
        // Filter out invalid inputs
        if (node === undefined || node === null) return result
        if (index && (!Number.isInteger(index) || index < 0) || index >= this.originalArray.length) return result
        // Set the index to real index if not provided
        if (index === undefined || index === null) index = this.hashedArray.indexOf(this.inputHash(node))
        if (index === -1) return result
        result.index = index

        // Build a path array bottom up based on the current full hash map by calculating indexes
        for (let j=this.fullPath.length - 1; j>0;j--) {
            // If the index indicates it is a left node, push right sibling to the path array, left otherwise.
            if ((index % 2) == 0) {
                result.path.push([j, index + 1])
            } else {
                result.path.push([j, index - 1])
            }
            index = Math.floor(index/2)
        }
        return result
    }

    /**
     * verify
     * @desc verify a proof generated by getProof()
     * @param {Proof} proof - proof object generated by getProof()
     * {
     *    node, index, path
     * }
     * @return {Boolean} - If true, the correct merkle root can be calculated through the path provided by input proof, false other wise.
     *@example
     * ```js
     *const tree = new MerkleTree(['a', 'b', 'c', 'd', 'e']);
     *const proof = tree.getProof('b'))  // {node: 'b', index: 1, path: [[3,0],[2,1],[1,1]]}
     *console.log(tree.verify(proof)) //true
     *```
     */
     verify(proof) {
        const node = proof.node
        const index = proof.index
        const path = proof.path

        if (node === undefined || node === null) return false
        if (index >= this.originalArray.length ) return false
        let hashed = this.hash(this.inputHash(node))
        // If path is [] and index == 0 means the input array contains only one node. Just compare the hash of itself with root
        if (path === []) {
            if(index === 0) return hashed === this.root
            return false
        }

        // Rebuild hashes bottem up by only calculating the necessary nodes, compare the final hash with root
        while(path.length > 0) {
            const current = path.shift()
            const row = current[0]
            const index = current[1]

            try {
                const sibling = this.fullPath[row][index]
                // If the coordinate indicates the sibling is a left node, do H(sibling + current)
                // H(current + sibling) otherwise*
                if ((index%2) == 0) {
                    hashed = this.hash(sibling + hashed)
                } else {
                    hashed = this.hash(hashed + sibling)
                }
            } catch (err) {
                return false
            }
        }

        return hashed === this.root
    }

}

module.exports = MerkleTree