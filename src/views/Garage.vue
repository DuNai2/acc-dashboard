<template>
  <div class="garage">
    <h1 class="page-title">GARAGE</h1>
    <p class="page-subtitle">{{ store.carsCount }} GT3 MACHINES AVAILABLE</p>

    <!-- Фильтры -->
    <div class="filters">
      <button
          v-for="brand in brands"
          :key="brand"
          class="filter-btn"
          :class="{ active: activeFilter === brand }"
          @click="activeFilter = brand"
      >
        {{ brand }}
      </button>
    </div>

    <div class="grid">
      <div v-for="car in filteredCars" :key="car.id" class="card car-card">
        <div class="car-header">
          <img :src="car.image" :alt="car.name" class="car-image" @error="handleImageError">
          <div class="car-badge">{{ car.year }}</div>
          <div class="car-difficulty" :class="car.difficulty.toLowerCase().replace(' ', '-')">
            {{ car.difficulty }}
          </div>
        </div>

        <div class="car-info">
          <h3 class="car-name">{{ car.name }}</h3>
          <p class="car-brand">{{ car.brand }} • {{ car.engine }}</p>



          <div class="car-characteristics">
            <h4>CAR CHARACTERISTICS</h4>

            <div class="char-grid">
              <div class="char-item">
                <span class="char-label">POWER</span>
                <span class="char-value">{{ car.power }} <small>HP</small></span>
              </div>
              <div class="char-item">
                <span class="char-label">TOP SPEED</span>
                <span class="char-value">{{ car.topSpeed }} <small>km/h</small></span>
              </div>
              <div class="char-item">
                <span class="char-label">POWER / WEIGHT</span>
                <span class="char-value">{{ car.powerWeight }} </span>
              </div>
              <div class="char-item">
                <span class="char-label">WEIGHT</span>
                <span class="char-value">{{ car.weight }} <small>KG</small></span>
              </div>
              <div class="char-item">
                <span class="char-label">TORQUE</span>
                <span class="char-value">{{ car.torque }} <small>Nm</small></span>
              </div>
              <div class="char-item">
                <span class="char-label">DRIVE</span>
                <span class="char-value">RWD</span>
              </div>
            </div>

            <div class="best-for">
              <strong>BEST SUITED FOR:</strong>
              <span class="best-tag">{{ car.difficulty }}</span>
              <span class="best-tag">High-Speed Circuits</span>
              <span class="best-tag">Endurance Racing</span>
            </div>
          </div>

          <p class="car-description">{{ car.description }}</p>

          <div class="car-extra-specs">
            <div class="extra-spec">
              <span class="extra-label">0-100 km/h</span>
              <span class="extra-value">{{ car.acceleration }}s</span>
            </div>
            <div class="extra-spec">
              <span class="extra-label">FUEL CONS.</span>
              <span class="extra-value">{{ car.fuelConsumption }} L/lap</span>
            </div>
          </div>

          <button class="btn btn-full" @click="selectCar(car)">
            SELECT {{ car.brand.toUpperCase() }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useACCStore } from '../stores/acc'

const store = useACCStore()
const activeFilter = ref('All')

const brands = computed(() => {
  const allBrands = store.cars.map(c => c.brand)
  return ['All', ...new Set(allBrands)]
})

const filteredCars = computed(() => {
  if (activeFilter.value === 'All') return store.cars
  return store.cars.filter(c => c.brand === activeFilter.value)
})

function selectCar(car) {
  alert(`Selected: ${car.name}\n\n${car.description}\n\n🏆 Best for: ${car.difficulty}`)
}

function handleImageError(e) {
  e.target.src = 'https://via.placeholder.com/400x200/1a1a1a/00e676?text=' + encodeURIComponent(e.target.alt || 'GT3')
}
</script>

<style scoped>
.garage {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  letter-spacing: 8px;
  text-align: center;
  margin-bottom: 0.5rem;
}

.page-subtitle {
  text-align: center;
  color: var(--text-secondary);
  letter-spacing: 4px;
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 0.9rem;
}

/* Фильтры */
.filters {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: #111;
  color: #bbb;
  border: 1px solid #333;
  padding: 0.7rem 1.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-size: 0.9rem;
  border-radius: 6px;
}

.filter-btn:hover,
.filter-btn.active {
  background: #ff0000;
  color: #000;
  border-color: #ff0000;
  box-shadow: 0 0 20px rgba(255, 0, 0, 0.4);
}

/* Сетка */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  gap: 2.5rem;
}

/* Сетка машин */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;
}

/* Карточка машины */
.car-card {
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.car-card:hover {
  border-color: #3b0303;
  box-shadow: 0 0 30px #3b0303;
  transform: translateY(-4px);
}

.car-header {
  position: relative;
}

.car-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-bottom: 1px solid var(--border);
}

.car-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--bg-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  font-weight: 700;
  font-size: 0.9rem;
  border: 1px solid white;
}

.car-difficulty {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Информация */
.car-info {
  padding: 1.5rem;
}

.car-name {
  font-size: 1.3rem;
  margin-bottom: 0.25rem;
  letter-spacing: 1px;
}

.car-brand {
  color: white;
  font-weight: 500;
  margin-bottom: 1.25rem;
  font-size: 0.9rem;
}

.car-characteristics {
  margin: 1.5rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.car-characteristics h4 {
  font-size: 0.8rem;
  letter-spacing: 3px;
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
  text-transform: uppercase;
}

.char-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.2rem 2rem;
  margin-bottom: 1.8rem;
}

.char-item {
  text-align: center;
}

.char-label {
  display: block;
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: #777;
  margin-bottom: 0.4rem;
}

.char-value {
  font-size: 1.55rem;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  color: white;
}

.char-value small {
  font-size: 0.75rem;
  color: #888;
  font-weight: 400;
}

/* Best For */
.best-for {
  margin-top: 1rem;
}

.best-for strong {
  display: block;
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 0.8rem;
}

.best-tag {
  display: inline-block;
  background: #1a1a1a;
  color: #ccc;
  padding: 0.4rem 1rem;
  margin: 0.3rem 0.3rem 0 0;
  border-radius: 30px;
  font-size: 0.82rem;
  border: 1px solid #333;
}
/* Описание */
.car-description {
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border);
}

/* Доп. спецификации */
.car-extra-specs {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.25rem;
}

.extra-spec {
  text-align: center;
}

.extra-label {
  display: block;
  color: var(--text-secondary);
  font-size: 0.7rem;
  letter-spacing: 2px;
  margin-bottom: 0.25rem;
}

.extra-value {
  font-weight: 700;
  font-size: 1.1rem;
  font-family: 'Courier New', monospace;
  color: white;
}

.btn-full {
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
}
</style>