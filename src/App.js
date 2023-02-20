import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, edituser} from "./features/Users";
import { CountryDropdown } from "react-country-region-selector";
import {FaEdit} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';

import './index.css';

const App = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone ] = useState("");
  const [location, setLocation] = useState("");
  const [newName, setNewName] = useState("")
  const [newUsername, setNewUsername] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newlocation, setNewLocation] = useState("");
  const [state, setState] = useState({
    country: "",
  
  })



  const selectCountry = (val) => {
    setState({...state, country: val });
  }

  const {country} = state;

  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(null);
  

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
        <input
          type="text"
          placeholder="Phone..."
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
         <div>
            <CountryDropdown
              value={country}
              onChange={(val) => selectCountry(val)} 
              onClick={(event) => setLocation(event.target.value)}
            />

         </div>
        <button className="addbtn"
          onClick={() => {
            dispatch(addUser({
              id: userList.length + 1, 
              name, 
              username,
              phone,
              country,
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

              <div className="post">

                <div className="content">
                  <div className="name">{user.name}</div>
                  <div className="username">{user.username}</div>
                  <div className="phone">{user.phone}</div>
                  <div className="country">{user.country}</div>

                  <button className="edit"
                    onClick={() => {
                      setIsEdit(true)
                      setId(user.id)
                      
                      }
                  }

                  >
                  <FaEdit/>  Edit
                  </button>
                  <button className="delete"
                    onClick={() => {
                      dispatch(deleteUser({id: user.id }))
                    }}
                  >
                  <AiFillDelete/>  Delete User
                  </button> <br/>
                            
                </div>
                <div className="editpart">
                  {""}
                    {isEdit && id === user.id && (
                          <>
                            <input type="text" placeholder="NewName" onChange={(event) => {
                              setNewName(event.target.value);
                            }}/>
                            <input type="text" placeholder="NewUsername" onChange={(event) => {
                              setNewUsername(event.target.value);
                            }}/>
                            <input type="text" placeholder="NewPhone" onChange={(event) => {
                              setNewPhone(event.target.value);
                            }}/>
                            <div>
                              <CountryDropdown
                                value={country}
                                onChange={(val) => selectCountry(val)} 
                                onClick={(event) => {
                                  setNewLocation(event.target.value)
                                }}
                              />
                          </div>
                            <button 
                              onClick={() =>
                                
                                {
                                  
                                  dispatch(edituser({ id: user.id, name: newName, username: newUsername, phone: newPhone, country: newlocation  }));                      
                                  setIsEdit(false)
                                }

                              }
                              
                              >{""} update</button>
                          </>
                        )}
                </div>


              </div>
          
              
            </>


          ) 
        })}
      </div>
    </div>
  )
}


export default App;

