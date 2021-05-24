<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-form>
        <v-row class="border-teal-large" justify="center">
            <!--登录组件-->
            <v-col cols="4" class="border1 pr-12 pl-12 pb-8 pt-6 elevation-3" style=" background-color:rgba(245,245,245,1);">
                <!--标题-->
                <div class="text-center pb-3">
                    <span class="display-1">登 录</span>
                </div>
                <br/>
                <!--错误信息-->
                <div :class="['pb-2']" :style="{'height':'30px'}">
                    <div :class="['d-none',{'d-block':err}]">
                        <v-icon color="#F4511E">mdi-alert</v-icon>
                        <span :style="{'color':'#F4511E'}" class="pl-1">{{message}}</span>
                    </div>
                </div>
                <!--账号框-->
                <v-text-field solo dense hide-details prepend-inner-icon="mdi-account"
                              placeholder="用户名"
                              v-model="username"
                              @focus="userBorder=true"
                              @blur="userBorder=false"
                              :class="['mb-8','border4',{'input-border':userBorder}]"

                />
                <!--密码框-->
                <v-text-field solo dense hide-details prepend-inner-icon="mdi-lock" append-icon="mdi-eye"
                              placeholder="密码"
                              v-model="password"
                              :type="isPwd ? 'password' : 'text'"
                              @click:append="isPwd=!isPwd"
                              @focus="pwdBorder=true"
                              @blur="pwdBorder=false"
                              :class="['mb-8','border4',{'input-border':pwdBorder}]"
                ></v-text-field>
                <!--登录按钮-->
                <div class="text-center">
                    <v-btn
                            class="ma-2 pr-10 pl-10 "
                            :loading="loading"
                            :disabled="loading"
                            color="teal"
                            @click="loginHandle"
                    >
                        <span :style="{'color':'white'}">登 陆</span>
                        <template v-slot:loader>
                            <span>登陆中..</span>
                        </template>
                    </v-btn>
                </div>
               
               
                <!--弹出框-->
                <v-snackbar top v-model="snackbar" :timeout="3000" color="#EF5350">
                    <span>账号或密码错误！</span>
                </v-snackbar>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import axios from 'axios';
    
    export default {
         
    props :['loginlist'],
        name: "LoginForm",
        data: () => ({
            

           
            loginlist:[],
            loading: false,//加载显示
            err: false,//如果为true，说明输入的信息不完整
            message: '', //错误信息提示
            username: '',
            password: '',
            isPwd: true,//显隐密码
            userBorder: false,//账号框是否是编辑状态
            pwdBorder: false,//密码框是否是编辑状态
            snackbar: false,
        }),
        methods: {
            
            
             

            loginHandle() {
                
                axios.get('http://localhost:3000/api/loginttt/quelogin').then((response) => {
                    console.log(response)
                    console.log(response.data)
                    console.log('--------')
                     
                     this.loginlist=response.data;
                    
                     console.log(this.loginlist)
                    
                     console.log('--------')
                   
                })


                if (this.username.trim() == '') {
                    this.message = "请输入用户名"
                    this.err = true
                    return false
                } else {
                    this.err = false
                }
                if (this.password.trim() == '') {
                    this.message = "请输入密码"
                    this.err = true
                    return false
                } else {
                    this.err = false
                }
                this.loading = true
                //向后台发送请求
                setTimeout(() => {
                    this.loading = false
                }, 1000)
                if (this.username == 'qwe') {
                    console.log('密码正确')
                } else {
                    this.snackbar = true
                    console.log("密码错误")
                }


                var name = this.username;
                var password = this.password;
                 axios.post('http://localhost:3000/api/loginttt/addlogin', {
                  username: name,
                  password: password
                  }, {}).then((response) => { console.log(response); })
            },
        }
    }
</script>

