import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { useLocation, useSearchParams } from 'react-router-dom';
import stl from "./Men.module.css"; 

const Men = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [rating, setRating] = useState("");
    const [brand, setBrand] = useState([]);
    const location = useLocation(); 

    useEffect(() => {
        let isPage = searchParams.get("page") || 1;
        let israting = searchParams.get("rating") || "";
        let isbrand = searchParams.getAll("brand") || [];

        setPage(isPage);
        setRating(israting);
        setBrand(isbrand);

        axios.get(`https://grandscale.onrender.com/mensShirt/${location.search}`).then((e) => {
            setData(e.data);
            console.log(e.data); 
        })

    }, [location.search])

    return (
        <div>
            <h1>Product Page</h1>
            <div className={stl.data_list}>
                {data?.map((e,i)=>(
                    <div key={i+1} className={stl.data_detail}>   
                        <img src={e.image} alt="product-img" />  
                        <h3>{e.tags} </h3>  
                        <p>brand: {e.brand}</p>  
                        <p>Price: ₹{e.price}</p>   
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Men