import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import Header from './Header';


class Home extends Component {

  render() {
      return(
          <div>
              <Header/>
              <body>
                <p class="empty-search">in search, answers find you will find</p>
              </body>
          </div>
      )
  }
}

export default Home;
