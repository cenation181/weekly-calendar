import React from "react";

const Navbar = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();
  let month = months[currentDate.getMonth()];
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <button className="btn btn-primary" type="submit">
              Previous Week
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active mx-5 px-5"
                    aria-current="page"
                    href="/"
                  >
                  {month}, {day} {year}
                  </a>
                </li>
              </ul>
              <button className="btn btn-primary" type="submit">
                Next Week
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
