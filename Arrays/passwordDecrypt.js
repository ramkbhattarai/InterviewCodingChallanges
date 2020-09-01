function checkIfLetter(char) {
    return char.toUpperCase() !== char.toLowerCase();
}
function checkIfLetterIsCapital(char) {
    if (!char) return false;
    return char.toUpperCase() === char;
}
function checkIfLetterIsSmall(char) {
    if (!char) return false;
    return char === char.toLowerCase();
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j] = temp;
    return arr;
}

function swapIfNecessary(arr){
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i];
        let nextLetter = arr[i + 1];
        if (checkIfLetter(letter)) {
            if (checkIfLetterIsCapital(letter) && checkIfLetterIsSmall(nextLetter)) {
                arr = swap(arr, i, i + 1);
                i += 2;
            }
        } 
    }
    return arr;
}

    function removeStar(arr){
        arr.forEach((element, i) => {
            if (element === '*') arr.splice(i, 1);
        });
        return arr;
    }

    
    function changeNumbers(arr){
        for (let i = 0; i < arr.length; i++) {
            let letter = arr[i];
            if (!checkIfLetter(letter) && arr.includes('0')) {
               
                let index = arr.lastIndexOf('0');
                // console.log('before-swap=' + arr);
                arr = swap(arr, i, index);
                // console.log('after-swap=' + arr);
                arr.splice(i, 1);
                i--;
                
            }

        }

        
        return arr;
    }
// console.log(changeNumbers(['5', '1', 'a', 'P', '0', 'p', 'L', '0', 'e']))

function decryptPassword(s) {
    let arr = s.split('');
    
    arr = swapIfNecessary(arr);
   
    arr = removeStar(arr);
   
    // console.log('before-change=' + arr)
    arr = changeNumbers(arr);
    // console.log('after-change=' + arr)
    return arr.join('');

}

console.log(decryptPassword('51Pa*0Lp*0e')); //aP1pL5e
