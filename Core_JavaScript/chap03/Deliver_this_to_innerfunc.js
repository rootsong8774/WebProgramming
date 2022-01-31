var obj = {
    outer: function(){
        console.log(this);
        var innerFunction = function() {
            console.log(this);
        };
        innerFunction.call(this); /* { outer: [Function: outer] } */
    }
};
obj.outer(); /* { outer: [Function: outer] }*/

var obj2 = {
    outer2: function() {
        console.log(this);
        var innerFunction2 = function() {
            console.log(this);
        }.bind(this);
        innerFunction2(); /* { outer2: [Function: outer2] }*/
    }
}
obj2.outer2(); /* { outer2: [Function: outer2] }*/
