import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import stl from "./Product.module.css";

const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [rating, setRating] = useState(3);
    const [brand, setBrand] = useState([]);
    const location = useLocation(); 
    const limit = 12; 

    useEffect(() => {
        let isPage = searchParams.get("page") || 1;
        let israting = searchParams.get("rating") || "";
        let isbrand = searchParams.getAll("brand") || []; 

        setPage(isPage);
        setRating(israting);
        setBrand(isbrand);  



        axios
            .get(`https://grandscale.onrender.com/mensShirt/${location.search}`)
            .then((e) => {
                setData(e.data);
                console.log(e.data);
            });
    }, [location.search]);

    return (
        <div>
            <h1>Product Page</h1>
            <div className={stl.Product_head}>
                <div className={stl.ratings}>
                    <div className={stl.rate}> 
                        <input type="radio" name="radio" onClick={()=>setRating(3)} /> 
                        {rating ==3 ? <h4>&#9733; &#9733; &#9733; &#9734; &#9734; </h4> : <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4> }  
                    </div>
                    <div className={stl.rate}>
                        <input type="radio" name="radio" onClick={()=>setRating(4)} />  
                        {rating ==4 ? <h4>&#9733; &#9733; &#9733; &#9733; &#9734; </h4> : <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4> }  
                    </div>
                    <div className={stl.rate}>
                        <input type="radio" name="radio" onClick={()=>setRating(5)} />  
                        {rating ==5 ? <h4>&#9733; &#9733; &#9733; &#9733; &#9733; </h4> : <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4> }
                    </div>
                </div>
                <div className={stl.data_list}>
                    {data?.map((e, i) => (
                        <div key={i + 1} className={stl.data_detail}>
                            <img src={e.image} alt="product-img" />
                            <h3>{e.tags} </h3>
                            <p>brand: {e.brand}</p>
                            <p>Price: ₹{e.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;
