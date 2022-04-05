import faker from 'faker';
import { sample } from 'lodash';
// utils

import { mockImgProduct } from '../utils/mockImages';
// ----------------------------------------------------------------------

const SERVICIO_NAME = [
  'CULTO GENERAL',
  'CULTO DE ORACION',
  'ESFUERZO CRISTIANO',
  'LIGA FEMENINA',
  'ESCUELA DOMINICAL'
];

// ----------------------------------------------------------------------

const servicios = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgProduct(setIndex),
    name: SERVICIO_NAME[index],
    /*  price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }), */
    /* priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }), */
    status: sample(['Servicio'])
  };
});

export default servicios;
