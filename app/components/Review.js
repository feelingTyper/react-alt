import React from 'react';
import HomeModuleTitle from './HomeModuleTitle';

class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {


        return (
            <div className="intent">
                <HomeModuleTitle title= {{cn: '目标', en: '——  INTENTION  ——'}} />
                <div className="intent-content container">
                    <div className="row clearfix">
                    <a href="/intention">{contentList}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Review;