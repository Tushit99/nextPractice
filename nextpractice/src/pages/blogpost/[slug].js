import { useRouter } from 'next/router'
import React from 'react'

const Blog = () => { 
    const route = useRouter(); 
    const {slug} = route.query

  return (
    <div>
        {slug}
    </div>
  )
}

export default Blog