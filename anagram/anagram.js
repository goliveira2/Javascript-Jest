const stringA = 'rail safety';
const stringB = 'fairy tales';

const myAnagramFunc = {
    anagram1(stringA, stringB){
        const aCharMap = this.buildCharMap(stringA);
        const bCharMap = this.buildCharMap(stringB);

        if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
            return false;
        }

        for (let char in aCharMap){
            if (aCharMap[char] !== bCharMap[char]){
                return false;
            }
        }
        return true;
    },
    buildCharMap(str){
        const charMap = {};
        for(let char of str.replace(/[^\w]/g, '').toLowerCase()){
            charMap[char] = charMap[char] + 1 || 1;
        }
        return charMap;
    },
    anagram2(stringA,stringB){
        return this.cleanString(stringA)===this.cleanString(stringB)
    },
    cleanString(str){
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    }

    
}

// console.log(myAnagramFunc.anagram(stringA, stringB))

module.exports =  myAnagramFunc