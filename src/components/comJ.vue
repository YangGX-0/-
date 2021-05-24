<template>
    <div >
      <div v-for="name,index in links" :key="index">
                  <v-card  style="margin-top:10px"
                    elevation="8"
                   
                  shaped
                    tile
                    height="400px"
                    white="300px"
                    rounded
                  >
                   <v-card-title>{{name}}</v-card-title>
                  <v-card-text>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</v-card-text>
                  
                  </v-card>
        </div>
  </div>

            
</template>

<script>
  export default {
    name: 'com3',

    data: () => ({
       links: [
        '兼职申请',
        
        
      ],
    }),
  }
</script>
