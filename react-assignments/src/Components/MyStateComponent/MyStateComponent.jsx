import React, { useState } from "react";

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.

  const [formData, setFormData] = useState({ name: "", age: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log({ [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form data:", formData);
    clearForm();
  };

  const clearForm = () => {
    setFormData({ name: "", age: "" });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="age"></label>
        <input
          type="text"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyStateComponent;
