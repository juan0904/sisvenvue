<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Editar</h1>
    <div class="card">
      <div class="card-header fw-bold">product</div>
      <div class="card-body">
        <form @submit.prevent="updateProduct">
          <div class="row mb-3">
            <label for="comu_codi" class="form-label">Código</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="tag" />
              </div>
              <input
                type="text"
                class="form-control"
                id="id"
                placeholder="Código product"
                disabled
                v-model="product.id"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="comu_nomb" class="form-label">Nombre :</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Name product"
                v-model="product.name"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="price" class="form-label">Price:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="price"
                placeholder="Price product"
                v-model="product.price"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="stock" class="form-label">Stock:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="stock"
                placeholder="Stock product"
                v-model="product.stock"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="category_id" class="form-label">Category:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="bank" />
              </div>
              <select class="form-select" v-model="product.category_id">
                <option
                 v-for="categorie in categories" 
                  :key="categorie.id"
                  v-bind:value="categorie.id">
                  {{ categorie.name }}
                </option>
              </select>
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
  name: "Editarproduct",
  data() {
    return {
      product: {
        id: 0,
        name: "",
        price: 0,
        stock: 0,
        category_id: 0,
      },
      categories: [],
    };
  },
  methods: {
    cancelar() {
      this.$router.push({ name: "Products"  });
    },
    async updateProduct() {
      const res = await axios.put(
        `http://127.0.0.1:8000/api/products/${this.product.id}`,
        this.product
      );
      if (res.status == 200) {
        this.$router.push({ name: "Products" });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "product has been updated",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  mounted() {
    this.product.id = this.$route.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/products/${this.product.id}`)
      .then((response) => {
        this.product = response.data.product;
        this.categories = response.data.categories;
      });
  },
};
</script>
