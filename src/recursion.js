/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
	if(n < 0) {
		return null;
	} else if(n ===0) {
		return 1
	}
	return n * factorial(n-1);
};
// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
	if(array.length === 0) {
		return 0;
	}
	return array[0] + sum(array.slice(1));
};
// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
	if(array.length ===0) {
		return 0;
	}
	if(typeof(array[0]) === 'number') {
		return array[0] + arraySum(array.slice(1));
	} 
	if(Array.isArray(array[0])) {
		return arraySum(array[0]) + arraySum(array.slice(1));
	}
};
// 4. Check if a number is even.
var isEven = function(n) {
	if(n === 0) {
		return true;
	}
	if(n > 0) {
		n -=2;
		if(n < 0) {
			return false;
		}
		return isEven(n);
	}
	if( n < 0) {
		n += 2;
		if(n > 0) {
			return false;
		}
		return isEven(n);
	}
}
// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
	if(n === 0) {
		return 0;
	} 
	if(n > 0) {
		return (n - 1) + sumBelow(n - 1);
	} else {
		return (n + 1 ) + sumBelow(n + 1)
	}
};
// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
	if(y+1 < x) {
		return [].concat(x-1, range(x-1, y))
	}
	if(x + 1 < y) {
		return [].concat(x+1, range(x+1, y));
	}
	return [];
	
};
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
	if(exp === 0) {
		return 1;
	}
	if(exp ===1) {
		return base;
	}

	if( exp > 1) {
		return base * exponent(base, (exp - 1));
	} else {
		return 1 / (exponent(base, -exp));
	}

	if(base === 0) {
		return 0;
	} else if (base < 0) {
		return -(exponent(-base, exp));
	}
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
	if(n === 1) {
		return true;
	} 
	if( n > 1) {
		n /= 2;
		return powerOfTwo(n);
	} 
	return false;
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
	var len = string. length;
	var arr = string.split('');
	if(len <= 1) {
		return string;
	}
	return  arr[len - 1] + arr[len -2] + reverse(arr.slice(0,-2).join(''));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
	string = string.toLowerCase();
	var arr = string.split('');

	if(string.length <= 1) {
		return true;
	}
	if(arr[0] === arr[string.length -1]){
		return palindrome(arr.slice(1, -1).join(''));
	}
	return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
	if(y === 0) {
		return NaN;
	}
	if( x === 0 || x < y && x > 0 && y > 0) {
		return x;
	}

	if( x > y && y < 0 && x < 0) {
		return x;
	}
	if((x > 0 && y < 0 && x < -y) ||(x < 0 && y > 0 && x > -y)) {
		return x;
	}

	if((x < 0 && y > 0) || (x > 0 && y < 0)) {
		x = x + y;
		return modulo(x, y);
	} else {
		x = x - y;
		return modulo(x, y);
	}
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
	if( x === 0 || y ===0) {
		return 0;
	}
	if(y > 0) {
		return x + multiply(x, y -1);
	} 
	if(y < 0) {
		return -x + multiply(x, y + 1);
	}

};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
	if(y === 0) {
		return NaN;
	}
	if(x ===0) {
		return 0;
	}
	
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
	if(x <= 0 || y <= 0) {
		return null;
	} else if(x % y === 0) {
		return y;
	} else if(y % x === 0) {
		return x;
	} else if(x === y) {
		return x;
	} else if(x > y) {
		for(var i = y-1; i >=1; i--){
			if(y % i === 0 && x % i ===0) {
				return gcd(x, i)
			}
		}
	} else if( x < y) {
		for (var j = x - 1; j >= 1; j--) {
			if(x % j === 0 && y % j ===0) {
				return gcd(j, y);
			}
		}
	}
};

// 15. Write a function that compares each character of two strings and returns true both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
	var len1 = str1.length;
	var len2 = str2.length;
	var arr1 = str1.split('');
	var arr2 = str2.split('');
	// if(len1 !== len2) {
	// 	return false;
	// }
	if(len1 === 0 && len2 ===0){
		return true;
	}
	if((len1 === 0 && len2 !== 0) || (len1 !== 0 && len2 ===0)) {
		return false;
	}
	if(len1 === 1 && len2 === 1 && str1 === str2) {
		return true;
	} 
	if(arr1[0] === arr2[0]) {
		return compareStr(arr1.slice(1).join(''), arr2.slice(1).join(''));
	}
	return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
	var len = str.length;
	var arr = str.split('');
	if(len === 0) {
		return []; 
	}	
	return [].concat(arr[0], createArray(arr.slice(1).join('')));
	
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
	if(array.length ===0) {
		return []
	}
	if(array.length === 1) {
		return array;
	}
	return [].concat(array.pop(), reverseArr(array))
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
	if(length === 0) {
		return []
	};
	if(Array.isArray(value) && value.length === 0) {
		var a = [];
		a.push(value);
		if(length - 1 > 0) {
          return a.concat(buildList(value, length - 1));
		}
		return a;
	}
	return [].concat(value, (buildList(value, length -1)));
};


// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
	if(n <= 0) {
		return [];
	}
	if(n ===1) {
		return [].concat(fizzBuzz(n-1), n.toString());
	}
	if(n % 3 === 0 && n % 5 ===0) {
		return [].concat(fizzBuzz(n-1), "FizzBuzz");
	}
	if(n % 3 === 0) {
		return [].concat(fizzBuzz(n-1), "Fizz");
	}
	if(n % 5 ===0) {
		return [].concat(fizzBuzz(n-1), "Buzz");
	}

 	return [].concat(fizzBuzz(n-1), n.toString());
	
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if(array.length === 0) {
    return 0;
  }
  if(array.shift() === value) {
    return 1 + countOccurrence(array, value)
  }
  return countOccurrence(array, value)
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
	var arr = array.slice();
	if(arr.length ===0) {
		return [];
	}
	return [].concat(callback(arr.shift()), rMap(arr, callback));	
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var keys = Object.keys(obj);
  var result = keys.filter(k => k === key).length;
  for(var i = 0; i < Object.values(obj).length; i++) {
    if(typeof(Object.values(obj)[i]) === 'object') {     
       result += countKeysInObj(Object.values(obj)[i], key);
    }
  }
  return result;  
};


// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// 23. Write a function that counts the number of times a value occurs in an object.
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var values = Object.values(obj);
    var result = values.filter(v => v === value).length;
  	for(var i = 0; i < Object.values(obj).length; i++) {
    	if(typeof(Object.values(obj)[i]) === 'object') {     
       		result += countValuesInObj(Object.values(obj)[i], value);
    	}
  	}
  	return result; 
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	
	var keys = Object.keys(obj);
    for(var j = 0; j < keys.length; j++) {
    	if(keys[j] === oldKey) {
    		Object.defineProperty(obj, newKey,
        		Object.getOwnPropertyDescriptor(obj, oldKey));
    		delete obj[oldKey];
    	}
    }
    for(var i = 0; i < Object.values(obj).length; i++) {
    	if(typeof(Object.values(obj)[i]) === 'object') {     
       		replaceKeysInObj(Object.values(obj)[i], oldKey, newKey);
    	}
  	}
  	return obj;  

};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
	if(array.length ===0) {
		return [];
	}
	var arr = array;
	var str = arr[0].toUpperCase();
	arr.shift();
	return [].concat(str, capitalizeWords(arr))
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
    if(array.length === 0) {
      return []
    }
	var arr = array.slice();
	var subArr = arr[0].split('');
    subArr[0] = subArr[0].toUpperCase();
    arr.shift();
	return [].concat(subArr.join(''), capitalizeFirst(arr));

};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
	var values = Object.values(obj);
    var result = values.filter(el => el % 2 ===0);
    var sum = 0;
    for(var j = 0; j < result.length; j++) {
      sum += result[j];
    }
  	for(var i = 0; i < Object.values(obj).length; i++) {
    	if(typeof(Object.values(obj)[i]) === 'object') {     
       		sum += nestedEvenSum(Object.values(obj)[i]);
    	}
  	}
  	return sum; 
};
// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var result = [];
  if(!array.length) {
    return result;
  }
  for(var i = 0; i < array.length; i++ ) {
    if(Array.isArray(array[i])) {
       result = result.concat(flatten(array[i]));
    } else {
    	result = result.concat(array[i])
    }
  }
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {

};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
	if(array.length ===0) {
		return [];
	}
	var min = array[0];
	for(var i = 1; i < array.length;i++){		
		if(array[i] < min) {
			var min = array[i];
			var temp2 = min;

		}
	}

};


// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
