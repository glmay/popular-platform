<template>
	<section class="pay-account-wrapper">
		<!-- 顶部操作区 -->
		<el-row>
			<el-col :span="16">
				<el-button type="primary" icon="el-icon-plus">新增</el-button>
				<el-button icon="el-icon-plus">刷新2</el-button>
				<el-button icon="el-icon-plus">隐藏设置</el-button>
				<el-button icon="el-icon-plus">公告</el-button>
				<el-button icon="el-icon-plus">充值中心</el-button>
				<el-button icon="el-icon-plus">金流顺序22</el-button>
			</el-col>
			<el-col :span="8" class="button-group-right">
				<el-input placeholder="请输入内容" v-model="query" class="input-with-select">
					<el-select v-model="field" slot="prepend" placeholder="请选择">
						<el-option label="代号" value="code"></el-option>
						<el-option label="账户名称" value="account_name"></el-option>
						<el-option label="姓名" value="name"></el-option>
						<el-option label="账号" value="card_number"></el-option>
					</el-select>
				</el-input>
				<el-button type="primary" icon="el-icon-search">搜索</el-button>
			</el-col>
		</el-row>

		<el-table ref="filterTable" :data="list" style="width: 100%">
			<!-- 复选框 -->
			<el-table-column type="selection"></el-table-column>
			<!-- 序号 -->
			<el-table-column type="index" :index="startNo" label="序号"></el-table-column>
			<el-table-column 
				prop="date"
				label="日期"
				sortable
				width="180"
				column-key="date"
				:filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
				:filter-method="filterHandler">
    		</el-table-column>
			<el-table-column
				prop="name"
				label="姓名"
				width="180">
			</el-table-column>
			<el-table-column
				prop="address"
				label="地址"
				:formatter="formatter">
			</el-table-column>
			<el-table-column
				prop="tag"
				label="标签"
				width="100"
				:filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
				:filter-method="filterTag"
				filter-placement="bottom-end">
				<template slot-scope="scope">
					<el-tag
						:type="scope.row.tag === '家' ? 'primary' : 'success'"
						disable-transitions>{{scope.row.tag}}</el-tag>
				</template>
			</el-table-column>
		</el-table>
		<Pagination url="operation.payaccount"></Pagination>
	</section>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getList } from '@/services/operation'

	import Pagination from '@/components/Pagination'

export default {
	name: 'pay-account',
	data(){
		return {
			query: '',
			field: 'code',
			startNo: 1,
			list: [{
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄',
				tag: '家'
				}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1517 弄',
				tag: '公司'
				}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1519 弄',
				tag: '家'
				}, {
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1516 弄',
				tag: '公司'
			}],
			currentPage4: 4,
		};
	},
	methods:{
		resetDateFilter() {
			this.$refs.filterTable.clearFilter('date');
		},
		clearFilter() {
			this.$refs.filterTable.clearFilter();
		},
		formatter(row, column) {
			return row.address;
		},
		filterTag(value, row) {
			return row.tag === value;
		},
		filterHandler(value, row, column) {
			const property = column['property'];
			return row[property] === value;
		},

		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
		},
	},
	async created(){
		// this.$logger.log(JSON.stringify(this.$data));
		// console.log('akdlafjl');
		const list = await getList();
		this.$logger.log(list);
	},
	async beforeCreate(){
		// this.$logger.log(JSON.stringify(this.$data));
		// const list = await getList();

		// console.log(list, JSON.stringify(this.$data));
	},
	computed: {
		...mapGetters(['pagination'])
	},
	components: {
		Pagination,
	}
}
</script>


<style lang="scss">
	.pay-account-wrapper{
		.el-select .el-input {
			width: 120px;
		}

		.button-group-right{
			display: flex;
		}
	}
	
</style>
