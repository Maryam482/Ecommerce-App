import React,{useEffect,useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CollectionPreview from '../components/Register/Collection-preview/collection.preview';
function Product() {
    
     const [products, setproducts] = useState([])
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products/')
    //         .then(res=>res.json())
    //         .then(prod=>{
    //             console.log(prod)
    //             setproducts(prod)
            
    //         })
    // }, [])
    // console.log(products)
    return (
        <>
        <Grid container spacing={3}>
        
            {products.map((product)=>(
                <Grid item xs={3}>
               <Paper><CollectionPreview product={product}/>
              </Paper>
                </Grid>
            ))}
            </Grid>
        </>
    )
}

export default Product
