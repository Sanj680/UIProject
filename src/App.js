import './App.css';
import React, { useState,useEffect} from 'react';
import {Form,Button} from 'antd'
import Tab from './components/Tab';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';

import Tabledata from './components/Tabledata';

function App(){

const [data1,setdata1]= useState([]);
const [data2,setdata2]= useState([]);
const [data3,setdata3]= useState([]);

const[show,setShow]=useState(false);

useEffect(()=>{
  const retrievedlist=JSON.parse(localStorage.getItem("Tab"))
  if(retrievedlist)setdata1(retrievedlist)
},[])


useEffect(()=>{
  const retrievedlist2=JSON.parse(localStorage.getItem("Tab1"))
  if(retrievedlist2)setdata2(retrievedlist2)
},[])


useEffect(()=>{
  const retrievedlist3=JSON.parse(localStorage.getItem("Tab2"))
  if(retrievedlist3)setdata3(retrievedlist3)
},[])


const handleclick=event =>{

  setShow(current=>!current);

}
  
  return(
  

    <><div>
      <Tab placeholder="tab" />
      <Tab1 placeholder="tab1" />
      <Tab2 placeholder="tab2" />
      <Form.Item wrapperCol={{ offset: 12, span: 18, padding: 27 }}>
        <Button type="primary" htmlType="submit" onClick={handleclick}>
          Submit
        </Button>
      </Form.Item>
    </div>
  
{show && ( 


    <><div>
          <Tabledata datasource={data1} />


        </div><div>
            <Tabledata datasource={data2} />


          </div><div>
            <Tabledata datasource={data3} />


          </div></>

) }
      </>



  )

}

export default App;



  


