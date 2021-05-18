<template>
  <Header :boards="boards" @get-board="getBoardById" />
  <NavInfo />
  <Lists 
  :lists="lists"
  @add-list="addList" 
  @add-board="addBoard"
  />
</template>

<script>
import Header from "./components/Header";
import NavInfo from "./components/NavInfo";
import Lists from "./components/Lists";
import API from "./api";

export default {
  name: "App",
  components: {
    Header,
    NavInfo,
    Lists,
  },
  data() {
    return {
      boards: [],
      lists: [],
      boardId: "",
    };
  },
  created() {
    API.getAllBoard()
      .then((res) => {
        if (res.status === 200 && res.statusText === "OK") {
          this.boards = res.data.boards;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    getBoardById(id) {
      this.boardId = id;
      API.getBoardById(id)
        .then((res) => {
          if (res.status === 200 && res.statusText === "OK") {
            this.lists = res.data.lists;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addList(newList) {
      API.addListByIdBoard(this.boardId, newList)
        .then((res) => {
          this.lists = [...this.lists, res.data];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addBoard(newBoard){
      API.addBoard(newBoard)
      .then((res) => {
          this.boards = [...this.boards, res.data];
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style>
:root {
  font-size: 10px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  background-color: #0079bf;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font: inherit;
  background: none;
  border: none;
  color: inherit;
  padding: 0;
  cursor: pointer;
}

:focus {
  outline-color: #fa0;
}
</style>
