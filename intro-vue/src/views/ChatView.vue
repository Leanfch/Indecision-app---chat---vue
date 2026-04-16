<script setup lang="ts">
import { ref } from 'vue';
import ChatMessages from '../components/chat/ChatMessages.vue';
import MessageBox from '../components/chat/MessageBox.vue';
import type { ChatMessage } from '../interfaces/chat-message-interface';

const messages = ref<ChatMessage[]>([
    {
        id: new Date().getTime() + Math.random(),
        message: 'Hola',
        itsMine: true,
    },
    {
        id: new Date().getTime() + Math.random() + 1,
        message: 'Chau',
        itsMine: false,
        image: "https://yesno.wtf/assets/no/17-829284e9dd894ce9fb65fbe86d2e382c.gif"
    },
])

</script>

<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessages :messages="messages"/>

    <MessageBox />
  </div>
</template>