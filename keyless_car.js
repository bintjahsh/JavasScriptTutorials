// function driverLicense(age){
//     if (age === 18){
//         alert("Welcome to your first ride! Enjoy it!");
//     } else if(age > 18){
//         alert("Welcome back! Expert driver.");
//     }
//     else{
//         alert("You are too young to drive.");
//     }
// };
// function drive(){
//     var age = prompt("How old are you?");
//     driverLicense();
// }
// drive();
function driverLicense(age){
	var age = prompt("how old are you?");
    if ( Number(age) === 18){
		alert("Congratulations on your first year of driving. Enjoy the ride!");
    } else if( Number(age) > 18){
        alert("Powering On. Enjoy the ride!");
    }
    else{
        alert("Sorry, you are too young to drive this car. Powering off");
		
    }
};
driverLicense();