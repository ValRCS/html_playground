function dAdd(a,b=5) {
    console.log(a+b);
    return a+b;
}

dAdd(3);
dAdd(10,20);

(function(a){
    var i = 6;
    console.log("Do stuff with ", i, a);
})(55);