import React from 'react';

class SchoolForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            schoolName: "",
            address: "",
            zipCode: "",
            description: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveSchoolForm = this.saveSchoolForm.bind(this);
      }

      handleInputChange(event) {
          const target = event.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const name = target.name;

          this.setState({
            [name]: value
          });
        }


    saveSchoolForm(e) {
        e.preventDefault();
        console.log(this.state.schoolName);
        console.log(this.state.address);
        console.log(this.state.zipCode);
        console.log(this.state.description);
    }


    render() {
            return (
                <div className="wrapper wrapper-content">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="ibox">
                                <div className="ibox-title">
                                    <h5>School form</h5>
                                </div>
                            </div>
                            <div className="ibox-content">
                                <form>
                                    <div className="form-group  row"><label className="col-sm-2 col-form-label">Nom école</label>
                                        <div className="col-sm-10">
                                        <input type="text" className="form-control" name="schoolName" value={this.state.schoolName}
                                         onChange={this.handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>

                                    <div className="form-group  row"><label className="col-sm-2 col-form-label">Adresse</label>
                                        <div className="col-sm-10"><input type="text" className="form-control" name="address"
                                        value={this.state.address}
                                         onChange={this.handleInputChange} /></div>
                                    </div>
                                    <div className="hr-line-dashed"></div>

                                    <div className="form-group  row"><label className="col-sm-2 col-form-label">Code postale</label>
                                        <div className="col-sm-10"><input type="text" className="form-control" name="zipCode"
                                         value={this.state.zipCode}
                                         onChange={this.handleInputChange} /></div>
                                    </div>
                                    <div className="hr-line-dashed"></div>

                                    <div className="form-group  row"><label className="col-sm-2 col-form-label">Description</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" id="description" rows="3" placeholder="Enter a description ..."
                                            name="description" onChange={this.handleInputChange} >{this.state.zipCode}</textarea>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>

                                    <div className="form-group row">
                                        <div className="col-sm-12 col-sm-offset-2">
                                            <div className="float-right">
                                                <div className="float-e-margins">
                                                    <button  className="btn btn-lg btn-white" type="button">Cancel</button>
                                                    <button className="btn btn-lg btn-primary" type="button" onClick={this.saveSchoolForm}>Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                         </div>
                    </div>
                </div>
            )
    }

}

export default SchoolForm