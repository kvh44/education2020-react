import React from 'react';

class ListRegion extends React.Component {

  constructor(props) {
      super(props);

      this.optionsRegionRef = React.createRef();
      this.focusList = this.focusList.bind(this);
    }

    focusList() {
        this.optionsRegionRef.current.focus();
        console.log("optionsRegionRef focusList");
    }


  render() {
    return <div>
                <div className="form-group row"><label className="col-sm-2 col-form-label">Region</label>
                    <div className="col-sm-10">
                    <select className="form-control m-b"
                    name="selectedRegion"
                    value={this.props.selectedRegion}
                    onChange={this.props.handleInputChange}
                    disabled={this.props.disabled}
                    ref={this.optionsRegionRef}
                    >
                        <option value="">Select Region</option>
                        {this.props.optionsRegion.map(option => (
                            <option value={option.code}>
                              {option.name}
                            </option>
                          ))}
                    </select>
                    </div>
                </div>
                <div className="hr-line-dashed"></div>
           </div>;
  }
}


export default ListRegion;