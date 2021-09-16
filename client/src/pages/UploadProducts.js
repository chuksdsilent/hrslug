import React, {useState, useEffect} from 'react'
import InnerNavbar from '../components/InnerNavbar';

import { Link } from 'react-router-dom'
import '../css/home.css'
import axios  from 'axios'
const UploadProducts = () => {

    let [product , setProduct] = useState({
        product_name: '',
        product_price: '',
        qty: '',

    })

    let [serverProduct, setServerProduct ] = useState([])
    let [msg, setMsg] = useState(false)
    let [servermsg, setServerMsg] = useState("")
    const {product_name, product_price, qty} = product;

    useEffect(() => {  
        const config = {
            headers: {
                'Cotent-Type': 'application/json',
                'x-header-token': localStorage.getItem("token")
            }
        }
         axios.get(process.env.REACT_APP_SERVER_APP_URL + `/api/product`,  config)
        .then((data) => {
            console.log(data.data)
            setServerProduct(data.data)
            console.log(serverProduct);
        })
        .catch((err) => {
            console.log(err)
        });
     }, [msg]);
   
    const onChange = (e) => setProduct({ ...product, [e.target.name]: e.target.value})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(product);

        
       const config = {
        headers: {
            'Cotent-Type': 'application/json',
            'x-header-token': localStorage.getItem("token")

        }
    }
        axios.post(process.env.REACT_APP_SERVER_APP_URL + '/api/product', product, config)
        .then((data) => {
            console.log(data)
            setMsg(true)
            setServerMsg(data.data.msg)
            setProduct({
                product_name: '',
                    product_price: '',
                    qty: '',
            
                })
        })
        .catch((err) => {
            console.log(err)
        });
    }
    return (
        <div >
            <InnerNavbar />
            
        <div className="upload-product">

            {msg && (
                <div className="alert alert-success">
                    {servermsg}
                </div>
            )}
            <h4>Upload Product</h4>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Product Name</label>
                    <input type="text" name="product_name" value={product_name} onChange={onChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Product Price</label>
                    <input type="text" name="product_price" value={product_price} onChange={onChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Quantity</label>
                    <input type="text"name="qty" value={qty} onChange={onChange} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
            <h4 style={{marginTop: 30}}>Products</h4>
            <div className="table">
                <table className="table">
                    <thead>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Quantity</th>
                    </thead>
                    {
                        serverProduct.map((product) => {
                            return (
                                <tr key={product.key}>
                                    <td>{product.product_name}</td>
                                    <td>{product.product_price}</td>
                                    <td>{product.qty}</td>
                                </tr>
                            )
                        })
                    }
                </table>
                </div>
</div>
        </div>
    )
}
export default UploadProducts
