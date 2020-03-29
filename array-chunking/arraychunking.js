const array = [1,2,3,4,5];
const size = 4;

myArrayChunkingFunc = {
    chunk(array, size){
        const chunked = [];
       let index = 0;

       while(index < array.length){
           chunked.push(array.slice(index, index + size));
           index += size;
       }

       return chunked;
    }
}

module.exports = myArrayChunkingFunc.chunk