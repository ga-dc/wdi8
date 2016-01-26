var fs = require("fs");
fs.readFile(__dirname + "/../lessons.json", 'utf8', function(err,data){
  var lessons = JSON.parse(data);
  var readme = "# WDI8 \n"
  lessons.forEach(function(lesson){
    readme += "## " + lesson.title + "\n"
    lesson.classes.forEach(function(klass){
      console.log(klass) 
      readme += "- ["+klass.title+"]("+klass.url+")\n"
    })
    readme += "\n"
  })
  fs.writeFile(__dirname + "/../readme.md", readme )
})