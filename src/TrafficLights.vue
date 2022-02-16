<script>


export default {
  props: ['color'],
  watch: {
    color: function (newColor, previousColor) {
      if (newColor === 'green') {
        setTimeout( () => {
          this.$router.push('/yellow')
        }, 15000)
      }
      if (newColor === 'yellow') {
        if (previousColor === 'green') {
          setTimeout( () => {
            this.$router.push('/red')
          }, 3000)
        }
        if (previousColor === 'red') {
          setTimeout( () => {
            this.$router.push('/green')
          }, 3000)
        }
      }
      if (newColor === 'red') {
        setTimeout( () => {
          this.$router.push('/yellow')
        }, 10000)
      }
    }
  },
  created() {
    if (this.$route.params.color === 'green') {
        setTimeout( () => {
          this.$router.push('/yellow')
        }, 15000)
    }
    if (this.$route.params.color === 'yellow') {
      setTimeout( () => {
        this.$router.push('/red')
      }, 3000)
    }
    if (this.$route.params.color === 'red') {
      setTimeout( () => {
        this.$router.push('/yellow')
      }, 10000)
    }
  }
}

</script>

<template>
  <div v-if="color === 'red'" class="redCircle enabled"></div>
  <div v-else class="redCircle"></div>
  <div v-if="color === 'yellow'" class="yellowCircle enabled"></div>
  <div v-else class="yellowCircle"></div>
  <div v-if="color === 'green'" class="greenCircle enabled"></div>
  <div v-else class="greenCircle"></div>
</template>

<style>

body {
  margin: 0;
}
#app {
  min-height: 100vh;
  display: flex;
  margin: 0;
  background-color: #181818;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.greenCircle {
  background-color: #00BF32;
  opacity: 0.2;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
}
.yellowCircle {
  background-color: #FFD900;
  opacity: 0.2;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
}
.redCircle {
  background-color: #FF1300;
  opacity: 0.2;
  width: 25vh;
  height: 25vh;
  border-radius: 50%;
}

.enabled {
  opacity: 1;
  -moz-box-shadow:0 0 10px white;
  -webkit-box-shadow:0 0 10px white;
  box-shadow:0 0 10px white;
}

</style>
