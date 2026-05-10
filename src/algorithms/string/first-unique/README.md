First Unique Algorithm

This algorithm finds the first non-repeating (unique) character in a given string.

How it works:

Count Frequencies: Iterate through the string and count the occurrences of each character, usually using a hash map (or dictionary).
Find First Unique: Iterate through the string again. For each character, check its count in the hash map. The first character with a count of 1 is the first unique character.
Handle No Unique Character: If no character has a count of 1 after the second iteration, it means there are no unique characters in the string.
Example:

String: “leetcode”

First unique character: ‘l’

String: “loveleetcode”

First unique character: ‘v’

String: “aabb”

First unique character: None (or a designated indicator)

This approach typically has a time complexity of O(n) because you iterate through the string a constant number of times, and a space complexity of O(k) where k is the number of unique characters (or O(1) if the character set is fixed, like ASCII).