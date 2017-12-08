import React from 'react';

class ResourceDataBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let data = this.props.resourceData;
        console.log(data);
        let usefor = this.props.usefor;
        let title = usefor == 'dataset' ? '数据集' : '工具';
        let rows = data.collections.map((item, index) => {
            if (data.title == '实验室内部数据集') {
                var url = '/download/' + item.id;
            } else {
                var url = item.url;
            }
            return (
                <div key={index}>
                    <span>{item.name}</span>
                    <a href={url} target="_blank">下载链接</a>    
                </div>
            )
        });
        return (
            <div className="data-block">
                <div className="data-title">
                    <div>{data.title}</div>
                    <div className="con">INNER DATASET</div>
                    <div className="bor"></div>
                </div>
                <div className="data-info">实验室的内部数据集是在我们搭建的智能化信息安全实验平台上完成的一个实验过程中采集的各种攻击数据。</div>
                <div className="collections">
                    {rows}
                </div>
            </div>
        )
    }
}

export default ResourceDataBlock;