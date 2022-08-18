const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        tankinfo: '',
        tank1: 
            { 
              name: "First Fuel Tank ",
              fuelVolume: 4830,
              fuelHeight: 89.02,
              fuelTemp: 25,
            },
        heightLevel: 85
      }
    },
    methods: {
      loaddata(data){
        this.tankinfo = data
      },
      setLevel(){
        this.heightLevel = this.tankinfo.fuelvolume / 500000 * 85
      }
    },
    mounted(){
      axios
        .get('http://localhost:3000/data')
        .then(res => this.loaddata(res.data[res.data.length - 1]))
    }
  }).mount('#app')