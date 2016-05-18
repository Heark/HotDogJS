var hd = new Object;
document.addEventListener("error", function(token) {
    console.log("On line" + token.lineNumber);
});

function throwError(err) {
    this.err = err;

    var ex = new Error(err);
    throw ex;
}
hd.name = "HotDog.js";
/**
 * Determines whether object is an array or not.
 *
 * @function isArray
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
 * @function
 * @name shuffle
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
* @function toVar
* @param {Object} Object - The contents of the new variable
* @example var User = function(name, job){
   this.name = name;
   this.job = job;
}
var get_name = prompt("What is your name?") // In this example my name is "Heark"
var user_name = get_name
user_name.toVar(new User(user_name, "Newbie"))

console.log(Heark.name);
console.log(Heark.job);

*/
Object.prototype.toVar = function(c) {
    this.c = c;
    window[this] = c;
};
/**
 * Determine if a string contains a substring or if a array contains a value
 * 
 * @function contains
 * @param {Object} Object - String or array
 * @return {Boolean} Returns true or false
 * @example Tea.contains("sugar") // returns true if Tea contains "sugar" string
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
/** 
 * Determine if an Object is a number
 * 
 * @function isNum
 * @return {Boolean} Returns true or false
 * @example var x = 100;
var y = "100";
console.log(x.isNum()); // Will return true
console.log(y.isNum()); // will return false
 */
Object.prototype.isNum = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
};
/** 
 * Clear all values from array
 * 
 * @function empty
 * @example var arr = [1, 2, 3, 4, 5];
arr.empty();
console.log(arr);
 * @example [];
 * 
 */
Object.prototype.empty = function() {
    if (this.isArray() == true) {
        return this.length = 0
    } else {
        throwError("Object is not an Array.")
    }
};
/** 
 * Shorten's a string to a given length
 * 
 * @function truncate
 * @example var str = "I'm a string"
console.log(str.truncate(5))
 * @example "I'm a"
 * 
 */
Object.prototype.truncate = function(length) {
    if (this.length > length) {
        this = this.substring(0, length);
    }
    return this;
}
/** 
 * Create an HTTP request
 * 
 * @constructor HTTP
 * @param {String} url - url of request
 * @example var str = "I'm a string"
console.log(str.truncate(5))
 * @example "I'm a"
 * 
 */
 function HTTP( url ) {
     /** @type {function} */
     this.get = function() {
            var phttp = new XMLHttpRequest();
            phttp.open('GET', url, true);
            phttp.onreadystatechange = function() {
                if (phttp.readyState == 4 && phttp.status == "200") {
                    return phttp.responseText;
                }
            };
        phttp.send(null);
     };
     /** @type {function} */
     this.post = function() {
         
     }
 }
///////// HTML FUNCTIONS /////////
/** 
 * Remove HTML features and tags from a string
 * 
 * @function escapeHTML
 * @example var str = "<p>Hi I'm a paragraph</p>"
str.escapeHTML()
console.log(str);
 * @example "Hi I'm a paragraph"
 * 
 */
Object.prototype.escapeHTML = function() {  
    return this.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') ;
}
