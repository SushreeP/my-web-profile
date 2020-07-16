import React from "react";
import "./BCard.css";

function BCard() {
  return (
    <div className="BCard">
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
          </p>
          <hr />
          <p className="more-details">
            React | Python | C++ | SQL | Quick understanding of new language |
            Good with Data Structure |{" "}
            <a href={"#"}>other skills & certification...</a>
          </p>
        </div>
      </div>
      <footer>
        Copyright {"\u00A9"} 2020 | All rigts reserved <br />
        Created by Sushree Pratishruti Mohanty using React & CSS from scratch
      </footer>
    </div>
  );
}

export default BCard;
