import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPaste, updateToPaste } from '../redux/PasteSlice';
import { useEffect } from 'react';

const Home = () => {
  const [title, settitle] = useState('');
  const [Value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if(pasteId){
      const paste = allPastes.find((p) => p._id
     === pasteId)
     settitle(paste?.title);
     setValue(paste?.contant);
    }
  }, [pasteId])

  function createPaste() {
    const paste = {
      title: title,
      contant: Value,
      _id: pasteId || Date.now().toString(25), 
      createdAt: new Date().toISOString(),
    };
    

    if (pasteId) {
      dispatch(updateToPaste(paste));
    } else {
      dispatch(addToPaste(paste));
    }
    settitle('');
    setValue('');
    setSearchParams({});
  }
  return (
    <div>
      <div className='flex flex-row items-center'>
        <h1 className='text-3xl m-4'>Create Note</h1>
      </div>
      <div className="flex justify-between">
        <input 
      className='border-[0.2] w-[300px] p-4 mt-4 rounded-2xl h-10'
      type="text"
      placeholder='Enter your note here'
      value={title}
      onChange={(e) => settitle(e.target.value)}
     />
     <button onClick={createPaste} className='bg-[#ffa271] text-white px-5 text-lg rounded-lg h-10 m-4 border-black hover:bg-[#ff805b] hover:transition-all duration-300'>
      {
        pasteId ? "Update" : "Create"
      }
     </button>
      </div>
     <div className=''>
      <textarea 
      className='border-[0.2] p-4 rounded-2xl resize-none '
      name="note"
      id="note"
      cols="160"
      rows="19"
      placeholder='Enter your text here'
      value={Value}
      onChange={(e) => setValue(e.target.value)}
      ></textarea>
     </div>
    </div>
  )
}

export default Home
