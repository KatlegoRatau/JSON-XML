
var parseString = require('xml2js').parseString;
var js2xmlparser = require("js2xmlparser");

var xml = `<ussd>USSD APP<option1>1</option1>
        <option2>2</option2>
        </ussd>`

var xml2 = "<testThis>Hello Im here</testThis>"

          
parseString(xml, function (err, result) {
    console.log(result);
});
var obj = {
  "firstName": "John",
  "lastName": "Smith",
  "dateOfBirth": new Date(1964, 7, 26)
}
  

console.log(js2xmlparser.parse("person", xml));
console.log(js2xmlparser.parse("person", obj));
