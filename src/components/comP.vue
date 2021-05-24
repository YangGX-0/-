<template>
    
<div >
      <div v-for="name,index in links" :key="index">
                  <v-card  style="margin-top:10px"
                    elevation="8"
                   
                  shaped
                    tile
                    height="100px"
                    round = 20
                  >
                   <v-card-title>{{name}}</v-card-title>
                  <v-card-text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</v-card-text>
                  
                  </v-card>
        </div>
  </div>
           
</template>

<script>
  export default {
    name: 'com2',

    data: () => ({
       links: [
        '发布订单',
        '查询订单',
        
        
      ],
    }),
  }
</script>
