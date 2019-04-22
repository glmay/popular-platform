let menus = (() => {
	return [{
		name: '首页',
		path: '/index.html',
	}, {
		name: '角色',
		path: 'player',
		children: [{
			name: '玩家管理',
			path: 'player',
		}, {
			name: '代理管理',
			path: 'agents',
		}, {
			name: '层级设置',
			path: 'level',
		}, {
			name: '在线玩家',
			path: 'onlineplayer',
		}, {
			name: '玩家检测',
			path: 'playercheck',
		}, {
			name: '玩家咨询',
			path: 'playeradvisory',
		}, {
			name: '模拟账号',
			path: 'mockaccount',
		}, ]
	}, {
		name: '资金',
		path: 'funds',
		children: [{
			name: '公司入款审核',
			path: 'company'
		},{
			name: '线上支付记录',
			path: 'online'
		},{
			name: '玩家取款审核',
			path: 'withdrawallist'
		},{
			name: '代理取款审核',
			path: 'agentlist'
		},{
			name: '人工存取',
			path: 'manual'
		},{
			name: '返水结算',
			path: 'rakebackbill'
		},{
			name: '返佣结算',
			path: 'rebateagent'
		},{
			name: '全民推广结算',
			path: 'recommendedbonussettlestatistics'
		},]
	}, {
		name: '运营',
		path: 'operation',
		children: [{
			name: '公司入款账户',
			path: 'payaccount',
		}, {
			name: '线上支付账户',
			path: 'onlinepayaccount',
		}, {
			name: '返水设置',
			path: 'rakeback',
		}, {
			name: '返佣设置',
			path: 'rebate',
		}, {
			name: '域名检测',
			path: 'domaininspect',
		}, {
			name: '活动大厅',
			path: 'activitylobby',
		}, {
			name: '全民推广',
			path: 'recommendedbonus',
		}, ]
	}, {
		name: '分析',
		path: 'analyze',
		children: [{
			name: '代理新进',
			path: 'analyze',
		}, {
			name: '推广链接新进',
			path: 'analyzelink',
		}]
	}, {
		name: '统计',
		path: 'statistics',
		children: [{
			name: '投注记录',
			path: 'init',
		}, {
			name: '资金记录',
			path: 'fundslog',
		}, {
			name: '转账记录',
			path: 'apitrans',
		}, {
			name: '返水统计',
			path: 'rakebackindex',
		}, {
			name: '日志查询',
			path: 'loglist',
		}, {
			name: '资金查询',
			path: 'search',
		}]
	}, {
		name: '内容',
		path: 'content',
		children: [{
			name: '公告栏管理',
			path: 'cttannouncement',
		}, {
			name: '信息群发',
			path: 'choosetype',
		}, {
			name: '广告群发',
			path: 'viewmsitedialog',
		}, {
			name: '浮动图管理',
			path: 'cttfloatpic',
		}, {
			name: '文案管理',
			path: 'vcttdocument',
		}, {
			name: 'LOGO管理',
			path: 'cttlogo',
		}, {
			name: '推广素材',
			path: 'cttmaterialtext',
		}]
	}, {
		name: '系统',
		path: 'system',
		children: [{
			name: '消息公告',
			path: 'vcreditrecordmessage',
		}, {
			name: '站点参数',
			path: 'vcreditrecordsiteparam',
		}, {
			name: '注册设置',
			path: 'vcreditrecordgetfieldsort',
		}, {
			name: '信息模版',
			path: 'vcreditrecordnoticetmpl',
		}, {
			name: '充值记录',
			path: 'vcreditrecord',
		}, {
			name: '额度充值',
			path: 'pay',
		}]
	}].map(v => {
		const {
			path,
			children
		} = v;
		if (children) {
			for (const sub of children) {
				sub.path = `/${ path }/${ sub.path }/`;
			}
		}

		return v;
	});
})();

export default menus;