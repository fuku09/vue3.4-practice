<template>
    <div class="TaskInputArea">
        <input v-model="taskName" placeholder="Taskを入力してください">
        <button @click="addTask">追加</button>
    </div>
</template>

<script setup lang="ts">
const taskName = defineModel<string>('taskName');
const taskList = defineModel<string []>('taskList');

const addTask = () => {
    taskList.value.push(taskName.value);
    taskName.value = '';
}
</script>

<style scoped>
.TaskInputArea {
    text-align: center;
    width: auto;
    height: 75px;
    border: solid;
    background-color: aquamarine;
}

.TaskInputArea button {
    background-color: black;
    color: white;
}

.TaskInputArea button:hover {
    cursor: pointer;
}
.TaskInputArea input {
    margin-right: 5px;
}
</style>