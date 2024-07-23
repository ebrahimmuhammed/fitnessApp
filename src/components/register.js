import React,{useState} from 'react';
import {registerUser} from '../api';

const Register =()=>{
    const [formData,setFormData] =useState({
        name:'',
        email:'',
        password:'',
    });

    const handleChange=(e) =>{
        setFormData({...formData,[e.target.name]:e.target.value});
    };


    const handleSubmit=async (e) =>{
        e.DefaultPrevent();
        try {
            const response =await registerUser(formData);
            console.log('user registered:',response);
            
        } catch (error) {
            console.log('error registering user',error);
            
        }
    };

    return(
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} placeholder="Name"/>
        <input type="email" name="email"onChange={handleChange} placeholder="Email"/>
        <input type="password"name="password"onChange={handleChange} placeholder="Password"/>
        <button type="submit">Register</button>
        </form>
    );
    };
    export default Register;