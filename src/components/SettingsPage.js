/* eslint-disable linebreak-style */
import React from 'react';
import { Container, Row, Col } from 'mdbreact';

// consider bringing this to the state directly.
class SettingsPage extends React.Component {
 state = {
   settingsInfo: {},
 }

 render() {
   const { infoChangeHandler, submitInfoHandler } = this.props;
   const { settingsInfo } = this.state;
   return (
    <div className="grey-text">
      <Container className="mt-5">
        <Row className="mt-6">
          <Col>
            <Row center>
              <h1>Lead Total:</h1>
            </Row>
            <Row className="p-5">
              <h2 className="">Welcome to the Lead Gen App!</h2>
              <h3>Enter lead generator name, the location leads are generated and create a password for this session.</h3>
            </Row>
            <Row>
              <Col>
                <form className="needs-validation" onSubmit={submitInfoHandler('settingsInfo', 'bInfo')} noValidate>
                  <Row className="pt-3">
                    <div className="col-md-4 mb-3">
                      <label htmlFor="setupFirstName" className="black-text">First name</label>
                      <input
                        value={settingsInfo.fNameOfLeadGen}
                        name="fNameOfLeadGen"
                        onChange={infoChangeHandler(settingsInfo, 'settingsInfo')}
                        type="text"
                        id="firstName"
                        className="form-control"
                        placeholder="First name"
                        required
                      />
                      <div className="invalid-feedback">Please provide your first name.</div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="lastName" className="black-text">Last name</label>
                      <input
                        value={settingsInfo.lNameOfLeadGen}
                        name="lNameOfLeadGen"
                        onChange={infoChangeHandler(settingsInfo, 'settingsInfo')}
                        type="text"
                        id="lastName"
                        className="form-control"
                        placeholder="Last name"
                        required
                      />
                      <div className="invalid-feedback">Please provide your last name.</div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="locationAdd" className="black-text">Location</label>
                      <input
                        value={settingsInfo.location}
                        name="location"
                        onChange={infoChangeHandler(settingsInfo, 'settingsInfo')}
                        type="location"
                        id="locationAdd"
                        className="form-control"
                        placeholder="Location"
                        required
                      />
                      <div className="invalid-feedback">Please provide your location.</div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </Row>
                  <Row>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="password" className="black-text">Password</label>
                      <input
                        value={settingsInfo.tempPassword}
                        name="tempPassword"
                        onChange={infoChangeHandler(settingsInfo, 'settingsInfo')}
                        type="text"
                        id="tempPasswordAdd"
                        className="form-control"
                        required
                      />
                      <div className="invalid-feedback">Please enter temporary password</div>
                      <div className="valid-feedback">Looks good!</div>
                    </div>
                  </Row>
                  <button type="submit">Submit</button>
                </form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
   );
 }
}

export default SettingsPage;
