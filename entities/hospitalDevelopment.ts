//医院动态,养生科普,关于铭博,媒体报道,公益活动
export type HospitalDevelopment = {
    id: number;
    title: string;//标题
    titles: string;//副标题
    content: string;//内容
    status: boolean;//状态
    create_time: string;//创建时间
    update_time: string;//更新时间
}