<template>
    <div class="comment-post">

        This code is from the Projects Component Section

        <!-- 1a - Text Interpolation -->
        <!-- Basic form of data binding, uses {{  }} where the input is replaced with the value of the variable-->
        <br>
        Title: {{ title }}
        <br>
        Id: {{ id }}
        <br>
        Description:
        <p class="comment-text">{{ body }}</p>
        <!-- PART 1 BUTTON FONT : MAKE AN $emit-->
        <!-- 10b - emit -->
        <!-- This can be used in combination in thing like v-on to executed functions inside a $emit from a component -->
        <!-- Such that when the component is in use, the emit name can be used to pass in some function which is used -->
        <!-- Very useful as it allow different functions to be used in the same component depending on what is passed to it in use -->
        <button @click="$emit('increase-size')">Increase Font</button>
        <button @click="$emit('decrease-size')">Decrease Font</button>

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
//10a - props
//Vue components require the use of props which can then be assigned values from passed in values, and are treated as fallthrough attributes
//Here we define our variables which we will render
const props = defineProps({
    title: String,
    id: Number,
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
