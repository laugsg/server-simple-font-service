const bodyParser = require('body-parser')
const express = require('express');
const path = require('path')
const app = express();

app.use( bodyParser.urlencoded({extended:false}) )
app.use( bodyParser.json() )


const fontPath = path.join(__dirname, 'public','fonts', 'finalLibraryFont.ttf')
app.use(express.static(fontPath))
// console.log("path.join(__dirname, 'public')", fontPath)


app.get('/', (req,res) => res.send("server"))
app.use('/finalLibraryFont', (req,res) => res.sendFile(fontPath))

const port = "3001"
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





