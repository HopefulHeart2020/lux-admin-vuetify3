<!--
* @Component: 
* @Maintainer: J.K. Yang
* @Description: 
-->
<script setup lang="ts">
import { useChatStore } from "@/views/app/chat/chatStore";

const chatStore = useChatStore();

const close = () => {
  chatStore.apiKeyDialog = false;
};

const key = computed({
  get: () => chatStore.apiKey,
  set: (value) => {
    chatStore.saveApiKey(value); // 假设您有一个名为setApiKey的Pinia store mutation
  },
});
</script>

<template>
  <v-dialog v-model="chatStore.apiKeyDialog" width="600">
    <v-card>
      <v-card-title> 请输入您的API KEY </v-card-title>
      <hr />
      <v-card-text>
        <v-text-field
          color="primary"
          label="API KEY"
          v-model="key"
          class="px-2 py-1"
          placeholder="API KEY"
          prepend-inner-icon="mdi-key"
          autofocus
          clearable
          hide-details
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn block color="primary" text @click="close">确定</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped lang="scss"></style>