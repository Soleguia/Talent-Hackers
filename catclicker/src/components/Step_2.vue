<template>
    <section class="step-2">
      <figure v-for="(cat, index) in cats" :key="'cat-'+index">
        <img :src="cat.photo" @click="addClick(index)" :alt="altWarn" :title="altWarn">
        <figcaption>{{ cat.name }}: {{cat.clicks}}</figcaption>
      </figure>
    </section>
</template>

<script>
export default {
  name: 'Step2',
  props: {
    msg: String
  },
  data() {
    return {
      cats: [
          {
            photo: 'https://source.unsplash.com/random/600x400/?cat,ginger',
            name: 'Catalina',
            clicks: 0
          },
          {
            photo: 'https://source.unsplash.com/random/600x400/?cat,white',
            name: 'Federicat',
            clicks: 0
          }
        ],
        altWarn: 'If you click the cat, you might get the bite. Be careful.'
      }
  },
  methods: {
    addClick(index){
      this.cats[index].clicks++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .step-2 {
    display: flex;
    justify-content: center;

    figure {
      flex: 1 0 auto;
      max-width: 50%;
      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        cursor: pointer;
      }
    }
    figcaption {
      font-size: 2rem;
      font-weight: 600; 
    }
  }
</style>
