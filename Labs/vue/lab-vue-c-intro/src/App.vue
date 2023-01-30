<script setup>
import HelloWorld from './components/HelloWorld.vue'


</script>

<template>
  <body>
  <header>
    <div class="IronhackLogo"></div>
    <div class="burger"></div>
  </header>

<section class = "intro">
<div class ="vueLogo"></div>
<div class =introText>
  <h1>Welcome to Vue.js</h1>
<p>Become a coding ninja with the fastest-growing JavaScript framework</p>
</div>
<button><p>Awesome!</p></button>

</section>
<section class="usp">
  <div class="USP-1 "></div>
<h5 class = "per">Performant</h5>
<p class = "per-1">Truly reactive, compiler-optimized rendering system that rarely requires manual optimization.</p>
<div class="USP-2 "></div>
<h5 class = "appr">Approchable</h5>
<p class = "appr-1">Builds on top of standard HTML, CSS and JavaScript with intuitive API and world-class documentation.</p>
<div class="USP-3 "></div>
<h5 class = "ver">Versatile</h5>
<p class = "ver-1">A rich, incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
</section>
</body>
</template>

<style scoped>

body{
  position: relative;
  width: 100vw;
  height: 100vw;

  background: #FFFFFF;
}
.app{width:100%;}
header{
  position: absolute;
  width: 100%;
  height: 50px;
  left: 1vw;
  top: 1vw;
}
/* IronhackLogo */
.IronhackLogo{
  position: absolute;
  width: 35px;
  height: 38px;
  left: 0px;
  top: 1vw;
  background-image: url('./images/Ironhack_logo.svg');
}
/* Burger_menu */
.burger{
  position: absolute;
  width: 35px;
  height: 38px;
  right: 0px;
  top: 1vw;
  background: url('./images/Burger_menu.svg')
}

/* Intro section */
.intro{
  position: absolute;
  width: 80vw;
  height: 299px;
  left: 20vw;
  top: 86px;
}
.vueLogo{
  position: absolute;
  width: 129px;
  height: 129px;
  left: 235px;
  top: 86px;
  background: url('./images/Vue_logo.svg')
}
.introText{
  position: absolute;
  width: 100%;
  height: 158px;
  left: 72px;
  top: 210px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 50px;
  line-height: 95px;
  /* or 190% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  color: #2B2F30;
}

.introText p{
  position: absolute;
  width: 309px;
  height: 40px;
  left: 88px;
  top: 130px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 20px;
  /* or 143% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  color: #000000;
}

button{
  position: absolute;
  width: 121px;
  height: 31px;
  left: 251px;
  top: 400px;
  background: #34495E;
  border-radius: 13px;
}

button p{ 
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;
  color: #FFFFFF;
}
.usp{
  position: absolute;
  width: 100%;
  height: 500px;
  left: 0px;
  right: 0px;
  top: 600px;

  background: #39B983;
}

.usp div{
  position: absolute;
  width: 80px;
  height: 80px;
  top: 80px;
}

.USP-1{
  background-image: url('./images/USP-1.svg');
  background-repeat: no-repeat;
  left: 150px;
}
.USP-2{
  background-image: url('./images/USP-2.svg');
  background-repeat: no-repeat;
  left: 545px;
}
.USP-3{
  background-image: url('./images/USP-3.svg');
  background-repeat: no-repeat;
  left: 940px;
}

.usp h5{
  position: absolute;
width: 87px;
height: 95px;

top: 150px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 95px;
/* identical to box height, or 594% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: -0.02em;

color: #000000;
}
.per {
  left: 125px;
}
.appr {
  left: 515px;
}
.ver {
  left: 940px;
}

.usp p{
  position: absolute;
  width: 200px;
  height: 91px;
  
  top: 230px;

  font-family: 'Inria Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  /* or 142% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.02em;

  color: #000000;

}
.per-1 {
  left: 70px;
}
.appr-1 {
  left: 475px;
}
.ver-1 {
  left: 880px;
}

</style>
