<template>
  <div class="dashboard">
    <!-- Hero секция с параллакс-эффектом -->
    <section class="hero">
      <div class="hero-overlay">
        <video autoplay muted loop playsinline class="hero-video">
          <source src="../assets/ACC-SITO-SHORT.mp4" type="video/mp4">
        </video>

      </div>
      <div class="hero-content">
        <div class="hero-badge">THE OFFICIAL GT WORLD CHALLENGE GAME</div>
        <h1 class="hero-title">
          <span class="title-line">ASSE<span class="accent">T</span>TO CORSA</span>
          <span class="title-line">COMPE<span class="accent">T</span>IZIONE</span>
        </h1>
        <p class="hero-description">
          Окунитесь в непревзойденную симуляцию GT3. Официальные автомобили, трассы и пилоты из GT World Challenge.
        </p>
        <div class="hero-actions">
          <button class="btn-primary" @click="scrollToSection('features')">
            EXPLORE FEATURES
          </button>
          <button class="btn-secondary" @click="$router.push('/garage')">
            Посмотреть Машины
          </button>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-value">{{ store.carsCount }}</span>
            <span class="hero-stat-label">Лицензированных Машины</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value">{{ store.tracksCount }}</span>
            <span class="hero-stat-label">Легендарных трека</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-value">24H</span>
            <span class="hero-stat-label">Гонки на выносливость</span>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" @click="scrollToSection('features')">
        <div class="scroll-arrow"></div>
        <span>SCROLL DOWN</span>
      </div>
    </section>

    <!-- FEATURES SECTION -->
    <section class="features-section" id="features">
      <div class="section-header">
        <h2 class="section-title">NEXT GEN <span class="accent">SIM RACING</span></h2>
        <p class="section-subtitle">Почему Assetto Corsa Competizione — лучший GT3 симулятор</p>
      </div>

      <div class="features-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon-wrapper">
            <img :src="feature.image" alt="" class="feature-img">
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>

          <div class="feature-glow"></div>
        </div>
      </div>
    </section>

    <!-- TRACK OF THE WEEK -->
    <section class="track-of-week">
      <div class="section-header">
        <h2 class="section-title">TRACK OF THE <span class="accent">WEEK</span></h2>
      </div>

      <div class="tow-grid">
        <!-- Левая часть с картинкой -->
        <div class="tow-image">
          <img
              src="../assets/Tracks/spa-white.png"
              alt="Spa-Francorchamps"
          >
          <div class="tow-badge">Рекомендуем на этой неделе</div>
        </div>

        <!-- Правая часть с текстом -->
        <div class="tow-content">
          <h3>Spa-Francorchamps</h3>
          <p class="tow-meta">7.004 KM • 19 CORNERS • BELGIUM</p>

          <p class="tow-description">
            Легендарная трасса в Арденнах. Один из самых сложных и красивых треков в мире.
            Знаменитая связка Eau Rouge + Raidillon — настоящее испытание для любого пилота.
          </p>

          <div class="tow-stats">
            <div>
              <span class="label">Рекордное время круга</span>
              <span class="value">02:15.162</span>
            </div>
            <div>
              <span class="label">Машина</span>
              <span class="value">McLaren 720S GT3 EVO</span>
            </div>
            <div>
              <span class="label">Пиковая скорость</span>
              <span class="value accent">275.08</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- UPCOMING EVENTS -->
    <section class="events-section">
      <div class="section-header">
        <h2 class="section-title">UPCOMING <span class="accent">EVENTS</span></h2>
        <p class="section-subtitle">Ближайшие соревнования и специальные события</p>
      </div>

      <div class="events-grid">
        <div class="event-card" v-for="(event, i) in upcomingEvents" :key="i">
          <div class="event-date">
            <span class="day">{{ event.day }}</span>
            <span class="month">{{ event.month }}</span>
          </div>
          <div class="event-info">
            <h4>{{ event.title }}</h4>
            <p class="event-track">{{ event.track }}</p>
            <p class="event-time">{{ event.time }}</p>
            <span class="event-type" :class="event.type.toLowerCase()">{{ event.type }}</span>
          </div>
        </div>
      </div>
    </section>



    <!-- Секция треков -->
    <section class="tracks-preview-section">
      <div class="section-header">
        <h2 class="section-title">ICONIC <span class="accent">CIRCUITS</span></h2>
      </div>
      <div class="tracks-grid">
        <div class="track-preview-card" v-for="track in store.tracks.slice(0, 3)" :key="track.id">
          <img :src="track.image" :alt="track.name" class="track-preview-img" @error="handleTrackImageError">
          <div class="track-preview-overlay">
            <h3>{{ track.name }}</h3>
            <p>{{ track.country }} • {{ track.length }} KM • {{ track.corners }} Corners</p>
          </div>
        </div>
      </div>
      <div class="center-action">
        <router-link to="/tracks" class="btn-primary">EXPLORE TRACKS →</router-link>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="main-footer">
      <div class="footer-container">

        <!-- Рейтинги и издатели -->
        <div class="ratings">
          <img src="../assets/Platforms/Pegi.png" alt="PEGI 3" height="50">
          <img src="../assets/Platforms/505logo.svg" height="50">
          <img src="../assets/Platforms/ESRB.png" alt="505 Games" height="45">
          <img src="../assets/Platforms/ks.svg" alt="Kunos Simulazioni" height="50">
        </div>

        <!-- Основная информация -->
        <div class="footer-main">
          <div class="footer-left">
            <h3>ASSETTO CORSA</h3>
            <p class="copyright">© KUNOS Simulazioni Srl — All rights reserved.</p>
          </div>

          <div class="social-links">
            <a href="https://www.facebook.com/Assetto.Corsa/"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" height="28"></a>
            <a href="https://www.instagram.com/assettocorsa/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" height="28"></a>
            <a href="https://www.youtube.com/channel/UCgrlBI6OzHgVA-iVupI4TuQ"><img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" height="28"></a>
            <a href="https://twitter.com/AC_assettocorsa"><img src="../assets/Platforms/X-Logo-Artistic-Representation-Style-PNG.png" alt="X" height="28"></a>
            <a href="https://discord.com/invite/2HXEqhM5A8"><img src="../assets/Platforms/647b1ce92e00f8a69ba283fd41da32ff.png" alt="Discord" height="28"></a>
          </div>
        </div>

        <!-- Legal Text -->
        <div class="legal-text">
          <p>
            Все остальные торговые марки являются собственностью соответствующих владельцев. Разработано компанией KUNOS Simulazioni Srl. Логотип Assetto Corsa является зарегистрированной торговой маркой KUNOS Simulazioni Srl. Студия FMOD, авторское право Firelight Technologies Pty. Ltd., 2012-2016. Производители, автомобили, названия, бренды и связанные с ними изображения, представленные в этой игре, в некоторых случаях являются товарными знаками и/или материалами, защищенными авторским правом соответствующих владельцев...

            Опубликовано по лицензии 505 Games. 505 Games и логотип 505 Games являются зарегистрированными товарными знаками компании 505 Games S.p.A и/или ее аффилированных лиц.
          </p>
          <p style="margin-top: 1rem;">
            Опубликовано по лицензии компанией 505 Games. 505 Games и логотип 505 Games являются зарегистрированными товарными знаками компании 505 Games S.p.A и/или ее аффилированных лиц.          </p>
        </div>

        <!-- Нижняя часть -->
        <div class="footer-bottom">
          <a href="#" class="privacy-link">PRIVACY POLICY</a>
          <p class="fan-note">Это фанатский проект. Не связан с Kunos Simulazioni или 505 Games..</p>
        </div>

      </div>
    </footer>
  </div>
</template>

<script setup>
import { useACCStore } from '../stores/acc'

const store = useACCStore()

const features = [
  {
    image: './src/assets/cards/laser.png',        // ← поменяй пути
    title: 'LASER SCANNED TRACKS',
    description: 'Все трассы созданы с помощью лазерного сканирования с точностью до 1 мм.'
  },
  {
    image: './src/assets/cards/weather.png',
    title: 'DYNAMIC WEATHER & TYRE PHYSICS',
    description: 'Реалистичная смена погоды и сложная физика шин в реальном времени.'
  },
  {
    image: './src/assets/cards/GT3_car.png',
    title: 'OFFICIAL GT3 CARS',
    description: 'Официально лицензированные автомобили от лучших производителей мира.'
  },
  {
    image: './src/assets/cards/brain.png',
    title: '24H ENDURANCE RACING',
    description: 'Полноценные суточные гонки с правильной стратегией и пит-стопами.'
  },
  {
    image: './src/assets/cards/headphones.png',
    title: 'IMMERSIVE AUDIO EXPERIENCE',
    description: 'Звук двигателей, шин, дождя и трибун записан на реальных трассах. Один из лучших саунд-дизайнов в сим-рейсинге.'
  },
  {
    image: './src/assets/cards/flag.png',
    title: 'ULTIMATE PHYSICS & HANDLING',
    description: 'Самая точная и требовательная физическая модель среди всех GT3-симуляторов. Здесь каждая ошибка дорого стоит.'
  }

]

const upcomingEvents = [
  {
    day: "22",
    month: "MAY",
    title: "Spa 24H Endurance",
    track: "Spa-Francorchamps",
    time: "20:00 MSK",
    type: "ENDURANCE"
  },
  {
    day: "24",
    month: "MAY",
    title: "Monza Sprint Championship",
    track: "Monza",
    time: "19:00 MSK",
    type: "SPRINT"
  },
  {
    day: "28",
    month: "MAY",
    title: "Nürburgring Night Race",
    track: "Nürburgring",
    time: "21:30 MSK",
    type: "NIGHT"
  }
]


function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function handleCarImageError(e) {
  e.target.src = 'https://via.placeholder.com/300x200/1a1a1a/00e676?text=GT3'
}

function handleTrackImageError(e) {
  e.target.src = 'https://via.placeholder.com/400x200/1a1a1a/00e676?text=CIRCUIT'
}
</script>

<style scoped>
.dashboard {
  background: #0a0a0a;
}

/* ============ HERO ============ */
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  inset: 0;

}
.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* видео заполнит блок */
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  padding: 2rem;
}

.hero-badge {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 1px solid red;
  color: red;
  font-size: 0.75rem;
  letter-spacing: 4px;
  margin-bottom: 2rem;
  font-weight: 600;
}

.hero-title {
  font-size: 5rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
}

.title-line {
  display: block;
  background: linear-gradient(180deg, #fff 0%, #888 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.title-line .accent {
  color: var(--accent);
  -webkit-text-fill-color: red;
}

.hero-description {
  font-size: 1.2rem;
  color: #aaa;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
  font-weight: 300;
}

.hero-actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.btn-primary {
  background: red;
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 3px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.btn-primary:hover {
  box-shadow: 0 0 30px red;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 1rem 2rem;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  letter-spacing: 3px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.2rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  justify-content: center;
  margin-top: 2rem;
}

.hero-stat {
  text-align: center;
}

.hero-stat-value {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  color: red;
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 10px red;
}

.hero-stat-label {
  font-size: 0.75rem;
  color: #888;
  letter-spacing: 2px;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 2;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-arrow {
  width: 20px;
  height: 20px;
  border-right: 2px solid red;
  border-bottom: 2px solid red;
  transform: rotate(45deg);
  animation: scrollBounce 2s infinite;
}

.scroll-indicator span {
  font-size: 0.7rem;
  letter-spacing: 3px;
  color: white;
}

@keyframes scrollBounce {
  0%, 100% { transform: rotate(45deg) translate(0, 0); }
  50% { transform: rotate(45deg) translate(5px, 5px); }
}

/* ============ FEATURES ============ */
.features-section {
  padding: 7rem 2rem 6rem;
  background: linear-gradient(180deg, #0a0a0a 0%, #050505 100%);
  position: relative;
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-title {
  font-size: 3.2rem;
  font-weight: 900;
  letter-spacing: 4px;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.section-subtitle {
  color: #888;
  font-size: 1.15rem;
  max-width: 700px;
  margin: 0 auto;
}

/* Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
}

/* Карточка */
.feature-card {
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 3rem 2.2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-12px);
  border-color: #ff0000;
  box-shadow: 0 20px 40px rgba(255, 0, 0, 0.15);
}

/* Круглая обводка под картинку */
.feature-icon-wrapper {
  width: 90px;
  height: 90px;
  background: rgba(255, 0, 0, 0.08);
  border: 2px solid rgba(255, 0, 0, 0.25);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  overflow: hidden;
  transition: all 0.4s ease;
  padding: 8px; /* отступ для красивой рамки */
}

.feature-card:hover .feature-icon-wrapper {
  background: rgba(255, 0, 0, 0.15);
  border-color: #ff0000;
  transform: scale(1.08);
}

.feature-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.feature-icon {
  font-size: 2.8rem;
  line-height: 1;
}

.feature-title {
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  color: white;
  text-transform: uppercase;
}

.feature-desc {
  color: #aaa;
  line-height: 1.65;
  font-size: 1.02rem;
}

/* Свечение при наведении */
.feature-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 30%, rgba(255, 0, 0, 0.08), transparent 70%);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}

.feature-card:hover .feature-glow {
  opacity: 1;
}

/* Адаптив */
@media (max-width: 768px) {
  .features-section {
    padding: 5rem 1rem;
  }

  .section-title {
    font-size: 2.4rem;
  }
}

/* ===================== TRACK OF THE WEEK ===================== */
.track-of-week {
  padding: 7rem 2rem;
  background: linear-gradient(180deg, #0a0a0a, #050505);
}

.tow-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1350px;
  margin: 0 auto;
  align-items: center;
}

.tow-image {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 460px;
  min-height: 420px;
  background: #111;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7);
}

.tow-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


.tow-badge {
  position: absolute;
  top: 25px;
  left: 25px;
  background: #ff0000;
  color: #000;
  font-weight: 700;
  padding: 8px 20px;
  border-radius: 4px;
  font-size: 0.85rem;
  letter-spacing: 2px;
  z-index: 2;
}

/* Контент */
.tow-content h3 {
  font-size: 2.4rem;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
}

.tow-meta {
  color: #ff0000;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
}

.tow-description {
  color: #ccc;
  line-height: 1.7;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.tow-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.tow-stats div {
  text-align: center;
}

.tow-stats .label {
  display: block;
  font-size: 0.75rem;
  color: #666;
  letter-spacing: 2px;
  margin-bottom: 4px;
}

.tow-stats .value {
  font-size: 1.35rem;
  font-weight: 700;
  color: white;
}

.tow-stats .accent {
  color: #ff0000;
}

/* ===================== UPCOMING EVENTS ===================== */
.events-section {
  padding: 6rem 2rem;
  background: #0a0a0a;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.8rem;
  max-width: 1300px;
  margin: 3rem auto;
}

.event-card {
  background: #111;
  border: 1px solid #222;
  border-radius: 12px;
  padding: 1.8rem;
  display: flex;
  gap: 1.5rem;
  transition: all 0.4s ease;
}

.event-card:hover {
  border-color: #ff0000;
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(255, 0, 0, 0.12);
}

.event-date {
  min-width: 70px;
  text-align: center;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 8px;
  padding: 12px 8px;
}

.event-date .day {
  display: block;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
  color: #ff0000;
}

.event-date .month {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #ddd;
  margin-top: 4px;
}

.event-info h4 {
  font-size: 1.35rem;
  margin-bottom: 0.6rem;
}

.event-track {
  color: #aaa;
  margin-bottom: 0.4rem;
}

.event-time {
  color: #777;
  font-size: 0.95rem;
}

.event-type {
  display: inline-block;
  margin-top: 1rem;
  padding: 4px 14px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 4px;
  text-transform: uppercase;
}

.event-type.endurance { background: #ff0000; color: #000; }
.event-type.sprint { background: #00cc00; color: #000; }
.event-type.night { background: #8a2be2; color: white; }

/* Адаптив */
@media (max-width: 992px) {
  .tow-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .tow-image {
    height: 380px;
  }
}

@media (max-width: 768px) {
  .tow-stats {
    grid-template-columns: 1fr 1fr;
  }
}



/* ============ LIVE TIMING ============ */
.timing-section {
  padding: 6rem 2rem;
  background: #080808;
}

.timing-container {
  max-width: 1000px;
  margin: 0 auto;
  background: #111;
  border: 1px solid #222;
  padding: 3rem;
  text-align: center;
}

.timing-header {
  margin-bottom: 2rem;
}

.timing-header h2 {
  font-size: 1.5rem;
  letter-spacing: 6px;
  margin-bottom: 0.5rem;
  color: var(--accent);
}

.session-info {
  color: #666;
  font-size: 0.9rem;
  letter-spacing: 2px;
}

.timing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.timing-card {
  background: #0a0a0a;
  padding: 1.5rem;
  border: 1px solid #1a1a1a;
}

.timing-label {
  display: block;
  color: #555;
  font-size: 0.7rem;
  letter-spacing: 3px;
  margin-bottom: 0.5rem;
}

.timing-value {
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  color: var(--accent);
  text-shadow: 0 0 10px var(--accent-glow);
}

.timing-value small {
  font-size: 0.9rem;
  color: #666;
}

.timing-delta {
  font-size: 0.8rem;
}

.timing-delta.negative {
  color: var(--accent);
}

.mini-bar {
  height: 3px;
  background: #1a1a1a;
  margin-top: 0.5rem;
  border-radius: 2px;
  overflow: hidden;
}

.mini-bar-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 2px;
  box-shadow: 0 0 8px var(--accent-glow);
  transition: width 0.8s ease;
}

.rating-stars {
  margin-top: 0.3rem;
}

.star {
  color: #333;
  font-size: 1rem;
}

.star.active {
  color: var(--accent);
  text-shadow: 0 0 5px var(--accent-glow);
}

.btn-outline {
  background: transparent;
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 0.75rem 2rem;
  font-family: 'Rajdhani', sans-serif;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 3px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: rgba(0, 230, 118, 0.1);
  box-shadow: 0 0 15px var(--accent-glow);
}

/* ============ CARS PREVIEW ============ */
.cars-preview-section {
  padding: 6rem 2rem;
  background: #0d0d0d;
}

.cars-scroll {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto 2rem;
}

.car-preview-card {
  position: relative;
  overflow: hidden;
  border: 1px solid #1a1a1a;
  transition: all 0.3s ease;
  cursor: pointer;
}

.car-preview-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.car-preview-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  filter: grayscale(30%);
  transition: all 0.3s;
}

.car-preview-card:hover .car-preview-img {
  filter: grayscale(0%);
  transform: scale(1.05);
}

.car-preview-info {
  padding: 1rem;
  background: #111;
}

.car-preview-info h4 {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 0.25rem;
}

.car-preview-info p {
  color: #777;
  font-size: 0.8rem;
}

/* ============ TRACKS PREVIEW ============ */
.tracks-preview-section {
  padding: 6rem 2rem;
  background: #080808;
}

.tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto 2rem;
}

.track-preview-card {
  position: relative;
  height: 250px;
  overflow: hidden;
  border: 1px solid #1a1a1a;
  cursor: pointer;
}

.track-preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
  background-color: white;
}

.track-preview-card:hover .track-preview-img {
  transform: scale(1.1);
}

.track-preview-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.9));
}

.track-preview-overlay h3 {
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 0.25rem;
}

.track-preview-overlay p {
  color: #aaa;
  font-size: 0.8rem;
}

.center-action {
  text-align: center;
  margin-top: 1rem;
}

/* ============ STATS BANNER ============ */
.stats-section {
  padding: 4rem 2rem;
  background: #0a0a0a;
  border-top: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
}

.stats-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent);
  font-family: 'Courier New', monospace;
  text-shadow: 0 0 15px var(--accent-glow);
}

.stat-desc {
  color: #777;
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: #222;
}

/* ============ FOOTER ============ */
.main-footer {
  background: #0a0a0a;
  border-top: 1px solid #1f1f1f;
  padding: 4rem 2rem 2.5rem;
  color: #777;
  font-size: 0.9rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.platforms, .ratings {
  display: flex;
  justify-content: center;
  gap: 6rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  align-items: center;
}

.platforms img, .ratings img {
  height: 38px;
  transition: all 0.3s;
  transform: scale(1.30);
}

.platforms img:hover, .ratings img:hover {
  filter: grayscale(0%);
  transform: scale(1.48);
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-left h3 {
  color: #fff;
  font-size: 1.6rem;
  font-weight: 900;
  letter-spacing: 3px;
}

.social-links {
  display: flex;
  gap: 1.8rem;
  font-size: 1.1rem;
}

.social-links a {
  color: #888;
  text-decoration: none;
}

.social-links a:hover {
  color: #ff0000;
}

.legal-text {
  max-width: 1000px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.65;
  font-size: 0.85rem;
  color: #666;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid #222;
}

.privacy-link {
  color: #aaa;
  font-weight: 500;
  text-decoration: none;
}

.privacy-link:hover {
  color: #ff0000;
}

.fan-note {
  color: #555;
  font-size: 0.8rem;
}

/* Адаптив */
@media (max-width: 768px) {
  .platforms, .ratings {
    gap: 2rem;
  }
  .footer-main {
    justify-content: center;
    text-align: center;
  }
}

</style>