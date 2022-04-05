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
const Nacimiento = ({formik}) => {
    const today = new Date();
    return (
        <>
       
                    <Box>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                                            <DatePicker                                    
                                                value={formik.values.fecha_nacimiento}
                                                id="fecha_nacimiento" 
                                                name="fecha_nacimiento" 
                                                label="Fecha Nacimiento"       
                                                minDate={today}    
                                                fullWidth                                       
                                                inputFormat="dd-MM-yyyy"                               
                                                onChange={(val) => {                                        
                                                    formik.setFieldValue('fecha_nacimiento', val);
                                                }}
                                                renderInput={(params) => (<>
                                                
                                                <TextField {...params} /></>
                                                )}
                                        />            
                                       <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: 18-05-2022</Typography>                               
                                        </LocalizationProvider> 
                    </Box>
              
                    <Box sx={style}>
                    <Box sx={{ flexGrow: 1 }}>              
                        <Select
                        labelId="fec_nac_departamento"
                        id="fec_nac_departamento"
                        value={formik.values.fec_nac_departamento}
                        fullWidth
                        name="fec_nac_departamento" 
                        label="Forma de Pagamento"
                        onChange={formik.handleChange}
                        error={formik.touched.fec_nac_departamento && Boolean(formik.errors.fec_nac_departamento)}          
                        >
                            <MenuItem value={"S"}>Amazonas</MenuItem>
                            <MenuItem value={"C"}>Arequipa</MenuItem>                    
                            <MenuItem value={"V"}>Cusco</MenuItem>                    
                            <MenuItem value={"D"}>Lima</MenuItem>                    
                        </Select>                  
                        <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Arequipa</Typography>                               
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        
                        <TextField name="fec_nac_provincia"       
                        id="fec_nac_provincia" 
                        label="Provincia" 
                        fullWidth
                        variant="outlined"  
                        value={formik.values.fec_nac_provincia}
                        onChange={formik.handleChange}
                        error={formik.touched.fec_nac_provincia && Boolean(formik.errors.fec_nac_provincia)}
                        helperText={formik.touched.fec_nac_provincia && formik.errors.fec_nac_provincia}/>
                          <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Arequipa</Typography>                                        
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <TextField name="fec_nac_distrito"       
                        id="fec_nac_distrito" 
                        label="Distrito" 
                        fullWidth
                        variant="outlined"  
                        value={formik.values.fec_nac_distrito}
                        onChange={formik.handleChange}
                        error={formik.touched.fec_nac_distrito && Boolean(formik.errors.fec_nac_distrito)}
                        helperText={formik.touched.fec_nac_distrito && formik.errors.fec_nac_distrito}/>
                            <Typography variant="caption" display="block" gutterBottom sx={textHelper}>EX: Cayma</Typography>                                 
                    </Box>
                </Box>
        </>
    )
}

export default Nacimiento
