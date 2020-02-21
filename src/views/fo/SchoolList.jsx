import React from 'react';

class SchoolList extends React.Component {

    render() {
        return (

        <div className="wrapper wrapper-content">
                <div className="row animated fadeInRight">
                    <div className="col-md-4">

                        <div className="ibox ">
                            <div className="ibox-title">
                                <h5>Profile Detail</h5>
                            </div>
                            <div>
                                <div className="ibox-content no-padding border-left-right">
                                    <img alt="image" className="img-fluid" src="img/profile_big.jpg" />
                                </div>
                                <div className="ibox-content profile-content">
                                    <h4><strong>Monica Smith</strong></h4>
                                    <p><i className="fa fa-map-marker"></i> Riviera State 32/106</p>
                                    <h5>
                                        About me
                                    </h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitat.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        </div>


        )
    }

}

export default SchoolList