<template>
  <div>
    <div>
      <br />
      <b-button class="btn-info btn-block" @click="makeNotice">JJ1POW局へようこそ（プッシュしてね）</b-button>
      <br />
    </div>
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
        caption="JJ1POW局は移動専門"
        text="ここ稲村ヶ崎からはEスポ発生時にときどきオンエアします"
        img-src="../assets/header.jpg"
      ></b-carousel-slide>
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="JJ1POW局のQRPリグ"
        text="このIC-502が中心リグになります。アナログ機なので周波数カウンタが必要なんです。"
        img-src="../assets/Rig_Inamura2.jpg"
      ></b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
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
    },
    makeNotice: function () {
      this.$bvToast.toast(`本局のオンエアーをキャッチするのは難しいのです。だって6mQRP移動専門だからです。まるで幽霊部員みたいな局で、しかもJARL非会員。だけどQSLカードは交信したあとにオリジナルカードを毎回作ってます。そのため本局のQSLカードはとても貴重なんです。`, {
        title: 'ありがとうぅ',
        autoHideDelay: 5000
      })
    }
  }
}
</script>
