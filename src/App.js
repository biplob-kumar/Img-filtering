
import { useEffect, useState } from 'react';
import './App.css';
import { GalleryData } from './GallaryData';

function App() {

  const [data,setData]=useState([])
  const [collection ,setCollection]=useState([])

  useEffect(()=>{
    setData(GalleryData)
    setCollection([... new Set(GalleryData.map((item)=> item.titile))])
 
  },[]) 

  const gallary_filter=(itemData)=>{
    const filterData=GalleryData.filter((item)=>item.titile==itemData)
    setData(filterData);
  }


  return (
    <div className="App">
     
      <div className='gallary-wraper'>
      <h2> Img Filtering</h2>
      <div className='filter-item'>
          <ul>
            <li> <button onClick={()=> setData(GalleryData)} >All</button></li>
            {
              collection.map((item)=> <button  onClick={()=>{gallary_filter(item)}} >{item}</button>)
            }
          </ul>
      </div>
      <div className='gallary-continer'>
      {
        data.map((item)=>  <div key={item.id} className='gallary-item'> <img src={item.image} /></div> )
      }
      </div>

      </div>
         {/* <GalleryData/> */}
    </div>
  );
}

export default App;
