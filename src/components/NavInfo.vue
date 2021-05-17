<template>
  <section class="board-info-bar">
		<div class="board-controls">

			<button class="board-title btn">
				<h2>Web Development</h2>
			</button>

			<button class="star-btn btn" aria-label="Star Board">
				<i class="far fa-star" aria-hidden="true"></i>
			</button>

			<button class="personal-btn btn">Personal</button>

			<button class="private-btn btn"><i class="fas fa-briefcase private-btn-icon"
					aria-hidden="true"></i>Private</button>
		</div>

		<button class="menu-btn btn">
            <i class="fas fa-ellipsis-h menu-btn-icon" aria-hidden="true"></i>
            Show Menu
        </button>
	</section>
</template>

<script>
export default {
    name: 'NavInfo',
    components: {}
}
</script>

<style scoped>
.board-info-bar {
    flex-basis: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.8rem 0;
    padding: 0 1rem;
    color: #f6f6f6;
}

.board-controls {
    display: flex;
}

.board-controls .btn {
    margin-right: 1rem;
}

.board-controls .btn:last-of-type {
    margin-right: 0;
}

.board-info-bar .btn {
    font-size: 1.4rem;
    font-weight: 400;
    transition: background-color 150ms;
    padding: 0 0.6rem;
    border-radius: 0.3rem;
    height: 3rem;
}

.board-info-bar .btn:hover {
    background-color: #006aa8;
}

.private-btn-icon,
.menu-btn-icon {
    padding-right: 0.6rem;
    white-space: nowrap;
}

.board-title h2 {
    font-size: 1.8rem;
    font-weight: 700;
    white-space: nowrap;
}
</style>