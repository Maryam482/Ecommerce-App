import React from 'react'
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { UserForm } from '../components/Register/UserForm'

function Registeration() {
    return (
        <div style={{marginTop:"5%",textAlign:"center"}}>
     <HowToRegIcon fontSize="large"/>
         <h2 style={{textAlign:"center"}}>Registration Form</h2>
       <UserForm/>
        </div>
    )
}

export default Registeration
