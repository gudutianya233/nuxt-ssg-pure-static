<template>
    <div>
        <Head>
      <Title>重庆铭博医院专家-重庆老中医-重庆中医肿瘤专家</Title>
      <Meta name="keywords" content="重庆中医院，重庆名老中医，重庆铭博医院，重庆名老中医" />
      <Meta name="description" content="重庆铭博医院汇聚蔡东辉，操良玉，徐有强，於广武，杨志平，匡建华等国内名老中医常年坐诊，整理历代中医名方，并结合临床实践，在肿瘤，常见病、高发疾病、慢性病和复杂并发症的治疗领域，取得了重大突破。" />
      </Head>
    </div>
    <div>
        <div class="doctor_team_bg">
            <img src="/img/doctor_team_bg.png" alt="">
        </div>
        <div class="doctor_team_img">
            <img src="/img/doctor_team_img.png" />
        </div>
        <div class="doctor_list">
            <div style="width: 28%;margin-right:5%;height: 800px;" v-for="item in doctor_list">
                <div class="doctor" @click="docotr_detail(item.id)">
                    <div class="doctor_img">
                        <img :src="item.head_picture" alt="">
                    </div>
                    <div class="doctor_information">
                        <div class="doctor_information_title">
                            <div>{{ item.name }}</div>
                            <div>{{ item.title }}</div>
                        </div>
                        <div class="doctor_information_body">
                            <img :src="item.achieve_url" />
                        </div>
                    </div>
                </div>
                <div class="doctor_footer">
                    <div class="doctor_footer_more" @click="docotr_detail(item.id)">了解更多</div>
                    <div class="doctor_footer_reservation" @click="docotr_reservation()">预约专家</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Doctor } from '~/entities/doctor'
import { useRouter } from 'vue-router'
const { public: { baseURL } } = useRuntimeConfig()
const router = useRouter()
const doctor_list: Ref<Doctor[]> = ref([])
const { data: data1 } = await useAsyncData(
    () => $fetch(`${baseURL}/doctor/getDoctorInformation`)
)
onMounted(() => {
    const res1 = JSON.stringify(data1.value)
    doctor_list.value = JSON.parse(res1).data
    console.log(doctor_list.value)
})
const docotr_reservation=()=>[
window.location.href ='http://dvt.zoosnet.net/LR/Chatpre.aspx?id=DVT34093088&lng=cn' 
]
const docotr_detail=(id:number)=>{
    router.push({ path: `/article/doctor_detail/${id}`})
}
</script>
<style lang="less" scoped>
.doctor_team_bg {
    height: 500px;
    width: 100%;

    img {
        height: 100%;
        width: 100%;
    }
}

.doctor_team_img {
    text-align: center;
    margin-top: 2rem;
}

.doctor_list {
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: auto;
    padding-bottom: 2rem;

    .doctor {
        width: 100%;
        height:90%;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
        background-image: url("/img/doctor_bg.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        cursor: pointer;
        margin-bottom: 1rem;
        .doctor_img {
            height:69%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                height: 95%;
                width: 95%;
            }
        }

        .doctor_information {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 29%;
            width: 94%;
            margin-left: 3%;
            background-color: #721B0E;
            color: white;

            .doctor_information_title {
                height: 30%;
                width: 80%;
                display: flex;
                align-items: center;
                font-size: 1.3rem;
                justify-content: space-between;
                margin-bottom: 0.5rem;
                margin-top: 0.5rem;
            }

            .doctor_information_body {
                height: 70%;
                width: 100%;
                text-align: left;
                font-size: 1.1rem;
                img{
                    height: 100%;
                    width: 100%;
                }

            }
        }

    }
}

.doctor_footer{
        width: 80%;
        margin: auto;
        height:6%;
        display: flex;
        justify-content: space-between;
        .doctor_footer_more,
        .doctor_footer_reservation {
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            background-image: url("/img/doctor_footer1.png");
            background-size: 100% 100%;
             background-repeat: no-repeat;      
        }
        .doctor_footer_more:hover,.doctor_footer_reservation:hover{
            background-image: url("/img/doctor_footer2.png");
            background-size: 100% 100%;
             background-repeat: no-repeat; 
            color: white;
        }
        
}
</style>