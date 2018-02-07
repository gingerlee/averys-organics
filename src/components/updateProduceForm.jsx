import React from 'react';

function UpdateProduceForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='month'
          placeholder='month'/>
        <input
          type='text'
          id='contents'
          placeholder='contents'/>
        <button type='submit'>Update</button>
      </form>
    </div>
  );
}

export default UpdateProduceForm;
