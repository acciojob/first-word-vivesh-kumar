function firstWord(s) {
  // your code here
	let patt =s.slice(0, s.indexOf(" ") !== -1 ? s.indexOf(" ") : s.length);
	return patt;
}

// Do not change the code below


const s = prompt("Enter String:");
alert(firstWord(s));


