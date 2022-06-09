import React from "react";

const Timezone = () => {
  const date = new Date()
  let localDate = date.toString()
  let uctDate = date.toUTCString()
  return (
    <>
    <div className="my-2 border px-3 py-3">
        <span>Timezone: </span>
    <select className="form-select" aria-label="Default select example">
        <option defaultValue>(UCT+5:30) {localDate}</option>
        <option value="1">(UCT+00:00) {uctDate}</option>
      </select>
    </div>
      
    </>
  );
};

export default Timezone;
