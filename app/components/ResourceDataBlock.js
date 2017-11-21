import React from 'react';

class ResourceDataBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.resourceData;
        let usefor = this.props.usefor;
        let title = usefor == 'dataset' ? '数据集' : '工具';
        let rows = data.collections.map((item, index) => {
            return (
                <tr key={index}>
                <td>{item.name}</td>
                <td>
                <a href={item.url} target="_blank">{item.url}</a>    
                </td>
                </tr>
            )
        });
        return (
            <div className="data-block">
                <div className="data-title">{data.title}</div>
                <table className="table">
                <thead>
                    <tr>
                        <th>{title}</th>
                        <th>使用方法及下载地址</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
                </table>
            </div>
        )
    }
}

export default ResourceDataBlock;