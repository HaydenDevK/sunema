<template>
  <section v-if="$store.state.keywordSearch.mediaKeywords.length > 0" class="wrapper-btn-type">
    <button
      class="btn-type"
      @click="$store.dispatch('keywordSearch/getKeywordMediaElse', 'movie')"
    >
      <p :class="{active: $store.state.keywordSearch.mediaType === 'movie'}">
        영화
      </p>
    </button>
    <button class="btn-type" @click="$store.dispatch('keywordSearch/getKeywordMediaElse', 'tv')">
      <p :class="{active: $store.state.keywordSearch.mediaType === 'tv'}">
        티비 프로그램
      </p>
    </button>
  </section>
</template>

<script>
export default {
  name: 'TabMediaType.vue'
}
</script>

<style scoped>

</style>
