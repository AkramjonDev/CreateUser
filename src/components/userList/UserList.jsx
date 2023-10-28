import React from 'react';
import './UserList.css';

const UserList = ({ users , DeleteBtn}) => {
  return (
    <div className='userList'>
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className='card' key={user.id}>
              <div className="card-inner">
                <img src={user.image} alt={user.firstName} width={150} height={150} />
                <h3>{user.firstName} {user.lastName} {user.age} age</h3>  
                <p>from {user.from}</p> 
                <p>Job: {user.job}</p> 
                <p>Gender: {user.gender}</p>
                <button onClick={() => DeleteBtn(user.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
