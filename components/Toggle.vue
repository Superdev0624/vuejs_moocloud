<template>
  <div class="pb-5">
    <div class="container">
      <div class="row">
        <div class="col-8 col-md-3 col-sm-5">
          <ul
            class="mb-3 nav nav-pills p border border-primary rounded nav-fill"
            role="tablist"
          >
            <li class="nav-item" v-for="item in items" :key="item.value">
              <a
                id="chf-selector"
                class="nav-link"
                v-bind:class="{active: item.value == 'MONTH' }"
                href="#"
                data-bs-toggle="tab"
                role="tab"
                aria-controls=""
                aria-expanded="true"
                aria-selected="true"
                v-on:click="onSelectedValue(item)"
                >
                 {{ $t(item.value) }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { value: 'MONTH' },
        { value: 'YEAR' }
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
    onSelectedValue (item) {
      this.$emit('periodChange', item.value)
    }
  }
}
</script>
