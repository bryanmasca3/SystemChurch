import React from 'react'
import { Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
const style = {
    display: 'flex',
    justifyContent: "stretch",
    gap:"2rem"
  };
  const textHelper ={
    color:"rgba(0, 0, 0, 0.6)"
};
const General = ({formik}) => {
    return (
        <>
        <Box sx={style}>
              <Box sx={{ flexGrow: 1 }}>
                  <TextField name="nombre"       
                  id="nombre" 
                  fullWidth
                  label="Nombre" 
                  variant="outlined"  
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                  helperText={formik.touched.nombre && formik.errors.nombre}/>
                      <Typography  variant="caption" display="block" gutterBottom sx={textHelper}>Ex: Bryan David</Typography>                
              </Box>
              <Box sx={{ flexGrow: 1 }}>
              <Select
                labelId="categoria"
                id="categoria"
                value={formik.values.categoria}
                name="categoria" 
                fullWidth
                label="Categoria"
                onChange={formik.handleChange}
                error={formik.touched.categoria && Boolean(formik.errors.categoria)}          
                >
                    <MenuItem value={"S"}>Activo</MenuItem>
                    <MenuItem value={"C"}>Disciplinado</MenuItem>                                     
                </Select> 
                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                            
              </Box>
           </Box>  
           <Box sx={style}>       
              <Box sx={{ flexGrow: 1 }}>
                  <TextField name="cantidad"       
                      id="cantidad"
                      fullWidth
                      label="Cantidad"
                      variant="outlined"
                  value={formik.values.cantidad}
                  onChange={formik.handleChange}
                  error={formik.touched.cantidad && Boolean(formik.errors.cantidad)}
                  helperText={formik.touched.cantidad && formik.errors.cantidad}/>
                      <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: 9628088287</Typography>                
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                  <TextField name="ubicacion"   
                  fullWidth    
                  id="ubicacion" 
                  label="Ubicacion" 
                  variant="outlined"  
                  value={formik.values.ubicacion}
                  onChange={formik.handleChange}
                  error={formik.touched.ubicacion && Boolean(formik.errors.ubicacion)}
                  helperText={formik.touched.ubicacion && formik.errors.ubicacion}/>
                      <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: bryan.masca@ucsp.edu.pe</Typography>                
              </Box>
           </Box>
       <Box sx={style}>
              <Box sx={{ flexGrow: 1 }}>
              <TextField name="descripcion"                                                
                                               id="descripcion" 
                                               label="Descripcion" 
                                               variant="outlined"  
                                               fullWidth
                                               multiline
                                               rows={10}
                                               value={formik.values.descripcion}
                                               onChange={formik.handleChange}
                                               error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
                                               helperText={formik.touched.descripcion && formik.errors.descripcion}/>                                               
                                                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                            
              </Box>    
        </Box>
      
  
        </>
   
    )
}

export default General
