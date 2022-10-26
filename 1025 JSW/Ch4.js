console.log("Have you ever felt like a plastic bag?");

let answer = prompt("Type yes or no: ");

if (answer==="yes"){
    console.log ("Me too.");
}else if (answer==="no"){
    consol.log("That's great!");
}else{
    while(answer!=="yes" || "no"){
        console.log("Have you ever felt like a plastic bag?");
        let answer = prompt("Type Yes or No: ");
    }
}
