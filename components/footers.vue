<template>
    <div class="footer">
        <div class="footer_1">
            <div class="footer_1_logo1">
                <img src="/img/footer1_1.png" />
            </div>
            <div class="footer_1_logo2">
                <img src="/img/footer1_2.png" />
            </div>
        </div>
        <div class="footer_2">
            <div class="footer_2_title">
                <div class="footer_2_title_text1"><span>&nbsp;&nbsp;&nbsp;&nbsp;快速导航&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
                <div class="footer_2_title_text2"><span>&nbsp;&nbsp;&nbsp;&nbsp;预约通道&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
                <div class="footer_2_title_text3"><span>&nbsp;&nbsp;&nbsp;&nbsp;联系我们&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
            </div>
            <div class="footer_2_body">
                <div class="footer_2_body_1">
                    <div class="navigation">医院介绍</div>
                    <div class="navigation">走进铭博</div>
                    <div class="navigation">专家团队</div>
                    <div class="navigation">新闻报道</div>
                    <div class="navigation">来源路线</div>
                </div>
                <div class="footer_2_body_2">
                    <div class="appointment_information_main">
                        <div class="appointment_information_main_one">
                            <div class="appointment_information_main_one_name">
                                <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名&nbsp;:</span>
                            </div>
                            <div class="appointment_information_main_one_text">
                                <input v-model="appointment_name" placeholder="请输入就诊人姓名" class="inputs">
                            </div>
                        </div>
                        <div class="appointment_information_main_two">
                            <div class="appointment_information_main_two_sex">
                                <span>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别&nbsp;:</span>
                            </div>
                            <div class="appointment_information_main_two_sex_status">
                                <select v-model="sex">
                                    <option v-for="item in sex_options" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="appointment_information_main_three">
                            <div class="appointment_information_main_three_phone">
                                <span>联系电话&nbsp;:</span>
                            </div>
                            <div class="appointment_information_main_three_number">
                                <input v-model="appointment_phone" placeholder="请输入联系电话" class="inputs">
                            </div>
                        </div>
                        <div class="appointment_information_main_four">
                            <div class="appointment_information_main_four_describe">
                                <span>病情描述&nbsp;:</span>
                            </div>
                            <div class="appointment_information_main_four_text">
                                <textarea rows="4" cols="20" v-model="appointment_describe" class="inputs"></textarea>
                            </div>
                        </div>
                        <div class="appointment_information_main_five">
                            <div class="appointment_information_main_five_reset">
                                <span class="reset" @click="appointmentReset">重新填写</span>
                            </div>
                            <div class="appointment_information_main_five_submit">
                                <span class="submit" @click="appointmentSubmit">确认提交</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_2_body_3">
                    <div class="contact">
                        <img src="/img/wx.png"/>
                    </div>
                    <div class="adress">
                        医院地址:
                    </div>
                    <div class="adress">
                        重庆市渝北区洪湖西路18号
                    </div>
                    <div class="adress">
                        联系电话:
                    </div>
                    <div class="adress">
                        023-86868333(中医)
                    </div>
                    <div class="adress" @click="icp" style="cursor: pointer;">
                        备案号:渝ICP备17008606号-17
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElLoading, ElMessage } from 'element-plus'
import {submitAppointment} from '~/request/index'
//预约挂号姓名
const appointment_name = ref('')
//预约挂号性别
const sex = ref('男')
//下拉选项
const sex_options = [
    {
        value: '男',
        label: '男',
    },
    {
        value: '女',
        label: '女',
    },
]
//预约联系电话
const appointment_phone = ref('')
//病情描述
const appointment_describe = ref('')
//重置预约信息
const appointmentReset = () => {
    appointment_name.value = ''
    appointment_phone.value = ''
    appointment_describe.value = ''
}
type Appointment = {
    name: string;
    phone: string;
    describe: string;
    sex: string;
}
//提交预约信息
const appointmentSubmit = async () => {
    //验证数据是否有空
    if (appointment_name.value != '' && appointment_phone.value != '' && appointment_describe.value != '') {
        //验证手机号
        if (!phone_verify(appointment_phone.value)) {
            ElMessage({
                message: `手机号码不正确`,
                type: 'error',
            })
        }
        else {
            //提交预约信息的加载loading
            const loading = ElLoading.service({
                lock: true,
                text: '正在提交...',
                background: 'rgba(0, 0, 0, 0.7)',
            })
            const appointment: Partial<Appointment> = {}
            appointment.name = appointment_name.value
            appointment.phone = appointment_phone.value
            appointment.describe = appointment_describe.value
            appointment.sex = sex.value
            const res = await submitAppointment(appointment, 'zypc.cqmbyy.com')
            if (res.code == 200 && res.data) {
                //关闭loading
                loading.close()
                ElMessage({
                    message: `提交成功`,
                    type: 'success',
                })
                appointmentReset()
            } else {
                ElMessage({
                    message: `${res.message}`,
                    type: 'error',
                })
            }
        }
    }
    else {
        ElMessage({
            message: `有信息未填写`,
            type: 'error',
        })
    }
}
//验证手机号码合理
const phone_verify = (number: string) => {
    const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
    return reg.test(number);
}
const icp=()=>{
     window.location.href ="https://beian.miit.gov.cn/"
}
</script>

<style lang="less" scoped>
.footer {
    height: 500px;
    width: 100%;
    display: flex;
    background-color: #721b0e;

    .footer_1 {
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;

        .footer_1_logo1 {
            margin-bottom: 3rem;
        }
    }

    .footer_2 {
        width: 70%;

        .footer_2_title {
            display: flex;
            height: 20%;
            color: white;
            font-size: 1.5rem;
            line-height: 80px;
            justify-content: center;
            align-items: center;
            text-align: center;

            span {
                padding-bottom: 1rem;
                border-bottom: 1px solid white;
            }

            .footer_2_title_text1 {
                width: 30%;
            }

            .footer_2_title_text2,
            .footer_2_title_text3 {
                width: 35%;

            }
        }

        .footer_2_body {
            height: 80%;
            display: flex;
            color: white;
            font-size: 1.5rem;
            justify-content: center;
            align-items: center;
            text-align: center;

            .footer_2_body_1 {
                width: 30%;
                height: 100%;
                display: flex;
                flex-direction: column;

                .navigation {
                    height: 15%;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                }
            }

            .footer_2_body_2,
            .footer_2_body_3 {
                width: 35%;
                height: 100%;
            }
        }
    }
}

.appointment_information_main {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 1.5rem;

    .appointment_information_main_one,
    .appointment_information_main_two,
    .appointment_information_main_three {
        height: 15%;
        line-height: 2rem;
        display: flex;
    }

    .appointment_information_main_one_name,
    .appointment_information_main_two_sex,
    .appointment_information_main_three_phone,
    .appointment_information_main_four_describe {
        width: 30%;
    }

    .appointment_information_main_five {
        display: flex;

        div {
            width: 50%;
        }
    }

}

.appointment_information_main_one_text input:focus {
    outline: none;
}

.appointment_information_main_one_text input {
    font-size: 1rem;

}

.appointment_information_main_three_number input:focus {
    outline: none;
}

.appointment_information_main_three_number input {
    font-size: 1rem;
}

.appointment_information_main_four {
    display: flex;
    height: 30%;

    .inputs {
        height: 90%;
        font-size: 1.5rem;
    }
}

.appointment_information_main_four textarea:focus {
    outline: none;
}

.appointment_information_main_two_sex_status select:focus {
    outline: none;
}

.appointment_information_main_five {
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: white;
}

.reset {
    background-color: #909399;
    padding: 0.6rem;
    border-radius: 1rem;
}

.submit {
    background-color: #409EFF;
    padding: 0.6rem;
    border-radius: 1rem;
}

.appointment_information_footer {
    font-size: 0.95rem;
    padding: 1rem;
}
.adress{margin-top: 0.5rem;}</style>
