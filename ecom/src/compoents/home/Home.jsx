import React, { useEffect } from "react";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className={style.home_top}> 
        <img src="https://www.jcrew.com/brand_creative/2023/202306-Jun/linen/2023jun_0523_linen_w_img1.jpg" alt="" />
        <img src="https://www.jcrew.com/brand_creative/2023/202306-Jun/linen/2023jun_0523_linen_w_img2.jpg" alt="" /> 
        <img src="https://www.jcrew.com/brand_creative/2023/202306-Jun/linen/2023jun_0523_linen_w_img3.jpg" alt="" />
        <img src="https://www.jcrew.com/brand_creative/2023/202306-Jun/linen/2023jun_0523_linen_w_img7.jpg" alt="" />
      </div> 
      <div>

      </div>
    </div>
  );
};

export default Home; 


