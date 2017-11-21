import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="myCarousel" className="carousel slide">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>   
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="/img/1.jpg" alt="First slide" />
                    </div>
                    <div className="item">
                        <img src="/img/2.jpg" alt="Second slide" />
                    </div>
                    <div className="item">
                        <img src="/img/3.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control right" href="#myCarousel" 
                   data-slide="prev">forward</a>
                <a className="carousel-control left" href="#myCarousel" 
                   data-slide="next">back</a>
            </div>
        )
    }
}

export default Carousel;