<template>
  <header class="masthead">
    <div class="boards-menu dropdown">
      <button class="boards-btn btn dropbtn">
        <i class="fab fa-trello boards-btn-icon"></i>Boards
      </button>

      <div class="dropdown-content">
        <li 
        :key="index.toString()" 
        v-for="(board,index) in boards" 
        @click="$emit('get-board',board.id)"
        >{{board.name}}</li>
      </div>
    </div>

    <div class="board-search">
      <input
        type="search"
        class="board-search-input"
        aria-label="Board Search"
      />
      <i class="fas fa-search search-icon" aria-hidden="true"></i>
    </div>

    <div class="logo">
      <h1><i class="fab fa-trello logo-icon" aria-hidden="true"></i>Trello</h1>
    </div>

    <div class="user-settings">
      <button class="user-settings-btn btn" aria-label="Create">
        <i class="fas fa-plus" aria-hidden="true"></i>
      </button>
      <button class="user-settings-btn btn" aria-label="Information">
        <i class="fas fa-info-circle" aria-hidden="true"></i>
      </button>
      <button class="user-settings-btn btn" aria-label="Notifications">
        <i class="fas fa-bell" aria-hidden="true"></i>
      </button>
      <button class="user-settings-btn btn" aria-label="User Settings">
        <i class="fas fa-user-circle" aria-hidden="true"></i>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    boards: Array
  },
  components: {},
};
</script>

<style scoped>
.masthead {
  flex-basis: 4rem;
  display: flex;
  align-items: center;
  padding: 3px 0.8rem;
  background-color: #0067a3;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
}

.masthead .btn {
  background-color: #4c94be;
  border-radius: 0.3rem;
  transition: background-color 150ms;
}

.masthead .btn:hover {
  background-color: #3385b5;
}

.boards-menu {
  display: flex;
  flex-shrink: 0;
}

.boards-btn {
  flex-basis: 9rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin-right: 0.8rem;
  padding: 0.6rem 0.8rem;
}

.boards-btn-icon {
  font-size: 1.7rem;
  padding-right: 1.2rem;
}

.board-search {
  flex-basis: 18rem;
  position: relative;
}

.board-search-input {
  height: 3rem;
  border: none;
  border-radius: 0.3rem;
  background-color: #4c94be;
  width: 100%;
  padding: 0 3rem 0 1rem;
  color: #fff;
}

.board-search-input:hover {
  background-color: #66a4c8;
}

.search-icon {
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  right: 0.8rem;
  transform: translateY(-50%) rotate(90deg);
  color: #fff;
}

.logo {
  flex: 1;
  font-family: "Courgette", cursive;
  font-size: 2.2rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 2rem;
  transition: color 150ms;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
}

.logo:hover {
  color: rgba(255, 255, 255, 0.8);
}

.logo-icon {
  padding-right: 0.4rem;
}

.user-settings {
  display: flex;
  height: 3rem;
  color: #fff;
}

.user-settings-btn {
  font-size: 1.5rem;
  width: 3rem;
  margin-right: 0.8rem;
}

.user-settings-btn:last-of-type {
  margin-right: 0;
}

.dropbtn {
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content li {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content li:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
}
</style>