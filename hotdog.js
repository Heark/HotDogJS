/** @type {Object} */
var hd = new Object;
document.addEventListener("error", function(token) {
    console.log("On line" + token.lineNumber);
});
/**
* Write an error to the console
*
* @method throwError
* @param {String} description of thrown Error
*/
function throwError(err) {
    /** @type {string} */
    this.err = err;
    /** @type {Error} */
    var ex = new Error(err);
    throw ex;
}
/** @type {string} */
hd.name = "HotDog.js";
/**
* Determines whether object is an array or not.
*
* @method Object.prototype.isArray
* @return {Boolean} Returns true if object is array
*/
Object.prototype.isArray = function() {
    if (Object.prototype.toString.call(this) === "[object Array]") {
        return true;
    } else {
        return false;
    }
};
/**
* Shuffle's array and returns a random output.
*
* @method Object.prototype.shuffle
* @return {Object} Returns a random output from array
*/
Object.prototype.shuffle = function() {
    if (this.isArray() === true) {
        return this[Math.floor(Math.random() * this.length)];
    } else {
        throwError("Object is not an array.");
    }
};
/**
* Converts a string into a variable
*
* @method Object.prototype.toVar
* @param {Object} The contents of the new variable
*/
Object.prototype.toVar = function(c) {
    this.c = c;
    window[this] = c;
};
/**
 * Determine if a string contains a substring or if a array contains a value
 * 
 * @method Object.prototype.contains
 * @param {Object} String or Array
 * @return {Boolean} Returns true or false
 */
Object.prototype.contains = function(substring) {
    if (typeof this === "string") {
        if (this.indexOf(substring) > -1) {
            return true;
        } else {
            return false;
        }
    } else {
        if (this.indexOf(substring) !== -1) {
            return true;
        } else {
            return false;
        }
    }
};
