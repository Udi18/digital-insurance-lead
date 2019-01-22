/* eslint-disable linebreak-style */
import React from 'react';
import { FormInline, MDBBtn } from 'mdbreact';

// A component to render the buttons select and update the number of vehicles.
// Pass in number of buttons wanted in props.
const NumberOfVehiclesSelector = (props) => {
  const { numberOfVehicles, numberOfButtons, onNumberButtonClick } = props;

  // Creates buttons with numbers on them based on numberOfButtons passed in.
  const buttonCreation = (numberOfBtns) => {
    const btnArray = [];
    for (let i = 1; i <= numberOfBtns; i += 1) {
      btnArray.push(i);
    }
    return btnArray.map((btnNumber) => {
      return (
        <MDBBtn
          color="primary"
          onClick={() => onNumberButtonClick(btnNumber)}
          active={numberOfVehicles === btnNumber}
        >
          {btnNumber}
        </MDBBtn>
      );
    });
  };

  return (
    <div>
      <div className="flex text-center pt-5">
        <h2>How many vehicles do you insure?</h2>
      </div>
      <FormInline className="flex center">
        {buttonCreation(numberOfButtons)}
      </FormInline>
    </div>
  );
};

export default NumberOfVehiclesSelector;
