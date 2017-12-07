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
                            <div className="col-md-6">
                                <img className="img-responsive" src="img/1.jpg" />
                            </div>
                            <div className="col-xs-6">
                                <p style={{lineHeight: '30px', textIndent: '25px'}}>
本团队隶属于计算机学院信息安全系，主要研究内容为网络安全态势感知中的情报收集，数据挖掘，威胁评估，日志筛选，攻击溯源，攻击预测以及机器学习在安全领域的应用研究等。
本团队具有深厚的学术积淀与科研功底，截止目前论文50余篇，其中SCI论文9篇（其中最高单篇SCI库中引用22次）、EI期刊12篇，ISTP论文15篇；授权专利3项，实申专利2项；授权软件著作权3项；编著《移动网络安全技术与应用》、《身份身份认证》等图书5部；参编企业标准1项，行业标准3项，参与863，自然基金，战略先导等10余个项目。
本团队具有丰富的工程经验， 设计并开发了资源共享平台， 众创云平台等。 其中众创云平台结合了虚拟桌面云环境的资源动态分配与管理， 应用了基于角色与行为的访问控制技术， 实现了一套流程管控方法， 并申请了国家专利。
                                </p>
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