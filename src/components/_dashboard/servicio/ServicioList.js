import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ServicioCard';

// ----------------------------------------------------------------------

ServicioList.propTypes = {
  servicios: PropTypes.array.isRequired
};

export default function ServicioList({ servicios, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {servicios.map((servicio) => (
        <Grid key={servicio.id} item xs={12} sm={6} md={3}>
          <ShopProductCard servicios={servicio} />
        </Grid>
      ))}
    </Grid>
  );
}
