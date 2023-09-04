const products =[
    {
        id: '1',
        name: 'Casco Moto Axxis Draken',
        price: 82000,
        category: 'Cascos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_616815-MLU71055409102_082023-O.webp',
        stock: 10,
        description:'diseñado para brindarte una experiencia inolvidable en cada uno de tus viajes.'
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
        name: 'Casco Ls2 352 Tribal',
        price: 70000,
        category: 'Cascos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_750453-MLA54847380397_042023-O.webp',
        stock: 10,
        description:'Casco aerodinámico pintado con resina HPTT (Tecnología termoplástica de alta presión).'
    },


    {
        id: '4',
        name: 'Campera Proskin cuero',
        price: 500000,
        category:'Camperas',
        img:'https://http2.mlstatic.com/D_NQ_NP_787600-MLA70635028287_072023-O.webp',
        stock: 20,
        description: 'Campera de cuero con muestra clara de que estilo y seguridad pueden convivir equilibradamente en un producto.'
    },

    {
        id: '5',
        name: 'Campera Moto Ninetoone',
        price: 120000,
        category: 'Camperas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_851152-MLA50021352045_052022-O.webp',
        stock: 14,
        description:'La Campera Race 3 es Urbana de Softshell. Con Elastano y membrana impermeable de 8000 H2O.'
    },

    {
        id: '6',
        name: 'Campera Moto Stav Base',
        price: 68700,
        category: 'Camperas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_704512-MLA46336298223_062021-O.webp',
        stock: 13,
        description:'La Campera STAV Base Protection, combina un look con corte deportivo y funcionalidad para el día a día.'
    },

    {
        id: '7',
        name: 'Guantes Brooklyn Riders',
        price: 78000,
        category: 'Guantes',
        img: 'https://http2.mlstatic.com/D_NQ_NP_772872-MLA70277671544_072023-O.webp',
        stock: 25,
        description:'Guantes de cuero, con protecciones.Construcción 100% cuero vacuno para una excelente resistencia a la abrasión'
    },
    
    {
        id: '8',
        name: 'Guantes Nine To One',
        price: 30000,
        category: 'Guantes',
        img: 'https://http2.mlstatic.com/D_NQ_NP_920201-MLA52404892750_112022-O.webp',
        stock: 34,
        description:'Un guante ligero con protección en nudillos, refuerzo en palma y puño de neoprene.'
    },


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
