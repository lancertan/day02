//load libraries
const express = require('express')

//configure the environment (read from 2nd var in command line, look for an environment element names APP_PORT or default 3000)
const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000

// create an instance of express
const app = express()




//configure the application
app.use(
    express.static(__dirname+ '/static')
)

const dice = [
    { name: 'dado-1.png'},
    { name: '2_dice.png'}, 
    { name: 'tree_dots.png'},
    { name: 'four.png'},
    { name: 'Five-Image.png'},
    { name: 'dice-showing-6.png'}
]

app.get('/roll',
    (req, resp) => {
            count = 1
            resp.status(200)
            resp.type('text/html')
            resp.render('roll',
            {
                dice1: dice[1]
            })
    })

 //
app.use(
    (req,resp) => {
    resp.status(404)
    resp.type('text/html')
    resp.sendFile(__dirname + '/static/index.html')
    //resp.redirect('/404.html')   
    }
)
    //start the server
app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`)
  })