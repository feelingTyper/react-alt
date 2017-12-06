import React from 'react';
import ProjectActions from '../actions/ProjectActions';
import ProjectStore from '../stores/ProjectStore';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = ProjectStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        $(document).ready(function() {
            $("span.div1").hide();
            $(".sis-li li").hover(function() {
                $("span.div1", this).stop().slideToggle(500);
            });
        });

        ProjectStore.listen(this.onChange);

    }

    componentWillUnmount() {
        ProjectStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {

        let projects = [{
            title: '完结项目',
            projects: [{
                img: '/img/1.jpg',
                info: '资源共享平台',
                title: '资源共享平台',
                url: 'http://192.168.10.200'
            }, {
                img: '/img/2.jpg',
                info: '众创云平台',
                title: '众创云平台',
                url: 'http://192.168.10.100:8080'
            }, {
                img: '/img/3.jpg',
                info: '智能化网络信息安全实验平台',
                title: '智能化网络信息安全实验平台',
                url: '/'
            }, {
                img: '/img/3.jpg',
                info: '移动网络应用审计平台',
                title: '移动网络应用审计平台',
                url: ''
            }, {
                img: '/img/3.jpg',
                info: '实验平台',
                title: '实验平台',
                url: ''
            }]
        }, {
            title: '在研项目',
            projects: [{
                img: '/img/1.jpg',
                info: '',
                title: '轻量级秘钥管理关键技术研究'
            }, {
                img: '/img/2.jpg',
                info: '大连接安全方案研究（认证与数据加密）',
                title: '面向多域互联网的态势感知关键技术研究',
                url: ''
            }, {
                img: '/img/2.jpg',
                info: `漏洞挖掘与验证：分别分析云端、APP和物联网设备三端各自存在的静态缺陷；
                通过流量数据和三端联合分析的方式,分析出三端结合存在的不足；发现云端和物联网设
                备面临的深层次安全风险，并验证漏洞的风险和可利用性`,
                title: '5G移动大连接技术方案与实验系统研发',
                url: ''

            }, {
                img: '/img/2.jpg',
                info: '',
                title: '智能物联设备安全研究与验证实现',
                url: ''
            }, {
                img: '/img/2.jpg',
                info: '',
                title: '面向多域互联网的态势感知关键技术研究',
                url: ''
            }]
        }];

        let projectList = projects.map((project, index) => {
            var doing = project.title == '完结项目' ? false : true;

            let blockList = project.projects.map((pro, index) => {
                let imgstyle = {
                    height: '250px',
                    overflow: 'hidden',
                    background: `url(${pro.img})`,
                    backgroundSize: 'cover'
                };

                if (pro.url) {
                    var link = `<a href="${pro.url}" target="_blank">${pro.title}</a>`;
                } else {
                    var link = pro.title;
                }

                if (!doing) {

                    return (
                        <li className="col-xs-4" key={index} style={{marginBottom: '40px'}}>
                            <div className="v1">
                                <a href="#">
                                    <div style={imgstyle}>
                                    </div>
                                </a>
                                <span className="div1">
                                 <h3 style={{color: '#fff'}}> 信息简介：</h3> 
                                    <span className="txt">
                                        {pro.info}
                                    </span>
                                </span>
                            </div>
                            <div className="project-title" dangerouslySetInnerHTML={{__html:link}}></div>
                        </li>
                    );
                } else {
                    return (
                        <div className="col-xs-4">
                            <div className="doing">{pro.title}</div>
                        </div>
                    )
                }
            });

            return (
                <div className="outline clearfix" key={index}>
                    <h1 className="titon">{project.title}</h1>
                    <ul className="sis-li">
                      {blockList}  
                    </ul>
                </div>
            )
        });
        return (
            <div className="project">
                <div className="pic">
                </div>
                <div className="container">
                    <div className="row clearfix">
                        {projectList}
                    </div>
                </div>
            </div>

        );
    }
}

export default Project;