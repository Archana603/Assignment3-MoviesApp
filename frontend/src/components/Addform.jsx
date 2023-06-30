import { Button, Table, TableCell, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addform = (props) => {
  var navigate = useNavigate();
  var[inp,setInp] = useState(props.data);

  console.log(props.data);

  const inputHandler = (e)=>{
    const {name,value}=e.target;
    setInp((inp)=>({...inp,[name]:value}));
    console.log(inp)
  }
  const readHandler=()=>{
    console.log("clicked")
    if(props.method==="post"){
    axios
    .post("http://localhost:3008/add",inp)
    .then((response)=>{
      alert("data added");
      navigate("/");
    })
    .catch(err=>console.log(err));
  };
  if(props.method==="put"){
    axios.put("http://localhost:3008/edit/"+inp._id,inp)
 .then((response)=>{
  alert("updated");
  window.location.reload(false)
 })
  }
}

  return (
    <div style={{paddingTop:'100px'}} id='adform'>
      <Table>
        <TableCell>
 <div id='first'>   
<TextField name='name' value={inp.name} onChange={inputHandler} label='Movie name'/>
<br /><br />
<TextField name='actor' value={inp.actor} onChange={inputHandler} label='actor'/>
<br /><br />
<TextField name='actress' value={inp.actress} onChange={inputHandler} label='actress'/>
<br /><br />
<TextField name='director' value={inp.director} onChange={inputHandler} label='director'/>
<br /><br />
</div> 
</TableCell> 
<TableCell>
<div id='second'>
<TextField name='year' value={inp.year} onChange={inputHandler} label='released year'/>
<br /><br />
<TextField name='camera' value={inp.camera} onChange={inputHandler} label='camera'/>
<br /><br />
<TextField name='producer' value={inp.producer} onChange={inputHandler} label='producer'/>
<br /><br />
<TextField name='language' value={inp.language} onChange={inputHandler} label='language'/>
<br /><br />
</div>
</TableCell>
<TableRow>
<Button onClick={readHandler} variant='contained' id='but'>Submit</Button>
</TableRow>
</Table>

    </div>
  )
}

export default Addform