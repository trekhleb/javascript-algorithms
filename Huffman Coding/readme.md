Huffman coding is a lossless data compression algorithm. The idea is to assign variable-length codes to input characters, lengths of the assigned codes are based on the frequencies of corresponding characters. The most frequent character gets the smallest code and the least frequent character gets the largest code.
The variable-length codes assigned to input characters are Prefix Codes, means the codes (bit sequences) are assigned in such a way that the code assigned to one character is not the prefix of code assigned to any other character. This is how Huffman Coding makes sure that there is no ambiguity when decoding the generated bitstream. 
Let us understand prefix codes with a counter example. Let there be four characters a, b, c and d, and their corresponding variable length codes be 00, 01, 0 and 1. This coding leads to ambiguity because code assigned to c is the prefix of codes assigned to a and b. If the compressed bit stream is 0001, the de-compressed output may be “cccd” or “ccb” or “acd” or “ab”.
See this for applications of Huffman Coding.<br/>
There are mainly two major parts in Huffman Coding<br/>

Build a Huffman Tree from input characters.<br/>
Traverse the Huffman Tree and assign codes to characters.<br/>
Steps to build Huffman Tree:-<br/>
1- Input is an array of unique characters along with their frequency of occurrences and output is Huffman Tree.<br/>

2- Create a leaf node for each unique character and build a min heap of all leaf nodes (Min Heap is used as a priority queue. The value of frequency field is used to compare two nodes in min heap. Initially, the least frequent character is at root)
Extract two nodes with the minimum frequency from the min heap.<br/>
 
3-Create a new internal node with a frequency equal to the sum of the two nodes frequencies. Make the first extracted node as its left child and the other extracted node as its right child. Add this node to the min heap.<br/>

4-Repeat steps#2 and #3 until the heap contains only one node. The remaining node is the root node and the tree is complete.<br/>

For example:-<br/>

1- Suppose the string below is to be sent over a network.<br/>

![Screenshot 2022-09-22 at 11 18 10 AM](https://user-images.githubusercontent.com/94233521/191668309-6dad431e-b10a-4c33-b762-2db8cfd0f27e.png)

2- Calculate the frequency of each character in the string.<br/>
![Screenshot 2022-09-22 at 11 18 10 AM](https://user-images.githubusercontent.com/94233521/191668512-8ed929db-dd6e-4623-8c16-09dd3ff7343d.png)

3- Sort the characters in increasing order of the frequency. These are stored in a priority queue<br/>
![Screenshot 2022-09-22 at 11 18 21 AM](https://user-images.githubusercontent.com/94233521/191668603-d5a087c6-ceb7-4a27-9e80-88c602d0c879.png)

4- Make each unique character as a leaf node.<br/>

5- Create an empty node z. Assign the minimum frequency to the left child of z and assign the second minimum frequency to the right child of z. Set the value of the z as the sum of the above two minimum frequencies.<br/>
![Screenshot 2022-09-22 at 11 18 28 AM](https://user-images.githubusercontent.com/94233521/191668999-e0d9ef52-493f-4a16-b9b5-8e892bebaafe.png)

6- Remove these two minimum frequencies from Q and add the sum into the list of frequencies (* denote the internal nodes in the figure above).<br/>

7-Insert node z into the tree.<br/>

8-Repeat steps 3 to 5 for all the characters.<br/>
![Screenshot 2022-09-22 at 11 18 37 AM](https://user-images.githubusercontent.com/94233521/191669278-521d3132-71cc-4a12-ad38-2783ab5766e7.png)

![Screenshot 2022-09-22 at 11 18 45 AM](https://user-images.githubusercontent.com/94233521/191669386-3dda5baf-becb-488d-b587-3274c41cb301.png)

9- For each non-leaf node, assign 0 to the left edge and 1 to the right edge.<br/>
![Screenshot 2022-09-22 at 11 18 55 AM](https://user-images.githubusercontent.com/94233521/191669462-c66c15b4-43fa-4181-a0a5-e6474aa2c0de.png)

10-For sending the above string over a network, we have to send the tree as well as the above compressed-code. The total size is given by the table below.<br/>


![Screenshot 2022-09-22 at 11 19 07 AM](https://user-images.githubusercontent.com/94233521/191669540-c912f863-f372-4797-9e87-dabfee3cec6c.png)

Without encoding, the total size of the string was 120 bits. After encoding the size is reduced to 32 + 15 + 28 = 75.<br/>









