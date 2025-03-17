function firstWord(s) {
  // your code here
	let patt =([^\s]+);
	return patt.test(s);
}

// Do not change the code below


const s = prompt("Enter String:");
alert(firstWord(s));

