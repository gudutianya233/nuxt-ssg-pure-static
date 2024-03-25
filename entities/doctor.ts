export type Doctor={
    id: number;
    name: string; //医生名字
    title: string;  //医生头衔
    head_picture: string;  //医生头像url地址
    achieve_url: string;  //医生头像url地址
    original_registration_cost: number;  //原价挂号费
    registration_cost: number;  //现价挂号费
    attention: number;  //关注数量
    receive_number: number;  //挂号量
    favorable_rate: number;  //好评率
    overview_content: string;  //医生简介
    proficient: string;  //擅长治疗
    create_time: string;  //创建时间
}