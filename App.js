import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './layout/NavBar';
import Home from './pages/Home';
import AddUser from "./users/AddUser";
import ViewUser from './users/ViewUser'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EditUser from './users/EditUser';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
