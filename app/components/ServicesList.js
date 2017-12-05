import React from 'react';

class ServicesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props.location.state || '';
        let serviceName = this.props.params.name;

        return (
            <div className="container">
                <div style={{fontSize:'32px',textAlign:'center', marginBottom:'15px'}}>服务列表页面</div>

                <div className="main" style={{minHeight: '500px'}}>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>服务名称：</td>
                                <td>{serviceName}</td>
                            </tr>
                            <tr>
                                <td>服务地址：</td>
                                <td>{props.url}</td>
                            </tr>
                            <tr>
                                <td>服务端口：</td>
                                <td>{props.port}</td>
                            </tr>
                            <tr>
                                <td>登录账户：</td>
                                <td>{props.username}</td>
                            </tr>
                            <tr>
                                <td>登录密码：</td>
                                <td>{props.password}</td>
                            </tr>
                            <tr>
                                <td>登录方式：</td>
                                <td>{props.des}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default ServicesList;