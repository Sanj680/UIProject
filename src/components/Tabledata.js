
import React from 'react';
 import '../App.css';
import { Divider,Table} from 'antd';

const Tabledata = (props) => {
  const columns = [
    {
      key: '1',
      title: 'Name',
      dataIndex: 'Name',
    
    },
    {
      key: '2',
      title: 'Age',
      dataIndex: 'Age',

    },
    {
      key: '3',
      title: 'Phone',
      dataIndex: 'Phone',
     
    },
    {  key: '4',
        title: 'Email',
        dataIndex: 'Email',
      
      },
  ]
  return(
    <>
<div className='table'>
    <Divider style={{ margin: '8px 0'  }} />

    <Table

          columns={columns}

     

            dataSource={props.datasource}   >

      </Table>
      </div>
    </>
  )
}
  
export default Tabledata;