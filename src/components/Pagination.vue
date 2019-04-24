<template>
	<el-pagination
		@size-change="handleSizeChange"
		@current-change="handleCurrentChange"
		:current-page="currentPage"
		:page-sizes="pages"
		:page-size="20"
		layout="total, sizes, prev, pager, next, jumper"
		:total="400">
	</el-pagination>
</template>

<script>
	import { get } from "@/core";
	import { pagination } from '@/config/global'
	// import { mapGetters } from 'vuex'

	export default {
		name: 'Pagination2',
		props: {
			url: {
				type: String,
				value: '',
			},
			currentPage: {
				type: Number,
				value: 1,
			}
		},
		data(){
			return {
				// currentPage: 4,
			};
		},
		computed: {
			pageSize(){
				return pagination.fields.pageSize;
			},
			pageNum(){
				return pagination.fields.pageNum;
			},
			countField(){
				return pagination.fields.count;
			},
			resultsFields(){
				return pagination.fields.results;
			},
			pages(){
				return pagination.pagesOptions;
			}
		},
		methods: {
			handleSizeChange(size){
				this.getList();
			},
			handleCurrentChange(page){
				this.getList();
			},
			async getList(){
				const {
					field_pageSize,
					field_pageNum,
					field_count,
					field_results,
				} = pagination;

				const data = await get(this.url, {
					[field_pageSize]: 1,
					[field_pageNum]: 1,
				});

				this.$logger.log(data);
			},
		}
	}
</script>

<style lang="scss" scoped>

</style>
