create table tipo_usuario(
  id serial PRIMARY KEY,               
  descripcion VARCHAR (20) NOT NULL
);

create table departamento(
  id serial PRIMARY KEY,
  descripcion VARCHAR (30) NOT NULL
);



create table servicio(
  id serial PRIMARY KEY,
  descripcion VARCHAR (20) NOT NULL,
  dia VARCHAR (10) NOT NULL,
  horario_ini VARCHAR (15) NOT NULL,
  horario_fin VARCHAR (15) NOT NULL,
  id_departamento INT NOT NULL,
  FOREIGN KEY (id_departamento)
  REFERENCES departamento (id)
);

create table persona(
  id  VARCHAR (20) NOT NULL PRIMARY KEY,
  nombres VARCHAR (20) NOT NULL,
  apellidos VARCHAR (20) NOT NULL,
  telefono VARCHAR (12),
  correo VARCHAR (30),
  dni VARCHAR (8),
  sexo VARCHAR (1) NOT NULL,
  foto VARCHAR (30),

  estado_civil VARCHAR (1) NOT NULL,
  estado_nombres_completo VARCHAR (50),
  
  fecha_nacimiento DATE NOT NULL,
  fec_nac_distrito VARCHAR (20) NOT NULL,  
  fec_nac_provincia VARCHAR (20) NOT NULL,  
  fec_nac_departamento VARCHAR (20) NOT NULL,  

  direccion VARCHAR (50),  
  referencia VARCHAR (20),
  distrito VARCHAR (20),
  provincia VARCHAR (20),
  departamento VARCHAR (20) 
);

create table grado_instruccion(
   id serial PRIMARY KEY,  
   grado VARCHAR (20) NOT NULL,
   descripcion VARCHAR (30) NOT NULL,
   id_persona VARCHAR (20) NOT NULL,
    FOREIGN KEY (id_persona)
    REFERENCES persona (id)
);

create table profesion_ocupacion(
   id serial PRIMARY KEY,  
   descripcion VARCHAR (50) NOT NULL,
   id_persona VARCHAR (20) NOT NULL,
   FOREIGN KEY (id_persona)
   REFERENCES persona (id)
);

create table idiomas(
    id serial PRIMARY KEY,               
    descripcion VARCHAR (10) NOT NULL,
    nivel VARCHAR (10) NOT NULL,
    id_persona VARCHAR (20) NOT NULL,
    FOREIGN KEY (id_persona)
    REFERENCES persona (id)
);

create table miembro(
  id VARCHAR (20) NOT NULL PRIMARY KEY,
  fecha_conversion DATE NOT NULL,  
  lugar_conversion VARCHAR (20) NOT NULL,
  
  fecha_bautismo DATE NOT NULL,
  lugar_bautismo VARCHAR (20) NOT NULL,
  recibido VARCHAR (15) NOT NULL,
  testimonio VARCHAR (60) NOT NULL,

  estado VARCHAR (3) NOT NULL,
  
  id_persona VARCHAR (20) NOT NULL,
  FOREIGN KEY (id_persona)
  REFERENCES persona (id)
);
create table cargo(
  id serial PRIMARY KEY,
  descripcion VARCHAR (20) NOT NULL,
  id_departamento INT NOT NULL,
  id_miembro VARCHAR (20) NOT NULL,
  FOREIGN KEY (id_departamento)
  REFERENCES departamento (id),
   FOREIGN KEY (id_miembro)
  REFERENCES miembro (id)
);

create table usuario(
  id serial PRIMARY KEY,
  usuario VARCHAR (20) NOT NULL,
  password VARCHAR (20) NOT NULL,
  id_tipo_usuario INT NOT NULL,
  id_miembro VARCHAR (20) NOT NULL,
  FOREIGN KEY (id_tipo_usuario)
  REFERENCES tipo_usuario (id),
  FOREIGN KEY (id_miembro)
  REFERENCES miembro (id)
);
create table dones(
    id serial PRIMARY KEY,               
    descripcion VARCHAR (20) NOT NULL,
    id_miembro VARCHAR (20) NOT NULL,
    FOREIGN KEY (id_miembro)
    REFERENCES miembro (id)
);

create table actividades(
    id serial PRIMARY KEY,               
    descripcion VARCHAR (30) NOT NULL,
    id_miembro VARCHAR (20) NOT NULL,
    id_departamento INT NOT NULL,
    FOREIGN KEY (id_miembro)
    REFERENCES miembro (id),
    FOREIGN KEY (id_departamento)
    REFERENCES departamento (id)
);

create table aderente(
  id serial PRIMARY KEY,  
  invitado VARCHAR (30) NOT NULL,
  descripcion VARCHAR (30) NOT NULL,
  id_persona VARCHAR (20) NOT NULL,
  id_miembro VARCHAR (20) NOT NULL,
  FOREIGN KEY (id_persona)
  REFERENCES persona (id),
  FOREIGN KEY (id_miembro)
  REFERENCES miembro (id)
);


create table asistencia(
  id serial PRIMARY KEY,
  fecha DATE NOT NULL,
  hora VARCHAR (15) NOT NULL,
  estado VARCHAR (3) NOT NULL,
  id_persona VARCHAR (20) NOT NULL,
  id_servicio INT NOT NULL,
  FOREIGN KEY (id_persona)
  REFERENCES persona (id),
  FOREIGN KEY (id_servicio)
  REFERENCES servicio (id)
);



create table asistencia_santa_cena(
  id serial PRIMARY KEY,
  fecha DATE NOT NULL,
  hora VARCHAR (15) NOT NULL,
  descripcion VARCHAR (20) NOT NULL,
  id_miembro VARCHAR (20) NOT NULL,
  FOREIGN KEY (id_miembro)
  REFERENCES miembro (id)
);


create table inventario(
  id serial PRIMARY KEY,
  nombre VARCHAR (20) NOT NULL,
  categoria VARCHAR (20) NOT NULL,
  cantidad INT NOT NULL,
  descripcion VARCHAR (200) NOT NULL,
  ubicacion VARCHAR (200) NOT NULL,
  id_departamento INT NOT NULL,
  id_encargado VARCHAR (20) NOT NULL,
  FOREIGN KEY (id_departamento)
  REFERENCES departamento (id),
  FOREIGN KEY (id_encargado)
  REFERENCES miembro (id)
);
/*---------------------------*/
INSERT INTO persona(id,nombres,apellidos,direccion,telefono,fecha_nacimiento,foto,sexo,estado_civil)
VALUES('LOL4','bryan','masca vilca','marinito perez','963211646','2021-10-10','sdfffff',TRUE,'03');
INSERT INTO aderente(estado_familiar, invitado,descripcion,id_persona)
VALUES('05','6','LOREM PAYASO CERDO','LOL4');

INSERT INTO persona(id,nombres,apellidos,direccion,telefono,fecha_nacimiento,foto,sexo,estado_civil)
VALUES('LOL6','bryan','masca vilca','marinito perez','963211646','2021-10-10','sdfffff',TRUE,'03');
INSERT INTO miembro(fecha_conversion, estado,DNI,fecha_bautismo,id_persona)
VALUES('2021-10-10','03','72117609','2021-10-10','LOL6');


INSERT INTO tipo_usuario(descripcion)
VALUES('editor');

INSERT INTO departamento(descripcion)
VALUES('consistorio');

INSERT INTO servicio(descripcion,dia,horario_ini,horario_fin,id_departamento)
VALUES('culto de oracion','domingo','7:00pm','8:30pm',1);

/*--------------------*/
SELECT * FROM persona as P JOIN miembro as M  ON P.id = M.id_persona ORDER BY M.id_persona ASC;
SELECT * FROM persona as P JOIN miembro as M  ON P.id = M.id_persona WHERE P.id=$1;
/*------------------*/

Diacono
Anciano


Liga Femenina
Sociedad de Esfuerzos Cristianos
Consistorio
Liturgia
Escuela Dominical

