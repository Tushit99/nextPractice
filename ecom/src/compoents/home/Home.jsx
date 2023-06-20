import React, { useEffect } from "react";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div> 
      <div className={style.home_top}>
        <div>
          <img src="https://www.jcrew.com/brand_creative/2023/202306-Jun/linen/2023jun_0523_linen_w_img4.jpg" alt="img1" />
          <p>New Marie Marot X Grand Scale</p>
          <h5> Our third collaboration with the Parisian designer, plus more nautical new arivals. </h5>
        </div>
        <div>
          <img src="https://www.jcrew.com/brand_creative/2023/202306-Jun/linen/2023jun_0523_linen_w_img6.jpg" alt="img2" />
        </div> 
        <div>
          <img src="https://www.jcrew.com/brand_creative/2023/202306-Jun/linen/2023jun_0523_linen_w_img3.jpg" alt="img3" />
        </div>
        <div>
          <img src="https://www.jcrew.com/brand_creative/2023/202306-Jun/linen/2023jun_0523_linen_w_img9.jpg" alt="img4" />
          <p>Linen for life</p>
          <h5> Show the summer fabric </h5>
        </div>
      </div>
      <div className={style.home_link}>
        <h2>Shop New Arrivals</h2>
        <button>Shop Women</button>
        <button>Shop Men</button>
        <button>Shop Girls</button>
        <button>Shop Boys</button>
      </div>
      <div className={style.vid_div}>
        <h1>More Stories</h1>
        <video autoPlay muted loop>
          <source src="https://www.jcrew.com/brand_creative/homepage2023/06-Jun/SITE_EntryAnimation_1256x493_v2_hb.mp4" type="video/mp4" />
        </video>
        <h3>Step into our virtual beach house…</h3>
        <h4>A new way to shop and explore the world of J.Crew.</h4>
        <a href="#">Discover, play & find something new</a> 
        <div className={style.flex}>
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2023/06-Jun/2023jun_0606_hp_w_img7.jpg" alt="" /> 
            <h3>Creative spirits series: Marie Marot X J.Crew</h3>  
            <a href="#">See the story</a>  
          </div>
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2023/06-Jun/2023jun_0606_hp_w_img8.jpg" alt="" /> 
            <h3>Olympia’s picks</h3>  
            <a href="#">Shop her favorite styles</a>  
          </div>
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2023/06-Jun/2023jun_0606_hp_w_img9.jpg" alt="" /> 
            <h3>The edit: sailor’s delight</h3>  
            <a href="#">Shop the roundup</a>  
          </div>
          <div>
            <img src="https://www.jcrew.com/brand_creative/homepage2023/06-Jun/2023jun_0606_hp_w_img10.jpg" alt="" /> 
            <h3>Quality time with Brynn Wallner</h3>  
            <a href="#">See the story</a>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

