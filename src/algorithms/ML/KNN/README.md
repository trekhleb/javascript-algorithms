# KNN Algorithm  

KNN stands for K Nearest Neighbors. KNN is a supervised Machine Learning algorithm. It's a classification algorithm, determining the class of a sample vector using a sample data.  

The idea is to calculate the similarity between two data points on the basis of a distance metric. Euclidean distance is used mostly for this task. The algorithm is as follows -  

1. Check for errors like invalid data/labels.
2. Calculate the euclidean distance of all the data points in training data with the classification point
3. Sort the distances of points along with their classes in ascending order
4. Take the initial "K" classes and find the mode to get the most similar class
5. Report the most similar class  

Here is a visualization for better understanding -  

![KNN Visualization](https://media.geeksforgeeks.org/wp-content/uploads/graph2-2.png)  

Here, as we can see, the classification of unknown points will be judged by their proximity to other points.

It is important to note that "K" is preferred to have odd values in order to break ties. Usually "K" is taken as 3 or 5.  

## References

- [GeeksforGeeks](https://media.geeksforgeeks.org/wp-content/uploads/graph2-2.png)
