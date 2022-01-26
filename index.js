/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
	this.map = [];
};

/**
* value will always be non-negative. 
* @param {number} key 
* @param {number} value
* @return {void}
*/
MyHashMap.prototype.put = function (key, value) {
	if (this.map[key]) {
		this.map[key] += value;
	} else {
		this.map[key] = value;
	}
};

/**
* Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
* @param {number} key
* @return {number}
*/
MyHashMap.prototype.get = function (key) {
	if (this.map[key]) {
		return this.map[key];
	} else {
		return -1;
	}
};

/**
* Removes the mapping of the specified value key if this map contains a mapping for the key 
* @param {number} key
* @return {void}
*/
MyHashMap.prototype.remove = function (key) {
	if (this.map[key]) {
		this.map[key] = null;
	}
};

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/

let hash = new MyHashMap();
hash.put(1, 1);
hash.put(2, 2);
hash.get(1);
hash.get(3);
hash.put(2, 1);
hash.get(2);

var a = 1;
let str = "ss";
console.log("111");
console.log("saddf");
console.log("label");
