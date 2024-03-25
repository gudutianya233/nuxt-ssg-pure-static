<template>
    <div class="sidebar">
      <div class="sidebars">
        <div class="sidebars_item1" >
            <div   v-show="!isHovering1" @mouseover="isHovering1 = true" @mouseleave="isHovering1 = false">
                <img src="/img/sidebar1.png"/>
            </div>
            <div  v-show="isHovering1"  @mouseover="isHovering1 = true" @mouseleave="isHovering1 = false" class="sidebars_item1_text" @click="sidebars_item1">
                预约挂号
            </div>
        </div>
        <div class="sidebars_item2">
            <div   v-show="!isHovering2" @mouseover="isHovering2 = true" @mouseleave="isHovering2 = false">
                <img src="/img/sidebar2.png"/>
            </div>
            <div   v-show="isHovering2" @mouseover="isHovering2 = true" @mouseleave="isHovering2 = false" class="sidebars_item2_text" @click="sidebars_item2">
                电话咨询
            </div>
        </div>
        <div class="sidebars_item3"  @mouseover="isHovering3 = true" @mouseleave="isHovering3 = false">
            <img v-show="!isHovering3" src="/img/sidebar3_1.png"/>
            <img v-show="isHovering3" src="/img/sidebar3_2.png"/>
        </div>
        <div class="wx_code"  v-show="isHovering3"  @mouseover="isHovering3 = true" @mouseleave="isHovering3 = false"  >
        <img src="/img/wx_code.png"/>
      </div>
        <div class="sidebars_item4" @click="sidebars_item1">
            <img src="/img/sidebar4.png"/>
        </div>
        <el-backtop class="backtop" />
      </div>
    </div>
</template>

<script setup lang="ts">
    const isHovering1=ref(false)
    const isHovering2=ref(false)
    const isHovering3=ref(false)
    const sidebars_item1=()=>{
        window.location.href ='http://dvt.zoosnet.net/LR/Chatpre.aspx?id=DVT34093088&lng=cn' 
    }
    const sidebars_item2=()=>{
        window.location.href = 'tel://023-86868333';
    }
</script>

<style lang="less" scoped>
.sidebar{
    position: fixed;
    bottom:20rem;
    right: 2rem;
    z-index: 999;
    .sidebars{
        display: flex;
        flex-direction: column;
        .sidebars_item1,
        .sidebars_item2,
        .sidebars_item3,
        .sidebars_item4{
            height: 50px;
            width: 50px;
            background-color: #EFEFEF;
            margin-top: 0.8rem;
            border-radius: 0.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .sidebars_item1_text,.sidebars_item2_text{
            display: flex;
            justify-content: center;
            text-align: center  ;
            font-size: 1.1rem;
            color: #EFEFEF;
            background-color: #721B0E;
            cursor: pointer;
        }
        .sidebars_item3:hover{
            background-color: #721B0E;
            cursor: pointer;
        }
        .sidebars_item4{
            cursor: pointer;
        }
    }
}
.wx_code{
    position: fixed;
    bottom: 22rem;
    right: 6rem;
    z-index: 999;
}
:deep(.el-backtop){
        bottom:16rem !important;
        right: 2rem !important;
        z-index: 999;
        color: #721B0E;
        }
</style>
