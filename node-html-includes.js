var fs = require('fs');

function builder(input, output) {
    output = output ? output : "";
    var matches = input.match(/\[\[.*?\]\]/g);
    if (matches) {
        var path = matches[0].replace(/\]|\[/g, "");
        var componentHTML = fs.readFileSync(path, 'utf8');
        var newHTML = input.replace(matches[0], componentHTML);
        return builder(newHTML, newHTML);
    } else {
        return output;
    }
}

module.exports = function(pathToDistDirectory, arrayOfFiles){
	arrayOfFiles.forEach(function(file) {
	    var contents = fs.readFileSync(file, 'utf8');
	    fs.writeFileSync(pathToDistDirectory + file, builder(contents))
	})
}

// use like...
// const builder = require('./node-html-includes');
// builder("path/to/dist/", ["index.html", "contact.html", "about.html"])
