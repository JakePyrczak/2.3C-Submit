<template>
    <!-- PART 4 BUTTON FONT : Style Bind -->
    <div :style="({ fontSize: postFontSize + 'em' }, { fontSize: postFontSize - 'em' })
        ">
        <!-- THIS DISPLAYS THE LOCAL JSON FILE INFO -->
        <ol v-for="data in datalist">
            {{data.id}}:
            {{data.title}}
            <br />
            <!-- 1d - JavaScript Expressions -->
            <!-- Here inside a {{  }} we apply a function to show that JS expressions can be used-->
            {{data.id}}:
            {{data.title.split("").reverse().join("")}}
            <br />
            <!-- <div v-on:click="alterText(data.title)">
                {{ data.id }}: {{ data.title }}
            </div> -->
        </ol>

        Project Page Stuff

        <!--Will show the json data posts stuff here-->
        <!-- 6e - v-for with a component -->
        <!-- for a component object, will render it multuple times for each specified input range -->
        <!-- Here the componented is used to render all of the comments, so for runs the component for each data list -->
        <div class="comment-container">
            <CommentsComponent v-for="comment in comments" :key="comment.id" :userName="comment.userName" :id="comment.id"
                :time="comment.time" :body="comment.body" @increase-size="increaseSize" @decrease-size="decreaseSize">
                <!-- ABOVE PART 2 BUTTON FONT : project component -->

                <!-- PART 2 SLOT -->
                {{ comment.id }}

                <!-- Use of name slot footer -->
                <template #footer> This is Name SLOT </template>
            </CommentsComponent>
        </div>

        <!-- 1c - v-bind - this is an example of a bunch of bindings being used, this is so we can pass in the value of the post -->
        <!-- so it can be rendered and proccessed by the component -->
        <!--This is project components here-->
        <div class="comment-container">
            <ProjectsComponents v-for="post in posts" :key="post.id" :id="post.id" :title="post.title" :body="post.body"
                @increase-size="increaseSize" @decrease-size="decreaseSize">
                <!-- ABOVE PART 2 BUTTON FONT : project component -->

                <!-- PART 2 SLOT -->
                {{ post.id }}
                <!-- Here the slot is filled with the post id -->
                <!-- Use of name slot footer -->
                <template #footer> This is Name SLOT </template>
            </ProjectsComponents>
        </div>
    </div>
</template>

<script setup>
// 3 - Reactivity Fundamentals
// Using script setup and ref, onMounted
import { ref, onMounted, createApp } from "vue";
import ProjectsComponents from "../components/ProjectsComponents.vue";
import CommentsComponent from "../components/CommentsComponent.vue";

const posts = ref([]);

const fetchposts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        //Populate the post list with data from the json
        posts.value = data;
    } catch (error) {
        console.error("Error fetching data...", error);
    }
};

onMounted(fetchposts);

// PART 3 BUTTON FONT FUNCTION : make the function to change font
const postFontSize = ref(1);
function increaseSize() {
    postFontSize.value += 1;
}
// 2 - Methods and Functions
// Some Functions & Functions here to perform things, this increments a counter
function decreaseSize() {
    postFontSize.value -= 1;
}

// LOAD THE LOCAL JSON FILE FOR USE
import datafile from "../data/file.json";
const datalist = ref(datafile.projects);
const comments = ref(datafile.comments);

// 2 - Methods and Functions
// Some Functions & Functions here to perform things, this appends text to the input text, and then reverses it
const app = createApp({
    data() {
        return {
            text: "",
        };
    },
    methods: {
        alterText(string) {
            this.text = string;
            this.text = this.text + "ALTER TEXT";
            this.text = this.text.split("").reverse().join("");
        },
    },
});
</script>

<style scoped>
.div {
    width: 100%;
    height: 100%;
    border-style: solid;
    padding: 10px;
}

.comment-container {
    width: 100%;
    max-width: 600px;
    /* Adjust the maximum width as needed */
    margin: 0 auto;
    /* Center the container */
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    color: black;
}
</style>
