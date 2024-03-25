//首页的轮播图类
export type Swipers={
    id:number;
    url:string;
    name:string;//名称
    create_time:string;//创建时间
    type:string;//图片类型
    status:number;//图片状态(“已发布=1”或“已下架=0”)
    }