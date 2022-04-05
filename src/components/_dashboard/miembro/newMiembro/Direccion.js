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
const Direccion = ({formik}) => {
    return (
        <>
              <Box sx={style}>
                    <Box sx={{ flexGrow: 1 }}>
                        <TextField name="direccion"       
                        id="direccion" 
                        fullWidth
                        label="Direccion" 
                        variant="outlined"  
                        value={formik.values.direccion}
                        onChange={formik.handleChange}
                        error={formik.touched.direccion && Boolean(formik.errors.direccion)}
                        helperText={formik.touched.direccion && formik.errors.direccion}/>
                   <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                              
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <TextField name="referencia"       
                        id="referencia" 
                        label="Referencia" 
                        variant="outlined"  
                        fullWidth
                        value={formik.values.referencia}
                        onChange={formik.handleChange}
                        error={formik.touched.referencia && Boolean(formik.errors.referencia)}
                        helperText={formik.touched.referencia && formik.errors.referencia}/>
                        <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                      
                    </Box> 
              </Box>
              
              <Box sx={style}>
              <Box sx={{ flexGrow: 1 }}>              
                <Select
                labelId="departamento"
                id="departamento"
                value={formik.values.departamento}
                name="departamento" 
                fullWidth
                label="Forma de Pagamento"
                onChange={formik.handleChange}
                error={formik.touched.departamento && Boolean(formik.errors.departamento)}          
                >
                    <MenuItem value={"S"}>Amazonas</MenuItem>
                    <MenuItem value={"C"}>Arequipa</MenuItem>                    
                    <MenuItem value={"V"}>Cusco</MenuItem>                    
                    <MenuItem value={"D"}>Lima</MenuItem>                    
                </Select>                  
                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                      
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                  <TextField name="provincia"       
                  id="provincia" 
                  label="Provincia" 
                  fullWidth
                  variant="outlined"  
                  value={formik.values.provincia}
                  onChange={formik.handleChange}
                  error={formik.touched.provincia && Boolean(formik.errors.provincia)}
                  helperText={formik.touched.provincia && formik.errors.provincia}/>
                  <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                              
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                  <TextField name="distrito"       
                  id="distrito" 
                  label="Distrito" 
                  variant="outlined"  
                  fullWidth
                  value={formik.values.distrito}
                  onChange={formik.handleChange}
                  error={formik.touched.distrito && Boolean(formik.errors.distrito)}
                  helperText={formik.touched.distrito && formik.errors.distrito}/>
                  <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                            
              </Box>
              </Box> 
        </>
    )
}

export default Direccion
