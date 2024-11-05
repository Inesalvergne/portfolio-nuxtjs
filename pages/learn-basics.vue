<template>
  <div>
    <h1>Counter : {{ count }} </h1>
    <div v-html="firstName"></div>
    <button class="btn-primary" @click="increment">Increment</button>

    <!-- <p v-show="count >=5">Congrats! you clicked 5 times</p> -->
    <!-- OR -->
    <p v-if="count >= 5">Congrats! you clicked 5 times</p>
    <p v-else> Click on the button !</p>

    <!-- <p v-bind:id="count">Count : {{ count }}</p> -->
    <p :id="count">Count : {{ count }}</p>

    <p :style="`color: ${count >= 5 ? 'green' : 'red'}`">Color changes</p>
    <p :class="{active: count >= 5}">Active class if count > 5</p>

    <hr class="my-10">

    <form action="" @submit.prevent="addMovie">
      <input type="text" placeholder="Type a movie" v-model="movieName">
      <button class="btn-primary" @click="addMovie">Add</button>
    </form>
    <ul class="mt-10">
      <li v-for="movie in movies" :key="movie">
        {{ movie }}
        <button @click="deleteMovie(movie)" class="underline">Delete</button>
      </li>

      <button @click="sortMovies(movies)" class="btn-primary mt-3">Sort movies</button>
    </ul>
  </div>
</template>

<script setup>
  import {ref} from 'vue'

  // ref takes as a params the initial value of the variable
  // it creates an object that has a 'value' property
  // v-on OR @ --> is the equivalent of an event listener

  // v-show to display an element
  // v-hide to hide an element
  // v-if will delete an element from the DOM
  // v-else

  // v-bind ou ":" for dynamic attributes

  // v-html --> to inject HTML // but not recommended because of potential injections

  // v-for to loop through arrays and objects / to be used with key attribute to identify elements

  // v-model --> to bind a value to a component

  // @submit.prevent = "functionName" --> to prevent the default behavior of the form

  const count = ref(0)

  const firstName = '<span>Demo</span>'

  const increment = (event) => {
    // equivalent of an event listener
    console.log(event);
    count.value++
  }

  const movies = ref(['The Godfather', 'The Godfather: Part II', 'The Dark Knight', 'Zozo', 'Abon!'])
  const movieName = ref('')

  const deleteMovie = (movie) => {
    movies.value = movies.value.filter(m => m !== movie)
  }

  const sortMovies = (movies) => {
    movies.sort()
  }

  const addMovie = () => {
    movies.value.push(movieName.value)
    movieName.value = ''
  }
</script>
