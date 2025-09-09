import Nav from './Components/Nav'
import Footer from './Components/Footer'
import MComponent from './Body/MComponent'
import './App.css'
import { useEffect,useState } from 'react'
import axios from 'axios'

function App() {

  const [data1, setdata1] = useState([])
  const [data2, setdata2] = useState([])
  const [data3, setdata3] = useState([])

  useEffect(()=>{

    const fetchData=async()=>{
    try{
      const response=await axios.get('https://dashboard-134u.onrender.com/getdata')
      if(response.status===200){
        setdata1(response.data.data1)
        setdata2(response.data.data2)
        console.log("data fetched succesfully")
      }
    }catch(error){
      console.log(error);
    }
    
  }
  fetchData()
},[])

  return (
    <>
      <div className='flex flex-col h-screen '>
        <div
          className='h-[10%]'
        ><Nav />
        </div>
        <div
          className='h-[80%] flex flex-col'
        >
          <div
            className='h-[95%] overflow-auto'
          >
            <MComponent  data1={data1} data2={data2} />
          </div>
          <div
            className='h-[5%]'
          ><Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
