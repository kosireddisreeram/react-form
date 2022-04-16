/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import styles from'./Form.module.css';

// username,password,checkbox,age,date,resumefilefor resume.
const Form = () => {
    const [formData,setFormData] =useState({
        showpassword:false,
        username:"",
        password:'',
        
    });
    const handleChange = (e) =>{
        const inputName = e.target.name;
        // checkbox
        if(e.target.type ==='checkbox'){
          console.log(e.target.value,e.target.checked)
            setFormData({
                ...formData,
                [inputName]:e.target.checked,
            });
        }
        //file
        else if(e.target.type==='file'){
            console.log(e.target.value,e.target.files)

            setFormData({
                ...formData,
                [inputName]:e.target.files,
            });
        }
        else{
        setFormData({
            ...formData,
            [inputName]:e.target.value,
        });
        }
    
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        // fetch api with url ,{method:post,body:JSON.stringify(formData)}
}
  return (
      <div className={styles.form}>
          Form
    <form onSubmit={handleSubmit}>
        <div className={styles.grid}>
            <label>Username</label>
            <input 
            type="text" 
            name="username" 
            value={formData.username}
            onChange={handleChange}/>
        </div>
        <div className={styles.grid}>
            <label>Password</label>
            <input type={formData.showpassword?"text" :"password"}
            name="password" 
             
            // value={formData.password}

            // no need to mention value for user defined 

            onChange={handleChange}/>
        </div>
     
        <div>
            <input type="checkbox" name="showpassword" onChange={handleChange}/>
            <label>Show password</label>
            </div>
            <div/>
        <div className={styles.grid}>
           
        </div>

        <div className={styles.grid}>
            <label>Age</label>
            <input type="number" name="age" onChange={handleChange}/>
        </div>
        <div className={styles.grid}>
            <label>DOB</label>
            <input type="date" name="dob" onChange={handleChange}/>
        </div>
        <div className={styles.grid}>
            <label>resume</label>
            <input type="file" name="resume" onChange={handleChange}/>
        </div>
        <div/>
        <input type="submit" name="submit" />

    </form>
    </div>
  )
}

export default Form