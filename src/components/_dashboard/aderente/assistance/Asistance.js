import React from 'react';
import { Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import Button from '@mui/material/Button';
import ruLocale from 'date-fns/locale/ru';
const style = {
    display: 'flex',
    justifyContent: "stretch",
    gap:"2rem"
  };
  const textHelper ={
    color:"rgba(0, 0, 0, 0.6)"
};
const Asistance = ({formik,handleClose}) => {
    const today = new Date();
    return (<form onSubmit={formik.handleSubmit}>            
        <Box sx={style}>            
            <Box sx={{ flexGrow: 1 }}>
             <LocalizationProvider dateAdapter={AdapterDateFns} >       
                                <DatePicker                                    
                                    value={formik.values.fecha}
                                    id="fecha" 
                                    name="fecha" 
                                    label="Fecha de Conversion"       
                                    minDate={today}                                           
                                    inputFormat="dd-MM-yyyy"
                                    fullWidth                               
                                    onChange={(val) => {                                        
                                        formik.setFieldValue('fecha', val);
                                    }}
                                    renderInput={(params) => (<>
                                       
                                    <TextField {...params} /></>
                                    )}
                            />           
             
                <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                            
                </LocalizationProvider> 
            </Box>                    
            <Box sx={{ flexGrow: 1 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                                <TimePicker
                                    id="hora" 
                                    label="Horário"
                                    name="hora"                                                                                                              
                                    value={formik.values.hora}
                                    onChange={(val) => {                                        
                                        formik.setFieldValue('hora', val);
                                    }}                                    
                                    renderInput={(params) =><>
                                     
                                        <TextField {...params} /></>}
                                    />
                                   <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Completo</Typography>                                            
                    </LocalizationProvider>
               
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
                        <MenuItem value={"1"}>Temprano</MenuItem>
                        <MenuItem value={"2"}>Tarde</MenuItem>                                                                               
                        <MenuItem value={"3"}>Permiso</MenuItem>                                                                                                                                                                                     
                    </Select> 
                    <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Completo</Typography>                                            
             </Box>                         
        </Box>
        <Box sx={style}>
            <Box sx={{ flexGrow: 1 }}>
                    <Select
                    labelId="id_servicio"
                    id="id_servicio"
                    value={formik.values.id_servicio}
                    name="id_servicio" 
                    fullWidth
                    label="Servicio"
                    onChange={formik.handleChange}
                    error={formik.touched.id_servicio && Boolean(formik.errors.id_servicio)}          
                    >
                        <MenuItem value={"1"}>Consistorio</MenuItem>
                        <MenuItem value={"2"}>Escuela Dominical</MenuItem>                                                                               
                        <MenuItem value={"3"}>Esfuerzo Cristiano</MenuItem>                                                                               
                        <MenuItem value={"4"}>Culto de Oracion</MenuItem>                                                                               
                    </Select> 
                    <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Completo</Typography>                                            
            </Box>   
        </Box>
        <Box display="flex" justifyContent="flex-end" gap="1rem">
                <Button variant="contained"  color="error" onClick={()=>{formik.resetForm()
                                                                        handleClose()}}>
                Cancelar
                </Button>
            <Button variant="contained" type="submit">
                Guardar
                </Button>
        </Box>
        </form>)
}

export default Asistance
