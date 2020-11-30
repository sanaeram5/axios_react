import React, { Component } from 'react';
import male from '../src/image/male.svg';
import axios from 'axios';

class Data extends Component {
    constructor(props) {
      super(props);
      this.state = {
        team: [],
      };
    }
  
    componentDidMount() {
      axios
        .get("/data.json")
        .then((response) => {
          console.log(response.data[0]);
  
          this.setState({ team: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    render() {
      const { team } = this.state;
        console.log(typeof(team))
      return (
        <div>
            <div className="container">
            <div className="col-md-12">
              <h1 className="wow slideInLeft text-center mb-10">Our Team</h1>
              <br />
            </div>
            <div className="container-fluid mb-10">
              <div className="row">
                <div className="col-12 mx-auto">
                  <div className="row gy-8">
                    {team.length
                      ? team.map((members) => (
                          
                          <div className="col-md-3 col-12 mx-auto">
                              <div id={members.id} className="team-img">
                              <img
                                src={male}
                                alt={members.Name}
                                className="img-responsive wow zoomIn"
                              />
                            </div>
                            <div class="team-box">
                              <h2>{members.Name}</h2>
                              <h3>{members.Domain}</h3>
                              <h3>{members.Email}</h3>
                            </div>
                          </div>
                        ))
                      : null}
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
	);
}
}

export default Data;