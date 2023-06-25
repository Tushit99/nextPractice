import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import stl from "./Men.module.css";
import Skliton from "../ProductSkliton/Skliton";

const Men = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState([]); 
    const initialRating = searchParams.get("rating");
    const initalBrand = searchParams.getAll("brand");
    const [rating, setRating] = useState(initialRating || null);
    const location = useLocation(); 
    const [brand, setBrand] = useState(initalBrand || []);

    const handleBrand = (e) => {
        let newCat = [...brand];
        let value = e.target.value;

        if (newCat.includes(value)) {
            newCat.splice(newCat.indexOf(value), 1);
        } else {
            newCat.push(value);
        }
        setBrand(newCat);
    };

    const handelchang = (a) => {
        setRating(a);
    }

    let obj = {
        // _limit: 12, 
        brand: brand 
    }
    rating && (obj["rating"] = rating);


    
    useEffect(() => {

        setSearchParams(obj);
 
        axios
            .get(`https://grandscale.onrender.com/mensShirt/${location.search}`)
            .then((e) => {
                setData(e.data);
                console.log(location.search,e.data);
            });


    }, [location.search, rating, brand]);

    return (
        <div>
            <h1>Men's Page</h1>
            <div className={stl.Product_head}>
                <div className={stl.ratings}>
                    <h1> Length: {data.length}</h1>
                    <div className={stl.rate} >
                        <input type="radio" name="radio" onClick={() => handelchang(3)} defaultChecked={rating == 3} />
                        {rating == 3 ? (
                            <h4>&#9733; &#9733; &#9733; &#9734; &#9734; </h4>
                        ) : (
                            <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4>
                        )}
                    </div>
                    <div className={stl.rate}>
                        <input type="radio" name="radio" onClick={() => handelchang(4)} defaultChecked={rating == 4} />
                        {rating == 4 ? (
                            <h4>&#9733; &#9733; &#9733; &#9733; &#9734; </h4>
                        ) : (
                            <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4>
                        )}
                    </div>
                    <div className={stl.rate}>
                        <input type="radio" name="radio" onClick={() => handelchang(5)} defaultChecked={rating == 5} />
                        {rating == 5 ? (
                            <h4>&#9733; &#9733; &#9733; &#9733; &#9733; </h4>
                        ) : (
                            <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4>
                        )}
                    </div>
                    <div className={stl.ratings}>
                        <h2>Brand</h2>
                        <div className={stl.rate} >
                            <input type="radio" value={"levis"} defaultChecked={brand.includes("levis")} onClick={handleBrand} />
                            <h3>levis</h3>
                        </div>
                        <div className={stl.rate} >
                            <input type="radio" value={"yepme"} defaultChecked={brand.includes("yepme")} onClick={handleBrand} />
                            <h3>yepme</h3>
                        </div>
                        <div className={stl.rate} >
                            <input type="radio" value={"mufti"} defaultChecked={brand.includes("mufti")} onClick={handleBrand} />
                            <h3>mufti</h3>
                        </div>
                        <div className={stl.rate} >
                            <input type="radio" value={"van-heusen"} defaultChecked={brand.includes("van-heusen")} onClick={handleBrand} />
                            <h3>van-heusen</h3>
                        </div>
                    </div>
                </div>
                {data.length == 0 ? <Skliton /> : <div className={stl.data_list}>
                    {data?.map((e, i) => (
                        <div key={i + 1} className={stl.data_detail}>
                            <img src={e.image} alt="product-img" />
                            <h3>{e.tags} </h3>
                            <p>brand: {e.brand}</p>
                            <p>Price: ₹{e.price}</p>
                            <p>rating: {e.rating}</p>
                        </div>
                    ))}
                </div>}  
            </div>
        </div>
    );
};

export default Men;
