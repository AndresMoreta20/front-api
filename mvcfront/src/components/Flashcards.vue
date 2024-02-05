<template>
    <div v-if="flashcard">
      <h2>{{ flashcard.title }}</h2>
      <p>{{ flashcard.content }}</p>
      <button @click="getNextFlashcard">Next Flashcard</button>
    </div>
  </template>
  
  <script>
  import apiClient from '@/api';
  
  export default {
    data() {
      return {
        flashcard: null,
        sessionId: null, 
      };
    },
    methods: {
      async getNextFlashcard() {
        try {
          const response = await apiClient.get(`/study_sessions/${this.sessionId}/next/`);
          this.flashcard = response.data.next_flashcard;
        } catch (error) {
          console.error(error);
        }
      },
    },
    mounted() {
      this.getNextFlashcard();
    },
  };
  </script>
  