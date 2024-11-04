const posts = require('../data/db.js')

function index(req, res){
    
    res.json({
        const ulEl = document.querySelector('.ul');
        data: posts.forEach(post => {
            const ulEl = document.querySelector('.ul');
            const markup = `
            <li>${post}</li>
            `
            ulEl.innerHTML += markup
        })
       

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

function filterTags  (req,res)  {
    const post = posts.filter(post => post.tags === req.params.tags);
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
    filterTags,
}

