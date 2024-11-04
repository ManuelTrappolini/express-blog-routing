const posts = require('../data/db.js')

function index(req, res){
    
    let markup = ''
    posts.forEach(post => {
        const { title, slug, content, image, tags } = post;
        return markup += `
            <li>${title}</li>
        `
    });
    return res.send(`${markup}`)
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

