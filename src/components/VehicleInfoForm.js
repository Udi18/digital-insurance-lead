/* eslint-disable linebreak-style */
import React from 'react';
import { Container, Row } from 'mdbreact';

const VehicleInfoForm = (props) => {
  const {
    numberOfVehicles,
    NumberOfVehiclesSelector,
    VehicleInfoSelectors,
    onNumberButtonClick,
    infoChangeHandler,
  } = props;

  const vehicleSelectorCreator = (numberOfSelectors) => {
    const numberOfSelectorsArr = [];
    for (let i = 1; i <= numberOfSelectors; i += 1) {
      numberOfSelectorsArr.push(i);
    }
    return numberOfSelectorsArr.map(selectorNumber => (
      <VehicleInfoSelectors
        infoChangeHandler={infoChangeHandler}
        selectorNumber={selectorNumber}
      />
    ));
  };

  return (
    <Container>
      <Row center className="mt-6">
        <NumberOfVehiclesSelector
          numberOfVehicles={numberOfVehicles}
          onNumberButtonClick={onNumberButtonClick}
          numberOfButtons={5}
        />
      </Row>
      <Row center>
        {vehicleSelectorCreator(numberOfVehicles)}
      </Row>
    </Container>
  );
};

export default VehicleInfoForm;
