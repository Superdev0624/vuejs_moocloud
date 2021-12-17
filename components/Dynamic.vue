<template>
  <div class="d-flex align-items-center mt-n5 container">
    <div class="swiper-container mySwiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-autoheight">
      <Carousel
        :per-page="2"
        :mousewheel="true"
        :mouseDrag="true"
        :perPageCustom='[[280, 1], [320, 1], [375, 1], [500, 2], [540, 2], [576, 2], [640, 2], [768, 3], [1024, 3], [1199, 4]]'
        :scrollPerPage="true"
        :minSwipeDistance="2"
      >
        <Slide
          v-for="(data, index) in plan"
          :key="index"
        >
          <PlanCard
            :data="data"
            :index="index"
            :transCurrency="onselectCurrency || 'EUR'"
            :transPeriod="onselectPeriod || 'MONTH'"
          />
        </Slide>
        <div v-show="loading" id="app" class="text-center">
          <Spinner />
          <p>Loading...</p>
        </div>
      </Carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
import Spinner from 'vue-simple-spinner'
import axios from 'axios'
export default {
  components: {
    Carousel,
    Slide,
    Spinner
  },
  props: {
    family: {
      type: String,
      required: true
    },
    onselectCurrency: {
      type: String,
      required: true
    },
    onselectPeriod: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      plan: {},
      loading: true,
      transCurrency: '',
      transPeriod: ''
    }
  },
  head: {
    title: 'Managed-Hosting | MooCloud',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'MooCloud. Il service provider svizzero più semplice e veloce' },
      { name: 'author', content: 'MooCloud' },
      { name: 'keywords', content: 'hosting provider web apps' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'css/bootstrap.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap' },
      { rel: 'stylesheet', href: 'css/blocks.css' },
      { rel: 'stylesheet', href: 'css/swiperStyle.css' }
    ],
    script: [
      { src: 'js/bootstrap.min.js' },
      { src: 'js/popper.min.js' },
      { src: 'https://use.fontawesome.com/releases/v5.13.1/js/all.js' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' }
    ]
  },
  created () {
    axios
      .get('https://obj.tools.moocloud.ch/items/Products?fields[]=*.*')
      .then((response) => {
        if (response) {
          this.loading = false
        }
        if (this.family === 'shared') {
          this.plan = JSON.parse(JSON.stringify(response.data)).data.filter((plan) => {
            return plan.family === 'shared'
          })
        } else if (this.family === 'dedicated') {
          this.plan = JSON.parse(JSON.stringify(response.data)).data.filter((plan) => {
            return plan.family === 'dedicated'
          })
        }
      })
  }
}

</script>
<style scoped>
</style>
