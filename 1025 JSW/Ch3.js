//Chapter 3 month question: 
// Write a program that accepts a month number (between 1 and 12),
// then shows the number of days of that month. Leap years are excluded.
// Incorrect inputs must be taken into account.

function exercise3(){
let month = Number (prompt("Enter month in number: "));

switch (month) {
    case 1:
        console.log("January has 31 days");
        break
    case 2:
        console.log('February has 28 days');
        break;
    case 3:
        console.log("March has 31 days");
        break
    case 4:
        console.log('April has 30 days');
        break;
    case 5:
        console.log("May has 31 days");
        break
    case 6:
        console.log('June has 30 days');
        break;
    case 7:
        console.log("July has 31 days");
        break
    case 8:
        console.log('August has 31 days');
        break;
    case 9:
        console.log("September has 30 days");
        break
    case 10:
        console.log('October has 31 days');
        break;
    case 11:
        console.log("November has 30 days");
        break
    case 12:
        console.log('December has 31 days');
        break;
    default:
        console.log('${month} is not a valid input');
  }

}