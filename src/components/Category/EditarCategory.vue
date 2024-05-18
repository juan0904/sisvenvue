<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold">Editar</h1>
      <div class="card">
        <div class="card-header fw-bold">categories</div>
        <div class="card-body">
          <form @submit.prevent="updateCategorie">
            <div class="row mb-3">
              <label for="id" class="form-label">Código</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="tag" />
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="id"
                  placeholder="Código categorie"
                  disabled
                  v-model="categorie.id"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="name" class="form-label">Nombre :</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="building" />
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Name categorie"
                  v-model="categorie.name"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="description" class="form-label">Descripcion:</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="building" />
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="Description categorie"
                  v-model="categorie.description"
                />
              </div>
            </div>
        
            <button class="btn btn-primary" type="submit">Actualizar</button>
            <button class="btn btn-secondary mx-2" @click="cancelar">
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
 
<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "EditarCategorie",
  data() {
    return {
      categorie: {
        id: 0,
      name: "",
      description: "",
      },
    };
  },
  methods: {
    cancelar() {
      this.$router.push({ name: "Categories"  });
    },
    async updateCategorie() {
      const res = await axios.put(
       ` http://127.0.0.1:8000/api/categories/${this.categorie.id}`,
        this.categorie
      );
      if (res.status == 200) {
        this.$router.push({ name: "Categories" });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "categorie has been updated",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  mounted() {
    
    this.categorie.id = this.$route.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/categories/${this.categorie.id}`)
      .then((response) => {
        this.categorie = response.data.categorie;
      });
  },
};
</script>