<template>

<div>
    <div class="hospital_dynamics" v-if="hospitalDynamics">
        <div class="hospital_dynamics_title">
            <h2>{{ hospitalDynamics.title }}</h2>
        </div>
       <ArticleAsk></ArticleAsk>
        <div class="hospital_dynamics_titles">{{ hospitalDynamics.titles }}</div>  
        <div class="hospital_dynamics_text" v-html=" hospitalDynamics.content"></div>  
    </div>


 

</div>
</template>

<script setup lang="ts">
import type { HospitalDevelopment } from '~/entities/hospitalDevelopment';
const route = useRoute()
const hospitalId = route.params.id
const hospitalDynamics: Ref<HospitalDevelopment | null> = ref(null);

const { public: { baseURL } } = useRuntimeConfig()
const { data } = await useAsyncData( 
() => $fetch(`${baseURL}/hospital/gethospitalDynamics`, { params: { id: hospitalId } })
)
onMounted(() => {
const res=JSON.stringify(data.value)
hospitalDynamics.value=JSON.parse(res).data[0]
})
useHead(()=>{
    const res=JSON.stringify(data.value)
    return {
        title: JSON.parse(res).data[0].title+'—重庆铭博医院',
        meta: [
            {
                name: 'keywords',
                content: '重庆铭博医院官方动态,重庆铭博医院最新动态',
            },
            {
                name: 'description',
                content: JSON.parse(res).data[0].titles,
            },
        ],
    }
})
</script>

<style lang="less" scoped>
.hospital_dynamics{
width: 80%;
margin: auto;
text-align: center;
display: flex;
flex-direction: column;
.hospital_dynamics_titles{
    text-align: left;
}
}
</style>