import React from 'react';

class HomeModuleTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let title = this.props.title;

        return (
            <div className="clearfix" style={{marginBottom: '50px'}}>
                <div style={{textAlign: 'center'}}>
                    <span style={{backgroundColor: 'transparent'}}>
                        <span style={{fontSize: '24px'}}>
                            <font style={{color: 'rgb(76, 76, 76)'}} color="#4c4c4c">{title.cn}</font>
                        </span>
                    </span>
                </div>
                <div style={{textAlign: 'center'}}>
                    <span style={{fontSize: '14px'}}><font style={{color: 'rgb(166, 166, 166)'}} color="#a6a6a6">——  {title.en}  ——</font></span>
                </div>
            </div>
        )
    }
}

export default HomeModuleTitle;