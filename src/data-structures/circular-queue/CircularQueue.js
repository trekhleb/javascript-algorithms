export default class CircularQueue {
    /**
     * Create a circular queue with a given capacity.
     * @param {number} capacity - The maximum number of elements the queue can hold.
     */
    constructor(capacity) {
      this.capacity = capacity; // Set the maximum capacity of the queue
      this.queue = new Array(capacity); // Initialize the queue array with the specified capacity
      this.head = 0; // Index of the front element in the queue
      this.tail = 0; // Index of the next available slot for enqueuing
      this.size = 0; // Number of elements currently in the queue
    }
  
    /**
     * Check if the queue is empty.
     * @return {boolean}
     */
    isEmpty() {
      return this.size === 0; // Return true if the size is 0, otherwise false
    }
  
    /**
     * Check if the queue is full.
     * @return {boolean}
     */
    isFull() {
      return this.size === this.capacity; // Return true if the size is equal to the capacity, otherwise false
    }
  
    /**
     * Read the element at the front of the queue without removing it.
     * @return {*}
     */
    peek() {
      if (this.isEmpty()) {
        return null; // Return null if the queue is empty
      }
      return this.queue[this.head]; // Return the element at the head index
    }
  
    /**
     * Add a new element to the end of the queue.
     * If the queue is full, throw an error.
     * @param {*} value
     */
    enqueue(value) {
      if (this.isFull()) {
        throw new Error('Queue is full'); // Throw an error if the queue is full
      }
      this.queue[this.tail] = value; // Insert the value at the tail index
      this.tail = (this.tail + 1) % this.capacity; // Update the tail index in a circular manner
      this.size++; // Increment the size
    }
  
    /**
     * Remove the element at the front of the queue.
     * If the queue is empty, return null.
     * @return {*}
     */
    dequeue() {
      if (this.isEmpty()) {
        return null; // Return null if the queue is empty
      }
      const value = this.queue[this.head]; // Store the value at the head index
      this.queue[this.head] = undefined; // Clear the value at the head index
      this.head = (this.head + 1) % this.capacity; // Update the head index in a circular manner
      this.size--; // Decrement the size
      return value; // Return the dequeued value
    }
  
    /**
     * Get the current size of the queue.
     * @return {number}
     */
    getSize() {
      return this.size; // Return the current size of the queue
    }
  
    /**
     * Get the string representation of the queue.
     * @return {string}
     */
    toString() {
      if (this.isEmpty()) {
        return ''; // Return an empty string if the queue is empty
      }
      let result = ''; // Initialize the result string
      for (let i = 0; i < this.size; i++) {
        result += this.queue[(this.head + i) % this.capacity] + ' '; // Concatenate the elements in the queue to the result string
      }
      return result.trim(); // Return the trimmed result string
    }
  }
  