import React, { Component } from 'react';
import './Home.css';
import Header from './Header';


class Home extends Component {

  render() {
      return(
          <div>
              <Header history={this.props.history}/>
              <body>
                <p className="empty-search">in search, answers find you will</p>
              </body>
          </div>
      )
  }
}

export default Home;
