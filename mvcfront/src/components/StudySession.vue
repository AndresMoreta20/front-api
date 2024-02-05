<template>
    <div>
      <h2>Study Session</h2>
      <!-- Session controls and flashcard display -->
      <div v-if="flashcard">
        <p>{{ flashcard.question }}</p>
        <!-- Assume your flashcard object has a property named 'question'. Adjust accordingly. -->
        <button @click="submitFeedback(true)">Remembered</button>
        <button @click="submitFeedback(false)">Forgot</button>
      </div>
      <button v-else @click="startSession('exampleTagName')">Start Session</button>
      <!-- Replace 'exampleTagName' with actual tag name or bind it dynamically -->
    </div>
  </template>
  
  <script>
  import { startStudySession, postFlashcardFeedback } from '../api';
  
  export default {
    data() {
      return {
        session: null,
        flashcard: null,
      };
    },
    methods: {
      startSession(tagName) {
        startStudySession(tagName).then((response) => {
          this.session = response.data.session_id;
          this.flashcard = response.data.flashcard;
        }).catch((error) => {
          console.error(error);
        });
      },
      submitFeedback(remembered) {
        if (this.session && this.flashcard) {
          postFlashcardFeedback(this.session, this.flashcard.id, remembered).then(() => {
            // Assuming the API response includes the next flashcard or a session end signal
            // You might want to update the current flashcard or handle session end here
            // For now, let's just log that feedback was submitted
            console.log('Feedback submitted');
            // Optionally fetch the next flashcard here or update the state to reflect the session's progress
          }).catch((error) => {
            console.error(error);
          });
        }
      },
    },
  };
  </script>
  