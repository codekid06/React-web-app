import React, { useState } from "react";
//Imp syntax for hooks for making variables
// hooks helps in  use classes features without making classes
export default function TextForm(props) {
    //making fucntion for button
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handleClearClick = () => {
        let newText ='';
        setText(newText);
    };
    const handledownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    //making fucntion for text area
    const handleOnChange = (event) => {
        setText(event.target.value);
        //for changing text
        // text="new text"wrong way to change
        // setText("Enter text in box")
    };
    //Imp syntax for hooks for making variables
    // hooks helps in  use classes features without making classes
    // const [text, setText] = useState('Enter text here');
    const [text, setText] = useState("");
    //fir we give default value to text then later setText will change the text variable
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-4" onClick={handledownClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear Text
                </button>
            </div>
            <div className="container2 my-4">
                <h1>Your text summary</h1>
                <p>
                    {text.split(" ").length} Words and <span></span>
                    {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
