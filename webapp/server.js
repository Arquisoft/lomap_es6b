import express,{Application} from 'express'; 
//for using an import here we need to configure the tsconfig.json
//setting the option module to commonjs

var app = express()
const port = 3000;

app.use(express.static('build'))

app.listen(port, () => {
    console.log('Webapp started on port '+ port);
}).on("error",(error)=>{
    console.error('Error occured: ' + error.message);
});