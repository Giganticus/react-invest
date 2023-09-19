import styles from "./UserInput.module.css";

const UserInput = (props) => {
  const submitHandler = (event) => {
    event.preventDefault(); //prevents reloading the entire page and restarting the app
    console.log("SUBMIT");
  };

  const resetHandler = () => {
    console.log("RESET");
  };

  const inputChangeHandler = (input, value) => {
    console.log(input + ":" + value);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          onClick={resetHandler}
          type="reset"
          className={styles.buttonAlt}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
