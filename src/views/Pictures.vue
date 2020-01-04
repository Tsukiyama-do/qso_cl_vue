<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="Boris Johnson"
        text="I'd rather be dead in a ditch."
        img-src="../assets/Rig_Inamura1b.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="Hillary Clinton"
        text="Never stop believing that fighting for what's right is worth it."
        img-src="../assets/Rig_Inamura2b.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        caption="孤独のグルメ"
        text="自分にはこのぐらいがちょうどいい。"
        img-src="../assets/Rig_Inamura4b.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'Pictures',
  data: function () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart: function (slide) {
      this.sliding = true
    },
    onSlideEnd: function (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>

</style>
