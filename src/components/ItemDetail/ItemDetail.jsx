import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext (CarritoContext);



    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        //console.log("Productos agregados: " + cantidad);
        const item = {id, nombre, precio};
        agregarProducto(item, cantidad); 
    }

    return (
        <div className='contenedorItem'>
            <h2>{nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>{id} </h3>
            <p>HECHO A MANO. PIEZAS UNICAS Y EXCLUSIVAS</p>
            <img src={img} alt={nombre} />           
            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail