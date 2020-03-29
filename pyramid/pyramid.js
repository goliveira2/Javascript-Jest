

const number = 3;

const myPuramidFunc = {
    pyramid(number) {
        const midpoint = Math.floor((2 * number - 1) / 2);
        for (let row = 0; row < number; row++) {
            let level = '';

            for (let column = 0; column < 2 * number - 1; column++) {
                if (midpoint - row <= column && midpoint + row >= column) {
                    level += '#';
                } else {
                    level += ' ';
                }
            }
            console.log(level)
        }

    }
}

// console.log(myPuramidFunc.pyramid(number))

module.exports =  myPuramidFunc.pyramid