const {pool}=require("../database");

const insertaderente=async(req,res)=>{
  try{
    const {id,nombres,apellidos,telefono,correo,dni,sexo,foto,estado_civil,estado_nombres_completo,fecha_nacimiento,fec_nac_distrito,fec_nac_provincia,fec_nac_departamento,direccion,referencia,distrito,provincia,departamento,invitado,descripcion,id_persona}=req.body;

    const queryText1="INSERT INTO persona(id,nombres,apellidos,telefono,correo,dni,sexo,foto,estado_civil,estado_nombres_completo,fecha_nacimiento,fec_nac_distrito,fec_nac_provincia,fec_nac_departamento,direccion,referencia,distrito,provincia,departamento) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19);";
    const values1=[id,nombres,apellidos,telefono,correo,dni,sexo,foto,estado_civil,estado_nombres_completo,fecha_nacimiento,fec_nac_distrito,fec_nac_provincia,fec_nac_departamento,direccion,referencia,distrito,provincia,departamento];

    const queryText2="INSERT INTO aderente(invitado, descripcion,id_persona) VALUES($1,$2,$3);";
    const values2=[invitado,descripcion,id_persona];

    const response1=await pool.query(queryText1,values1);  
    const response2=await pool.query(queryText2,values2);  

    res.status(200).json({message:"Participante Creado"});

  } catch(e){
    console.log(e);
  }
  };
  const getAderentes=async(req,res)=>{
    try{
      const queryText="SELECT * FROM persona as P JOIN aderente as A  ON P.id = A.id_persona ORDER BY A.id_persona ASC;";
      const response=await pool.query(queryText);
      res.status(200).json(response.rows);
    }catch(e){
      console.log(e);
    }
  };
  module.exports={
    getAderentes,
    insertaderente
 };
