function findMax(array) {
    if (array.length === 1) return array[0];
    let max = -Infinity;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > max) {
            max = element;
        }
    }
    console.log('max = ' + max);
    return max;
}

function findMin(array) {
    if (array.length === 1) return array[0];
    let max = Infinity;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element < max) {
            max = element;
        }
    }
    console.log('minimum = ' + max);
    return max;
}


function countMax(array, num) {
    if (array.length === 1) return 1;
    let max = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === num) {
            max++;
        }
    }
    console.log('count = ' + max);
    return max;
}


function replaceMax(array, num) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === num) {
            array[index] = -1;
        }
    }
    console.log('new array with -1 instead of max = ' + array);
    return array;
}

function checkALl(array) {
    let max = findMax(array);
    let min = findMin(array);
    if (max === min) return true;
    let check = false;
    for (let index = 0; index < array.length; index++) {

        if (array[index] !== min) {
            return check;
        }
    }
    check = !check;
    console.log('checking all have -1 = ' + check);
    return check;
}

function replaceWithMax(array, num) {
    let min = findMin(array);
    let check = checkALl(array, min);
    if (check) {
        return array;
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === -1) {
            array[index] = num;
        }
    }
    console.log('new array with new max instead of -1 = ' + array);
    return array;
}

function minimumCount(boxesInPiles) {
    let result = 0;
    let max = findMax(boxesInPiles);
    let min = findMin(boxesInPiles);
    let count = countMax(boxesInPiles, max);
    result += count;
    boxesInPiles = replaceMax(boxesInPiles, max);
    max = findMax(boxesInPiles);
    boxesInPiles = replaceWithMax(boxesInPiles, max);
    return result;
}


function pilesOfBoxes(boxesInPiles) {
    let answer = 0;
    let allReplaced;
    while (!allReplaced) {

        answer += minimumCount(boxesInPiles);
        allReplaced = checkALl(boxesInPiles);
    }

    return answer;
}
console.log(pilesOfBoxes([4, 5, 5, 2, 4])); --> 6