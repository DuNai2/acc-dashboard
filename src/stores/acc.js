    import { defineStore } from 'pinia'
    import { ref, computed } from 'vue'

    export const useACCStore = defineStore('acc', () => {
        // Полные данные машин GT3
        const cars = ref([
            {
                id: 1,
                name: 'Ferrari 488 GT3 Evo',
                brand: 'Ferrari',
                year: 2020,
                engine: '3.9L Twin-Turbo V8',
                power: 600,
                torque: 700,
                weight: 1280,
                topSpeed: 312,
                acceleration: 3.0,
                fuelConsumption: 3.8,
                powerWeight: 469,
                difficulty: 'Beginner Friendly',
                image: '/src/assets/cars/Ferrari-488-GT3-Evo-2020-576x324.jpg',
                description: 'Отличный выбор для новичков. Стабильная аэродинамика и предсказуемое поведение делают Ferrari 488 GT3 Evo идеальной машиной для изучения трасс и основ гоночного мастерства.'
            },
            {
                id: 2,
                name: 'BMW M4 GT3',
                brand: 'BMW',
                year: 2022,
                engine: '3.0L Twin-Turbo Inline-6',
                power: 590,
                torque: 700,
                weight: 1300,
                topSpeed: 308,
                acceleration: 3.1,
                fuelConsumption: 3.6,
                powerWeight: 454,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/BMW-M4-GT3-2022-576x324.jpg',
                description: 'Новейшая машина в классе. Мощный рядный 6-цилиндровый двигатель и отличная аэродинамика. Сильна на скоростных трассах.'
            },
            {
                id: 3,
                name: 'Porsche 911 GT3 R (992)',
                brand: 'Porsche',
                year: 2023,
                engine: '4.2L Flat-6',
                power: 565,
                torque: 650,
                weight: 1250,
                topSpeed: 310,
                acceleration: 2.9,
                fuelConsumption: 3.5,
                powerWeight: 452,
                difficulty: 'Expert',
                image: '/src/assets/cars/Porsche-991-GT3-R-2018-576x324.jpg',
                description: 'Машина для опытных пилотов. Заднемоторная компоновка требует особого стиля пилотирования, но награждает невероятной манёвренностью.'
            },
            {
                id: 4,
                name: 'McLaren 720S GT3',
                brand: 'McLaren',
                year: 2019,
                engine: '4.0L Twin-Turbo V8',
                power: 610,
                torque: 720,
                weight: 1270,
                topSpeed: 315,
                acceleration: 2.9,
                fuelConsumption: 3.9,
                powerWeight: 480,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/McLaren-720S-GT3-2019-576x324.jpg',
                description: 'Самая мощная машина в классе. Отличная скорость на прямых, но требует аккуратного обращения с газом на выходе из поворотов.'
            },
            {
                id: 5,
                name: 'Lamborghini Huracán GT3 Evo 2',
                brand: 'Lamborghini',
                year: 2023,
                engine: '5.2L V10',
                power: 580,
                torque: 680,
                weight: 1270,
                topSpeed: 308,
                acceleration: 3.0,
                fuelConsumption: 3.7,
                powerWeight: 457,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/Lamborghini-Huracan-GT3-Evo-2019-576x324.jpg',
                description: 'Легендарный V10 звучит потрясающе. Отличный баланс между скоростью и управляемостью. Хороша на техничных трассах.'
            },
            {
                id: 6,
                name: 'Mercedes-AMG GT3 Evo',
                brand: 'Mercedes-AMG',
                year: 2020,
                engine: '6.2L V8',
                power: 575,
                torque: 690,
                weight: 1315,
                topSpeed: 306,
                acceleration: 3.1,
                fuelConsumption: 3.6,
                powerWeight: 437,
                difficulty: 'Beginner Friendly',
                image: '/src/assets/cars/Mercedes-AMG-GT3-2015-576x324.jpg',
                description: 'Настоящий "трактор" среди GT3. Тяжёлая, но очень стабильная. Прощает многие ошибки. Идеальна для длинных гонок.'
            },
            {
                id: 7,
                name: 'Audi R8 LMS GT3 Evo 2',
                brand: 'Audi',
                year: 2022,
                engine: '5.2L V10',
                power: 585,
                torque: 685,
                weight: 1275,
                topSpeed: 310,
                acceleration: 3.0,
                fuelConsumption: 3.7,
                powerWeight: 459,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/Audi-R8-LMS-Evo-2019-576x324.jpg',
                description: 'Отличная аэродинамика и высокие скорости в поворотах. Требует точного пилотирования для раскрытия потенциала.'
            },
            {
                id: 8,
                name: 'Honda NSX GT3 Evo',
                brand: 'Honda',
                year: 2019,
                engine: '3.5L Twin-Turbo V6',
                power: 570,
                torque: 660,
                weight: 1260,
                topSpeed: 305,
                acceleration: 3.1,
                fuelConsumption: 3.5,
                powerWeight: 452,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/Honda-NSX-GT3-2017-576x324.jpg',
                description: 'Среднемоторная компоновка с отличным балансом. Экономичный расход топлива делает её хорошим выбором для эндуранс гонок.'
            },
            {
                id: 9,
                name: 'Aston Martin V8 Vantage',
                brand: 'Aston Martin',
                year: 2019,
                engine: '4.0L Twin-Turbo V8',
                power: 535,
                torque: 680,
                weight: 1320,
                topSpeed: 305,
                acceleration: 3.4,
                fuelConsumption: 3.9,
                powerWeight: 405,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/Aston-Martin-V8-Vantage-2019-576x324.jpg',
                description: 'Элегантный британский GT3 с узнаваемым дизайном Aston Martin. Машина предлагает отличный баланс между комфортом и спортивным характером.'
            },
            {
                id: 10,
                name: 'Aston Martin V12 Vantage',
                brand: 'Aston Martin',
                year: 2015,
                engine: '6.0L V12',
                power: 570,
                torque: 650,
                weight: 1350,
                topSpeed: 310,
                acceleration: 3.2,
                fuelConsumption: 4.1,
                powerWeight: 422,
                difficulty: 'Expert',
                image: '/src/assets/cars/Aston-Martin-V12-Vantage-2013-576x324.jpg',
                description: 'Настоящая мечта для любителей атмосферных моторов. Мощный 6-литровый V12 выдаёт потрясающий звук и отличную динамику.'
            },
            {
                id: 11,
                name: 'Audi R8 LMS',
                brand: 'Audi',
                year: 2015,
                engine: '5.2L V10',
                power: 570,
                torque: 680,
                weight: 1285,
                topSpeed: 308,
                acceleration: 3.1,
                fuelConsumption: 3.7,
                powerWeight: 443,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/Audi-R8-LMS-2015-576x324.jpg',
                description: 'Классический Audi R8 LMS с легендарным атмосферным V10.'
            },
            {
                id: 13,
                name: 'Bentley Continental GT3',
                brand: 'Bentley',
                year: 2015,
                engine: '4.0L Twin-Turbo V8',
                power: 550,
                torque: 680,
                weight: 1400,
                topSpeed: 300,
                acceleration: 3.5,
                fuelConsumption: 4.0,
                powerWeight: 393,
                difficulty: 'Beginner Friendly',
                image: '/src/assets/cars/Bentley-Continental-GT3-2015-1-576x324.jpg',
                description: 'Самый тяжёлый автомобиль в классе GT3. Идеальный выбор для новичков и длинных endurance-гонок.'
            },
            {
                id: 14,
                name: 'Bentley Continental GT3',
                brand: 'Bentley',
                year: 2018,
                engine: '4.0L Twin-Turbo V8',
                power: 565,
                torque: 700,
                weight: 1380,
                topSpeed: 305,
                acceleration: 3.3,
                fuelConsumption: 3.9,
                powerWeight: 409,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/Bentley-Continental-GT3-2018-1-576x324.jpg',
                description: 'Обновлённая и более мощная версия Bentley Continental GT3.'
            },
            {
                id: 18,
                name: 'Ford Mustang GT3',
                brand: 'Ford',
                year: 2024,
                engine: '5.0L V8',
                power: 580,
                torque: 650,
                weight: 1300,
                topSpeed: 310,
                acceleration: 3.1,
                fuelConsumption: 3.8,
                powerWeight: 446,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/HighresScreenshot00002-1080x608.jpg',
                description: 'Новый американский Mustang GT3 привнёс в класс свежий ветер.'
            },
            {
                id: 21,
                name: 'Jaguar Emil Frey G3',
                brand: 'Jaguar',
                year: 2012,
                engine: '5.0L Supercharged V8',
                power: 600,
                torque: 680,
                weight: 1350,
                topSpeed: 315,
                acceleration: 3.0,
                fuelConsumption: 4.0,
                powerWeight: 444,
                difficulty: 'Expert',
                image: '/src/assets/cars/Jaguar-Emil-Frey-G3-2012-576x324.jpg',
                description: 'Экстремальная и очень мощная версия Jaguar.'
            },
            {
                id: 32,
                name: 'Reiter Engineering R-EX GT3',
                brand: 'KTM',
                year: 2017,
                engine: '5.0L V8',
                power: 550,
                torque: 650,
                weight: 1320,
                topSpeed: 300,
                acceleration: 3.4,
                fuelConsumption: 3.9,
                powerWeight: 417,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/Reiter-Engineering-R-EX-GT3-2017-576x324.jpg',
                description: 'Редкий и необычный GT3, разработанный Reiter Engineering на базе KTM.'
            },
            {
                id: 33,
                name: 'Nissan GT-R Nismo GT3',
                brand: 'Nissan',
                year: 2018,
                engine: '3.8L Twin-Turbo V6',
                power: 565,
                torque: 700,
                weight: 1290,
                topSpeed: 308,
                acceleration: 3.1,
                fuelConsumption: 3.6,
                powerWeight: 438,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/Nissan-GT-R-Nismo-GT3-2018-1-576x324.jpg',
                description: 'Обновлённая версия легендарного Nissan GT-R Nismo GT3.'
            },
            {
                id: 34,
                name: 'Nissan GT-R Nismo GT3',
                brand: 'Nissan',
                year: 2015,
                engine: '3.8L Twin-Turbo V6',
                power: 550,
                torque: 680,
                weight: 1300,
                topSpeed: 305,
                acceleration: 3.2,
                fuelConsumption: 3.7,
                powerWeight: 423,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/Nissan-GT-R-Nismo-GT3-2015-1-576x324.jpg',
                description: 'Легендарный "Godzilla" в гоночном исполнении.'
            },
            {
                id: 35,
                name: 'McLaren 650S GT3',
                brand: 'McLaren',
                year: 2015,
                engine: '3.8L Twin-Turbo V8',
                power: 590,
                torque: 650,
                weight: 1260,
                topSpeed: 312,
                acceleration: 2.9,
                fuelConsumption: 3.8,
                powerWeight: 468,
                difficulty: 'Expert',
                image: '/src/assets/cars/McLaren-650S-GT3-2015-576x324.jpg',
                description: 'Ранняя GT3-модель McLaren. Очень лёгкая, быстрая и чувствительная к стилю вождения.'
            },
            {
                id: 36,
                name: 'McLaren 720S GT3 Evo',
                brand: 'McLaren',
                year: 2022,
                engine: '4.0L Twin-Turbo V8',
                power: 620,
                torque: 720,
                weight: 1280,
                topSpeed: 315,
                acceleration: 2.8,
                fuelConsumption: 3.7,
                powerWeight: 484,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/720showroom-1080x608.jpg',
                description: 'Одна из самых современных и технологичных машин в классе GT3.'
            },
            {
                id: 37,
                name: 'Lamborghini Huracán GT3',
                brand: 'Lamborghini',
                year: 2015,
                engine: '5.2L V10',
                power: 570,
                torque: 670,
                weight: 1285,
                topSpeed: 308,
                acceleration: 3.0,
                fuelConsumption: 3.8,
                powerWeight: 443,
                difficulty: 'Intermediate',
                image: '/src/assets/cars/Lamborghini-Huracan-GT3-2015-576x324.jpg',
                description: 'Яркий и невероятно эмоциональный автомобиль с атмосферным V10 двигателем.'
            },
            {
                id: 38,
                name: 'BMW M6 GT3',
                brand: 'BMW',
                year: 2017,
                engine: '4.4L Twin-Turbo V8',
                power: 585,
                torque: 700,
                weight: 1320,
                topSpeed: 310,
                acceleration: 3.0,
                fuelConsumption: 3.7,
                powerWeight: 443,
                difficulty: 'Expert',
                image: '/src/assets/cars/BMW-M6-GT3-2017-576x324.jpg',
                description: 'Мощный и агрессивный BMW M6 GT3 с огромным крутящим моментом.'
            },
            {
                id: 39,
                name: 'Ferrari 488 GT3',
                brand: 'Ferrari',
                year: 2018,
                engine: '3.9L Twin-Turbo V8',
                power: 595,
                torque: 700,
                weight: 1290,
                topSpeed: 310,
                acceleration: 3.0,
                fuelConsumption: 3.7,
                powerWeight: 461,
                difficulty: 'Beginner Friendly',
                image: '/src/assets/cars/Ferrari-488-GT3-2018-576x324.jpg',
                description: 'Очень сбалансированная и дружелюбная к пилоту версия Ferrari 488 GT3.'
            },
            {
                id: 40,
                name: 'Porsche 911 GT3 R (991 II)',
                brand: 'Porsche',
                year: 2019,
                engine: '4.0L Flat-6',
                power: 550,
                torque: 650,
                weight: 1260,
                topSpeed: 310,
                acceleration: 2.9,
                fuelConsumption: 3.5,
                powerWeight: 437,
                difficulty: 'Expert',
                image: '/src/assets/cars/Porsche-991II-GT3-R-2019-576x324.jpg',
                description: 'Классика жанра GT3 от Porsche. Заднемоторная компоновка требует высокого мастерства.'
            }
        ])

        // Расширенные данные трасс
        const tracks = ref([
            {
                id: 1,
                name: 'Spa-Francorchamps',
                country: 'Belgium',
                length: 7.004,
                corners: 19,
                elevation: 104,
                lapRecord: '2:16.458',
                surface: 'Medium Grip',
                tireWear: 'High',
                difficulty: 'Expert',
                image: './src/assets/Tracks/spa-n.svg',
                description: 'Легендарная трасса в Арденнах. Знаменитая связка Eau Rouge и Raidillon — один из самых сложных участков в автоспорте.',
                sectors: [
                    { name: 'La Source', speed: 80, gear: 1, note: 'Сильное торможение, осторожно с газом на выходе' },
                    { name: 'Eau Rouge', speed: 240, gear: 6, note: 'Полный газ, но точно попади в апекс на вершине' },
                    { name: 'Les Combes', speed: 180, gear: 4, note: 'Поздний апекс, используй всю ширину поребрика' },
                    { name: 'Blanchimont', speed: 270, gear: 6, note: 'Скоростной левый, можно чуть сбросить газ для стабильности' },
                    { name: 'Bus Stop Chicane', speed: 70, gear: 2, note: 'Атакуй поребрики, но не переборщи' }
                ]
            },
            {
                id: 2,
                name: 'Monza',
                country: 'Italy',
                length: 5.793,
                corners: 11,
                elevation: 38,
                lapRecord: '1:46.324',
                surface: 'Low Grip',
                tireWear: 'Medium',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/monza-n.svg',
                description: 'Храм скорости. Длинные прямые и жёсткие торможения требуют идеального баланса аэродинамики.',
                sectors: [
                    { name: 'Variante del Rettifilo', speed: 80, gear: 1, note: 'Жёсткое торможение, используй поребрики' },
                    { name: 'Curva Grande', speed: 250, gear: 6, note: 'Полный газ, но следи за выходом на Roggia' },
                    { name: 'Lesmo 1', speed: 140, gear: 3, note: 'Среднескоростной правый, важен выход' },
                    { name: 'Ascari', speed: 190, gear: 4, note: 'S-образная связка, пропусти первый апекс для лучшего выхода' },
                    { name: 'Parabolica', speed: 170, gear: 4, note: 'Ранний апекс, газ как можно раньше' }
                ]
            },
            {
                id: 3,
                name: 'Nürburgring GP',
                country: 'Germany',
                length: 5.148,
                corners: 16,
                elevation: 55,
                lapRecord: '1:54.472',
                surface: 'Medium Grip',
                tireWear: 'Medium',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/nurburgring-n.svg',
                description: 'Техничная трасса с перепадом высот. Требует точного пилотирования и хорошего понимания траекторий.',
                sectors: [
                    { name: 'Turn 1', speed: 130, gear: 3, note: 'Слепой апекс, ориентируйся на поребрик' },
                    { name: 'Mercedes Arena', speed: 100, gear: 2, note: 'Техничная секция, плавные входы в повороты' },
                    { name: 'Schumacher S', speed: 190, gear: 5, note: 'Скоростная S, можно атаковать поребрики' },
                    { name: 'NGK-Schikane', speed: 70, gear: 2, note: 'Медленная шикана, жертвуй первым для второго' },
                    { name: 'Coca-Cola Kurve', speed: 130, gear: 3, note: 'Поздний апекс, важен разгон на прямую' }
                ]
            },
            {
                id: 4,
                name: 'Silverstone',
                country: 'Great Britain',
                length: 5.891,
                corners: 18,
                elevation: 17,
                lapRecord: '1:57.583',
                surface: 'High Grip',
                tireWear: 'High',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/silverstone-n.svg',
                description: 'Родина Формулы 1. Скоростная трасса с легендарной связкой Maggots-Becketts.',
                sectors: [
                    { name: 'Copse', speed: 270, gear: 6, note: 'Полный газ в квалификации, осторожно в гонке' },
                    { name: 'Maggots-Becketts', speed: 230, gear: 5, note: 'Связка скоростных поворотов, используй всю ширину' },
                    { name: 'Stowe', speed: 160, gear: 4, note: 'Важен выход на Club Straight' },
                    { name: 'Club', speed: 120, gear: 3, note: 'Финальная шикана, не спеши с газом' }
                ]
            },
            {
                id: 5,
                name: 'Barcelona',
                country: 'Spain',
                length: 4.655,
                corners: 16,
                elevation: 30,
                lapRecord: '1:42.975',
                surface: 'Medium Grip',
                tireWear: 'Medium',
                difficulty: 'Beginner Friendly',
                image: './src/assets/Tracks/barcelona-n.svg',
                description: 'Классическая тестовая трасса. Длинные повороты отлично подходят для изучения поведения машины.',
                sectors: [
                    { name: 'Turn 1', speed: 130, gear: 3, note: 'Слепой вход, ориентируйся на разметку' },
                    { name: 'Turn 3', speed: 180, gear: 4, note: 'Длинный правый, важен средний сектор' },
                    { name: 'Turn 9', speed: 100, gear: 2, note: 'Крутой правый в горку, не перекрути колёса' },
                    { name: 'Turn 10', speed: 170, gear: 4, note: 'Левый через поребрик, можно атаковать' },
                    { name: 'Chicane', speed: 80, gear: 2, note: 'Финальная шикана, жертвуй первым апексом' }
                ]
            },
            {
                id: 6,
                name: 'Paul Ricard',
                country: 'France',
                length: 5.861,
                corners: 15,
                elevation: 25,
                lapRecord: '1:52.860',
                surface: 'Medium Grip',
                tireWear: 'Low',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/paul-ricard-n.svg',
                description: 'Современный автодром с разноцветными зонами безопасности. Длинная прямая Mistral — главная особенность.',
                sectors: [
                    { name: 'Signes', speed: 280, gear: 6, note: 'Скоростной правый, требует смелости' },
                    { name: 'Double Droite du Beausset', speed: 190, gear: 5, note: 'Двойной правый, используй всю ширину' },
                    { name: 'Virage de Bendor', speed: 120, gear: 3, note: 'Медленный левый перед пит-лейн' }
                ]
            },
            {
                id: 7,
                name: 'Brands Hatch',
                country: 'Great Britain',
                length: 3.916,
                corners: 9,
                elevation: 46,
                lapRecord: '1:22.152',
                surface: 'Medium Grip',
                tireWear: 'Low',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/brands-hatch-n.svg',
                description: 'Короткая, но требовательная трасса в естественном амфитеатре. Перепад высот добавляет сложности.',
                sectors: [
                    { name: 'Paddock Hill Bend', speed: 130, gear: 3, note: 'Слепой спуск, тормози раньше чем кажется' },
                    { name: 'Druids', speed: 70, gear: 2, note: 'Медленный хайрпин, важен разгон' },
                    { name: 'Surtees', speed: 160, gear: 4, note: 'Быстрый левый, можно в полный газ' },
                    { name: 'Clearways', speed: 140, gear: 3, note: 'Финальный поворот, выход на главную прямую' }
                ]
            },
            {
                id: 8,
                name: 'Hungaroring',
                country: 'Hungary',
                length: 4.381,
                corners: 14,
                elevation: 36,
                lapRecord: '1:41.470',
                surface: 'Medium Grip',
                tireWear: 'Medium',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/hungaroring-n.svg',
                description: '"Монако без стен". Извилистая трасса, где механическое сцепление важнее аэродинамики.',
                sectors: [
                    { name: 'Turn 1', speed: 100, gear: 2, note: 'Крутой правый, следи за блокировкой' },
                    { name: 'Turn 4', speed: 170, gear: 4, note: 'Слепой правый на подъёме' },
                    { name: 'Chicane', speed: 90, gear: 2, note: 'Шикана перед стартовой прямой, атакуй поребрики' }
                ]
            },

            {
                id: 9,
                name: 'Zolder',
                country: 'Belgium',
                length: 4.011,
                corners: 10,
                elevation: 18,
                lapRecord: '1:28.700',
                surface: 'Medium Grip',
                tireWear: 'Medium',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/zolder-n.svg',
                description: 'Узкая и техничная трасса с агрессивными поребриками. Ошибки здесь наказываются моментально.',
                sectors: [
                    { name: 'First Chicane', speed: 90, gear: 2, note: 'Атакуй поребрики осторожно' },
                    { name: 'Kanaalbocht', speed: 80, gear: 2, note: 'Поздний апекс помогает на выходе' },
                    { name: 'Jacky Ickx', speed: 160, gear: 4, note: 'Скоростной левый, важна стабильность' }
                ]
            },
            {
                id: 10,
                name: 'Misano',
                country: 'Italy',
                length: 4.226,
                corners: 16,
                elevation: 32,
                lapRecord: '1:33.500',
                surface: 'High Grip',
                tireWear: 'Medium',
                difficulty: 'Beginner Friendly',
                image: './src/assets/Tracks/misano-n.svg',
                description: 'Современная трасса с плавными поворотами и хорошими зонами безопасности.',
                sectors: [
                    { name: 'Turn 1', speed: 120, gear: 3, note: 'Важно не потерять скорость на выходе' },
                    { name: 'Curvone', speed: 210, gear: 5, note: 'Скоростной правый в полный газ' },
                    { name: 'Carro', speed: 90, gear: 2, note: 'Медленный левый, следи за тягой' }
                ]
            },

            {
                id: 11,
                name: 'Imola',
                country: 'Italy',
                length: 4.909,
                corners: 19,
                elevation: 30,
                lapRecord: '1:41.200',
                surface: 'Medium Grip',
                tireWear: 'High',
                difficulty: 'Expert',
                image: './src/assets/Tracks/imola.svg',
                description: 'Классическая итальянская трасса с узкими зонами вылета и агрессивными поребриками.',
                sectors: [
                    { name: 'Tamburello', speed: 170, gear: 4, note: 'Атакуй поребрики аккуратно' },
                    { name: 'Tosa', speed: 75, gear: 2, note: 'Медленный хайрпин в подъём' },
                    { name: 'Acque Minerali', speed: 150, gear: 3, note: 'Сложная связка с перепадом высот' }
                ]
            },

            {
                id: 12,
                name: 'Kyalami',
                country: 'South Africa',
                length: 4.522,
                corners: 16,
                elevation: 41,
                lapRecord: '1:40.000',
                surface: 'Medium Grip',
                tireWear: 'Medium',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/Kyalami.svg',
                description: 'Быстрая трасса с большими перепадами высот и длинными скоростными дугами.',
                sectors: [
                    { name: 'Crowthorne', speed: 110, gear: 3, note: 'Тормози по прямой' },
                    { name: 'Mineshaft', speed: 220, gear: 5, note: 'Очень быстрый слепой поворот' },
                    { name: 'Sunset', speed: 140, gear: 4, note: 'Важен ранний выход на прямую' }
                ]
            },

            {
                id: 13,
                name: 'Suzuka',
                country: 'Japan',
                length: 5.807,
                corners: 18,
                elevation: 40,
                lapRecord: '1:59.800',
                surface: 'High Grip',
                tireWear: 'High',
                difficulty: 'Expert',
                image: './src/assets/Tracks/Suzuka.svg',
                description: 'Легендарная японская трасса с уникальной конфигурацией в виде восьмёрки.',
                sectors: [
                    { name: 'S Curves', speed: 170, gear: 4, note: 'Очень важен ритм поворотов' },
                    { name: 'Degner', speed: 130, gear: 3, note: 'Ошибки здесь дорого стоят' },
                    { name: '130R', speed: 260, gear: 6, note: 'Один из самых быстрых поворотов в ACC' }
                    ]
            },

            {
                id: 14,
                name: 'Laguna Seca',
                country: 'USA',
                length: 3.602,
                corners: 11,
                elevation: 55,
                lapRecord: '1:22.100',
                surface: 'Medium Grip',
                tireWear: 'High',
                difficulty: 'Expert',
                image: './src/assets/Tracks/laguna.svg',
                description: 'Знаменитая трасса с легендарным Corkscrew.',
                sectors: [
                    { name: 'Andretti Hairpin', speed: 90, gear: 2, note: 'Поздний апекс' },
                    { name: 'Corkscrew', speed: 80, gear: 2, note: 'Слепой спуск' }
                ]
            },

            {
                id: 16,
                name: 'Donington Park',
                country: 'Great Britain',
                length: 4.023,
                corners: 12,
                elevation: 34,
                lapRecord: '1:26.800',
                surface: 'Medium Grip',
                tireWear: 'Low',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/donington.svg',
                description: 'Быстрая британская трасса с плавными поворотами.',
                sectors: [
                    { name: 'Redgate', speed: 120, gear: 3, note: 'Не потеряй скорость' },
                    { name: 'Craner Curves', speed: 210, gear: 5, note: 'Очень быстрый спуск' }
                ]
            },

            {
                id: 17,
                name: 'Oulton Park',
                country: 'Great Britain',
                length: 4.307,
                corners: 17,
                elevation: 38,
                lapRecord: '1:34.700',
                surface: 'Medium Grip',
                tireWear: 'Medium',
                difficulty: 'Expert',
                image: './src/assets/Tracks/Oulton.svg',
                description: 'Узкая трасса с минимальными зонами безопасности.',
                sectors: [
                    { name: 'Old Hall', speed: 120, gear: 3, note: 'Важен выход' },
                    { name: 'Druids', speed: 140, gear: 4, note: 'Скоростной подъём' }
                ]
            },

            {
                id: 18,
                name: 'Snetterton',
                country: 'Great Britain',
                length: 4.779,
                corners: 12,
                elevation: 20,
                lapRecord: '1:47.200',
                surface: 'Low Grip',
                tireWear: 'Low',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/Snetterton.svg',
                description: 'Трасса с длинными прямыми и медленными поворотами.',
                sectors: [
                    { name: 'Riches', speed: 170, gear: 4, note: 'Быстрый правый' },
                    { name: 'Murrays', speed: 70, gear: 2, note: 'Медленный финальный поворот' }
                ]
            },

            {
                id: 19,
                name: 'Watkins Glen',
                country: 'USA',
                length: 5.430,
                corners: 11,
                elevation: 41,
                lapRecord: '1:43.900',
                surface: 'High Grip',
                tireWear: 'Medium',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/Watkins.svg',
                description: 'Американская трасса с быстрыми S-поворотами.',
                sectors: [
                    { name: 'Esses', speed: 240, gear: 6, note: 'Полный газ' },
                    { name: 'Bus Stop', speed: 120, gear: 3, note: 'Атакуй поребрики' }
                ]
            },

            {
                id: 20,
                name: 'Indianapolis',
                country: 'USA',
                length: 4.192,
                corners: 14,
                elevation: 12,
                lapRecord: '1:34.400',
                surface: 'High Grip',
                tireWear: 'Medium',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/indi.svg',
                description: 'Легендарный американский автодром.',
                sectors: [
                    { name: 'Turn 1', speed: 90, gear: 2, note: 'Позднее торможение' },
                    { name: 'Oval Section', speed: 260, gear: 6, note: 'Высокая скорость' }
                ]
            },

            {
                id: 21,
                name: 'Valencia',
                country: 'Spain',
                length: 4.005,
                corners: 14,
                elevation: 28,
                lapRecord: '1:31.000',
                surface: 'Medium Grip',
                tireWear: 'Medium',
                difficulty: 'Beginner Friendly',
                image: './src/assets/Tracks/Valencia.svg',
                description: 'Техничная трасса с хорошим балансом медленных и быстрых секций.',
                sectors: [
                    { name: 'Turn 2', speed: 100, gear: 2, note: 'Ранний апекс' },
                    { name: 'Final Corner', speed: 140, gear: 3, note: 'Хороший выход на прямую' }
                ]
            },

            {
                id: 22,
                name: 'Circuit of the Americas',
                country: 'USA',
                length: 5.513,
                corners: 20,
                elevation: 41,
                lapRecord: '2:03.700',
                surface: 'High Grip',
                tireWear: 'High',
                difficulty: 'Expert',
                image: './src/assets/Tracks/cota.svg',
                description: 'Современная трасса Formula 1 с огромным первым подъёмом.',
                sectors: [
                    { name: 'Turn 1', speed: 80, gear: 1, note: 'Крутой подъём' },
                    { name: 'Esses', speed: 180, gear: 4, note: 'Быстрая смена направления' }
                ]
            },

            {
                id: 23,
                name: 'Red Bull Ring',
                country: 'Austria',
                length: 4.318,
                corners: 10,
                elevation: 65,
                lapRecord: '1:28.300',
                surface: 'High Grip',
                tireWear: 'Medium',
                difficulty: 'Beginner Friendly',
                image: './src/assets/Tracks/austria-n.svg',
                description: 'Короткая и быстрая трасса в австрийских Альпах.',
                sectors: [
                    { name: 'Turn 1', speed: 150, gear: 4, note: 'Не заедь слишком широко' },
                    { name: 'Turn 3', speed: 70, gear: 2, note: 'Лучшее место для обгонов' }
                ]
            },

            {
                id: 24,
                name: 'Nürburgring 24h',
                country: 'Germany',
                length: 25.378,
                corners: 170,
                elevation: 300,
                lapRecord: '8:09.000',
                surface: 'Low Grip',
                tireWear: 'Extreme',
                difficulty: 'Expert',
                image: './src/assets/Tracks/NBR24h-ok.svg',
                description: 'Легендарная Nordschleife в конфигурации 24H. Самая длинная и сложная трасса в ACC с огромными перепадами высот и слепыми поворотами.',
                sectors: [
                    { name: 'Hatzenbach', speed: 180, gear: 5, note: 'Быстрая связка поворотов, важен ритм' },
                    { name: 'Fuchsröhre', speed: 260, gear: 6, note: 'Сильный спуск и компрессия' },
                    { name: 'Karussell', speed: 60, gear: 2, note: 'Бетонный бэнк — не вылетай' },
                    { name: 'Döttinger Höhe', speed: 290, gear: 6, note: 'Огромная прямая, полный газ' },
                    { name: 'Schwedenkreuz', speed: 250, gear: 6, note: 'Очень быстрый слепой поворот' }
                ]
            },

            {
                id: 25,
                name: 'Zandvoort',
                country: 'Netherlands',
                length: 4.259,
                corners: 14,
                elevation: 32,
                lapRecord: '1:35.600',
                surface: 'Medium Grip',
                tireWear: 'Medium',
                difficulty: 'Intermediate',
                image: './src/assets/Tracks/zandvoort.svg',
                description: 'Голландская трасса с легендарными банками. Сложная для обгонов, требует идеальной траектории.',
                sectors: [
                    { name: 'Turn 1', speed: 110, gear: 3, note: 'Банк, используй наклон' },
                    { name: 'Hugenholtz', speed: 140, gear: 4, note: 'Длинный правый с переменным радиусом' },
                    { name: 'Arie Luyendijk', speed: 60, gear: 2, note: 'Медленная шикана' }
                ]
            }

        ])

        // Данные для дашборда
        const bestLapTime = ref('2:17.432')
        const currentTrack = ref('Spa-Francorchamps')
        const topSpeed = ref(312)
        const safetyRating = ref(95)
        const totalLaps = ref(1247)
        const winsCount = ref(23)
        const podiumsCount = ref(67)
        const raceHours = ref(156)

        // История последних кругов для графика
        const lapHistory = ref([
            { lap: 1, time: 142.5 },
            { lap: 2, time: 141.8 },
            { lap: 3, time: 140.2 },
            { lap: 4, time: 139.5 },
            { lap: 5, time: 138.9 },
            { lap: 6, time: 139.2 },
            { lap: 7, time: 138.5 },
            { lap: 8, time: 137.8 },
            { lap: 9, time: 137.4 },
            { lap: 10, time: 138.1 }
        ])

        // Погодные условия
        const weatherConditions = ref([
            { time: '10:00', temp: 22, track: 28, rain: 0 },
            { time: '11:00', temp: 24, track: 32, rain: 10 },
            { time: '12:00', temp: 25, track: 35, rain: 30 },
            { time: '13:00', temp: 23, track: 30, rain: 60 },
            { time: '14:00', temp: 21, track: 27, rain: 40 },
            { time: '15:00', temp: 20, track: 25, rain: 15 }
        ])

        // Вычисляемые свойства
        const carsCount = computed(() => cars.value.length)
        const tracksCount = computed(() => tracks.value.length)
        const winRate = computed(() => Math.round((winsCount.value / totalLaps.value) * 1000) / 10)

        const bestSpeed = computed(() => {
            return Math.max(...cars.value.map(c => c.topSpeed))
        })

        // Действия
        function addLapTime(time) {
            bestLapTime.value = time
            const newLap = {
                lap: lapHistory.value.length + 1,
                time: parseFloat(time.split(':')[1] || time)
            }
            lapHistory.value.push(newLap)
            if (lapHistory.value.length > 15) {
                lapHistory.value.shift()
            }
        }

        function changeTrack(trackName) {
            currentTrack.value = trackName
        }

        function simulateSession() {
            const randomTime = `2:${String(Math.floor(Math.random() * 20) + 10).padStart(2, '0')}.${String(Math.floor(Math.random() * 999)).padStart(3, '0')}`
            addLapTime(randomTime)
            topSpeed.value = Math.floor(Math.random() * 20) + 300
            totalLaps.value += 1
            if (Math.random() > 0.8) {
                winsCount.value += 1
                podiumsCount.value += 1
            } else if (Math.random() > 0.6) {
                podiumsCount.value += 1
            }
        }

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
            lapHistory,
            weatherConditions,
            carsCount,
            tracksCount,
            winRate,
            bestSpeed,
            addLapTime,
            changeTrack,
            simulateSession
        }
    })