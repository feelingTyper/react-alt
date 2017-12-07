import React from 'react';
import HomeModuleTitle from './HomeModuleTitle';

class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <div className="review">
               <h3>{title}</h3>
            </div>
        )
    }
}

export default Review;