import { filter } from 'lodash';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Icon } from '@iconify/react';
import { sentenceCase } from 'change-case';
import React, { useState, useEffect } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import { Link as RouterLink } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  Box,
  Modal
} from '@mui/material';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import {
  AderenteListHead,
  AderenteListToolbar,
  AderenteMoreMenu
} from '../components/_dashboard/aderente';
//

import {
  Compromiso,
  Direccion,
  Educacion,
  Generales,
  Idiomas,
  Nacimiento,
  Profesionales,
  Adicional
} from '../components/_dashboard/aderente/newAderente';
// ----------------------------------------------------------------------
import axios from 'axios';
const TABLE_HEAD = [
  { id: 'nombre', label: 'Name', alignRight: false },
  { id: 'dni', label: 'Company', alignRight: false },
  { id: 'telefono', label: 'Role', alignRight: false },
  { id: 'invitado', label: 'Verified', alignRight: false },  
  { id: '' }
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_Aderente) => _Aderente.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}
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


const ModalAddAderente = ({ open, handleOpen, handleClose }) => {
  const [value, setValue] = useState('1');
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };     

  const formikAderente = useFormik({
    initialValues: {
      nombres: '',
      apellidos: '',
      telefono: '',
      correo: '',
      dni: '',
      sexo: '',
      foto: '',
      estado_civil: '',
      estado_nombres_completo: '',
      fecha_nacimiento: '',
      fec_nac_distrito: '',
      fec_nac_provincia: '',
      fec_nac_departamento: '',
      direccion: '',
      referencia: '',
      distrito: '',
      provincia: '',
      departamento: '',
      invitado:'',
      descripcion:''
    },
    validationSchema: Yup.object({
      nombres: Yup.string().required('Required'),
      apellidos: Yup.string().required('Required'),
      telefono: Yup.string().required('Required'),
      correo: Yup.string().required('Required'),
      dni: Yup.string().required('Required'),
      sexo: Yup.string().required('Required'),
      foto: Yup.string().required('Required'),
      estado_civil: Yup.string().required('Required'),
      estado_nombres_completo: Yup.string().required('Required'),
      fecha_nacimiento: Yup.string().required('Required'),
      fec_nac_distrito: Yup.string().required('Required'),
      fec_nac_provincia: Yup.string().required('Required'),
      fec_nac_departamento: Yup.string().required('Required'),
      direccion: Yup.string().required('Required'),
      referencia: Yup.string().required('Required'),
      distrito: Yup.string().required('Required'),
      provincia: Yup.string().required('Required'),
      departamento: Yup.string().required('Required'),
      invitado: Yup.string().required('Required'),
      descripcion: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" sx={style}>
      <TabContext value={value}
                               
                               >
                                 <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                     <TabList onChange={handleChangeTab} aria-label="lab API tabs example" variant="scrollable"
                                scrollButtons>
                                     <Tab label="Generales" value="1" />
                                     <Tab label="Compromiso" value="2" />
                                     <Tab label="Datos de Nacimiento" value="3" />
                                     <Tab label="Direccion Actual" value="4" />
                                     <Tab label="Educacion" value="5" />
                                     <Tab label="Profesionales" value="6"  />
                                     <Tab label="Idiomas" value="7"  />
                                     <Tab label="Adicional" value="8"  />                                  
                                     </TabList>
                                 </Box>
                                 <TabPanel value="1"><Generales formik={formikAderente}></Generales></TabPanel>
                                 <TabPanel value="2"><Compromiso formik={formikAderente}></Compromiso></TabPanel>
                                 <TabPanel value="3"><Nacimiento formik={formikAderente}></Nacimiento></TabPanel>
                                 <TabPanel value="4"><Direccion formik={formikAderente}></Direccion></TabPanel>    
                                 <TabPanel value="5"><Educacion formik={formikAderente}></Educacion></TabPanel> 
                                 <TabPanel value="6"><Profesionales formik={formikAderente}></Profesionales></TabPanel>                                 
                                 <TabPanel value="7"><Idiomas formik={formikAderente}></Idiomas></TabPanel>
                                 <TabPanel value="8"><Adicional formik={formikAderente}></Adicional></TabPanel>
                                
                              </TabContext>     
        {/*<NewMiembro formik={formikAderente}></NewMiembro>*/}
      </Box>
    </Modal>
  );
};
export default function Aderente() {
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const [dataaderente, setdataaderente] = useState([]);
  
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };


  const handleAderenteData=async()=>{

    const data = await axios.get('http://localhost:5000/api/aderente', {});  
    console.log(data.data);
    setdataaderente(data.data);
  }
  useEffect(() => {
    handleAderenteData();
  },[]);
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataaderente.length) : 0;

  const filteredAderentes = applySortFilter(
    dataaderente,
    getComparator(order, orderBy),
    filterName
  );

  const isAderenteNotFound = filteredAderentes.length === 0;

  return (
    <Page title="Aderente">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <ModalAddAderente open={open} handleOpen={handleOpen} handleClose={handleClose} />          
          <Typography variant="h4" gutterBottom>
            Aderentes
          </Typography>
          <Box spacing={2}>           
            <Button
              variant="contained"
              component={RouterLink}
              to="#"
              startIcon={<Icon icon={plusFill} />}
              onClick={handleOpen}
            >
              Nuevo Aderente
            </Button>
          </Box>
        </Stack>

        <Card>
          <AderenteListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <AderenteListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={dataaderente.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}                 
                />
                <TableBody>
                  {filteredAderentes
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { id, nombres,apellidos, dni, telefono,invitado } = row;
                      const isItemSelected = selected.indexOf(name) !== -1;

                      return (
                        <TableRow
                          hover
                          key={id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onChange={(event) => handleClick(event, nombres)}
                            />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            <Stack direction="row" alignItems="center" spacing={2}>
                              <Avatar alt={nombres} src={null} />
                              <Typography variant="subtitle2" noWrap>
                                {nombres+" "+apellidos}
                              </Typography>
                            </Stack>
                          </TableCell>
                          <TableCell align="left">{dni}</TableCell>
                          <TableCell align="left">{telefono}</TableCell>
                          <TableCell align="left">{telefono}</TableCell>
                          <TableCell align="left">{invitado}</TableCell>                       
                          <TableCell align="right">
                            <AderenteMoreMenu />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isAderenteNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={dataaderente.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
