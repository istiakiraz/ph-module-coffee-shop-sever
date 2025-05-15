const express = require('express');
const cors = require('cors');
const e = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('coffee sever is getting hotter')
});

app.listen(port, ()=>{
    console.log(`coffee server is running on port ${port}`);
})
