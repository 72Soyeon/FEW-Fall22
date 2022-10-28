//exercise 1

function exercise81(){
    //Word info
    //Write a program that asks you for a word then shows its length, lowercase, and uppercase values.

    let word = prompt("What is your word?: ");

    let lowercaseWord = word.toLowerCase();
    let uppercaseWord = word.toUpperCase();

    console.log(`The uppercase of your word is ${uppercaseWord}, and the lowercase of your word is ${lowercaseWord}`);
    return lowercaseWord, uppercaseWord;
}

//exercise 2: Vowel count
//Improve the previous program so that it also shows the number of vowels inside the word.

function exercise82(){
    let word = prompt("What is your word?: ");
    let vowelNumber = 0;
    let wordLength = word.length;


    for (i=0;i<wordLength;i++){
        if (word[i]=="a" || word[i]=="e" || word[i]=="i" || word[i]=="o" || word[i]=="u"){
            vowelNumber+=1;
        }
    }
    
    console.log(vowelNumber);
}

