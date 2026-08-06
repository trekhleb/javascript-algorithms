The **Luhn algorithm** or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm, named after its creator, IBM scientist Hans Peter Luhn, is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers in the United States, Canadian Social Insurance Numbers, Israel ID Numbers, Greek Social Security Numbers (ΑΜΚΑ), and survey codes appearing on McDonald's, Taco Bell, and Tractor Supply Co. receipts. It is described in U.S. Patent No. 2,950,048, filed on January 6, 1954, and granted on August 23, 1960.

The algorithm is in the public domain and is in wide use today. It is specified in ISO/IEC 7812-1.[1] It is not intended to be a cryptographically secure hash function; it was designed to protect against accidental errors, not malicious attacks. Most credit cards and many government identification numbers use the algorithm as a simple method of distinguishing valid numbers from mistyped or otherwise incorrect numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial account number to generate the full account number. This number must pass the following test:

1. From the rightmost digit, which is the check digit, and moving left, double the value of every second digit. The check digit is not doubled; the first digit doubled is immediately to the left of the check digit. If the result of this doubling operation is greater than 9 (e.g., 8 × 2 = 16), then add the digits of the result (e.g., 16: 1 + 6 = 7, 18: 1 + 8 = 9) or, alternatively, the same final result can be found by subtracting 9 from that result (e.g., 16: 16 − 9 = 7, 18: 18 − 9 = 9).
2. Take the sum of all the digits.
3. If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; otherwise it is not valid.

Assume an example of an account number "7992739871" that will have a check digit added, making it of the form 7992739871x:

The sum of all the digits in the third row is 67+x.

The check digit (x) is obtained by computing the sum of the non-check digits then computing 9 times that value modulo 10 (in equation form, ((67 × 9) mod 10)). In algorithm form:

1. Compute the sum of the non-check digits (67).
2. Multiply by 9 (603).
3. The units digit (3) is the check digit. Thus, x=3.

(Alternative method) The check digit (x) is obtained by computing the sum of the other digits (third row) then subtracting the units digit from 10 (67 => Units digit 7; 10 − 7 = check digit 3). In algorithm form:

1. Compute the sum of the non-check digits (67).
2. Take the units digit (7).
3. Subtract the units digit from 10.
T4. he result (3) is the check digit. In case the sum of digits ends in 0 then 0 is the check digit.

This makes the full account number read 79927398713.

Each of the numbers 79927398710, 79927398711, 79927398712, 79927398713, 79927398714, 79927398715, 79927398716, 79927398717, 79927398718, 79927398719 can be validated as follows.

1. Double every second digit, from the rightmost: (1×2) = 2, (8×2) = 16, (3×2) = 6, (2×2) = 4, (9×2) = 18
2. Sum all the individual digits (digits in parentheses are the products from Step 1): x (the check digit) + (2) + 7 + (1+6) + 9 + (6) + 7 + (4) + 9 + (1+8) + 7 = x + 67.
3. If the sum is a multiple of 10, the account number is possibly valid. Note that 3 is the only valid digit that produces a sum (70) that is a multiple of 10.
4. Thus these account numbers are all invalid except possibly 79927398713 which has the correct check digit.

Alternately, you can use the same checksum creation algorithm, ignoring the checksum already in place as if it had not yet been calculated. Then calculate the checksum and compare this calculated checksum to the original checksum included with the credit card number. If the included checksum matches the calculated checksum, then the number is valid.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Luhn_algorithm)