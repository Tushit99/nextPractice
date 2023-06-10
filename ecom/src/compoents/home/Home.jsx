import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Home = () => { 
    let [searchParams, setSearchParams] = useSearchParams(); 

    console.log(searchParams);

  return (
    <div>
        <h1 className='h1'>Home Page</h1> 
    </div>
  )
}

export default Home