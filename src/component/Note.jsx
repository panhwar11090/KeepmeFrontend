import React from "react";
import { MdDelete } from "react-icons/md";
import axios from "axios";

function Note({title, description, onDelete, id }) {

  function handleDelete() {
    // Make an HTTP DELETE request to delete the note
    const token = localStorage.getItem("token");
    const noteId = localStorage.getItem("noteId")
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
      // userId: userId
    };
    axios.delete(`https://ill-plum-panther-sari.cyclic.app/note/${noteId}`, {
        headers: headers
    })
      .then(response => {
        // If the deletion was successful, call the onDelete callback to update the UI
        onDelete(id);
      })
      .catch(err=>{
        console.log("error deleting note",err)
      })
      
  }
  
  return (
    <div className="bg-white w-64 rounded-lg shadow-md p-4 m-4 float-left mr-0 ">
        
        <h1 className="text-base font-bold mb-2">{title}</h1>
        <p className="text-base text-red-700 mb-4">{description}</p>
        <button 
            onClick={handleDelete}
            className="relative float-right text-orange-400 border-none bg-transparent cursor-pointer outline-none"
        >  <MdDelete size={25} />
        
        </button>
            
        
    </div>
  );
}

export default Note;