const express = require('express');
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())



app.get("/", (req, res) => {
          res.send("This is Node Out Put")
})
const users = [
          {
                    id: 1,
                    name: "Jgodis Paul",
                    age: 16,
                    job: "Fermar"
          },
          {
                    id: 2,
                    name: "Jgodis pettar",
                    age: 15,
                    job: "Fermar"
          },
          {
                    id: 3,
                    name: "Hero Paul",
                    age: 13,
                    job: "Fermar"
          },
          {
                    id: 4,
                    name: "Fangas Paul",
                    age: 12,
                    job: "Fermar"
          },
          {
                    id: 5,
                    name: "Ferot Paul",
                    age: 25,
                    job: "Fermar"
          },
          {
                    id: 6,
                    name: "Sihab Paul",
                    age: 15,
                    job: "Fermar"
          }
]
const posts = [
          {
                    id : 1 ,
                    title :" Lorem ipsum dolor sit amet consectetur adipisicing elit " ,
                    des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, exercitationem cumque? Ducimus, aperiam molestiae blanditiis odio error nemo et laboriosam delectus repellendus necessitatibus, quaerat consequuntur. Similique maxime laborum veniam alias."
          },
          {
                    id : 2 ,
                    title :" Lorem ipsum dolor sit amet consectetur adipisicing elit " ,
                    des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, exercitationem cumque? Ducimus, aperiam molestiae blanditiis odio error nemo et laboriosam delectus repellendus necessitatibus, quaerat consequuntur. Similique maxime laborum veniam alias."
          },
          {
                    id : 3 ,
                    title :" Lorem ipsum dolor sit amet consectetur adipisicing elit " ,
                    des : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, exercitationem cumque? Ducimus, aperiam molestiae blanditiis odio error nemo et laboriosam delectus repellendus necessitatibus, quaerat consequuntur. Similique maxime laborum veniam alias."
          },
]
// --------------------------------------Get Data ----------------------------------
app.get ('/users',(req ,res)=>{
          console.log("Query" , req.query);
          if (req.query.name) {
                   const search = req.query.name.toLowerCase()
                   const result = users.filter(user => user.name.toLowerCase().includes(search)) 
                   res.send(result)
          }
         else{
          res.send(users)
         }
} )

app.get('/user/:id' ,(req ,res)=>{
          const id = req.params.id
          const user = users.find(u => u.id == id)
          res.send(user)
})
app.get('/posts' ,(req ,res) =>{
          res.send(posts)
})

app.get('/post/:postId', (req,res)=>{
          const postId = req.params.postId
          const post = posts.find(p => p.id == postId)
          res.send(post)
})

// ---------------------------------------------------Post Data ---------------------
app.post('/user' , (req ,res)=>{
          const user = req.body
          user.id  = users.length + 1
          users.push(user)
          res.send(user)
})


app.listen(port, () => {
          console.log("Helle Word I am useing Node", port);
})
