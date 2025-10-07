<template>
  <div>
    <h2>v-show</h2>
    <p>Ejemplo de mostrar/ocultar sin eliminar del DOM:</p>
    <div v-show="mostrar">Este texto está visible</div>
  </div>
</template>

<script>
export default {
  data() {
    return { mostrar: true }
  }
}
</script>