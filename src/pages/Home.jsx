import React, { useEffect, useState } from 'react';
import { axiosApi } from '../service/Api';

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const getInfo = await axiosApi();
      setData(getInfo)
    }
    getData()
  },[]);
  console.log(data);
  return (
    <>
      {
        data.length
        && (
          
        )
      }
    </>
  )
}
