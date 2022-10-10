import React from 'react'
import { addAction } from '../components/Developer';
import '../App.css';



function DeveloperForm({ dispatch }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const userData = {
        id: Math.floor(Math.random() * 10000) + 10000,
        name: e.target.name.value,
        food: e.target.food.value,
        drink: e.target.drink.value,
        language: e.target.language.value,
        tech: e.target.tech.value,
      };
      console.log(userData);
      dispatch(addAction(userData));
      e.target.reset();
    }}>
      <fieldset>
        <legend>Developer</legend>
        <input type='text' placeholder='UserName' name='name' required  />
        <select name="language">
          <option value='not selected'>Language...</option>
          <option value="java script">java script</option>
          <option value="java">java</option>
		  <option value="C#">C#</option>
          <option value="Paython">Paython</option>
         
        </select>
        <select name="tech">
          <option value='not selected'>Technology...</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Node">Node</option>
        </select>
        <input type='text' placeholder='Favorite Food' name='food'  />
        <input type='text' placeholder='Favorite Drink' name='drink' />
        <input type='submit' />
      </fieldset>
    </form >
  )
}

export default DeveloperForm