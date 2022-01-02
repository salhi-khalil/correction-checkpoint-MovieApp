import {FormControl, InputGroup} from 'react-bootstrap';

import Rate from './Rate'
import React from 'react'

function Filter({setsearch, setrating, rating}) {
 
  
    return (
        <div className="filter" >
             <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
    <FormControl
      placeholder="search Movie By Name"
      aria-label="Username"
      aria-describedby="basic-addon1"
       
           onChange = { (e)=> setsearch((e.target.value))}
    />
  </InputGroup>

   
    
      <Rate rating={rating} setrating={setrating} />
        </div>
    )
}

export default Filter;
