import React, { useState } from "react";
import "./NewInvestForm.css";

const NewInvestForm = (props) => {

  const defaultUserInput = {
    "current-savings": null,
    "yearly-contribution": null,
    "expected-return": null,
    duration: null,
  };

  const [userInput, setUserInput] = useState(defaultUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("SUBMIT");

    props.onCalculate(userInput)
  };

  const resetHandler = () => {
    setUserInput(defaultUserInput);
    // console.log("RESET");
  };

  const changeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
    // console.log(input, value);
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings (CHF)</label>
          <input
            onChange={(event) =>
              changeHandler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
            type="number"
            id="current-savings"
            placeholder="Start amount invested"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings (CHF)</label>
          <input
            onChange={(event) =>
              changeHandler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
            placeholder="Amount invested per year"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              changeHandler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
            type="number"
            id="expected-return"
            placeholder="%"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) => changeHandler("duration", event.target.value)}
            value={userInput["duration"]}
            type="number"
            id="duration"
            placeholder="How many years?"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default NewInvestForm;
