import './App.css';
import NameSearch from "./components/NameSearch";
import AgeSearch from "./components/AgeSearch";
import ReportingArea from "./components/ReportingArea";
import CreateEmp from './components/CreateEmp';

function App() {
  return (
     <div className="App">
        <AgeSearch/>
        <NameSearch/>
        <CreateEmp/>
        <ReportingArea/>
     </div>
  );
}

export default App;
