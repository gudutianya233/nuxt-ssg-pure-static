<template>
    <div>
        <div class="article_ask">
            <div class="call_phone" @click="call_phone">
                <img src="/img/call_phone.png" />
                免费拨打
            </div>
            <div class="network_registration" @click="network_registration">
                <img src="/img/network_registration.png" />
                网络挂号</div>
            <div class="ask_online" @click="ask_online">
                <img src="/img/ask_online.png" />
                在线咨询</div>
        </div>
    </div>
</template>

<script setup lang="ts">
const call_phone = () => {
    window.location.href = 'tel://023-86868333';
}
const network_registration = () => {
    window.location.href ='http://dvt.zoosnet.net/LR/Chatpre.aspx?id=DVT34093088&lng=cn' 
}
const ask_online = () => {
    window.location.href ='http://dvt.zoosnet.net/LR/Chatpre.aspx?id=DVT34093088&lng=cn' 
}
</script>

<style lang="less" scoped>
.article_ask {
    width: 70%;
    margin: auto;
    display: flex;
    font-size: 1.2rem;
    height: 45px;
    line-height: 45px;
    margin-bottom: 2rem;
    img {
        height: 24px;
        width: 20px;
        margin-right: 0.5rem;
    }

    .call_phone,
    .network_registration,
    .ask_online {
        width: 18%;
        margin-right: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 10px;
        cursor: pointer;
    }

    .call_phone {
        background-color: #FFAB19;
    }

    .network_registration {
        background-color: #721B0E;
    }

    .ask_online {
        background-color: #A9907A;
    }

}</style>