'use strict';

function buildOffspringArr(parents) {
    var sons = Array.prototype.slice.call(arguments, 1),
        father = parents[0],
        mother = parents[1] ? (',\n\t\t"mother": ["' + parents[1] + '"]') : '',
        arr = [];


    sons.forEach(function (son) {
        var child = Array.isArray(son) ? son[0] : son,
            fatherAge = Array.isArray(son) ? (', ' + son[1]) : '';

        arr.push('\t{\n\t\t"name": "' + child + '",\n\t\t"father": ["' + father + '"' + fatherAge + ']' + mother + '\n\t},');
    });

    return arr;
}

function jsonize(arr) {
    arr.forEach(function (item) {
        console.log(item);
    });
}