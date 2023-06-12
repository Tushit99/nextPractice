import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1);
    const [rating, setRating] = useState("");
    const [brand, setBrand] = useState([]);

    useEffect(() => {
        let isPage = searchParams.get("page") || 1;
        let israting = searchParams.get("rating") || "";  
        let isbrand = searchParams.getAll("brand") || [];

        setPage(isPage);
        setRating(israting);
        setBrand(isbrand);

    }, [])

    console.log(page);
    console.log(rating); 
    console.log(brand);

    return (
        <div>Product Page</div> 
    )
}

export default Product  
