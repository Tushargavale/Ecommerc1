import { useState,useEffect,useRef } from "react"


export const useApi=(url)=>{

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const ref=useRef()

    useEffect(() => {

       
     
    }, [url])
    



  return [loading,data,errors]
    

}

























