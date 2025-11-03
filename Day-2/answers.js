// 3.Add a number to end of array

var arr = [1,2,3,4,5]
arr.push(6);

console.log(arr)

// 4 . Remove the first number from the array.
arr.shift();
console.log(arr)

// 5. Insert a number at a specific index.
var arr2 = [50,60,70,80,90]

var indexForInsertion = 4;
arr2.splice(indexForInsertion-1,0,121);

console.log(arr2);


// 6. Replace all occurrences of a number with another number.
var arr3 = [87,65,90,4,4,9,7,2,4,97,23,31,4];

var numberToReplace = 4;
var newValue = 23;

for(let i=0; i<arr3.length; i++){
    if(arr3[i] === numberToReplace){
        arr3[i] = newValue;
    }
}
console.log(arr3)


//Another way
numberToReplace = 23;
newValue = 77;

arr3.forEach((value, index)=>{
    if(value === numberToReplace){
        arr3[index] = newValue;
    }
});

console.log(arr3);

// 7. Sort the array in ascending order(without using sort())
var arr5 = [23,56,98,12,45,89,23,101];
function sortArray(arr5){
    for(var i=0; i<arr5.length; i++){
        var minElementIndex = i;

        for(var j=i+1; j<arr5.length; j++){
            if(arr5[j] < arr5[minElementIndex]){
                minElementIndex = j;
            }
        }
        var temp = arr5[minElementIndex];
        arr5[minElementIndex] = arr5[i];
        arr5[i] = temp;
    }
}

sortArray(arr5)
console.log(arr5);


// 8. Reverse the array.(without using reverse())
var arr4 = [23,56,98,12,45,89,23,101];
var i=0,j = arr4.length-1;

while(i<=j){
    var temp = arr4[i];
    arr4[i] = arr4[j];
    arr4[j] = temp;

    i++;
    j--;
}

console.log(arr4);



// 9. Find the index of a specific number.
var arr6 = [21,90,34,14,5]
var idx = arr6.indexOf(90);

console.log(idx);



