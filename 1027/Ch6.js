//Exercise 6-1
const aurora ={
    name: "Aurora", 
    health: 150,
    strength: 25,
    xp: 0,

    describe() {
        return `${this.name} has ${this.health} health points and ${this
          .strength} as strength`;
      }
};


function exercise61(){
    console.log("This is Excersise 1")

    console.log("Aurora is harmed by an arrow");
    aurora.health -= 20;

    console.log("Aurora equips a strength necklace");
    aurora.strength += 10;
    
    console.log("Aurora learn a new skill");
    aurora.xp += 15;

    console.log(aurora.describe());
}


//Excercise 6-2
// TODO: create the dog object here

const dog={
    name: "fang",
    species: "boarhound",
    size: 75,

    bark(){
        return "Grrr! Grrr!";
    }

};

function exercise62(){
    console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
    console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
}


