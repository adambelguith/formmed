import './App.css';
import NavBar from './components/nav';
import FormUser from './components/form';
import FormTwo from './components/formtwo';
import React,{useState} from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({});
  const [showFormTwo, setShowFormTwo] = useState(false);

  const handleFormOneSubmit = (data) => {
    setFormData(data);
    setShowFormTwo(true);
  };

  const handleFormTwoSubmit = async (data) => {
    // Combine data from both forms
    if(!data.occupation){data.occupation =""}
    const combinedData = { ...formData, ...data };

    console.log(combinedData)
    // Make a POST request using Axios
    try {
      const response = await axios.post('your-api-endpoint', combinedData);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };


  return (
    <div className="App pb-32">
      <NavBar />
      {!showFormTwo && <FormUser onSubmit={handleFormOneSubmit} />}
      {showFormTwo && <FormTwo onSubmit={handleFormTwoSubmit} formData={formData} />}
      {/* <FormUser /> */}
    </div>
  );
}

export default App;
