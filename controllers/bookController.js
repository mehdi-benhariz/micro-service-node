const fetch = require('node-fetch')

exports.getAll=(req,res)=>{
    fetch('http://localhost:3001/',{method:"GET"})
    .then(x=>x.json())
    .then(books=>{res.send(books)})
    .catch(err=>console.log(err))
}

exports.getOne=(req,res,next)=>{
    const {id}=req.query;
    fetch('http://localhost:3001/one?id='+id,{method:'GET' } )
    .then(x=>x.json())
    .then(result=>res.send(result))
    .then(()=>next())
    .catch(err=>console.log(err))
}

exports.update=(req, res) => {
    
}

exports.delete=(req,res)=>{

}

exports.create=(req,res)=>{
    const {book}={name:"",author:""};

    fetch('http://localhost:3001/',{method:'POST' ,body:JSON.stringify(book),}
   )
   .then(x=>x.json())
   .then(result=>console.log(result))
   .catch(err=>console.log(err))
}

