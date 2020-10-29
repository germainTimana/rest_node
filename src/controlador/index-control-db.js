//importacion conexiones bases de datos
const { request } = require('express');
const { Pool, Query } = require('pg');

const pool = new Pool({
host: 'localhost',
user: 'postgres',
password:'root',
database: 'citas',
port: '5432'

});

const getUsers = async (req,res)=> {

    try {
        const response = await pool.query('SELECT * FROM users');
        res.status(200).json(response.rows);
        //res.json({msg:'mensaje de conexion exitosa....'})
        console.log(response.rows);

        //res.send('se optienen Usuarios');
    } catch (e) {
        res.send(e);
        console.log(e)
    }
};

const getUserByid = async (req, res) => {
    try {
        
        const response = await pool.query('SELECT * FROM users where id = $1', [req.params.param]);
        if (response.rowCount==0) {
            console.log(res.send("Usuario no encontrado"));
        }
        res.status(200).json(response.rows);
        //res.json({msg:'mensaje de conexion exitosa....'})
        //res.send("Usuario por ID");
    } catch (e) {
        res.send( e.detail);
        console.log(e.detail); 
    }
};

const createUsers = async (req, res)=> {
    try {
        const {name, email} = req.body;
    const response = await pool.query( 'INSERT INTO users (name , email) VALUES ($1 , $2)',[req.body.name, req.body.email]); 
    res.send('usuario creado....');
    console.log(response);
    //res.send('se crean Usuarios,,', [name, email]);
    } catch (e) {
        res.send( e.detail);
        console.log(e.detail);
    }
};

const updateUser = async (req, res) =>{
    const id = req.params.param;
    try {
        const response = await pool.query('UPDATE users SET name =$1 , email= $2 WHERE id=$3',
                                        [req.body.name, req.body.email, id]);
        
        if (response.rowCount==0) {
            res.send('usuario No encontrado....');
        }else{
            res.send('usuario Actualizado....');
        }
        
        console.log(response);
   } catch (e) {
        res.send( e.detail);
        console.log(e.detail);
   }
};


module.exports = {
    getUsers,
    createUsers,
    getUserByid,
    updateUser
}