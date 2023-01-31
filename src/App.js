import './App.css';
import DataInput from './components/Input Form/DataInput';
import { useState } from "react";
import DisplayData from './components/Display Data/DisplayData';

function App() {

  const [bioData, setBioData] = useState([]);

  const formSubmitHandler = (data) => {
    const newData = {
      username: data.username,
      age: data.age,
      id: bioData.length + 1
    };
    const updatedBioData = [...bioData, newData];
    setBioData(updatedBioData);
  }

  return (
    <div id='main-page'>
      <section id='input'>
        <DataInput onFormSubmit={formSubmitHandler} />
      </section>
      <section id='output'>
        <DisplayData data={bioData} />
      </section>
    </div>
  );
}

export default App;