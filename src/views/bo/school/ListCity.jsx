import React from 'react';

class ListCity extends React.Component {

  constructor(props) {
      super(props);

      this.optionsCityRef = React.createRef();
      this.focusList = this.focusList.bind(this);

      console.log(this.props.selectedCity);
    }

    focusList() {
        this.optionsCityRef.current.focus();
        console.log("optionsCityRef focusList");
    }


  render() {
    return <div>
                <div className="form-group row"><label className="col-sm-2 col-form-label">City</label>
                    <div className="col-sm-10">
                    <select className="form-control m-b"
                    name="selectedCity"
                    value={this.props.selectedCity}
                    onChange={this.props.handleInputChange}
                    disabled={this.props.disabled}
                    ref={this.optionsCityRef}
                    >
                        <option value="">Select City</option>
                        {this.props.optionsCity.map(option => (
                            <option value={option.zipCode}>
                              {option.name} ({option.zipCode})
                            </option>
                          ))}
                    </select>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
           </div>;
  }
}


export default ListCity;