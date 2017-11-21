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
            $("span.div").hide();
            $(".sis-li li").hover(function() {
                $("span.div", this).slideToggle(500);
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
            title: '在研项目',
            projects: [{
                img: '/img/1.jpg',
                info: '文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明'
            }, {
                img: '/img/2.jpg',
                info: '文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明'
            }, {
                img: '/img/3.jpg',
                info: '文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明'
            }]
        }, {
            title: '完结项目',
            projects: [{
                img: '/img/1.jpg',
                info: '文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明'
            }, {
                img: '/img/2.jpg',
                info: '文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明'
            }, {
                img: '/img/3.jpg',
                info: '文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明'
            }]
        }];

        let projectList = projects.map((project, index) => {
            let blockList = project.projects.map((pro, index) => {
                let imgstyle = {
                    height: '250px',
                    width: '320px',
                    overflow: 'hidden',
                    background: `url(${pro.img})`,
                    backgroundSize: 'cover'
                };

                return (
                    <li className="col-xs-4" key={index}>
                        <span className="v1">
                            <a href="#">
                                <div syle={imgstyle}>
                                    <img style={{height: 'auto', width: '320px'}} src={pro.img} />
                                </div>
                            </a>
                            <span className="div">
                             <h3> 信息简介：</h3> 
                                <span className="txt">
                                    {pro.info}
                                </span>
                            </span>
                        </span>
                    </li>
                )
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
                    <div className="row">
                        {projectList}
                    </div>
                </div>
            </div>

        );
    }
}

export default Project;