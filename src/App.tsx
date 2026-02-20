import { useEffect } from "react"
import { useFetch } from "./hooks/use-fetch"

function App() {
  const {data, loading} = useFetch("https://dummyjson.com/posts", {})
  
  useEffect(()=>{
    console.log(data)
  },[])
  return (
    <div>
    </div>
  )
}

export default App
