function calcDis(a, b) {
    let dx = (a[0] - b[0]);
    let dy = (a[1] - b[1]);
    return Math.sqrt(dx * dx + dy * dy);
}

function closest_pairs(points, d) {

    if (points.length <= 3) {
        if (points.length <= 1) return [0, points];
        let x = d(points[0], points[1]);
        if (points.length == 2) return [x, points];
        let y = d(points[1], points[2]);
        let z = d(points[0], points[2]);
        console.log(points + " returning " + Math.min(x, y, z));
        return Math.min(x, y, z);
    }

    let sortbyX = points[0].sort(function (a, b) {  return a[0] - b[0]; });
    const mid = Math.floor(sortbyX.length / 2);
    const left = sortbyX.slice(0, mid);
    const right = sortbyX.slice(mid);
    let del = Math.min(closest_pairs(left, d), closest_pairs(right, d));
    console.log(sortbyX.slice(0, mid), sortbyX.slice(mid));
    let sortbyY = points[0].sort(function (a, b) {  return a[1] - b[1]; });
    let neighbours = sortbyY.filter((x)=>Math.abs(x[0]-sortbyX[mid][0]) <= del);
    console.log(neighbours);
    min = Number.POSITIVE_INFINITY;
    /*for (var i = 0; i < neighbours.length - 1; i++){
        for (var j = i; j < neighbours.length; j++){
            var p = points[i], q = points[j];
            dis = d(p, q);
            if(dis < min){
                min = dis;
                pair = [p, q];
            }
        }
    }*/
    return neighbours;
}

console.log(closest_pairs([[1,2], [3,4], [4,5], [8,8], [3,2], [-6,7], [-8,6]], calcDis));