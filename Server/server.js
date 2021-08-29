

const express = require("express")
const app = express()

const PORT = 6000 || process.env

const connectApp = require("./connect-database")

connectApp()


app.listen( PORT, () => {
    console.log('Starting Expense Tracker App...')
})