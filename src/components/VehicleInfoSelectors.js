/* eslint-disable linebreak-style */
import React from 'react';
import { Row } from 'mdbreact';
import vehicleData from './vehicleData';

// Broken record here just commenting on all possibly incorrectly placed objects.
const vehicleInfo = {};

class VehicleInfoSelectors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleInfo,
    };
  }

  // Adds list of years from vehicleData to options for year dropdrown.
  yearDropDownOptionsCreator = obj => Object.keys(obj)
    .map(items => <option value={items} />);

  // Adds list of makes from vehicleData to options for make
  // dropdown based on year selected or typed if available.
  makeDropDownOptionsCreator = (obj, num) => {
    if (obj[vehicleInfo[`year${num}`]]) {
      return Object.keys(obj[vehicleInfo[`year${num}`]])
        .map(items => <option value={items} />);
    }
    return null;
  }

  // Adds list of models from vehicleData to options for model
  // dropdown based on year and make selected or typed if available.
  modelDropDownOptionsCreator = (obj, num) => {
    try {
      return Object.values(obj[vehicleInfo[`year${num}`]][vehicleInfo[`make${num}`]])
        .map(items => <option value={items} />);
    } catch (error) {
      return <option value="" />;
    }
  }

  render() {
    const { infoChangeHandler, selectorNumber } = this.props;
    const { vehicleInfo } = this.state;
    return (
      <Row className="pt-3">
        <div className="col-md mb-3">
          <label
            id={`carLabelId${selectorNumber}`}
            htmlFor={`vehicleYearStatus${selectorNumber}`}
            className="black-text">Year of vehicle?
            <input
              type="text"
              className="form-control"
              // Years do not show when changing back and forth number of vehicles.
              value={vehicleInfo[`years${selectorNumber}`]}
              onChange={infoChangeHandler(vehicleInfo, 'vehicleInfoObj')}
              name={`year${selectorNumber}`}
              list={`years${selectorNumber}`}
            />
            <datalist id={`years${selectorNumber}`}>
              {this.yearDropDownOptionsCreator(vehicleData)}
            </datalist>
          </label>
        </div>
        <div className="col-md mb-3">
          <label htmlFor={`vehicleMakeStatus${selectorNumber}`} className="black-text">Make of Vehicle?</label>
          <input
            type="text"
            className="form-control"
            value={vehicleInfo[`make${selectorNumber}`]}
            onChange={infoChangeHandler(vehicleInfo, 'vehicleInfoObj')}
            name={`make${selectorNumber}`}
            list={`makes${selectorNumber}`}
          />
          <datalist id={`makes${selectorNumber}`}>
            {this.makeDropDownOptionsCreator(vehicleData, selectorNumber)}
          </datalist>
        </div>
        <div className="col-md mb-3">
          <label htmlFor={`vehicleModelStatus${selectorNumber}`} className="black-text">Model of vehicle?</label>
          <input
            type="text"
            className="form-control"
            value={vehicleInfo[`model${selectorNumber}`]}
            onChange={infoChangeHandler(vehicleInfo, 'vehicleInfoObj')}
            name={`model${selectorNumber}`}
            list={`model${selectorNumber}`}
          />
          <datalist id={`model${selectorNumber}`}>
            {this.modelDropDownOptionsCreator(vehicleData, selectorNumber)}
          </datalist>
        </div>
      </Row>
    );
  }
}

export default VehicleInfoSelectors;
