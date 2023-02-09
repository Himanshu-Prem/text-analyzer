import React,{useState} from 'react'
//since we are not using class bsed components thats why usestate helps us to 
//use different propertis in function bsed components


export default function TextForm(props) {
  const handleupclick=()=>{
    //console.log("uppercase was clicked." + text)
    let newtext=text.toUpperCase();
    settext(newtext)
  }
  const handlelowclick=()=>{
    //console.log("uppercase was clicked." + text)
    let newtext=text.toLowerCase();
    settext(newtext)
  }
  const handleclearclick=()=>{
    //console.log("uppercase was clicked." + text)
    let newtext=('');
    settext(newtext)
  }
  const handleupchange=(event)=>{
    //console.log("uppercase was clicked.")
    settext(event.target.value)
  }
  const [text, settext]=useState('enter your text here');
  //text is a variable havig default value "enter your text" and settext is function use to update value of text
  //text=('Enter your text here') wrong way to update value of text
  //settext("Enter your text here");//correct way to update value of text.
  return (
    <>
    <div className='container'>
       <div className="mb-3">
       <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleupchange} id="exampleFormControlTextarea1" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-3" onClick={handleupclick}>convert to uppercase</button>
       <button className="btn btn-primary mx-3" onClick={handlelowclick}>convert to lowercase</button>
       <button className="btn btn-primary mx-3" onClick={handleclearclick}>Clear text</button>
    </div>
    <div className="container my-3" >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{(text.split(" ").length) * 0.008} Minutes reading time</p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
