<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nuevo</h1>
    <div class="card">
      <div class="card-header fw-bold">
        PayModes
      </div>
      <div class="card-body">
        <form @submit.prevent="savePaymode">
          <div class="row mb-3">
            <label for="id" class="form-label">Código</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
              <input type="text" class="form-control" id="id" placeholder="Código Paymode" disabled
                v-model="paymode.id">
            </div>
          </div>

          <div class="row mb-3">
            <label for="name" class="form-label">Nombre :</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="building" /></div>
              <input type="text" class="form-control" id="name" placeholder="Nombre paymode"
                v-model="paymode.name">
            </div>
          </div>

          <div class="row mb-3">
            <label for="observation" class="form-label">Observation:</label>
            <div class="input-group">
              <div class="input-group-text"><font-awesome-icon icon="building" /></div>
              <input type="text" class="form-control" id="observation" placeholder="Observation paymode"
                v-model="paymode.observation">
            </div>
          </div>

          <button class="btn btn-primary" type="submit">Guardar</button>
          <button class="btn btn-secondary mx-2" @click="cancel">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "NuevoPaymode",
  data() {
    return {
      paymode: {
        id: null,
        name: "",
        observation: ""
      }
    };
  },
  methods: {
    cancel() {
      this.$router.push({ name: "Paymodes" });
    },

    async savePaymode() {
      try {
        const res = await axios.post("http://127.0.0.1:8000/api/paymodes", this.paymode);
        if (res.status === 200) {
          this.$router.push({ name: "Paymodes" });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Paymode ha sido guardado",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema guardando el paymode.",
        });
      }
    },
  },
};
</script>
