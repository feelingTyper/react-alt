import React from 'react';
import TeamStore from '../stores/TeamStore';
import TeamActions from '../actions/TeamActions';
import HomeModuleTitle from './HomeModuleTitle';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = TeamStore.getState();
    }

    componentDidMount() {
        TeamStore.listen(this.onChange);
    }

    componentWillUnmount() {
        TeamStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        let teams = [{
            category: '老师',
            names: [{
                name: '王健',
                link: '',
                detail: '讲师，研究方向量子密码'
            }]
        }, {
            category: '博士',
            names: [{
                name: '韩磊',
                link: '',
                detail: '博士，研究方向，态势感知',
                img: ''
            }]
        }, {
            category: '硕士',
            names: [{
                name: '于洋',
                link: '',
                detail: '研二，研究方向：态势感知',
                img: ''
            }, {
                name: '吕少华',
                link: '',
                detail: '研二，研究方向，态势感知',
                img: ''
            }, {
                name: '',
                link: '',
                detail: '研二，研究方向，态势感知'

            }, {
                name: '杨茵淇',
                link: '',
                detail: '研一，研究方向，态势感知',
                img: ''
            }, ]
        }, {
            category: '本科生',
            names: []
        }, {
            category: '毕业生',
            names: []
        }];

        let teamList = teams.map((team, index) => {
            let nameList = team.names.map((obj, index) => {
                return (
                    <div className=" col-xs-offset-1 col-xs-1" key={index}>
                        <a href="#">
                            <img style={{width: '100px', height: '100px'}} src="img/u18.png" />
                            <div className="name">{obj.name}</div>
                        </a>
                    </div>
                );
            });

            return (
                <div className="onepeo_outline clearfix col-xs-12" key={index}>
                    <div className="col-xs-1 oneclassName">{team.category}</div>
                    <div className="col-xs-10">
                        {nameList}
                    </div>
                </div>
            )
        });

        return (
            <div className="team">
                <div className="outline row clearfix" style={{backgroundColor: '#f0f4f5'}}>
                    <div className="container">
                        <div style={{marginTop: '50px'}}><HomeModuleTitle title={{cn: '我们的团队', en:'OUR GROUP'}} /></div>
                        <div className="row" style={{marginBottom: '50px'}}>
                            <div className="col-md-7">
                                <img className="img-responsive" src="img/1.jpg" />
                            </div>
                            <div className="col-xs-5">
                                <p>整体介绍团队特点，包括研究方向，老师学生人数等</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="line">
                        <span className="people_tit">TEACHERS&nbsp;&nbsp;STUDENTS</span>
                    </div>
                    <div className="row">{teamList}</div>
                </div>
            </div>
        );
    }
}

export default Team;