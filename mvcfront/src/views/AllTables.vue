<template>
    <div>
      <h1>All Tables</h1>
      <!-- Table for Lecturespaces -->
      <h2>Lecturespaces</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="lecturespace in lecturespaces" :key="lecturespace.id">
            <td>{{ lecturespace.id }}</td>
            <td>{{ lecturespace.name }}</td>
            <td>{{ lecturespace.description }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Table for Flashcards -->
      <h2>Flashcards</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="flashcard in flashcards" :key="flashcard.id">
            <td>{{ flashcard.id }}</td>
            <td>{{ flashcard.question }}</td>
            <td>{{ flashcard.answer }}</td>
          </tr>
        </tbody>
      </table>
  
      <!-- Table for Tags -->
      <h2>Tags</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tag in tags" :key="tag.id">
            <td>{{ tag.id }}</td>
            <td>{{ tag.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  