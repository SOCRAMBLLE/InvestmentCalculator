import React, { useState } from "react";
import Header from "./components/UI/Header";
import NewInvestForm from "./components/NewInvestment/NewInvestForm";
import InvestmentsTable from "./components/Investments/InvestmentsTable";
import Footer from "./components/UI/Footer";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; 

  if (userInput) {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"]; 
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />

      <NewInvestForm onCalculate={calculateHandler} />

      {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {userInput && (
        <InvestmentsTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}

      <Footer />

    </div>
  );
}

export default App;
