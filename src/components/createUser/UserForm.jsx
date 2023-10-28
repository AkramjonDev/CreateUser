import './UserForm.css';
import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';

const UserForm = ({ addUser }) =>{
    const [user, setUser] = useState({
        id: uuidv4(),
        image: '',
        firstName: '',
        lastName: '',
        age: null,
        from: '',
        job: '',
        gender: '',
        
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        addUser(user)
    }
  return (
    <div className='modal-wrapper'>
        <div className="overlay">
            <div className="modal">
                <h2>Create New User</h2>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">
                        <span>Image URL: </span>
                        <input onChange={(e) =>{setUser((prev) =>{
                            return {...prev, image: e.target.value}
                        })}} type="text" required/>
                    </label>
                    <label htmlFor="">
                        <span>First Name: </span>
                        <input onChange={(e) =>{setUser((prev) =>{
                            return {...prev, firstName: e.target.value}
                        })}} type="text" required/>
                    </label>
                    <label htmlFor="">
                        <span>Last Name: </span>
                        <input onChange={(e) =>{setUser((prev) =>{
                            return {...prev, lastName: e.target.value}
                        })}} type="text" required/>
                    </label>
                    <label htmlFor="">
                        <span>Age: </span>
                        <input onChange={(e) =>{setUser((prev) =>{
                            return {...prev, age: e.target.value}
                        })}} type="text" required/>
                    </label>
                    <label htmlFor="">
                        <span>From: </span>
                        <input onChange={(e) =>{setUser((prev) =>{
                            return {...prev, from: e.target.value}
                        })}} type="text" required/>
                    </label>
                    <label htmlFor="">
                        <span>Job: </span>
                        <input onChange={(e) =>{setUser((prev) =>{
                            return {...prev, job: e.target.value}
                        })}} type="text" required/>
                    </label>
                    <div className='gender'>
                        <span>Gender: </span>
                        <label htmlFor="">
                        <small>Male </small>
                        <input onChange={(e) =>{setUser((prev) =>{
                            return {...prev, gender: e.target.value}
                        })}} type="radio" name='gender' value="male" required/>
                    </label>
                    <label htmlFor="">
                        <small>Female </small>
                        <input onChange={(e) =>{setUser((prev) =>{
                            return {...prev, gender: e.target.value}
                        })}} type="radio" name='gender' value="female" required/>
                    </label>
                    </div>
                    <button className='modal-btn'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserForm;