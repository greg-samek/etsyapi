import React, { Component } from 'react';
import './ResultCard.css';

class ResultCard extends Component {

    render() {
        const { data } = this.props;
        const src = data.Images[0].url_170x135;
        return(
            <div className="result-card">
                <img src={src} alt={data.title}/>
                <h3>{data.title}</h3>
            </div>
        )
    }
}

export default ResultCard;