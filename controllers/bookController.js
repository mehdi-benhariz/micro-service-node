const fetch = require('node-fetch')

exports.getAll= (req,res,next)=>{
    console.log("get all")
   fetch('http://localhost:3001/',{method:"GET"})
   .then((x)=>x.json())
   .then((todos)=>{
    res.send(todos)
        next()
   })
  .catch((err)=>console.log(err))
    
}

exports.getOne=(req,res,next)=>{
    const {id}=req.query;
    fetch('http://localhost:3001/one?id='+id,{method:'GET' } )
    .then(x=>x.json())
    .then(todo=>{
        res.send(todo)
        next()
    })
    .catch(err=>console.log(err))
}

exports.update=(req, res,next) => {
  const newT = req.body;
  const {id}=req.query;
  const tId = parseInt(id)
  
  console.log(req.body)
  fetch(`http://localhost:3001/?id=${tId}`, {
  method: 'PUT',
  body: JSON.stringify(newT),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(() => {
    res.send(newT)
    next();
  }); 
}

exports.remove=(req,res,next)=>{
    console.log("delete")
    const {id} = req.query;
    tId=parseInt(id)
    fetch(`https://jsonplaceholder.typicode.com/todos/${tId}`,{method:'DELETE'})
    .then(()=>res.send("deleted"))
    .catch((err)=>send(err))
}

exports.create=(req,res,next)=>{
    console.log("created")
    const newT = req.body;

    fetch('http://localhost:3001/',{
        method: 'POST',
        body: JSON.stringify(newT),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          res.send(json)
          next();
        });
}

