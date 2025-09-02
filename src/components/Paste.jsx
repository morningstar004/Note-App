import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromPaste } from '../redux/PasteSlice';
import toast from 'react-hot-toast';

function Paste() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const pastes = useSelector((state) => state.paste.pastes);

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    console.log(pasteId);
    dispatch(removeFromPaste(pasteId));
  }

  return (
    <div>
      <div className='flex flex-row items-center'>
        <h1 className='text-3xl m-4'>All Notes</h1>
      </div>
      <div className='flex flex-row justify-start items-center'>
        <input
        type="text"
        placeholder="Search notes"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-[0.2] p-4 my-4 rounded-2xl h-10 w-[300px]"
      />
      </div>
      <div className='overflow-y-auto h-[500px] pr-2'> 
        {filterData.map((paste) => (
          <div key={paste._id} className="p-5 border-[0.2] bg-white rounded-2xl mb-3 grid grid-cols-2 grid-row-2 gap-4 p-4">
            <span className='NoteInfo flex flex-col justify-start w-max '>
              <h3 className='font-semibold text-xl text-start px-8 pt-2 w-max'>{paste.title}</h3>
              <p className='text-start px-8 w-max text-s'>{paste.contant 
                ? paste.contant.split(' ').slice(0,7).join(' ') + (paste.contant.split(' ').length > 7 ? ". . ." : ''): ' no contant available'}</p>
            </span>
            <div className='flex flex-row gap-4 items-start pl-72 py-2 w-max'>
              <button className='' >
                <a href={ `/?pasteId=${paste?._id}`
                }>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-700 hover:text-[#ff805b] hover:transition-all duration-300 ease-in-out"
                  >             
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                     d="M16.862 4.487l2.651 2.651m-2.651-2.651L7 15.5V19h3.5l9.862-9.862-3.5-3.5z"
                    />
                  </svg>
                </a>
              </button> 
              <button>
                <a href={`/pastes/${paste?._id}`} target="_blank">
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-gray-700 hover:text-[#ff805b] hover:transition-all duration-300 ease-in-out"
                  >
                    <path d="M12 4.5c-4.97 0-9.161 3.11-10.651 7.5 1.49 4.39 5.681 7.5 10.651 7.5s9.161-3.11 10.651-7.5c-1.49-4.39-5.681-7.5-10.651-7.5zM12 15.75a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5z" />
                  </svg>
                </a>
              </button>
              <button onClick={() => handleDelete(paste?._id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-700 hover:text-[#ff805b] hover:transition-all duration-300 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 7h12m-9 4v6m6-6v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12H5zm3-3h8a1 1 0 011 1v1H7V5a1 1 0 011-1z"
                  />
                </svg>
              </button>
              <button onClick={() => {navigator.clipboard.writeText(paste?.contant)
                toast.success("Copied to clipboard")
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-700 hover:text-[#ff805b] hover:transition-all duration-300 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2m0-14h8a2 2 0 012 2v10a2 2 0 01-2 2H9m0-14v14"
                  />
                </svg>
              </button>
              <button onClick={() => {navigator.clipboard.writeText
                (`localhost:5173/pastes/${paste?._id}`);
                toast.success("Title and Content Copied to clipboard")
              }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-gray-700 hover:text-[#ff805b] hover:transition-all duration-300 ease-in-out"
                >
                  <path d="M12 3l7 7h-4v7h-6v-7H5l7-7z" />
                  <path d="M5 20h14a1 1 0 001-1v-2H4v2a1 1 0 001 1z" />
                </svg> 
              </button>
            </div>  
            <div className='w-max px-8 text-start text-sm text-gray-500'>
              {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date(paste.createdAt))}
            </div>            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paste;
