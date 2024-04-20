import { useContext } from "react";
import Stories from "./Components/Stories";
import { AppContext } from "./Components/Context";
import Search from "./Components/Search";
import './App.css';
import Pagination from "./Components/Pagination";

function App() {
  return (
    <div className="container">
      <Search/>
      <Pagination/>
      <Stories/>
      
    </div>
  );
}

export default App;

// with context
// to send data to child directly 

// useReducer
// it is used to store ad update states
