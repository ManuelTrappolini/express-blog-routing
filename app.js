/* Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
Tutte le risposte saranno in json.
All'interno creare le seguenti rotte:
/ - index: ritornerà un html con una ul che stamperà la lista dei post
/:slug - show: tramite il parametro dinamico che rappresenta lo slug del post, ritornerà un json con i dati del post
Scrivere tutte le funzioni delle rotte nel controller dedicato
Registrare il router dentro app.js con il prefisso posts/.
Bonus
Creare inoltre un filtro in querystring per tag, che ritorna in formato json tutti i post che hanno quei tag
Aggiungi il metodo store per la creazione di un nuovo post */

const express = require('express')
const app = express();
const PostsRouter = require('./routes/posts.js')
const postsController = require('./Controllers/postsController.js')
app.use(express.json())
const HOST = 'http://127.0.0.1';
const PORT = 3009;
app.use(express.static('public'))


app.listen(PORT,() =>{
    console.log(`Use this link ${HOST}:${PORT}`);
    
})

app.get('/', postsController.index)

app.use('/posts', PostsRouter)