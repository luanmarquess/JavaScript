/* 
You are given an array(which will have a length of at least 3, but could be verylarge)containing integers.
Ther array is either comprisef of odd intergers or entirely comprisef of even integers except for a single integer N.
Write a method that takes the array as an argument and returns this "outlier"N.
*/


var xLier = "";
var yLier = "";
var x = [2, 4, 0, 100, 4, 11, 2602, 36];
var y = [160, 3, 1719, 19, 11, 13, -21];

function findOutLier(x,y){

    for (let i = 0; i < x.length; i++){
        if(x[i] % 2 != 0){
            xLier = x[i];
            break;
        }
    }
    for (let i = 0; i < y.length; i++){
        if(y[i] % 2 == 0){
            yLier = y[i];
            break;
        }
    }
    return xLier, yLier;
}

findOutLier(x,y);
console.log(xLier, yLier);