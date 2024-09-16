<template>
    <div>
        <TaskInput v-model:taskName="taskName" v-model:taskList="taskList"/>
        <TaskList v-model="taskList" />
    </div>
</template>

<script setup lang="ts">
import TaskInput from '../components/TaskInput.vue'
import TaskList from '../components/TaskList.vue'

import { ref } from 'vue';
const taskName = ref<string>('');
const taskList = ref<string []>([]);
</script>