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
// material
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
import TextField from '@mui/material/TextField';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import SearchNotFound from '../components/SearchNotFound';
import {
  MiembroListHead,
  MiembroListToolbar,
  AssitanceMoreMenuM
} from '../components/_dashboard/miembro';

import {
  AderenteListHead,
  AderenteListToolbar,
  AssitanceMoreMenuA
} from '../components/_dashboard/aderente';
//
import axios from 'axios';


// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'nombre', label: 'Nombres Completos', alignRight: false },  
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
      (_Miembro) => (_Miembro.nombres+" "+_Miembro.apellidos).toLowerCase().indexOf(query.toLowerCase()) !== -1
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


export default function Assistance() {
  const [pageM, setPageM] = useState(0);
  const [pageA, setPageA] = useState(0);

  
  const [orderM, setOrderM] = useState('asc');
  const [orderA, setOrderA] = useState('asc');

  const [selectedM, setSelectedM] = useState([]);
  const [selectedA, setSelectedA] = useState([]);

  const [orderByM, setOrderByM] = useState('name');
  const [orderByA, setOrderByA] = useState('name');

  const [filterNameMiembro, setfilterNameMiembro] = useState('');
  const [filterNameAderente, setfilterNameAderente] = useState('');

  const [rowsPerPageM, setRowsPerPageM] = useState(5);
  const [rowsPerPageA, setRowsPerPageA] = useState(5);

 
  const [datamember, setdatamember] = useState([]);
  const [dataaderente, setdataaderente] = useState([]);

  const handleRequestSortMiembro = (event, property) => {
    const isAsc = orderByM === property && orderM === 'asc';
    setOrderM(isAsc ? 'desc' : 'asc');
    setOrderByM(property);
  };
  const handleRequestSortAderente = (event, property) => {
    const isAsc = orderByA === property && orderA === 'asc';
    setOrderA(isAsc ? 'desc' : 'asc');
    setOrderByA(property);
  };

  const handleData=async()=>{

    const DataMember = await axios.get('http://localhost:5000/api/miembros', {});  
    const DataAderent = await axios.get('http://localhost:5000/api/aderente', {});  
    setdatamember(DataMember.data);
    setdataaderente(DataAderent.data)
  }
  useEffect(() => {
  
    handleData();
  },[]);
  const handleClickA = (event, name) => {
    const selectedIndex = selectedA.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedA, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedA.slice(1));
    } else if (selectedIndex === selectedA.length - 1) {
      newSelected = newSelected.concat(selectedA.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedA.slice(0, selectedIndex),
        selectedA.slice(selectedIndex + 1)
      );
    }
    setSelectedA(newSelected);
  };
  const handleClickM = (event, name) => {
    const selectedIndex = selectedM.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedM, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedM.slice(1));
    } else if (selectedIndex === selectedM.length - 1) {
      newSelected = newSelected.concat(selectedM.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedM.slice(0, selectedIndex),
        selectedM.slice(selectedIndex + 1)
      );
    }
    setSelectedM(newSelected);
  };
  const handleChangePageMiembro = (event, newPage) => {
    setPageM(newPage);
  };
  const handleChangePageAderente = (event, newPage) => {
    setPageA(newPage);
  };
  const handleChangeRowsPerPageAderente = (event) => {
    setRowsPerPageA(parseInt(event.target.value, 10));
    setPageA(0);
  };
  const handleChangeRowsPerPageMiembro = (event) => {
    setRowsPerPageM(parseInt(event.target.value, 10));
    setPageM(0);
  };

  const handleFilterByNameM = (event) => {
    setfilterNameMiembro(event.target.value);
  };
  const handleFilterByNameA = (event) => {
    setfilterNameAderente(event.target.value);
  };

  const emptyRowsMember = pageM > 0 ? Math.max(0, (1 + pageM) * rowsPerPageM - datamember.length) : 0;
  const emptyRowsAderente = pageA > 0 ? Math.max(0, (1 + pageA) * rowsPerPageA - dataaderente.length) : 0;

  const filteredMiembros = applySortFilter(datamember, getComparator(orderM, orderByM), filterNameMiembro);
  const filteredAderentes = applySortFilter(dataaderente, getComparator(orderA, orderByA), filterNameAderente);

  const isMiembroNotFoundMember = filteredMiembros.length === 0;
  const isMiembroNotFoundAderente = filteredAderentes.length === 0;

  return (
    <Page title="Miembro">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>                  
          <Typography variant="h4" gutterBottom>
            Asistencia
          </Typography>
       
        </Stack>
        <Stack direction="row" alignItems="center" spacing={5}>   
        <Card sx={{ flexGrow: 1 }}>
          <MiembroListToolbar
            numSelected={selectedM.length}
            filterName={filterNameMiembro}
            onFilterName={handleFilterByNameM}
          />

          <Scrollbar>
            <TableContainer>
              <Table>
                <MiembroListHead
                  order={orderM}
                  orderBy={orderByM}
                  headLabel={TABLE_HEAD}
                  rowCount={datamember.length}
                  numSelected={selectedM.length}
                  onRequestSort={handleRequestSortMiembro}             
                />
                <TableBody>
                  {filteredMiembros
                    .slice(pageM * rowsPerPageM, pageM * rowsPerPageM + rowsPerPageM)
                    .map((row) => {
                      const { id, id_persona,nombres,apellidos,estado } = row;
                      const isItemSelected = selectedM.indexOf(nombres) !== -1;

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
                              onChange={(event) => handleClickM(event, nombres)}
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
                          <TableCell align="right">
                            <AssitanceMoreMenuM id_miembro={id} id_persona={id_persona}/>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRowsMember > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isMiembroNotFoundMember && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterNameMiembro} />
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
            count={datamember.length}
            rowsPerPage={rowsPerPageM}
            page={pageM}
            onPageChange={handleChangePageMiembro}
            onRowsPerPageChange={handleChangeRowsPerPageMiembro}
          />
        </Card>

        <Card  sx={{ flexGrow: 1 }}>
          <AderenteListToolbar
            numSelected={selectedA.length}
            filterName={filterNameAderente}
            onFilterName={handleFilterByNameA}
          />

          <Scrollbar>
            <TableContainer>
              <Table>
                <AderenteListHead
                  order={orderA}
                  orderBy={orderByA}
                  headLabel={TABLE_HEAD}
                  rowCount={dataaderente.length}
                  numSelected={selectedA.length}
                  onRequestSort={handleRequestSortAderente}           
                />
                <TableBody>
                  {filteredAderentes
                    .slice(pageA * rowsPerPageA, pageA * rowsPerPageA + rowsPerPageA)
                    .map((row) => {
                      const { id, id_persona,nombres,apellidos,estado } = row;
                      const isItemSelected = selectedA.indexOf(nombres) !== -1;

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
                              onChange={(event) => handleClickA(event, nombres)}
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
                          <TableCell align="right">
                            <AssitanceMoreMenuA id_miembro={id} id_persona={id_persona}/>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRowsAderente > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isMiembroNotFoundAderente && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterNameAderente} />
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
            rowsPerPage={rowsPerPageA}
            page={pageA}
            onPageChange={handleChangePageAderente}
            onRowsPerPageChange={handleChangeRowsPerPageAderente}
          />
        </Card>
        </Stack>
      </Container>
    </Page>
  );
}
