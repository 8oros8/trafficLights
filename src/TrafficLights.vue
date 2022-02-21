<script>


export default {
  props: ['color'],
  data() {
    return {
      timer: 0,
    }
  },
  methods : {
    redGreenHandler: function (color) {
      if (color === 'green') {
        let flickeringGreen1
        let flickeringGreen2
        this.timer = 15
        let countdown = setInterval(() => {
          this.timer--
        }, 1000)
        setTimeout(() => {
          flickeringGreen1 = setInterval(() => {
            document.querySelector('.greenCircle').style.opacity = '0.2'
          }, 500)
          flickeringGreen2 = setInterval(() => {
            document.querySelector('.greenCircle').style.opacity = '1'
          }, 1000)
        }, 12000)
        setTimeout( () => {
          clearInterval(countdown)
          clearInterval(flickeringGreen1)
          clearInterval(flickeringGreen2)
          this.$router.push('/yellow')
        }, 15000)
      }
      if (color === 'red') {
        this.timer = 10
        let countdown = setInterval(() => {
          this.timer--
        }, 1000)
        let flickeringRed1
        let flickeringRed2
        setTimeout(() => {
          flickeringRed1 = setInterval(() => {
            document.querySelector('.redCircle').style.opacity = '0.2'
          }, 500)
          flickeringRed2 = setInterval(() => {
            document.querySelector('.redCircle').style.opacity = '1'
          }, 1000)
        }, 7000)
        setTimeout( () => {
          clearInterval(countdown)
          clearInterval(flickeringRed1)
          clearInterval(flickeringRed2)
          this.$router.push('/yellow')
        }, 10000)
      }
    }
  },
  watch: {
    color: function (newColor, previousColor) {
      this.redGreenHandler(newColor)
      if (newColor === 'yellow') {
        this.timer = 3
        let countdown = setInterval(() => {
          this.timer--
        }, 1000)
        if (previousColor === 'green') {
          setTimeout( () => {
            clearInterval(countdown)
            this.$router.push('/red')
          }, 3000)
        }
        if (previousColor === 'red') {
          setTimeout( () => {
            clearInterval(countdown)
            this.$router.push('/green')
          }, 3000)
        }
      }
    }
  },
  created() {
    this.redGreenHandler(this.$route.params.color)
    if (this.$route.params.color === 'yellow') {
      this.timer = 3
      let countdown = setInterval(() => {
        this.timer--
      }, 1000)
      setTimeout( () => {
        clearInterval(countdown)
        this.$router.push('/red')
      }, 3000)
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
  <div class="timer">{{color}}: {{timer}}</div>
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

.timer {
  display: flex;
  background-color: white;
  height: 8vh;
  width: 25vh;
  font-size: 5vh;
  border-radius: 10px;
  border-width: thick;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
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
