import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgProduct } from '../utils/mockImages';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'CONSISTORIO',
  'DIACONIA',
  'DETE',
  'LIGA FEMENINA',
  'ESFUERZO CRISTIANO',
  'LITURGIA',
  'ESCUELA DOMINICAL'
];

// ----------------------------------------------------------------------

const products = [...Array(6)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgProduct(setIndex),
    name: PRODUCT_NAME[index],
    /*  price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }), */
    /* priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }), */
    status: sample(['Departamento', 'Servicio'])
  };
});

export default products;
