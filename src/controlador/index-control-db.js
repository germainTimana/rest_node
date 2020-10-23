//importacion conexiones bases de datos
const { Pool,Query } = require('pg');

const pool = new Pool({
host: 'localhost',
user: 'postgres',
password:'root',
database: 'data001',
port: '5432'

});

const getUsers = async (req, res)=> {
    const response = await pool.query('SELECT * FROM users');
    res.status(200).json(response.rows);
    console.log(response.rows);

    //res.send('se optienen Usuarios');
};

const createUsers = async (req, res)=> {
    const {name, email} = req.body;
    const response = await pool.query( 'INSERT INTO users (name , email) VALUES ($1 , $2)',[name, email]); 
    res.send('usuario creado....');
    console.log(response);

    //res.send('se crean Usuarios,,', [name, email]);
};




module.exports = {
    getUsers,
    createUsers
}