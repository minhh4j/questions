/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let a = address.split(".").join("[.]")
    return a;
    };
    console.log(defangIPaddr("1.1.1.1"))