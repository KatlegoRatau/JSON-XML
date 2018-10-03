
//Import XML parser
var parseString = require('xml2js').parseString;
//Import JSON parser
var js2xmlparser = require("js2xmlparser");


//XML string file
var xml = `<ussd>USSD APP<option1>1</option1>
        <option2>2</option2>
        </ussd>`

var xml2 = "<testThis>Hello Im here</testThis>"

//Convert From JSON OBject to XML and display result   
parseString(xml, function (err, result) {
    console.log(result);
});


let obj = {
  "fName": "Kat",
  "lName": "Ratau",
  "dOb": new Date(1980, 7, 26)
}
  

//Convert From JSON OBject to XML and display result

console.log(js2xmlparser.parse("person", obj));
