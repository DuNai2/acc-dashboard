import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useACCStore = defineStore('acc', () => {
  // Данные машин
  const cars = ref([
    {
      id: 1,
      name: 'Ferrari 488 GT3 Evo',
      brand: 'Ferrari',
      image: 'https://via.placeholder.com/400x200/1a1a1a/00e676?text=488+GT3',
      power: 600,
      weight: 1280,
      aero: 85,
      braking: 90,
      handling: 88
    },
    {
      id: 2,
      name: 'BMW M4 GT3',
      brand: 'BMW',
      image: 'https://via.placeholder.com/400x200/1a1a1a/00e676?text=M4+GT3',
      power: 590,
      weight: 1300,
      aero: 88,
      braking: 87,
      handling: 85
    },
    {
      id: 3,
      name: 'Porsche 911 GT3 R',
      brand: 'Porsche',
      image: 'https://via.placeholder.com/400x200/1a1a1a/00e676?text=911+GT3+R',
      power: 565,
      weight: 1250,
      aero: 92,
      braking: 92,
      handling: 91
    },
    {
      id: 4,
      name: 'McLaren 720S GT3',
      brand: 'McLaren',
      image: 'https://via.placeholder.com/400x200/1a1a1a/00e676?text=720S+GT3',
      power: 610,
      weight: 1270,
      aero: 90,
      braking: 89,
      handling: 87
    }
  ])

  // Данные трасс
  const tracks = ref([
    {
      id: 1,
      name: 'Spa-Francorchamps',
      country: 'Belgium',
      length: 7.004,
      corners: 19,
      image: 'https://via.placeholder.com/400x200/1a1a1a/00e676?text=Spa'
    },
    {
      id: 2,
      name: 'Monza',
      country: 'Italy',
      length: 5.793,
      corners: 11,
      image: 'https://via.placeholder.com/400x200/1a1a1a/00e676?text=Monza'
    },
    {
      id: 3,
      name: 'Nürburgring GP',
      country: 'Germany',
      length: 5.148,
      corners: 16,
      image: 'https://via.placeholder.com/400x200/1a1a1a/00e676?text=Nurburgring'
    }
  ])

  // Данные для дашборда
  const bestLapTime = ref('2:17.432')
  const currentTrack = ref('Spa-Francorchamps')
  const topSpeed = ref(278)

  // Вычисляемое свойство для подсчёта машин
  const carsCount = computed(() => cars.value.length)

  // Действия
  function addLapTime(time) {
    bestLapTime.value = time
  }

  function changeTrack(trackName) {
    currentTrack.value = trackName
  }

  return {
    cars,
    tracks,
    bestLapTime,
    currentTrack,
    topSpeed,
    carsCount,
    addLapTime,
    changeTrack
  }
})