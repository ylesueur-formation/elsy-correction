import React from "react";
import './App.css';
import './styles/global.css'
import { Box } from './components/Box'; 


function App() {

    const tempMin = 20;
    const tempMax = 40;
    const heartMin = 80;
    const heartMax = 180;
    const stepsMin = 0;
    const stepsMax = 50000;

    return (
      <div className="container-fluid">
        <div className="row">
            <p>Heart: {heartMin}</p>
            <p>Temperature: {tempMin}</p>
            <p>Step: {stepsMin}</p>
            {/* Water */}
            <Box icon="local_drink" value={1.5} unit="L" color="#3A85FF" />
            
            {/* Steps */}
            <Box icon="directions_walk" value={3000} unit="steps" color="black" />
            
            {/* Heart */}
            <Box icon="favorite" value={120} unit="bpm" color="red" />
            
            {/* Temperatur */}
            <Box icon="wb_sunny" value={-10} unit="°C" color="yellow" />
        </div>
      </div>
    );
}
export default App;