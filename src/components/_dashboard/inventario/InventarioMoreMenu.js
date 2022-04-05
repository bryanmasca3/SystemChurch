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



  export default function InventarioMoreMenu({id_miembro}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Icon icon={moreVerticalFill} width={20} height={20} />
      </IconButton>
    
 
      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
          <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={bookmarkOutline} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="View" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
        <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={editFill} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Edit" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
     
        <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={trash2Outline} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Delete" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

      </Menu>
    </>
  );
}
