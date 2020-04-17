import React from 'react';

class ListDepartment extends React.Component {

  constructor(props) {
      super(props);

      this.optionsDepartmentRef = React.createRef();
      this.focusList = this.focusList.bind(this);
    }

    focusList() {
        this.optionsDepartmentRef.current.focus();
        console.log("optionsDepartmentRef focusList");
    }


  render() {
    return <div>
                <div className="form-group row"><label className="col-sm-2 col-form-label">Department</label>
                    <div className="col-sm-10">
                    <select className="form-control m-b"
                    name="selectedDepartment"
                    value={this.props.selectedDepartment}
                    onChange={this.props.handleInputChange}
                    disabled={this.props.disabled}
                    ref={this.optionsDepartmentRef}
                    >
                        <option value="">Select Department</option>
                        {this.props.optionsDepartment.map(option => (
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


export default ListDepartment;