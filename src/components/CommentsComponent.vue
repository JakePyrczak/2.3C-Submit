<template>
    <div class="comment-post">


        {{ userName }}
        <br>
        <!-- 1b - v-RawHtml -->
        <!-- Allows you to render variables which contain HTML content as HTML instead of just text-->
        <span v-html="userName"></span>
        <br>
        User Id: {{ id }}
        <br>
        {{ time }}
        <br>
        <!-- Id: <span v-html="formattedId"></span>
        <br> -->
        Description:
        <p class="comment-text">{{ body }}</p>
        <!-- PART 1 BUTTON FONT : MAKE AN $emit-->
        <button @click="$emit('increase-size')">Increase Font</button>
        <button @click="$emit('decrease-size')">Decrease Font</button>
        <!-- 10b - emit -->
        <!-- This can be used in combination in thing like v-on to executed functions inside a $emit from a component -->
        <!-- Such that when the component is in use, the emit name can be used to pass in some function which is used -->
        <!-- Very useful as it allow different functions to be used in the same component depending on what is passed to it in use -->
        <!-- PART 1 BUTTON SLOT : Create a new button -->
        <button>Button Without a SLOT</button>
        <button>
            <slot></slot>
        </button>
        <!-- 10c - slots -->
        <!-- Both above and below slot objects are used, this allows us to "slot" in some to the parent provided slot content-->
        <!-- The first one is empty with no attribution -->
        <!-- This second slots in a value based on the footer tag, it is used to display the value of the Users ID-->
        <!-- Can be used for a button which can display something like current page on the next/prev page button -->
        <!-- This is a named slot -->
        <footer>
            <slot name="footer">
            </slot>
        </footer>

    </div>
</template>

<script setup>
//create the props
//10a - props
//Vue components require the use of props which can then be assigned values from passed in values, and are treated as fallthrough attributes
//Here we define our variables which we will render
const props = defineProps({
    userName: String,
    id: Number,
    time: String,
    body: String,
});


</script>

<style scoped>
.comment-post {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.comment-text {
    margin-bottom: 10px;
}
</style>
