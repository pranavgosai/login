import { useState } from "react";
import { FormControl, FormGroup, Input, InputLabel, Typography,styled ,Button,} from "@mui/material";
import {addUser} from '../service/api';



const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div {
    margin-top:20px;
}
`
const defaultcalue ={
name:'',
username:'',
email:'',
phone:''
}


const  AddUser = () =>{
  const [user,setUser] = useState({defaultcalue});
    const onValueChange =(e)=>{

        setUser({...user,[e.target.name]:e.target.value})
        
    }
const adduserDetails = async ()=>{
    await addUser(user);
}

    return (
        <Container>
            <Typography variant="h4">Add Users</Typography>
            <FormControl>
                <InputLabel>name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name"/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Username" />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Email"/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Phone"/>
            </FormControl>
            <FormControl>
                <Button variant="contained" onClick={()=> adduserDetails()}>add user</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;