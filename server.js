const bodyParser = require('body-parser')
const express = require('express');
const app = express();

app.use( bodyParser.urlencoded({extended:false}) )
app.use( bodyParser.json() )


const path = require('path')
const fontPath = path.join(__dirname, 'public','fonts', 'finalLibraryFont.ttf')
app.use('/finalLibraryFont', app.use(express.static(fontPath)))


app.get('/', (req,res) => res.send("server"))

const port = process.env.PORT || 80

async function appInit( app, port ){
  try {
    await app.listen(
        port,
      () => console.log(`listen at: ${port}`)
    )
  }
  catch(e){
    console.error(`ERROR at app.js in appInit: ${e.message}`);
  }
}

appInit( app, port )





