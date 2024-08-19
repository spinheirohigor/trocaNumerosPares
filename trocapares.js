var array = [1, 3, 4, 6, 80, 33, 23, 90];

function troca(array) {
    if (array.length === 0) {
        array[0] = -1;
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                (array[i] = 0);
            }
        }
    }
}

troca(array);
console.log(array);


