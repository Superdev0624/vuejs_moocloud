<template>
  <div>
    <span class="display-3">
      {{ parseFloat(price / 100) || 0 }}
    </span>
    <span>
      /{{ currency }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    currency: {
      type: String,
      requried: true
    },
    price: {
      type: Number,
      required: true
    },
    interval: {
      type: String,
      required: true
    }
  }
}
</script>
