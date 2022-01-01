<template>
    <section class="step-3">
      <div class="breed-selector">
          <div v-for="(cat, breed) in cats" :key="'key-'+breed">
            <label :for="'breed-'+breed" class="breed-label">
              <input type="radio" v-model="showBreed" name="choose-breed" :id="'breed-'+breed" :value="breed">
              <span>{{breed}}</span>
            </label>
          </div>
      </div>
      <figure>
        <img :src="cats[showBreed].photo" @click="addClick(showBreed)"  :alt="altWarn" :title="altWarn">
        <figcaption>{{cats[showBreed].clicks}}</figcaption>
      </figure>
    </section>
</template>

<script>
export default {
  name: 'Step3',
  props: {
    msg: String
  },
  data() {
    return {
      showBreed: 'ginger',
      cats: {
        ginger: {
            photo: 'https://source.unsplash.com/random/600x400/?cat,ginger',
            clicks: 0
          },
        white: {
          photo: 'https://source.unsplash.com/random/600x400/?cat,white',
          clicks: 0
        },
        black: {
          photo: 'https://source.unsplash.com/random/600x400/?cat,black',
          clicks: 0
        }
      },
        altWarn: 'If you click the cat, you might get the bite. Be careful.'
    }
  },
  methods: {
    addClick(breed){
      this.cats[breed].clicks++;
    }
  },
  computed: {
    catInfo(){
      return this.cats[this.showBreed]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .step-3 {
    display: grid;
    grid-template-columns: 30% 1fr;

    .breed-selector {
      padding: 0 3rem;
      text-align: left;
    }
    .breed-label {
      display: block;
      margin-bottom: 1rem;
      text-transform: uppercase;
      
      input[type="radio"]:checked + span {
        font-weight: 600;
      }
    }
    
    figure {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      img {
        width: calc(100% - 80px);
        height: 100%;
        object-fit: contain;
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
