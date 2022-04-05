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
const Compromiso = ({formik}) => {
    return (
        <>
              <Box  sx={style}>  
                <Box sx={{ flexGrow: 1 }}>              
                    <Select
                    labelId="estado_civil"
                    id="estado_civil"
                    fullWidth
                    value={formik.values.estado_civil}
                    name="estado_civil" 
                    label="Forma de Pagamento"
                    onChange={formik.handleChange}
                    error={formik.touched.estado_civil && Boolean(formik.errors.estado_civil)}          
                    >
                        <MenuItem value={"S"}>Soltero (a)</MenuItem>
                        <MenuItem value={"C"}>Casado (a)</MenuItem>                    
                        <MenuItem value={"V"}>Viudo (a)</MenuItem>                    
                        <MenuItem value={"D"}>Divorsiado (a)</MenuItem>                    
                    </Select>       
                    <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: bryan.masca@ucsp.edu.pe</Typography>                               
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <TextField name="estado_nombres_completo"       
                    id="estado_nombres_completo" 
                    label="Estado Nombres Completo" 
                    fullWidth
                    variant="outlined"  
                    value={formik.values.estado_nombres_completo}
                    onChange={formik.handleChange}
                    error={formik.touched.estado_nombres_completo && Boolean(formik.errors.estado_nombres_completo)}
                    helperText={formik.touched.estado_nombres_completo && formik.errors.estado_nombres_completo}/>
                        <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: bryan.masca@ucsp.edu.pe</Typography>                             
                </Box>
              </Box>
        </>
    )
}

export default Compromiso
