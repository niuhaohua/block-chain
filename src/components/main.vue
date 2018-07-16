
<template>

  <div class="hello">
      <el-container>
  <el-header  class="header">区块信息浏览</el-header>
  <el-main class="main">
    <el-dialog title="交易详情" :visible.sync="dialogTableVisible">

    <el-table :data="info" :show-header="false">
      <el-table-column  width="120">
        <template scope="scope">
            <span>
                交易ID
            </span>
        </template>
      </el-table-column>
      <el-table-column property="tx_id">
        <template scope="scope">
            <span style="color:#67C23A">
                {{scope.row.tx_id}}
            </span>
        </template>
      </el-table-column>
    </el-table>

    <el-table :data="info" :show-header="false">
      <el-table-column width="120">
        <template scope="scope">
            <span>
                通道ID
            </span>
        </template>
      </el-table-column>
      <el-table-column property="channel_id">
        <template scope="scope">
            <span style="color:#67C23A">
                {{scope.row.channel_id}}
            </span>
        </template>
      </el-table-column>
    </el-table>

    <el-table :data="info" :show-header="false">
      <el-table-column width="120">
        <template scope="scope">
            <span>
                合约ID
            </span>
        </template>
      </el-table-column>
      <el-table-column property="chaincode_id">
        <template scope="scope">
            <span style="color:#67C23A">
                {{scope.row.chaincode_id}}
            </span>
        </template>
      </el-table-column>
    </el-table>

    <el-table :data="info" :show-header="false">
      <el-table-column width="120">
        <template scope="scope">
            <span>
                时间戳
            </span>
        </template>
      </el-table-column>
      <el-table-column property="timestamp">
        <template scope="scope">
            <span style="color:#67C23A">
                {{scope.row.timestamp}}
            </span>
        </template>
      </el-table-column>
    </el-table>

    <el-table :data="info" :show-header="false">
      <el-table-column width="120">
        <template scope="scope">
            <span>
                所属ORG
            </span>
        </template>
      </el-table-column>
      <el-table-column property="creator_msp_id">
        <template scope="scope">
            <span style="color:#67C23A">
                {{scope.row.creator_msp_id}}
            </span>
        </template>
      </el-table-column>
    </el-table>

  <el-table :data="info" :show-header="false">
      <el-table-column width="120">
        <template scope="scope">
            <span>
                背书策略
            </span>
        </template>
      </el-table-column>
      <el-table-column property="endorsements">
        <template scope="scope">
            <span style="color:#67C23A">
                {{scope.row.endorsements}}
            </span>
        </template>
      </el-table-column>
    </el-table>

    <el-table :data="info" :show-header="false">
      <el-table-column width="120">
        <template scope="scope">
            <span>
                读写集
            </span>
        </template>
      </el-table-column>
      <el-table-column property="write_set">
        <template scope="scope">
            <span style="color:#67C23A">
                {{scope.row.write_set}}
            </span>
        </template>
      </el-table-column>
    </el-table>

    <el-table :data="info" :show-header="false">
      <el-table-column width="120">
        <template scope="scope">
            <span>
                交易参数
            </span>
        </template>
      </el-table-column>
      <el-table-column property="params">
        <template scope="scope">
            <span style="color:#67C23A">
                {{scope.row.params}}
            </span>
        </template>
      </el-table-column>
    </el-table>
  
</el-dialog>
    <div class="content">
      <div class="block_info">
        <div class="check_box">
          <el-form :inline="true" :model="inputData" class="demo-form-inline" size="small">
            <el-form-item>
              <el-input class="chaxun" v-model="inputData.id" placeholder="输入区块ID"></el-input>
            </el-form-item>
            <el-form-item>
               <router-link class="router-link" :to="{name:'BlockDetail',params:inputData}">
              <el-button type="primary">查询</el-button>
              </router-link>
            </el-form-item>
          </el-form>
        </div>
        <div class="blocks_box">
          <div ref="blocks_content" class="blocks_content" id="blocks_content" v-bind:style="{ marginLeft: marginLeft + 'px' }">
             <transition  v-for="item in blocks" name="slide-fade">
                <span v-if="item.show" class="block_item" >
                  <router-link  class="router-link" :to="{name:'BlockDetail',params:item}">
                  {{item.id}}
                  </router-link>
                  </span>
            </transition>
          </div>
        </div>
        
      </div>
      <div class="row">
        <div class="node_info border_box">
            <div class="info_title">
            节点信息
            </div>
                <div>
                <el-table border :data="tableNode" :row-class-name="tableRowClassName">
                  <el-table-column prop="name" label="节点名称"></el-table-column>
                  <el-table-column prop="orgId" label="所属ORG"></el-table-column>
                   <el-table-column prop="url" label="地址"></el-table-column>
                  <el-table-column prop="eventUrl" label="event地址"></el-table-column>
                </el-table>
              </div>
        </div>
        </div>
        <div class="row">
        <div class="transaction_info border_box">
          <div class="info_title">
            交易信息
            </div>
              <div>
                <el-table border :data="tableTrans" :row-class-name="tableRowClassName">
                  <el-table-column prop="tx_id" label="交易ID" >
                    <template scope="scope">
                      <a href="javascript:;" size="small"  @click="aaa(scope)" style="color:#409EFF">
                      {{scope.row.tx_id}}
                      </a>
                     
                    </template>
                  </el-table-column>
                  <el-table-column prop="channel_id" label="通道ID" width="170"></el-table-column>
                  <el-table-column prop="chaincode_id" label="合约ID" width="170"></el-table-column>
                  <el-table-column prop="timestamp" label="timestamp" width="170"></el-table-column>
                </el-table>
              </div>
        </div>
      </div>
    </div>
    <div> </div>
  </el-main>
</el-container>
</div>
</template>

<script>
import store from '../vuex'
import { blockList } from '../vuex'
export default {
  name: "Main",
  data: () => ({
    show: false,
    inputData:{
      id:''
    },
    tableTrans: [],
    tableNode: [],
    blocks: [],
    marginLeft:0,
    dialogTableVisible:false,
    info:[]
  }),
  props: {
    msg: String
  },
  methods: {
    headerCellStyle:function(){
      return 'height:0;padding:0;margin:0;border:0;'
    },
    tableRowClassName: function(row) {
      if (row.rowIndex % 2 == 1) {
        return "warning-row"
      } else {
        return "success-row"
      }
    },
    aaa: function(scope){
      let that = this
      let trans_id = scope.row.tx_id
      this.$socket.emit('queryTrans', trans_id)
      this.$socket.on('transInfo', function (info, type) {
        that.info[0] = JSON.parse(info) 
        console.log(that.info)
        that.dialogTableVisible = true
      })
      
    },
    //获取区块高度
    getBlockHeight: function() {
      let that = this
      that.blocks = store.state.blockList
      this.$socket.on("blockHeight", function(val, type) {
        let obj = { id: val, show: false }
        store.state.blockList.push(obj)
        that.blocks = store.state.blockList
        let left = that.$refs.blocks_content.style.marginLeft.split('px')[0]
        if (( parseInt(left) + that.marginLeft) >= 930) {
          that.marginLeft = that.marginLeft - 400
        }
        let showFlag = setTimeout(() => {
          obj.show = true
          clearInterval(showFlag)
        }, 100)
      })
      
    },
    getTransInfoAll: function() {
      let that = this
      this.tableTrans = store.state.tableTrans
      this.$socket.on("transInfoAll", function(val, type) {
        store.state.tableTrans = JSON.parse(val).reverse()
        that.tableTrans = store.state.tableTrans
      })
    },
    getNodeInfo: function() {
      let that = this
      this.tableNode = store.state.tableNode
      this.$socket.emit("getPeer")
      this.$socket.on("peers", function(val, type) {
        store.state.tableNode = JSON.parse(val)
        this.tableNode = store.state.tableNode
      })
    }
    
  },
  activated(){
  this.getBlockHeight()
    this.getNodeInfo()
    this.getTransInfoAll()
  },
  mounted() {
    if(localStorage.getItem('path') !== 'main' && localStorage.getItem('path') && store.state.blockList.length <= 0){
      localStorage.setItem('path','main')
      location.reload()
    }else{
      localStorage.setItem('path','main')
    this.getBlockHeight()
    this.getNodeInfo()
    this.getTransInfoAll()
    }
    
  }
}
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
  /* padding: 0 50px; */
  overflow: hidden;
  padding-bottom: 50px
}
.header {
  background: #409EFF;
  font-size: 22px;
  color: #fff;
  font-weight: 700;
  line-height: 60px;
}
.content {
  width: 1100px;
  height: 100%;
  margin: 0 auto;
}
.check_box {
  padding: 20px;
}
.chaxun {
  width: 500px;
}
.blocks_box{
  width: 100%;
  /* overflow: hidden; */
}
.blocks_content{
  width: max-content;
  transition: margin-left 1s;
}
.row {
  height: auto;
  max-height: 639px;
  padding-top: 50px;
  overflow: hidden;
}
.border_box {
  border: 1px solid #ebeef5;
  border-radius: 8px;
}
.info_title {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ebeef5;
}
.block_item{
  display: inline-block;
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #409EFF;
  margin-right: 20px;
  color:#303133;
}

</style>
