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

const style = {
    display: 'flex',
    justifyContent: "stretch",
    gap:"2rem"
  };
  const textHelper ={
    color:"rgba(0, 0, 0, 0.6)"
};
const Educacion = ({formik}) => {
    const today = new Date();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
        <>
              
              <Box sx={style}>
                  <Box sx={{ flexGrow: 1 }}>
                  <FormControlLabel 
                  control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />}
                    label="Primaria"
                    />
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
                    <MenuItem value={"S"}>Completo</MenuItem>
                    <MenuItem value={"C"}>Incompleto</MenuItem>                                     
                    <MenuItem value={"C"}>En curso</MenuItem>                                     
                </Select> 
                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Completo</Typography>                                            
              </Box>
             
              </Box>
              <Box sx={style}>
                  <Box sx={{ flexGrow: 1 }}>
                  <FormControlLabel 
                  control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />}
                    label="Secundaria"
                    />
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
                    <MenuItem value={"S"}>Completo</MenuItem>
                    <MenuItem value={"C"}>Incompleto</MenuItem>                                     
                    <MenuItem value={"C"}>En curso</MenuItem>                                     
                </Select> 
                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Completo</Typography>                                            
              </Box>
             
              </Box>
              <Box sx={style}>
                  <Box sx={{ flexGrow: 1 }}>
                  <FormControlLabel 
                  control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />}
                    label="Tecnico"
                    />
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
                    <MenuItem value={"S"}>Completo</MenuItem>
                    <MenuItem value={"C"}>Incompleto</MenuItem>                                     
                    <MenuItem value={"C"}>En curso</MenuItem>                                     
                </Select> 
                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Completo</Typography>                                            
              </Box>
             
              </Box>
              <Box sx={style}>
                  <Box sx={{ flexGrow: 1 }}>
                  <FormControlLabel 
                  control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    />}
                    label="Superior"
                    />
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
                    <MenuItem value={"S"}>Completo</MenuItem>
                    <MenuItem value={"C"}>Incompleto</MenuItem>                                     
                    <MenuItem value={"C"}>En curso</MenuItem>                                     
                </Select> 
                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Completo</Typography>                                            
              </Box>
             
              </Box>
        </>
    )
}

export default Educacion
