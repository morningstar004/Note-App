import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const VeiwPaste = () => {
  const { id } = useParams();
  
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.filter((p) => p._id === id)[0];

  return (
    <div>
      <div className='flex flex-row items-center'>
        <h1 className='text-3xl m-4'>View Note</h1>
      </div>
      <div className='flex justify-start'>
        <input 
      className='border-[0.2]  p-4 my-4 w-[300px] rounded-2xl h-10 bg-white'
      type="text"
      placeholder='Enter your note here'
      disabled
      value={paste.title}
      onChange={(e) => settitle(e.target.value)}
     />
      </div>
     <div className=''>
      <textarea 
      className='border-[0.2] p-4 rounded-2xl resize-none bg-white'
      name="note"
      id="note"
      cols="160"
      rows="19"
      placeholder='Enter your text here'
      value={paste.contant}
      disabled
      onChange={(e) => setValue(e.target.value)}
      ></textarea>
     </div>
    </div>
  )
}

export default VeiwPaste
