/** @type {Object} */
var hd = new Object;
document.addEventListener("error", function(token) {
    console.log("On line" + token.lineNumber);
});
/**
 * @param {string} err
 * @return {undefined}
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
 * @return {?}
 */
Object.prototype.isArray = function() {
    if (Object.prototype.toString.call(this) === "[object Array]") {
        return true;
    } else {
        return false;
    }
};
/**
 * @return {?}
 */
Object.prototype.shuffle = function() {
    if (this.isArray() === true) {
        return this[Math.floor(Math.random() * this.length)];
    } else {
        throwError("Object is not an array.");
    }
};
/**
 * @param {Object} c
 * @return {undefined}
 */
Object.prototype.toVar = function(c) {
    /** @type {Object} */
    this.context = c;
    /** @type {Object} */
    window[this] = c;
};
/**
 * @param {?} substring
 * @return {?}
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
