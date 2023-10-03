<script setup>
import { ref, reactive, computed, watch } from "vue";

const employees = reactive(["Pyrczak, Jake", "Smith, John", "Russel, James", "Brick, Bob"]);
const employeeFirstName = ref("");
const employeeLastName = ref("");
const selectedEmployee = ref("");
const filterPrefix = ref("");

const isActiveCreate = ref(false);
const currentColor = ref('blue');
const currentSize = ref(25);

// 4 - Computed property
//Instead of using in template expressions to define some logic, we can use computed
// This is the function which takes the text from the input box, and checks which of the names match
const filteredEmployees = computed(() =>
    employees.filter((employee) => employee.toLowerCase().startsWith(filterPrefix.value.toLowerCase()))
);

// 9 Watcher
// This activley watches the input variable to look for any changes, when it detects a change it executes its callback function
//This allows us to reactivley repond to state changes
watch(selectedEmployee, (employee) => {
    [employeeLastName.value, employeeFirstName.value] = employee.split(", ");
});

// <!-- 7b - Method handler -->
// <!-- Here the function needed is longer and impractical for inline, so a function is instead called to happen on click -->
// This is the JS which is used by the on click
function createEmployee() {
    if (hasValidInput()) {
        const fullName = `${employeeLastName.value}, ${employeeFirstName.value}`;
        if (!employees.includes(fullName)) {
            employees.push(fullName);
            employeeFirstName.value = employeeLastName.value = "";
        }
    }
    isActiveCreate.value = !isActiveCreate.value;
}

function updateEmployee() {
    if (hasValidInput() && selectedEmployee.value) {
        const index = employees.indexOf(selectedEmployee.value);
        employees[index] = selectedEmployee.value = `${employeeLastName.value}, ${employeeFirstName.value}`;
    }
}

function deleteEmployee() {
    if (selectedEmployee.value) {
        const index = employees.indexOf(selectedEmployee.value);
        employees.splice(index, 1);
        selectedEmployee.value = employeeFirstName.value = employeeLastName.value = "";
    }
}

function hasValidInput() {
    return employeeFirstName.value.trim() && employeeLastName.value.trim();
}
</script>

<template>
    <div class="container">
        <div><input v-model="filterPrefix" placeholder="Filter prefix" /></div>

        <select size="5" v-model="selectedEmployee">
            <!-- 1c - v-bind -->
            <!-- This example uses the shorthand of v-bind which is : , it is used to bind an element  -->
            <!-- Here that element is :key, which is bound to the employee variable -->
            <option v-for="employee in filteredEmployees" :key="employee">{{ employee }}</option>
        </select>

        <br>
        <div class="input-group">
            <label class="label">Name:</label> <input class="input-field" v-model="employeeFirstName" />
        </div>
        <div class="input-group">
            <label class="label">Surname:</label> <input class="input-field" v-model="employeeLastName" />
        </div>

        <!-- 5a and 5b - bind HTML class and inline style -->
        <!-- This can be used to dynamically bind CSS stuff to attribute depending on the value or conditions -->
        <!-- Here class is swapped if the button is pressed -->
        <!-- Then for style it changes based on a variables value, which can be altered -->
        <div class="buttons">
            <button @click="createEmployee" :class="{ active: isActiveCreate }">Create</button>
            <button @click="updateEmployee"
                :style="{ backgroundColor: currentColor, fontSize: currentSize + 'px' }">Update</button>
            <button @click="deleteEmployee">Delete</button>
        </div>
        <!-- 7b - Method handler -->
        <!-- ABOVE Here the function needed is longer and impractical for inline, so a function is instead called to happen on click -->
    </div>
</template>

<style scoped>
.container {
    margin-top: 50px;
    background-color: black;
    text-align: center;
    color: green;
    padding: 20px;
    border-radius: 6px;
}

input,
select {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
    border: 1px solid green;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 80%;
    box-sizing: border-box;
}

.input-group {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.label {
    text-align: left;
    width: 80px;
    /* Set the width of the label as needed */
    margin-right: 10px;
}

.input-field {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
    border: 1px solid green;
    padding: 10px;
    border-radius: 5px;
    width: 100%;
    box-sizing: border-box;
}

select {
    width: 100%;
    max-width: 300px;
}

.buttons {
    margin-top: 20px;
}

button {
    background-color: green;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
    transition: 0.5s;
}

button:hover {
    background-color: darkgreen;
    transition: 0.5s;
}


button:disabled {
    background-color: gray;
    cursor: not-allowed;
}

.active {
    background-color: red;
    transition: 0.5s;
}

.active:hover {
    background-color: darkred;
    transition: 0.5s;
}
</style>