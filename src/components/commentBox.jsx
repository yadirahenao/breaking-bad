import React from 'react';
import useFormData from '../hooks/useFormData';

const CommentBox = () => {    
  const { form, updateFormData } = useFormData();

  const submitForm = (e)=>{
    e.preventDefault();
  };

  return (    
      <form
        className='flex flex-col m-2 items-center'
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
      >
        <label > 
          <input
          type='text'          
          name='rating'        
          placeholder='comment'
          className='bg-gray-100 p-2 rounded-full'/>    
      </label>  
      <button
          type='submit'
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-auto m-1'
        >
          Save comment
        </button>
      </form>
  );
  

 
};

export default CommentBox;