<template>
  <ul class="list-items">
    <li
      class="card-item"
      :key="index.toString()"
      v-for="(card, index) in cards"
    >
      {{ card.text }}
      <i class="fas fa-times fa-time-zindex"></i>
    </li>
  </ul>

  <form @submit.prevent="addCard">
    <input
      type="text"
      v-model="text"
      name="text"
      placeholder="Add a card"
      class="add-card-btn btn"
    />
  </form>
</template>

<script>
import API from './../api'
export default {
  name: "Card",
  data() {
    return {
      text: "",
    };
  },
  props: {
    cards: Array,
    listId: String
  },
  components: {},
  methods: {
    addCard() {
      if (!this.text) {
        alert("Please add text of Card !");
        return;
      }
      let newCard = {
        text: this.text,
      };

      API.addCardByIdList(this.listId, newCard)
      .then(res => {
          this.cards = this.cards.push(res.data)
      }).catch(err => {
          console.log(err);
      })
      this.text = "";
    },
  }

};
</script>

<style scoped>
.list-items {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: start;
  padding: 0 0.6rem 0.5rem;
  overflow-y: auto;
}

.list-items::-webkit-scrollbar {
  width: 1.6rem;
}

.list-items::-webkit-scrollbar-thumb {
  background-color: #c4c9cc;
  border-right: 0.6rem solid #e2e4e6;
}

.list-items li {
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.3;
  background-color: #fff;
  padding: 0.65rem 0.6rem;
  color: #4d4d4d;
  border-bottom: 0.1rem solid #ccc;
  border-radius: 0.3rem;
  margin-bottom: 0.6rem;
  word-wrap: break-word;
  cursor: pointer;
}

.list-items li:last-of-type {
  margin-bottom: 0;
}

.list-items li:hover {
  background-color: #eee;
}

.card-item {
  display: flex;
  justify-content: space-between;
}

.add-card-btn {
  display: block;
  font-size: 1.4rem;
  font-weight: 400;
  color: #838c91;
  padding: 1rem;
  text-align: left;
  cursor: pointer;
  width: 100%;
}

.add-card-btn:hover {
  background-color: #cdd2d4;
  color: #4d4d4d;
}

.fa-time-zindex {
  z-index: 10;
}
</style>