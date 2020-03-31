const str = 'gabriel'

const myFindvowelsFunc = {
    findVowels(str){
        let counter = 0;
        const checker = ['a', 'e', 'i', 'o', 'u'];

        for(let char of str.toLowerCase()){
            if(checker.includes(char)){
                counter++
            }
        }
        return counter
    }
}

// console.log(myFindvowelsFunc.findVowels(str))

module.exports = myFindvowelsFunc.findVowels