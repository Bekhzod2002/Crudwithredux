import { Route, Routes } from "react-router-dom";
import AddUser from "./features/users/AddUser.js";
import EditUser from "./features/users/EditUser";
import UserList from "./features/users/UserList";
import './index.css'

function App() {
  return (
    <div className="app">
      <h1 className="text-center font-bold text-2xl text-gray-700">CRUD with redux toolkit</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;