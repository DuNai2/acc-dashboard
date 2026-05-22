<template>
  <div class="tracks">
    <h1 class="page-title">TRACKS</h1>
    <p class="page-subtitle">{{ store.tracksCount }} LEGENDARY CIRCUITS</p>

    <div class="grid">
      <div v-for="track in store.tracks" :key="track.id" class="card track-card">
        <div class="track-header">
          <img :src="track.image" :alt="track.name" class="track-image" @error="handleImageError">
          <div class="track-overlay">
            <span class="track-country-flag">{{ track.country }}</span>
          </div>
        </div>

        <div class="track-info">
          <div class="track-name-row">
            <h3>{{ track.name }}</h3>
            <span class="track-difficulty" :class="track.difficulty.toLowerCase()">
              {{ track.difficulty }}
            </span>
          </div>

          <div class="track-stats">
            <div class="track-stat">
              <span class="track-stat-icon">📏</span>
              <div>
                <span class="track-stat-label">LENGTH</span>
                <span class="track-stat-value">{{ track.length }} KM</span>
              </div>
            </div>
            <div class="track-stat">
              <span class="track-stat-icon">↩️</span>
              <div>
                <span class="track-stat-label">CORNERS</span>
                <span class="track-stat-value">{{ track.corners }}</span>
              </div>
            </div>
            <div class="track-stat">
              <span class="track-stat-icon">⛰️</span>
              <div>
                <span class="track-stat-label">ELEVATION</span>
                <span class="track-stat-value">{{ track.elevation }} M</span>
              </div>
            </div>
            <div class="track-stat">
              <span class="track-stat-icon">⏱️</span>
              <div>
                <span class="track-stat-label">RECORD</span>
                <span class="track-stat-value">{{ track.lapRecord }}</span>
              </div>
            </div>
          </div>

          <div class="track-conditions">
            <div class="condition">
              <span class="condition-label">SURFACE</span>
              <span class="condition-value">{{ track.surface }}</span>
            </div>
            <div class="condition">
              <span class="condition-label">TIRE WEAR</span>
              <span class="condition-value">{{ track.tireWear }}</span>
            </div>
          </div>

          <p class="track-description">{{ track.description }}</p>

          <!-- Ключевые повороты -->
          <div class="track-sectors">
            <h4>KEY CORNERS</h4>
            <div class="sector-list">
              <div v-for="(sector, idx) in track.sectors" :key="idx" class="sector-item">
                <div class="sector-header">
                  <span class="sector-name">{{ sector.name }}</span>
                  <span class="sector-speed">{{ sector.speed }} km/h • {{ sector.gear }}G</span>
                </div>
                <p class="sector-note">{{ sector.note }}</p>
              </div>
            </div>
          </div>

          <button class="btn btn-full" @click="selectTrack(track)">
            SELECT CIRCUIT
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useACCStore } from '../stores/acc'

const store = useACCStore()

function selectTrack(track) {
  store.changeTrack(track.name)
  alert(`🏁 Selected: ${track.name}\n\n📊 Length: ${track.length} km\n🔄 Corners: ${track.corners}\n⏱️ Record: ${track.lapRecord}\n\n${track.description}`)
}

function handleImageError(e) {
  e.target.src = 'https://via.placeholder.com/400x200/1a1a1a/00e676?text=' + encodeURIComponent(e.target.alt || 'CIRCUIT')
}
</script>

<style scoped>
.tracks {
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
}

.track-card {
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.track-card:hover {
  border-color: #3b0303;
  box-shadow: 0 0 30px #3b0303;
  transform: translateY(-4px);
}

.track-header {
  position: relative;
}

.track-image {
  width: 100%;
  max-height: 280px;
  height: auto;
  object-fit: contain;
  background-color: #ffffff;
  border-bottom: 1px solid var(--border);
  display: block;
  margin: 0 auto;
  padding: 12px 0;
}

.track-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.75rem 1rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
}

.track-country-flag {
  color: white;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 0.9rem;
  text-transform: uppercase;
}

.track-info {
  padding: 1.5rem;
}

.track-name-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.track-name-row h3 {
  font-size: 1.4rem;
  letter-spacing: 1px;
}

.track-difficulty {
  padding: 0.15rem 0.6rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.track-difficulty.beginner {
  background: rgba(0, 230, 118, 0.2);
  color: var(--accent);
  border: 1px solid var(--accent);
}

.track-difficulty.intermediate {
  background: rgba(255, 170, 0, 0.2);
  color: #ffaa00;
  border: 1px solid #ffaa00;
}

.track-difficulty.expert {
  background: rgba(255, 68, 68, 0.2);
  color: var(--danger);
  border: 1px solid var(--danger);
}

.track-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.track-stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.track-stat-icon {
  font-size: 1.3rem;
}

.track-stat-label {
  display: block;
  color: var(--text-secondary);
  font-size: 0.65rem;
  letter-spacing: 2px;
}

.track-stat-value {
  font-weight: 700;
  font-size: 0.95rem;
  font-family: 'Courier New', monospace;
}

.track-conditions {
  display: flex;
  gap: 2rem;
  margin-bottom: 1rem;
}

.condition-label {
  display: block;
  color: var(--text-secondary);
  font-size: 0.65rem;
  letter-spacing: 2px;
}

.condition-value {
  font-weight: 700;
  color: white;
  font-size: 0.9rem;
}

.track-description {
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--border);
}

.track-sectors h4 {
  font-size: 0.75rem;
  letter-spacing: 3px;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.sector-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1.25rem;
}

.sector-item {
  background: var(--bg-primary);
  padding: 0.6rem 0.75rem;
  border-radius: 3px;
  border-left: 3px solid red;
}

.sector-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.2rem;
}

.sector-name {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--text-primary);
}

.sector-speed {
  font-size: 0.75rem;
  color: white;
  font-family: 'Courier New', monospace;
}

.sector-note {
  color: var(--text-secondary);
  font-size: 0.78rem;
  line-height: 1.4;
}

.btn-full {
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
}
</style>