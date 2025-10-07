<template>
  <div>
    <h2>v-if / v-else-if / v-else</h2>
    <p>Ejemplo de estructura condicional:</p>
    <div v-if="estado === 'activo'">Activo</div>
    <div v-else-if="estado === 'pendiente'">Pendiente</div>
    <div v-else>Desconocido</div>
  </div>
</template>

<script>
export default {
  data() {
    return { estado: 'activo' }
  }
}
</script>