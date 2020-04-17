import React from 'react';
import validate from '../../../common/validation/validate';
import * as APIConfig from '../../../config/APIConfig';
import FetchRegionListService from '../../../common/data/FetchRegionListService';
import FetchDepartmentListService from '../../../common/data/FetchDepartmentListService';
import FetchCityListService from '../../../common/data/FetchCityListService';

import ListRegion from './ListRegion';
import ListDepartment from './ListDepartment';
import ListCity from './ListCity';

class SchoolForm extends React.Component {

    constructor(props) {
        super(props);
        this.fetchRegionListService = new FetchRegionListService();
        this.fetchDepartmentListService = new FetchDepartmentListService();
        this.fetchCityListService = new FetchCityListService();

        this.optionsRegionRef = React.createRef();
        this.optionsDepartmentRef = React.createRef();
        this.optionsCityRef = React.createRef();

        this.state = {
            formIsValid: false,
            optionsRegion: [
            ],
            optionsDepartment: [
            ],
            optionsCity: [
            ],
            formControls: {
                schoolName:  {
                    value: '',
                    valid: false,
                    touched: false,
                    validationRules: {
                       minLength: 3
                    }
                },
                address: {
                     value: '',
                     validationRules: {
                        minLength: 3
                     }
                 },
                zipCode: {
                     value: '',
                     validationRules: {
                         minLength: 5
                     }
                 },
                description: {
                     value: ''
                },
                selectedRegion: {
                     value: '11',
                     validationRules: {
                        minLength: 1
                     }
                },
                selectedDepartment: {
                     value: '75',
                     validationRules: {
                        minLength: 1
                     }
                },
                selectedCity: {
                     value: '75013',
                     validationRules: {
                        minLength: 1
                     }
                }
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveSchoolForm = this.saveSchoolForm.bind(this);
      }

      componentDidMount() {

      }


       async fetchRegionList() {
            this.fetchRegionListService.fetchRegionList().then(json => {
                      this.setState({
                             optionsRegion: json
                      });

                      this.optionsRegionRef.current.focusList();

                      if( this.state.formControls.selectedRegion.value ) {
                        this.fetchDepartmentList(this.state.formControls.selectedRegion.value);
                      }

                }
            );
      }

      async fetchDepartmentList(regionCode) {
            this.setState({
                 optionsDepartment: [],
                 optionsCity: []
            });
            this.fetchDepartmentListService.fetchDepartmentList(regionCode).then(json => {
                 this.setState({
                        optionsDepartment: json
                 });

                 if( this.state.formControls.selectedDepartment.value ) {
                     this.fetchCityList(this.state.formControls.selectedDepartment.value);
                 }

                 //console.log(this.state.formControls.selectedDepartment.value);
               }
           );
      }

      async fetchCityList(departmentCode) {
              this.setState({
                       optionsCity: []
              });
              this.fetchCityListService.fetchCityList(departmentCode).then(json => {
                   this.setState({
                          optionsCity: json
                   });

                   //console.log(this.state.formControls.selectedCity.value);
                 }
             );
        }

      async componentDidMount() {
          this.fetchRegionList();
      }


      handleInputChange(event) {
          const target = event.target;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const name = target.name;

            const updatedControls = {
            	...this.state.formControls
            };
            const updatedFormElement = {
                ...updatedControls[name]
            };
            updatedFormElement.value = value;
            updatedFormElement.touched = true;
            updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

            updatedControls[name] = updatedFormElement;

            let formIsValid = true;
            for (let inputIdentifier in updatedControls) {
                if(typeof updatedControls[inputIdentifier] != 'undefined') {
                    formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
                }
            }

            //console.log(name);
            if(name == 'selectedRegion') {
                updatedControls['selectedDepartment'].value = '';
                updatedControls['selectedCity'].value = '';
                this.fetchDepartmentList(value);
            }
            if(name == 'selectedDepartment') {
                updatedControls['selectedCity'].value = '';
                this.fetchCityList(value);
            }

            this.setState({
                formControls: updatedControls,
                formIsValid: formIsValid
            });
        }

    formSubmitHandler = () => {
    	const formData = {};
    	for (let formElementId in this.state.formControls) {
    	    formData[formElementId] = this.state.formControls[formElementId].value;
    	}
    }


    saveSchoolForm(e) {
        e.preventDefault();
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
                                    <ListRegion
                                        selectedRegion={this.state.formControls.selectedRegion.value}
                                        handleInputChange={this.handleInputChange}
                                        disabled={this.state.optionsRegion.length == 0}
                                        ref={this.optionsRegionRef}
                                        optionsRegion={this.state.optionsRegion}
                                       />

                                    <ListDepartment
                                        selectedDepartment={this.state.formControls.selectedDepartment.value}
                                        handleInputChange={this.handleInputChange}
                                        disabled={this.state.optionsDepartment.length == 0}
                                        ref={this.optionsDepartmentRef}
                                        optionsDepartment={this.state.optionsDepartment}
                                       />



                                    <ListCity
                                        selectedCity={this.state.formControls.selectedCity.value}
                                        handleInputChange={this.handleInputChange}
                                        disabled={this.state.optionsCity.length == 0}
                                        ref={this.optionsCityRef}
                                        optionsCity={this.state.optionsCity}
                                       />




                                    <div className={this.state.formControls.schoolName.touched && !this.state.formControls.schoolName.valid ?  "form-group row has-error" : "form-group row" }>
                                        <label className="col-sm-2 col-form-label">Nom école</label>
                                        <div className="col-sm-10">
                                        <input type="text" className= 'form-control' name="schoolName"
                                        value={this.state.formControls.schoolName.value}
                                         onChange={this.handleInputChange}
                                         />
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>

                                    <div className="form-group  row"><label className="col-sm-2 col-form-label">Adresse</label>
                                        <div className="col-sm-10"><input type="text" className="form-control" name="address"
                                        value={this.state.formControls.address.value}
                                         onChange={this.handleInputChange} /></div>
                                    </div>
                                    <div className="hr-line-dashed"></div>

                                    <div className="form-group  row"><label className="col-sm-2 col-form-label">Code postale</label>
                                        <div className="col-sm-10"><input type="text" className="form-control" name="zipCode"
                                         value={this.state.formControls.zipCode.value}
                                         onChange={this.handleInputChange} /></div>
                                    </div>
                                    <div className="hr-line-dashed"></div>

                                    <div className="form-group  row"><label className="col-sm-2 col-form-label">Description</label>
                                        <div className="col-sm-10">
                                            <textarea className="form-control" id="description" rows="3" placeholder="Enter a description ..."
                                            name="description" onChange={this.handleInputChange}
                                            value={this.state.formControls.description.value}
                                            >

                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="hr-line-dashed"></div>

                                    <div className="form-group row">
                                        <div className="col-sm-12 col-sm-offset-2">
                                            <div className="float-right">
                                                <div className="float-e-margins">
                                                    <button  className="btn btn-lg btn-white" type="button">Cancel</button>
                                                    <button className="btn btn-lg btn-primary" type="button" disabled={!this.state.formIsValid} onClick={this.saveSchoolForm}>Save</button>
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