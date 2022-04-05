import React from 'react'
import { Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';

const style = {
    display: 'flex',
    justifyContent: "stretch",
    gap:"2rem"
  };
  const textHelper ={
    color:"rgba(0, 0, 0, 0.6)"
};
const Membresia = ({formik}) => {
    const today = new Date();
    return (
        <>
            
            <Box sx={style}>
              <Box sx={{ flexGrow: 1 }}>
                  <TextField name="lugar_conversion"       
                  id="lugar_conversion" 
                  label="Lugar de Conversion" 
                  variant="outlined"  
                  fullWidth
                  value={formik.values.lugar_conversion}
                  onChange={formik.handleChange}
                  error={formik.touched.lugar_conversion && Boolean(formik.errors.lugar_conversion)}
                  helperText={formik.touched.lugar_conversion && formik.errors.lugar_conversion}/>
                    <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                                       
              </Box>
              <Box sx={{ flexGrow: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <DatePicker                                    
                                        value={formik.values.fecha_conversion}
                                        id="fecha_conversion" 
                                        name="fecha_conversion" 
                                        label="Fecha de Conversion"       
                                        minDate={today}                                           
                                        inputFormat="dd-MM-yyyy"
                                        fullWidth                               
                                        onChange={(val) => {                                        
                                            formik.setFieldValue('fecha_conversion', val);
                                        }}
                                        renderInput={(params) => (<>
                                           
                                        <TextField {...params} /></>
                                        )}
                                />            
                 <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                            
                                </LocalizationProvider> 
              </Box>
              </Box>
              <Box sx={style}>
              <Box sx={{ flexGrow: 1 }}>
                  <TextField name="lugar_bautismo"       
                  id="lugar_bautismo" 
                  label="Lugar de Bautismo" 
                  variant="outlined"  
                  fullWidth
                  value={formik.values.lugar_bautismo}
                  onChange={formik.handleChange}
                  error={formik.touched.lugar_bautismo && Boolean(formik.errors.lugar_bautismo)}
                  helperText={formik.touched.lugar_bautismo && formik.errors.lugar_bautismo}/>
                    <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                                        
              </Box>
              <Box sx={{ flexGrow: 1 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns} >
                                    <DatePicker                                    
                                        value={formik.values.fecha_baustismo}
                                        id="fecha_baustismo" 
                                        name="fecha_baustismo" 
                                        label="Fecha de Bautismo"       
                                        minDate={today}               
                                        fullWidth                            
                                        inputFormat="dd-MM-yyyy"                               
                                        onChange={(val) => {                                        
                                            formik.setFieldValue('fecha_baustismo', val);
                                        }}
                                        renderInput={(params) => (<>
                                           
                                        <TextField {...params} /></>
                                        )}
                                />            
                  <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                            
                                </LocalizationProvider> 
              </Box>
              </Box>
              <Box sx={style}>
              <Box sx={{ flexGrow: 1 }}>            
                <Select
                labelId="recibido"
                id="recibido"
                value={formik.values.recibido}
                name="recibido" 
                fullWidth
                label="Recibido por"
                onChange={formik.handleChange}
                error={formik.touched.recibido && Boolean(formik.errors.recibido)}          
                >
                    <MenuItem value={"S"}>Baustismo</MenuItem>
                    <MenuItem value={"C"}>Transferencia</MenuItem>                                     
                </Select>                  
                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                            
              </Box>
              <Box sx={{ flexGrow: 1 }}>        
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
                    <MenuItem value={"S"}>Activo</MenuItem>
                    <MenuItem value={"C"}>Disciplinado</MenuItem>                                     
                </Select> 
                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                            
              </Box>
              </Box>
              <Box>
              <TextField name="testimonio"                                                
                                               id="testimonio" 
                                               label="Testimonio" 
                                               variant="outlined"  
                                               fullWidth
                                               multiline
                                               rows={10}
                                               value={formik.values.testimonio}
                                               onChange={formik.handleChange}
                                               error={formik.touched.testimonio && Boolean(formik.errors.testimonio)}
                                               helperText={formik.touched.testimonio && formik.errors.testimonio}/>                                               
                                                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                            
              </Box>
        </>
    )
}

export default Membresia
