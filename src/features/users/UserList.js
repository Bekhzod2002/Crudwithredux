import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../component/Button";
import { deleteUser } from "./UserSlice";
import {FaEdit} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai'
const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  }

  const renderCard = () => users.map(user => (
    <div className="post" key={user.id}>
      <div className="content">
        <h3 className="name">{user.name}</h3>
        <span className="username">{user.username}</span>
        <span className="phone">{user.phone}</span>
        <span className="country">{user.country}</span>
        <Link to={`edit-user/${user.id}`}>
          <button className="edit">
            <FaEdit/>
            edit
          </button>
        </Link>
        <button className="delete"
          onClick={() => handleRemoveUser(user.id)}
        >
          <AiFillDelete/>
          delete
        </button>
      </div>

    </div>
  ))

  return (
    <div>
      <Link to="/add-user"><Button>Add User</Button></Link>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? renderCard() : <p className="text-center col-span-2 text-gray-700 font-semibold">No User</p>}
      </div>
    </div>
  )
}

export default UserList