import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import UserList from './components/userList/UserList';
import UserForm from './components/createUser/UserForm';
import './App.css'
const App = () => {
  const [user, setUser] = useState([]);
  const DeleteBtn = (id) => {
    // console.log(id);
    setUser((prev) =>{
      
      return prev.filter((user) =>{
        return user.id !== id
      })
    })
  }
  const [showModal, setShowModal] = useState(false)
  const closeModal = (w) => {
    if(w.target.className === "overlay" ) setShowModal(false)
    if(w.key === "Escape") setShowModal(false)
  }
  const addUser = (user) =>{
    setUser((prev) =>{
      return [...prev, user]
    })
  }
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className='App'>
      <Navbar usersLength={user.length}/>
      <main>
        <div className="no-users">
          {user.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={user} DeleteBtn={DeleteBtn}/>
      </main>
      {showModal && <UserForm  addUser={addUser}/>}
      <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
      <Footer/>
    </div>
  )
}

export default App