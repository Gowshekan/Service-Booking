import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header.jsx'
import { useState, useEffect } from 'react';


function App() {
  let [data, setData]=useState([]);

  useEffect(()=>{
    const fetchBookingData = async () => {
      try{
        const response=await fetch('http://localhost:5173/Booking.json');
        const da=await response.json();
        setData(da);
      } catch (err){}
    };
    fetchBookingData();
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Header />
      <Outlet 
       context={{
        data
       }}></Outlet>
        
    </div>
  )
}

export default App
