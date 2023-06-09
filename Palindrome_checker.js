function palindrome(str) {
	let str1 = str.toLowerCase().replace(/[^a-z0-9]/g, '');
	return str1 == str1.split('').reverse().join('');
}

console.log('eye: ', palindrome('eye'));
console.log('_eye: ', palindrome('_eye'));
console.log('race car: ', palindrome('race car'));
console.log('not a palindrome: ', palindrome('not a palindrome'));
console.log(
	'A man, a plan, a canal. Panama: ',
	palindrome('A man, a plan, a canal. Panama')
);
console.log('never odd or even: ', palindrome('never odd or even'));
console.log('nope: ', palindrome('nope'));
console.log('almostomla: ', palindrome('almostomla'));
console.log('My age is 0, 0 si ega ym.: ', palindrome('My age is 0, 0 si ega ym.'));
console.log('1 eye for of 1 eye.: ', palindrome('1 eye for of 1 eye.'));
console.log('0_0 (: /- :) 0-0: ', palindrome('0_0 (: /- :) 0-0'));
console.log('five|_/|four: ', palindrome('five|_/|four'));
