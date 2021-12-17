<template>
  <div>
    <div class="mb-2">
      <p class="card-text">
        {{ label }}
      </p>
      <div class="progress" style="w-50">
        <div class="progress-bar" :style="bar_width" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      requried: true
    },
    value: {
      type: Number,
      required: true
    }
  },
  computed: {
    bar_width () {
      return {
        width: `${this.value}%`
      }
    }
  }
}
</script>
