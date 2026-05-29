import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useACCStore = defineStore('acc', () => {
    // 1. Создаем пустые списки для машин и трасс
    const cars = ref([])
    const tracks = ref([])

    // Статистика дашборда (твои исходные данные)
    const bestLapTime = ref('2:17.432')
    const currentTrack = ref('Spa-Francorchamps')
    const topSpeed = ref(312)
    const safetyRating = ref(95)
    const totalLaps = ref(1247)
    const winsCount = ref(23)
    const podiumsCount = ref(67)
    const raceHours = ref(156)

    // Вычисляем количество (Vue само посчитает, когда данные придут)
    const carsCount = computed(() => cars.value.length)
    const tracksCount = computed(() => tracks.value.length)

    // 2. Функция загрузки данных через fetch
    async function loadDashboardData() {
        try {
            // Запрашиваем файл с машинами
            const carsResponse = await fetch('public/data/cars.json')
            cars.value = await carsResponse.json()

            // Запрашиваем файл с трассами
            const tracksResponse = await fetch('/data/tracks.json')
            tracks.value = await tracksResponse.json()

            console.log('Данные успешно подгрузились через fetch!')
        } catch (error) {
            console.error('Произошла ошибка при чтении файлов:', error)
        }
    }

    // Твои функции симуляции и смены трассы
    function simulateSession() {
        const randomTime = `2:${String(Math.floor(Math.random() * 20) + 10).padStart(2, '0')}.${String(Math.floor(Math.random() * 999)).padStart(3, '0')}`
        bestLapTime.value = randomTime
        topSpeed.value = Math.floor(Math.random() * 20) + 300
        totalLaps.value += 1
    }

    function changeTrack(trackName) {
        currentTrack.value = trackName
    }

    // Возвращаем всё наружу для Vue компонентов
    return {
        cars,
        tracks,
        bestLapTime,
        currentTrack,
        topSpeed,
        safetyRating,
        totalLaps,
        winsCount,
        podiumsCount,
        raceHours,
        carsCount,
        tracksCount,
        loadDashboardData,
        simulateSession,
        changeTrack
    }
})