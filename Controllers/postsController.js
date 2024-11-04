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
function showPosts(req, res){
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

const store = (req,res) => {
    console.log(req);
    console.log(req.body);
    
    const post = {
        title:req.body.title,
		slug:req.body.slug,
        content:req.body.content,
        image:req.body.image,
        tags:req.body.tags,
    }
    posts.push(post)
    res.json({
        status:201,
        data: posts,
        counter: posts.length
    })
}

module.exports = {
    index,
    show,
    filterTags,
    store,
    showPosts
}

