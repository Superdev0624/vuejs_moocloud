<template>
  <div>
    <Menu />
    <section data-pg-name="Page-Content" data-pgc-field="pagebody">
      <section data-pg-name="Apps & Scripts Hero" class="bg-light" data-pgc-define="moo.apps-hero" data-pgc-define-name="Apps Hero" data-pgc-define-description="The Hero of Apps Page">
        <div class="container pb-5 pt-5 text-center text-md-start">
          <div class="row">
            <div class="col-md-6 text-dark">
              <h1 class="display-1">
                Apps &amp; Script
              </h1>
              <h2>{{ $t('App_header') }}.&nbsp;</h2>
            </div>
            <div class="col-md-6 order-first order-md-last text-center">
              <img src="/img/Banner Condiviso dedicato 1.png" alt="" class="img-fluid" width="250px">
            </div>
          </div>
          <div class="mb-5 row">
            <div class="col-lg-3 col-md-6 mt-5">
              <div class="bg-primary card h-100 text-white">
                <div class="card-body">
                  <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" type="image/svg+xml" />
                  <h4 class="card-title i18n mt-3">
                    {{ $t('App_modal_tag_header1') }}
                  </h4>
                  <p class="card-text">
                    {{ $t('App_modal_tag_text1') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-5">
              <div class="bg-primary card h-100 text-white">
                <div class="card-body">
                  <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" data="/img/dedicato.svg" type="image/svg+xml" />
                  <h4 class="card-title i18n mt-3">
                    {{ $t('App_modal_tag_header2') }}
                  </h4>
                  <p class="card-text i18n">
                    {{ $t('App_modal_tag_text2') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-5">
              <div class="bg-primary card h-100 text-white">
                <div class="card-body">
                  <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" data="/img/condiviso gestito.svg" type="image/svg+xml" />
                  <h4 class="card-title i18n mt-3">
                    {{ $t('App_modal_tag_header3') }}
                  </h4>
                  <p class="card-text i18n">
                    {{ $t('App_modal_tag_text3') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mt-5">
              <div class="bg-primary card h-100 text-white">
                <div class="card-body">
                  <object width="75" class="mt-n5  position-absolute" style="right:0px; top:0px" data="/img/app.svg" type="image/svg+xml" />
                  <h4 class="card-title i18n mt-3">
                    {{ $t('App_modal_tag_header4') }}
                  </h4>
                  <p class="card-text i18n">
                    {{ $t('App_modal_tag_text4') }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div id="tags-container" class="col-md-8 col-xl-6">
              <button id="all" class="tag-btn btn btn-primary btn-sm m-1" type="button">
                Mostra tutto
              </button>
            </div>
          </div>
        </div>
      </section>
      <div class="" style="margin-bottom: -160px;">
        <svg
          viewBox="0 0 1440 185"
          preserveAspectRatio="none"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          class="d-block text-light"
          width="100%"
          height="160"
        >
          <path d="M 0 0 H 1440 V 60 C 1114 355 700 35 516 35 C 333 35 246 199 0 60 V 0 Z" />
        </svg>
      </div>
      <Applist
        @upData="finalData"
      />
      <div
        id="staticBackdrop"
        class="modal fade"
        data-bs-keyboard="true"
        focus="true"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div v-show="isModalVisible" class="modal-dialog modal-dialog-centered modal-lg" @click.self="toggleModal">
          <div class="modal-content">
            <div class="modal-header">
              <img id="appModalIcon" :src="data.iconUrl" class="me-3 rounded-circle" height="50px" data-pg-name="App Modal Icon">
              <div class="w-100">
                <h3 id="appModalName" class="modal-title">
                  {{ data.title }}
                </h3>
                <h6>{{ data.tagline }}</h6>
              </div>
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button">
                {{ modalID.manifest && modalID.manifest.version }}
              </button>
            </div>
            <Carousel
              :per-page="1"
              :mousewheel="true"
            >
              <Slide
                v-for="(kkk, index) in imageSlider"
                :key="index"
                class="text-center align-middle overflow hidden"
              >
                <img
                  :src="kkk"
                  class="img_carousel"
                ></img>
              </Slide>
            </Carousel>
            <div class="modal-body">
              <div>
                <dl class="row">
                  <dt class="col-sm-3">
                    Author
                  </dt>
                  <dd class="col-sm-9">
                    {{ modalID.manifest && modalID.manifest.author }}
                  </dd>
                  <dt class="col-sm-3">
                    Links
                  </dt>
                  <dd class="col-sm-9">
                    <a :href="contact" class="badge bg-primary me-1 add">Contact</a>
                    <a :href="doclink" class="badge bg-primary me-1 add">Documentation</a>
                    <a :href="Forum" class="badge bg-primary me-1 add">Forum</a>
                  </dd>
                </dl>
              </div>
              <div v-html="asd" />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-link" data-bs-dismiss="modal" @click=" exitModal ">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  },
  data () {
    return {
      isModalVisible: false,
      modalID: {},
      data: {},
      imageSlider: {},
      contact: '',
      doclink: '',
      Forum: '',
      asd: ''
    }
  },
  head: {
    title: 'Apps & Scripts | MooCloud',
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
      { rel: 'stylesheet', hef: 'css/blocks.css' }
    ],
    script: [
      { src: 'js/bootstrap.min.js' },
      { src: 'js/popper.min.js' },
      { src: 'https://use.fontawesome.com/releases/v5.13.1/js/all.js' },
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/markdown-it/12.2.0/markdown-it.min.js', integrity: 'sha512-cTQeM/op796Fp1ZUxfech8gSMLT/HvrXMkRGdGZGQnbwuq/obG0UtcL04eByVa99qJik7WlnlQOr5/Fw5B36aw==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' }
    ]
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales
    }
  },
  created () {
    this.selectedValue = this.$i18n.locale
  },
  methods: {
    onChange (event) {
      this.$router.replace(this.switchLocalePath(event))
    },
    finalData (modalID, data) {
      this.data = data
      this.modalID = modalID
      this.asd = ''
      this.contact = this.modalID.manifest && this.modalID.manifest.contactEmail
      this.doclink = this.modalID.manifest && this.modalID.manifest.documentationUrl
      this.Forum = this.modalID.manifest && this.modalID.manifest.forumUrl
      this.imageSlider = this.modalID.manifest && this.modalID.manifest.mediaLinks
      const description = this.modalID.manifest && this.modalID.manifest.description
      const myArray = description.split('\n')
      let value, convertValue, containValue, liValue
      // const tag = /\[([a-z]| |[0-9])*\]/ig
      // const link = /\(http(s|):\/\/([a-z]|[A-Z]| |_|-|.|\/\/|!|@|#|$|%|^|&|<|>|[0-9])*\)/g
      for (value = 0; value < myArray.length; value++) {
        let block = myArray[value]
        if (block.startsWith('#')) {
          while (block.startsWith('#')) {
            block = block.replace('#', '')
          }
          convertValue = block
          this.asd += ('<h3>' + convertValue + '</h3>')
        } else if (block.startsWith('**')) {
          block = block.replaceAll('**', '')
          containValue = block
          this.asd += ('<strong>' + containValue + '</strong>')
        } else if (block.startsWith('*')) {
          liValue = block.replace('*', '')
          this.asd += ('<li>' + liValue + '</li>')
        } else {
          this.asd += ('<p>' + block + '</p>')
        }
      }
      this.showModal()
    },
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    },
    exitModal () {
      this.closeModal()
    },
    toggleModal () {
      this.isModalVisible = !this.isModalVisible
    }
  }
}
</script>
<style scoped>
.img_carousel {
  width:100%;
  height:400px;
}
.add{
  text-decoration: none;
}
</style>
