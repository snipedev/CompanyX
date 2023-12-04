import logo from './logo.svg';
import './App.css';
import FirstApp from './Components/first-app';
import { Box } from "@mui/system";

const  App = () => {
  const Employee = {"name":"Anurag","address":"stays somewhere","gender":"male"};
  return (
    <div className="App card">
      <h1 className='card'>This is a heading</h1>
      <Box>
      <FirstApp {...Employee}/>
      </Box>
    </div>
  );
}

export default App;
