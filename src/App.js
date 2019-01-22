import React, { Component } from 'react';
import NavbarHeader from './components/NavbarHeader';
import BasicInfoForm from './components/BasicInfoForm';
import VehicleInfoSelectors from './components/VehicleInfoSelectors';
import NumberOfVehiclesSelector from './components/NumberOfVehiclesSelector';
import VehicleInfoForm from './components/VehicleInfoForm';
import SettingsPage from './components/SettingsPage';
import ReviewPage from './components/ReviewPage';
import './App.css';

const leadData = {};

class App extends Component {
  state = {
    leadData: {},
    route: 'bInfo',
    numberOfVehicles: '',
  };

  submitInfoHandler = (strNameOfObject, nextPageStr) => (event) => {
    event.preventDefault();
    event.target.className += ' was-validated';
    try {
      if (!(Object.values(leadData[strNameOfObject]).includes(''))
      && Object.values(leadData[strNameOfObject]).length > 0) {
        this.setState({ route: nextPageStr });
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.log(error);
    }
  }

  infoChangeHandler = (infoObj, strNameOfObject) => (event) =>  {
    infoObj[event.target.name] = event.target.value;
    leadData[strNameOfObject] = infoObj;
    this.setState({ leadData });
  }

  onNumberButtonClick = (number) => {
    this.setState({ numberOfVehicles: number });
  }

  navbarOnClickHandler = (route) => {
    this.setState({ route: route });
  }

  routeHandler = (route) => {
    if (route === 'bInfo') {
      return (
        <BasicInfoForm
          submitInfoHandler={this.submitInfoHandler}
          infoChangeHandler={this.infoChangeHandler}
        />
      );
    } if (route === 'vInfo') {
      return (
        <VehicleInfoForm
          numberOfVehicles={this.state.numberOfVehicles}
          NumberOfVehiclesSelector={NumberOfVehiclesSelector}
          VehicleInfoSelectors={VehicleInfoSelectors}
          onNumberButtonClick={this.onNumberButtonClick}
          infoChangeHandler={this.infoChangeHandler}
        />
      );
    } if (route === 'settings') {
      return (
        <SettingsPage
          infoChangeHandler={this.infoChangeHandler}
          submitInfoHandler={this.submitInfoHandler}
        />
      );
    } if (route === 'review') {
      return (
        <ReviewPage
          leadData={this.state.leadData}
        />
      );
    }
    return null;
  };

  render() {
    const { route } = this.state;
    return (
      <div>
        <NavbarHeader
          navbarOnClickHandler={this.navbarOnClickHandler}
          route={route}
        />
        {this.routeHandler(route)}
      </div>
    );
  }
}

export default App;
