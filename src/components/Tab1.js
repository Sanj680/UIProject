import { PlusOutlined,MinusCircleOutlined } from '@ant-design/icons';
import { Divider, Select, Space, Button ,Form,Input} from 'antd';
import React, { useState,useEffect} from 'react';
import { useForm } from "react-hook-form";
import '../App.css';
const Tab1 = (props) => {
    const [Tab1, setTab1]= useState([{Name:'',Age:'',Phone:'',Email:''}]);

    
    const LocalKey="Tab1";
   
    const handleinputchange=(e,index)=>{
      const list= [...Tab1];
      list[index][e.target.name]= e.target.value;
      setTab1(list);
      localStorage.setItem(LocalKey,JSON.stringify(Tab1))
   
    }
    
  


    const handleAddFields = () => {
  
      setTab1([...Tab1, {Name:'',Age:'',Phone:'',Email:''}]);
     
  
    };
  
    const handleRemoveFields = (index) => {
      const list  = [...Tab1];
      list.splice(index,1);
      setTab1(list);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Tab1",Tab1);
      const list= [...Tab1];
      setTab1(list);
      localStorage.setItem(LocalKey,JSON.stringify(Tab1))
   
    }; 

  return (
    
    <Select
      style={{
        width: 850,
         margin: '20px 360px',
         padding:"-20px"
      }}
      placeholder={props.placeholder}
      dropdownRender={() => (
        <>
         
          <Divider
            style={{
              direction:'vertical',
              margin: '10px 0',
            }}
          />
          <Space
            style={{
              padding: '0 px ',
             
            }}
          >
            

    <div className="form">
    
    <form onSubmit={handleSubmit} >
  { Tab1.map ((field, index) => (
    
  < div key = {index}>
         
  <Space key={field.key} direction = "horizontal">


              
  <Input placeholder="Name"
      name='Name'
      onChange={ event=>handleinputchange(event,index)} 
      maxLength={15}
      minLength={1}
         >
            
            </Input>
         

            
  <Input placeholder="Age"
      name='Age'
      onChange={ event=>handleinputchange(event,index)} 
      type="number"
             >
            
            </Input>
           
            <Input placeholder="Phone" 
           name='Phone'
           onChange={ event=>handleinputchange(event,index)} 
           type="tel"
           maxLength={10}
            >
            
              </Input>
           

              <Input placeholder="Email"
           name='Email'
           onChange={ event=>handleinputchange(event,index)} 
           type="email"
           maxLength={20}
          
           >
             
             </Input>
 <div>
   {
     Tab1.length!==1 &&(
   
           <MinusCircleOutlined
                  type="button"
                  style = { { height : 40 ,marginTop: 10,color : " red " } }
                  onClick={()=>handleRemoveFields(index)}
                 
                >
                  <span>Remove</span>
                </MinusCircleOutlined>
     )}
                </div>
           </Space>

           
      
           </div>

           
           
           )
           )}
             <div className='button'>
< Button
   icon = { <PlusOutlined /> }
   type = "primary"
   hidden={Tab1.length>=4}
   onClick={() => handleAddFields()}
   block
   
   >
  Add 
</Button>
</div>
<div className='done'>
<Button type="primary" htmltype="submit" onClick={handleSubmit} >
       Done
        </Button>
</div>
           </form>

</div>
             
          
                  
           
</Space>
      </>

      
      )
      
      }
      
   >
 </Select>




 
 );

 
  

};

export default Tab1;


