
import './App.css';
import Navbar from './components/Navbar'; //imported from react function
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  return (
    <>
     <Navbar title= 'Textutils'/>
     {/* this titile is props  */}
     <div className="container my-3">
     <TextForm heading="Enter the text below to analyze"/>
     {/* <About/> */}
     </div>
      </>
  );
}

export default App;
