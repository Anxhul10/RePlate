import {UAlert} from '@nuxt/ui';
import {icon} from '@nuxt/icon';
<template>
  <UApp>
    <h1>welcome to the app</h1>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="count++">Increment</button>
    </div>
    
    <Temp/>
    <UCalendar/>
    <Root/>
    <UBadge color="neutral">Badge</UBadge>

  </UApp>
  <UAlert 
   title="Heads up!"
    description="You can change the primary color in your app config."
    :avatar="{
      src: 'https://github.com/nuxt.png'}"
  />
  <UInput color="primary" variant="outline" highlight placeholder="Search..." />  <UButton placeholder="Search...">Button</UButton>
</template>

<script setup lang="ts">
const count = ref(1)

console.log('Initial count:', count.value)

// // Optional: log on change
// watch(count, (newVal, oldVal) => {
//   console.log(`Count changed from ${oldVal} to ${newVal}`)
// })
</script>
