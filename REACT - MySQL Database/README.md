npm install express nodemon cors mysql

Need to install mysql,
const mysql = require('mysql')

to connect to database:
const db = mysql.createConnection({
  host: " " ,
  user: " " ,
  password: " " ,
  database: " " ,
})



Express is the API to retrieve and pass data to mySQL
There are request response headers:
app.get('FILEPATH', (req, res, next) => {
}



cors is used 
Cross-origin resource sharing (CORS) is a mechanism that allows a web page to access restricted resources from a server on a domain different than the domain that served the web page. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.




Nodemon automatically restarts server when file changes are made and saved
