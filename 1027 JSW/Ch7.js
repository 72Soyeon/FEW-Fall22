//exercise 1


function exercise71(){
    let sum = 0;
    let values = [3, 11, 7, 2, 9, 10];

    for (i=0;i<values.length;i++){
        sum += values[i];
    }
    console.log (sum);
}


//exercise 2
function exercise72(){
    let values = [3, 11, 7, 2, 9, 10];

    let max = 0;

    for (i=0;i<values.length;i++){
        if (max<values[i]){
            max=values[i];
        }
    }

    console.log(max);
}