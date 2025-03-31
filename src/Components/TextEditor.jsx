import React, { useState } from 'react';

function TextEditor() {
  const [TextValue , setTextValue]=useState("")

  const UpperCase=()=>{
    setTextValue(TextValue.toUpperCase())

  }

  const Lowercase=()=>{
    setTextValue(TextValue.toLowerCase())
  }

  const RemoveSpace=()=>{
    setTextValue(TextValue.replaceAll("  "," "))
  }
  const Delete=()=>{
    setTextValue("")
  }
  const Copy=()=>{
    let  trimedtext=TextValue.trim()
    navigator.clipboard.writeText(trimedtext)

    alert("Copy to clipboard")
  }
  const Trim=()=>{
    setTextValue(TextValue.trim())
  }
  return (
    <div className=' w-screen h-screen flex p-2 justify-center '>
      <div className='w-[80%] bg-gray-400 rounded-2xl p-3'>
      <div className='flex p-3 items-center gap-3'>
        <button className='bg-black text-white px-5 py-2 rounded-2xl border-white border' onClick={UpperCase}>UperCase</button>
        <button className='bg-black text-white px-5 py-2 rounded-2xl border-white border' onClick={Lowercase}>LowerCase</button>
        <button className='bg-black text-white px-5 py-2 rounded-2xl border-white border'onClick={RemoveSpace}>Remove Space</button>
        <button className='bg-black text-white px-5 py-2 rounded-2xl border-white border' onClick={Delete}>Delete</button>
        <button className='bg-black text-white px-5 py-2 rounded-2xl border-white border' onClick={Copy}>Copy</button>
        <button className='bg-black text-white px-5 py-2 rounded-2xl border-white border' onClick={Trim}>Trim</button>
      </div>
        <div><textarea name="text-box" value={TextValue} className='w-[90%] h-[40vh] border rounded-2xl resize-none p-2 font-mono text-xl' onChange={(e)=>setTextValue(e.target.value)}></textarea></div>


        <div  className='p-2 text-2xl font-mono text-gray-600'>
      <p>{TextValue}</p>
     </div>
     <div>
      <p>word count</p>
      <p>Character count</p>
     </div>

      </div>
     
    </div>
  );
}

export default TextEditor;
