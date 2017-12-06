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
                link: 'http://youngyu.net/',
                detail: '讲师，研究方向量子密码',
                img: ''
            }]
        }, {
            category: '博士',
            names: [{
                name: '韩磊',
                link: 'http://youngyu.net/',
                detail: '博士，研究方向，态势感知',
                img: ''
            }]
        }, {
            category: '硕士',
            names: [{
                name: '于洋',
                link: 'http://youngyu.net/',
                detail: '研二，研究方向：态势感知',
                img: ''
            }, {
                name: '吕少华',
                link: 'http://youngyu.net/',
                detail: '研二，研究方向，态势感知',
                img: ''
            }, {
                name: '和旭东',
                link: 'http://youngyu.net/',
                detail: '研二，研究方向，态势感知'

            }, {
                name: '杨茵淇',
                link: 'http://youngyu.net/',
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
                    <div className="col-xs-4" key={index} style={{textAlign:'center', marginBottom:'40px'}}>
                        <a href={obj.link} target="_blank">
                            <img style={{width: '100px', height: '100px'}} src={obj.img||'/img/bjtu.jpeg'} />
                            <div className="name" style={{marginTop: '20px', color: '#4ab344'}}>{obj.name}</div>
                        </a>
                            <div className="info" style={{marginTop: '20px'}}><strong>简介：</strong>&nbsp;&nbsp;{obj.detail}</div>
                    </div>
                );
            });

            return (
                <div className="onepeo_outline clearfix col-xs-12" key={index}>
                    <div className="col-xs-1" style={{borderRight:'1px solid #ddd', textAlign: 'center'}}><strong>{team.category}</strong></div>
                    <div className="col-xs-11 row">
                        {nameList}
                    </div>
                </div>
            )
        });

        return (
            <div className="team">
                <div className="outline clearfix" style={{backgroundColor: '#f0f4f5'}}>
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