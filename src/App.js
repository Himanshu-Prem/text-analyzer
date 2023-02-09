
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';


function App() {
  return (
   <>
    <Navbar title="Myapp" list1="Home"/>
    <div className="container my-3" >
      <TextForm heading="Enter your text to analyze"/>
      <About/>
    </div>
    
   </>
  );
}

export default App;
