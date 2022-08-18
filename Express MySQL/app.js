// repo vue.js
const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        products: []
      }
    },
    methods: {
      loadData(data){
        this.products = data
      }
    },
    mounted(){
      axios.get('http://localhost:8080/product')
        .then(res => this.loadData(res.data.data))
    }
  }).mount('#app')