//console.log('welcome to node')
const httpModule = require('http')
const fsModule = require('fs')
const pathModule = require('path')

// import httpModule from 'http'
// import fsModule from 'fs'
// import pathModule from 'path'

//creatng RESTful API server application
//(RESTful API => Representational State Transfer Application Programming Interface)

const processRequest = function (req, res) {
    console.log('request received')

    const filePath = pathModule.resolve('data.json')
    fsModule.readFile(
        filePath,
        { encoding: 'utf-8' },
        function (error, data) {
            if (error)
                console.log(error.message)

            if (data)
                //console.log(data)
                res.end(data)
        }
    )
    //res.end('welcome to server app')

}
const serverObj = httpModule.createServer(processRequest)

serverObj.listen(
    4000,
    function () {
        console.log(`server is running using url: http://localhost:4000/posts`)
    }
)
