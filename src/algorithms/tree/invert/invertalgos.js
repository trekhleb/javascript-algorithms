function invertrecursively(node) {
    placeholder = node.left;
    node.left = node.right;
    node.right = placeholder;

    if(node.left != null) invertrecursively(node.left);
    if(node.right != null) invertrecursively(node.right);
}

function invertwitharray(root) {
    var arr = [root];
    while(arr.length != null) {
        var cur = arr.pop();

        var place = cur.left;
        cur.left = cur.right;
        cur.right = place;

        if(cur.left != null) arr.push(cur.left);
        if(cur.right != null) arr.push(cur.right);
    }
}