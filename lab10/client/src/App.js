import './App.css';
import NameSearch from "./components/NameSearch";
import AgeSearch from "./components/AgeSearch";
import ReportingArea from "./components/ReportingArea";

function App() {
  return (
     <div className="App">
        <AgeSearch/>
        <NameSearch/>
        <ReportingArea/>
     </div>
  );
}

export default App;
