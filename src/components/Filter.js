import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { AllProperties } from './AllProperties';


const Filter = () => {
    const [selectedPropertyType, setSelectedPropertyType] = useState('');
    
    const handlePropertyTypeChange = (event) => {
      setSelectedPropertyType(event.target.value);
    };

    const [Budget, setBudget] = useState('');
    const [minBudget,setMinBudget]=useState();
    const [maxBudget,setMaxBudget]=useState();
    const handleBudgetChange = (event) => {
      setBudget(event.target.value);
      const [minBudget, maxBudget] = event.target.value.split('-'); // Split the value into min and max

      setMinBudget(minBudget);
      setMaxBudget(maxBudget);
    };
    const stateOptions = [
      { value: 'Chennai', label: 'Chennai' },
      { value: 'Mumbai', label: 'Mumbai' },
      { value: 'Hyderabad', label: 'Hyderabad' },
      { value: 'Bangalore', label: 'Bangalore' },
      { value: 'Delhi', label: 'Delhi' }, 
    ];
    
    const [selectedState, setSelectedState] = useState(stateOptions[0].value);

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption.value);
  };
  const selectdata={propertyType:selectedPropertyType,minbudget:minBudget,maxbudget:maxBudget,location:selectedState};
  console.log(selectdata);
    const customStyles = {
      control: (provided) => ({
        ...provided,
        width: 250, // Set the desired width here
      }),
    };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item active" style={{paddingLeft:'30px'}}>
        <Select
          options={stateOptions}
          isSearchable={true}
          placeholder="Search for a City..."
          styles={customStyles}
          onChange={handleStateChange}
        />
          </li>
          <li className="nav-item active" style={{paddingLeft:'30px'}}>
          <select value={selectedPropertyType} onChange={handlePropertyTypeChange} className='form-select'>
        <option value="">Property Type</option>
        <option value="2BHK Flat">2BHK Flat</option>
        <option value="3BHK Flat">3BHK Flat</option>
        <option value="Villa">Villa</option>
        <option value="Plot">Plot</option>
      </select>
          </li>
          <li className="nav-item active" style={{paddingLeft:'30px'}}>
          <select value={Budget} onChange={handleBudgetChange} className='form-select'>
          <option value="" >Budget</option>
          <optgroup label="Budget" >
          <option value="0-50000">0-50k</option>
          <option value="50000-100000">50k-100k</option>
          <option value="100000-500000">1Lakh-5Lakh</option>
          <option value="500000-1000000">5Lakh-10Lakh</option>
          <option value="1000000-5000000">10L-50L</option>
        </optgroup>
      </select>
          </li>
        </ul>
      </div>
    </nav>
    <AllProperties obj={selectdata}/>
    </div>
  );
};

export default Filter;
