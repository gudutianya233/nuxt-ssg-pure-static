<template>
        <div>
      <Head>
      <Title>重庆铭博医院简介-重庆铭博中医肿瘤医院</Title>
      <Meta name="keywords" content="重庆铭博医院简介，重庆铭博中医肿瘤医院" />
      <Meta name="description" content="重庆铭博医院历史悠久、底蕴深厚。坚持“传承创新、中西并重”的发展理念，重点建设中医、中医肿瘤科、中医疑难综合科等核心的多学科诊疗平台，更好地为患者服务。" />
      </Head>
    </div>
    <div>
        <div class="hosptial_bg">
            <img src="/img/hosptial_bg.jpg" alt="">
        </div>
        <div class="hosptial">
            <div class="hosptial_bg2">
                <img src="/img/hosptial_bg2.png" alt="">
            </div>
            <div class="hosptial_keyword">
                <div class="hosptial_keywords" v-for="item in keywords">
                    <div class="hosptial_keyword_img"> <img src="/img/hosptial_keyword.png" /></div>
                    <div class="hosptial_keyword_text"><span>{{ item.name }}</span></div>
                </div>
            </div>
        </div>
        <div class="hosptial_honor">
            <div class="hosptial_honor_title">
                <img src="/img/hosptial_honor.png" />
            </div>
            <div class="hosptial_honor_img">
                <div class="hosptial_honor_imgs"><img src='/img/hosptial_honor1.jpg' /></div>
                <div class="hosptial_honor_imgs"><img src='/img/hosptial_honor2.jpg' /></div>
                <div class="hosptial_honor_imgs"><img src='/img/hosptial_honor3.jpg' /></div>
                <div class="hosptial_honor_imgs"><img src='/img/hosptial_honor4.jpg' /></div>
                <div class="hosptial_honor_imgs"><img src='/img/hosptial_honor5.jpg' /></div>
                <div class="hosptial_honor_imgs"><img src='/img/hosptial_honor6.jpg' /></div>
                <div class="hosptial_honor_imgs"><img src='/img/hosptial_honor7.jpg' /></div>
            </div>
        </div>
        <div class="hosptial_environment">
            <div class="hosptial_environment_title">
                <img src="/img/hosptial_environment.png" />
            </div>
            <div class="hosptial_environment_img">
                <swiper :modules="modules" :loop="true" :space-between="20" :slides-per-view="4" :slides-per-group="1"
                    :loop-fill-group-with-blank="true" :pagination="{ clickable: true, dynamicBullets: true }"
                    :autoplay="{ delay: 2000, disableOnInteraction: false }">
                    <swiper-slide v-for="item in hosptial_show" :key="item.id">
                        <div class="hosptial_show">
                            <img :src="item.url" />
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
        </div>
        <div class="hosptial_service">
            <div class="hosptial_service_title">
                <img src="/img/hosptial_service.png" />
            </div>
            <div class="hosptial_service_body">
                <div class="hosptial_service_body_item" v-for="item in hosptial_service" :key="item.id">
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
        <div class="hosptial_target">
            <div class="hosptial_target_body">
                <div class="hosptial_target_body_item">
                    <div class="hosptial_target_body_item1">
                        <img src="/img/hosptial_target1.png" />
                    </div>
                    <div class="hosptial_target_body_item2">
                        <span>hospital training</span>
                    </div>
                    <div class="hosptial_target_body_item3">
                        <span>医院愿景</span>
                    </div>
                    <div class="hosptial_target_body_item4">
                        <span>以"优质的服务"</span>
                    </div>
                    <div class="hosptial_target_body_item5">
                        <span>显著的疗效"服务于民"</span>
                    </div>
                </div>
                <div class="hosptial_target_body_item">
                    <div class="hosptial_target_body_item1">
                        <img src="/img/hosptial_target2.png" />
                    </div>
                    <div class="hosptial_target_body_item2">
                        <span>hospital concept</span>
                    </div>
                    <div class="hosptial_target_body_item3">
                        <span>医院使命</span>
                    </div>
                    <div class="hosptial_target_body_item4">
                        <span>关爱生命促进健康</span>
                    </div>
                    <div class="hosptial_target_body_item5">
                        <span>传承创新造福社会</span>
                    </div>
                </div>
                <div class="hosptial_target_body_item">
                    <div class="hosptial_target_body_item1">
                        <img src="/img/hosptial_target3.png" />
                    </div>
                    <div class="hosptial_target_body_item2">
                        <span>bbusiness purpose</span>
                    </div>
                    <div class="hosptial_target_body_item3">
                        <span>经营宗旨</span>
                    </div>
                    <div class="hosptial_target_body_item4">
                        <span>弘扬重庆铭博医院</span>
                    </div>
                    <div class="hosptial_target_body_item5">
                        <span>服务大众健康</span>
                    </div>
                </div>
                <div class="hosptial_target_body_item">
                    <div class="hosptial_target_body_item1">
                        <img src="/img/hosptial_target4.png" />
                    </div>
                    <div class="hosptial_target_body_item2">
                        <span>hospital values</span>
                    </div>
                    <div class="hosptial_target_body_item3">
                        <span>医院价值观</span>
                    </div>
                    <div class="hosptial_target_body_item4">
                        <span>坚持"传承创新“</span>
                    </div>
                    <div class="hosptial_target_body_item5">
                        <span>"中西并重"</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="hosptial_swiper">
            <swiper :modules="modules" :loop="true" :pagination="{ clickable: true, dynamicBullets: true }"
                :autoplay="{ delay: 2000, disableOnInteraction: true }">
                <swiper-slide>
                    <img src="/img/hosptial_banner1.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/img/hosptial_banner4.jpg" />
                </swiper-slide>
                <swiper-slide>
                    <img src="/img/hosptial_banner2.jpg" />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import 'swiper/css/pagination'
const modules = [Pagination, Autoplay]
const keywords = [
    { id: 1, name: '一切以患者为中心' },
    { id: 2, name: '医保定点单位' },
    { id: 3, name: '远程会诊 智慧药房' },
    { id: 4, name: '特色科室 以名医带动名科' },
    { id: 5, name: '国际医疗新模式  吸引高端学科人才' },
    { id: 6, name: '国际国内先进设备 高品质医疗服务保障' },
    { id: 7, name: '温馨舒适就医环境' },
]
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
const hosptial_service = [
    { id: 1, name: '医保惠民政策' },
    { id: 1, name: '中西医结合' },
    { id: 1, name: '一对一问诊' },
    { id: 1, name: '预约制服务' },
    { id: 1, name: '家属可陪同' },
    { id: 1, name: '诊后回访' },
]
</script>

<style lang="less" scoped>
.hosptial_bg {
    height: 500px;
    width: 100%;
    img {
        height: 100%;
        width: 100%;
    }
}

.hosptial {
    width: 80%;
    margin: auto;
    margin-top: 1rem;
    display: flex;

    .hosptial_bg2 {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            height: 100%;
            width: 100%;
        }
    }

    .hosptial_keyword {
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10%;

        .hosptial_keywords {
            display: flex;
            height: 13%;
            width: 100%;
            text-align: left;
            font-size: 1.3rem;
        }

        .hosptial_keyword_img {
            width: 10%;
            display: flex;
            align-items: center;
        }

        .hosptial_keyword_text {
            width: 80%;
            display: flex;
            align-items: center;
        }
    }
}

.hosptial_honor {
    margin-top: 1rem;

    .hosptial_honor_title {
        text-align: center;
    }

    .hosptial_honor_img {
        display: flex;
        flex-wrap: wrap;
        margin-top: 1rem;
       .hosptial_honor_imgs {
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
            img {
                height: 70%;
                width: 50%;
            }
        }
    }
}

.hosptial_environment {
    margin-top: 1rem;

    .hosptial_environment_title {
        text-align: center;
    }

    .hosptial_environment_img {
        margin: auto;
        height: 300px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;

        .hosptial_show {
            height: 300px;
            width: 100%;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}

.hosptial_service {
    margin-top: 2rem;

    .hosptial_service_title {
        text-align: center;
    }

    .hosptial_service_body {
        display: flex;
        flex-wrap: wrap;
        width: 80%;
        margin: auto;

        .hosptial_service_body_item {
            height: 130px;
            width: 20%;
            margin-right: 5%;
            margin-top: 2rem;
            background-image: url(/img/hosptial_service_bg.png);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #721b0e;
            font-size: 2rem;

            &:hover {
                color: white;
                background-color: #721b0e;
            }
        }
    }

}

.hosptial_target_body {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    height: 250px;
    margin-top: 3rem;

    .hosptial_target_body_item {
        height: 130px;
        width: 20%;
        margin-right: 5%;
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .hosptial_target_body_item1 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
        }

        .hosptial_target_body_item2 {
            color: #721b0e;
            text-transform: capitalize;
            margin-top: 1rem;
            font-size: 1.5rem;
        }

        .hosptial_target_body_item3 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-size: 2rem;
        }

        .hosptial_target_body_item4,
        .hosptial_target_body_item5 {
            font-size: 1.3rem;
        }

    }
}

.hosptial_swiper {
    margin: auto;
    margin-bottom: 2rem;
    width: 80%;
    height: 20%;

    img {
        height: 100%;
        width: 100%;
    }
}</style>