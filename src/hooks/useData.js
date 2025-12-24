import React, { useEffect } from 'react'
import { useState } from 'react';

function useData() {

const [data,setData] = useState([])

    useEffect(()=>{

        fetch(`https://developerapis.vercel.app/api/users`)
        .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err));
        
    },[])

      return data; 
}

export default useData
