<template>
  <div>
    <button @click="getUserRequest()" >Button</button>
  </div>
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
      console.log('response', response)
      console.log('response.data.user', response.data.user)
    }
  }
})
</script>
