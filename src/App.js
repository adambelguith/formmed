import './App.css';
import NavBar from './components/nav';
import FormUser from './components/form';
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
    const combinedData = { ...formData, ...data };

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
      <FormUser />
    </div>
  );
}

export default App;
