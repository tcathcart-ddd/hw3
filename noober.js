// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // assign values from ride json to local variables
  let pickup = ride.pickupLocation.address + ", " + ride.pickupLocation.city + ", " +  ride.pickupLocation.state + " " + ride.pickupLocation.zip
  let dropoff = ride.dropoffLocation.address + ", " + ride.dropoffLocation.city + ", " +  ride.dropoffLocation.state + " " + ride.dropoffLocation.zip
  let passNum = ride.numberOfPassengers
  let passName = ride.passengerDetails.first + " " + ride.passengerDetails.last
  let phoneNumber = ride.passengerDetails.phoneNumber
  let purple = ride.purpleRequested

  // build string 
  let string = "Passenger: " +
    passName + " - " + phoneNumber + ". " +
    "Pickup at " + pickup + ". " +
    "Drop-off at " + dropoff + ". " +
    passNum + " passengers."

  // check level of service
  // if noober purple then
  if (purple) {
    // prepend noober purple
    string = "Noober Purple " + string
  }
  // elif > 3 passengers then
  else if (passNum > 3) {
    //prepend noober xl 
    string = "Noober XL " + string
  }
  else {
    string = "Noober X " + string
  }
  console.log(string)
  
  // 🔥 YOUR CODE ENDS HERE 🔥
})
