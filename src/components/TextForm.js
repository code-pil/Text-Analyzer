import React,{useState} from 'react';
import './Textform.css';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const convertToupper = () => {
    setText(text.toUpperCase());
  };

  const convertTolower = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText("");
  };
  
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const removeExtraSpace = () => {
    setText(text.split(/[ ]+/).join(' '));
  };

  return (
    <>
      <div className={`container my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter text for analayze</label>
        <textarea className="form-control box-shadow-black" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='dark'?'white':'black', color: props.mode === 'dark'?'black':'white'}} rows="8" value={text} onChange={handleChange} placeholder="Enter your text"></textarea>
        <button className={`btn btn-${props.mode === 'dark'?'light':'dark'} my-3 mx-1`} onClick={convertToupper}>Convert to UPPERCASE</button>
        <button className={`btn btn-${props.mode === 'dark'?'light':'dark'} my-3 mx-1`} onClick={convertTolower}>Convert to lowercase</button>
        <button type="button" className={`btn btn-${props.mode === 'dark'?'light':'dark'} my-3 mx-1`} onClick={copyText}>Copy Text</button>
        <button type="button" className={`btn btn-${props.mode === 'dark'?'light':'dark'} my-3 mx-1`} onClick={removeExtraSpace}>Remove Extra spaces</button>
        <button type="button" className={`btn btn-${props.mode === 'dark'?'light':'dark'} my-3 mx-1`} onClick={clearText}>clear</button>
      </div>          
      <div className={`container my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
        <h3>Your Text summry</h3>  
        <p>{text.split(" ").filter(ele => ele.length !== 0).length} words</p>
        <p>{text.length} characters</p>
        <h3>Preview</h3>
        <p>{text==='' ?'Enter text above to preview here':text}</p>
      </div> 
    </>

  );
}
