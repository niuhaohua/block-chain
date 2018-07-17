<template>
  <div class="hello">
      <el-container>
  <el-header  class="header">detail</el-header>
  <el-main class="main">
    <div class="content">
      <div class="row">
        <div class="transaction_info border_box">
          <div class="info_title">
            区块详情
            </div>
              <div>
                <el-table :data="tableData2" :row-class-name="tableRowClassName" border>
                  <el-table-column prop="block_id" label="区块ID"></el-table-column>
                  <el-table-column prop="data_count" label="交易数量" width="125"></el-table-column>
                  <el-table-column prop="txs" label="所有交易id数组"></el-table-column>
                  <el-table-column prop="previous_hash" label="父区块哈希"></el-table-column>
                  <el-table-column prop="data_hash" label="数据哈希"></el-table-column>
                </el-table>
              </div>
        </div>
      </div>
    </div>
      
  </el-main>
</el-container>
  </div>
</template>

<script>
import { Loading } from 'element-ui';
import store from '../vuex'
export default {
  name: "BlockDetail",
  data: () => ({
    show: true,
    formInline: {
      user: "",
      region: ""
    },
    tableData2: [],
    tableNode:[]
  }),
  props: {
    msg: String
  },
  methods: {
    tableRowClassName: function(row) {
      if (row.rowIndex % 2 == 1) {
        return "warning-row";
      } else {
        return "success-row";
      }
    },
    getBlockInfo:function(){
      let loadingInstance = Loading.service()
      let blockNum
      let that = this
      if(this.$route.params.id){
        localStorage.setItem('blockNum',this.$route.params.id+'')
        blockNum = this.$route.params.id
      }else{
        blockNum = localStorage.getItem('blockNum')
      }
      this.$socket.emit('queryBlock', blockNum)
      this.$socket.on("blockInfo", function(val, type) {
        loadingInstance.close()
        console.log(val,type)
        if(type === 'ok')
        that.tableData2 = val
      });
    } 
  },
  created() {
 
  },
  mounted() {
    
    localStorage.setItem('path','blockDetail')
    this.getBlockInfo()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
  height: 100%;
}
.el-container .is-vertical {
  height: 100%;
  width: 100%;
  display: block;
}
.main {
  width: 100%;
  padding: 0 50px;
  overflow: hidden;
}
.header {
  background: #409eff;
  font-size: 22px;
  color: #fff;
  font-weight: 700;
  line-height: 60px;
}
.content {
  width: 1300px;
  height: 100%;
  margin: 0 auto
}
.check_box {
  padding: 20px;
}
.chaxun {
  width: 500px;
}
.row {
  /* display: flex; */
  height: 639px;
  padding-top: 50px;
}
.border_box {
  border: 1px solid #ebeef5;
  border-radius: 8px;
}
.info_title{
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ebeef5;
}


</style>
