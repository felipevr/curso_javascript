const express = require('express');
const app = express();
const port = 3000;

//template
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//banco de dados
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/vendas', {useNewUrlParser: true});

const Produtos = mongoose.model('Produtos', {
    nome: String,
    vlUnit: Number,
    codigoBarras: String
});

//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));

app.get('/', (req, res) => res.send('Olá mundo!'));

app.get('/produtos', (req, res) => {
    let produtos = Produtos.find({}, (err, produtos) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro ao consultar produtos.");
        }
        //console.log(produtos);
        return res.render('produtos', {title: 'Lista de Produtos', produtos: produtos});
    })
    
});

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}`));