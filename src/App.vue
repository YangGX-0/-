<template>
  <v-app id="inspire">
    <transition name='slideUp'>
				<div class="rMenu" v-show="show">
					
            <LoginForm> </LoginForm>

				</div>
			</transition>


    <v-app-bar app color="white" flat >
      
      <v-avatar :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'" size="32"></v-avatar>

      <v-tabs  centered  class="ml-n9"  color="grey darken-1">
        <v-tab  @click="chooseContent(1)">
          {{ links[0] }}
        </v-tab>
        <v-tab  @click="chooseContent(2)">
          {{ links[1] }}
        </v-tab>
        <v-tab  @click="chooseContent(3)">
          {{ links[2] }}
        </v-tab>
      </v-tabs>

     点击呼入呼出登录界面<v-avatar  class="hidden-sm-and-down" color="grey darken-1 shrink" size="45" @click="loginshow()" ></v-avatar>

    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>

          <v-col  cols="12" sm="2">
            <v-sheet rounded="lg" min-height="268" >
              <!--  -->
            
              公告版块
            </v-sheet>
          </v-col>

          <v-col   cols="12"  sm="8">
            
              <!--  -->
            <slot ><div :is="com"></div></slot>
             
           
          </v-col>

          <v-col cols="12"  sm="2">
            <v-sheet  rounded="lg"  min-height="268" >
              <!--  -->
              快捷显示版块
            </v-sheet>
          </v-col>

        </v-row>
      </v-container>
    </v-main>

  </v-app>

</template>

<script>
import axios from 'axios';
 import com1 from './components/comM.vue'
 import com2 from './components/comP.vue'
 import com3 from './components/comJ.vue'
import LoginForm from './components/login.vue';

export default {
  name: 'App',
   
  components:{
					com1,com2,com3,
    LoginForm,
    
    
				},
  methods:{
    


          
					chooseContent:function(id){
						console.log(id)
						console.log(this)
						//通过获取id,选择注册好的组件
						this.com = this.$options.components['com'+id]
					},
          loginshow:function(){
            this.show = !this.show
					
					},

           addUser() {
                var name = this.userName;
                var password = this.password;
                axios.post('http://localhost:3000/api/user/addUser', {
                  username: name,
                  password: password
                  }, {}).then((response) => { console.log(response); })
              },
  
              changeMsg () {
                axios.get('http://localhost:3000/api/user/query').then((response) => {
                    console.log(response)
                    console.log('--------')
                })
                
               

                
                

				},
  },
  data: () => ({
    return:{
        
        userName: '',
        password: ''
      },
      
    show:false,
    com:com1,
     links: [
        '订单主页',
        '个人中心',
        '兼职申请',
        
      ],
  }),
};
</script>



<style type="text/css">
			*{
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}
			.page{
				width: 100vw;
				height: 100vh;
				background-color: #efefef;
				position: fixed;
				
				top: 0;
			}
			.rMenu{
				width: 100vw;
				height: 50vh;
				position: fixed;
				bottom: 30vh;
       background-color:rgb(245, 245, 245,0);
			
        transform: translateY(0vw);
        z-index: 99999;
				
			}
			
			.slideUp-enter-active,.slideUp-leave-active{
				transition: all 3s;
			}
			.slideUp-enter,.slideUp-leave-to{

				transform: translateY(-50vw);
       
			}
		</style>