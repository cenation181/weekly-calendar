import React from "react";

const Week = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = days[d.getDay()];
  return (
    <>
      <div className="my-3">
        <div className="row ">
          <div id="days" className="col-1 border mx-2">
            <h1>Mon</h1>
            <p>{d.getMonth()+1}/{d.getDate()}</p>
          </div>
          <div id="events" className="col-11 row d-flex border">
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                12:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                12:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                1:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                1:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                2:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                2:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                3:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                3:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                4:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                4:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                5:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                5:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                6:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                6:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                7:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                7:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:00 PM
              </label>
            </div>
          </div>
        </div>
        <div className="row ">
          <div id="days" className="col-1 border mx-2">
            <h1>Tue</h1>
            <p>8/20</p>
          </div>
          <div id="events" className="col-11 row d-flex border">
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                12:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                12:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                1:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                1:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                2:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                2:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                3:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                3:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                4:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                4:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                5:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                5:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                6:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                6:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                7:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                7:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:00 PM
              </label>
            </div>
          </div>
        </div>
        <div className="row ">
          <div id="days" className="col-1 border mx-2">
            <h1>Wed</h1>
            <p>8/20</p>
          </div>
          <div id="events" className="col-11 row d-flex border">
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                12:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                12:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                1:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                1:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                2:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                2:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                3:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                3:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                4:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                4:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                5:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                5:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                6:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                6:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                7:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                7:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:00 PM
              </label>
            </div>
          </div>
        </div>
        <div className="row ">
          <div id="days" className="col-1 border mx-2">
            <h1>Thu</h1>
            <p>8/20</p>
          </div>
          <div id="events" className="col-11 row d-flex border">
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                12:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                12:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                1:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                1:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                2:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                2:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                3:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                3:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                4:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                4:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                5:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                5:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                6:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                6:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                7:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                7:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:00 PM
              </label>
            </div>
          </div>
        </div>
        <div className="row ">
          <div id="days" className="col-1 border mx-2">
            <h1>Fri</h1>
            <p>8/20</p>
          </div>
          <div id="events" className="col-11 row d-flex border">
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:00 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:30 AM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                12:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                12:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                1:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                1:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                2:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                2:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                3:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                3:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                4:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                4:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                5:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                5:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                6:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                6:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                7:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                7:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                8:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                9:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:00 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                10:30 PM
              </label>
            </div>
            <div className="form-check col-1 d-flex">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label
                className="form-check-label fs-6 mx-1"
                htmlFor="flexCheckDefault"
              >
                11:00 PM
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Week;
