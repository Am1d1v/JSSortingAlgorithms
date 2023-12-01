

function bubbleSort(array){

    for (let i = 0; i < array.length; i++) {
        for (let i = 0; i < array.length; i++) {
            if(array[i] > array[i + 1]){
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    console.log(array);
}
const arr = [2, 1, 4, 3]
const arr2 = [0, -10, 19, 5, 92, 102, -90, 32, 94, - 100, 100, 54, - 42]

bubbleSort(arr);
bubbleSort(arr2);