const name = 'Mirim'
const myPalindromeFunc = {
    palindrome1(name){
        let reversed =  name.split('').reverse().join('').toLowerCase();
        return reversed === name.toLowerCase() ? true : false; 
    },
}

// console.log(myPalindromeFunc.palindrome1(name))

module.exports = myPalindromeFunc