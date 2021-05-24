<template>
 <div >
      <div v-for="name,index in links" :key="index">
                  <v-card  style="margin-top:10px"
                  class="mx-auto"
                    elevation="8"
                   
                   shaped
                    tile
                    height="300px"
                   
                    
                  >
                   <v-card-title>{{name}}</v-card-title>
                  <v-card-text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</v-card-text>
                  
                  </v-card>
        </div>
  </div>
</template>

<script>
  export default {
    name: 'com1',

    data: () => ({
       links: [
        '一号订单',
        '二号订单',
        '三号订单'
        
        
      ],
    }),
  }
</script>
