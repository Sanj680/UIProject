import { PlusOutlined,MinusCircleOutlined } from '@ant-design/icons';
import { Divider, Select, Space, Button ,Form,Input} from 'antd';
import React, { useState,useEffect} from 'react';


import '../App.css';
import { name } from 'tar/lib/types';
const Tab = (props) => {
  const [Tab, setTab]= useState([{Name:'',Age:'',Phone:'',Email:''}]);
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };




  const LocalKey="Tab";
 
  const handleinputchange=(e, index)=>{
    const list= [...Tab];
    list[index][e.target.name]= e.target.value;
    setTab(list);
 
 
  }
  

  const handleAddFields = () => {

    setTab([...Tab, {Name:'',Age:'',Phone:'',Email:''}]);

   

  };

  const handleRemoveFields = (index) => {
    const list  = [...Tab];
    list.splice(index, 1);
    setTab(list);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tab",Tab);
    const list= [...Tab];
    setTab(list);
    localStorage.setItem(LocalKey,JSON.stringify(Tab))

    

    
  
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
  { Tab.map ((field, index) => (
    
  < div key = {index}>
         
  <Space  direction = "horizontal">


            
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
     Tab.length!==1 &&(
   
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
   hidden={Tab.length>=4}
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

export default Tab;


