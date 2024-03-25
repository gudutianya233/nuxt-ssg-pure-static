<template>
    <div>
        <div class="logo">
            <div class="logos"><img src="/img/logo.jpg" /></div>
        </div>
        <div class="navigation">
            <el-menu class="navigation" mode="horizontal" 
            active-text-color="#fff" text-color="#fff" 
            background-color="#d16453"
            style="display: flex; justify-content: space-around;">
                <el-menu-item index="1"><nuxt-link to="/">医院介绍</nuxt-link></el-menu-item>
                <el-menu-item index="2"><nuxt-link to="/hospital_introduce">医院首页</nuxt-link></el-menu-item>
                <el-menu-item index="3"><nuxt-link to="/enter_hospital">走进铭博</nuxt-link></el-menu-item>
                <el-menu-item index="4"><nuxt-link to="/doctor_team">专家团队</nuxt-link></el-menu-item>
                <!-- <el-menu-item index="5"><nuxt-link to="/">疾病知识</nuxt-link></el-menu-item> -->
                <el-menu-item index="5" @click="disease">疾病知识</el-menu-item>
                <el-menu-item index="6"><nuxt-link to="/hospital_route">来院路线</nuxt-link></el-menu-item>
                </el-menu>
        </div>
    </div>
</template>

<script setup lang="ts">
const disease=()=>{
    window.location.href ='http://dvt.zoosnet.net/LR/Chatpre.aspx?id=DVT34093088&lng=cn' 
}
</script>

<style lang="less" scoped>
.el-menu-item a {
    text-decoration: none;
}
.logo {
    width: 100%;
    height: 100px;
    background-image: url('/img/logo_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    .logos {
        margin: auto;
        width: 60%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
.el-menu-item{
    font-size: 1.5rem;
}
.navigation {
    background-color:#721b0e;
}



:deep(.el-sub-menu__icon-arrow) {
    display: none;
}
:deep(.el-menu--horizontal>.el-menu-item) ,:deep(.el-menu--horizontal>.el-sub-menu .el-sub-menu__title){
    border: none;
}

</style>
