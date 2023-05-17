const express = require("express")
const app = express()
const PORT = 5000
app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))

const connectDB = require("./db");
connectDB();

const server = app.listen(PORT, () =>
    console.log(`Server Connected to port ${PORT}`)
)

process.on("unhandledRejection", err => {
    console.log(`An error occurred: ${err.message}`)
    server.close(() => process.exit(1))
})

