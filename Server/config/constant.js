const dotenv = require("dotenv")
dotenv.config({path:__dirname+'/./../../.env'})


module.exports = {
    CLIENT_KEY, 
    CLIENT_SECRET,
    TOKEN,
    PORT,
} = process.env