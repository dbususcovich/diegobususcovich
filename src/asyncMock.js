import prod1 from './assets/prod1.jpg';
import prod2 from './assets/prod2.jpg';
import prod3 from './assets/prod3.jpg';

const products = [
    {id:'1', name: 'Termo Stanley', price: 1000, category:'termo', img: prod1, stock: 25, description: 'Descripcion Producto 1'},
    {id:'2', name: 'Termo Luminagro', price: 2000, category:'termo', img:prod2, stock: 25, description: 'Descripcion Producto 2'},
    {id:'3', name: 'Mate Uruguayo', price: 3000, category:'mate', img:prod3, stock: 25, description: 'Descripcion Producto 3'},
]



const categories = [
    { id:'1', description: 'Termo', slug: 'termo'},
    { id:'2', description: 'Mate', slug: 'mate'},
    { id:'3', description: 'Otro', slug: 'otro'}
]

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(categories)
    }, 500)
})
}

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(products)
    }, 500)
})
}

export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1000)
    })
}