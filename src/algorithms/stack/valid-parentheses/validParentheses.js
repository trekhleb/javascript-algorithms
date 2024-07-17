import Stack from '../../../data-structures/stack/Stack';
import HashTable from '../../../data-structures/hash-table/HashTable';

// Declare hashtable containg opening parentheses as key and it's closing parentheses as value.
const hashTable = new HashTable(3);
hashTable.set('{', '}');
hashTable.set('(', ')');
hashTable.set('[', ']');

/**
 * Check if string has valid parentheses.
 *
 * @param {string} parenthesesString
 * @return {boolean}
 */
export default function isValid(parenthesesString) {
  // If string is empty return false
  if (parenthesesString.length === 0) {
    return false;
  }
  // Create stack
  const stack = new Stack();

  // Loop through each character of string
  for (let i = 0; i < parenthesesString.length; i += 1) {
    const currentCharacter = parenthesesString[i];
    // If character is opening parentheses push it's closing parentheses to stack
    if (hashTable.has(currentCharacter)) {
      stack.push(hashTable.get(currentCharacter));
    } else {
      /* If character is a closing parentheses then,:
      check If stack is empty, if it is return false.
      if stack is not empty, pop from stack and compare it with current character.
      If they are not same return false. */
      if (stack.isEmpty() || stack.pop() !== currentCharacter) {
        return false;
      }
    }
  }
  // If stack is empty return true else return false
  return stack.isEmpty();
}
