import UserList from "./components/UserList";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<UserList />} />
        <Route path="/add" exact element={<AddUser />} />
        <Route path="/edit/:id" exact element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;