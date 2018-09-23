We essentially want to attach each letter of the given string with
every single combination of ALL remaining characters in the string.

So if the string is 'abc':
we want to attach 'a' with every combination of 'bc':
	combinations of 'bc': 'bc' and 'cb'
	and we want to attach 'a' to 'bc' and then 'cb', giving 
	us 'abc', 'acb'

now we want to repeat that process of every other letter,
let's attach 'b' with every combination of 'ac':
	combinations of 'ac': 'ac' and 'ca'
	and we want to attach 'b' to 'ac' and then 'ca', giving 
	us 'bac', 'bca'

let's attach 'c' with every combination of 'ab':
	combinations of 'ab': 'ab' and 'ba'
	and we want to attach 'c' to 'ab' and then 'ba', giving 
	us 'cab', 'cba'

thus we have an array of all permutations of 'abc':
["abc", "acb", "bac", "bca", "cab", "cba"]