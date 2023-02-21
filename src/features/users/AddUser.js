import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../../component/Button"
import TextField from "../../component/Textfield"
import { addUser } from "./UserSlice"
import { CountryDropdown } from "react-country-region-selector";
import '../../index.css'

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    username: '',
    phone: '',
    country: ''
  });

  const [state, setState] = useState({
    location: "",
  
  })



  const selectCountry = (val) => {
    setState({...state, location: val });
  }

  const {location} = state;

  const handleAddUser = () => {
    setValues({ name: '', username: '', phone: '', country: '', });
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      username: values.username,
      phone: values.phone,
      country: values.country
    }));
    navigate('/');
  }

  return (
    <div className="addpost">
      <TextField className="name"
        label="Name: "
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Name' }}
      />
      
      <TextField className="username"
        label="Username: "
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter Username' }}
      />
      <TextField className="phone"
        label="Phone: "
        value={values.phone}
        onChange={(e) => setValues({...values, phone: e.target.value})}
        inputProps= {{type: 'text', placeholder: 'Enter Your Phone'}}
      />      
      <div>
        <CountryDropdown
          value={location}
          onChange={(val) => selectCountry(val)} 
          onClick={(e) => setValues({...values, country: e.target.value})}
        />
      </div>
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  )
}

export default AddUser