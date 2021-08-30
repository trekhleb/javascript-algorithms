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


}

module.exports = MerkleTree