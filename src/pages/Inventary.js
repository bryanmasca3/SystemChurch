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
  import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import {
    InventarioListHead,
    InventarioListToolbar,
InventarioMoreMenu
  } from '../components/_dashboard/inventario';
  import axios from 'axios';
  import {
    General
  } from '../components/_dashboard/inventario/newInventario';
  

  const TABLE_HEAD = [
    { id: 'nombre', label: 'Nombre', alignRight: false },
    { id: 'categoria', label: 'Categoria', alignRight: false },
    { id: 'cantidad', label: 'Cantidad', alignRight: false },  
    { id: 'ubicacion', label: 'Ubicacion', alignRight: false },
    { id: '' }
  ];


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
        (_Miembro) => (_Miembro.nombre).toLowerCase().indexOf(query.toLowerCase()) !== -1
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
  const ModalAddMember = ({ open, handleOpen, handleClose }) => {
    const [value, setValue] = useState('1');
    const handleChangeTab = (event, newValue) => {
      setValue(newValue);
    };     
  
    const formikMiembro = useFormik({
      initialValues: {
        nombre: '',
        categoria: '',
        cantidad: '',
        descripcion: '',
        ubicacion: '',
        id_departamento: '',
        id_encargado: '' 
      },
      validationSchema: Yup.object({
        nombre: Yup.string().required('Required'),
        categoria: Yup.string().required('Required'),
        cantidad: Yup.string().required('Required'),
        descripcion: Yup.string().required('Required'),
        ubicacion: Yup.string().required('Required'),
        id_departamento: Yup.string().required('Required'),
        id_encargado: Yup.string().required('Required')       
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
                                       </TabList>
                                   </Box>
                                   <TabPanel value="1"><General formik={formikMiembro}></General></TabPanel>                                   
                                </TabContext>     
          {/*<NewMiembro formik={formikMiembro}></NewMiembro>*/}
        </Box>
      </Modal>
    );
  };
const Inventary = () => {

    const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [dataInventario, setdataInventario] = useState([]);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleInventaryData=async()=>{

    const data = await axios.get('http://localhost:5000/api/inventario', {});  
    setdataInventario(data.data);
  }
  useEffect(() => {
    handleInventaryData();
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
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataInventario.length) : 0;

  const filteredInventory = applySortFilter(dataInventario, getComparator(order, orderBy), filterName);

  const isInventoryNotFound = filteredInventory.length === 0;

    return (
        <Page title="Inventario">
          <Container>
            <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
              <ModalAddMember open={open} handleOpen={handleOpen} handleClose={handleClose} />          
              <Typography variant="h4" gutterBottom>
                Inventario
              </Typography>
              <Box spacing={2}>        
                <Button
                  variant="contained"
                  component={RouterLink}
                  to="#"
                  startIcon={<Icon icon={plusFill} />}
                  onClick={handleOpen}
                >
                  Nuevo Articulo
                </Button>
              </Box>
            </Stack>
    
            <Card>
              <InventarioListToolbar
                numSelected={selected.length}
                filterName={filterName}
                onFilterName={handleFilterByName}
              />
    
              <Scrollbar>
                <TableContainer sx={{ minWidth: 800 }}>
                  <Table>
                    <InventarioListHead
                      order={order}
                      orderBy={orderBy}
                      headLabel={TABLE_HEAD}
                      rowCount={dataInventario.length}
                      numSelected={selected.length}
                      onRequestSort={handleRequestSort}                 
                    />
                    <TableBody>
                      {filteredInventory
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                          const { id, nombre,categoria, cantidad, ubicacion } = row;
                          const isItemSelected = selected.indexOf(nombres) !== -1;
    
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
                                  onChange={(event) => handleClick(event, nombre)}
                                />
                              </TableCell>
                              <TableCell component="th" scope="row" padding="none">
                                <Stack direction="row" alignItems="center" spacing={2}>
                                  <Avatar alt={nombre} src={null} />
                                  <Typography variant="subtitle2" noWrap>
                                    {nombre}
                                  </Typography>
                                </Stack>
                              </TableCell>
                              <TableCell align="left">{categoria}</TableCell>
                              <TableCell align="left">{cantidad}</TableCell>                                                        
                              <TableCell align="left">{ubicacion}</TableCell>    
                              <TableCell align="right">
                                <InventarioMoreMenu />
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
                    {isInventoryNotFound && (
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
                count={dataInventario.length}
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

export default Inventary
