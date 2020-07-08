import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="box">
        <div className="image"></div>
        <div className="details">
          <p className="name">Sushree Pratishruti Mohanty</p>
          <p className="most-recent-qualification">
            MSc International Business Graduate <br />
            from Cass Business School
          </p>
          <p className="more-details">
            <span className="bold">Looking for</span> Software Developer Roles
            in UK and Ireland
            <br /> <span className="bold">with</span> Visa Sponsorship
            <br />
            Bachelor's in Information Technology
            <br />
            2yrs of Work Experience as Systems Engineer with Infosys
            <br />
            <br />
            <hr />
            React | Python | C++ | SQL | Quick understanding of new language |
            Good with Data Structure |{" "}
            <a href={"#"}>other skills & certification...</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
