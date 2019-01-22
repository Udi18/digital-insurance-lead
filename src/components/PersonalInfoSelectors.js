/* eslint-disable linebreak-style */
import React from 'react';
import { Row } from 'mdbreact';

// Add to state?
const personalInfoObj = {};

class PersonalInfoSelectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfoObj,
    };
  }

  // Renders the personal information dropdown selectors on the bInfo route state.
  render() {
    const { infoChangeHandler } = this.props;
    return (
      <Row className="pt-3">
        <div className="col-md mb-3">
          <label htmlFor="propertyS" className="black-text">Do you own your home?</label>
          <select
            className="form-control"
            onChange={infoChangeHandler(personalInfoObj, 'personalInfoObj')}
            name="propertyOwnerStatus"
            value={personalInfoObj.propertyOwnerStatus}
          >
            <option value="None picked">Select one</option>
            <option value="Own">Yes I own</option>
            <option value="Rent">No I rent</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="col-md mb-3">
          <label htmlFor="maritalS" className="black-text">What is your marital status?</label>
          <select
            className="form-control"
            onChange={infoChangeHandler(personalInfoObj, 'personalInfoObj')}
            name="maritalStatus"
            value={personalInfoObj.maritalStatus}
          >
            <option value="None picked">Select one</option>
            <option value="Married">Married</option>
            <option value="Single">Single</option>
            <option value="In a relationship">In a relationship</option>
          </select>
        </div>
        <div className="col-md mb-3">
          <label htmlFor="lifeInS" className="black-text">Do you have life insurance?</label>
          <select
            className="form-control"
            onChange={infoChangeHandler(personalInfoObj, 'personalInfoObj')}
            name="lifeInsuranceStatus"
            value={personalInfoObj.lifeInsuranceStatus}
          >
            <option value="None picked">Select one</option>
            <option value="Yes personal">Yes , a personal policy</option>
            <option value="Yes work">Yes, through work</option>
            <option value="No">No</option>
          </select>
        </div>
      </Row>
    );
  }
}

export default PersonalInfoSelectors;
