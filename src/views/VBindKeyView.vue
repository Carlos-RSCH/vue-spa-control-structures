<template>
  <div>
    <h2>v-bind:key</h2>
    <p>Ejemplo de clave única en bucle:</p>
    <ul>
      <li v-for="item in elementos" :key="item.id">{{ item.nombre }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elementos: [
        { id: 1, nombre: 'Elemento A' },
        { id: 2, nombre: 'Elemento B' }
      ]
    }
  }
}
</script>