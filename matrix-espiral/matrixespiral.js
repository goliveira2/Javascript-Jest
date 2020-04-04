const n = 3;

const myMatrixFunc = {
    matrix(n){
        const results = []
        for( let i = 0 ; i < n ; i++){
            results.push([])
        }
        let counter  = 1;
        let startColumn = n -1;
        let endColumn = 0;
        let startRow = 0;
        let endRow = n - 1;
        while (startColumn <= endColumn && startRow <= endRow){
            for(let i =  startColumn; i <= endColumn ; i++){
                results[startRow][i] = counter;
                counter++
            }
            startRow++;

            for (let i = startRow; i <=  endRow; i++){
                results[i][endColumn] = counter;
                counter++;
            }
            endColumn--;
            
            for(let i = endColumn; i >= startRow; i--){
                results[endRow][i] = counter;
                counter++;
            }
            endRow--;
            for(let i =  endRow; i >= startRow; i--){
                results[i][startColumn] = counter;
                counter++;
            }
            startColumn++;
        }
        return results;
    }
}

module.exports = myMatrixFunc.matrix