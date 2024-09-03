import { useEffect, useState } from 'react'
function CoinTable()
{
  const [count,setCount]=useState(0);
  const [flag,setFlag]=useState(false);
  async function api_fetch()
  {
    const response=await fetch("https://api.coingecko.com/api/v3/ping");
    const result=await response.json();
    console.log(result);
  }
  useEffect(()=>{api_fetch();
                 },[count]) 
  useEffect(()=>{console.log("Toggle Pressed")},[flag])
     return (
        <>
           CoinTable
           {count}
           <br />
           <button onClick={()=>setCount(count+1)}>Increment</button>
           <br/>
           {flag && <h1>Flag is True </h1>}
           <button onClick={()=>setFlag(!flag)}>Toggle</button>

        </>
     );
}

export default CoinTable;