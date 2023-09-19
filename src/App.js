import Header from "./components/Header/Header";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import UserInput from "./components/UserInput/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState(null);
  //when state of userInput changes then the entire "App" function is re-evaluated which will cause the calc to be re-run
  //this is what we want and is a bit slicker than storing the yearly data as state. Instead, we are using derived state.
  //i.e. the yearlyData state is derived from userInput state.

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
      <UserInput onCalculate={calculateHandler} />

      {!userInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {userInput && (
        <ResultsTable
          data={yearlyData}
          initialInvestment={userInput["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
