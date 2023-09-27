import React, { useState } from 'react';
import './sereach.css'
function Dropdown() {
  let[ dropdown, setdropdown]=useState('');
    let cities=[ 'Chennai','Kancheepuram','Tiruvallur' , 'Cuddalore', 'Viluppuram' ,'Vellore', 'Ranipet', 'Tirupattur', 'Krishnagiri', 'Dharmapuri', 'Salem', 'Namakkal','Erode','Tiruppur','Nilgiris','Coimbatore','Dindigul','Karur','Tiruchirapalli','Perambalur', 'Ariyalur','Nagapattinam','Thanjavur','Tiruvarur','Pudukkottai', 'Sivaganga','Madurai','Theni','Virudhunagar','Ramanathapuram','Thoothukudi', 'Tirunelveli','Tenkasi','Kanniyakumari'];
    let handlechange=(e)=>{
      setdropdown(e.target.value)
    }
  return (
    <div className='main'>
    <h1>Dropdown </h1>
     <input list='data' placeholder='Sereach Districs...' onChange={handlechange}/>
     <datalist id='data'>
          {/* <option >one</option>
          <option>two</option> */}
          {
              cities.map(citie=>{
                return <option>{citie}</option>
              })
            }
            <h1>{dropdown}</h1>
            
     </datalist>
     
    </div>
  )
}

export default Dropdown