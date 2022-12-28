import React, { useState } from 'react';

import classes from './enterForm.module.css';

function EnterForm(props) {

  const [name, setName] = useState("");

  const submitForm = event => {
    event.preventDefault();  
    props.enter(true, name);
  }

  const changeName = event => {
    setName(event.target.value);
  }

  return (
    <div className={classes['form-container']}>
      <h1>Enter the auction room</h1>
      <form name='enterform' onSubmit={submitForm}>
        <div className={classes.participants}>
          <div className={classes['input-group']}>          
            <label htmlFor="3">Name</label>
            <input id="1" type="text" name="name" value={name} onChange={changeName} placeholder="Ivan Ivanov" />
          </div>          
          <input className={classes['submit-button']} type="submit" value="Enter" />
        </div>
      </form>
    </div>
  );
}

export default EnterForm;