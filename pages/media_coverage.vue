<template>
    <div>
        <Head>
      <Title>重庆铭博医院-重庆铭博中医院</Title>
      <Meta name="keywords" content="重庆铭博医院，重庆铭博中医院" />
      <Meta name="description" content="重庆铭博医院作为“互联网+智慧医疗”领域先行者，依托寻医问药网提供的全国优质医疗资源，以互联网技术赋能线下医疗，开启智慧医疗新格局。" />
      </Head>
    </div>
    <div>
        <div class="enter_hosptial_bg">
            <img src="/img/media_coverage_bg.jpg" alt="">
        </div>
        <div class="enter_hosptial_img">
            <img src="/img/media_coverage_img.png" />
        </div>
            <div class="relational_information">
                <!-- 媒体报道 -->
                <div>
                    <div  class="relational_information_content" v-for="item in HospitalDevelopment_list" :key="item.id">
                        <div  class="relational_information_content_title" >
                           <img src="/img/hosptial_keyword.png"/><span>{{ item.title }}</span>
                        </div>
                        <div class="relational_information_content_title"  @click="media_coverage_detail(item.id)">
                            <span >{{ item.titles }}</span>
                        </div>
                        <div class="relational_information_content_seek">
                            <div @click="media_coverage_detail(item.id)">【详情】</div>
                            <div><img src="/img/ask_seek.png"  @click="ask_seek"/></div>
                        </div>
                    </div>
                    <div class="pagination">
                        共{{ total }}篇文章 
                        第{{ page }} / {{ Math.ceil(total / perPage) }}页
                        <a   v-if="page > 1" @click="page--, getMediaCoverages()">上一页</a>
                        <a  v-if="page < Math.ceil(total / perPage)" @click="page++, getMediaCoverages()">下一页</a>
                    </div>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
import type { HospitalDevelopment } from '~/entities/hospitalDevelopment';
import { useRouter } from 'vue-router'
const page=ref(1)//页码
const perPage = ref(4) // 每页显示的文章数
const total = ref(0) // 总文章数
const router = useRouter()
const { public: { baseURL } } = useRuntimeConfig()
const HospitalDevelopment_list: Ref<HospitalDevelopment[]> = ref([])

const { data } = await useAsyncData( 
    () =>$fetch(`${baseURL}/hospital/getMediaCoverages`,
    {
        method: 'POST',
        body: {
            page: page.value,
            pageSize:perPage.value,
        }
    }
    )
)
const getMediaCoverages=async ()=>{
await $fetch(`${baseURL}/hospital/getMediaCoverages`, {
        method: 'POST',
        body: {
          page: page.value,
          pageSize: perPage.value,
        },
      }).then(res => {
        HospitalDevelopment_list.value = (res as any).data;
        total.value = (res as any).total;
      })
}


onMounted(() => {
   const res1=JSON.stringify(data.value)
   HospitalDevelopment_list.value=JSON.parse(res1).data
   total.value=JSON.parse(res1).total
})

const ask_seek=()=>{
    window.location.href ='http://dvt.zoosnet.net/LR/Chatpre.aspx?id=DVT34093088&lng=cn'
}

const media_coverage_detail=(id:number)=>{
    router.push({ path: `/article/media_coverage_detail/${id}`})
}

</script>

<style lang="less" scoped>
.enter_hosptial_bg {
    height: 500px;
    width: 100%;

    img {
        height: 100%;
        width: 100%;
    }
}

.enter_hosptial_img {
    text-align: center;
    margin-top: 2rem;
}

.hosptial_navigation {
    display: flex;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    .hosptial_navigation1,
    .hosptial_navigation2,
    .hosptial_navigation3 {
        width: 33%;
        font-size: 1.5rem;
        text-align: center;
        display: flex;
        justify-content: center;

        .hosptial_navigations {
            width: 50%;
            height: 4rem;
            line-height: 4rem;
            background-image: url('/img/enter_hosptial.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }

        .active {
            background-image: url('/img/enter_hosptial_active.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            color: white;
        }
    }
}

.relational_information_content {
    height: auto;
    width: 80%;
    margin: auto;
    margin-bottom: 2rem;
    padding: 2rem;
    background-image: url('/img/information_content_bg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding-left: 5rem;
    padding-right: 5rem;
    .relational_information_content_title{
        text-align: left;
        display: flex;
        padding-left: 0.8rem;
        img{
            height: 2rem;
            width: 2rem;
            margin-right: 1rem;
        }
        span{
            cursor: pointer;
            font-size:1.5rem;
            color: black;
        }
    }
    .relational_information_content_seek{
        cursor: pointer;
        margin-top: 1rem;
            font-size:1.5rem;
            color: #721B0E;
        display: flex;
        justify-content: space-between
    }
}
.pagination{
    text-align: right;
    width: 90%;
    margin-bottom: 2rem;
}
</style>