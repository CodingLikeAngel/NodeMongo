const express = require('express');
const app = express();

// const session = require('express-session');
const MongoClient = require('mongodb').MongoClient;
// const ejs = require('ejs');
// app.set('view engine', 'ejs');
// app.set('views', './views');
// const jwt = require('jsonwebtoken');


// app.use(session({
//     secret: 'mi-clave-secreta',
//     resave: false,
//     saveUninitialized: true
// }));

 const mongodbUri = "mongodb://mi-contenedor-mongodb:27017/mi-base-de-datos"; //process.env.MONGODB_URI;

const conectarBD = async () => {
    const client = new MongoClient(
        mongodbUri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    await client.connect();
    return client.db('mi-base-de-datos');
};


const insertarUsuario = async (usuario = "admin", contrasena = "admin") => {
    const db = await conectarBD();
    const coleccion = db.collection('usuarios');
    await coleccion.insertOne({ usuario, contrasena });
};


// const autenticar = async (usuario = "admin", contrasena = "admin") => {
//     const db = await conectarBD();
//     const coleccion = db.collection('usuarios');
//     const resultado = await coleccion.findOne({ usuario, contrasena });
//     if (resultado) {
//         const token = jwt.sign({ usuario }, 'mi-clave-secreta');
//         return token;
//     }
//     return null;
// };


// app.get('/login', async (req, res) => {
//     // const { usuario, contrasena } = req.body;
//     const token = await autenticar("admin", "admin");
//     if (token) {
//         res.send({ token });
//     } else {
//         res.status(401).send('Usuario o contraseña inválidos');
//     }
// });

// app.get('/insert', async (req, res) => {
//     // const { usuario, contrasena } = req.body;
//     await insertarUsuario("admin", "admin");
//     res.send('Usuario insertado' + "admin");
// });

// const uri = "mongodb://mi-contenedor-mongodb:27017/mi-base-de-datos";

// const conectarBD = async () => {
//     const client = new MongoClient(
//         uri,
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         }
//     );
//     await client.connect();
//     return client.db('mi-base-de-datos');
// };



app.get('/insert', async (req, res) => {
    // const { usuario, contrasena } = req.body;
    await insertarUsuario("admin", "admin");
    res.send('Usuario insertado' + "admin");
});


app.get('/', (req, res) => {
    res.send('angeeeeeeeeeeeeeeeeeeeeeeeeeeel');
});



app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});


// app.get('/index', (req, res) => {
//     res.send('Esta es la página de índice');
// });

// app.get('/home', (req, res) => {
//     if (req.session.autenticado) {
//         res.send('Bienvenido a la página principal');
//     } else {
//         res.send('no session authenticated');
//     }
// });


// app.get('/ejs', (req, res) => {
//     res.render('index', {
//         title: 'Mi sitio web',
//         stylesheet: './public.styles.scss'
//     });
// });