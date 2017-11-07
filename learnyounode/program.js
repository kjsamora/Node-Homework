/* var result = 0;
for (var i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}
console.log(Number(result)); */

/* const fs = require('fs');

const contents = fs.readFileSync(process.argv[2]);
const lines = contents.toString().split('\n').length - 1;
console.log(lines); */

/* const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
}) */

/*
var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function(err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
});
*/
