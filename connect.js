import express from 'express';

// Rota para servir o arquivo index.js
function Iniciar(){
    const app = express();
    const port = 8000;
    app.get('/', (req, res) => {
        res.send("Ola mundo")
    });
    
    // Inicia o servidor na porta 8000
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}....`);
    });
}

export { Iniciar };
