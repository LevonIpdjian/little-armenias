// ===== Data - Armenian Points of Interest (from prototype_bdd_little_armenias.csv) =====
const samplePOIs = [
    {
        "id": 1,
        "name": {
            "en": "palermo",
            "fr": "palermo",
            "hy": "palermo"
        },
        "category": "neighborhood",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "Every Armenian traveling to Argentina’s capital should start in the Palermo area. This Armenian neighborhood is famous for its restaurants, street art, nightclubs, shopping, and Jorge Luis Borges. Similar in atmosphere to New York’s SoHo or Paris’ Marais, Palermo takes on a whole other dimension when you stroll along the street that crosses through its heart: Armenia Street. The “Plaza Immigrantes de Armenia” (or “Plaza Armenia”) serves as a reminder of the first Armenians from the 1920s, who settled in a neighborhood that was once just a modest suburb of the capital.The neighborhood really unfolds when you stroll along its lively main street and stumble upon the Armenian buildings dotted throughout, such as the offices of the Armenian Cultural Union or historical associations uniting Armenians from Hadjin (Hadjin Dun), Marash (UCA Marash), and Aintab (UPA Aintab). Take a look at the Armenian murals inside Niceto Vega’s patio urbano.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 2,
        "name": {
            "en": "St. Gregory the Illuminator Cathedral",
            "fr": "St. Gregory the Illuminator Cathedral",
            "hy": "St. Gregory the Illuminator Cathedral"
        },
        "category": "church",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Armenia 1353, C1414DKC CABA",
        "lat": -34.5918456,
        "lng": -58.4307277,
        "description": {
            "en": "In 1938, St. Gregory the Illuminator Cathedral (San Gregorio el Illuminador) was inaugurated on Armenia Street. With both Armenian and Argentinian flags waving over passers-by, the cathedral is a very visible symbol of the Armenian presence in the neighborhood.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 3,
        "name": {
            "en": "the Armenian Cultural Association,",
            "fr": "the Armenian Cultural Association,",
            "hy": "the Armenian Cultural Association,"
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Armenia 1366, C1414 DKD, CABA",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "The Armenian Cultural Association’s building is famous for its underground tango classes, and also for the restaurant Armenia, located on the level above and is one of the most popular restaurants in Buenos Aires. The former agoump of the ARF has become a restaurant fittingly named Viejo Agoump.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 4,
        "name": {
            "en": "Instituto Educativo San Gregorio",
            "fr": "Instituto Educativo San Gregorio",
            "hy": "Instituto Educativo San Gregorio"
        },
        "category": "school",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Av. Dorrego 2124 Palermo, CABA",
        "lat": -34.577786,
        "lng": -58.4399848,
        "description": {
            "en": "There are two Armenian schools in the Instituto Educativo San Gregorio in the church compound and AGBU’s Instituto Marie Manoogian.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 5,
        "name": {
            "en": "Tekeyan Cultural Center",
            "fr": "Tekeyan Cultural Center",
            "hy": "Tekeyan Cultural Center"
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Armenia 1329 C1414 DKC Cdad Autonoma buenos aires",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "The Diario Armenia, the Armenian Cultural Association newspaper since 1931, is the main newspaper of the Spanish-speaking diaspora. The newspaper Sardarabad, founded in 1975, is published by the Tekeyan Cultural Center (affiliated with the Ramgavar party), which is also located on Armenia Street.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 6,
        "name": {
            "en": "AGBU",
            "fr": "AGBU",
            "hy": "AGBU"
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Armenia 1322, 1414DKD CABA",
        "lat": -34.5918791,
        "lng": -58.431195,
        "description": {
            "en": "During the weekend, you can eat at the AGBU during Cenas de los Viernes y Sábados (Friday and Saturday nights) and at the Centro Armenio during Shish de los Viernes (Friday nights).",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 7,
        "name": {
            "en": "Tadron",
            "fr": "Tadron",
            "hy": "Tadron"
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Av. Cnel. Niceto Vega 4802, C1414BEF CABA",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "the Tadron Teatro, an independent Armenian theater where you can watch performances or simply drop in for coffee.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 8,
        "name": {
            "en": "Sarkis",
            "fr": "Sarkis",
            "hy": "Sarkis"
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Thames 1101 Corner Jufre, Buenos Aires C1414DCW",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "endorsed by numerous guidebooks, from Guide du Routard to Lonely Planet. Try to get over there on a weekday to avoid lengthy lines.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 9,
        "name": {
            "en": "Naní Cocina Armenia",
            "fr": "Naní Cocina Armenia",
            "hy": "Naní Cocina Armenia"
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Gurruchaga 1088 esq Jufre Villa Crespo - CABA",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "opened its doors in 2021 and is definitely worth a try!",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 10,
        "name": {
            "en": "Panadería y Confitería Armenia",
            "fr": "Panadería y Confitería Armenia",
            "hy": "Panadería y Confitería Armenia"
        },
        "category": "shop",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Av. Raúl Scalabrini Ortiz 1317, Buenos Aires, Argentina, 1414",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "has been baking Armenian pastry in the same spot since 1930.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 11,
        "name": {
            "en": "Medio Oriente",
            "fr": "Medio Oriente",
            "hy": "Medio Oriente"
        },
        "category": "shop",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Jose Antonio Cabrera 4702 Palermo Soho, Buenos Aires",
        "lat": -34.592166,
        "lng": -58.429382,
        "description": {
            "en": "has one of the city’s best lahmajun, and a lot of products imported from Armenia.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 12,
        "name": {
            "en": "Cathedral of Our Lady of Narek",
            "fr": "Cathedral of Our Lady of Narek",
            "hy": "Cathedral of Our Lady of Narek"
        },
        "category": "church",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Charcas 3529, Buenos Aires, CABA 1425",
        "lat": -34.5895942,
        "lng": -58.4149854,
        "description": {
            "en": "the Armenian Catholic Cathedral of Our Lady of Narek (Nuestra Señora de Narek) is one of the community’s primary religious institutions.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 13,
        "name": {
            "en": "Monte Ararat Square",
            "fr": "Monte Ararat Square",
            "hy": "Monte Ararat Square"
        },
        "category": "monument",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Buenos Aires, Consejo 1414",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "It is noted for its metal reconstruction of Mount Ararat and its Armenian Genocide memorial, a miniature version of the one in Tsitsernakaberd.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 14,
        "name": {
            "en": "Polo Club-Vicky Comida Armenia",
            "fr": "Polo Club-Vicky Comida Armenia",
            "hy": "Polo Club-Vicky Comida Armenia"
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "4300, Av. del Libertador A l'angle de Dorrego",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "Inside the polo club (Campo Argentino de Polo), don’t miss the Armenian specialties at Viky Comida Armenia!",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 15,
        "name": {
            "en": "Lago de Regatas Park",
            "fr": "Lago de Regatas Park",
            "hy": "Lago de Regatas Park"
        },
        "category": "monument",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Av. Ernesto Tornquist 80, C1426 Cdad",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "a khachkar was put in the Lago de Regatas Park, near the lake. Near the khachkar, a garden was designed to represent the shape of an Armenian cross seen from the sky. In Memory Park (Parque de la Memoria), a plaque pays tribute to the Argentinian Armenians killed during the military dictatorship.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 16,
        "name": {
            "en": "Colegio Mekhitarista",
            "fr": "Colegio Mekhitarista",
            "hy": "Colegio Mekhitarista"
        },
        "category": "school",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Virrey del Pino 3511, C1426 CABA",
        "lat": -34.5724034,
        "lng": -58.4651718,
        "description": {
            "en": "Is the only school of the Mekhitarist Fathers in South America, was founded in 1956.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 17,
        "name": {
            "en": "Anoush",
            "fr": "Anoush",
            "hy": "Anoush"
        },
        "category": "shop",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Calle Boyaca 1888, Buenos Aires C1416AAP",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 18,
        "name": {
            "en": "Layla",
            "fr": "Layla",
            "hy": "Layla"
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 19,
        "name": {
            "en": "St. George",
            "fr": "St. George",
            "hy": "St. George"
        },
        "category": "church",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Av. Raúl Scalabrini Ortiz 1261, Buenos Aires",
        "lat": -34.5933792,
        "lng": -58.4284635,
        "description": {
            "en": "St. George’s Church (San Jorge) was inaugurated in 1968. The Colegio Armenio is located in the church compound.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 20,
        "name": {
            "en": "The Zona Norte",
            "fr": "The Zona Norte",
            "hy": "The Zona Norte"
        },
        "category": "neighborhood",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "The Zona Norte starts beyond Belgrano, and it’s generally a desirable area among the city’s more well-off classes. In the residential neighborhood of Vincente López, the Armenian community has existed since the 1920s, but it was further strengthened in the 1950s with a new wave of Armenian immigrants coming from Istanbul. You have a handful of Armenian restaurants: Marmara, Keif and Aramé.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 21,
        "name": {
            "en": "Clube Armenio de la Zona Norte",
            "fr": "Clube Armenio de la Zona Norte",
            "hy": "Clube Armenio de la Zona Norte"
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Las Gaviotas 1050 street in San Isidro",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "Open to the public in summer.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 22,
        "name": {
            "en": "Genocide Memorial",
            "fr": "Genocide Memorial",
            "hy": "Genocide Memorial"
        },
        "category": "monument",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Martinez Plazoleta Armenia",
        "lat": -34.6095579,
        "lng": -58.3887904,
        "description": {
            "en": "Inaugurated in 2022.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 23,
        "name": {
            "en": "Church of the Holy Cross of Varak",
            "fr": "Church of the Holy Cross of Varak",
            "hy": "Church of the Holy Cross of Varak"
        },
        "category": "church",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Jose marti 1562 flores 1406",
        "lat": -34.6469668,
        "lng": -58.4602217,
        "description": {
            "en": "(Santa Cruz de Varak) became the first Armenian church in Buenos Aires. The Colegio Arzruni, founded the same year, still stands next to the church.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 24,
        "name": {
            "en": "Armenian Evangelical Church,",
            "fr": "Armenian Evangelical Church,",
            "hy": "Armenian Evangelical Church,"
        },
        "category": "church",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Zuviria 3350",
        "lat": -34.6484479,
        "lng": -58.4630984,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 25,
        "name": {
            "en": "st Paul",
            "fr": "st Paul",
            "hy": "st Paul"
        },
        "category": "church",
        "country": "Argentina",
        "city": "Liniers",
        "address": "",
        "lat": -34.6388693,
        "lng": -58.526338,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 26,
        "name": {
            "en": "homentmen",
            "fr": "homentmen",
            "hy": "homentmen"
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "",
        "address": "Villa sarmiento",
        "lat": -31.9349513,
        "lng": -65.1923336,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 27,
        "name": {
            "en": "bakchellian school",
            "fr": "bakchellian school",
            "hy": "bakchellian school"
        },
        "category": "school",
        "country": "Argentina",
        "city": "",
        "address": "Villa soldati",
        "lat": -34.6622843,
        "lng": -58.4410592,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 28,
        "name": {
            "en": "armenian cemetry",
            "fr": "armenian cemetry",
            "hy": "armenian cemetry"
        },
        "category": "monument",
        "country": "Argentina",
        "city": "san justo",
        "address": "",
        "lat": -34.6774186,
        "lng": -58.5607837,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 29,
        "name": {
            "en": "st james",
            "fr": "st james",
            "hy": "st james"
        },
        "category": "church",
        "country": "Argentina",
        "city": "valentin alsina",
        "address": "",
        "lat": -34.6719714,
        "lng": -58.4130153,
        "description": {
            "en": "St. James Church (Surp Hagop) was inaugurated in 1929. Don’t miss the façade of the Colegio Armenio Jrimian, which is decorated with colorful graffiti inspired by the Armenian cause. There is also an Armenian Genocide memorial, and the caterer Lo de Silva offers Armenian specialties.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 30,
        "name": {
            "en": "club de campo armenia",
            "fr": "club de campo armenia",
            "hy": "club de campo armenia"
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "pilar",
        "address": "",
        "lat": -34.4570918,
        "lng": -58.9141609,
        "description": {
            "en": "Situated about sixty kilometers from Buenos Aires, the city of Pilar is home to the Club de Campo Armenia. This 64-hectare private community, comprised of a golf course and residences belonging to armenian families.In 2015, the Armenian Martyrs Square and an Armenian Genocide memorial were inaugurated there.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 31,
        "name": {
            "en": "armenian stadium",
            "fr": "armenian stadium",
            "hy": "armenian stadium"
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Ingeniero Maschwitz",
        "address": "",
        "lat": -34.3829548,
        "lng": -58.7363667,
        "description": {
            "en": "Armenian Stadium (Estadio Armenio) and its football team, Deportivo Armenio.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 32,
        "name": {
            "en": "plazoleta armenia",
            "fr": "plazoleta armenia",
            "hy": "plazoleta armenia"
        },
        "category": "monument",
        "country": "Argentina",
        "city": "tigre",
        "address": "",
        "lat": -34.4235341,
        "lng": -58.5817628,
        "description": {
            "en": "popular weekend getaway for weary porteños, the Plazoleta Armenia and a genocide memorial were inaugurated in 2022.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 33,
        "name": {
            "en": "st George",
            "fr": "st George",
            "hy": "st George"
        },
        "category": "church",
        "country": "Argentina",
        "city": "Cordoba",
        "address": "Av. Maipú 66, Cordoba, Cordoba, 5000",
        "lat": -31.4164874,
        "lng": -64.1796214,
        "description": {
            "en": "It is the first Armenian church in Latin America, St. George’s Church (Surp Kevork), built in 1926.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 34,
        "name": {
            "en": "ARF club Antranig",
            "fr": "ARF club Antranig",
            "hy": "ARF club Antranig"
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Cordoba",
        "address": "Garay 2057, Córdoba (Córdoba, Argentina) 5000",
        "lat": -31.4166867,
        "lng": -64.1834193,
        "description": {
            "en": "The grave of Aram Yerganian, who assassinated Behaeddin Sakir for his role in the Armenian genocide, is located inside Club Antranik. In the area that even the street signs on the neighborhood’s main roads are bilingual; they’re written in both Spanish and Armenian.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 35,
        "name": {
            "en": "Armenian genocide Memorial",
            "fr": "Armenian genocide Memorial",
            "hy": "Armenian genocide Memorial"
        },
        "category": "monument",
        "country": "Argentina",
        "city": "Rosario",
        "address": "Av. Estanislao López 1800, S2000 Rosario, Santa Fe",
        "lat": -32.9263562,
        "lng": -60.6593486,
        "description": {
            "en": "Park,",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 36,
        "name": {
            "en": "Residentes Armenios",
            "fr": "Residentes Armenios",
            "hy": "Residentes Armenios"
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Mar Del Plata",
        "address": "11 de Septiembre 3680 - Mar del Plata",
        "lat": -37.9899687,
        "lng": -57.554579,
        "description": {
            "en": "The local Armenian organization, Residentes Armenios, offers Armenian food on Friday and Saturday night.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 37,
        "name": {
            "en": "Kotayk",
            "fr": "Kotayk",
            "hy": "Kotayk"
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Mendoza",
        "address": "Maestra Durand 8097 - Los Corralitos, Mendoza",
        "lat": -34.5970325,
        "lng": -68.7304797,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 38,
        "name": {
            "en": "El Aguila",
            "fr": "El Aguila",
            "hy": "El Aguila"
        },
        "category": "monument",
        "country": "Argentina",
        "city": "corrientes",
        "address": "Libertad y Ruta 12, Corrientes",
        "lat": -29.0177384,
        "lng": -57.8869739,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 40,
        "name": {
            "en": "Church Of Holly Ressurection",
            "fr": "Church Of Holly Ressurection",
            "hy": "Church Of Holly Ressurection"
        },
        "category": "church",
        "country": "Australia",
        "city": "Sydney",
        "address": "10 Macquarie Street, Chatswood NSW 2067",
        "lat": -33.792559,
        "lng": 151.1913737,
        "description": {
            "en": "The Church of Holy Resurrection was inaugurated in 1966",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 41,
        "name": {
            "en": "Armenian Evangelic Church of Sydney",
            "fr": "Armenian Evangelic Church of Sydney",
            "hy": "Armenian Evangelic Church of Sydney"
        },
        "category": "church",
        "country": "Australia",
        "city": "Sydney",
        "address": "32 Frenchs Rd Willoughby NSW, 2068",
        "lat": -33.8074922,
        "lng": 151.2021395,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 42,
        "name": {
            "en": "Armenian Evangelical Brethren church",
            "fr": "Armenian Evangelical Brethren church",
            "hy": "Armenian Evangelical Brethren church"
        },
        "category": "church",
        "country": "Australia",
        "city": "Sydney",
        "address": "184 Edinburgh Rd Castlecrag NSW 2068",
        "lat": -33.7987161,
        "lng": 151.226601,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 43,
        "name": {
            "en": "Armenian Cultural Center",
            "fr": "Armenian Cultural Center",
            "hy": "Armenian Cultural Center"
        },
        "category": "cultural_center",
        "country": "Australia",
        "city": "Sydney",
        "address": "259 Penshurst St. Willoughby New South Wales 2068",
        "lat": -33.8004991,
        "lng": 151.1988105,
        "description": {
            "en": "Armenian Cultural Centre, includes the Armenian National Committee of Australia (ANCA)",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 44,
        "name": {
            "en": "Ararat Reserve",
            "fr": "Ararat Reserve",
            "hy": "Ararat Reserve"
        },
        "category": "cultural_center",
        "country": "Australia",
        "city": "Sydney",
        "address": "Ararat Reserve. Grattan Cr, Frenchs Forest, New South Wales",
        "lat": -33.7623512,
        "lng": 151.229529,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 45,
        "name": {
            "en": "Ararat Club",
            "fr": "Ararat Club",
            "hy": "Ararat Club"
        },
        "category": "cultural_center",
        "country": "Australia",
        "city": "Sydney",
        "address": "3 Grattan Cres, Frenchs Forest NSW 2086",
        "lat": -33.7619584,
        "lng": 151.2305148,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 46,
        "name": {
            "en": "Gharibian House",
            "fr": "Gharibian House",
            "hy": "Gharibian House"
        },
        "category": "restaurant",
        "country": "Australia",
        "city": "Sydney",
        "address": "22 Blenheim Road, North Ryde NSW 2113",
        "lat": -33.7979113,
        "lng": 151.1346318,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 47,
        "name": {
            "en": "Hamazkaine Galstaun School",
            "fr": "Hamazkaine Galstaun School",
            "hy": "Hamazkaine Galstaun School"
        },
        "category": "school",
        "country": "Australia",
        "city": "Sydney",
        "address": "Galstaun College 5. Chiltern Road, Ingleside, NSW 2101",
        "lat": -33.6790129,
        "lng": 151.2591781,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 48,
        "name": {
            "en": "AGBU Alexander School",
            "fr": "AGBU Alexander School",
            "hy": "AGBU Alexander School"
        },
        "category": "school",
        "country": "Australia",
        "city": "Sydney",
        "address": "2 Namba Rd. Duffys Forest NSW 2084",
        "lat": -33.6768116,
        "lng": 151.1843013,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 49,
        "name": {
            "en": "Armenian genocide Memorial",
            "fr": "Armenian genocide Memorial",
            "hy": "Armenian genocide Memorial"
        },
        "category": "monument",
        "country": "Australia",
        "city": "Sydney",
        "address": "Hakea Ave, Belrose NSW 2085",
        "lat": -33.7377371,
        "lng": 151.2063518,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 50,
        "name": {
            "en": "Church Of Holly Trinity",
            "fr": "Church Of Holly Trinity",
            "hy": "Church Of Holly Trinity"
        },
        "category": "church",
        "country": "Australia",
        "city": "Sydney",
        "address": "626 Bourke St. Surry Hills, NSW, 2010",
        "lat": -33.8906064,
        "lng": 151.2147736,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 51,
        "name": {
            "en": "The Armenian Catholic Church Of Our Lady Of The Assumption",
            "fr": "The Armenian Catholic Church Of Our Lady Of The Assumption",
            "hy": "The Armenian Catholic Church Of Our Lady Of The Assumption"
        },
        "category": "church",
        "country": "Australia",
        "city": "Sydney",
        "address": "5 John Street Lidcombe NSW 2141",
        "lat": -33.862712,
        "lng": 151.0451454,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 52,
        "name": {
            "en": "Genocide Memorial",
            "fr": "Genocide Memorial",
            "hy": "Genocide Memorial"
        },
        "category": "monument",
        "country": "Australia",
        "city": "Sydney",
        "address": "Hawthorne Ave, Rookwood NSW 2141",
        "lat": -33.8698439,
        "lng": 151.2082848,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 53,
        "name": {
            "en": "Panoyan Cultural Center",
            "fr": "Panoyan Cultural Center",
            "hy": "Panoyan Cultural Center"
        },
        "category": "cultural_center",
        "country": "Australia",
        "city": "Sydney",
        "address": "682 Cabramatta Road Bonnyrigg, Bonnyrigg, NSW, Australia 2177",
        "lat": -33.8698439,
        "lng": 151.2082848,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 54,
        "name": {
            "en": "Lavash Yerevan",
            "fr": "Lavash Yerevan",
            "hy": "Lavash Yerevan"
        },
        "category": "restaurant",
        "country": "Australia",
        "city": "Sydney",
        "address": "47a/189 Ocean View Rd, Ettalong Beach NSW 2257",
        "lat": -33.8698439,
        "lng": 151.2082848,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 55,
        "name": {
            "en": "Sezar",
            "fr": "Sezar",
            "hy": "Sezar"
        },
        "category": "restaurant",
        "country": "Australia",
        "city": "Melbourne",
        "address": "6 Melbourne Pl, Melbourne, Victoria 3000",
        "lat": -37.8134515,
        "lng": 144.9689196,
        "description": {
            "en": "Sezar is a must-visit on the local gastronomy scene. It’s ranked as the city’s 15th best restaurant on Trip adviser. A chic restaurant which offers well presented modern armenian cuisine. Their Yan Yan armenian lager is brewed in Melbourne.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 56,
        "name": {
            "en": "St Mary's Church",
            "fr": "St Mary's Church",
            "hy": "St Mary's Church"
        },
        "category": "church",
        "country": "Australia",
        "city": "Melbourne",
        "address": "129 Woods St, Donald, Victoria 3480",
        "lat": -37.8142454,
        "lng": 144.9631732,
        "description": {
            "en": "Inaugurated in 1977 in Surrey Hills, is the world’s southernmost Armenian Apostolic church.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 57,
        "name": {
            "en": "The Armenian Catholic Church Of The Holly Hearts Of Jesus And Mary",
            "fr": "The Armenian Catholic Church Of The Holly Hearts Of Jesus And Mary",
            "hy": "The Armenian Catholic Church Of The Holly Hearts Of Jesus And Mary"
        },
        "category": "church",
        "country": "Australia",
        "city": "melbourne",
        "address": "Melbourne. Armenian Catholic Church 41-43 Station Street Ferntree Gully Vic 3156",
        "lat": -37.8142454,
        "lng": 144.9631732,
        "description": {
            "en": "It’s the world’s southernmost Armenian church.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 58,
        "name": {
            "en": "Armenian Community Center",
            "fr": "Armenian Community Center",
            "hy": "Armenian Community Center"
        },
        "category": "cultural_center",
        "country": "Australia",
        "city": "Melbourne",
        "address": "14 Police Rd, Springvale, VIC, AU",
        "lat": -37.9344204,
        "lng": 145.1670611,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 59,
        "name": {
            "en": "Genocide memorial",
            "fr": "Genocide memorial",
            "hy": "Genocide memorial"
        },
        "category": "monument",
        "country": "Australia",
        "city": "Adelaide",
        "address": "2 Spains Rd, Salisbury Downs SA 5108",
        "lat": -34.7723642,
        "lng": 138.6365962,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 60,
        "name": {
            "en": "The Mkhitarists Monastry",
            "fr": "The Mkhitarists Monastry",
            "hy": "The Mkhitarists Monastry"
        },
        "category": "church",
        "country": "Austria",
        "city": "Vienna",
        "address": "Mechitaristengasse 4, Vienna 1070",
        "lat": 48.2058251,
        "lng": 16.3542463,
        "description": {
            "en": "Founded in 1811, the Mekhitarist Monastery of Vienna is an important center of Armenian culture and education. Its museum (Museum der Mechitaristen) contains - among other things - an impressive collection of Armenian coins and an extensive library. Looking for a souvenir? Buy a bottle of Mechitharine (Klosterlikör Mechitharine), an herb liquor created by the monks from a secret recipe of 43 different herbs and 12 different fruits!",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 61,
        "name": {
            "en": "St Hripsime's",
            "fr": "St Hripsime's",
            "hy": "St Hripsime's"
        },
        "category": "church",
        "country": "Austria",
        "city": "Vienna",
        "address": "Kolonitzgasse 11, Vienna 1030",
        "lat": 48.2103604,
        "lng": 16.3893847,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 62,
        "name": {
            "en": "Cafe Daniel Moser",
            "fr": "Cafe Daniel Moser",
            "hy": "Cafe Daniel Moser"
        },
        "category": "restaurant",
        "country": "Austria",
        "city": "Vienna",
        "address": "14 Rotenturmstraße, Wien, Wien, 1010",
        "lat": 48.2104163,
        "lng": 16.3750478,
        "description": {
            "en": "One Armenian merchant of the seventeenth century certainly left a unique mark on the Austrian capital. In 1685, Johannes Diodato (Hovhannes Astvatsatour), a Constantinople native, opened a place in Vienna to serve coffee – this was considered to be not only the first café in the city, but also the first in Europe. That café, now called Café Daniel Moser,",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 63,
        "name": {
            "en": "Lavash",
            "fr": "Lavash",
            "hy": "Lavash"
        },
        "category": "restaurant",
        "country": "Austria",
        "city": "Vienna",
        "address": "Wurzbachgasse 14, 1150 Wien",
        "lat": 48.2031287,
        "lng": 16.336076,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 64,
        "name": {
            "en": "Sem",
            "fr": "Sem",
            "hy": "Sem"
        },
        "category": "restaurant",
        "country": "Austria",
        "city": "Vienna",
        "address": "Belvederegasse 17 1040 Wien",
        "lat": 48.1912098,
        "lng": 16.3768355,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 65,
        "name": {
            "en": "Royal Armenia",
            "fr": "Royal Armenia",
            "hy": "Royal Armenia"
        },
        "category": "shop",
        "country": "Austria",
        "city": "Vienna",
        "address": "Argentinierstraße 50, 1040 Wien, Autriche",
        "lat": 48.2083537,
        "lng": 16.3725042,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 66,
        "name": {
            "en": "Armenian genocide memorial",
            "fr": "Armenian genocide memorial",
            "hy": "Armenian genocide memorial"
        },
        "category": "monument",
        "country": "Austria",
        "city": "Innsbruck",
        "address": "Mariahilfstraße 1a, 6020 Innsbruck, Autriche",
        "lat": 47.2678157,
        "lng": 11.3878867,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 67,
        "name": {
            "en": "Armenian Holly Church of Resurrection",
            "fr": "Armenian Holly Church of Resurrection",
            "hy": "Armenian Holly Church of Resurrection"
        },
        "category": "church",
        "country": "Bangladesh",
        "city": "Dhaka",
        "address": "4 Armenian Street, Armanitola Rd, Dhaka City 1100",
        "lat": 23.7643863,
        "lng": 90.3890144,
        "description": {
            "en": "In the church courtyard, there are some Armenian tombs as well as a monument to Catchick Avietick Thomas, one of the lords of trade in nineteenth-century Bengal.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 68,
        "name": {
            "en": "Pogose School",
            "fr": "Pogose School",
            "hy": "Pogose School"
        },
        "category": "school",
        "country": "Bangladesh",
        "city": "Dhaka",
        "address": "Chittaranjan Avenue, Dhaka, Dhaka",
        "lat": 23.7643863,
        "lng": 90.3890144,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 69,
        "name": {
            "en": "Urartu",
            "fr": "Urartu",
            "hy": "Urartu"
        },
        "category": "restaurant",
        "country": "Minsk",
        "city": "Belarus",
        "address": "Pieramozhcaw Avenue, 114",
        "lat": 53.9024716,
        "lng": 27.5618225,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 70,
        "name": {
            "en": "Oasis",
            "fr": "Oasis",
            "hy": "Oasis"
        },
        "category": "restaurant",
        "country": "Minsk",
        "city": "Belarus",
        "address": "Krasnoarmeyskaya 36, Minsk 220030",
        "lat": 53.9024716,
        "lng": 27.5618225,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 71,
        "name": {
            "en": "Oshag",
            "fr": "Oshag",
            "hy": "Oshag"
        },
        "category": "restaurant",
        "country": "Minsk",
        "city": "Belarus",
        "address": "35/1 Chkalova str., Minsk region",
        "lat": 53.9024716,
        "lng": 27.5618225,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 72,
        "name": {
            "en": "Tandyr",
            "fr": "Tandyr",
            "hy": "Tandyr"
        },
        "category": "restaurant",
        "country": "Mogilev",
        "city": "Belarus",
        "address": "Pervomayskaya 144A, Mogilev 212001",
        "lat": 53.9090245,
        "lng": 30.3429838,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 73,
        "name": {
            "en": "St Mary Magdalen",
            "fr": "St Mary Magdalen",
            "hy": "St Mary Magdalen"
        },
        "category": "church",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Rue De La Madeleine, Brussels 1000",
        "lat": 50.8467372,
        "lng": 4.352493,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 74,
        "name": {
            "en": "Khatchkar",
            "fr": "Khatchkar",
            "hy": "Khatchkar"
        },
        "category": "monument",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Square Henri Michaux, 1050 Ixelles",
        "lat": 50.8467372,
        "lng": 4.352493,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 75,
        "name": {
            "en": "Villa Empain",
            "fr": "Villa Empain",
            "hy": "Villa Empain"
        },
        "category": "cultural_center",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Avenue Franklin Roosevelt, 67",
        "lat": 50.8467372,
        "lng": 4.352493,
        "description": {
            "en": "Is among the most beautiful Art Deco edifices in the city, was renovated by the Boghossian Foundation to create a center for art and dialogue between Eastern and Western cultures, and regularly hosts events related to Armenia.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 76,
        "name": {
            "en": "Hay Doun",
            "fr": "Hay Doun",
            "hy": "Hay Doun"
        },
        "category": "cultural_center",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Centre arménien Hay Doun Rue du Gaz, 83 1020 Brussels",
        "lat": 50.8467372,
        "lng": 4.352493,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 77,
        "name": {
            "en": "La Grande Terrasse",
            "fr": "La Grande Terrasse",
            "hy": "La Grande Terrasse"
        },
        "category": "restaurant",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Blvd. de Smet de Naeyer 1, 1090 Jette",
        "lat": 50.8467372,
        "lng": 4.352493,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 78,
        "name": {
            "en": "Royal Armenia",
            "fr": "Royal Armenia",
            "hy": "Royal Armenia"
        },
        "category": "shop",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Rue Léon Theodor 168, 1090 Jette",
        "lat": 50.8467372,
        "lng": 4.352493,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 79,
        "name": {
            "en": "Pizza Saco",
            "fr": "Pizza Saco",
            "hy": "Pizza Saco"
        },
        "category": "restaurant",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Avenue Milcamps, 154 1030 Bruxelles",
        "lat": 50.8467372,
        "lng": 4.352493,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 80,
        "name": {
            "en": "Abricot",
            "fr": "Abricot",
            "hy": "Abricot"
        },
        "category": "restaurant",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Rue des Deux Églises 121, 1210 Bruxelles",
        "lat": 50.8467372,
        "lng": 4.352493,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 81,
        "name": {
            "en": "Armenian Garden",
            "fr": "Armenian Garden",
            "hy": "Armenian Garden"
        },
        "category": "restaurant",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Rue de l'Eglise Saint-Martin 138, 1083 Ganshoren",
        "lat": 50.8467372,
        "lng": 4.352493,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 82,
        "name": {
            "en": "Yerevan",
            "fr": "Yerevan",
            "hy": "Yerevan"
        },
        "category": "restaurant",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Rue Léon Theodor 227, 1090 Jette",
        "lat": 50.8467372,
        "lng": 4.352493,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 83,
        "name": {
            "en": "Norayr Vrouyr",
            "fr": "Norayr Vrouyr",
            "hy": "Norayr Vrouyr"
        },
        "category": "shop",
        "country": "Antwerp",
        "city": "Belgium",
        "address": "8, Komedieplaats 4, 2000 Antwerpen",
        "lat": 51.2211097,
        "lng": 4.3997081,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 84,
        "name": {
            "en": "Maya's Bakery",
            "fr": "Maya's Bakery",
            "hy": "Maya's Bakery"
        },
        "category": "shop",
        "country": "Antwerp",
        "city": "Belgium",
        "address": "Karel de Preterlei 1, 2140 Antwerpen",
        "lat": 51.2211097,
        "lng": 4.3997081,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 85,
        "name": {
            "en": "Arax",
            "fr": "Arax",
            "hy": "Arax"
        },
        "category": "restaurant",
        "country": "Mechelen",
        "city": "Belgium",
        "address": "Botermarkt 28, 2800 Mechelen",
        "lat": 51.0281381,
        "lng": 4.4803453,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 86,
        "name": {
            "en": "Yerevan",
            "fr": "Yerevan",
            "hy": "Yerevan"
        },
        "category": "shop",
        "country": "Cotonou",
        "city": "Benin",
        "address": "03bp34, Cotonou",
        "lat": 6.3676953,
        "lng": 2.4252507,
        "description": {
            "en": "If the name looks a little familiar, that’s due to owner Marcel Tchifteyan, a French businessman of Armenian origin, who named it in honor of the Armenian capital. As an extra bonus, the neighboring beach is now also nicknamed Plage Erevan by the locals.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 87,
        "name": {
            "en": "St George",
            "fr": "St George",
            "hy": "St George"
        },
        "category": "church",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Av. Santos Dumont, 55 - Bom Retiro, São Paulo - SP, 01101-000",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "The Armenian school, Hay Azkayin Turian Varjaran (Externato Jose Bonifacio), is located on the church compound.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 88,
        "name": {
            "en": "St Gregory Illuminator",
            "fr": "St Gregory Illuminator",
            "hy": "St Gregory Illuminator"
        },
        "category": "church",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Av. Tiradentes, 718, São Paulo, SP",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 89,
        "name": {
            "en": "Genocide memorial",
            "fr": "Genocide memorial",
            "hy": "Genocide memorial"
        },
        "category": "monument",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "SP, 01102-040",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "The nearby metro station was named Armênia in gratitude for the financial aid given by the community while the metro system was being built.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 90,
        "name": {
            "en": "armenian evangelical church",
            "fr": "armenian evangelical church",
            "hy": "armenian evangelical church"
        },
        "category": "church",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Av. do Estado, 1101",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 91,
        "name": {
            "en": "Esfiharia effendi",
            "fr": "Esfiharia effendi",
            "hy": "Esfiharia effendi"
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Rua Dom Antônio de Melo, near the metro stations Luz and Tiradentes",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 92,
        "name": {
            "en": "Carlihos",
            "fr": "Carlihos",
            "hy": "Carlihos"
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Sao Paulo - Rua Rio Bonito 1641, Mooca",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 93,
        "name": {
            "en": "Casa Garabed",
            "fr": "Casa Garabed",
            "hy": "Casa Garabed"
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Rua Jose Margarido 216 -Santana Santana - São Paulo - SP",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "Since 1951! Its entrance may not show off too much, but the food is delicious.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 94,
        "name": {
            "en": "Yeran Culinaria Armenia",
            "fr": "Yeran Culinaria Armenia",
            "hy": "Yeran Culinaria Armenia"
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Rua Capitão Manuel Novaes, 173 - Santana, São Paulo - SP, 02017-030",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 95,
        "name": {
            "en": "Marash",
            "fr": "Marash",
            "hy": "Marash"
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Av. Brig. Faria Lima, 1616 - 04",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 96,
        "name": {
            "en": "Hay Cozinha Armenia",
            "fr": "Hay Cozinha Armenia",
            "hy": "Hay Cozinha Armenia"
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Rua Cayowaá, 1907 - Perdizes, São Paulo - SP, 01258-011",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 97,
        "name": {
            "en": "Ian",
            "fr": "Ian",
            "hy": "Ian"
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "R. Nova York, 341 - Brooklin, São Paulo - SP, 04560-000",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 98,
        "name": {
            "en": "Clube Armenio",
            "fr": "Clube Armenio",
            "hy": "Clube Armenio"
        },
        "category": "cultural_center",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Av. Professor Ascendino Reis, 1450 - Vila Clementino, São Paulo - SP, 04027-000",
        "lat": -23.5506507,
        "lng": -46.6333824,
        "description": {
            "en": "A site you shouldn’t miss. This multisport complex has a football field, a gymnasium, tennis courts, and several rooms for staging community events. After working up an appetite with a game of football, head to the club’s own restaurant, Artur Esfihas!",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 99,
        "name": {
            "en": "St John the Baptist",
            "fr": "St John the Baptist",
            "hy": "St John the Baptist"
        },
        "category": "church",
        "country": "Osasco",
        "city": "Brazil",
        "address": "R. Carlos da Costa Ramalho Júnior, 502",
        "lat": -23.5324859,
        "lng": -46.7916801,
        "description": {
            "en": "In 1932 the Church of St. John the Baptist (São João Batista) became the first Armenian church in Brazil. Osasco’s Armenian community center sits next door to the church. Several street names bear witness to the presence of Armenians; keep your eye out for Rua Armênia, Praça Dicran Echrefian, Rua Sanazar Mardiros, Rua Garbiel Seferian, rua Hagop Guzelian etc.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 100,
        "name": {
            "en": "Dozza",
            "fr": "Dozza",
            "hy": "Dozza"
        },
        "category": "restaurant",
        "country": "Osasco",
        "city": "Brazil",
        "address": "Rua Doutor Paulo Ferraz da Costa Aguiar 1583, Osasco",
        "lat": -23.5324859,
        "lng": -46.7916801,
        "description": {
            "en": "The Armenian restaurant Dozza was given its name in the 1950s when men stopping for a drink would say, “Me dá uma dosa!” (“Give me a dose!”).",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 101,
        "name": {
            "en": "Nork Marash",
            "fr": "Nork Marash",
            "hy": "Nork Marash"
        },
        "category": "restaurant",
        "country": "Praia Grande",
        "city": "Brazil",
        "address": "R. Guatemala, 192 - Guilhermina, Praia Grande - SP, 11702-040",
        "lat": -24.008979,
        "lng": -46.4144939,
        "description": {
            "en": "A small Armenian restaurant just a few hundred meters from the beach.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 102,
        "name": {
            "en": "Embassy of RA",
            "fr": "Embassy of RA",
            "hy": "Embassy of RA"
        },
        "category": "cultural_center",
        "country": "Brasilia",
        "city": "Brazil",
        "address": "Setor de Embaixadas Norte, Lote No 048",
        "lat": -10.3333333,
        "lng": -53.2,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 103,
        "name": {
            "en": "Emporio Araxa",
            "fr": "Emporio Araxa",
            "hy": "Emporio Araxa"
        },
        "category": "shop",
        "country": "Brasilia",
        "city": "Brazil",
        "address": "Rua Terencio Pereira 1085, Araxa, State of Minas Gerais 38182-176",
        "lat": -10.3333333,
        "lng": -53.2,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 104,
        "name": {
            "en": "Sofia central Cemetry",
            "fr": "Sofia central Cemetry",
            "hy": "Sofia central Cemetry"
        },
        "category": "monument",
        "country": "Sofia",
        "city": "Bulgaria",
        "address": "14 ul. \"Zavodska\", Sofia, Sofia City Province, BG",
        "lat": 42.6977028,
        "lng": 23.3217359,
        "description": {
            "en": "There is an Armenian chapel (St. Krikor Lusavorich) and a genocide memorial inside.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 105,
        "name": {
            "en": "Church of the holly Mother of God",
            "fr": "Church of the holly Mother of God",
            "hy": "Church of the holly Mother of God"
        },
        "category": "church",
        "country": "Sofia",
        "city": "Bulgaria",
        "address": "1 “Todor Alexandrov” bul., Sofia, Bulgaria 1000",
        "lat": 42.6977028,
        "lng": 23.3217359,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 106,
        "name": {
            "en": "Ararat",
            "fr": "Ararat",
            "hy": "Ararat"
        },
        "category": "restaurant",
        "country": "Sofia",
        "city": "Bulgaria",
        "address": "Pette Kyosheta, Antim I St 36, 1303 Sofia",
        "lat": 42.6977028,
        "lng": 23.3217359,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 107,
        "name": {
            "en": "Egur Egur",
            "fr": "Egur Egur",
            "hy": "Egur Egur"
        },
        "category": "restaurant",
        "country": "Sofia",
        "city": "Bulgaria",
        "address": "????? ?.?, ulitsa „Georgi S. Rakovski“ 92, 1000 Sofia",
        "lat": 42.6977028,
        "lng": 23.3217359,
        "description": {
            "en": "atmosphere. The restaurant Egur Egur belongs to the Bulgarian Armenian jazz singer Hilda Kazasyan; its style is more sophisticated and less traditionally Armenian, but the jazz nights are definitely worth a visit.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 108,
        "name": {
            "en": "St George",
            "fr": "St George",
            "hy": "St George"
        },
        "category": "church",
        "country": "Plovdiv",
        "city": "Bulgaria",
        "address": "Ul. Yanko Sakazov 15, 4020 Marasha, Plovdiv",
        "lat": 42.1418541,
        "lng": 24.7499297,
        "description": {
            "en": "The Armenian community is organized around St. George’s Church (Surp Kevork), consecrated in 1767. Tucked away next to the church is a museum that contains many sacred objects brought back by Armenian parishes from Eastern Thrace (presently part of Turkey). Victoria & Krikor Tutunjian School is located on the other side of the sports field. A few meters further down, don’t miss the beautiful Hindliyan House, nicknamed “the Blue House.” Stepan Hindliyan was a rich Armenian merchant from the nineteenth century who received his family name after his many travels in India. Scenes from the Italian film The Lark Farm (La Masseria delle Allodole), about the Armenian Genocide, were filmed in the house.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 109,
        "name": {
            "en": "mayriges",
            "fr": "mayriges",
            "hy": "mayriges"
        },
        "category": "restaurant",
        "country": "Plovdiv",
        "city": "Bulgaria",
        "address": "Creative District, KapanaPlovdiv Center, ul. \"Konstantin Stoilov\" 14, 4000 Plovdiv",
        "lat": 42.1418541,
        "lng": 24.7499297,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 110,
        "name": {
            "en": "Erevan",
            "fr": "Erevan",
            "hy": "Erevan"
        },
        "category": "restaurant",
        "country": "plovdiv",
        "city": "Bulgaria",
        "address": "Center, TsentarPlovdiv Center, ul. \"Patriarh Evtimiy\" 19, 4000 Plovdiv",
        "lat": 42.1418541,
        "lng": 24.7499297,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 111,
        "name": {
            "en": "Armenian Cemetry",
            "fr": "Armenian Cemetry",
            "hy": "Armenian Cemetry"
        },
        "category": "monument",
        "country": "Plovdiv",
        "city": "Bulgaria",
        "address": "42°8'55.55\"N, 24°46'16.60\"E",
        "lat": 42.1418541,
        "lng": 24.7499297,
        "description": {
            "en": "the Armenian cemetery and its chapel are both worth a quick visit.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 112,
        "name": {
            "en": "St. Stephen's",
            "fr": "St. Stephen's",
            "hy": "St. Stephen's"
        },
        "category": "church",
        "country": "Pazardjik",
        "city": "Bulgaria",
        "address": "Pazardzhik Center, ul. \"Antim I\" 8, 4400 Pazardzhik",
        "lat": 42.188436,
        "lng": 24.3318439,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 113,
        "name": {
            "en": "Sourp Khatch",
            "fr": "Sourp Khatch",
            "hy": "Sourp Khatch"
        },
        "category": "church",
        "country": "Stara Zagora",
        "city": "Bulgaria",
        "address": "15 Zlatica str",
        "lat": 42.4248111,
        "lng": 25.6257479,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 114,
        "name": {
            "en": "St;James",
            "fr": "St;James",
            "hy": "St;James"
        },
        "category": "church",
        "country": "Yambol",
        "city": "Bulgaria",
        "address": "????? ??????, 8600 Yambol",
        "lat": 42.311889,
        "lng": 26.5636852,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 115,
        "name": {
            "en": "Holly Cross",
            "fr": "Holly Cross",
            "hy": "Holly Cross"
        },
        "category": "church",
        "country": "Burgas",
        "city": "Bulgaria",
        "address": "Burgas Center, ul. \"Mihail Lermontov\" 20, 8000 Burgas",
        "lat": 42.4936616,
        "lng": 27.4721276,
        "description": {
            "en": "Church of the Holy Cross (Surb Khatch), built in 1853, is one of the most beautiful monuments in the city.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 116,
        "name": {
            "en": "Antichen Gladenec",
            "fr": "Antichen Gladenec",
            "hy": "Antichen Gladenec"
        },
        "category": "restaurant",
        "country": "Sozopol",
        "city": "Bulgaria",
        "address": "Tsentar, ul. \"Kiril i Metodiy\" 35, 8130 Sozopol",
        "lat": 42.4181556,
        "lng": 27.6943124,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 117,
        "name": {
            "en": "St. Sarkis",
            "fr": "St. Sarkis",
            "hy": "St. Sarkis"
        },
        "category": "church",
        "country": "Varna",
        "city": "Bulgaria",
        "address": "CenterOdesos, ul. \"Han Asparuh\" 15, 9000 Varna",
        "lat": 43.2073873,
        "lng": 27.9166653,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 118,
        "name": {
            "en": "Archeological Museum",
            "fr": "Archeological Museum",
            "hy": "Archeological Museum"
        },
        "category": "monument",
        "country": "Varna",
        "city": "Bulgaria",
        "address": "Varna CenterOdesos, ???. „??????? ????? ?????“ 41, 9000 Varna",
        "lat": 43.2073873,
        "lng": 27.9166653,
        "description": {
            "en": "In 2006, an Armenian Genocide memorial was inaugurated in the park of the archeological museum.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 119,
        "name": {
            "en": "Charles Aznavour",
            "fr": "Charles Aznavour",
            "hy": "Charles Aznavour"
        },
        "category": "monument",
        "country": "Varna",
        "city": "Bulgaria",
        "address": "CenterPrimorski, 9002 Varna",
        "lat": 43.2073873,
        "lng": 27.9166653,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 120,
        "name": {
            "en": "St. John",
            "fr": "St. John",
            "hy": "St. John"
        },
        "category": "church",
        "country": "Dobrich",
        "city": "Bulgaria",
        "address": "Dobrich",
        "lat": 43.6637775,
        "lng": 27.9002123,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 121,
        "name": {
            "en": "The Holly Mother Of God",
            "fr": "The Holly Mother Of God",
            "hy": "The Holly Mother Of God"
        },
        "category": "church",
        "country": "Shumen",
        "city": "Bulgaria",
        "address": "Grivitsa, ul. \"Zlatitza\" 15, 9702 Shumen",
        "lat": 43.3088188,
        "lng": 27.0197261,
        "description": {
            "en": "see the Church of the Holy Mother of God (Surp Asdvadzadzin), built in the nineteenth century, as well as the surprising Garden of the Cyrillic Alphabet in Pliska. Created by the artist Karen Alexanyan in 2015, the garden is made up of letters of the cyrillic alphabet sculpted out of red tuff in a design reminiscent of khachkars.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 122,
        "name": {
            "en": "The Holly Mother Of God",
            "fr": "The Holly Mother Of God",
            "hy": "The Holly Mother Of God"
        },
        "category": "church",
        "country": "Ruse",
        "city": "Bulgaria",
        "address": "Vezhdata, ul. \"Bratya Miladinovi\" 18, 7001 Ruse",
        "lat": 43.8480413,
        "lng": 25.9542057,
        "description": {
            "en": "The Church of the Holy Mother of God (Surp Asdvadzadzin) dates back to 1832. The first Armenian book printed on Bulgarian territory was edited in Ruse in 1892.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 123,
        "name": {
            "en": "The Holly Mother Of God",
            "fr": "The Holly Mother Of God",
            "hy": "The Holly Mother Of God"
        },
        "category": "church",
        "country": "Silistra",
        "city": "Bulgaria",
        "address": "45 K.Arabazan Street, Silistra",
        "lat": 43.9057061,
        "lng": 27.0705496,
        "description": {
            "en": "The Church of the Holy Mother of God (Surp Asdvadzadzin) may be the oldest Armenian church in Bulgaria. Some inscriptions say that it was first consecrated in 1620 as St. Gregory the Illuminator Armenian Church.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 124,
        "name": {
            "en": "Armenian Community center",
            "fr": "Armenian Community center",
            "hy": "Armenian Community center"
        },
        "category": "cultural_center",
        "country": "Toronto",
        "city": "Canada",
        "address": "45 Hallcrawn PI, Toronto, ON M2J 4Y4",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "In North York, St. Mary’s Armenian Church was consecrated in 1983, adjacent to the Armenian Community Centre, which was built in 1979, and across from the Armenian Youth Center, which was built in 2004. The complexes bring together almost all of the city’s Armenian institutions. The ARS Armenian School (Armenian Relief Society), or HOM (Hay Oknutian Miutiun) in Armenian, is the only Armenian day school in Ontario.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 125,
        "name": {
            "en": "Lavash",
            "fr": "Lavash",
            "hy": "Lavash"
        },
        "category": "restaurant",
        "country": "Toronto",
        "city": "Canada",
        "address": "2746 Victoria Park Ave, North York, ON M2J 4A8",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 126,
        "name": {
            "en": "Lara's",
            "fr": "Lara's",
            "hy": "Lara's"
        },
        "category": "restaurant",
        "country": "Toronto",
        "city": "Canada",
        "address": "155 Consumers Rd #106, North York, ON M2J 0A3",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 127,
        "name": {
            "en": "Holly Trinity",
            "fr": "Holly Trinity",
            "hy": "Holly Trinity"
        },
        "category": "church",
        "country": "Toronto",
        "city": "Canada",
        "address": "920 Progress Ave, Scarborough, ON M1G 3T5",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "The former AGBU’s center is located right next to the church.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 128,
        "name": {
            "en": "Armenian Evangelical",
            "fr": "Armenian Evangelical",
            "hy": "Armenian Evangelical"
        },
        "category": "church",
        "country": "Toronto",
        "city": "Canada",
        "address": "2600 14th Ave., Markham, ON",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 129,
        "name": {
            "en": "Armenian Catholic St. Gregory The Illuminator",
            "fr": "Armenian Catholic St. Gregory The Illuminator",
            "hy": "Armenian Catholic St. Gregory The Illuminator"
        },
        "category": "church",
        "country": "Toronto",
        "city": "Canada",
        "address": "100 Northdale Rd, Toronto, Ontario M2L 2M1, CA",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 130,
        "name": {
            "en": "Armenian Emmanuel Church of Nazarene",
            "fr": "Armenian Emmanuel Church of Nazarene",
            "hy": "Armenian Emmanuel Church of Nazarene"
        },
        "category": "church",
        "country": "Toronto",
        "city": "Canada",
        "address": "2537 Bayview Ave, Toronto, ON M2L 1H3",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 131,
        "name": {
            "en": "Armenian Brotherhood Bible Church",
            "fr": "Armenian Brotherhood Bible Church",
            "hy": "Armenian Brotherhood Bible Church"
        },
        "category": "church",
        "country": "Toronto",
        "city": "Canada",
        "address": "2755 VICTORIA PARK AVENUE. SCARBOROUGH, ON, M1T 1A5",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 132,
        "name": {
            "en": "Antikka",
            "fr": "Antikka",
            "hy": "Antikka"
        },
        "category": "restaurant",
        "country": "Toronto",
        "city": "Canada",
        "address": "960 Queen St W, Toronto, ON, M6J 1G8",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "part record store, part café. The Armenian coffee there is prepared in the traditional style, using jezve and hot sand. The ceramic cups are made by an Armenian women’s co-op.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 133,
        "name": {
            "en": "Mayrik",
            "fr": "Mayrik",
            "hy": "Mayrik"
        },
        "category": "restaurant",
        "country": "Toronto",
        "city": "Canada",
        "address": "1580 Bayview Ave, Toronto, ON M4G 3B7",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 134,
        "name": {
            "en": "Ararat International Fine Foods",
            "fr": "Ararat International Fine Foods",
            "hy": "Ararat International Fine Foods"
        },
        "category": "shop",
        "country": "Toronto",
        "city": "Canada",
        "address": "1800 Avenue Rd, North York, ON M5M 3Z1",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 135,
        "name": {
            "en": "Armenian Bistro",
            "fr": "Armenian Bistro",
            "hy": "Armenian Bistro"
        },
        "category": "restaurant",
        "country": "Toronto",
        "city": "Canada",
        "address": "5487 Dundas St W Unit 1A, Etobicoke, ON M9B 1B5",
        "lat": 43.6534817,
        "lng": -79.3839347,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 136,
        "name": {
            "en": "Commamorative Plaque",
            "fr": "Commamorative Plaque",
            "hy": "Commamorative Plaque"
        },
        "category": "monument",
        "country": "Georgetown",
        "city": "Canada",
        "address": "Georgetown ontario",
        "lat": 46.1844077,
        "lng": -62.5315437,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 137,
        "name": {
            "en": "St Nishan",
            "fr": "St Nishan",
            "hy": "St Nishan"
        },
        "category": "church",
        "country": "Cambridge",
        "city": "Canada",
        "address": "15 International Village Dr, Cambridge, ON N1R 7M5",
        "lat": 43.3600536,
        "lng": -80.3123023,
        "description": {
            "en": "The Armenian Community Center, where St. Nishan is located, includes as well as a monument honoring the heroes of Musa Dagh, similar to the one in Musaler, Armenia.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 138,
        "name": {
            "en": "Armenia Evangelical Church",
            "fr": "Armenia Evangelical Church",
            "hy": "Armenia Evangelical Church"
        },
        "category": "church",
        "country": "Cambridge",
        "city": "Canada",
        "address": "1620 Franklin Blvd. ON N3C 1P2 Cambridge",
        "lat": 43.3600536,
        "lng": -80.3123023,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 139,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "St. Gregory The Illuminator",
            "hy": "St. Gregory The Illuminator"
        },
        "category": "church",
        "country": "St. Catherines",
        "city": "Canada",
        "address": "49 Carlton St, St. Catharines, ON L2R 1P7",
        "lat": 46.192008,
        "lng": -63.2973814,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 140,
        "name": {
            "en": "Shiraz Ballroom",
            "fr": "Shiraz Ballroom",
            "hy": "Shiraz Ballroom"
        },
        "category": "cultural_center",
        "country": "St. Catherines",
        "city": "Canada",
        "address": "156 Martindale Rd, St. Catharines, Ontario",
        "lat": 46.192008,
        "lng": -63.2973814,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 141,
        "name": {
            "en": "Shawarma de Roza",
            "fr": "Shawarma de Roza",
            "hy": "Shawarma de Roza"
        },
        "category": "restaurant",
        "country": "Ottawa",
        "city": "Canada",
        "address": "1896 Prince of Wales Dr, Ottawa, ON K2C 3W9",
        "lat": 45.4208777,
        "lng": -75.6901106,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 142,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "St. Gregory The Illuminator",
            "hy": "St. Gregory The Illuminator"
        },
        "category": "church",
        "country": "Montreal",
        "city": "Canada",
        "address": "615 Av. Stuart, Montréal, QC H2V 3H2",
        "lat": 45.5031824,
        "lng": -73.5698065,
        "description": {
            "en": "It’s the seat of the Armenian Diocese of Canada.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 143,
        "name": {
            "en": "Le Petit Alep",
            "fr": "Le Petit Alep",
            "hy": "Le Petit Alep"
        },
        "category": "restaurant",
        "country": "Montreal",
        "city": "Canada",
        "address": "191 Rue Jean-Talon E, Montréal, QC H2R 1S8",
        "lat": 45.5031824,
        "lng": -73.5698065,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 144,
        "name": {
            "en": "Alep",
            "fr": "Alep",
            "hy": "Alep"
        },
        "category": "restaurant",
        "country": "Montreal",
        "city": "Canada",
        "address": "199 Rue Jean-Talon E, Montréal, QC H2R 1S8",
        "lat": 45.5031824,
        "lng": -73.5698065,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 145,
        "name": {
            "en": "Lahmajoune Villeray",
            "fr": "Lahmajoune Villeray",
            "hy": "Lahmajoune Villeray"
        },
        "category": "restaurant",
        "country": "Montreal",
        "city": "Canada",
        "address": "420 Rue Faillon E, Montréal, QC H2R 2G5",
        "lat": 45.5031824,
        "lng": -73.5698065,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 146,
        "name": {
            "en": "Sourp Hagop",
            "fr": "Sourp Hagop",
            "hy": "Sourp Hagop"
        },
        "category": "church",
        "country": "Montreal",
        "city": "Canada",
        "address": "3401 Rue Olivar-Asselin, Montréal, QC H4J 1L5",
        "lat": 45.5031824,
        "lng": -73.5698065,
        "description": {
            "en": "Sourp Hagop Armenian Church, seat of the Armenian Prelature of Canada, was built in 1973 and consecrated in 1978. The Armenian Community Center and the Sourp Hagop School, the largest in Canada, are both right next to the church, and the offices of the newspaper Horizon Weekly are also there.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 147,
        "name": {
            "en": "Our Lady Of Nareg",
            "fr": "Our Lady Of Nareg",
            "hy": "Our Lady Of Nareg"
        },
        "category": "church",
        "country": "Montreal",
        "city": "Canada",
        "address": "858 Blvd. Cote Vertu Ouest, Saint-Laurent, Quebec H4L 1Y4",
        "lat": 45.5031824,
        "lng": -73.5698065,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 148,
        "name": {
            "en": "Alex Manougian",
            "fr": "Alex Manougian",
            "hy": "Alex Manougian"
        },
        "category": "cultural_center",
        "country": "Montreal",
        "city": "Canada",
        "address": "755 Rue Manoogian, Montréal, QC H4N 1Z5",
        "lat": 45.5031824,
        "lng": -73.5698065,
        "description": {
            "en": "AGBU’s Alex Manoogian Center and the Alex Manoogian School, as well as the Tekeyan Cultural Center and the offices of Abaka News.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 149,
        "name": {
            "en": "Marcelin-Wilson Park",
            "fr": "Marcelin-Wilson Park",
            "hy": "Marcelin-Wilson Park"
        },
        "category": "monument",
        "country": "Montreal",
        "city": "Canada",
        "address": "11301 Blvd. de l'Acadie, Montréal, QC H3M 2T1",
        "lat": 45.5031824,
        "lng": -73.5698065,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 150,
        "name": {
            "en": "First Armenian Evangelical Church",
            "fr": "First Armenian Evangelical Church",
            "hy": "First Armenian Evangelical Church"
        },
        "category": "church",
        "country": "Montreal",
        "city": "Canada",
        "address": "11455 Rue Drouart, Montréal, Québec H3M 2S6, CA",
        "lat": 45.5031824,
        "lng": -73.5698065,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 151,
        "name": {
            "en": "Armenia",
            "fr": "Armenia",
            "hy": "Armenia"
        },
        "category": "shop",
        "country": "Montreal",
        "city": "Canada",
        "address": "420 Rue Fleury O, Montréal, QC H3L 1V7",
        "lat": 45.5031824,
        "lng": -73.5698065,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 152,
        "name": {
            "en": "Holly Cross",
            "fr": "Holly Cross",
            "hy": "Holly Cross"
        },
        "category": "church",
        "country": "Laval",
        "city": "Canada",
        "address": "4865 Chem. du Souvenir, Laval, QC H7W 1E1",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 153,
        "name": {
            "en": "Sourp Kevork",
            "fr": "Sourp Kevork",
            "hy": "Sourp Kevork"
        },
        "category": "church",
        "country": "Laval",
        "city": "Canada",
        "address": "397 Boul des Prairies, Laval, QC H7N 2W6",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 154,
        "name": {
            "en": "Armenian Evangelical Church",
            "fr": "Armenian Evangelical Church",
            "hy": "Armenian Evangelical Church"
        },
        "category": "church",
        "country": "Laval",
        "city": "Canada",
        "address": "123 Boul des Prairies, Laval, QC H7N 4B1",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 155,
        "name": {
            "en": "Armenian Brotherhood Church",
            "fr": "Armenian Brotherhood Church",
            "hy": "Armenian Brotherhood Church"
        },
        "category": "church",
        "country": "Laval",
        "city": "Canada",
        "address": "1225 Blvd. Élisabeth, Laval, QC H7W 3J7",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 156,
        "name": {
            "en": "Our Lady Of Nareg",
            "fr": "Our Lady Of Nareg",
            "hy": "Our Lady Of Nareg"
        },
        "category": "school",
        "country": "Laval",
        "city": "Canada",
        "address": "500 67e Av, Laval, QC H7V 2M2",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "Our Lady of Nareg School is one of the largest Armenian Catholic schools in North America. A khachkar was installed at the entrance of the Centre Arménie, which regularly hosts community events.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 157,
        "name": {
            "en": "Karoun",
            "fr": "Karoun",
            "hy": "Karoun"
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "411 Blvd. Curé-Labelle, Laval, QC H7V 2S9",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 158,
        "name": {
            "en": "Sevan",
            "fr": "Sevan",
            "hy": "Sevan"
        },
        "category": "shop",
        "country": "Laval",
        "city": "Canada",
        "address": "3426 Blvd. Cartier O, Laval, QC H7V 1K2",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 159,
        "name": {
            "en": "Cheff Kebab",
            "fr": "Cheff Kebab",
            "hy": "Cheff Kebab"
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "4231 Blvd. Samson, Laval, Quebec H7W 2G8",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 160,
        "name": {
            "en": "Arax",
            "fr": "Arax",
            "hy": "Arax"
        },
        "category": "shop",
        "country": "Laval",
        "city": "Canada",
        "address": "4229 Blvd. Samson, Laval, Quebec H7W 2G8",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 161,
        "name": {
            "en": "Au Vieux Massis",
            "fr": "Au Vieux Massis",
            "hy": "Au Vieux Massis"
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "784 Blvd. Curé-Labelle, Laval, QC H7V 2V3",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 162,
        "name": {
            "en": "Aroush",
            "fr": "Aroush",
            "hy": "Aroush"
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "3467 Blvd. Saint-Martin O, Laval, QC H7T 1A2",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 163,
        "name": {
            "en": "Manti",
            "fr": "Manti",
            "hy": "Manti"
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "2204 Blvd. Curé-Labelle, Laval, QC H7T 1R1",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 164,
        "name": {
            "en": "Rouby",
            "fr": "Rouby",
            "hy": "Rouby"
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "3268 Blvd. Saint-Martin O, Laval, QC H7T 1A1",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 165,
        "name": {
            "en": "Armenian Genocide Monument",
            "fr": "Armenian Genocide Monument",
            "hy": "Armenian Genocide Monument"
        },
        "category": "monument",
        "country": "Laval",
        "city": "Canada",
        "address": "Highway 440/Daniel Johnson LAVAL",
        "lat": 45.5571125,
        "lng": -73.7211779,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 166,
        "name": {
            "en": "Gomidas Vartabed Statue",
            "fr": "Gomidas Vartabed Statue",
            "hy": "Gomidas Vartabed Statue"
        },
        "category": "monument",
        "country": "Quebec",
        "city": "Canada",
        "address": "60 Rue D'Auteuil, Québec, QC G1R 4C4",
        "lat": 52.4760892,
        "lng": -71.8258668,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 167,
        "name": {
            "en": "St. Vartan",
            "fr": "St. Vartan",
            "hy": "St. Vartan"
        },
        "category": "church",
        "country": "Vancouver",
        "city": "Canada",
        "address": "1260 W 67th Ave, Vancouver, BC V6P 2T2",
        "lat": 49.2608724,
        "lng": -123.113952,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 168,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "St. Gregory The Illuminator",
            "hy": "St. Gregory The Illuminator"
        },
        "category": "church",
        "country": "Vancouver",
        "city": "Canada",
        "address": "13780 Westminster Hwy, Richmond, BC V6V 1A2",
        "lat": 49.2608724,
        "lng": -123.113952,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 169,
        "name": {
            "en": "lamajoun",
            "fr": "lamajoun",
            "hy": "lamajoun"
        },
        "category": "shop",
        "country": "Vancouver",
        "city": "Canada",
        "address": "11782 River Rd Unit 128",
        "lat": 49.2608724,
        "lng": -123.113952,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 170,
        "name": {
            "en": "Sara Corning",
            "fr": "Sara Corning",
            "hy": "Sara Corning"
        },
        "category": "monument",
        "country": "Yarmouth",
        "city": "Canada",
        "address": "30 Parade Street, Yarmouth, Nova Scotia B5A 3A6",
        "lat": 43.8372648,
        "lng": -66.1157,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 171,
        "name": {
            "en": "Hay Doun Colectividad Armenia",
            "fr": "Hay Doun Colectividad Armenia",
            "hy": "Hay Doun Colectividad Armenia"
        },
        "category": "cultural_center",
        "country": "Santiago",
        "city": "Chile",
        "address": "Av. Santa María 2020 - Providencia, Santiago",
        "lat": -33.4376995,
        "lng": -70.6510671,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 172,
        "name": {
            "en": "Dikran",
            "fr": "Dikran",
            "hy": "Dikran"
        },
        "category": "restaurant",
        "country": "Los Angeles",
        "city": "Chile",
        "address": "Almagro 393, 4441152 Los Angeles, Los Ángeles, Bío Bío",
        "lat": -37.4707455,
        "lng": -72.351686,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 173,
        "name": {
            "en": "Square SArmenia",
            "fr": "Square SArmenia",
            "hy": "Square SArmenia"
        },
        "category": "monument",
        "country": "Puerto Williams",
        "city": "Chile",
        "address": "Puerto Williams",
        "lat": -54.9305022,
        "lng": -67.5716906,
        "description": {
            "en": "The world’s southernmost khachkar. It was erected in 2012",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 174,
        "name": {
            "en": "Catchic",
            "fr": "Catchic",
            "hy": "Catchic"
        },
        "category": "neighborhood",
        "country": "Hong Kong",
        "city": "China",
        "address": "Catchig street",
        "lat": 22.3492155,
        "lng": 114.1857978,
        "description": {
            "en": "Named after Sir Paul Catchig Chater, a young armenian orphan from Calcuta. He is burried in hong kong Cemetry",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 175,
        "name": {
            "en": "Jack and julie Maxian",
            "fr": "Jack and julie Maxian",
            "hy": "Jack and julie Maxian"
        },
        "category": "cultural_center",
        "country": "Hong Kong",
        "city": "China",
        "address": "Skyline Commercial Center, Unit 1201, 71–77 Wing Lok Street, Sheung Wan, Hong Kong",
        "lat": 22.3492155,
        "lng": 114.1857978,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 176,
        "name": {
            "en": "Armenia",
            "fr": "Armenia",
            "hy": "Armenia"
        },
        "category": "restaurant",
        "country": "Hong Kong",
        "city": "",
        "address": "Armenia Hotel, Flat 63A–65, Block A, 1/F, Pak Cheung Building, 59–65 Shantung Street, Mong Kok, Kowloon, Hong Kong",
        "lat": 22.3492155,
        "lng": 114.1857978,
        "description": {
            "en": "no one knows why it’s named like that.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 177,
        "name": {
            "en": "Armenia",
            "fr": "Armenia",
            "hy": "Armenia"
        },
        "category": "neighborhood",
        "country": "Amenia",
        "city": "Colombia",
        "address": "Armenia",
        "lat": 4.5274586,
        "lng": -75.7136704,
        "description": {
            "en": "the origins of the name of the town Armenia are still up for debate, but the widely accepted story is strongly linked to the Armenian people. In the 1890s, the founders of the town intended to call it “Villa Holguín,” but after learning about the massacre of Armenian Christians in the Ottoman Empire, they renamed it “Armenia” to pay homage to the victims.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 178,
        "name": {
            "en": "Las Delicias del Koko",
            "fr": "Las Delicias del Koko",
            "hy": "Las Delicias del Koko"
        },
        "category": "restaurant",
        "country": "Bogota",
        "city": "Colombia",
        "address": "29c Sur-63, Ak. 50, Bogotá",
        "lat": 4.6533817,
        "lng": -74.0836331,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    },
    {
        "id": 179,
        "name": {
            "en": "Dominican Monastry",
            "fr": "Dominican Monastry",
            "hy": "Dominican Monastry"
        },
        "category": "monument",
        "country": "Dubrovnik",
        "city": "Croatia",
        "address": "Ul. Svetog Dominika 4, 20000 Dubrovnik",
        "lat": 42.6491029,
        "lng": 18.0939501,
        "description": {
            "en": "to this day the town’s patron saint is none other than the Armenian Saint Blaise. In 2016, a khachkar was inaugurated in Dubrovnik’s Dominican Monastery.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "Little Armenias bu Ruben Kulaksezian",
        "furtherReading": ""
    }
];

// ===== Data Management =====
const DATA_VERSION = '2';

function initData() {
    // Reset POIs when data version changes (new CSV import)
    if (localStorage.getItem('la_data_version') !== DATA_VERSION) {
        localStorage.setItem('la_pois', JSON.stringify(samplePOIs));
        localStorage.setItem('la_data_version', DATA_VERSION);
        localStorage.setItem('la_nextId', '200');
    }
    if (!localStorage.getItem('la_pois')) {
        localStorage.setItem('la_pois', JSON.stringify(samplePOIs));
    }
    if (!localStorage.getItem('la_pending')) {
        localStorage.setItem('la_pending', JSON.stringify([]));
    }
    if (!localStorage.getItem('la_corrections')) {
        localStorage.setItem('la_corrections', JSON.stringify([]));
    }
    if (!localStorage.getItem('la_reports')) {
        localStorage.setItem('la_reports', JSON.stringify([]));
    }
    if (!localStorage.getItem('la_nextId')) {
        localStorage.setItem('la_nextId', '200');
    }
}

function getPOIs() {
    return JSON.parse(localStorage.getItem('la_pois') || '[]');
}

function savePOIs(pois) {
    localStorage.setItem('la_pois', JSON.stringify(pois));
}

function getPending() {
    return JSON.parse(localStorage.getItem('la_pending') || '[]');
}

function savePending(pending) {
    localStorage.setItem('la_pending', JSON.stringify(pending));
}

function getCorrections() {
    return JSON.parse(localStorage.getItem('la_corrections') || '[]');
}

function saveCorrections(corrections) {
    localStorage.setItem('la_corrections', JSON.stringify(corrections));
}

function getReports() {
    return JSON.parse(localStorage.getItem('la_reports') || '[]');
}

function saveReports(reports) {
    localStorage.setItem('la_reports', JSON.stringify(reports));
}

function getNextId() {
    const id = parseInt(localStorage.getItem('la_nextId') || '100');
    localStorage.setItem('la_nextId', String(id + 1));
    return id;
}
