
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
      <h1>hello</h1>
      </div>
      </div>
    </div>
  );
}

export default checkAuth(App);
