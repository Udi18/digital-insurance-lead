/* eslint-disable linebreak-style */
import React from 'react';
import { Row, Container, Col } from 'mdbreact';

const ReviewPage = (props) => {
  const { leadData } = props;
  const { basicInfoObj, personalInfoObj, vehicleInfoObj } = leadData;
  return (
    <Container className="mt-5">
      <Row className="center">
        <h3>Please review and submit information.</h3>
      </Row>
      <Row className="pt-5">
        <h4>Personal Information:</h4>
      </Row>
      <Row>
        <Col size="7">
          <Row>
            <Col size="4">
              <h5>First name:</h5>
            </Col>
            <Col size="8">
              <h5 className="font-weight-bold">{basicInfoObj.fname}</h5>
            </Col>
          </Row>
          <Row>
            <Col size="4">
              <h5>Last name:</h5>
            </Col>
            <Col size="8">
              <h5 className="font-weight-bold">{basicInfoObj.lname}</h5>
            </Col>
          </Row>
          <Row>
            <Col size="4">
              <h5>Email:</h5>
            </Col>
            <Col size="8">
              <h5 className="font-weight-bold">{basicInfoObj.email}</h5>
            </Col>
          </Row>
          <Row>
            <Col size="4">
              <h5>Home address:</h5>
            </Col>
            <Col size="8">
              <h5 className="font-weight-bold">{basicInfoObj.homeAdd}</h5>
              <h5 className="font-weight-bold">{`${basicInfoObj.city}, ${basicInfoObj.state}, ${basicInfoObj.zip}`}</h5>
            </Col>
          </Row>
          <Row>
            <Col size="4">
              <h5>Phone number:</h5>
            </Col>
            <Col size="8">
              <h5 className="font-weight-bold">{basicInfoObj.phoneNumber}</h5>
            </Col>
          </Row>
        </Col>
        <Col size="5">
          <Row>
            <Col size="4">
              <h5>Home ownership status:</h5>
            </Col>
            <Col size="8">
              <h5 className="font-weight-bold">{personalInfoObj.propertyOwnerStatus}</h5>
            </Col>
          </Row>
          <Row>
            <Col size="4">
              <h5>Marital status:</h5>
            </Col>
            <Col size="8">
              <h5 className="font-weight-bold">{personalInfoObj.maritalStatus}</h5>
            </Col>
          </Row>
          <Row>
            <Col size="4">
              <h5>Life insurance status:</h5>
            </Col>
            <Col size="8">
              <h5 className="font-weight-bold">{personalInfoObj.lifeInsuranceStatus}</h5>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="pt-3">
        <h4>Car Information:</h4>
      </Row>
    </Container>
  );
};

export default ReviewPage;
