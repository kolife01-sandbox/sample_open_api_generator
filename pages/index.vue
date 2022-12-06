<template>
  <Tutorial/>
</template>

<script lang="ts">
import Vue from 'vue'
import { userApi } from '../api/';

export default Vue.extend({
  name: 'IndexPage',
  methods: {
    async getUserRequest() {
      const userId = 'xxx'
      const response = await userApi.getUserId(userId)
    }
  }
})
</script>
