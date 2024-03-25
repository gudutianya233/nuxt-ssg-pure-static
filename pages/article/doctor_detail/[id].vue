<template>
<div style="background-color: white;">
    <div class="doctor_detail_bg">
        <img src="/img/doctor_detail_bg.png" alt="">
    </div>
    <div class="doctor" v-if="doctor">
        <div class="doctors">
            <div class="doctors_img">
                <img :src="doctor.head_picture" />
            </div>
            <div class="doctors_information">
                <div class="doctors_information_name">
                    {{ doctor.name }}—{{ doctor.title }}
                </div>
                <div class="doctors_information_registration_cost">
                    现价挂号费：{{ doctor.registration_cost }}元
                </div>
                <div class="doctors_information_overview_content">
                    {{ doctor.overview_content }}
                </div>
                <div class="doctors_information_overview_content">
                    <img :src="doctor.achieve_url" />
                </div>
            
            </div>
        </div>
    </div>
    <div class="proficient">
        专家擅长|PROJECTS
    </div>
    <div class="proficient_text">
        {{ doctor?.proficient }}
    </div>
</div>
</template>

<script setup lang="ts">
import type { Doctor } from '~/entities/doctor';


const route = useRoute()
const hospitalId = route.params.id
const doctor: Ref<Doctor | null> = ref(null);

const { public: { baseURL } } = useRuntimeConfig()
const { data } = await useAsyncData(
() => $fetch(`${baseURL}/doctor/getDoctorDetail`, { params: { id: hospitalId } })
)
onMounted(() => {
const res = JSON.stringify(data.value)
doctor.value = JSON.parse(res).data[0]

})
useHead(()=>{
    const res=JSON.stringify(data.value)
    return {
        title: JSON.parse(res).data[0].name+'—重庆铭博医院',
        meta: [
            {
                name: 'keywords',
                content: '重庆中医院，重庆名老中医，重庆铭博医院，重庆名老中医',
            },
            {
                name: 'description',
                content: '重庆铭博医院汇聚蔡东辉，操良玉，徐有强，於广武，杨志平，匡建华等国内名老中医常年坐诊，整理历代中医名方，并结合临床实践，在肿瘤，常见病、高发疾病、慢性病和复杂并发症的治疗领域，取得了重大突破。',
            },
        ],
    }
})
</script>

<style lang="less" scoped>
.doctor_detail_bg {
height: 500px;
width: 100%;

img {
    height: 100%;
    width: 100%;
}

margin-bottom: 2rem;
}

.doctor {
width: 70%;
margin: auto;
padding-bottom: 2rem;

.doctors {
    width: 100%;
    display: flex;

    .doctors_img {
        height: 100%;
        width: 40%;

        img {
            height: 100%;
            width: 100%;
            border-radius: 2rem;
        }
    }

    .doctors_information {
        width: 50%;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        text-align: left;

        .doctors_information_name {
            font-size: 3rem;
            color: #721B0E;
            margin-bottom: 1rem;
        }

        .doctors_information_registration_cost {
            font-size: 2rem;
            color: black;
            font-weight: bold;
            margin-bottom: 1rem;
        }

        .doctors_information_overview_content {
            font-size: 1.5rem;
            color: black;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            padding: 0.5rem;
            img{
                height: 100%;
                width: 100%;
            }
        }

    }
}
}

.proficient {
width: 70%;
margin: auto;
font-size: 3rem;
color: #721B0E;
margin-bottom: 2rem;
}
.proficient_text{
width: 70%;
margin: auto;
font-size: 1.5rem;
text-align: left;
margin-bottom: 2rem;
}
</style>