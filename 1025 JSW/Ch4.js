function exercise4() {
    let userAnswer = askingQuestion();

    if (userAnswer==="yes"){
        console.log ("Me too.");
    }else if (userAnswer==="no"){
        console.log("That's great!");
    }
}

function askingQuestion(){
    console.log("Have you ever felt like a plastic bag?");
    let answer = prompt("Type yes or no: ");

    while (answer!="yes" || answer!="no"){
        console.log("Wrong input!");
        console.log("Have you ever felt like a plastic bag?");
        answer = prompt("Type yes or no: ");

        if (answer==="yes" || answer ==="no"){
            break;
        }
    }

    return answer;
}