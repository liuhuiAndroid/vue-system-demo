<template>
  <div>
    <el-form ref="postForm" :model="postForm">
      <sticky :class-name="'sub-navbar ' + postForm.status">
        <el-button v-if="!isEdit" @click="showGuide">显示帮助</el-button>
        <el-button v-loading="loading" type="success" @click="submitForm" style="margin-left: 10px">{{ isEdit ? '编辑电子书' : '新增电子书' }}</el-button>
      </sticky>
      <div class="detail-container">
        <el-row>
          <Warning></Warning>
          <el-col :span="24">
            <ebook-upload/>
          </el-col>
          <el-col :span="24"/>
        </el-row>
      </div>
    </el-form>
  </div>
</template>

<script>
import Sticky from "../../../components/Sticky/index";
import Warning from "./Warning";
import EbookUpload from "../../../components/EbookUpload";
export default {
    name: "Detail",
    components: {Warning, Sticky, EbookUpload},
    props: {
        isEdit: Boolean
    },
    data(){
        return {
            loading : false,
            postForm: {
                status: ''
            }
        }
    },
    methods:{
        showGuide(){
            console.log('show guide...')
        },
        submitForm(){
          this.loading = true
            setTimeout(()=>{
                this.loading = false
            },1000)
        }
    }
}
</script>

<style scoped>
  .detail-container{
    padding: 40px 50px 20px;
  }
</style>
