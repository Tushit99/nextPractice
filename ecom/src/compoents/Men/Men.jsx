import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import stl from "./Men.module.css"; 

const Men = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1); 
    const initialRating = searchParams.get("rating"); 
    const initalBrand = searchParams.getAll("brand");  
    const [rating, setRating] = useState(initialRating || null);  
    const location = useLocation();
    const limit = 12;
    const [brand, setBrand] = useState(initalBrand || []);

    // const handleChange = (e) => {
    //     let newCat = [...brand];
    //     let value = e.target.value; 

    //     if (newCat.includes(value)) {
    //         newCat.splice(newCat.indexOf(value), 1);
    //     } else {
    //         newCat.push(value);
    //     }
    //     setBrand(newCat);
    // };  

    const handelchang =(a)=>{
        setRating(a); 
    }

    useEffect(() => {

        let obj = {
            page: page
        }
        rating && (obj.rating = rating); 
        
        axios
            .get(`https://grandscale.onrender.com/mensShirt/${location.search}`)
            .then((e) => {
                setData(e.data);
                console.log(e.data);
            });

        setSearchParams(obj);

    }, [location.search, rating]);

    return (
        <div>
            <h1>Men's Page</h1>
            <div className={stl.Product_head}>
                <div className={stl.ratings}>
                    <div className={stl.rate} >
                        <input type="radio" name="radio" onClick={() => handelchang(3)} defaultChecked={rating==3} /> 
                        {rating == 3 ? (
                            <h4>&#9733; &#9733; &#9733; &#9734; &#9734; </h4>
                        ) : (
                            <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4>
                        )} 
                    </div>
                    <div className={stl.rate}>
                        <input type="radio" name="radio" onClick={() => handelchang(4)} defaultChecked={rating==4} />
                        {rating == 4 ? (
                            <h4>&#9733; &#9733; &#9733; &#9733; &#9734; </h4>
                        ) : (
                            <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4>
                        )}
                    </div>
                    <div className={stl.rate}>
                        <input type="radio" name="radio" onClick={() => handelchang(5)} defaultChecked={rating==5} />
                        {rating == 5 ? (
                            <h4>&#9733; &#9733; &#9733; &#9733; &#9733; </h4>
                        ) : (
                            <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4>
                        )}
                    </div>
                </div> 
                <div className={stl.data_list}>
                    {data?.map((e, i) => (
                        <div key={i + 1} className={stl.data_detail}>
                            <img src={e.image} alt="product-img" />
                            <h3>{e.tags} </h3>
                            <p>brand: {e.brand}</p>
                            <p>Price: ₹{e.price}</p>
                            <p>rating: {e.rating}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Men;
