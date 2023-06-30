import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Addform from './Addform';
import { Form } from 'react-router-dom';
import { red } from '@mui/material/colors';
const Homepage = () => {
    var[films,setFilms] = useState([]);
    var[update,setUpdate] = useState();
    const [search,setSearch] = useState('')
    console.log(search)
    var[singleValue,setsingleValue] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3008/view")
        .then((response)=>{
            console.log(response.data)
            setFilms(response.data);
            
        })
    },[]);
    
    
    var deleteValues =(id)=>{
console.log(id);
axios.delete("http://localhost:3008/delete/"+id)
.then((response)=>{
    alert("deleted")
    window.location.reload(false)
})
.catch(err=>console.log(err))
    }
const updateValues=(value)=>{
    console.log("update clicked");
    setUpdate(true);
    setsingleValue(value);
}

var finalJsx =(
    
<TableContainer style={{paddingTop:"100px"}}>

<input  placeholder='search...' onChange={(e)=>setSearch(e.target.value)}/>
<Table>
    <TableHead>
        <TableRow>
            <TableCell>Movie Name</TableCell>
            <TableCell>Actor</TableCell>
            <TableCell>Actress</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Released Year</TableCell>
            <TableCell>Camera</TableCell>
            <TableCell>Producer</TableCell>
            <TableCell>Language</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>
        {films
        .filter((val)=>{
            return search.toLowerCase()===''
            ?val
            :val.name.toLowerCase().includes(search);
        })
        .map((val,i)=>{
            return(
                <TableRow key={i}>
                    <TableCell>{val.name}</TableCell>
                    <TableCell>{val.actor}</TableCell>
                    <TableCell>{val.actress}</TableCell>
                    <TableCell>{val.director}</TableCell>
                    <TableCell>{val.year}</TableCell>
                    <TableCell>{val.camera}</TableCell>
                    <TableCell>{val.producer}</TableCell>
                    <TableCell>{val.language}</TableCell>
                    <TableCell>
                        <Button onClick={()=>deleteValues(val._id)} variant='contained'>
                           Delete 
                        </Button>
                    </TableCell>
                    <TableCell>
                        <Button onClick={()=>updateValues(val)} variant='contained'>
                            Update
                        </Button>
                    </TableCell>

                </TableRow>
            );
        })}
    </TableBody>
</Table>
</TableContainer>
);
if(update) finalJsx = <Addform data={singleValue} method='put'/>
  return finalJsx;
  <div id='body'></div>
};

export default Homepage