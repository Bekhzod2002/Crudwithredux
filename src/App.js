import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, editusername } from "./features/Users";

import './index.css';

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value)
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [editUsername, setEditUsername] = useState("");

  return (
    <div className="App">
      {""}
      <div className="addUser">
        <input 
          type="text" 
          placeholder='Name...' 
          onChange={(event) => {
          setName(event.target.value);
          }}
        />
        <input 
          type="text" 
          placeholder='Username...'
          onChange={(event) => {
            setUsername(event.target.value);
          }}  
        />
        <button 
          onClick={() => {
            dispatch(addUser({
              id: userList[userList.length - 1].id + 1, 
              name, 
              username
            })
            );
          }}
        >
          {""}
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return(
            <>

              <div>
                <h1>{user.name}</h1>
                <h1>{user.username}</h1>
                <input 
                  type="text"
                  placeholder="Edit Username..."
                  onChange={(event) => {
                    setEditUsername(event.target.value);
                  }}
                />
                <button 
                  onClick={() => {
                    dispatch(editusername({id: user.id, username: editUsername}))
                  }}
                >
                  Update Username
                </button>
                <button 
                  onClick={() => {
                    dispatch(deleteUser({id: user.id }))
                  }}
                >
                  Delete User
                </button>
              </div>

          
              
            </>


          ) 
        })}
      </div>
    </div>
  );
}

export default App;
