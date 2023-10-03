<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ul>
      <!-- 6a - v-for with an object -->
      <!-- This iterates through every part of the object and  displays its value-->
      <li v-for="value in TestObject">
        {{ value }}
      </li>
    </ul>
    <br />
    <!-- 6b - v-for with a range -->
    <!-- This iterates over and performes the tag for the specified range, here the range depends on a variables value -->
    <span v-for="n in 10">Iteration number: {{ n }} <br /></span>
  </div>
  <br />

  <div>
    <!-- 8a - v-model of different form bindings -->
    <!-- For the 5 below div blocks, v-model is used to bind some form of user input to a variable, 
        this means the input itself is tied to the variable, which can then be saved, or displayed etc -->
    <label for="textInput">Text Input:</label>
    <input type="text" id="textInput" v-model.lazy="textInput" />
    <p>Text Input Value: {{ textInput }}</p>
    <!-- 7a - another inline event handler -->
    <button @click="textInput = 'Text Here'">Change Text</button>
  </div>
  <!-- 8b - v-model modifiers -->
  <!-- the ABOVE block used the modifier .lazy to lazy load the input modeling, so the variable is only updated after a change, not input -->
  <div>
    <label for="text2">Text Input:</label>
    <input type="text" id="text2" v-model="text2" />
    <p>Text Input Value: {{ text2 }}</p>
  </div>

  <div>
    <label for="checkboxInput">Checkbox:</label>
    <input type="checkbox" id="checkboxInput" v-model.trim="checkboxInput" />
    <p>Checkbox Value: {{ checkboxInput }}</p>
  </div>
  <!-- 8b - v-model modifiers -->
  <!-- Another modifer .trim, this trims out white space from a users input -->
  <div>
    <label for="radioInput1">Radio 1:</label>
    <input type="radio" id="radioInput1" v-model="radioInput" value="option1" />
    <label for="radioInput2">Radio 2:</label>
    <input type="radio" id="radioInput2" v-model="radioInput" value="option2" />
    <p>Selected Radio Value: {{ radioInput }}</p>
  </div>

  <div>
    <label for="selectInput">Select:</label>
    <select id="selectInput" v-model="selectInput">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    <p>Selected Option: {{ selectInput }}</p>
  </div>
  <!-- 8b - v-model modifiers -->
  <!-- another modifier .number, changes the variable type of the input to a number if possible-->
  <div>
    <label for="textareaInput">Textarea:</label>
    <textarea id="textareaInput" v-model.number="textareaInput"></textarea>
    <p>Textarea Value: {{ textareaInput }}</p>
    <p>Textarea Type: {{ typeof textareaInput }}</p>
  </div>

  <ul>
    <!-- 1c - v-bind -->
    <!-- v-bind allows the {{  }} to be used inside HTML attribute tags, below is using the shorthand :-->
    <!-- This example uses the shorthand of v-bind which is : , it is used to bind an element  -->

    <!-- 6c - v-for with a template -->
    <!-- This iterates over the given items list, for which it renders an entire template block, good for things like posts -->
    <!-- 6d - v-for with v-if -->
    <!-- Displays each of the items in the v-for but only dynamically renders the text if a conditions is matched for each v-for item -->
    <template v-for="item in items" :id="item.id">
      <li>{{ item.msg }}</li>
      <li v-if="item.id % 2 === 0">This will appear for every 2nd iteration</li>
      <br />
    </template>
  </ul>
  <br />
  <!-- 7a - Inline event handler -->
  <!-- This is an event handler for v-on:click and its inline as the functionality is defined in the html tag to count up or down -->
  <button @click="counter++">Add 1</button>
  <button @click="counter--">Subtract 1</button>
  <p>Count is: {{ counter }}</p>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

div {
  margin-bottom: 20px;
}
</style>

<script setup>
import { ref } from "vue";
// 3 - Reactivity Fundamentals
// Using script setup and ref, onMounted
const counter = ref(0);
const textInput = ref("");
const checkboxInput = ref(false);
const radioInput = ref("option1");
const selectInput = ref("option1");
const textareaInput = ref("");
const text2 = ref("       Hello          ");

const TestObject = {
  title: "Using v-for in a object",
  author: "Jane Doe",
  date: "2023-08-15",
};

const items = [
  { id: 1, msg: "Item 1" },
  { id: 2, msg: "Item 2" },
  { id: 3, msg: "Item 3" },
  { id: 4, msg: "Item 4" },
  { id: 5, msg: "Item 5" },
  { id: 6, msg: "Item 6" },
];
</script>
