import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    age: "",
    clgname: "",
    department: "",
    class: "",
    eventno: "",
  });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      person.firstName &&
      person.email &&
      person.age &&
      person.clgname &&
      person.department &&
      person.class &&
      person.eventno
    ) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({
        firstName: "",
        email: "",
        age: "",
        clgname: "",
        department: "",
        class: "",
        idno: "",
        eventno: "",
      });
    } else {
      alert("Please Fill The Form correctly ");
    }
  };
  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="clgname">Clg Name : </label>
            <input
              type="text"
              id="clgname"
              name="clgname"
              value={person.clgname}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="age">DOB : </label>
            <input
              type="date"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="department">Department: </label>

            <input
              type="text"
              id="department"
              name="department"
              value={person.department}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="class">Class: </label>
            <input
              type="number"
              min={1}
              max={5}
              id="class"
              name="class"
              value={person.class}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="eventno">Event IdNo: </label>
            <input
              type="number"
              min={1}
              max={12}
              id="eventno"
              name="eventno"
              value={person.eventno}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
