# k-Means Algorithm

_Read this in other languages:_
[_Português_](README.pt-BR.md)

The **k-Means algorithm** is an unsupervised Machine Learning algorithm. It's a clustering algorithm, which groups the sample data on the basis of similarity between dimensions of vectors.

In k-Means classification, the output is a set of classes assigned to each vector. Each cluster location is continuously optimized in order to get the accurate locations of each cluster such that they represent each group clearly.

The idea is to calculate the similarity between cluster location and data vectors, and reassign clusters based on it. [Euclidean distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-distance) is used mostly for this task.

![Euclidean distance between two points](https://upload.wikimedia.org/wikipedia/commons/5/55/Euclidean_distance_2d.svg)

_Image source: [Wikipedia](https://en.wikipedia.org/wiki/Euclidean_distance)_

The algorithm is as follows:

1. Check for errors like invalid/inconsistent data
2. Initialize the `k` cluster locations with initial/random `k` points
3. Calculate the distance of each data point from each cluster
4. Assign the cluster label of each data point equal to that of the cluster at its minimum distance
5. Calculate the centroid of each cluster based on the data points it contains
6. Repeat each of the above steps until the centroid locations are varying

Here is a visualization of k-Means clustering for better understanding:

![KNN Visualization 1](https://upload.wikimedia.org/wikipedia/commons/e/ea/K-means_convergence.gif)

_Image source: [Wikipedia](https://en.wikipedia.org/wiki/K-means_clustering)_

The centroids are moving continuously in order to create better distinction between the different set of data points. As we can see, after a few iterations, the difference in centroids is quite low between iterations. For example between iterations `13` and `14` the difference is quite small because there the optimizer is tuning boundary cases.

## Code Examples

- [kMeans.js](./kMeans.js)
- [kMeans.test.js](./__test__/kMeans.test.js) (test cases)

## References

- [k-Means neighbors algorithm on Wikipedia](https://en.wikipedia.org/wiki/K-means_clustering)
