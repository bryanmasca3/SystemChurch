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
const Adicional = ({formik}) => {
    return (<>
        <Box sx={style}>
              <Box sx={{ flexGrow: 1 }}>
                  <TextField name="invitado"       
                  id="invitado" 
                  fullWidth
                  label="Invitado" 
                  variant="outlined"  
                  value={formik.values.invitado}
                  onChange={formik.handleChange}
                  error={formik.touched.invitado && Boolean(formik.errors.invitado)}
                  helperText={formik.touched.invitado && formik.errors.invitado}/>
                      <Typography  variant="caption" display="block" gutterBottom sx={textHelper}>Ex: Bryan David</Typography>                
              </Box> 
              <Box sx={{ flexGrow: 1 }}>
                        <TextField name="descripcion"       
                        id="descripcion" 
                        label="Descripcion" 
                        fullWidth
                        variant="outlined"  
                        value={formik.values.descripcion}
                        onChange={formik.handleChange}
                        error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
                        helperText={formik.touched.descripcion && formik.errors.descripcion}/>
                            <Typography  variant="caption" display="block" gutterBottom sx={textHelper}>EX: Masca Vilca</Typography>                
                    </Box>         
           </Box>  
        </>)
}

export default Adicional
