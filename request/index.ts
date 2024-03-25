import request from './request'
import  type{ Res } from '../entities/axios';
import type { Swipers } from '~/entities/swiper';
import type { Appointment } from '~/entities/appointment';
//首页获取轮播图
export const getReleaseSwiper = (): Promise<Res<Swipers[]>> =>
    request.get('swiper/getReleaseSwiper'
    ).then((res: any) => {
        return res;
    })
        .catch((error) => {
            console.log("error", error);
        });
//提交预约信息
export const submitAppointment = (appointment:Partial<Appointment>,url:string): Promise<Res<Boolean>> =>
    request.post('mail/sendMail',{appointment,url}
    ).then((res: any) => {
        return res;
    })
        .catch((error) => {
            console.log("error", error);
        });