import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <>
            <h2 style={{ textAlign: "center", fontSize: "70px", margin: "30px" }}> PRODUCTOS </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer