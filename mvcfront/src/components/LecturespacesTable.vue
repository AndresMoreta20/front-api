<template>
    <div>
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
    </div>
  </template>
  
  <script>
  import { getLecturespaces } from '../api';
  
  export default {
    data() {
      return {
        lecturespaces: [],
      };
    },
    mounted() {
      getLecturespaces().then(response => {
        this.lecturespaces = response.data;
      }).catch(error => {
        console.error(error);
      });
    },
  };
  </script>
  