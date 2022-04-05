const {pool}=require("../database");

const insertasistencia=async(req,res)=>{
  try {
    const {fecha,hora,estado,id_persona,id_servicio}=req.body;

    const queryText1="INSERT INTO asistencia(fecha,hora,estado,id_persona,id_servicio) VALUES($1,$2,$3,$4,$5);";
    const values1=[fecha,hora,estado,id_persona,id_servicio];
    
    const response1=await pool.query(queryText1,values1);      
    
    res.status(200).json({message:"Asistencia Agregada"});
  } catch (e){
    console.log(e);
  }
};
const insertaridiomas=async(req,res)=>{
  try {
    const {descripcion,nivel,id_persona}=req.body;

    const queryText1="INSERT INTO idiomas(descripcion,nivel,id_persona) VALUES($1,$2,$3);";
    const values1=[descripcion,nivel,id_persona];

    const response1=await pool.query(queryText1,values1);      

    res.status(200).json({message:"insert idioma"});
  } catch (e){
    console.log(e);
  }
};
const insertgrado_instruccion=async(req,res)=>{
  try {
    const {grado,descripcion,id_persona}=req.body;

    const queryText1="INSERT INTO grado_instruccion(grado,descripcion,id_persona) VALUES($1,$2,$3);";
    const values1=[grado,descripcion,id_persona];

    const response1=await pool.query(queryText1,values1);      

    res.status(200).json({message:"insert grado e intruccion"});
  } catch (e){
    console.log(e);
  }
};
const insert_profesion_ocu=async(req,res)=>{
  try {
    const {descripcion,id_persona}=req.body;

    const queryText1="INSERT INTO profesion_ocupacion(descripcion,id_persona) VALUES($1,$2);";
    const values1=[descripcion,id_persona];

    const response1=await pool.query(queryText1,values1);    
    res.status(200).json({message:"insert profesion y ocupacion"});  
  } catch (e){
    console.log(e);
  }
};

module.exports={
    insertasistencia,
    insertaridiomas,
    insertgrado_instruccion,
    insert_profesion_ocu,
};
