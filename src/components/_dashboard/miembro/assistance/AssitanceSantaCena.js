import React from 'react';
import { Box} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import ruLocale from 'date-fns/locale/ru';
const style = {
    display: 'flex',
    justifyContent: "stretch",
    gap:"2rem"
  };
  const textHelper ={
    color:"rgba(0, 0, 0, 0.6)"
};
const AssitanceSantaCena = ({formik,handleClose}) => {
    const today = new Date();
    return (
            <>     
             <form onSubmit={formik.handleSubmit}>               
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
              
                    <TextField name="descripcion"       
                        id="descripcion" 
                        label="Descripcion" 
                        fullWidth
                        variant="outlined"  
                        value={formik.values.descripcion}
                        onChange={formik.handleChange}
                        error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
                        helperText={formik.touched.descripcion && formik.errors.descripcion}/>
                    <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Descripcion</Typography>                               
                 </Box>                         
            </Box>   
            <Box display="flex" justifyContent="flex-end" gap="1rem">
            <Button variant="contained"  color="error" onClick={handleClose}>
                Cancelar
                </Button>
            <Button variant="contained" type="submit">
                Guardar
                </Button>
        </Box>   
        </form>   
    </>
    )
}

export default AssitanceSantaCena
