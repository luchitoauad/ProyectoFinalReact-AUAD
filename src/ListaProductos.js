const products =[

    {
        id: '1',
        name: 'Campera Proskin cuero',
        price: 500000,
        category:'Camperas',
        img:'https://http2.mlstatic.com/D_NQ_NP_787600-MLA70635028287_072023-O.webp',
        stock: 20,
        description: 'Campera de cuero con muestra clara de que estilo y seguridad pueden convivir equilibradamente en un producto.'
    },

    {
        id: '2',
        name: 'Casco Ls2 800 Storm ',
        price: 224000,
        category: 'Cascos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_828765-MLA48065633241_102021-O.webp',
        stock: 25,
        description:'Casco LS2 FF800 Storm. Casco integral dinámico y deportivo.'
    },

    {
        id: '3',
        name: 'Guantes Nine To One',
        price: 30000,
        category: 'Guantes',
        img: 'https://http2.mlstatic.com/D_NQ_NP_920201-MLA52404892750_112022-O.webp',
        stock: 34,
        description:'Un guante ligero con protección en nudillos, refuerzo en palma y puño de neoprene.'
    }
]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {   
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category=== productCategory))
        }, 500)
    })
} 
