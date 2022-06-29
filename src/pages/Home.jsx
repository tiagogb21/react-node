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

  return (
    <>
      {
        data.length === 0
        ? (
          <h3>Loading...</h3>
        )
        : (
          data.map((item) => (
            <article>
              <p>
                {`${item.name.title} ${item.name.first} ${item.name.last}`}
              </p>
              <img src={ item.picture.thumbnail } alt="" />
            </article>
          ))
        )
      }
    </>
  )
}
