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

}

module.exports = MerkleTree