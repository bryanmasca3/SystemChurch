import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import * as React from 'react';
import editFill from '@iconify/icons-eva/edit-fill';
import { Link as RouterLink } from 'react-router-dom';
import trash2Outline from '@iconify/icons-eva/trash-2-outline';
import moreVerticalFill from '@iconify/icons-eva/more-vertical-fill';
import bookmarkOutline from '@iconify/icons-eva/bookmark-outline';
// material
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText,Modal,Box } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import axios from 'axios';
import TabPanel from '@mui/lab/TabPanel';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
// ----------------------------------------------------------------------
import {
    Asistance,
  } from './assistance';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
const ModalAssistance = ({ id_persona,id_miembro,open, handleOpen, handleClose,handleClick }) => {
    const [value, setValue] = useState('1');
    const handleChangeTab = (event, newValue) => {
      setValue(newValue);
    };    
  
    const formikAssistance = useFormik({
      initialValues: {
        fecha: '',
        hora: '',
        estado: '',
        id_persona: id_persona,
        id_servicio: ''     
      },
      validationSchema: Yup.object({
        fecha: Yup.string().required('Required'),
        hora: Yup.string().required('Required'),
        estado: Yup.string().required('Required'),
        id_persona: Yup.string().required('Required'),
        id_servicio: Yup.string().required('Required')    
      }),
      onSubmit: async(values,{ resetForm }) => {           
        const dateFormat=new Date(values.fecha).toLocaleDateString('en-GB');
        const timeFormat=new Date(values.hora).toLocaleTimeString('en-GB').slice(0, -3);        

         const response= await axios.post('http://localhost:5000/api/personas/asistencia', {fecha:dateFormat,
                                                                      hora:timeFormat,
                                                                      estado:values.estado,
                                                                      id_persona:values.id_persona,
                                                                      id_servicio:values.id_servicio});  
        if(response.status==200){
          resetForm();
          handleClick();
          handleClose();
        }
      }
      
    }); 
    return (
      <Modal
        open={open}       
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
               <TabContext value={value}>
                                   <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                       <TabList onChange={handleChangeTab} aria-label="lab API tabs example" variant="scrollable"
                                  scrollButtons>
                                       <Tab label="Asistencia" value="1" />                                                                   
                                       </TabList>
                                   </Box>
    
                                   <TabPanel value="1"><Asistance formik={formikAssistance} handleClose={handleClose}/>                                   </TabPanel>                                   
                                  
                                </TabContext>     
          {/*<NewMiembro formik={formikMiembro}></NewMiembro>*/}
        </Box>
      </Modal>
    );
  }
export default function AssitanceMoreMenu({id_miembro,id_persona}) {
    console.log("nicaraguas")
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const [openAssistance, setopenAssistance] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClosealert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleOpenAssistance = () => setopenAssistance(true);
  const handleCloseAssistance = () => setopenAssistance(false);

  return (
    <>
     <Snackbar open={open} autoHideDuration={6000} onClose={handleClosealert} anchorOriginBottomCenter>
        <Alert onClose={handleClosealert} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>
      <ModalAssistance id_miembro={id_miembro} id_persona={id_persona}open={openAssistance} handleOpen={handleOpenAssistance} handleClose={handleCloseAssistance} handleClick={handleClick}/>
 

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 300, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem sx={{ color: 'text.secondary' }} onClick={handleOpenAssistance}>
          <ListItemIcon>
            <Icon icon={bookmarkOutline} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Asistencia" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>    
      </Menu>
    </>
  );
}
