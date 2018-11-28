//---------------------------------------------------------------
// util.js - public function to log content to the console and text file
//---------------------------------------------------------------

var fs = require("fs");

//--------------------------------
// public function logContent() - utility function to log the content to the console and to the file log.txt
//--------------------------------
function logContent(content) {

    console.log(content);

    fs.appendFileSync("log.txt", content + "\n", function (err) {
        if (err) throw err;
      });	
}

// Public export
module.exports = logContent;
