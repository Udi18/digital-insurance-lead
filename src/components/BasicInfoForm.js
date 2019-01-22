/* eslint-disable linebreak-style */
import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import PersonalInfoSelectors from './PersonalInfoSelectors';

// Should this be in state and change the changeHandler?

class BasicInfoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basicInfoObj: {},
    };
  }
  basicInfoObj = {};
  
  // Renders the basic information form on the bInfo state.
  render() {
    const { infoChangeHandler, submitInfoHandler } = this.props;
    return (
      <div className="grey-text">
        <Container className="mt-5">
          <Row className="mt-6">
            <Col>
              <form className="needs-validation" onSubmit={submitInfoHandler('basicInfoObj', 'vInfo')} noValidate>
                <Row className="pt-3">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="firstName" className="black-text">First name</label>
                    <input
                      value={basicInfoObj.fname}
                      name="fname"
                      onChange={infoChangeHandler(basicInfoObj, 'basicInfoObj')}
                      type="text"
                      id="fname"
                      className="form-control"
                      placeholder="Your first name"
                      required
                    />
                    <div className="invalid-feedback">Please provide your first name.</div>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="lastName" className="black-text">Last name</label>
                    <input
                      value={basicInfoObj.lname}
                      name="lname"
                      onChange={infoChangeHandler(basicInfoObj, 'basicInfoObj')}
                      type="text"
                      id="lname"
                      className="form-control"
                      placeholder="Your last name"
                      required
                    />
                    <div className="invalid-feedback">Please provide your last name.</div>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="emailAdd" className="black-text">Email</label>
                    <input
                      value={basicInfoObj.email}
                      name="email"
                      onChange={infoChangeHandler(basicInfoObj, 'basicInfoObj')}
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Your email address"
                      required
                    />
                    <div className="invalid-feedback">Please provide your email.</div>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                </Row>
                <Row className="pt-3">
                  <div className="col-md-8 mb-3">
                    <label htmlFor="homeAddress" className="black-text">Street address</label>
                    <input
                      value={basicInfoObj.homeAdd}
                      name="homeAdd"
                      onChange={infoChangeHandler(basicInfoObj, 'basicInfoObj')}
                      type="text"
                      id="homeAdd"
                      className="form-control"
                      placeholder="Your home address"
                      required
                    />
                    <div className="invalid-feedback">Please provide your street address.</div>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="DateOfBirth" className="black-text">Birthdate</label>
                    <input
                      value={basicInfoObj.dob}
                      name="dob"
                      onChange={infoChangeHandler(basicInfoObj, 'basicInfoObj')}
                      type="date"
                      id="dob"
                      className="form-control"
                      required
                    />
                    <div className="invalid-feedback">Please provide your date of birth.</div>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                </Row>
                <Row className="pt-3">
                  <div className="col-md-4 mb-3">
                    <label htmlFor="cityInfo" className="black-text">City</label>
                    <input
                      value={basicInfoObj.city}
                      onChange={infoChangeHandler(basicInfoObj, 'basicInfoObj')}
                      type="text"
                      id="city"
                      className="form-control"
                      name="city"
                      placeholder="City"
                      required
                    />
                    <div className="invalid-feedback">Please provide a valid city.</div>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="stateInfo" className="black-text">State</label>
                    <input
                      value={basicInfoObj.state}
                      onChange={infoChangeHandler(basicInfoObj, 'basicInfoObj')}
                      type="text"
                      id="state"
                      className="form-control"
                      name="state"
                      placeholder="State"
                      required
                    />
                    <div className="invalid-feedback">Please provide a valid state.</div>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-2 mb-3">
                    <label htmlFor="zipInfo" className="black-text">Zip code</label>
                    <input
                      value={basicInfoObj.zip}
                      onChange={infoChangeHandler(basicInfoObj, 'basicInfoObj')}
                      type="number"
                      id="zip"
                      className="form-control"
                      name="zip"
                      placeholder="Zip"
                      required
                    />
                    <div className="invalid-feedback">Please provide a valid zip.</div>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="phoneNum" className="black-text">Phone number</label>
                    <input
                      value={basicInfoObj.phoneNumber}
                      onChange={infoChangeHandler(basicInfoObj, 'basicInfoObj')}
                      type="number"
                      id="phoneNumber"
                      className="form-control"
                      name="phoneNumber"
                      placeholder="Phone number"
                      required
                    />
                    <div className="invalid-feedback">Please provide a valid phone number.</div>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                </Row>
                <PersonalInfoSelectors
                  submitInfoHandler={submitInfoHandler}
                  infoChangeHandler={infoChangeHandler}
                />
                <button type="submit">Submit</button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BasicInfoForm;
