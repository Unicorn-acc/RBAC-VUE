<template>
    <div>
        <el-row style="height: 10px;">
        </el-row>

        <el-table
            :data="tableData"
            style="width: 100%; margin-bottom: 20px;"
            row-key="id"
            border
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
            <el-table-column prop="urlName" label="菜单名称" width="240"></el-table-column>
            <el-table-column prop="url" label="路由地址"  width="420"></el-table-column>
            <el-table-column prop="type" label="类型" width="100">
                <template slot-scope="scope" >
                    <el-tag v-if="scope.row.type == 0">目录</el-tag>
                    <el-tag v-if="scope.row.type == 1" type="success">菜单</el-tag>
                    <el-tag v-if="scope.row.type == 2" type="warning">按钮</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="orderNum" label="排序"  width="80"></el-table-column>
        </el-table>



    </div>
    
</template>

<script>
export default {
    data(){
        return {
            tableData: [],
            data: [{
                label: '用户管理',
                children: [{
                    label: '二级 1-1',
                    children: [{
                    label: '三级 1-1-1'
                    }]
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'urlName'
            },
        };
    },
    methods: {
        getMenuList(){
            this.http
                .request({
                    url: "menu/tree",
                    method:"GET",
                }).then(({ data }) => {
                    this.tableData = data.data
                })
        },
    },
    mounted(){
        this.getMenuList();
    },
};
</script>

<style>
</style>

