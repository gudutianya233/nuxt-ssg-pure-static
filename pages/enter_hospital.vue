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
            <img src="/img/enter_hosptial_bg.jpg" alt="">
        </div>
        <div class="enter_hosptial_img">
            <img src="/img/enter_hosptial_img.png" />
        </div>
        <div>
            <div class="hosptial_navigation">
                <div class="hosptial_navigation1">
                    <div class="hosptial_navigations" @click="changeContentAndBackground(1)"
                        :class="{ active: activeNavigation === 1 }">铭博动态</div>
                </div>
                <div class="hosptial_navigation2">
                    <div class="hosptial_navigations" @click="changeContentAndBackground(2)"
                        :class="{ active: activeNavigation === 2 }">养生科普</div>
                </div>
                <div class="hosptial_navigation3">
                    <div class="hosptial_navigations" @click="changeContentAndBackground(3)"
                        :class="{ active: activeNavigation === 3 }"> 关于铭博</div>
                </div>
            </div>
            <div class="relational_information">
                <!-- 医院动态 -->
                <div v-show="activeNavigation === 1" >
                    <div  class="relational_information_content" v-for="item in HospitalDevelopment_list" :key="item.id">
                        <div  class="relational_information_content_title" >
                           <img src="/img/hosptial_keyword.png"/><span>{{ item.title }}</span>
                        </div>
                        <div class="relational_information_content_title"  @click="hospital_dynamics(item.id)">
                            <span >{{ item.titles }}</span>
                        </div>
                        <div class="relational_information_content_seek">
                            <div @click="hospital_dynamics(item.id)">【详情】</div>
                            <div><img src="/img/ask_seek.png"  @click="ask_seek"/></div>
                        </div>
                    </div>
                    <div class="pagination">
                        共{{ HospitalDevelopment_total }}篇文章 
                        第{{ HospitalDevelopment_page }} / {{ Math.ceil(HospitalDevelopment_total / HospitalDevelopment_perPage) }}页
                        <a   v-if="HospitalDevelopment_page > 1" @click="HospitalDevelopment_page--, getHospitalDevelopment()">上一页</a>
                        <a  v-if="HospitalDevelopment_page < Math.ceil(HospitalDevelopment_total / HospitalDevelopment_perPage)"
                         @click="HospitalDevelopment_page++, getHospitalDevelopment()">下一页</a>
                    </div>
                </div>
                <!-- 养生科普 -->
                <div v-show="activeNavigation === 2">
                    <div  class="relational_information_content" v-for="item in HealthPopularization_list" :key="item.id">
                        <div  class="relational_information_content_title" >
                           <img src="/img/hosptial_keyword.png"/><span>{{ item.title }}</span>
                        </div>
                        <div class="relational_information_content_title"  @click="health_popularization(item.id)">
                            <span >{{ item.titles }}</span>
                        </div>
                        <div class="relational_information_content_seek">
                            <div @click="health_popularization(item.id)">【详情】</div>
                            <div><img src="/img/ask_seek.png"  @click="ask_seek"/></div>
                        </div>
                    </div>
                    <div class="pagination">
                        共{{ HealthPopularization_total }}篇文章 
                        第{{ HealthPopularization_page }} / {{ Math.ceil(HealthPopularization_total / HealthPopularization_perPage) }}页
                        <a   v-if="HealthPopularization_page > 1" @click="HealthPopularization_page--, getHealthPopularizations()">上一页</a>
                        <a  v-if="HealthPopularization_page < Math.ceil(HealthPopularization_total / HealthPopularization_perPage)"
                         @click="HealthPopularization_page++, getHealthPopularizations()">下一页</a>
                    </div>
                </div>
                <!-- 关于铭博 -->
                <div v-show="activeNavigation === 3">
                    <div  class="relational_information_content" v-for="item in AboutHospital_list" :key="item.id">
                        <div  class="relational_information_content_title" >
                           <img src="/img/hosptial_keyword.png"/><span>{{ item.title }}</span>
                        </div>
                        <div class="relational_information_content_title"  @click="about_hospital(item.id)">
                            <span >{{ item.titles }}</span>
                        </div>
                        <div class="relational_information_content_seek">
                            <div @click="about_hospital(item.id)">【详情】</div>
                            <div><img src="/img/ask_seek.png"  @click="ask_seek"/></div>
                        </div>
                    </div>
                    <div class="pagination">
                        共{{ AboutHospital_total }}篇文章 
                        第{{ AboutHospital_page }} / {{ Math.ceil(AboutHospital_total / AboutHospital_perPage) }}页
                        <a   v-if="AboutHospital_page > 1" @click="AboutHospital_page--, getAboutHospitals()">上一页</a>
                        <a  v-if="AboutHospital_page < Math.ceil(AboutHospital_total / AboutHospital_perPage)"
                         @click="AboutHospital_page++, getAboutHospitals()">下一页</a>
                    </div>
                </div>
            </div>
        </div>
 
    </div>
</template>

<script setup lang="ts">
import type { HospitalDevelopment } from '~/entities/hospitalDevelopment';
import { useRouter } from 'vue-router'
const HospitalDevelopment_page=ref(1)//页码
const HospitalDevelopment_perPage = ref(4) // 每页显示的文章数
const HospitalDevelopment_total = ref(0) // 总文章数
const HealthPopularization_page=ref(1)//页码
const HealthPopularization_perPage = ref(4) // 每页显示的文章数
const HealthPopularization_total = ref(0) // 总文章数
const AboutHospital_page=ref(1)//页码
const AboutHospital_perPage = ref(4) // 每页显示的文章数
const AboutHospital_total = ref(0) // 总文章数
const router = useRouter()
const activeNavigation = ref(1)
const changeContentAndBackground = (index: number) => {
    activeNavigation.value = index;
}
const { public: { baseURL } } = useRuntimeConfig()
const HospitalDevelopment_list: Ref<HospitalDevelopment[]> = ref([])
const { data: data1 } = await useAsyncData( 
    () =>$fetch(`${baseURL}/hospital/getHospitalDevelopments`,
    {
        method: 'POST',
        body: {
            page: HospitalDevelopment_page.value,
            pageSize: HospitalDevelopment_perPage.value,
        }
    }
    )
)
const getHospitalDevelopment=async ()=>{
 await $fetch(`${baseURL}/hospital/getHospitalDevelopments`, {
        method: 'POST',
        body: {
          page: HospitalDevelopment_page.value,
          pageSize: HospitalDevelopment_perPage.value,
        },
      }).then(res => {
        HospitalDevelopment_list.value = (res as any).data;
        HospitalDevelopment_total.value = (res as any).total;
      })
    
}
const HealthPopularization_list: Ref<HospitalDevelopment[]> = ref([])
const { data: data2 } = await useAsyncData( 
    () =>$fetch(`${baseURL}/hospital/getHealthPopularizations`,
    {
        method: 'POST',
        body: {
            page: HealthPopularization_page.value,
            pageSize: HealthPopularization_perPage.value,
        }
    }
    )
)
const getHealthPopularizations=async ()=>{
     await $fetch(`${baseURL}/hospital/getHealthPopularizations`, {
        method: 'POST',
        body: {
          page: HealthPopularization_page.value,
          pageSize: HealthPopularization_perPage.value,
        },
      }).then(res => {
        HealthPopularization_list.value = (res as any).data;
        HealthPopularization_total.value = (res as any).total;
      })
    
}
const AboutHospital_list: Ref<HospitalDevelopment[]> = ref([])
const { data: data3 } = await useAsyncData( 
    () =>$fetch(`${baseURL}/hospital/getAboutHospitals`,
    {
        method: 'POST',
        body: {
            page: AboutHospital_page.value,
            pageSize: AboutHospital_perPage.value,
        }
    }
    )
)
const getAboutHospitals=async ()=>{
await $fetch(`${baseURL}/hospital/getAboutHospitals`, {
        method: 'POST',
        body: {
          page: AboutHospital_page.value,
          pageSize: AboutHospital_perPage.value,
        },
      }).then(res => {
        AboutHospital_list.value = (res as any).data;
        AboutHospital_total.value = (res as any).total;
      })
}

onMounted(() => {
   const res1=JSON.stringify(data1.value)
   HospitalDevelopment_list.value=JSON.parse(res1).data
   HospitalDevelopment_total.value=JSON.parse(res1).total
   const res2=JSON.stringify(data2.value)
   HealthPopularization_list.value=JSON.parse(res2).data
   HealthPopularization_total.value=JSON.parse(res2).total
   const res3=JSON.stringify(data3.value)
   AboutHospital_list.value=JSON.parse(res3).data
   AboutHospital_total.value=JSON.parse(res3).total
})

const ask_seek=()=>{
    window.location.href ='http://dvt.zoosnet.net/LR/Chatpre.aspx?id=DVT34093088&lng=cn' 
}

const hospital_dynamics=(id:number)=>{
    router.push({ path: `/article/hospital_dynamics/${id}`})
} 
const health_popularization=(id:number)=>{
    router.push({ path: `/article/health_popularization/${id}`})
} 
const about_hospital=(id:number)=>{
    router.push({ path: `/article/about_hospital/${id}`})
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