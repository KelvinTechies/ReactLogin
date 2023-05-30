import './App.css';
import Register from './Component/Register/Register'
import RegForm from './Component/RegForm/RegForm'
import Login from './Component/RegForm/Login'
import NavBar from './Component/NavBar/NavBar'
import Index from './Component/Home/Index'
function App() {
  return (
    <section>
    <div className="App">
      {/* <Login /> */}
      <RegForm />
    </div>
    {/* <div className="">
      <NavBar />
      <Index />
    </div> */}
    </section>
    
  );
}

export default App;
