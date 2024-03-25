<template>
        <div>
       <Head>
      <Title>重庆铭博医院-重庆中医肿瘤医院-重庆老中医</Title>
      <Meta name="keywords" content="重庆铭博医院,重庆中医肿瘤医院,重庆肿瘤医院，重庆中医院" />
      <Meta name="description" content="重庆铭博医院始终坚持发展中医中药、传统医疗项目为特色，以中医科、肿瘤科，中西医结合科为主，采用“扶正固本”的诊疗方法，汇集国内资深老中医，通过传承名老中医学术思想和临床经验，为患者提供切实有效的中医诊疗服务。" />
      </Head>
    </div>
    <div>
        <div class="div_swiper">
            <!-- <swiper  :modules="modules" :loop="true" :pagination="{ clickable: true, dynamicBullets: true }"
                :autoplay="{ delay: 1700, disableOnInteraction: true }">
                <swiper-slide  v-for="item in swiperImages" :key="item.id">
                    <img :src="item.url" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper> -->
            <swiper :modules="modules" :loop="true" :pagination="{ clickable: true, dynamicBullets: true }">
                <swiper-slide  >
                    <img src="/img/bann2.jpg" />
                </swiper-slide>
            </swiper>
        </div>
        <div class="hospital_introduce_video">
            <div class="hospital_introduce_video_title">
                <img src="/img/hospital_introduce_video.png" />
            </div>
            <div class="hospital_introduce_video_body">
                <div class="hospital_introduce_video_bodys">
                    <video src="/video/hospital_introduce.mp4"  controls autoplay="true" loop="true"></video>
                </div>
                <div class="hospital_introduce_report_body">
                    <img src="/img/media_coverage.png" @click="media_coverage" />
                    <img src="/img/welfare_activities.png"  @click="welfare_activities" />
                </div>
            </div>
        </div>
        <div class="information">
            <img src="/img/information.png" />
            <p>见证传承与创新，展示中医药品牌力量</p>
        </div>
        <div class="information_list">
            <img src="/img/information_list1.png" @click="ask"/>
            <img src="/img/information_list2.png" @click="ask"/>
            <img src="/img/information_list3.png" @click="ask"/>
        </div>
        <div class="information">
            <img src="/img/hosptial.png" />
            <p>传承创新，中西并重;汇聚各派医生，普济重庆百姓</p>
        </div>
        <div class="hosptial">
            <swiper v-if="hosptial_show" :modules="modules" :loop="true" :pagination="{ clickable: true, dynamicBullets: true }"
                :autoplay="{ delay: 2000, disableOnInteraction: false }">
                <swiper-slide v-for="item in hosptial_show" :key="item.id">
                    <div class="hosptial_show">
                        <img :src="item.url" />
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper> 
        </div>
        <div class="information">
            <img src="/img/special.png" />
            <p>传承精华，守正创新；踔厉奋发，勇毅前行</p>
        </div>
        <div class="special_list">
            <div class="special_lists"><img  src="/img/special_list1.jpg" /></div>
            <div class="special_lists"><img  src="/img/special_list2.jpg" /></div>
            <div class="special_lists"><img  src="/img/special_list3.jpg" /></div>
            <div class="special_lists"><img  src="/img/special_list4.jpg" /></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { useRouter } from 'vue-router'
import 'swiper/swiper-bundle.css'
import 'swiper/css/pagination'
const router = useRouter()
// import { getReleaseSwiper } from '~/request';
// import type{ Swipers } from '~/entities/swiper';
const modules = [Pagination, Autoplay]
const hosptial_show = [
    { id: 1, url: '/img/yyhj1.jpg' },
    { id: 2, url: '/img/yyhj2.jpg' },
    { id: 3, url: '/img/yyhj3.jpg' },
    { id: 4, url: '/img/yyhj4.jpg' },
    { id: 5, url: '/img/yyhj5.jpg' },
    { id: 6, url: '/img/yyhj6.jpg' },
    { id: 7, url: '/img/yyhj7.jpg' },
    { id: 8, url: '/img/yyhj8.jpg' },
    { id: 9, url: '/img/yyhj9.jpg' },
    { id: 10, url: '/img/yyhj10.jpg' },
    { id: 11, url: '/img/yyhj11.jpg' },
    { id: 12, url: '/img/yyhj12.jpg' },
    { id: 13, url: '/img/yyhj13.jpg' },
    { id: 14, url: '/img/yyhj14.jpg' },
]
// //轮播图
// const swiperImages: Ref<Swipers[]> = ref([]);
// await useAsyncData(async () => {
//     const res: any =await getReleaseSwiper()
//     swiperImages.value = res.data
// })
const ask=()=>{
     window.location.href ='http://dvt.zoosnet.net/LR/Chatpre.aspx?id=DVT34093088&lng=cn' 
}
//公益活动
const welfare_activities=()=>{
    router.push({ path: 'welfare_activities'})
}
//媒体报道
const media_coverage=()=>{
    router.push({ path: 'media_coverage'})
}

</script>

<style lang="less" scoped>
.div_swiper {
    display: flex;
    overflow: hidden;
    width: 84%;
    padding-top: 1rem;
    padding-right: 1rem;
    margin: auto;
    img {
        height: 100%;
        width: 100%;
    }
}

.information {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 1.5rem;
    }
}

.information_list {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 25%;
        height: 80%;
        padding-right: 2rem;
        cursor: pointer;
    }
}

.hosptial {
    margin: auto;
    height: 600px;
    width: 750px;
    display: flex;
    justify-content: center;
    align-items: center;

    .hosptial_show {
        height: 600px;
        width: 750px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
.special_list{
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    .special_lists{
        width: 20%;
        display: flex;
        justify-content: center;
         align-items: center;
         background-image: url('/img/special_list_bg1.png');
         background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        margin-right: 5%;
        padding:1rem;
         img{
            height: 90%;
            width: 90%;
        }
        &:hover {
            background-image: url('/img/special_list_bg2.png');
        }
    }
}
.hospital_introduce_video{
    height: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-image: url('/img/backgroun.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .hospital_introduce_video_title{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30%;
        width: 100%;
    }
    .hospital_introduce_video_body{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70%;
        width: 100%;
        .hospital_introduce_video_bodys{
         height: 100%;
         width: 35%;
         video{
            height: 80%;
            width: 80%;
            border: 10px solid #f5f5f5;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
            padding: 10px;
         }
        }
        .hospital_introduce_report_body{
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: space-between;
             align-items: center;
             img{
                cursor: pointer;
             }
        }
    }

}
</style>