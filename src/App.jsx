// App.js

import { useState } from "react";
import './index.css'
const calculatorStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "8px",
  maxWidth: "300px",
  margin: "auto",
  marginTop: "50px",


};

const buttonStyle = {
  padding: "15px",
  fontSize: "18px",
  cursor: "pointer",
  border: "1px solid #ccc",
  borderRadius: "5px",
  background: "rgba(202, 211, 200,1.0)",
  color:'rgba(45, 52, 54,1.0)'
};

const operatorButtonStyle = {
  ...buttonStyle,
  background: "#f00",
  color: "#fff",
};

const clearButtonStyle = {
  ...buttonStyle,
  background: "#007bff",
  color: "#fff",
};

const displayStyle = {
  gridColumn: "span 4",
  padding: "15px",
  fontSize: "20px",
  textAlign: "right",
  border: "1px solid #ccc",
  borderRadius: "5px",
  marginBottom: "10px",
  overflow:'hidden',
  display:'flex',
  alignItems: 'center',
  padding:'1rem'
};

function App() {
  const [count, setCount] = useState("");
  const [first, setFirst] = useState("");

  const handleButtonClick = (value) => {
    setCount((prev) => prev + value);
  };

  const handleDelete = () => {
    setCount((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setCount("");
    setFirst("")
  };

  const handleEqual = () => {
    setFirst(eval(count));
  };

  return (<div className="calci">
    <div style={calculatorStyle }>
      <div style={displayStyle}>{count}</div>
      <button onClick={() => handleButtonClick("7")} style={buttonStyle}>
        7
      </button>
      <button onClick={() => handleButtonClick("8")} style={buttonStyle}>
        8
      </button>
      <button onClick={() => handleButtonClick("9")} style={buttonStyle}>
        9
      </button>
      <button onClick={() => handleButtonClick("/")} style={operatorButtonStyle}>
        /
      </button>

      <button onClick={() => handleButtonClick("4")} style={buttonStyle}>
        4
      </button>
      <button onClick={() => handleButtonClick("5")} style={buttonStyle}>
        5
      </button>
      <button onClick={() => handleButtonClick("6")} style={buttonStyle}>
        6
      </button>
      <button onClick={() => handleButtonClick("*")} style={operatorButtonStyle}>
        *
      </button>

      <button onClick={() => handleButtonClick("1")} style={buttonStyle}>
        1
      </button>
      <button onClick={() => handleButtonClick("2")} style={buttonStyle}>
        2
      </button>
      <button onClick={() => handleButtonClick("3")} style={buttonStyle}>
        3
      </button>
      <button onClick={() => handleButtonClick("-")} style={operatorButtonStyle}>
        -
      </button>

      <button onClick={() => handleButtonClick("0")} style={buttonStyle}>
        0
      </button>
      <button onClick={() => handleButtonClick(".")} style={buttonStyle}>
        .
      </button>
      <button onClick={handleEqual} style={operatorButtonStyle}>
        =
      </button>
      <button onClick={() => handleButtonClick("+")} style={operatorButtonStyle}>
        +
      </button>

      <button onClick={handleDelete} style={buttonStyle}>
        del
      </button>
      <button onClick={handleClear} style={clearButtonStyle}>
        ❌
      </button>
      <p style={displayStyle}>{first}</p>
    </div></div>
  );
}

export default App;
