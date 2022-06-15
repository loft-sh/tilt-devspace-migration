const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
        </head>
        <body>
            <div class="container">
                <h1>Hi there</h1>
                <div>
                    <p><mark>This</mark> is some text</p>
                </div>
            </div>
        </body>
    </html>
    `)
})

app.listen(port, () => console.log("Example app listening on http://localhost:" + port))
