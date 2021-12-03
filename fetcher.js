//request, writeFile
let args = process.argv.slice(2);
console.log(args[0]);
const fs = require("fs");
const request = require("request");
request(args[0], function (error, response, data) {
  // console.error("error:", error); // Print the error if one occurred
  // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  // console.log("body:", data); // Print the HTML for the Google homepage.
  fs.writeFile(args[1], data, function (err) {
    if (err) throw err;
    console.log(`Downloaded and saved ${data.length} bytes to ${args[1]}`);
  });
});


