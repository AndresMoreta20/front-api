<template>
    <div>
      <h1>Study Session</h1>
      <div v-if="flashcard">
        <p>Question: {{ flashcard.question }}</p>
        <button @click="submitFeedback(true)">Remembered</button>
        <button @click="submitFeedback(false)">Forgot</button>
      </div>
      <div v-else>
        <input type="text" v-model="tagName" placeholder="Enter tag name to start">
        <button @click="startSession">Start Session</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        session: null,
        flashcard: null,
        tagName: '',
      };
    },
    methods: {
      startSession() {
        axios.post('http://localhost:8000/api/start-study-session/', { tag_name: this.tagName })
          .then(response => {
            this.session = response.data.session_id;
            this.flashcard = response.data.flashcard;
          })
          .catch(error => {
            console.error("Error starting session:", error);
            alert("Failed to start session. Make sure you have entered a valid tag name.");
          });
      },
      submitFeedback(remembered) {
        if (!this.session || !this.flashcard) {
          alert("Session or flashcard not found.");
          return;
        }
        axios.post(`http://localhost:8000/api/flashcard-feedback/${this.session}/`, {
          flashcard_id: this.flashcard.id,
          remembered: remembered
        })
          .then(response => {
            if (response.data.flashcard) {
              this.flashcard = response.data.flashcard; // Load next flashcard
            } else {
              this.endSession();
            }
          })
          .catch(error => {
            console.error("Error submitting feedback:", error);
          });
      },
      endSession() {
        // Resetting the session data or redirecting the user to a summary page could be done here
        this.flashcard = null;
        this.session = null;
        alert("Study session completed!");
      },
    }
  };
  </script>
  