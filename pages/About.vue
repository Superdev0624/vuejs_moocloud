<template>
  <div>
    <Menu />
    <section data-pg-name="Page-Content" data-pgc-field="pagebody">
      <section data-pg-name="Chi Siamo" title="chi-siamo">
        <div class="container mt-5 text-center">
          <div>
            <h1 class="display-1">
              {{ $t('About_header') }}
            </h1>
            <h4 class="display-4">
              {{ $t('About_explain1') }}<br>
              {{ $t('About_explain2') }}<br>
              {{ $t('About_explain3') }}
            </h4>
          </div>
          <img src="/img/MockUp_Chi%20siamo%20copy-03.svg" class="mx-n5 my-3">
          <div>
            <h2>{{ $t('About_txt_tag_title1') }}</h2>
            <h5>{{ $t('About_txt_tag_text1-1') }}<br>{{ $t('About_txt_tag_text1-2') }}</h5>
          </div>
        </div>
      </section>
      <section class="bg-light mt-5 py-5" data-pg-name="about-us-info">
        <div class="container ">
          <div class="row">
            <div class="col-md-4">
              <div class="d-flex justify-content-center w-100">
                <img src="/img/png/Banner%20Condiviso%20dedicato%201.png" width="150">
              </div>
              <h3 class="display-3 i18n">
                {{ $t('About_txt_tag_title2') }}
              </h3>
              <p class="i18n">
                {{ $t('About_txt_tag_text2') }}
              </p>
            </div>
            <div class="col-md-4">
              <div class="d-flex justify-content-center w-100">
                <img src="/img/png/Banner%20Mail%203.png" width="150">
              </div>
              <h3 class="display-3 i18n">
                {{ $t('About_txt_tag_title3') }}
              </h3>
              <p class="i18n">
                {{ $t('About_txt_tag_text3') }}
              </p>
            </div>
            <div class="col-md-4">
              <div class="d-flex justify-content-center w-100">
                <img src="/img/png/Banner%20HOSTING%20CONDIVISO%203.png" width="150">
              </div>
              <h3 class="display-3 i18n">
                {{ $t('About_txt_tag_title4') }}&nbsp;
              </h3>
              <p class="i18n">
                {{ $t('About_txt_tag_text4') }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <Footer />
  </div>
</template>
<script>
export default {
  head: {
    title: 'About_us | MooCloud',
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
    }
  }
}
</script>
