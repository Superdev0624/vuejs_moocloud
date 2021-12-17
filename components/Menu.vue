<template>
  <div>
    <section data-pg-name="Menu" data-pgc="moo.topbar">
      <nav class="bg-dark font-weight-bold justify-content-center navbar navbar-expand pb-0 pt-0">
        <div class="container-md justify-content-end ml-0 mr-0 pb-1 pe-2 pl-0 pr-0 ps-2 pt-1 top-bar-navbar">
          <ul class="align-items-center justify-content-end m-0 navbar-nav p-0">
            <li class="active nav-item pl-2 pr-2">
              <a class="nav-link text-white" href="https://support.moocloud.ch">{{ $t('Support') }}</a>
            </li>
            <li class="active nav-item pl-2 pr-2">
              <a class="nav-link text-white" href="https://status.moocloud.ch/">{{ $t('Status') }}</a>
            </li>
            <li class="active nav-item pl-2 pr-2">
              <a class="nav-link text-white" href="https://easymanager.moocloud.ch/login" tabindex="-1" aria-disabled="true">{{ $t('Login') }}</a>
            </li>
            <li class="active d-inline-flex ms-2 nav-item p-0 pr-2" style="height: 2rem;">
              <select id="currencySelector" v-model="selectedCurrency" aria-label="Default select example" class="form-select form-select-sm w-auto" @change="change(selectedCurrency)">
                <option
                  v-for="(option, index) in options"
                  :key="index"
                  :v-bind:value="option.value"
                >
                  {{ option.text }}
                </option>
              </select>
            </li>
            <li class="active d-inline-flex ms-2 nav-item p-0 pr-2" style="height: 2rem;">
              <select id="languigeSelector" v-model="selectedValue" aria-label="Default select example" class="form-select form-select-sm w-auto" @change="onChange(selectedValue)">
                <option
                  v-for="(locale, index) in $i18n.locales"
                  :key="index"
                  :value="locale.code"
                >
                  {{ locale.name }}
                </option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="PrimariMenu" class="justify-content-center navbar navbar-expand-md sticky-top text-right">
        <div class="container-md ml-0 mr-0 pl-0 pr-0">
          <a class="navbar-brand pb-0 pt-0" href="/"><img src="/img/moocloud-logo" alt="MooCloud" height="50"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              class="svg-inline--fa fa-bars fa-w-14 fa-lg"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
            </svg>
            <!-- <i class="fa-bars fa-lg fas"></i>-->
          </button>
          <div id="navbarNav" class="collapse flex-row-reverse font-weight-bolder fw-bolder navbar-collapse">
            <ul class="navbar-nav">
              <li class="active clearfix nav-item pl-2 pr-2 top-main-menu">
                <NuxtLink class="nav-link" to="/Managed_Hosting">
                  {{ $t('nav1') }}
                </NuxtLink>
              </li>
              <li class="active clearfix nav-item pl-2 pr-2 top-main-menu">
                <NuxtLink class="nav-link" to="/Cloud_Managed">
                  {{ $t('nav2') }}
                </NuxtLink>
              </li>
              <li class="active clearfix nav-item pl-2 pr-2">
                <NuxtLink class="nav-link" to="/Apps">
                  {{ $t('nav3') }}
                </NuxtLink>
              </li>
              <li class="nav-item pl-2 pr-2">
                <NuxtLink class="nav-link" to="/About">
                  {{ $t('nav4') }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedValue: '',
      selectedCurrency: 'EUR',
      options: [
        { text: 'EUR', value: 'EUR' },
        { text: 'CHF', value: 'CHF' }
      ]
    }
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
      console.log(event)
      this.$i18n.setLocaleCookie(event)
      this.$router.replace(this.switchLocalePath(event))
    },
    change (selectedCurrency) {
      this.$emit('currencyChanged', selectedCurrency)
    }
  }
}
</script>
