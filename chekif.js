/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let c = false; 
    for (let char of s) {
        if (char === "b") {
            c = true;
        } else if (char === "a" && c) {
            return false;
        }
    }
    return true; 
}
// console.log(checkString("abab"))
// let a =checkString("aabb")
// console.log(a)

