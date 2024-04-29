import  { useState } from 'react';
import './App.css';

const RandomColorPicker = () => {
  const [color, setColor] = useState('#FFFFFF'); // Initial color is white

  const createHexColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); // Generate random hex color
    setColor(randomColor);
  };

  const createRGBColor = () => {
    const randomColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`; // Generate random RGB color
    setColor(randomColor);
  };

  return (
    <div className='main' style={{ backgroundColor: color,  height:'100vh', width: '100vw', textAlign: 'center' }}>
      <h2>Random Color Picker</h2>
      <div className="btn">
      <button onClick={createHexColor}>Create Hex Color</button>
      <button onClick={createRGBColor}>Create RGB Color</button>
      <button onClick={() => {
        Math.random() > 0.5 ? createHexColor() : createRGBColor();
      }}>Generate Random Color</button>

      </div>
      <div className="random">

      <span className='color'>Hex color</span>
      <p className='RGB'> {color}</p>
      </div>
    </div>
  );
};

export default RandomColorPicker;
