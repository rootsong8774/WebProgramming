var str = 'abc def';

// Array.prototype.push.call(str, ', pushed string');
// TypeError: Cannot assign to read only property 'length' of object '[object String]'

Array.prototype.concat.call(str, 'string'); // [ [String: 'abc def'], 'string' ]

Array.prototype.every.call(str, function (char) {
    return char !== ' ';
}); // false

Array.prototype.some.call(str, function (char) {
    return char == ' ';
}); // true

var newArray = Array.prototype.map.call(str, function (char) {
    return char + '!';
});
console.log(newArray);

var newString = Array.prototype.reduce.apply(str, [function (string, char, i) {
    return string + char + i;
}, '']);
console.log(newString);