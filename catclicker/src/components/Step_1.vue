<template>
    <section class="step-1">
      <figure>
        <img src="https://source.unsplash.com/random/600x400/?cat" :alt="altWarn" :title="altWarn" @click="addClick">
        <figcaption>{{clicks}}</figcaption>
      </figure>
    </section>
</template>

<script>
export default {
  name: 'Step1',
  props: {
    msg: String
  },
  data() {
    return {
      clicks: 0,
        altWarn: 'If you click the cat, you might get the bite. Be careful.'
    }
  },
  methods: {
    addClick(){
      this.clicks++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .step-1 {
    figure {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      img {
        cursor: pointer;
      }
      figcaption {
        display: block;
        width: 80px;
        font-size: 3rem;
        font-weight: 800; 
      }
    }
    
  } 
</style>
