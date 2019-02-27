export default {
  async serverPrefetch() {
    if (this.$options && typeof this.$options.fetch === 'function') {
      await this.$options.fetch.call(this, this.$nuxt.$options.context)
    }
  }
}
