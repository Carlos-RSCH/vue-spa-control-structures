<template>
  <div>
    <h2>v-for</h2>
    <p>Ejemplo de bucle sobre una lista:</p>
    <ul>
      <li v-for="(item, index) in lista" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return { lista: ['Uno', 'Dos', 'Tres'] }
  }
}
</script>