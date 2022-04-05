const {pool}=require("../database");

const getMiembros=async(req,res)=>{
  try{
    const queryText="SELECT * FROM persona as P JOIN miembro as M  ON P.id = M.id_persona ORDER BY M.id_persona ASC;";
    const response=await pool.query(queryText);
    res.status(200).json(response.rows);
  }catch(e){
    console.log(e);
  }
};
const getMiembro=async(req,res)=>{
  try{
    const {id}=req.params;
    const queryText="SELECT * FROM persona as P JOIN miembro as M  ON P.id = M.id_persona WHERE P.id=$1;";
    const values=[id];
    const response= await pool.query(queryText,values);
    res.status(200).json(response.rows);
  }catch(e){
    console.log(e);
  }
};

const insertMiembro=async(req,res)=>{
  try{
    const {id,nombres,apellidos,telefono,correo,dni,sexo,foto,estado_civil,estado_nombres_completo,fecha_nacimiento,fec_nac_distrito,fec_nac_provincia,fec_nac_departamento,direccion,referencia,distrito,provincia,departamento,fecha_conversion, lugar_conversion,fecha_bautismo,lugar_bautismo,recibido,testimonio,estado,id_persona}=req.body;

    const queryText1="INSERT INTO persona(id,nombres,apellidos,telefono,correo,dni,sexo,foto,estado_civil,estado_nombres_completo,fecha_nacimiento,fec_nac_distrito,fec_nac_provincia,fec_nac_departamento,direccion,referencia,distrito,provincia,departamento) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19);";
    const values1=[id,nombres,apellidos,telefono,correo,dni,sexo,foto,estado_civil,estado_nombres_completo,fecha_nacimiento,fec_nac_distrito,fec_nac_provincia,fec_nac_departamento,direccion,referencia,distrito,provincia,departamento];

    const queryText2="INSERT INTO miembro(fecha_conversion, lugar_conversion,fecha_bautismo,lugar_bautismo,recibido,testimonio,estado,id_persona) VALUES($1,$2,$3,$4,$5,$6,$7,$8);";
    const values2=[fecha_conversion, lugar_conversion,fecha_bautismo,lugar_bautismo,recibido,testimonio,estado,id_persona];

    const response1=await pool.query(queryText1,values1);  
    const response2=await pool.query(queryText2,values2);  

    res.status(200).json({message:"Participante Creado"});

  } catch(e){
    console.log(e);
  }
};


const insertcargo=async(req,res)=>{
  try {
    const {descripcion,id_departamento,id_miembro}=req.body;

    const queryText1="INSERT INTO cargo(descripcion,id_departamento,id_miembro) VALUES($1,$2,$3);";
    const values1=[descripcion,id_departamento,id_miembro];

    const response1=await pool.query(queryText1,values1);      

    res.status(200).json({message:"Cargo agregado"});
  } catch (e){
    console.log(e);
  }
};
const insertasistenciasc=async(req,res)=>{
  try {
    const {fecha,hora,descripcion,id_miembro}=req.body;

    const queryText1="INSERT INTO asistencia_santa_cena(fecha,hora,descripcion,id_miembro) VALUES($1,$2,$3,$4);";
    const values1=[fecha,hora,descripcion,id_miembro];

    const response1=await pool.query(queryText1,values1);      

    res.status(200).json({message:"asistencia de santa cena agregado"});
  } catch (e){
    console.log(e);
  }
};
const insertdones=async(req,res)=>{
  try {
    const {descripcion,id_miembro}=req.body;

    const queryText1="INSERT INTO dones(descripcion,id_miembro) VALUES($1,$2);";
    const values1=[descripcion,id_miembro];

    const response1=await pool.query(queryText1,values1);      

    res.status(200).json({message:"don agregado agregado"});
  } catch (e){
    console.log(e);
  }
};
const insertactividades=async(req,res)=>{
  try {
    const {descripcion,id_miembro,id_departamento}=req.body;

    const queryText1="INSERT INTO actividades(descripcion,id_miembro,id_departamento) VALUES($1,$2,$3);";
    const values1=[descripcion,id_miembro,id_departamento];

    const response1=await pool.query(queryText1,values1);    
    res.status(200).json({message:"actividades agregado"});  
  } catch (e){
    console.log(e);
  }
};
const insertusuario=async(req,res)=>{
  try {
    const {usuario,password,id_tipo_usuario,id_miembro}=req.body;

    const queryText1="INSERT INTO usuario(usuario,password,id_tipo_usuario,id_miembro) VALUES($1,$2,$3,$4);";
    const values1=[usuario,password,id_tipo_usuario,id_miembro];

    const response1=await pool.query(queryText1,values1);    
    res.status(200).json({message:"actividades usuario agregado"});  
  } catch (e){
    console.log(e);
  }
};
module.exports={
    getMiembros,
    getMiembro,
    insertMiembro,
    insertusuario,
    insertcargo,
    insertasistenciasc,
    insertdones,
    insertactividades};
