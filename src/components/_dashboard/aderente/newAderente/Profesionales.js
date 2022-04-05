import React from 'react'
import { Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
const style = {
    display: 'flex',
    justifyContent: "stretch",
    gap:"2rem"
  };
  const textHelper ={
    color:"rgba(0, 0, 0, 0.6)"
};
const Profesionales = ({formik}) => { 
    return (
        <>
              
              <Box sx={style}>
                 
              <Box sx={{ flexGrow: 2 }}>

              <Select
                labelId="estado"
                id="estado"
                value={formik.values.estado}
                name="estado" 
                fullWidth
                label="Estado"
                onChange={formik.handleChange}
                error={formik.touched.estado && Boolean(formik.errors.estado)}          
                >
                    <MenuItem value={"S"}>Oficio</MenuItem>
                    <MenuItem value={"C"}>Profesiona</MenuItem>                                                                               
                </Select> 
                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Completo</Typography>                                            
              </Box>
             
              
                  <Box sx={{ flexGrow: 3 }}>
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
                
       
             
              </Box>
       
            <Box display="flex" justifyContent="flex-end">
                    <IconButton aria-label="plus">
                            <AddBoxRoundedIcon fontSize="large"/>
                    </IconButton>             
            </Box>         
        </>
    )
}

export default Profesionales
