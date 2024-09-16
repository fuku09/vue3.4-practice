<template>
    <div class="taskListArea">
        <div class="taskArea" id="" v-for="(task, index) in taskList" :key="index">
            <span class="taskText">{{ task }}</span>
            <button @click="removeTask(index)">削除</button>
        </div>
    </div>
</template>

<script setup lang="ts">
const taskList = defineModel();

const removeTask = (index: number) => {
    taskList.value.splice(index, 1);
}
</script>

<style scoped>
.taskListArea {
    border: solid;
    background-color: aliceblue;
    height:500px;
    margin-top: 10px;
    text-align: center;
}
.taskArea {
    background-color: aqua;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 5px;
    display: flex;
    align-items: center;
}
.taskText {
    flex: 1;
    margin-right: 10px;
    text-align: left;
}
.taskArea button{
    background-color: crimson;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
}
</style>