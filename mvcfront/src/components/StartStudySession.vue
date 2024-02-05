<template>
    <div>
      <input v-model="tagName" placeholder="Enter a tag name" />
      <button @click="startStudySession">Start Study Session</button>
    </div>
  </template>
  
  <script>
  import apiClient from '@/api';
  
  export default {
    data() {
      return {
        tagName: '',
      };
    },
    methods: {
      async startStudySession() {
        try {
          const response = await apiClient.post('/study_sessions/start/', { tag_name: this.tagName });
          // Guardar el session_id y redirigir o mostrar la primera flashcard
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  