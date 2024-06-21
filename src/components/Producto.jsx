import { Component } from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

const styles = {
  producto: {
    border: "solid 1px #eee",
    boxShadow: "4px 5px 3px rgb(0, 0, 0, 0.2)",
    width: "30%",
    padding: "10px 15px",
    borderRadius: "5px",
  },
  img: {
    width: "100%",
  },
};

class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;
    //console.log(agregarAlCarro);
    //console.log(producto);

    return (
      <div style={styles.producto}>
        <img style={styles.img} alt={producto.name} src={producto.img} />
        <h3>{producto.name}</h3>
        <p>{producto.price}</p>
        <Button onClick={() => agregarAlCarro(producto)}>Agregar al carro</Button>
      </div>
    );
  }
}

Producto.propTypes = {
  producto: PropTypes.any.isRequired,
  agregarAlCarro: PropTypes.any.isRequired,
};

export default Producto;