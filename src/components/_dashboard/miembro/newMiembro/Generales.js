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
const Generales = ({formik}) => {
    return (<>
              <Box sx={style}>
                    <Box sx={{ flexGrow: 1 }}>
                        <TextField name="nombres"       
                        id="nombres" 
                        fullWidth
                        label="Nombre" 
                        variant="outlined"  
                        value={formik.values.nombres}
                        onChange={formik.handleChange}
                        error={formik.touched.nombres && Boolean(formik.errors.nombres)}
                        helperText={formik.touched.nombres && formik.errors.nombres}/>
                            <Typography  variant="caption" display="block" gutterBottom sx={textHelper}>Ex: Bryan David</Typography>                
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <TextField name="apellidos"       
                        id="apellidos" 
                        label="Apellidos" 
                        fullWidth
                        variant="outlined"  
                        value={formik.values.apellidos}
                        onChange={formik.handleChange}
                        error={formik.touched.apellidos && Boolean(formik.errors.apellidos)}
                        helperText={formik.touched.apellidos && formik.errors.apellidos}/>
                            <Typography  variant="caption" display="block" gutterBottom sx={textHelper}>EX: Masca Vilca</Typography>                
                    </Box>
                 </Box>  
                 <Box sx={style}>       
                    <Box sx={{ flexGrow: 1 }}>
                        <TextField name="telefono"       
                            id="telefono"
                            fullWidth
                            label="Telefono"
                            variant="outlined"
                        value={formik.values.telefono}
                        onChange={formik.handleChange}
                        error={formik.touched.telefono && Boolean(formik.errors.telefono)}
                        helperText={formik.touched.telefono && formik.errors.telefono}/>
                            <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: 9628088287</Typography>                
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <TextField name="correo"   
                        fullWidth    
                        id="correo" 
                        label="Correo" 
                        variant="outlined"  
                        value={formik.values.correo}
                        onChange={formik.handleChange}
                        error={formik.touched.correo && Boolean(formik.errors.correo)}
                        helperText={formik.touched.correo && formik.errors.correo}/>
                            <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: bryan.masca@ucsp.edu.pe</Typography>                
                    </Box>
                 </Box>
             <Box sx={style}>
                    <Box sx={{ flexGrow: 1 }}>
                        <TextField name="dni"       
                        id="dni" 
                        label="DNI" 
                        fullWidth
                        variant="outlined"  
                        value={formik.values.dni}
                        onChange={formik.handleChange}
                        error={formik.touched.dni && Boolean(formik.errors.dni)}
                        helperText={formik.touched.dni && formik.errors.dni}/>
                            <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: bryan.masca@ucsp.edu.pe</Typography>                        
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                          <Select
                            labelId="sexo"
                            id="sexo"
                            fullWidth
                            value={formik.values.sexo}
                            name="sexo" 
                            label="Forma de Pagamento"
                            onChange={formik.handleChange}
                            error={formik.touched.sexo && Boolean(formik.errors.sexo)}          
                            >
                                <MenuItem value={"Masculino"}>Masculino</MenuItem>
                                <MenuItem value={"Femenino"}>Femenino</MenuItem>                    
                            </Select>                
                    </Box>
              </Box>
            
              <Box>
                  <TextField name="foto"       
                  id="foto" 
                  label="Foto" 
                  fullWidth
                  variant="outlined"  
                  value={formik.values.foto}
                  onChange={formik.handleChange}
                  error={formik.touched.foto && Boolean(formik.errors.foto)}
                  helperText={formik.touched.foto && formik.errors.foto}/>
                   <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: bryan.masca@ucsp.edu.pe</Typography>                               
              </Box>
              </>
            
    )
}

export default Generales
