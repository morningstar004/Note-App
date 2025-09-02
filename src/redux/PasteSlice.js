import { createSlice } from '@reduxjs/toolkit'
import  toast from 'react-hot-toast';

const initialState = {
  pastes: (() => {
    try {
      const storedPastes = localStorage.getItem("pastes");
      return storedPastes ? JSON.parse(storedPastes) : [];
    } catch (error) {
      console.error("Error parsing pastes from localStorage:", error);
      return [];
    }
  })()
};

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
      if(!action.payload.title || !action.payload.contant){
        toast.error("Title or Contant is missing");
        return;
      }            
      else if (state.pastes.some(paste => paste.title === action.payload.title)) {
        toast.error("Title already exists");
        return;
      }
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast("Note Created Successfully");
    },
    updateToPaste: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item)=>item.id === paste.id);

      if(index !== -1){
        state.pastes[index] = paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Note Updated Successfully");
      }
      
    },
    resetAllPaste: (state, action) => {
      state.pastes =[];
      localStorage.removeItem("pastes");
      toast.success("All Notes Deleted Successfully");
    },
    removeFromPaste: (state,action) => {
      const pasteId = action.payload;
      const index = state.pastes.findIndex((item)=>item._id === pasteId);

      if(index>=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Note Deleted Successfully");
      }
    },
  },
})

export const { updateToPaste,resetAllPaste,removeFromPaste,addToPaste } = pasteSlice.actions

export default pasteSlice.reducer