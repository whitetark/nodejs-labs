// This function takes in two IP addresses in string format and calculates the number of IP addresses between them
function ipsBetween(start, end) {
  // Split the two IP addresses into arrays containing their individual octets
  let startArray = start.split('.')
  let endArray = end.split('.')

  // Find the first octet that differs between the start and end addresses
  let counter = 0
  for (let i = 0; i < startArray.length; i++) {
    if (startArray[i] != endArray[i]) {
      counter = i
      break
    }
  }

  // Remove the octets that are the same for both addresses
  startArray.splice(0, counter)
  endArray.splice(0, counter)

  // Calculate the difference between the corresponding octets of the start and end addresses
  let resultArr = []
  for (let i = 0; i < startArray.length; i++) {
    resultArr.push(parseInt(endArray[i]) - parseInt(startArray[i]))
  }

  // Calculate the total number of IP addresses between the start and end addresses
  let result = 0
  for (let i = 0; i < resultArr.length; i++) {
    result += resultArr[i] * 256 ** (resultArr.length - 1 - i)
  }

  // Output the result to the console
  console.log(result)
  return result
}

// Example calls to the function
ipsBetween('150.0.0.0', '150.0.0.1') //1
ipsBetween('10.0.0.0', '10.0.0.50') //50
ipsBetween('20.0.0.10', '20.0.1.0') //246
ipsBetween('10.11.12.13', '10.11.13.0') //243
ipsBetween('160.0.0.0', '160.0.1.0') //256
ipsBetween('170.0.0.0', '170.1.0.0') //65536
ipsBetween('50.0.0.0', '50.1.1.1') //65793
ipsBetween('180.0.0.0', '181.0.0.0') //16777216
ipsBetween('1.2.3.4', '5.6.7.8') //67372036
ipsBetween('0.0.0.0', '255.255.255.255') //2 ** 32 - 1
