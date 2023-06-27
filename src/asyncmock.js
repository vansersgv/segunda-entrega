const productos = [
    { nombre: "Cuenco", precio: 1500, id: "1", stock:10, img: "../img/cuencos.png", idCat: "2" },
    { nombre: "Cuenco", precio: 1800, id: "2", stock:10, img: "../img/cuenco.png", idCat: "2" },
    { nombre: "Taza", precio: 2000, id: "3", stock:10, img: "../img/tazas.png", idCat: "3" },
    { nombre: "Taza", precio: 1400, id: "4", stock:10, img: "../img/taza.png", idCat: "3" },
    { nombre: "Maceta", precio: 2000, id: "5", stock:10, img: "../img/macetas.png", idCat: "4" },
    { nombre: "Maceta", precio: 2400, id: "6", stock:10, img: "../img/maceta.png", idCat: "4" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}