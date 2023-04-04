const app = express();

const notebooks = [
    {"id":1, "marca":"asus"},
    {"id":2,  "marca":"HP"},
]
app.get('/', (req,resp) => {
    res.status(200).send('API Loja'); 
})
app.get('/note', (req, res) =>{
    res.status(200).jason(notebooks)
})
export default app;
