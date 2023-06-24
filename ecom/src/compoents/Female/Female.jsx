import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import stl from "./Female.module.css";

const Female = () => {
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

    const handelRating = (e) => {
        let val = e.target.value;
        setRating((prev) => prev = val);
    };


    useEffect(() => {

        let obj = {};

        rating && (obj.rating = rating); 
        brand && (obj.brand = brand);

        setSearchParams(obj);  
        console.log(location.search); 
        axios
            .get(`https://grandscale.onrender.com/womensKurtis/${location.search}`)
            .then((e) => {
                setData(e.data);  
                console.log(e.data); 
            });
    }, [location.search, rating, brand]);

    return (
        <div className={stl.page_top}>
            <h1>Female's Page</h1>
            <div className={stl.Product_head}>
                <div className={stl.ratings}>
                    <h1> Length: {data.length}</h1>
                    {/* Rating */}
                    <div className={stl.rate}>
                        <input
                            type="radio"
                            name="radio"
                            value={3}
                             
                            onClick={handelRating}
                            defaultChecked={rating == 3}
                        />
                        {rating == 3 ? (
                            <h4>&#9733; &#9733; &#9733; &#9734; &#9734; </h4>
                        ) : (
                            <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4>
                        )}
                    </div>
                    <div className={stl.rate}>
                        <input
                            type="radio"
                            name="radio"
                            value={4} 
                            onClick={handelRating}
                            defaultChecked={rating == 4}
                        />
                        {rating == 4 ? (
                            <h4>&#9733; &#9733; &#9733; &#9733; &#9734; </h4>
                        ) : (
                            <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4>
                        )}
                    </div>
                    <div className={stl.rate}>
                        <input
                            type="radio"
                            name="radio"
                            value={5} 
                            onClick={handelRating}
                            defaultChecked={rating == 5}
                        />
                        {rating == 5 ? (
                            <h4>&#9733; &#9733; &#9733; &#9733; &#9733; </h4>
                        ) : (
                            <h4>&#9734; &#9734; &#9734; &#9734; &#9734; </h4>
                        )}
                    </div>
                    {/* Brand */}
                    <div className={stl.ratings}>
                        <h2>Brand</h2>
                        <div className={stl.rate}>
                            <input
                                type="radio"
                                value={"levis"} 
                                defaultChecked={brand.includes("levis")}
                                onClick={handleBrand}
                            />
                            <h3>levis</h3>
                        </div>
                        <div className={stl.rate}>
                            <input
                                type="radio"
                                value={"mufti"} 
                                defaultChecked={brand.includes("mufti")}
                                onClick={handleBrand}
                            />
                            <h3>mufti</h3>
                        </div>
                        <div className={stl.rate}>
                            <input
                                type="radio"
                                value={"zara"} 
                                defaultChecked={brand.includes("zara")}
                                onClick={handleBrand}
                            />
                            <h3>zara</h3>
                        </div>
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

export default Female;
