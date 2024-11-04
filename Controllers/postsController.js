const posts = require('../data/db.js')

function index(req, res){
    res.json({
        data:posts,
        count:posts.length
    })
}

function show  (req,res)  {
    const post = posts.find(post => post.slug === req.params.slug);
    if(!post){
        return res.status(404).json({
            error: "404! not found"
        })
    }
    return res.status(200).json({
        data: post
    })
}

module.exports = {
    index,
    show,
    
}