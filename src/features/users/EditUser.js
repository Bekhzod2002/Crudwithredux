import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../component/Button";
import TextField from "../../component/Textfield";
import { editUser } from "./UserSlice";
import { CountryDropdown } from "react-country-region-selector";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, username, phone,  } = existingUser[0];
  const [state, setState] = useState({
    country: "",
  
  })



  const selectCountry = (val) => {
    setState({...state, country: val });
  }

  const {country} = state;


  const [values, setValues] = useState({
    name,
    username,
    phone,
    country
    
  });

  const handleEditUser = () => {
    setValues({ name: '', username: '', phone: '', country: ''});
    dispatch(editUser({
      id: params.id,
      name: values.name,
      username: values.username,
      phone: values.phone,
      country: values.country
    
    }));
    navigate('/');
  }

  return (
    <div className="addpost">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Edit Name' }}
      />
      <br />
      <TextField
        label="Username"
        value={values.username}
        onChange={(e) => setValues({ ...values, username: e.target.value })}
        inputProps={{ type: 'username', placeholder: 'Edit Username' }}
      />
      <TextField 
        label="Phone"
        value={values.phone}
        onChange={(e) => setValues({...values, username: e.target.value})}
        inputProps={{type: 'Phone',  placeholder: 'Edit Phone'}}
      />
      <CountryDropdown
        value={country}
        onChange={(val) => selectCountry(val)}
        onClick={(e) => setValues({...values, country: e.target.value})}
      />

      <Button onClick={handleEditUser}>Update</Button>
    </div>
  )
}

export default EditUser