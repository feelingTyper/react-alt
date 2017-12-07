import alt from '../alt'
import ServiceActions from '../actions/ServiceActions'

class ServiceStore {
	constructor() {
		this.bindActions(ServiceActions);
		this.message = '';
		this.services = [{
			type: 'WEB服务',
			content: [{
				name: '本站',
				url: 'http://192.168.10.70',
				'detail': '智能化信息安全实验平台介绍网站'
			}, {
				name: '资源共享网站',
				url: 'http://192.168.10.200',
				'detail': '资源共享平台'
			}, {
				name: '众创云平台',
				url: 'http://192.168.10.100:8080',
				'detail': '多角色工作流控制平台&虚拟资源共享和管理平台'
			}, {
				name: '资源共享网站-apache1',
				url: 'http://192.168.10.203',
				'detail': '资源共享平台服务器一'
			}, {
				name: '资源共享网站-apache2',
				url: 'http://192.168.10.204',
				'detail': '资源共享平台服务器二'
			}, {
				name: '资源共享平台-tomcat1',
				url: 'http://192.168.10.103:8080',
				'detail': '重创云平台服务器一'
			}, {
				name: '资源共享平台-tomcat2',
				url: 'http://192.168.10.104:8080',
				'detail': '重创云平台服务器二'
			}]
		}, {
			type: '数据库服务',
			content: [{
				name: 'Mysql',
				url: '/services/detail/mysql',
				'detail': 'mysql数据库服务',
				appendix: {
					url: '192.168.10.205',
					port: '3306',
					username: 'root',
					password: '联系管理员',
					des: '登录方式，使用mysql客户端远程链接，navcat等等。'
				}
			}, {
				name: 'MongoDB',
				url: '/services/detail/mongodb',
				'detail': 'mongodb数据库服务',
				appendix: {
					url: '192.168.10.105',
					port: '60000',
					username: 'root',
					password: '联系管理员',
					des: '登录方式，使用mongo客户端远程链接，如robot等等。'
				}
			}, {
				name: 'GridFS',
				url: '/services/detail/gridfs',
				'detail': 'GridFS文件系统',
				appendix: {
					url: '192.168.10.106',
					port: '60000',
					username: 'root',
					password: '联系管理员',
					des: '登录方式，使用mongodb客户端远程链接，robot等等。'
				}
			}]
		}, {
			type: '存储服务',
			content: [{
				name: '资源共享网站网络文件系统',
				url: '/services/detail/NFS',
				'detail': '资源共享网站网络文件系统',
				appendix: {
					url: '192.168.10.206',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '资源共享网站网络文件系统,SSH远程登陆'
				}
			}, {
				name: 'QNAP存储箱',
				url: 'http://192.168.2.139',
				'detail': 'QNAP存储箱，云存储系统文件上传下载，备份分享等功能'
			}, {
				name: 'FTP从服务器',
				url: 'ftp://192.168.10.81',
				'detail': '文件下载服务器，下载文件，工具，图片，视频等功能'
			}, {
				name: 'GITLAB服务器',
				url: 'http://192.168.10.80',
				'detail': 'GitLab代码托管服务器，代码提交，下载，版本控制，团队合作等功能'
			}, {
				name: '日志监控',
				url: 'http://192.168.10.82/loganalyzer',
				'detail': '日志监控服务器，提供日志监控，数据采集，性能检测等功能'
			}]
		}, {
			type: '安全监控服务',
			content: [{
				name: '入侵检测系统SNORT',
				url: '/services/detail/snort',
				'detail': '入侵检测系统snort',
				appendix: {
					url: '192.168.10.90',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '入侵检测系统， SSH远程登录'
				}
			}, {
				name: '漏洞扫描NESSUS',
				url: 'https://192.168.10.91:8834',
				'detail': '漏洞扫描系统，扫描系统漏洞，'
			}, {
				name: '流量抓取工具TCPDUMP',
				url: '/services/detail/tcpdump',
				'detail': '抓取网络链接流量，分析流量特征',
				appendix: {
					url: '192.168.10.60',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '流量抓取工具TCPDUMP， 提供网络链接流量抓取功能，采集网络攻击数据'
				}
			}, {
				name: '性能监控NAGIOS',
				url: 'http://192.168.10.63',
				'detail': '性能监控NAGIOS，监控系统性能，评估系统状态'
			}]
		}, {
			type: '系统管理服务',
			content: [{
				name: '虚拟化管理FunsionCompute',
				url: 'http://192.168.10.51',
				'detail': '虚拟化管理FunsionCompute，管理分配虚拟资源'
			}, {
				name: '硬件服务器IBM',
				url: '/services/detail/ibm',
				'detail': '硬件服务器IDM,提供USER域虚拟机分发服务。',
				appendix: {
					url: '192.168.20.2',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '硬件服务器IDM,提供USER域虚拟机分发服务, SSH远程登录'
				}
			}, {
				name: '硬件服务器HP',
				url: '/services/detail/hp',
				'detail': '硬件服务器HP,提供DMZ域虚拟机分发服务。',
				appendix: {
					url: '192.168.10.2',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '硬件服务器HP,提供DMZ域虚拟机分发服务, SSH远程登录'
				}
			}, {
				name: '台式服务器',
				url: '/services/detail/desktop',
				'detail': '态势服务器,提供数据分析域虚拟机分发服务。',
				appendix: {
					url: '192.168.1.2',
					port: '22',
					username: 'root',
					password: '联系管理员',
					des: '台式服务器,提供数据分析域虚拟机分发服务, SSH远程登录'
				}
			}]
		}];
	}

	onSetMessageSuccess(payload) {
		this.message = payload.message;
	}

	onSetMessageFail(errorMessage) {
		toastr.error(errorMessage);
	}

	onGetMessageSuccess(payload) {
		this.services = payload
	}

	onGetMessageFail(errorMessage) {
		toastr.error(errorMessage);
	}

	onGetDefaultMessage() {
		this.message = ''
	}

}

export default alt.createStore(ServiceStore);