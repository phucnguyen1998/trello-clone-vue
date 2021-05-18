<template>
  <a-layout class="lists-container">
    <div :key="index.toString()" v-for="(list, index) in lists" class="list">
      <h3 class="list-title">
        {{ list.title }}
        <i class="fas fa-times" @click="deleteList(list.id)"></i>
      </h3>

      <Card :listId="list.id" :cards="list.cards" />

      <!-- <button class="add-card-btn btn">Add a card</button> -->
    </div>
    <form v-if="lists.length > 0" @submit.prevent="addList">
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Add a list"
        class="add-list-btn btn"
      />
    </form>

    <form v-if="lists.length === 0" @submit.prevent="addBoard">
      <input
        type="text"
        v-model="name"
        name="name"
        placeholder="Add a board"
        class="add-list-btn btn"
      />
    </form>
  </a-layout>
</template>

<script>
import Card from "./Card";
import API from "./../api";

export default {
  name: "Lists",
  data() {
    return {
      title: "",
      name: "",
    };
  },
  props: {
    lists: Array,
  },
  components: {
    Card,
  },
  methods: {
    addList() {
      if (!this.title) {
        alert("Please add title of List !");
        return;
      }
      let newList = {
        title: this.title,
      };

      this.$emit("add-list", newList);

      this.title = "";
    },
    addBoard() {
      if (!this.name) {
        alert("Please add name of Board !");
        return;
      }
      let newBoard = {
        name: this.name,
      };
      this.$emit("add-board", newBoard);
      this.name = "";
    },
    deleteList(id) {
      API.deleteListById(id)
        .then((res) => {
          alert("Delete List Success");
          let index = this.lists.map((item) => item.id).indexOf(id);
          this.lists = this.lists.splice(index, 1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.lists-container::-webkit-scrollbar {
  height: 2.4rem;
}

.lists-container::-webkit-scrollbar-thumb {
  background-color: #66a3c7;
  border: 0.8rem solid #0079bf;
  border-top-width: 0;
}

.lists-container {
  display: flex;
  align-items: start;
  padding: 0 0.8rem 0.8rem;
  overflow-x: auto;
  height: calc(100vh - 8.6rem);
  margin-right: 10px;
}

.list {
  flex: 0 0 27rem;
  display: flex;
  flex-direction: column;
  background-color: #e2e4e6;
  max-height: calc(100vh - 11.8rem);
  border-radius: 0.3rem;
  margin-right: 1rem;
}

.list-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #333;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

.add-list-btn {
  flex: 0 0 27rem;
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  background-color: #006aa7;
  color: #a5cae0;
  padding: 1rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: background-color 150ms;
  text-align: left;
}

.add-list-btn:hover {
  background-color: #005485;
}

.add-card-btn::after,
.add-list-btn::after {
  content: "...";
}
</style>