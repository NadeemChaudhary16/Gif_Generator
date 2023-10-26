import React, { useState } from 'react'
import { useEffect } from "react"
import axios from "axios"
import Spinner from "./Spinner";
import useGif from "../Hooks/useGif";
// const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    const[tag,setTag]=useState('Dog')
//     const[gif,setGif]=useState("")
//     const[loading,setLoading]=useState(false)

//   async function fetchData(){
//     setLoading(true)
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const{data}=await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     setGif(imageSource)
//     setLoading(false);
//   }
//   useEffect(() =>{
//     fetchData();
//   },[])

const { gif, loading, fetchData } = useGif(tag);
  return (
    <div className="w-1/2 h-[450px] bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">Random {tag} Gif</h1>
      {
        loading ? (<Spinner />) : (<img src= {gif} className="h-[281px]"/>)
      }
      <input type="text" name="" id=""  className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center" onChange={(event) => setTag(event.target.value)} value={tag}/>
      <button onClick={() => fetchData(tag)} className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold">Generate</button>
    </div>
  )
}

export default Tag
