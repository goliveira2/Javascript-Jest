const name = 'Gabriel';
const number = 1234;

const myReversalFunc = {
    reverseString1(name) {
        return name.split('').reverse().join('');
    },
    reverseString2(name) {
        let reversed = '';
        for (let charactere of name) {
            reversed = charactere + reversed;
        }
        return reversed;
    },
    reverseString3(name) {
        let reversed = '';
        for (let i = 0; i < name.length; i++) {
            reversed = name[i] + reversed;
        }
        return reversed;
    },
    reverseString4(name) {
        return name.split('').reduce((rev, char) => char + rev);
    },
    reverseInt(number) {
        const reversed = number.toString().split('').reverse().join('');
        return parseInt(reversed) * Math.sign(number);
    }
}

module.exports = myReversalFunc
