var raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber)

// early vs late registration
var earlyRegistration = 'true';
 
if (earlyRegistration === 'false') {
    console.log('early registration');
 } else {
    console.log('late registration');
 }
 // runners age
 var runnersAge = 36;

 if (runnersAge >= 18 && earlyRegistration === 'true') {
    console.log(raceNumber += 1000);
 }
 if (runnersAge >= 18 && earlyRegistration === 'true') {
    console.log(`You will race at 9:30AM #${raceNumber}`)
 } else if (runnersAge >= 18 && earlyRegistration === 'false') {
    console.log(raceNumber, 'you race will begin at 11AM');
 }
//youth registrants run at 12:30P.M. (regardless of registration

if (runnersAge < 18) {
    console.log(raceNumber,'your race will begin at 12:30 p.m.');
}
