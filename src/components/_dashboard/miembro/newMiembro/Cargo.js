import React from 'react'
import { Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
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
const Cargo = ({formik}) => {
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
              <MenuItem value={"1"}>Consistorio</MenuItem>
              <MenuItem value={"2"}>DETE</MenuItem>                                                                               
              <MenuItem value={"3"}>Diaconia</MenuItem>                                                                                                                                                           
          </Select> 
          <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Completo</Typography>                                            
        </Box>
       
        
            <Box sx={{ flexGrow: 3 }}>
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
              <MenuItem value={"1"}>Presidente</MenuItem>
              <MenuItem value={"2"}>Vicepresidente</MenuItem>                                                                               
              <MenuItem value={"3"}>Secretario</MenuItem>                                                                               
              <MenuItem value={"4"}>Tesorero</MenuItem>                                                                               
          </Select> 
          <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Completo</Typography>                                            
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

export default Cargo
