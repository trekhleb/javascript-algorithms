export default function extendedEuclideanAlgorithm(a, b){
    if(b== 0){
        return [1, 0];
    }
    var a = extendedEuclideanAlgorithm(b, a % b);
    return [a[1], a[0] - Math.floor(a/b) * a[1]];
}