
import './App.css';
import Navbar from './components/Navbar';
import checkAuth from './components/auth/checkAuth';

function App() {
  return (
    <div>
    <Navbar/>
    <div className="container-fluid">
    <div className='background-image'></div>
    <div className='main'>
      <div className='text-center'>
      <h1>HEALER</h1>
      <br></br>
      <h3>Easy to Manage</h3><h3>Easy to use</h3>
      </div></div>
      </div>
    </div>
  );
}

export default checkAuth(App);
