// ===== Data - Armenian Points of Interest (from bdd_little_armenias_new.csv) =====
const samplePOIs = [
    {
        "id": 1,
        "name": {
            "en": "palermo",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Armenia 1353, C1414DKC Cdad. Autónoma de Buenos Aires, Argentina",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Armenia 1366, C1414 DKD, Cdad. Autónoma de Buenos Aires, Argentina",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Avda. Dorrego 2124 Palermo, Ciudad De Buenos Aires.",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Armenia 1329 C1414 DKC Cdad Autonoma buenos aires",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Armenia 1322, 1414DKD C.A.B.A",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Av. Cnel. Niceto Vega 4802, C1414BEF CABA",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Thames 1101 Corner Jufre, Buenos Aires C1414DCW",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Gurruchaga 1088 esq Jufre Villa Crespo - Ciudad de Buenos Aires",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Avenida Raúl Scalabrini Ortiz 1317, Buenos Aires, Argentina, 1414",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Jose Antonio Cabrera 4702 Palermo Soho, Buenos Aires Argentina",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Charcas 3529, Buenos Aires, Ciudad Autónoma de Buenos Aires 1425.",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Buenos Aires, Consejo 1414 Argentina",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "4300, Av. del Libertador A l'angle de Dorrego",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Av. Ernesto Tornquist 80, C1426 Cdad",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Virrey del Pino 3511, C1426 Cdad. Autónoma de Buenos Aires",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Calle Boyaca 1888, Buenos Aires C1416AAP",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Avenida Raúl Scalabrini Ortiz 1261, Buenos Aires",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Las Gaviotas 1050 street in San Isidro",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "Martinez Plazoleta Armenia",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "jose marti 1562 flores 1406",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Argentina",
        "city": "Buenos Aires",
        "address": "zuviria 3350",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Argentina",
        "city": "Liniers",
        "address": "",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "",
        "address": "villa sarmiento",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Argentina",
        "city": "",
        "address": "villa soldati",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Argentina",
        "city": "san justo",
        "address": "",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Argentina",
        "city": "valentin alsina",
        "address": "",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "pilar",
        "address": "",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Ingeniero Maschwitz",
        "address": "",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Argentina",
        "city": "tigre",
        "address": "",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Argentina",
        "city": "Cordoba",
        "address": "Av. Maipú 66, Cordoba, Cordoba, 5000 Argentina",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Argentina",
        "city": "Cordoba",
        "address": "Garay 2057, Córdoba (Córdoba, Argentina) 5000",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Argentina",
        "city": "Rosario",
        "address": "Av. Estanislao López 1800, S2000 Rosario, Santa Fe, Argentina",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Mar Del Plata",
        "address": "11 de Septiembre 3680 - Mar del Plata",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Argentina",
        "city": "Mendoza",
        "address": "Maestra Durand 8097 - Los Corralitos, Mendoza",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Argentina",
        "city": "corrientes",
        "address": "Libertad y Ruta 12, Corrientes",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Australia",
        "city": "Sydney",
        "address": "10 Macquarie Street, Chatswood NSW 2067",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Australia",
        "city": "Sydney",
        "address": "32 Frenchs Rd Willoughby NSW, 2068, Australia",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Australia",
        "city": "Sydney",
        "address": "184 Edinburgh Rd Castlecrag NSW 2068",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Australia",
        "city": "Sydney",
        "address": "259 Penshurst St. Willoughby New South Wales 2068. Australia",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Australia",
        "city": "Sydney",
        "address": "Ararat Reserve. Grattan Cr, Frenchs Forest, New South Wales, Australia",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Australia",
        "city": "Sydney",
        "address": "3 Grattan Cres, Frenchs Forest NSW 2086, Australie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Australia",
        "city": "Sydney",
        "address": "22 Blenheim Road, North Ryde NSW 2113",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Australia",
        "city": "Sydney",
        "address": "Galstaun College 5. Chiltern Road, Ingleside, NSW 2101.",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Australia",
        "city": "Sydney",
        "address": "2 Namba Rd. Duffys Forest NSW 2084",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Australia",
        "city": "Sydney",
        "address": "Hakea Ave, Belrose NSW 2085, Australie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Australia",
        "city": "Sydney",
        "address": "626 Bourke St. Surry Hills, NSW, 2010",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Australia",
        "city": "Sydney",
        "address": "5 John Street Lidcombe NSW 2141",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Australia",
        "city": "Sydney",
        "address": "Hawthorne Ave, Rookwood NSW 2141",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Australia",
        "city": "Sydney",
        "address": "682 Cabramatta Road Bonnyrigg, Bonnyrigg, NSW, Australia 2177",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Australia",
        "city": "Sydney",
        "address": "47a/189 Ocean View Rd, Ettalong Beach NSW 2257.",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Australia",
        "city": "Melbourne",
        "address": "6 Melbourne Pl, Melbourne, Victoria 3000 Australie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Australia",
        "city": "Melbourne",
        "address": "129 Woods St, Donald, Victoria 3480 Australie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Australia",
        "city": "melbourne",
        "address": "Melbourne. Armenian Catholic Church 41-43 Station Street Ferntree Gully Vic 3156",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Australia",
        "city": "Melbourne",
        "address": "14 Police Rd, Springvale, VIC, AU",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Australia",
        "city": "Adelaide",
        "address": "2 Spains Rd, Salisbury Downs SA 5108, Australie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Austria",
        "city": "Vienna",
        "address": "Mechitaristengasse 4, Vienna 1070 Austria",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Austria",
        "city": "Vienna",
        "address": "Kolonitzgasse 11, Vienna 1030, Austria",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Austria",
        "city": "Vienna",
        "address": "14 Rotenturmstraße, Wien, Wien, 1010",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Austria",
        "city": "Vienna",
        "address": "Wurzbachgasse 14, 1150 Wien",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Austria",
        "city": "Vienna",
        "address": "Belvederegasse 17 1040 Wien",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Austria",
        "city": "Vienna",
        "address": "Argentinierstraße 50, 1040 Wien, Autriche",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Austria",
        "city": "Innsbuck",
        "address": "Mariahilfstraße 1a, 6020 Innsbruck, Autriche",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bangladesh",
        "city": "Dhaka",
        "address": "4 Armenian Street, Armanitola Rd, Dhaka City 1100 Bangladesh",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Bangladesh",
        "city": "Dhaka",
        "address": "Chittaranjan Avenue, Dhaka, Dhaka, Bangladesh",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Minsk",
        "city": "Belarus",
        "address": "Pieramozhcaw Avenue, 114",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Minsk",
        "city": "Belarus",
        "address": "Krasnoarmeyskaya 36, Minsk 220030 Belarus",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Minsk",
        "city": "Belarus",
        "address": "35/1 Chkalova str., Minsk region",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Mogilev",
        "city": "Belarus",
        "address": "Pervomayskaya 144A, Mogilev 212001 Belarus",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Rue De La Madeleine, Brussels 1000 Belgium",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Square Henri Michaux, 1050 Ixelles",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Avenue Franklin Roosevelt, 67",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Centre arménien Hay Doun Rue du Gaz, 83 1020 Brussels, Belgium",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Bd de Smet de Naeyer 1, 1090 Jette, Belgique",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Rue Léon Theodor 168, 1090 Jette, Belgique",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Avenue Milcamps, 154 1030 Bruxelles",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Rue des Deux Églises 121, 1210 Bruxelles, Belgique",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Rue de l'Eglise Saint-Martin 138, 1083 Ganshoren, Belgique",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Brussels",
        "city": "Belgium",
        "address": "Rue Léon Theodor 227, 1090 Jette, Belgique",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Antwerp",
        "city": "Belgium",
        "address": "8, Komedieplaats 4, 2000 Antwerpen, Belgique",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Antwerp",
        "city": "Belgium",
        "address": "Karel de Preterlei 1, 2140 Antwerpen, Belgique",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Mechelen",
        "city": "Belgium",
        "address": "Botermarkt 28, 2800 Mechelen, Belgique",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Cotonou",
        "city": "Benin",
        "address": "03bp34, Cotonou, Bénin",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Av. Santos Dumont, 55 - Bom Retiro, São Paulo - SP, 01101-000, Brésil",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Avenida Tiradentes, 718, São Paulo, SP, Brazil",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "SP, 01102-040, Brésil",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Av. do Estado, 1101",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Rua Dom Antônio de Melo, near the metro stations Luz and Tiradentes",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Sao Paulo - Rua Rio Bonito 1641, Mooca",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Rua Jose Margarido 216 -Santana Santana - São Paulo - SP - Brazil",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Rua Capitão Manuel Novaes, 173 - Santana, São Paulo - SP, 02017-030, Brésil",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Av. Brig. Faria Lima, 1616 - 04",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Rua Cayowaá, 1907 - Perdizes, São Paulo - SP, 01258-011, Brésil",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "R. Nova York, 341 - Brooklin, São Paulo - SP, 04560-000, Brésil",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Sao Paulo",
        "city": "Brazil",
        "address": "Av. Professor Ascendino Reis, 1450 - Vila Clementino, São Paulo - SP, 04027-000, Brésil",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Osasco",
        "city": "Brazil",
        "address": "R. Carlos da Costa Ramalho Júnior, 502",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Osasco",
        "city": "Brazil",
        "address": "Rua Doutor Paulo Ferraz da Costa Aguiar 1583, Osasco",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Praia Grande",
        "city": "Brazil",
        "address": "R. Guatemala, 192 - Guilhermina, Praia Grande - SP, 11702-040, Brésil",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Brasilia",
        "city": "Brazil",
        "address": "Setor de Embaixadas Norte, Lote No 048",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Brasilia",
        "city": "Brazil",
        "address": "Rua Terencio Pereira 1085, Araxa, State of Minas Gerais 38182-176 Brazil",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Sofia",
        "city": "Bulgaria",
        "address": "14 ul. \"Zavodska\", Sofia, Sofia City Province, BG",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Sofia",
        "city": "Bulgaria",
        "address": "1 “Todor Alexandrov” bul., Sofia, Bulgaria 1000.",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sofia",
        "city": "Bulgaria",
        "address": "Pette Kyosheta, Antim I St 36, 1303 Sofia, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sofia",
        "city": "Bulgaria",
        "address": "????? ?.?, ulitsa „Georgi S. Rakovski“ 92, 1000 Sofia, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Plovdiv",
        "city": "Bulgaria",
        "address": "ul. Yanko Sakazov 15, 4020 Marasha, Plovdiv, Bulgaria",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Plovdiv",
        "city": "Bulgaria",
        "address": "Creative District, KapanaPlovdiv Center, ul. \"Konstantin Stoilov\" 14, 4000 Plovdiv, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "plovdiv",
        "city": "Bulgaria",
        "address": "Center, TsentarPlovdiv Center, ul. \"Patriarh Evtimiy\" 19, 4000 Plovdiv, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Plovdiv",
        "city": "Bulgaria",
        "address": "42°8'55.55\"N, 24°46'16.60\"E",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Pazardjik",
        "city": "Bulgaria",
        "address": "Pazardzhik Center, ul. \"Antim I\" 8, 4400 Pazardzhik, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Stara Zagora",
        "city": "Bulgaria",
        "address": "15 Zlatica str.",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Yambol",
        "city": "Bulgaria",
        "address": "????? ??????, 8600 Yambol, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Burgas",
        "city": "Bulgaria",
        "address": "Burgas Center, ul. \"Mihail Lermontov\" 20, 8000 Burgas, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sozopol",
        "city": "Bulgaria",
        "address": "Tsentar, ul. \"Kiril i Metodiy\" 35, 8130 Sozopol, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Varna",
        "city": "Bulgaria",
        "address": "CenterOdesos, ul. \"Han Asparuh\" 15, 9000 Varna, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Varna",
        "city": "Bulgaria",
        "address": "Varna CenterOdesos, ???. „??????? ????? ?????“ 41, 9000 Varna, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Varna",
        "city": "Bulgaria",
        "address": "CenterPrimorski, 9002 Varna, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Dobrich",
        "city": "Bulgaria",
        "address": "Dobrich",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Shumen",
        "city": "Bulgaria",
        "address": "Grivitsa, ul. \"Zlatitza\" 15, 9702 Shumen, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Ruse",
        "city": "Bulgaria",
        "address": "Vezhdata, ul. \"Bratya Miladinovi\" 18, 7001 Ruse, Bulgarie",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Silistra",
        "city": "Bulgaria",
        "address": "45 K.Arabazan Street, Silistra",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Toronto",
        "city": "Canada",
        "address": "45 Hallcrawn PI, Toronto, ON M2J 4Y4 CANADA",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Toronto",
        "city": "Canada",
        "address": "2746 Victoria Park Ave, North York, ON M2J 4A8, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Toronto",
        "city": "Canada",
        "address": "155 Consumers Rd #106, North York, ON M2J 0A3, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Toronto",
        "city": "Canada",
        "address": "920 Progress Ave, Scarborough, ON M1G 3T5, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Toronto",
        "city": "Canada",
        "address": "2600 14th Ave., Markham, ON, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Toronto",
        "city": "Canada",
        "address": "100 Northdale Rd, Toronto, Ontario M2L 2M1, CA",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Toronto",
        "city": "Canada",
        "address": "2537 Bayview Ave, Toronto, ON M2L 1H3, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Toronto",
        "city": "Canada",
        "address": "2755 VICTORIA PARK AVENUE. SCARBOROUGH, ON, M1T 1A5.",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Toronto",
        "city": "Canada",
        "address": "960 Queen St W, Toronto, ON, M6J 1G8",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Toronto",
        "city": "Canada",
        "address": "1580 Bayview Ave, Toronto, ON M4G 3B7, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Toronto",
        "city": "Canada",
        "address": "1800 Avenue Rd, North York, ON M5M 3Z1, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Toronto",
        "city": "Canada",
        "address": "5487 Dundas St W Unit 1A, Etobicoke, ON M9B 1B5, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Georgetown",
        "city": "Canada",
        "address": "Georgetown ontario",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Cambridge",
        "city": "Canada",
        "address": "15 International Village Dr, Cambridge, ON N1R 7M5, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Cambridge",
        "city": "Canada",
        "address": "1620 Franklin Blvd ON N3C 1P2 Cambridge",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "St. Catherines",
        "city": "Canada",
        "address": "49 Carlton St, St. Catharines, ON L2R 1P7, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "St. Catherines",
        "city": "Canada",
        "address": "156 Martindale Rd, St. Catharines, Ontario.",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Ottawa",
        "city": "Canada",
        "address": "1896 Prince of Wales Dr, Ottawa, ON K2C 3W9, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Montreal",
        "city": "Canada",
        "address": "615 Av. Stuart, Montréal, QC H2V 3H2, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Montreal",
        "city": "Canada",
        "address": "191 Rue Jean-Talon E, Montréal, QC H2R 1S8, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Montreal",
        "city": "Canada",
        "address": "199 Rue Jean-Talon E, Montréal, QC H2R 1S8, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Montreal",
        "city": "Canada",
        "address": "420 Rue Faillon E, Montréal, QC H2R 2G5, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Montreal",
        "city": "Canada",
        "address": "3401 Rue Olivar-Asselin, Montréal, QC H4J 1L5, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Montreal",
        "city": "Canada",
        "address": "858 Boulevard Cote Vertu Ouest, Saint-Laurent, Quebec H4L 1Y4, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Montreal",
        "city": "Canada",
        "address": "755 Rue Manoogian, Montréal, QC H4N 1Z5, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Montreal",
        "city": "Canada",
        "address": "11301 Bd de l'Acadie, Montréal, QC H3M 2T1, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Montreal",
        "city": "Canada",
        "address": "11455 Rue Drouart, Montréal, Québec H3M 2S6, CA",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Montreal",
        "city": "Canada",
        "address": "420 Rue Fleury O, Montréal, QC H3L 1V7, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Laval",
        "city": "Canada",
        "address": "4865 Chem. du Souvenir, Laval, QC H7W 1E1, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Laval",
        "city": "Canada",
        "address": "397 Boul des Prairies, Laval, QC H7N 2W6, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Laval",
        "city": "Canada",
        "address": "123 Boul des Prairies, Laval, QC H7N 4B1, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Laval",
        "city": "Canada",
        "address": "1225 Bd Élisabeth, Laval, QC H7W 3J7, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Laval",
        "city": "Canada",
        "address": "500 67e Av, Laval, QC H7V 2M2, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "411 Bd Curé-Labelle, Laval, QC H7V 2S9, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "3426 Bd Cartier O, Laval, QC H7V 1K2, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "4231 Blvd. Samson, Laval, Quebec H7W 2G8, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "4229 Blvd. Samson, Laval, Quebec H7W 2G8, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "784 Bd Curé-Labelle, Laval, QC H7V 2V3, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "3467 Blvd. Saint-Martin O, Laval, QC H7T 1A2, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "2204 Boulevard Curé-Labelle, Laval, QC H7T 1R1, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Laval",
        "city": "Canada",
        "address": "3268 Blvd. Saint-Martin O, Laval, QC H7T 1A1, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Laval",
        "city": "Canada",
        "address": "Highway 440/Daniel Johnson LAVAL.",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Quebec",
        "city": "Canada",
        "address": "60 Rue D'Auteuil, Québec, QC G1R 4C4, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Vancouver",
        "city": "Canada",
        "address": "1260 W 67th Ave, Vancouver, BC V6P 2T2, Canada",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Vancouver",
        "city": "Canada",
        "address": "13780 Westminster Hwy, Richmond, BC V6V 1A2,",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vancouver",
        "city": "Canada",
        "address": "11782 River Rd Unit 128",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Yarmouth",
        "city": "Canada",
        "address": "30 Parade Street, Yarmouth, Nova Scotia B5A 3A6",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Santiago",
        "city": "Chile",
        "address": "Av. Santa María 2020 - Providencia, Santiago - Chile",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Los Angeles",
        "city": "Chile",
        "address": "Almagro 393, 4441152 Los Angeles, Los Ángeles, Bío Bío, Chili",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Puerto Williams",
        "city": "Chile",
        "address": "Puerto Williams",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Hong Kong",
        "city": "China",
        "address": "Catchig street china",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Hong Kong",
        "city": "China",
        "address": "Skyline Commercial Center, Unit 1201, 71–77 Wing Lok Street, Sheung Wan, Hong Kong, China",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Hong Kong",
        "city": "",
        "address": "Armenia Hotel, Flat 63A–65, Block A, 1/F, Pak Cheung Building, 59–65 Shantung Street, Mong Kok, Kowloon, Hong Kong, China",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Amenia",
        "city": "Colombia",
        "address": "Armenia Colombia",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bogota",
        "city": "Colombia",
        "address": "29c Sur-63, Ak. 50, Bogotá, Colombia",
        "lat": null,
        "lng": null,
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
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Dubrovnik",
        "city": "Croatia",
        "address": "Ul. Svetog Dominika 4, 20000 Dubrovnik,",
        "lat": null,
        "lng": null,
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
    },
    {
        "id": 180,
        "name": {
            "en": "Armenias",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Nicosia",
        "city": "Cyprus",
        "address": "Armenias street nicosia",
        "lat": 35.15263478914247,
        "lng": 33.3684309499222,
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
        "id": 181,
        "name": {
            "en": "The holy Mother of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Nicosia",
        "city": "Cyprus",
        "address": "Strovolos, Armenia Avenue, Cyprus Nicosia, Cyprus",
        "lat": 35.15245050413644,
        "lng": 33.36693962000894,
        "description": {
            "en": "The church compound houses the Nareg School, the community’s main organizations, an Armenian Genocide memorial, the newspaper Artsakank and the offices of the prelacy.",
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
        "id": 182,
        "name": {
            "en": "Nareg",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Nicosia",
        "city": "Cyprus",
        "address": "strovolos armenias ave",
        "lat": 35.15275752855884,
        "lng": 33.36745460410268,
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
        "id": 183,
        "name": {
            "en": "Kalaidjian",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Nicosia",
        "city": "Cyprus",
        "address": "49X7+MRQ, Strovolos 2008, Chypre",
        "lat": 35.14915983780132,
        "lng": 33.3644162769103,
        "description": {
            "en": "the Kalaydjian Rest Home also has a small chapel.",
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
        "id": 184,
        "name": {
            "en": "Melkonian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "",
        "city": "Cyprus",
        "address": "592G+699, Melkonian, Aglantzia 2112, Chypre",
        "lat": 35.150527349705776,
        "lng": 33.37442883529418,
        "description": {
            "en": "Founded in 1926 by Garabed and Krikor Melkonian, the Melkonian Institute was for 80 years one of the largest educational establishments in the Armenian world. The trees planted at the front of the property were planted by genocide survivor orphans. It’s been closed since 2005.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 185,
        "name": {
            "en": "Avo",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Nicosia",
        "city": "Cyprus",
        "address": "Onasagorou, Nicosia 1011, Chypre",
        "lat": 35.17125218294995,
        "lng": 33.361670678094015,
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
        "id": 186,
        "name": {
            "en": "Old Armenian Cemetry",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Nicosia",
        "city": "Cyprus",
        "address": "59G3+8J9, Charalambou Mouskou",
        "lat": 35.17567346754097,
        "lng": 33.354216684299416,
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
        "id": 187,
        "name": {
            "en": "Vartanaki",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Nicosia",
        "city": "Cyprus",
        "address": "583Q+CHV, Strovolos 2058, Chypre",
        "lat": 35.15355533073994,
        "lng": 33.33905798019402,
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
        "id": 188,
        "name": {
            "en": "Armenaki",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Nicosia",
        "city": "Cyprus",
        "address": "Strovolos 2003, Chypre",
        "lat": 35.154464526603036,
        "lng": 33.3728277615665,
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
        "id": 189,
        "name": {
            "en": "St. Stephen's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Larnaka",
        "city": "Cyprus",
        "address": "24 Armenian Church Street.",
        "lat": 34.9146128132095,
        "lng": 33.63529098580181,
        "description": {
            "en": "was built by survivors of the Adana massacres in 1909 and St. Stephen’s Church (Surp Stepanos) was consecrated in 1914.",
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
        "id": 190,
        "name": {
            "en": "Nareg",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Larnaka",
        "city": "Cyprus",
        "address": "24 Armenian Church Street.",
        "lat": 34.914641584598265,
        "lng": 33.63528301152679,
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
        "id": 191,
        "name": {
            "en": "Armenian Cemetry",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Larnaka",
        "city": "Cyprus",
        "address": "",
        "lat": 34.92242,
        "lng": 33.61572,
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
        "id": 192,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Larnaka",
        "city": "Cyprus",
        "address": "Marina, Larnaca 6017, Chypre",
        "lat": 34.91636668097798,
        "lng": 33.63811915957767,
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
        "id": 193,
        "name": {
            "en": "AGBU Cultural Center",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Larnaka",
        "city": "Cyprus",
        "address": "13 Kilkis Street",
        "lat": 34.91968932068287,
        "lng": 33.633886393534375,
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
        "id": 194,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Limassol",
        "city": "Cyprus",
        "address": "Vasili Michaelidi 16, Limassol 3026, Chypre",
        "lat": 34.68306890118019,
        "lng": 33.04262675065141,
        "description": {
            "en": "The Nareg School is next to the church,",
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
        "id": 195,
        "name": {
            "en": "Armenian Genocide Memorial Park",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Paphos",
        "city": "Cyprus",
        "address": "QCGF+MGM, Paphos 8010, Chypre",
        "lat": 34.77688872197188,
        "lng": 32.424065116811896,
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
        "id": 196,
        "name": {
            "en": "U Zlatheo Rada",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Prague",
        "city": "Czech Republic",
        "address": "Karlova 181, 110 00 Staré M?sto, Tchéquie",
        "lat": 50.08600897076084,
        "lng": 14.41627260751098,
        "description": {
            "en": "A few meters from the famous Charles Bridge, the café U Zlatého Hada was founded in 1714 by the Armenian businessman Georgius Deodatus Damascenus, and became the city’s first café.",
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
        "id": 197,
        "name": {
            "en": "Old Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Prague",
        "city": "Czech Republic",
        "address": "Lihovarská 1096/6, 190 00 Praha 9-Libe?, Tchéquie",
        "lat": 50.10419515171606,
        "lng": 14.486969882487655,
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
        "id": 198,
        "name": {
            "en": "Pomegrenate",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Prague",
        "city": "Czech Republic",
        "address": "Lípová 1444/20a, 120 00 Nové M?sto, Tchéquie",
        "lat": 50.07528267575893,
        "lng": 14.424013789317984,
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
        "id": 199,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Prague",
        "city": "Czech Republic",
        "address": "Jind?išská 30, 110 00 Nové M?sto, Czechia",
        "lat": 50.085297494115096,
        "lng": 14.431011829376514,
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
        "id": 200,
        "name": {
            "en": "Holy Spirit",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Prague",
        "city": "Czech Republic",
        "address": "U Sv. Ducha, 110 00 Staré M?sto, Tchéquie",
        "lat": 50.09019800165542,
        "lng": 14.42024237002481,
        "description": {
            "en": "Armenian mass is celebrated each week",
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
        "id": 201,
        "name": {
            "en": "Marlenka",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Ostrava",
        "city": "Czech Republic",
        "address": "434, Frýdek-Místek 738 01. Czech Republic",
        "lat": 49.70128137031075,
        "lng": 18.335733519127444,
        "description": {
            "en": "Marlenka, which makes Armenian honey cakes that are very popular in the Czech Republic, has a factory near the town of Ostrava, and it is currently open for visitors.",
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
        "id": 202,
        "name": {
            "en": "smetana park",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Jihlava",
        "city": "Czech Republic",
        "address": "Smetanovy sady (Smetana Park), Jihlava, Czech Republic",
        "lat": 49.39686133001353,
        "lng": 15.584075177623168,
        "description": {
            "en": "The small Armenian community of Jihlava is particularly active: in 2006 they inaugurated the first khachkar on Czech territory.",
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
        "id": 203,
        "name": {
            "en": "Aarhus univercity park",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Aarhus",
        "city": "Denmark",
        "address": "Aarhus University, Nordre Ringgade 1",
        "lat": 56.1689,
        "lng": 10.2016,
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
        "id": 204,
        "name": {
            "en": "khachkar",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Gylling",
        "city": "Denmark",
        "address": "8300 Odder, Denmark",
        "lat": 55.89078,
        "lng": 10.16582,
        "description": {
            "en": "In the village of Gylling, just a half-hour drive from Aarhus, a khachkar was erected in 2014, opposite the church. It was there that Karen Jeppe, Danish missionary – nicknamed the “Mother of Armenians” (Armenienes Moder) for her assistance to survivors of the Armenian Genocide – was born.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 205,
        "name": {
            "en": "Sevag's graekeren",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Aarhus",
        "city": "Denmark",
        "address": "Tordenskjoldsgade 25, 8200 Aarhus, Danemark",
        "lat": 56.17074,
        "lng": 10.21585,
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
        "id": 206,
        "name": {
            "en": "La Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Quito / Conocoto",
        "city": "Ecuador",
        "address": "",
        "lat": -0.27521,
        "lng": -78.45777,
        "description": {
            "en": "no connection whatsoever to a past Armenian presence.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 207,
        "name": {
            "en": "La Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Nanegalito, Quito Canton",
        "city": "Ecuador",
        "address": "",
        "lat": 0.06793,
        "lng": -78.69317,
        "description": {
            "en": "no connection whatsoever to a past Armenian presence.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 208,
        "name": {
            "en": "La Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Santa Lucía, Guayas Province",
        "city": "Ecuador",
        "address": "",
        "lat": -1.73333,
        "lng": -79.9,
        "description": {
            "en": "no connection whatsoever to a past Armenian presence.",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 209,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Cairo",
        "city": "Egypt",
        "address": "3773+GC8, El-Zaher, Daher, Cairo Governorate 4330402, Égypte",
        "lat": 30.063579777204072,
        "lng": 31.25333574910775,
        "description": {
            "en": "seat of the Armenian Prelacy of Egypt,",
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
        "id": 210,
        "name": {
            "en": "Holy Annunciation",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Cairo",
        "city": "Egypt",
        "address": "36 Mohamed Sabri Abu Alam Street, Abdeen, Cairo 11121, Egypt",
        "lat": 30.04683,
        "lng": 31.2395,
        "description": {
            "en": "seat of the Armenian Catholic Eparchy of Egypt.",
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
        "id": 211,
        "name": {
            "en": "Yacoubian",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Cairo",
        "city": "Egypt",
        "address": "34?Talaat Harb?Street, Bab Al Louq, Qasr El Nil, Cairo Governorate?11613, Egypt",
        "lat": 30.0512,
        "lng": 31.2406,
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
        "id": 212,
        "name": {
            "en": "Reader's Corner",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Cairo",
        "city": "Egypt",
        "address": "33 Abd El-Khalik Tharwat St., Bab Al Louq, Abdeen, Cairo Governorate 4280152, Egypt",
        "lat": 30.05027,
        "lng": 31.24366,
        "description": {
            "en": "The Reader’s Corner, a true Cairo stalwart founded by the Mikaelian family in 1959.",
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
        "id": 213,
        "name": {
            "en": "St. Therese",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Cairo",
        "city": "Egypt",
        "address": "23 Rashid St, Almazah, Heliopolis, Cairo Governorate 4460342, Egypt",
        "lat": 30.09247,
        "lng": 31.33458,
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
        "id": 214,
        "name": {
            "en": "Armenian Catholic Sisters School",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Cairo",
        "city": "Egypt",
        "address": "17?El?Badeya St,?Almazah,?Heliopolis,?Cairo?Governorate,?Egypt",
        "lat": 30.09375,
        "lng": 31.3284,
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
        "id": 215,
        "name": {
            "en": "Noubarian Klousdian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Cairo",
        "city": "Egypt",
        "address": "5 Menouf Street, off Cleopatra Street, Salah El Din Square, Heliopolis, Cairo, Egypt",
        "lat": 30.09045,
        "lng": 31.32975,
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
        "id": 216,
        "name": {
            "en": "Goganian",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Cairo",
        "city": "Egypt",
        "address": "12?Menof?St.,?Almazah,?Heliopolis,?Cairo Governorate?4460294,?Egypt",
        "lat": 30.0945,
        "lng": 31.3303,
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
        "id": 217,
        "name": {
            "en": "HMEM Nubar",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Cairo",
        "city": "Egypt",
        "address": "38PG+8V9, El?Orouba, El-Montaza, Heliopolis, Cairo Governorate 4461003, Egypt",
        "lat": 30.08578,
        "lng": 31.32724,
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
        "id": 218,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Cairo",
        "city": "Egypt",
        "address": "Almazah, Heliopolis, Cairo Governorate?4460264, Egypt",
        "lat": 30.09118,
        "lng": 31.33043,
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
        "id": 219,
        "name": {
            "en": "Armenian cemetry",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Cairo",
        "city": "Egypt",
        "address": "15 Al Dayora, Fom Al Khalig wa Deir an Nahas, Old Cairo, Cairo Governorate 4260061, Egypt",
        "lat": 30.02751,
        "lng": 31.26175,
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
        "id": 220,
        "name": {
            "en": "St; Peter and St. Paul Church",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Alexandria",
        "city": "Egypt",
        "address": "417?Ramses St., Abbassia, Cairo Governorate, Egypt",
        "lat": 30.0722,
        "lng": 31.2756,
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
        "id": 221,
        "name": {
            "en": "Mayrig",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Cairo",
        "city": "Egypt",
        "address": "Plot?29, Arkan Plaza?Entrance?2, 26th?Of?July?Corridor, Zayed City, Giza?Governorate 12588, Egypt",
        "lat": 30.02079,
        "lng": 31.00465,
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
        "id": 222,
        "name": {
            "en": "Boghossian Melkonian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Alexandria",
        "city": "Egypt",
        "address": "Alexandria, Alexandria Governorate, Egypt",
        "lat": 31.191557,
        "lng": 29.893745,
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
        "id": 223,
        "name": {
            "en": "Armenian genocide memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Alexandria",
        "city": "Egypt",
        "address": "Saints?Peter?and?Paul Armenian Church, 12?Baidawi Street, Alexandria, Egypt",
        "lat": 31.20022,
        "lng": 29.91477,
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
        "id": 224,
        "name": {
            "en": "Nubar Pasha",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Alexandria",
        "city": "Egypt",
        "address": "22 El-Horreya road, Atarin Alexandria",
        "lat": 31.19673,
        "lng": 29.90191,
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
        "id": 225,
        "name": {
            "en": "Jaan Seegi",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Tallinn",
        "city": "Estonia",
        "address": "4-Digit Code Breakers #R4GTT947",
        "lat": 59.433755,
        "lng": 24.761741,
        "description": {
            "en": "The Armenian community of Tallinn uses the Estonian church Jaan Seegi in Tallinn for religious ceremonies;",
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
        "id": 226,
        "name": {
            "en": "Sevan Grill",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tallinn",
        "city": "Estonia",
        "address": "Ahtri tn 6a, 10151 Tallinn, Estonia",
        "lat": 59.439211,
        "lng": 24.761419,
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
        "id": 227,
        "name": {
            "en": "Noy City",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tallinn",
        "city": "Estonia",
        "address": "Tuukri tn 26, 10151 Tallinn, Estonia",
        "lat": 59.4394646,
        "lng": 24.7662069,
        "description": {
            "en": "Georgian and Armenian",
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
        "id": 228,
        "name": {
            "en": "Noy Grill Lounge",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tallinn",
        "city": "Estonia",
        "address": "Astangu 1, 13519 Tallinn, Estonia",
        "lat": 59.4339,
        "lng": 24.6666,
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
        "id": 229,
        "name": {
            "en": "Smile Cafe",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tartu",
        "city": "Estonia",
        "address": "Riia tn 15b, 51003 Tartu, Estonia",
        "lat": 58.3731206,
        "lng": 26.7199654,
        "description": {
            "en": "Stop for a lahmajun or an Armenian coffee",
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
        "id": 230,
        "name": {
            "en": "Armenian Estonian Freinship",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Tartu",
        "city": "Estonia",
        "address": "Botanical Garden park area, 51005 Tartu, Estonia",
        "lat": 58.3839,
        "lng": 26.726,
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
        "id": 231,
        "name": {
            "en": "Naos",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tartu",
        "city": "Estonia",
        "address": "Vahtra tn 21, Ülenurme, 61714 Tartu maakond, Estonia",
        "lat": 58.3057108,
        "lng": 26.7186568,
        "description": {
            "en": "Naos is located close to the airport.",
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
        "id": 232,
        "name": {
            "en": "Armeenia Restoran",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Parnu",
        "city": "Estonia",
        "address": "Kuninga tn 17, 80014 Pärnu, Estonia",
        "lat": 58.3838619,
        "lng": 24.5011568,
        "description": {
            "en": "right in the heart of the historic center.",
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
        "id": 233,
        "name": {
            "en": "Ararat Grill",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Rakvere",
        "city": "Estonia",
        "address": "Tallinna tn 53, 44311 Rakvere, Estonia",
        "lat": 59.3544444,
        "lng": 26.365,
        "description": {
            "en": "One of the city’s most popular restaurants.",
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
        "id": 234,
        "name": {
            "en": "Artur",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Viitna",
        "city": "Estonia",
        "address": "Rõmeda, 45230 Lääne-Viru maakond, Estonia",
        "lat": 59.4518955,
        "lng": 26.0298015,
        "description": {
            "en": "a country restaurant with a large patio and a playground for the kids.",
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
        "id": 235,
        "name": {
            "en": "Holy Ressurection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Mbabane",
        "city": "Eswatini",
        "address": "Pine Valley, Mbabane, Hhohho Region, Eswatini",
        "lat": -26.304415,
        "lng": 31.147669,
        "description": {
            "en": "The genocide survivor Krikor Der Balian settled in Eswatini in the 1980s, having previously lived in Egypt, Sudan, and South Africa. The church, built on his property in Pine Valley, was officially given to the Armenian Apostolic Church by King Mswati III in 2016.",
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
        "id": 236,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Addis Ababa",
        "city": "Ethiopia",
        "address": "Piazza/Arada, Addis?Ababa, Ethiopia",
        "lat": 9.0378517,
        "lng": 38.755228,
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
        "id": 237,
        "name": {
            "en": "Ararat Grill",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Addis Ababa",
        "city": "Ethiopia",
        "address": "Tewodros St, Addis Ababa, Ethiopia",
        "lat": 9.0402981,
        "lng": 38.7580973,
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
        "id": 238,
        "name": {
            "en": "Aladdin",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Addis Ababa",
        "city": "Ethiopia",
        "address": "Africa Avenue (off Bole Road), Addis?Ababa, Ethiopia",
        "lat": 8.9911,
        "lng": 38.782,
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
        "id": 239,
        "name": {
            "en": "Armenian House",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Helsinki",
        "city": "Finland",
        "address": "Lönnrotinkatu?27, 00180 Helsinki, Finland",
        "lat": 60.1644462,
        "lng": 24.93268,
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
        "id": 240,
        "name": {
            "en": "Cadet",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Paris",
        "city": "France",
        "address": "Rue Cadet, 75009 Paris, France",
        "lat": 48.875519,
        "lng": 2.343467,
        "description": {
            "en": "In 1930s Paris, Cadet Street was nicknamed “Little Armenia” for its numerous jewelry stores and Armenian businesses.",
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
        "id": 241,
        "name": {
            "en": "The house of Armenian Culture",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "paris",
        "city": "France",
        "address": "17 Rue Bleue, 75009 Paris, France",
        "lat": 48.875804,
        "lng": 2.346088,
        "description": {
            "en": "neighborhood, the House of Armenian Culture (Maison de la Culture Arménienne or MCA) is home to organizations such as the ARF and the ARS (Croix-Bleue), as well as Armenian classes. Parisians of all backgrounds go there primarily for the Cantine de la MCA, where Mamikon and Tchinar serve excellent Armenian specialties in a welcoming ambiance.",
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
        "id": 242,
        "name": {
            "en": "Chavarche Missakian Square",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "paris",
        "city": "France",
        "address": "75009 Paris, France",
        "lat": 48.8766206,
        "lng": 2.3467555,
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
        "id": 243,
        "name": {
            "en": "Herachian Freres",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Paris",
        "city": "France",
        "address": "9 Rue Cadet, 75009 Paris, France",
        "lat": 48.876049,
        "lng": 2.345219,
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
        "id": 244,
        "name": {
            "en": "Les Diamantaires",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Paris",
        "city": "France",
        "address": "5 Rue Cadet, 75009 Paris, France",
        "lat": 48.875911,
        "lng": 2.344736,
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
        "id": 245,
        "name": {
            "en": "Maison Artaner",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Paris",
        "city": "France",
        "address": "11 Rue Cadet, 75009 Paris, France",
        "lat": 48.87618,
        "lng": 2.345615,
        "description": {
            "en": "Maison Artaner is a jewelry shop opened by a young French Armenian woman who gives private tours of her workshop upon request.",
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
        "id": 246,
        "name": {
            "en": "Karine Arabian",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Paris",
        "city": "France",
        "address": "8 Rue de Trévise, 75009 Paris, France",
        "lat": 48.876313,
        "lng": 2.34719,
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
        "id": 247,
        "name": {
            "en": "Le Baron",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Paris",
        "city": "France",
        "address": "6 Rue Cadet, 75009 Paris, France",
        "lat": 48.875963,
        "lng": 2.344948,
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
        "id": 248,
        "name": {
            "en": "Petrossian",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Paris",
        "city": "France",
        "address": "18 Rue du Théâtre, 75015 Paris, France",
        "lat": 48.848735,
        "lng": 2.292842,
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
        "id": 249,
        "name": {
            "en": "Mantchouk",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Paris",
        "city": "France",
        "address": "106 Boulevard de Courcelles, 75017 Paris, France",
        "lat": 48.879148099999995,
        "lng": 2.3020348,
        "description": {
            "en": "the Petrossian family decided to open a restaurant dedicated to Armenian cuisine, Mantchouk.",
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
        "id": 250,
        "name": {
            "en": "Yerevan Garden",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Paris",
        "city": "France",
        "address": "44 Port de la Conférence, 75008 Paris, France",
        "lat": 48.864356,
        "lng": 2.307303,
        "description": {
            "en": "After crossing the bridge of the Invalides, you’ll reach Erevan Garden and its statue of Komitas, which is the meeting point for April 24 commemorations.",
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
        "id": 251,
        "name": {
            "en": "The Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Paris",
        "city": "France",
        "address": "15 Rue Jean Goujon, 75008 Paris, France",
        "lat": 48.869721,
        "lng": 2.303514,
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
        "id": 252,
        "name": {
            "en": "Colbeh",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Paris",
        "city": "France",
        "address": "22 Rue Mouffetard, 75005 Paris, France",
        "lat": 48.844257,
        "lng": 2.349251,
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
        "id": 253,
        "name": {
            "en": "Home Of Armenian Student",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Paris",
        "city": "France",
        "address": "57 Boulevard Jourdan, 75014 Paris, France",
        "lat": 48.821564,
        "lng": 2.331102,
        "description": {
            "en": "the Home for Armenian Students (Maison des Étudiants Arméniens or MEA), notable for its typical Armenian architecture, was built in the 1920s by Boghos Nubar Pasha.",
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
        "id": 254,
        "name": {
            "en": "Library Nubar",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Paris",
        "city": "France",
        "address": "11 Square Alboni, 75016 Paris, France",
        "lat": 48.857936,
        "lng": 2.286624,
        "description": {
            "en": "The library contains one of the biggest existing collections in the diaspora, with more than 40,000 works lining its shelves.",
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
        "id": 255,
        "name": {
            "en": "Kenats",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Paris",
        "city": "France",
        "address": "69?bis?Rue?Brancion,?75015?Paris,?France",
        "lat": 48.83234,
        "lng": 2.30328,
        "description": {
            "en": "a wine cellar exclusively dedicated to Armenian wines, which is unique in Europe! The owner, Shant, will guide you in choosing your bottle.",
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
        "id": 256,
        "name": {
            "en": "Pere Lachaise",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Paris",
        "city": "France",
        "address": "16 Rue du Repos, 75020 Paris, France",
        "lat": 48.861433,
        "lng": 2.393325,
        "description": {
            "en": "Alongside Honoré de Balzac, Oscar Wilde, Edith Piaf, Jim Morrison, Molière and Marcel Proust are the gravesites of General Andranik, the philanthropist Boghos Nubar, the writer Avetis Aharonian, and the founder of the newspaper Haratch, Chavarche Missakian, among others. There is also a monument dedicated to French Armenian veterans.",
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
        "id": 257,
        "name": {
            "en": "Manouchian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Paris",
        "city": "France",
        "address": "60 Rue du Surmelin, 75020 Paris, France",
        "lat": 48.8711,
        "lng": 2.4053,
        "description": {
            "en": "Numerous streets and squares around France are named after him,",
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
        "id": 258,
        "name": {
            "en": "St. Peter And St. Paul",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Alfortville",
        "city": "France",
        "address": "4 rue Komitas, 94140 Alfortville, France",
        "lat": 48.78994,
        "lng": 2.42448,
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
        "id": 259,
        "name": {
            "en": "Komitas",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Alfortville",
        "city": "France",
        "address": "94140 Alfortville, France",
        "lat": 48.78993,
        "lng": 2.42447,
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
        "id": 260,
        "name": {
            "en": "St. Mesrop Arabian school",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Alfortville",
        "city": "France",
        "address": "1–4 rue Komitas, 94140 Alfortville, France",
        "lat": 48.79055,
        "lng": 2.42428,
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
        "id": 261,
        "name": {
            "en": "Maison de la culture Armenienne",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Alfortville",
        "city": "France",
        "address": "9 rue de Madrid, 94140 Alfortville, France",
        "lat": 48.7933,
        "lng": 2.4254,
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
        "id": 262,
        "name": {
            "en": "Mesrop Mashdots",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Alfortville",
        "city": "France",
        "address": "Place de l’Europe, 94140 Alfortville, France",
        "lat": 48.78921,
        "lng": 2.42864,
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
        "id": 263,
        "name": {
            "en": "Shjanto",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Alfortville",
        "city": "France",
        "address": "117 rue Jean Jaurès, 94700 Maisons-Alfort, France",
        "lat": 48.7957,
        "lng": 2.43409,
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
        "id": 264,
        "name": {
            "en": "Le Jardin D'erevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Alfortville",
        "city": "France",
        "address": "6 rue Paul Vaillant-Couturier, 94140 Alfortville, France",
        "lat": 48.78963,
        "lng": 2.42574,
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
        "id": 265,
        "name": {
            "en": "La Rogina",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Alfortville",
        "city": "France",
        "address": "12 rue Véron, 94140 Alfortville, France",
        "lat": null,
        "lng": null,
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
        "id": 266,
        "name": {
            "en": "Chez Garbis",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Alfortville",
        "city": "France",
        "address": "13 rue Jean Jaurès, 94140 Alfortville, France",
        "lat": 48.79012,
        "lng": 2.4259,
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
        "id": 267,
        "name": {
            "en": "Achtarak square",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Alfortville",
        "city": "France",
        "address": "94140 Alfortville, France",
        "lat": 48.79005,
        "lng": 2.4252,
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
        "id": 268,
        "name": {
            "en": "Marche Philippe",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Alfortville",
        "city": "France",
        "address": "94140 Alfortville, France",
        "lat": 48.7908,
        "lng": 2.4271,
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
        "id": 269,
        "name": {
            "en": "Hay Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Alfortville",
        "city": "France",
        "address": "16 rue Paul Vaillant-Couturier, 94140 Alfortville, France",
        "lat": 48.78988,
        "lng": 2.42602,
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
        "id": 270,
        "name": {
            "en": "Goris",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Alfortville",
        "city": "France",
        "address": "18 rue Paul Vaillant-Couturier, 94140 Alfortville, France",
        "lat": 48.78995,
        "lng": 2.42625,
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
        "id": 271,
        "name": {
            "en": "Yeraz",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Alfortville",
        "city": "France",
        "address": "20 rue Paul Vaillant-Couturier, 94140 Alfortville, France",
        "lat": 48.78998,
        "lng": 2.4264,
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
        "id": 272,
        "name": {
            "en": "Armenian Evangelical Church",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Alfortville",
        "city": "France",
        "address": "10 rue Henri Barbusse, 94140 Alfortville, France",
        "lat": 48.79025,
        "lng": 2.42485,
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
        "id": 273,
        "name": {
            "en": "St. Mary's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Issy-les-moulineaux",
        "city": "France",
        "address": "36 rue du Général Leclerc, 92130 Issy-les-Moulineaux, France",
        "lat": 48.82312,
        "lng": 2.26645,
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
        "id": 274,
        "name": {
            "en": "Armenian Evangelical Church",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Issy-les-moulineaux",
        "city": "France",
        "address": "28 avenue Bourgain, 92130 Issy-les-Moulineaux, France",
        "lat": 48.82144,
        "lng": 2.26417,
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
        "id": 275,
        "name": {
            "en": "Maison de la culture Armenienne",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Issy-les-moulineaux",
        "city": "France",
        "address": "31 avenue Bourgain, 92130 Issy-les-Moulineaux, France",
        "lat": 48.82154,
        "lng": 2.26593,
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
        "id": 276,
        "name": {
            "en": "Chez Bedros",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Issy-les-moulineaux",
        "city": "France",
        "address": "102 Boulevard Gallieni, 92130 Issy-les-Moulineaux, France",
        "lat": 48.82386,
        "lng": 2.26775,
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
        "id": 277,
        "name": {
            "en": "Hamazkaine Tarkmantchatz",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Issy-les-moulineaux",
        "city": "France",
        "address": "19-27 sentier des Épinettes, 92130 Issy-les-Moulineaux, France",
        "lat": 48.81876,
        "lng": 2.26234,
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
        "id": 278,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Issy-les-moulineaux",
        "city": "France",
        "address": "Rue de la Défense, 92130 Issy-les-Moulineaux, France",
        "lat": 48.81863,
        "lng": 2.26013,
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
        "id": 279,
        "name": {
            "en": "Armenian Sports Association",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Issy-les-moulineaux",
        "city": "France",
        "address": "65?bis boulevard Rodin, 92130?Issy-les-Moulineaux, France",
        "lat": 48.8191,
        "lng": 2.25933,
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
        "id": 280,
        "name": {
            "en": "Erebouni Erevan",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Issy-les-moulineaux",
        "city": "France",
        "address": "Centre Commercial Les Epinette, 54 Rue d'Erevan, 47 Rue de l'Égalité, 92130 Issy-les-Moulineaux",
        "lat": 48.81813150660537,
        "lng": 2.2605469058646754,
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
        "id": 281,
        "name": {
            "en": "Alain Mimoun",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Issy-les-moulineaux",
        "city": "France",
        "address": "52 rue Rabelais à Issy les Moulineaux",
        "lat": 48.81651322386463,
        "lng": 2.265072844500005,
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
        "id": 282,
        "name": {
            "en": "Eniz",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Clamart",
        "city": "France",
        "address": "10 Rue des Monts, 92140 Clamart, France",
        "lat": 48.81517,
        "lng": 2.25843,
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
        "id": 283,
        "name": {
            "en": "Markar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Clamart",
        "city": "France",
        "address": "162 avenue Henri?Barbusse, 92140?Clamart, France",
        "lat": 48.8157,
        "lng": 2.2564,
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
        "id": 284,
        "name": {
            "en": "La Cuisine Du Soleil",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Clamart",
        "city": "France",
        "address": "28 Avenue du Général Leclerc, 92140 Clamart, France",
        "lat": 48.81612,
        "lng": 2.25788,
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
        "id": 285,
        "name": {
            "en": "Kilikia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Clamart",
        "city": "France",
        "address": "108 Avenue du Général Leclerc, 92140 Clamart, France",
        "lat": 48.8171,
        "lng": 2.25895,
        "description": {
            "en": "Kilikia is tipped as being one of the best in the Paris area.",
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
        "id": 286,
        "name": {
            "en": "Victimes du Genocide Armenien",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Clamart",
        "city": "France",
        "address": "92140 Clamart, France",
        "lat": 48.8156,
        "lng": 2.25599,
        "description": {
            "en": "The khachkar in the Victimes du Génocide Arménien Square dates back to 1993.",
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
        "id": 287,
        "name": {
            "en": "Ser",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Clamart",
        "city": "France",
        "address": "16 Route du Pavé Blanc, 92140 Clamart, France",
        "lat": 48.78126,
        "lng": 2.23895,
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
        "id": 288,
        "name": {
            "en": "Chicken-up",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Clamart",
        "city": "France",
        "address": "492 Avenue du Général de Gaulle, 92140 Clamart, France",
        "lat": 48.77907,
        "lng": 2.23547,
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
        "id": 289,
        "name": {
            "en": "Apapat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Malakoff",
        "city": "France",
        "address": "8 avenue Jean Jaurès, 92240?Malakoff, France",
        "lat": 48.82147,
        "lng": 2.30268,
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
        "id": 290,
        "name": {
            "en": "Aigle D'Armenie",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Antony",
        "city": "France",
        "address": "Avenue Le?Brun (principal entrance), 92160 Antony / Sceaux, France",
        "lat": 48.77068,
        "lng": 2.31023,
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
        "id": 291,
        "name": {
            "en": "Parc Bourdeau",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Antony",
        "city": "France",
        "address": "14?Rue Velpeau, 92160?Antony, France",
        "lat": 48.7594,
        "lng": 2.30369,
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
        "id": 292,
        "name": {
            "en": "La Fine Bouche",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Antony",
        "city": "France",
        "address": "6 place de l’Hôtel de ville, 92160 Antony, France",
        "lat": 48.753228,
        "lng": 2.296448,
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
        "id": 293,
        "name": {
            "en": "Samuel Moorat",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Sevres",
        "city": "France",
        "address": "26?Rue Troyon,?92310?Sèvres, France",
        "lat": 48.82518,
        "lng": 2.22703,
        "description": {
            "en": "the Samuel Moorat Armenian College was founded by the Mekhitarist Fathers in the former residence of one of Napoleon’s generals. In 2001, a particularly symbolic khachkar was installed in front of the Manufacture.",
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
        "id": 294,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Chaville",
        "city": "France",
        "address": "6?rue du Père?Komitas, 92370?Chaville, Franc",
        "lat": 48.80978,
        "lng": 2.18538,
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
        "id": 295,
        "name": {
            "en": "Pere Komitas",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Chaville",
        "city": "France",
        "address": "92370 Chaville, France",
        "lat": 48.80965,
        "lng": 2.18545,
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
        "id": 296,
        "name": {
            "en": "genocide memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Chaville",
        "city": "France",
        "address": "6 rue du Père Komitas, 92370 Chaville, France",
        "lat": 48.812,
        "lng": 2.188,
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
        "id": 297,
        "name": {
            "en": "St. Denis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Saint Denis",
        "city": "France",
        "address": "1 rue de la Légion d’Honneur, 93200 Saint-Denis, France",
        "lat": 48.9355,
        "lng": 2.35982,
        "description": {
            "en": "Leo V of Lusignan, the last Armenian king, now rests there alongside Francis I, Henry IV and Louis XIV, among others.",
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
        "id": 298,
        "name": {
            "en": "Tebrotzassere",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Raincy",
        "city": "France",
        "address": "40 allée de l’Ermitage, 93340 Le Raincy, France",
        "lat": 48.8999,
        "lng": 2.5172,
        "description": {
            "en": "The Tebrotzassère School opened in Le Raincy in 1928 with the mission to educate 200 orphans. It is still active today as an Armenian school and has a khachkar that was inaugurated in 2015.",
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
        "id": 299,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Arnouville",
        "city": "France",
        "address": "69 avenue Henri Barbusse, 95400 Arnouville, France",
        "lat": 48.9867,
        "lng": 2.4169,
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
        "id": 300,
        "name": {
            "en": "Holy Cross Of Varak",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Arnouville",
        "city": "France",
        "address": "31 rue Saint-Just, 95400 Arnouville, France",
        "lat": 48.98888,
        "lng": 2.41667,
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
        "id": 301,
        "name": {
            "en": "Hrant Dink",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Arnouville",
        "city": "France",
        "address": "40 rue Saint-Just, 95400 Arnouville, France",
        "lat": 48.9897,
        "lng": 2.4175,
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
        "id": 302,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Arnouville",
        "city": "France",
        "address": "angle rue Saint-Just / rue Jean Jaurès, 95400 Arnouville, France",
        "lat": 48.99068,
        "lng": 2.41767,
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
        "id": 303,
        "name": {
            "en": "Eniz",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Arnouville",
        "city": "France",
        "address": "2 rue Jean Jaurès, 95400 Arnouville, France",
        "lat": 48.99105,
        "lng": 2.4179,
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
        "id": 304,
        "name": {
            "en": "Arev",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Arnouville",
        "city": "France",
        "address": "48 rue Jean Jaurès, 95400 Arnouville, France",
        "lat": 48.9913,
        "lng": 2.41765,
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
        "id": 305,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Versailles",
        "city": "France",
        "address": "Parc Balbi, 78000 Versailles, France",
        "lat": 48.8035,
        "lng": 2.1308,
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
        "id": 306,
        "name": {
            "en": "Tigranes THe Great And Tiridates",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Versailles",
        "city": "France",
        "address": "Place d’Armes, 78000 Versailles, France",
        "lat": 48.80487,
        "lng": 2.12036,
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
        "id": 307,
        "name": {
            "en": "St. James",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Marseilles",
        "city": "France",
        "address": "7 Boulevard Arthur Michaud, 13015 Marseille, France",
        "lat": 43.3337612,
        "lng": 5.3609083,
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
        "id": 308,
        "name": {
            "en": "St. Kevork",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Marseilles",
        "city": "France",
        "address": "42 Boulevard des Grands Pins, 13010 Marseille, France",
        "lat": 43.2849,
        "lng": 5.4222,
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
        "id": 309,
        "name": {
            "en": "St. Thaddeus",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Marseilles",
        "city": "France",
        "address": "339 Avenue du Prado, 13008 Marseille, France",
        "lat": 43.2599,
        "lng": 5.3826,
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
        "id": 310,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Marseilles",
        "city": "France",
        "address": "12 Rue Jean Vignaud, 13005 Marseille, France",
        "lat": 43.2966,
        "lng": 5.384,
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
        "id": 311,
        "name": {
            "en": "Holy Translators",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Marseilles",
        "city": "France",
        "address": "339 Avenue du Prado, 13008 Marseille, France",
        "lat": 43.2599,
        "lng": 5.3826,
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
        "id": 312,
        "name": {
            "en": "St. Gregoory",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Marseilles",
        "city": "France",
        "address": "24 Rue Jean Vignaud, 13005 Marseille, France",
        "lat": 43.297,
        "lng": 5.3842,
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
        "id": 313,
        "name": {
            "en": "Sts. Sahag And Mesrob",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Marseilles",
        "city": "France",
        "address": "12 Rue de Lyon, 13001 Marseille, France",
        "lat": 43.2963,
        "lng": 5.3721,
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
        "id": 314,
        "name": {
            "en": "Armenian Evangelical - St Antoine",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Marseilles",
        "city": "France",
        "address": "34 Chemin du Commandeur, 13015 Marseille, France",
        "lat": 43.37053,
        "lng": 5.36174,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 315,
        "name": {
            "en": "Armenian Evangelical Beaumont",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Marseilles",
        "city": "France",
        "address": "30 Avenue de la Figone, 13012 Marseille, France",
        "lat": 43.30709,
        "lng": 5.43758,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 316,
        "name": {
            "en": "Armenian Evangelical St; Loup",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Marseilles",
        "city": "France",
        "address": "29 Rue de l’Escalon, 13010 Marseille, France",
        "lat": 43.27475,
        "lng": 5.42686,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 317,
        "name": {
            "en": "Armenian Catholic St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Marseilles",
        "city": "France",
        "address": "26 Rue Sibié, 13001 Marseille, France",
        "lat": 43.2969,
        "lng": 5.3763,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 318,
        "name": {
            "en": "Chez Gaya Couleur Grenade",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "36 Grand Rue, 13002 Marseille, France",
        "lat": 43.29685,
        "lng": 5.37695,
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
        "id": 319,
        "name": {
            "en": "Le Jardin Des Vestiges",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "1?Rue du Beausset, 13001 Marseille, France",
        "lat": 43.2967,
        "lng": 5.3753,
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
        "id": 320,
        "name": {
            "en": "Chez Tamar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "56?Rue de l’Évêché, 13002 Marseille, France",
        "lat": 43.2973,
        "lng": 5.3726,
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
        "id": 321,
        "name": {
            "en": "Gyumri",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "45?Rue de Suez, 13007 Marseille, France",
        "lat": 43.291145,
        "lng": 5.356492,
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
        "id": 322,
        "name": {
            "en": "Missak Manouchian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Marseilles",
        "city": "France",
        "address": "34 Boulevard Charles Livon, 13007 Marseille, France",
        "lat": 43.2925066,
        "lng": 5.3613009,
        "description": {
            "en": "a statue of the resistance fighter Missak Manouchian was erected in 2010 in the garden that bears his name.",
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
        "id": 323,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Marseilles",
        "city": "France",
        "address": "27 Place Jules?Guesde, 13481 Marseille, France",
        "lat": 43.3011746,
        "lng": 5.3738451,
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
        "id": 324,
        "name": {
            "en": "Maison Arménienne De La Jeunnesse Et La Culture",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Marseilles",
        "city": "France",
        "address": "12?Rue Saint-Bazile, 13001 Marseille, France",
        "lat": 43.30005,
        "lng": 5.38391,
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
        "id": 325,
        "name": {
            "en": "Anahit",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Marseilles",
        "city": "France",
        "address": "9 Boulevard de la Liberté, 13001 Marseille, France",
        "lat": 43.30098,
        "lng": 5.38147,
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
        "id": 326,
        "name": {
            "en": "Le Penicia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "187?Boulevard?de?la?Libération,?13001?Marseille,?France",
        "lat": 43.3017,
        "lng": 5.3932,
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
        "id": 327,
        "name": {
            "en": "Jeunnesse Armenienne De France",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Marseilles",
        "city": "France",
        "address": "65 Allée Léon Gambetta, 13001 Marseille, France",
        "lat": 43.2855387,
        "lng": 5.3882695,
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
        "id": 328,
        "name": {
            "en": "Le Caucase",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "59 Avenue de Toulon, 13006 Marseille, France",
        "lat": 43.2853,
        "lng": 5.3889,
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
        "id": 329,
        "name": {
            "en": "Delices D'Armenie",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "38 Rue Négresko, 13008 Marseille, France",
        "lat": 43.26948,
        "lng": 5.38937,
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
        "id": 330,
        "name": {
            "en": "La Rocha",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "45 Promenade Georges?Pompidou, 13008 Marseille, France",
        "lat": 43.26535,
        "lng": 5.3735,
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
        "id": 331,
        "name": {
            "en": "Tresors D'Armenie",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "475?Avenue?de?Mazargues, 13008?Marseille, France",
        "lat": 43.2569,
        "lng": 5.3942,
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
        "id": 332,
        "name": {
            "en": "Noyan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "23 Chemin du Lancier, 13009 Marseille, France",
        "lat": 43.2474,
        "lng": 5.3975,
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
        "id": 333,
        "name": {
            "en": "Nor Hayastan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "475 Avenue de Mazargues, 13008 Marseille, France",
        "lat": 43.25686,
        "lng": 5.39424,
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
        "id": 334,
        "name": {
            "en": "Les Saveurs D'Orient Chahen",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Marseilles",
        "city": "France",
        "address": "193 Avenue de la Capelette, 13010 Marseille, France",
        "lat": 43.28049,
        "lng": 5.40845,
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
        "id": 335,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Marseilles",
        "city": "France",
        "address": "Avenue du Prado, 13008 Marseille, France",
        "lat": 43.2706,
        "lng": 5.3889,
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
        "id": 336,
        "name": {
            "en": "24-avr.-15",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Marseilles",
        "city": "France",
        "address": "13012 Marseille, France",
        "lat": 43.3069,
        "lng": 5.4251,
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
        "id": 337,
        "name": {
            "en": "Armenian Evangelical Center ANI",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Marseilles",
        "city": "France",
        "address": "Avenue du 24 Avril 1915 (Beaumont area), 13012 Marseille, France",
        "lat": 43.307,
        "lng": 5.4251,
        "description": {
            "en": "The Armenian Evangelical center Ani is one of the largest in France.",
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
        "id": 338,
        "name": {
            "en": "Hamaskaine",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Marseilles",
        "city": "France",
        "address": "60 Boulevard Pinatel, 13012 Marseille, France",
        "lat": 43.3149,
        "lng": 5.44136,
        "description": {
            "en": "opened in 1980 and is now the largest Armenian school in Europe.",
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
        "id": 339,
        "name": {
            "en": "Notre Dame Du Sacre Coeur",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Marseilles",
        "city": "France",
        "address": "167 Avenue des Caillols, 13012 Marseille, France",
        "lat": 43.30368,
        "lng": 5.43899,
        "description": {
            "en": "Notre-Dame du Sacré-Coeur School was founded by the Armenian Catholic Sisters in 1959.",
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
        "id": 340,
        "name": {
            "en": "Imperial Gourmet",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Marseilles",
        "city": "France",
        "address": "3 Avenue de la Rosière, 13012 Marseille, France",
        "lat": 43.3075,
        "lng": 5.44,
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
        "id": 341,
        "name": {
            "en": "Mayrig",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Marseilles",
        "city": "France",
        "address": "9 Avenue de la Rosière, 13012 Marseille, France",
        "lat": 43.30768,
        "lng": 5.43543,
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
        "id": 342,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Marseilles",
        "city": "France",
        "address": "25 Allée de la Grande Bastide Cazaulx, 13012 Marseille, France",
        "lat": 43.2990492,
        "lng": 5.4369206,
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
        "id": 343,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Marseilles",
        "city": "France",
        "address": "16 Place Marceau, 13003 Marseille, France",
        "lat": 43.30527,
        "lng": 5.373371,
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
        "id": 344,
        "name": {
            "en": "Sassoun",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Marseilles",
        "city": "France",
        "address": "168 Avenue du 24 Avril 1915, 13012 Marseille, France",
        "lat": 43.30818,
        "lng": 5.43574,
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
        "id": 345,
        "name": {
            "en": "Sevan",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Marseilles",
        "city": "France",
        "address": "54 Boulevard de Compostelle, 13012 Marseille, France",
        "lat": 43.31667,
        "lng": 5.43409,
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
        "id": 346,
        "name": {
            "en": "Association Pour La Recherche Et L'Archivage De La Memoire Armenienne",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Marseilles",
        "city": "France",
        "address": "8 bis Place Pélabon, 13013 Marseille, France",
        "lat": 43.337,
        "lng": 5.406,
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
        "id": 347,
        "name": {
            "en": "Edykos",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Ex-En-Provence",
        "city": "France",
        "address": "7 Rue Fermée, 13100 Aix-en-Provence, France",
        "lat": 43.5283154,
        "lng": 5.445061,
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
        "id": 348,
        "name": {
            "en": "Nourian",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Ex-En-Provence",
        "city": "France",
        "address": "5 Rue des Cordeliers, 13100 Aix-en-Provence, France",
        "lat": 43.5289,
        "lng": 5.4475,
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
        "id": 349,
        "name": {
            "en": "Noy",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Ex-En-Provence",
        "city": "France",
        "address": "Boulevard Victor Coq, 13090 Aix-en-Provence, France",
        "lat": 43.524233,
        "lng": 5.440397,
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
        "id": 350,
        "name": {
            "en": "Armenie",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Ex-En-Provence",
        "city": "France",
        "address": "19 Avenue des Belges, 13100 Aix-en-Provence, France",
        "lat": 43.52675,
        "lng": 5.44632,
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
        "id": 351,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Ex-En-Provence",
        "city": "France",
        "address": "Place du Général de Gaulle, 13100 Aix-en-Provence, France",
        "lat": 43.5263,
        "lng": 5.445,
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
        "id": 352,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Ex-En-Provence",
        "city": "France",
        "address": "300 Avenue Giuseppe Verdi, 13100 Aix-en-Provence, France",
        "lat": 43.5262,
        "lng": 5.444703,
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
        "id": 353,
        "name": {
            "en": "Guenat's",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Martigues",
        "city": "France",
        "address": "8 Cours du 4 Septembre, 13500 Martigues, France",
        "lat": 43.402426,
        "lng": 5.05588,
        "description": {
            "en": "confirmed by TripAdvisor: it’s currently ranked number one out of 130.",
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
        "id": 354,
        "name": {
            "en": "Karine",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Martigues",
        "city": "France",
        "address": "4 Rue des Cordonniers, 13500 Martigues, France",
        "lat": 43.4055464,
        "lng": 5.0546578,
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
        "id": 355,
        "name": {
            "en": "Palace Of The Popes",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Avignon",
        "city": "France",
        "address": "Place du Palais, 84000 Avignon, France",
        "lat": 43.9503,
        "lng": 4.8055,
        "description": {
            "en": "As you walk behind the palace on the Rocher des Doms, which has views out over the city, look out for the statue of Jean Althen. Under his birth name Hovhannes Althounian, this Armenian agronomist arrived in France in the eighteenth century, bringing with him madder, a plant often used to dye clothing. This was an important find, as it was used to color the French army’s uniforms up until the First World War.",
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
        "id": 356,
        "name": {
            "en": "Jean Anthounian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Althen-des-Paluds",
        "city": "France",
        "address": "Place de la Mairie, 84210 Althen-des-Paluds, France",
        "lat": 43.9487,
        "lng": 5.0852,
        "description": {
            "en": "The village of Althen-des-Paluds, next to Avignon, was named after the agronomist and is the center of madder cultivation. His statue is located outside the city hall.",
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
        "id": 357,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Avignon",
        "city": "France",
        "address": "Square Agricol Perdiguier, 84000 Avignon, France",
        "lat": 43.9498,
        "lng": 4.8059,
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
        "id": 358,
        "name": {
            "en": "Taverne Avedis",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Avignon",
        "city": "France",
        "address": "17 Place des Carmes, 84000 Avignon, France",
        "lat": 43.950615,
        "lng": 4.812755,
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
        "id": 359,
        "name": {
            "en": "Barbarac",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Saint Tropez",
        "city": "France",
        "address": "2 Rue Général Allard, 83990 Saint-Tropez, France",
        "lat": 43.2713615,
        "lng": 6.638572,
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
        "id": 360,
        "name": {
            "en": "K.Jacques",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Saint Tropez",
        "city": "France",
        "address": "39?bis Rue Général Allard, 83990 Saint-Tropez, France",
        "lat": 43.27083,
        "lng": 6.63767,
        "description": {
            "en": "K.Jacques! Created by the Armenian refugee Jacques Kéklikian in 1933, these sandals have been worn by fashion icons such as Princess Grace of Monaco, Brigitte Bardot, and Kate Moss, among others.",
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
        "id": 361,
        "name": {
            "en": "Mémorial aux Combattants Arméniens",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Saint Tropez",
        "city": "France",
        "address": "Saint-Tropez, 83990 Saint-Tropez, France",
        "lat": 43.272,
        "lng": 6.6407,
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
        "id": 362,
        "name": {
            "en": "Saint John",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Saint Raphael",
        "city": "France",
        "address": "107 Avenue du Maréchal Lyautey, 83700 Saint-Raphaël, France",
        "lat": 43.42148,
        "lng": 6.77361,
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
        "id": 363,
        "name": {
            "en": "La Canne A Sucre",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Saint Raphael",
        "city": "France",
        "address": "2 Place Amiral Ortoli Port, 83700 Saint-Raphaël, France",
        "lat": 43.414436,
        "lng": 6.778772,
        "description": {
            "en": "one of the best restaurants in town, La Canne à Sucre, Sophie Marandjian serves Provencial specialties with sometimes an Armenian twist.",
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
        "id": 364,
        "name": {
            "en": "St. Mary",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Nice",
        "city": "France",
        "address": "281 boulevard de la Madeleine, 06000 Nice, France",
        "lat": 43.7147,
        "lng": 7.2244,
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
        "id": 365,
        "name": {
            "en": "Armenia Garden",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Nice",
        "city": "France",
        "address": "1 avenue de Suède, 06000 Nice, France",
        "lat": 43.69605,
        "lng": 7.26647,
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
        "id": 366,
        "name": {
            "en": "Armavir",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Nice",
        "city": "France",
        "address": "1 avenue de Suède, 06000 Nice, France",
        "lat": 43.69605,
        "lng": 7.26647,
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
        "id": 367,
        "name": {
            "en": "Les Pins D'Alep",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Nice",
        "city": "France",
        "address": "40 boulevard Stalingrad, 06300 Nice, France",
        "lat": 43.6966,
        "lng": 7.2864,
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
        "id": 368,
        "name": {
            "en": "Jach",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Nice",
        "city": "France",
        "address": "9 Rue Massena, 06000 Nice, France",
        "lat": 43.69768,
        "lng": 7.26821,
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
        "id": 369,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Nice",
        "city": "France",
        "address": "7 boulevard François Grosso, 06000 Nice, France",
        "lat": 43.69532,
        "lng": 7.25172,
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
        "id": 370,
        "name": {
            "en": "Jardin D'Arménie",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Cannes",
        "city": "France",
        "address": "Jardin d’Arménie, Square Verdun (Pointe de la Croisette), 06400 Cannes, France",
        "lat": 43.5475,
        "lng": 7.0286,
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
        "id": 371,
        "name": {
            "en": "La Cigale",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Cannes",
        "city": "France",
        "address": "6 Rue Lecerf, 06400 Cannes, France",
        "lat": 43.55281,
        "lng": 7.02567,
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
        "id": 372,
        "name": {
            "en": "Aux Delices Armenien",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Cannes",
        "city": "France",
        "address": "6 Place Gambetta, 06400 Cannes, France",
        "lat": 43.55335,
        "lng": 7.02334,
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
        "id": 373,
        "name": {
            "en": "Varouj",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Grasse",
        "city": "France",
        "address": "115 Route de Cannes, 06130 Grasse, France",
        "lat": 43.63837,
        "lng": 6.95109,
        "description": {
            "en": "it’s ranked 11th out of 143 establishments in the town on TripAdvisor.",
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
        "id": 374,
        "name": {
            "en": "Chez'elle",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vence",
        "city": "France",
        "address": "2-4 Rue du Peyra, 06140 Vence, France",
        "lat": 43.72301,
        "lng": 7.11298,
        "description": {
            "en": "At the village’s highest point, a few meters from the cathedral, the charming little restaurant CheZ’elles introduces Armenian cuisine to visitors from all over the world.",
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
        "id": 375,
        "name": {
            "en": "Fondation Carzou",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Manosque",
        "city": "France",
        "address": "Chapelle Saint-Joseph, 04100 Manosque, France",
        "lat": 43.8369,
        "lng": 5.7867,
        "description": {
            "en": "Fondation Carzou, which displays works by the French Armenian painter Karnik Zouloumian (also known as Jean Carzou).",
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
        "id": 376,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Lyon",
        "city": "France",
        "address": "Rue de l’Arménie, 69003 Lyon, France",
        "lat": 45.756,
        "lng": 4.863,
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
        "id": 377,
        "name": {
            "en": "St. James",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Lyon",
        "city": "France",
        "address": "295 Rue André Philip, 69003 Lyon, France",
        "lat": 45.7544,
        "lng": 4.8521,
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
        "id": 378,
        "name": {
            "en": "Markarian Papazian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Lyon",
        "city": "France",
        "address": "38 Rue du Dauphiné, 69003 Lyon, France",
        "lat": 45.75495,
        "lng": 4.87125,
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
        "id": 379,
        "name": {
            "en": "Garbis Manoukian",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Lyon",
        "city": "France",
        "address": "29 Rue Godefroy, 69006 Lyon, France",
        "lat": 45.7686,
        "lng": 4.8499,
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
        "id": 380,
        "name": {
            "en": "Bahadourian",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Lyon",
        "city": "France",
        "address": "20 Rue Villeroy, 69003 Lyon, France",
        "lat": 45.7565,
        "lng": 4.8445,
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
        "id": 381,
        "name": {
            "en": "Djebrail Bahadourian",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Lyon",
        "city": "France",
        "address": "69003 Lyon, France",
        "lat": 45.757,
        "lng": 4.8438,
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
        "id": 382,
        "name": {
            "en": "Inchka By Bahadourian",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Lyon",
        "city": "France",
        "address": "Halles de Lyon Paul Bocuse / 102 cours Lafayette, 69003 Lyon, France",
        "lat": 45.76237,
        "lng": 4.8506,
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
        "id": 384,
        "name": {
            "en": "Petrossian",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Lyon",
        "city": "France",
        "address": "102 cours Lafayette, 69003 Lyon, Franc",
        "lat": 45.76345,
        "lng": 4.8503,
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
        "id": 385,
        "name": {
            "en": "Armelys",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Lyon",
        "city": "France",
        "address": "102 cours Lafayette, 69003 Lyon, France",
        "lat": 45.75795,
        "lng": 4.84654,
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
        "id": 1344,
        "name": {
            "en": "Oncle Dik",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lyon",
        "city": "France",
        "address": "4 rue Bossuet, 69006 Lyon, France",
        "lat": 45.7682,
        "lng": 4.8429,
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
        "id": 386,
        "name": {
            "en": "Phenica",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lyon",
        "city": "France",
        "address": "33 Impasse Molière, 69006 Lyon, France",
        "lat": 45.76567,
        "lng": 4.84274,
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
        "id": 387,
        "name": {
            "en": "Andre Melkonian",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lyon",
        "city": "France",
        "address": "62 cours Vitton, 69006 Lyon, France",
        "lat": 45.7697,
        "lng": 4.8555,
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
        "id": 388,
        "name": {
            "en": "Le Martini",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lyon",
        "city": "France",
        "address": "12 avenue Maréchal Foch, 69006 Lyon, France",
        "lat": 45.77311,
        "lng": 4.84267,
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
        "id": 389,
        "name": {
            "en": "Take A Break",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lyon",
        "city": "France",
        "address": "23 Rue de la République, 69002 Lyon, France",
        "lat": 45.76035,
        "lng": 4.83688,
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
        "id": 390,
        "name": {
            "en": "A Poin Cafe",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lyon",
        "city": "France",
        "address": "20 Quai Claude Bernard, 69007 Lyon, France",
        "lat": 45.75001,
        "lng": 4.83568,
        "description": {
            "en": "a hospital cafeteria conceptualized by the Michelin-starred chef Alain Alexanian,",
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
        "id": 391,
        "name": {
            "en": "Mémorial Lyonnais Du Génocide Armenien",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Lyon",
        "city": "France",
        "address": "Parc de la Tête d’Or, 69006 Lyon, France",
        "lat": 45.777,
        "lng": 4.8527,
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
        "id": 392,
        "name": {
            "en": "Armenian Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Lyon",
        "city": "France",
        "address": "4 Rue du Docteur Paul Diday, 69003 Lyon, France",
        "lat": 45.7559,
        "lng": 4.8642,
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
        "id": 393,
        "name": {
            "en": "Sassoun",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Villeurbanne",
        "city": "France",
        "address": "88 cours Émile Zola, 69100 Villeurbanne, France",
        "lat": 45.76237,
        "lng": 4.8506,
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
        "id": 394,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Villeurbanne",
        "city": "France",
        "address": "Place Antonin-Poncet, 69002 Lyon, France",
        "lat": 45.7564,
        "lng": 4.8339,
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
        "id": 395,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Villeurbanne",
        "city": "France",
        "address": "",
        "lat": 45.7674,
        "lng": 4.8739,
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
        "id": 396,
        "name": {
            "en": "Our Lady Of Nareg",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Villeurbanne",
        "city": "France",
        "address": "7 rue du Docteur Paul Diday (et alentours Rue Dr Dolard / Marc Sangnier), 69100 Villeurbanne, France",
        "lat": 45.7627,
        "lng": 4.8726,
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
        "id": 397,
        "name": {
            "en": "Sepasdia",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Villeurbanne",
        "city": "France",
        "address": "33 avenue Antoine de Saint-Exupéry, 69100 Villeurbanne, France",
        "lat": 45.7589,
        "lng": 4.8791,
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
        "id": 398,
        "name": {
            "en": "Maison de la culture Arménienne",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Villeurbanne",
        "city": "France",
        "address": "68 avenue Marcel Cerdan, 69100 Villeurbanne, France",
        "lat": 45.7661,
        "lng": 4.91,
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
        "id": 399,
        "name": {
            "en": "St. Mary",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Decines",
        "city": "France",
        "address": "6 rue du 24 avril 1915, 69150 Décines-Charpieu, France",
        "lat": 45.76795,
        "lng": 4.94415,
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
        "id": 400,
        "name": {
            "en": "24-avr.-15",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Decines",
        "city": "France",
        "address": "",
        "lat": 45.76824,
        "lng": 4.94489,
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
        "id": 401,
        "name": {
            "en": "Maison De La Culture Armenienne",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Decines",
        "city": "France",
        "address": "15 rue du 24 avril 1915, 69150 Décines-Charpieu, France",
        "lat": 45.7683,
        "lng": 4.9452,
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
        "id": 402,
        "name": {
            "en": "Armenian Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Decines",
        "city": "France",
        "address": "7 rue Wilson, 69150 Décines-Charpieu, France",
        "lat": 45.7693,
        "lng": 4.95,
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
        "id": 403,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Decines",
        "city": "France",
        "address": "rue du 24 avril 1915, 69150 Décines-Charpieu, France",
        "lat": 45.76858,
        "lng": 4.9473,
        "description": {
            "en": "The first Armenian Genocide memorial in France was also inaugurated in Décines in 1972.",
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
        "id": 404,
        "name": {
            "en": "Centre National De La Mémoire Arménienne",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Decines",
        "city": "France",
        "address": "32 rue du 24 avril 1915, 69150 Décines-Charpieu, France",
        "lat": 45.7681,
        "lng": 4.9469,
        "description": {
            "en": "the Centre National de la Mémoire Arménienne (CNMA) is home to permanent and temporary exhibits relating to Armenia. Its library is particularly welcoming and offers numerous open-access works connected with Armenia. The restaurant Ara, which opens for lunch inside the CNMA, is one of the best places in the region to eat Armenian food.",
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
        "id": 405,
        "name": {
            "en": "Tonton",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Decines",
        "city": "France",
        "address": "Place de la Libération, 69150 Décines-Charpieu, France",
        "lat": 45.76913,
        "lng": 4.94683,
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
        "id": 406,
        "name": {
            "en": "Alinka",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Decines",
        "city": "France",
        "address": "87 Avenue Jean Jaurès, 69150 Décines-Charpieu, France",
        "lat": 45.7692,
        "lng": 4.94518,
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
        "id": 407,
        "name": {
            "en": "Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Meyzieu",
        "city": "France",
        "address": "rue du 24 avril 1915 (rond-point), 69330 Meyzieu, France",
        "lat": 45.7658,
        "lng": 4.9995,
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
        "id": 408,
        "name": {
            "en": "24-avr.-15",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Meyzieu",
        "city": "France",
        "address": "",
        "lat": 45.7681,
        "lng": 4.9469,
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
        "id": 409,
        "name": {
            "en": "Chez Caro",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Meyzieu",
        "city": "France",
        "address": "25 Rue Louis Saulnier, 69330 Meyzieu, France",
        "lat": 45.76535,
        "lng": 5.00328,
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
        "id": 410,
        "name": {
            "en": "St. Nichan",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Charvieu-Chavagneaux",
        "city": "France",
        "address": "",
        "lat": 45.74302,
        "lng": 5.16055,
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
        "id": 411,
        "name": {
            "en": "Saint Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Saint-Etienne",
        "city": "France",
        "address": "25 Rue Étienne Mimard, 42000 Saint-Étienne, France",
        "lat": 45.4353,
        "lng": 4.3908,
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
        "id": 412,
        "name": {
            "en": "armenian Comunity Center",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Saint-Etienne",
        "city": "France",
        "address": "7 rue Bernard Palissy, 42100 Saint-Étienne, France",
        "lat": 45.4386,
        "lng": 4.3919,
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
        "id": 413,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Saint-Etienne",
        "city": "France",
        "address": "Rue Badouillère, 42000 Saint-Étienne, France",
        "lat": 45.43213,
        "lng": 4.39075,
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
        "id": 414,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Saint-Etienne",
        "city": "France",
        "address": "Square d’Arménie, Rue Badouillère, 42000 Saint-Étienne, France",
        "lat": 45.43213,
        "lng": 4.39075,
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
        "id": 415,
        "name": {
            "en": "Catholic Diocesse Gardens",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Saint-Etienne",
        "city": "France",
        "address": "1 Rue Élisée Reclus, 42000 Saint-Étienne, France",
        "lat": 45.4369,
        "lng": 4.3896,
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
        "id": 416,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Saint-Etienne",
        "city": "France",
        "address": "26 Rue Louis Braille, 42000 Saint-Étienne, France",
        "lat": 45.44034,
        "lng": 4.38895,
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
        "id": 417,
        "name": {
            "en": "St. Gregory Of Nareg",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Saint-Chamond",
        "city": "France",
        "address": "13 Rue Asile Alamagny, 42400 Saint-Chamond, France",
        "lat": 45.47373,
        "lng": 4.50942,
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
        "id": 418,
        "name": {
            "en": "armenian Comunity Center",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Saint-Chamond",
        "city": "France",
        "address": "13 Rue de la Véronnière, 42400 Saint-Chamond, France",
        "lat": 45.46929,
        "lng": 4.52539,
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
        "id": 419,
        "name": {
            "en": "24-avr.",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Saint-Chamond",
        "city": "France",
        "address": "Rue de la Brosse, 42400 Saint-Chamond, France",
        "lat": 45.47699,
        "lng": 4.51451,
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
        "id": 420,
        "name": {
            "en": "Chez Tonton",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "saint-Chamond",
        "city": "France",
        "address": "9 Avenue de la Libération, 42400 Saint-Chamond, France",
        "lat": 45.47401,
        "lng": 4.51405,
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
        "id": 421,
        "name": {
            "en": "Maison De La Culture Armenienne",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Vienne",
        "city": "France",
        "address": "9 Rue de Goris, 38200 Vienne, France",
        "lat": 45.52434,
        "lng": 4.87824,
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
        "id": 422,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Vienne",
        "city": "France",
        "address": "Montée Saint-Marcel / Chapelle Notre-Dame de Pipet, 38200 Vienne, France",
        "lat": 45.5266,
        "lng": 4.8763,
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
        "id": 423,
        "name": {
            "en": "24-avr.",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Vienne",
        "city": "France",
        "address": "",
        "lat": 45.5253,
        "lng": 4.8796,
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
        "id": 424,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Vienne",
        "city": "France",
        "address": "rue du 24 avril 1915 (quartier Estressin), 38200 Vienne, France",
        "lat": 45.534,
        "lng": 4.873,
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
        "id": 425,
        "name": {
            "en": "Les Frangins",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vienne",
        "city": "France",
        "address": "13 Rue des Clercs, 38200 Vienne, France",
        "lat": 45.526625,
        "lng": 4.874348,
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
        "id": 426,
        "name": {
            "en": "Le Caucase De Zaza",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Vienne",
        "city": "France",
        "address": "36 Cr de Verdun, 38200 Vienne, France",
        "lat": 45.5175385,
        "lng": 4.869316,
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
        "id": 427,
        "name": {
            "en": "St. Gabriel",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Grenoble",
        "city": "France",
        "address": "1 Rue Dupleix, 38100 Grenoble, France",
        "lat": 45.1806,
        "lng": 5.7367,
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
        "id": 428,
        "name": {
            "en": "Paul Mistral Park",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Grenoble",
        "city": "France",
        "address": "Bd Jean Pain, 38000 Grenoble, Franc",
        "lat": 45.1853745,
        "lng": 5.736627,
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
        "id": 429,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Saint-Martin-D'Heres",
        "city": "France",
        "address": "Parc Jo Blanchon, 38400 Saint-Martin-d’Hères, France",
        "lat": 45.167,
        "lng": 5.7596,
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
        "id": 430,
        "name": {
            "en": "Erebouni",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Grenoble",
        "city": "France",
        "address": "1 Rue Très Cloîtres, 38000 Grenoble, France",
        "lat": 45.1930502,
        "lng": 5.7325259,
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
        "id": 431,
        "name": {
            "en": "Maison de la Culture Arménienne et du Dauphiné",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Grenoble",
        "city": "France",
        "address": "15 Cours de la Libération et du Général de Gaulle, 38100 Grenoble, France",
        "lat": 45.1787013,
        "lng": 5.7162739,
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
        "id": 432,
        "name": {
            "en": "Arax",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Grenoble",
        "city": "France",
        "address": "3 Rue de Turenne, 38000 Grenoble, Franc",
        "lat": 45.1847819,
        "lng": 5.7218004,
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
        "id": 433,
        "name": {
            "en": "St Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Valence",
        "city": "France",
        "address": "near Rue de l’Abbaye Saint-Ruf, 26000 Valence, France",
        "lat": 44.93453,
        "lng": 4.88922,
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
        "id": 434,
        "name": {
            "en": "Maison De La Culture Armenienne",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Valence",
        "city": "France",
        "address": "32 Rue Pompéry, 26500 Bourg-lès-Valence, France",
        "lat": 44.9353,
        "lng": 4.8973,
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
        "id": 435,
        "name": {
            "en": "St. Sahag",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Valence",
        "city": "France",
        "address": "12 Rue de la Cécile, 26000 Valence, France",
        "lat": 44.92237,
        "lng": 4.88856,
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
        "id": 436,
        "name": {
            "en": "Kevork Arabian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Valence",
        "city": "France",
        "address": "8 Chemin de Saint-Joseph, 26000 Valence, France",
        "lat": 44.9169,
        "lng": 4.8931,
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
        "id": 437,
        "name": {
            "en": "Armenian Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Valence",
        "city": "France",
        "address": "20 Rue Roger Salengro, 26500 Bourg-lès-Valence, France",
        "lat": 44.9399379,
        "lng": 4.8986005,
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
        "id": 438,
        "name": {
            "en": "Maranatha Evagelical",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Valence",
        "city": "France",
        "address": "6 Rue du Petit Paradis, 26000 Valence, France",
        "lat": 44.9327213,
        "lng": 4.888734,
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
        "id": 439,
        "name": {
            "en": "Centre Du Patrimoine Arménienne",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Valence",
        "city": "France",
        "address": "14 Rue Louis Gallet, 26000 Valence, France",
        "lat": 44.9315125,
        "lng": 4.8936753,
        "description": {
            "en": "Its permanent exhibit, tracing the history of both the Armenian genocide and the French Armenian community, is unique in Europe.",
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
        "id": 440,
        "name": {
            "en": "Square Jean-Manoug Stépanian",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Valence",
        "city": "France",
        "address": "",
        "lat": 44.933935,
        "lng": 4.893936,
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
        "id": 441,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Valence",
        "city": "France",
        "address": "Place Jean-Manoug Stépanian / near Parc Jouvet area, 26000 Valence, France",
        "lat": 44.93397,
        "lng": 4.8939,
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
        "id": 442,
        "name": {
            "en": "Sevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Valence",
        "city": "France",
        "address": "8 Rue d’Arménie, 26000 Valence, France",
        "lat": 44.9335542,
        "lng": 4.8944119,
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
        "id": 443,
        "name": {
            "en": "Arménie",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Valence",
        "city": "France",
        "address": "",
        "lat": 44.9336,
        "lng": 4.8943,
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
        "id": 444,
        "name": {
            "en": "Georges",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Valence",
        "city": "France",
        "address": "12 Grande Rue, 26000 Valence, France",
        "lat": 44.9335292,
        "lng": 4.8907761,
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
        "id": 445,
        "name": {
            "en": "Erevan Shop",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Valence",
        "city": "France",
        "address": "76 Rue Madier de Montjau, 26000 Valence, France",
        "lat": 44.9323059,
        "lng": 4.8947165,
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
        "id": 446,
        "name": {
            "en": "Kilikia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Valence",
        "city": "France",
        "address": "Boulevard Général de Gaulle, 26500 Bourg-lès-Valence, Franc",
        "lat": 44.9405901,
        "lng": 4.8939311,
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
        "id": 447,
        "name": {
            "en": "Le Tablier D'Irene",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Soyons",
        "city": "France",
        "address": "55–75 Chemin de l’Île, 07130 Soyons, France",
        "lat": 44.9151592,
        "lng": 4.8611838,
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
        "id": 448,
        "name": {
            "en": "Ithchevan",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Valence",
        "city": "France",
        "address": "10 Av. de Provence, 26000 Valence, France",
        "lat": 44.9277457,
        "lng": 4.8824187,
        "description": {
            "en": "A khachkar has been erected in Itchevan Park, on the banks of the Rhône River.",
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
        "id": 449,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Toulouse",
        "city": "France",
        "address": "Place d’Arménie, 31000 Toulouse, France",
        "lat": 43.6068732,
        "lng": 1.4496196,
        "description": {
            "en": "khachkar was installed on the small Armenia Square,",
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
        "id": 450,
        "name": {
            "en": "Troika",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Toulouse",
        "city": "France",
        "address": "23 Rue des Filatiers, 31000 Toulouse, France",
        "lat": 43.5987308,
        "lng": 1.444063,
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
        "id": 451,
        "name": {
            "en": "Krystal",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Toulouse",
        "city": "France",
        "address": "63 Boulevard de Strasbourg, 31000 Toulouse, France",
        "lat": 43.60985,
        "lng": 1.44402,
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
        "id": 452,
        "name": {
            "en": "Cilicie",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bordeaux",
        "city": "France",
        "address": "4 Rue des Bahutiers, 33000 Bordeaux, France",
        "lat": 44.8369,
        "lng": -0.5733,
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
        "id": 453,
        "name": {
            "en": "Nostalgie",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Bordeaux",
        "city": "France",
        "address": "51 Route de Toulouse, 33800 Bordeaux, France",
        "lat": 44.81279,
        "lng": -0.57376,
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
        "id": 454,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Strasbourg",
        "city": "France",
        "address": "Council of Europe, Avenue de l’Europe, 67000 Strasbourg, France",
        "lat": 48.5989,
        "lng": 7.7686,
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
        "id": 455,
        "name": {
            "en": "Arménie 2000",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Strasbourg",
        "city": "France",
        "address": "15 Rue Jacques Peirotes, 67000 Strasbourg, France",
        "lat": 48.5764,
        "lng": 7.75478,
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
        "id": 456,
        "name": {
            "en": "ARM market",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Schiltigheim",
        "city": "France",
        "address": "152 Route de Bischwiller, 67300 Schiltigheim, France",
        "lat": 48.60918,
        "lng": 7.74988,
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
        "id": 457,
        "name": {
            "en": "Alvarde And Voskevaz",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bischheim",
        "city": "France",
        "address": "2 Rue de l’Uranium, 67800 Bischheim, France",
        "lat": 48.62766,
        "lng": 7.76731,
        "description": {
            "en": "Al-Varde & Voskevaz is a banquet style Armenian restaurant.",
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
        "id": 458,
        "name": {
            "en": "Gulbenkian",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Deauville",
        "city": "France",
        "address": "Chemin des Enclos, 14910 Bénerville-sur-Mer, France",
        "lat": 49.33479,
        "lng": 0.04909,
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
        "id": 459,
        "name": {
            "en": "Les Pachas",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Deauville",
        "city": "France",
        "address": "67 Rue Gambetta, 14800 Deauville, France",
        "lat": 49.35859,
        "lng": 0.07692,
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
        "id": 460,
        "name": {
            "en": "Avlabari",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "",
        "lat": 41.0,
        "lng": 41.0,
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
        "id": 461,
        "name": {
            "en": "St. George's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "5 Samghebro Street, Tbilisi, Georgia",
        "lat": 41.689242,
        "lng": 44.808898,
        "description": {
            "en": "The tombs of Sayat Nova and Count Loris-Melikov are on the church's compound.",
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
        "id": 462,
        "name": {
            "en": "Toumanyan House",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "3 Amaghleba Street, Tbilisi, Georgia",
        "lat": 41.6959,
        "lng": 44.7916,
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
        "id": 463,
        "name": {
            "en": "Vank Cathedral",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "Vank Cathedral, Antoneli Street, Tbilisi, Georgia",
        "lat": 41.6926,
        "lng": 44.8045,
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
        "id": 464,
        "name": {
            "en": "St. Echmiadzin",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "Saint Echmiadzin Church, 11 Armazi Street, Tbilisi, Georgia",
        "lat": 41.6907,
        "lng": 44.8103,
        "description": {
            "en": "The Armenian Cultural Center Hayartun and its Calouste Gulbenkian hall are located at the church.",
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
        "id": 465,
        "name": {
            "en": "Petros Adamian",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "Tbilisi Petros Adamian Armenian Drama State Theatre, 8 Atoneli Street, Tbilisi, Georgia",
        "lat": 41.6943,
        "lng": 44.8018,
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
        "id": 466,
        "name": {
            "en": "Armenian Drama",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "Avlabari Armenian Drama Theater, 5 Metekhi Rise, Tbilisi, Georgia",
        "lat": 41.6919,
        "lng": 44.8109,
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
        "id": 467,
        "name": {
            "en": "Akhtamar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "Akhtamar Restaurant, 29 Atskuri Street, Tbilisi, Georgia",
        "lat": 41.6862,
        "lng": 44.8391,
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
        "id": 468,
        "name": {
            "en": "Yerevan",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "Yerevan Square / Yerevan Garden, Tbilisi, Georgia",
        "lat": 41.6936,
        "lng": 44.8077,
        "description": {
            "en": "There is a khachkar and an Armenian pulpulak in the Garden.",
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
        "id": 469,
        "name": {
            "en": "Hayartun",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "Hayartun Armenian Cultural Center, 12 Griboedov Street, Tbilisi, Georgia",
        "lat": 41.7012,
        "lng": 44.7994,
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
        "id": 470,
        "name": {
            "en": "Red Gospel",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "The Church of the Red Gospel (Karmir Avetaran Church), Feristsvaleba Street, Tbilisi, Georgia",
        "lat": 41.691123,
        "lng": 44.814888,
        "description": {
            "en": "At 40 meters tall, it was Tbilisi’s largest church before it collapsed in 1989.",
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
        "id": 471,
        "name": {
            "en": "Khojivank",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "Khojivank Pantheon, Tbilisi, Georgia",
        "lat": 41.692,
        "lng": 44.8176,
        "description": {
            "en": "Khojivank is the Pantheon of Tbilisi Armenians. In the Pantheon are the tombs of Raffi, Hovhannes Tumanyan, Gabriel Sundukyan, Jivani, Grigor Artsruni, Perch Proshyan, and many others.",
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
        "id": 472,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "Holy Mother of God Church (Surp Astvatsatsin), Avlabari, Tbilisi, Georgia",
        "lat": 41.6918,
        "lng": 44.8106,
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
        "id": 473,
        "name": {
            "en": "Old Yerevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tibilisi",
        "city": "Georgia",
        "address": "10 Dodo Abashidze Street, Tbilisi, Georgia",
        "lat": 41.7053,
        "lng": 44.7959,
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
        "id": 474,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Akhalkalak",
        "city": "Georgia",
        "address": "CF5M+JVX, Akhalkalaki, Georgia",
        "lat": 41.409118,
        "lng": 43.484733,
        "description": {
            "en": "1856. In the church compound, the statue of Bagratuni Karapet appears to be watching over the town.",
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
        "id": 475,
        "name": {
            "en": "Mesrop Mashdots",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Akhalkalak",
        "city": "Georgia",
        "address": "Statue of Mesrop Mashtots, Central Square, Akhalkalaki, Georgia",
        "lat": 41.4099,
        "lng": 43.486,
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
        "id": 476,
        "name": {
            "en": "St. Sarkis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Ninotsminda",
        "city": "Georgia",
        "address": "St. Sarkis Church, Ninotsminda, Georgia",
        "lat": 41.2658,
        "lng": 43.5916,
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
        "id": 477,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Ninotsminda",
        "city": "Georgia",
        "address": "Armenian Genocide Memorial, Ninotsminda, Georgia",
        "lat": 41.2647,
        "lng": 43.5911,
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
        "id": 478,
        "name": {
            "en": "Vaspourakan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Ninotsminda",
        "city": "Georgia",
        "address": "3400 ?10 Spandaryan Street, Ninotsminda, Georgia",
        "lat": 41.2646,
        "lng": 43.5912,
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
        "id": 479,
        "name": {
            "en": "Galatcha",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Ninotsminda",
        "city": "Georgia",
        "address": "Ghalatcha Hill Memorial, Ninotsminda region, Georgia",
        "lat": 41.2736,
        "lng": 43.6021,
        "description": {
            "en": "There you can find, among other things, a chapel, a khachkar, and monuments dedicated to Monte Melkonian and General Antranik.",
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
        "id": 480,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Hestia",
        "city": "Georgia",
        "address": "Holy Mother of God Church, Eshtia, Ninotsminda Municipality, Georgia",
        "lat": 41.3408,
        "lng": 43.6125,
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
        "id": 481,
        "name": {
            "en": "Javakhk Armenians",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Satkhe",
        "city": "Georgia",
        "address": "Satkhe, Ninotsminda Municipality, Georgia",
        "lat": 41.208,
        "lng": 43.608,
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
        "id": 482,
        "name": {
            "en": "Vahan Terian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Gandza",
        "city": "Georgia",
        "address": "Gandza Village, Ninotsminda Municipality, Georgia",
        "lat": 41.3516,
        "lng": 43.7479,
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
        "id": 483,
        "name": {
            "en": "Jivani",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Kartsakhi",
        "city": "Georgia",
        "address": "Kartsakhi Village, Akhalkalaki Municipality, Georgia",
        "lat": 41.2444,
        "lng": 43.2735,
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
        "id": 484,
        "name": {
            "en": "St. Nshan",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Akhaltsikhe",
        "city": "Georgia",
        "address": "St. Nshan Church (Armenian quarter, Marda), Akhaltsikhe, Georgia",
        "lat": 41.6396,
        "lng": 42.9818,
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
        "id": 485,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Akhaltsikhe",
        "city": "Georgia",
        "address": "Rabati district, Akhaltsikhe, Georgia",
        "lat": 41.6429,
        "lng": 42.9828,
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
        "id": 486,
        "name": {
            "en": "Maestro",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Akhaltsikhe",
        "city": "Georgia",
        "address": "11 Vardzia Street, Akhaltsikhe, Georgia",
        "lat": 41.6394,
        "lng": 42.9991,
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
        "id": 487,
        "name": {
            "en": "Holy Saviour",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Batoumi",
        "city": "Georgia",
        "address": "Christ the Saviour Armenian Apostolic Church",
        "lat": 41.6496,
        "lng": 41.6392,
        "description": {
            "en": "In 2010, a khachkar was put into the church’s courtyard.",
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
        "id": 488,
        "name": {
            "en": "Holy Saviour",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Gagra",
        "city": "Georgia",
        "address": "",
        "lat": 43.2948,
        "lng": 40.2647,
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
        "id": 489,
        "name": {
            "en": "Seli Poeli",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sukhoumi",
        "city": "Georgia",
        "address": "Sukhumi, Abkhazia",
        "lat": 43.0015,
        "lng": 41.0234,
        "description": {
            "en": "a good place to spend time in a familial and low-key atmosphere is at Seli Poeli, ranked the fifth best restaurant in the city on TripAdvisor.",
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
        "id": 490,
        "name": {
            "en": "Pshap",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Pshap",
        "city": "Georgia",
        "address": "Pshap (also spelled Psap / Pshapi), Abkhazia, Georgia",
        "lat": 43.1086,
        "lng": 41.2234,
        "description": {
            "en": "A khachkar was put up in Pshap in 2016.",
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
        "id": 491,
        "name": {
            "en": "Dandra",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Dandra",
        "city": "Georgia",
        "address": "Dandra (Dandrypš / ????????), Gagra District, Abkhazia, Georgia",
        "lat": 43.3792,
        "lng": 40.1815,
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
        "id": 492,
        "name": {
            "en": "Schah En Schah",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Berlin",
        "city": "Germany",
        "address": "Wielandstraße 45, 10625 Berlin, Germany",
        "lat": 52.5086,
        "lng": 13.3013,
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
        "id": 493,
        "name": {
            "en": "Semiramis",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Berlin",
        "city": "Germany",
        "address": "Dahlmannstraße 20, 10629 Berlin",
        "lat": 52.5002667,
        "lng": 13.3042121,
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
        "id": 494,
        "name": {
            "en": "Big Window",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Berlin",
        "city": "Germany",
        "address": "Joachim-Friedrich-Straße 49, 10711 Berlin",
        "lat": 52.4964493,
        "lng": 13.2957509,
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
        "id": 495,
        "name": {
            "en": "Amberd",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Berlin",
        "city": "Germany",
        "address": "Uhlandstraße 67, 10717 Berlin",
        "lat": 52.4929302,
        "lng": 13.3232293,
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
        "id": 496,
        "name": {
            "en": "Café-Haus Koch Berlin,",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Berlin",
        "city": "Germany",
        "address": "Karl-Liebknecht-Straße 7, 10178 Berlin",
        "lat": 52.520605,
        "lng": 13.405176,
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
        "id": 497,
        "name": {
            "en": "Hedwidge Cathedral,",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Berlin",
        "city": "Germany",
        "address": "St. Hedwig’s Cathedral, Bebelplatz 1, 10117 Berlin, Germany",
        "lat": 52.5189,
        "lng": 13.3948,
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
        "id": 498,
        "name": {
            "en": "Yerevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Berlin",
        "city": "Germany",
        "address": "Seddiner Str. 8, 10315 Berlin",
        "lat": 52.5136201,
        "lng": 13.5215675,
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
        "id": 499,
        "name": {
            "en": "Sts. Sahag And Mesrob",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Cologne",
        "city": "Germany",
        "address": "Dürener Str. 275, 50935 Köln, Germany",
        "lat": 50.9256,
        "lng": 6.8899,
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
        "id": 500,
        "name": {
            "en": "Schmechtings",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Cologne",
        "city": "Germany",
        "address": "Kohlenstraße / Nähe A43, 44795 Bochum, Germany",
        "lat": 51.4436,
        "lng": 7.2472,
        "description": {
            "en": "the town of Bochum celebrated the 155-year anniversary of the Armenian Academic Association in 2015 by planting 155 trees offered by Armenia in the Parc",
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
        "id": 501,
        "name": {
            "en": "Lezginka",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Cologne",
        "city": "Germany",
        "address": "Am Lindenplatz 34, 41466 Neuss, Germany",
        "lat": 51.1591046,
        "lng": 6.6917055,
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
        "id": 502,
        "name": {
            "en": "Zum Zwilling",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bonn",
        "city": "Germany",
        "address": "Wesselheideweg 77, 53123 Bonn, Germany",
        "lat": 50.7064606,
        "lng": 7.0365236,
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
        "id": 503,
        "name": {
            "en": "Grillhaus Kust",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Frankfurt",
        "city": "Germany",
        "address": "Otto-Wels-Straße 138, 65197 Wiesbaden, Germany",
        "lat": 50.0929673,
        "lng": 8.1996292,
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
        "id": 504,
        "name": {
            "en": "Ceasar's Grillhaus",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Nauheim",
        "city": "Germany",
        "address": "Schwalheim, 61231 Bad Nauheim, Germany",
        "lat": 50.3544345,
        "lng": 8.7602253,
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
        "id": 505,
        "name": {
            "en": "Main Cemetry",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Stittgart",
        "city": "Germany",
        "address": "Pragfriedhof Stuttgart, Friedhofstraße 44, 70191 Stuttgart, Germany",
        "lat": 48.7945,
        "lng": 9.185,
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
        "id": 506,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Goppingen",
        "city": "Germany",
        "address": "Freihofstraße 46, 73033 Göppingen, Germany",
        "lat": 48.704,
        "lng": 9.651,
        "description": {
            "en": "The first Armenian church in Germany.",
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
        "id": 507,
        "name": {
            "en": "Gerhard Maier",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Schwäbisch Gmünd",
        "city": "Germany",
        "address": "Remspark (Oberer Stadtgarten), 73525 Schwäbisch Gmünd, Germany",
        "lat": 48.7992,
        "lng": 9.8023,
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
        "id": 508,
        "name": {
            "en": "Saint Aurelius",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Calw-Hirsau",
        "city": "Germany",
        "address": "Aureliusplatz 1, 75365 Calw-Hirsau, Germany",
        "lat": 48.7349,
        "lng": 8.7354,
        "description": {
            "en": "Saint Aurelius of Riditio, an Armenian bishop from the fifth century who died in exile in Milan.  His grave is still visited to this day.",
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
        "id": 509,
        "name": {
            "en": "Jagergrill",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Nuremberg",
        "city": "Germany",
        "address": "Jägerstr. 14, 90451 Nürnberg, Germany",
        "lat": 49.4105,
        "lng": 11.1199,
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
        "id": 510,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Nuremberg",
        "city": "Germany",
        "address": "Altenfurter Str. 98, 90475 Nürnberg, Germany",
        "lat": 49.4002164,
        "lng": 11.1805107,
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
        "id": 511,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Hochstadt",
        "city": "Germany",
        "address": "Marktplatz, 91315 Höchstadt an der Aisch, Germany",
        "lat": 49.706,
        "lng": 10.8142,
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
        "id": 512,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "erlangen",
        "city": "Germany",
        "address": "Egidienstein, Egidienstraße 65A, 91058 Erlangen, Germany",
        "lat": 49.5485,
        "lng": 10.994,
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
        "id": 513,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Neckar-Hochberg",
        "city": "Germany",
        "address": "Evang. Friedhof Hochberg, Friedhofstraße, 71686 Remseck am Neckar-Hochberg, Germany",
        "lat": 48.8767,
        "lng": 9.2618,
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
        "id": 514,
        "name": {
            "en": "Anusch Lini",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lauf An Der Pegnitz",
        "city": "Germany",
        "address": "Kirchenplatz 3, 91207 Lauf an der Pegnitz, Germany",
        "lat": 49.511,
        "lng": 11.2801,
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
        "id": 515,
        "name": {
            "en": "Holy Resurrection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Halle",
        "city": "Germany",
        "address": "Alfred-Reinhardt-Straße 8, 06132 Halle (Saale), Germany",
        "lat": 51.4249,
        "lng": 11.9902,
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
        "id": 516,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Halle",
        "city": "Germany",
        "address": "Hansering (opposite Landgericht Halle), 06108 Halle (Saale), Germany",
        "lat": 51.483,
        "lng": 11.9717,
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
        "id": 517,
        "name": {
            "en": "Sevan Eiscafe and Bistro",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Schonebeck",
        "city": "Germany",
        "address": "Bahnhofstraße 39, 39218 Schönebeck (Elbe), Germany",
        "lat": 52.0177,
        "lng": 11.7347,
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
        "id": 518,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Chemnitz",
        "city": "Germany",
        "address": "Blankenauer Str. 75, 09113 Chemnitz, Germany",
        "lat": 50.8549,
        "lng": 12.9292,
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
        "id": 519,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Jena",
        "city": "Germany",
        "address": "Johannisfriedhof (St. Johannis Cemetery), Friedhofsweg, 07743 Jena, Germany",
        "lat": 50.9312,
        "lng": 11.5884,
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
        "id": 520,
        "name": {
            "en": "Ellena",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Jena",
        "city": "Germany",
        "address": "Salvador-Allende-Platz 10, 07747 Jena, Germany",
        "lat": 50.9288,
        "lng": 11.5823,
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
        "id": 521,
        "name": {
            "en": "Le Soleil",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Zinnowitz",
        "city": "Germany",
        "address": "Neue Strandstraße 35, 17454 Zinnowitz, Germany",
        "lat": 54.0796,
        "lng": 13.9142,
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
        "id": 522,
        "name": {
            "en": "Vino Di Net",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Humbourg",
        "city": "Germany",
        "address": "Horner Weg 211, 22111 Hamburg, Germany",
        "lat": 53.555,
        "lng": 10.0773,
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
        "id": 523,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Bremen",
        "city": "Germany",
        "address": "Bürgerpark (near Parkstraße / Schwachhausen), 28209 Bremen, Germany",
        "lat": 53.0836,
        "lng": 8.8236,
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
        "id": 524,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Hamburg",
        "city": "Germany",
        "address": "Nelson-Mandela-Park (Wilhelmsburg, near Vogelhüttendeich / Neuhöfer Straße), 21109 Hamburg, Germany",
        "lat": 53.5219,
        "lng": 9.9876,
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
        "id": 525,
        "name": {
            "en": "Casanova",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bremen",
        "city": "Germany",
        "address": "Stresemannstraße 13, 28207 Bremen, Germany",
        "lat": 53.0704,
        "lng": 8.861,
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
        "id": 526,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Athens",
        "city": "Greece",
        "address": "2 René Pio Street, 117 44 Athens, Greece",
        "lat": 37.9577,
        "lng": 23.7253,
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
        "id": 527,
        "name": {
            "en": "St. Garabed",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Athens",
        "city": "Greece",
        "address": "Praxagorou 4, 117 45 Athens, Greece",
        "lat": 37.9563,
        "lng": 23.72,
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
        "id": 528,
        "name": {
            "en": "Levon And Sophia Hagopian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Athens",
        "city": "Greece",
        "address": "4 Praxagorou Street, 117 45 Athens, Greece",
        "lat": 37.9563,
        "lng": 23.72,
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
        "id": 529,
        "name": {
            "en": "Azat Or",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Athens",
        "city": "Greece",
        "address": "Aristotelous 8, 17671 Kallithea, Athens, Greece",
        "lat": 37.9588,
        "lng": 23.7179,
        "description": {
            "en": "Azat Or, founded in 1945, is one of Europe’s oldest Armenian newspapers.",
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
        "id": 530,
        "name": {
            "en": "Tomas Kebab",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Athens",
        "city": "Greece",
        "address": "Mitrou Sarkoudinou 49, 117 44 Athens, Greece",
        "lat": 37.9574,
        "lng": 23.7247,
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
        "id": 531,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Athens",
        "city": "Greece",
        "address": "Plateia Armenion (Armenian Square), Neos Kosmos, 117 45 Athens, Greece",
        "lat": 37.9576,
        "lng": 23.724,
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
        "id": 532,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Athens",
        "city": "Greece",
        "address": "Plateia Armenion, Neos Kosmos, 117 45 Athens, Greece",
        "lat": 37.9576,
        "lng": 23.724,
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
        "id": 533,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Athens",
        "city": "Greece",
        "address": "Kriezi 10, 105 53 Athens, Greece",
        "lat": 37.9794,
        "lng": 23.7219,
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
        "id": 534,
        "name": {
            "en": "Miran",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Athens",
        "city": "Greece",
        "address": "45 Evripidou Street, 105 54 Athens, Greece",
        "lat": 37.98,
        "lng": 23.726,
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
        "id": 535,
        "name": {
            "en": "Savvas",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Athens",
        "city": "Greece",
        "address": "Ermou 91, 105 55 Monastiraki, Athens, Greece",
        "lat": 37.9768,
        "lng": 23.7251,
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
        "id": 536,
        "name": {
            "en": "To Rodi",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Athens",
        "city": "Greece",
        "address": "Kreontos 163, Sepolia, 104 43 Athens, Greece",
        "lat": 38.0045,
        "lng": 23.7157,
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
        "id": 537,
        "name": {
            "en": "All Saints",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Athens",
        "city": "Greece",
        "address": "Anthousis & Dodekanisou area, 121 37 Peristeri, Athens, Greece",
        "lat": 38.0305,
        "lng": 23.6764,
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
        "id": 538,
        "name": {
            "en": "Miran",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Athens",
        "city": "Greece",
        "address": "Andrea Papandreou 35, 152 32 Chalandri, Athens, Greece",
        "lat": 38.0211,
        "lng": 23.7986,
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
        "id": 539,
        "name": {
            "en": "sourp Hagop",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Piraeus",
        "city": "Greece",
        "address": "Agios Iakovos (Surp Hagop) Armenian Church, Piraeus / Drapetsona area, 186 48 Piraeus, Greece",
        "lat": 37.9485,
        "lng": 23.6375,
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
        "id": 540,
        "name": {
            "en": "Armenian Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Piraeus",
        "city": "Greece",
        "address": "Lamias 30, 185 42 Piraeus, Greece",
        "lat": 37.9653,
        "lng": 23.6558,
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
        "id": 541,
        "name": {
            "en": "Zavarian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Piraeus",
        "city": "Greece",
        "address": "Milasson 12, 184 50 Nikaia (Piraeus), Greece",
        "lat": 37.9645,
        "lng": 23.6515,
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
        "id": 542,
        "name": {
            "en": "Enty",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Piraeus",
        "city": "Greece",
        "address": "Dim. Karakoulouxi 4, 184 50 Nikaia, Greece",
        "lat": 37.96699,
        "lng": 23.65028,
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
        "id": 543,
        "name": {
            "en": "Tsikoudoantamoma",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Piraeus",
        "city": "Greece",
        "address": "???????????? 9 & ???????????, 182 33 ????? ??????? ??????, ?????, Greece",
        "lat": 37.9646,
        "lng": 23.6515,
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
        "id": 544,
        "name": {
            "en": "Artaki Kalpakian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Piraeus",
        "city": "Greece",
        "address": "11 Nafpliou Street, 175 63 Palaio Faliro, Athens, Greece",
        "lat": 37.9315,
        "lng": 23.7073,
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
        "id": 545,
        "name": {
            "en": "sourp asdvadzadzin",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Thessaloniki",
        "city": "Greece",
        "address": "Dialetti 4, 546 21 Thessaloniki, Greece",
        "lat": 40.6277,
        "lng": 22.9517,
        "description": {
            "en": "the Church of the Holy Mother of God (Surp Asdvadzadzin) was consecrated in 1903. The Armenian community center is just next door, and a khachkar was put into the small adjacent plaza.",
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
        "id": 546,
        "name": {
            "en": "Noy",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Thessaloniki",
        "city": "Greece",
        "address": "Aristotélous 17, 562 24 Evosmos, Thessaloniki, Greece",
        "lat": 40.6628,
        "lng": 22.9115,
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
        "id": 547,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Komotini",
        "city": "Greece",
        "address": "",
        "lat": 41.115031,
        "lng": 25.408036,
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
        "id": 548,
        "name": {
            "en": "St. Garabed",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Alexangroupolis",
        "city": "Greece",
        "address": "56 Anatolikis Thrakis St., 681 31 Alexandroupoli, Greece",
        "lat": 40.8456,
        "lng": 25.8749,
        "description": {
            "en": "built in the 1880s by a group of Armenians from the region of Mu?.",
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
        "id": 549,
        "name": {
            "en": "Hovoli",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Alexangroupolis",
        "city": "Greece",
        "address": "Vasileos Alexandrou 50, 681 00 Alexandroupoli, Greece",
        "lat": 40.842708,
        "lng": 25.871845,
        "description": {
            "en": "ranked number three in the city on TripAdvisor!",
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
        "id": 550,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Xanthi",
        "city": "Greece",
        "address": "Church of the Holy Mother of God (Surp Asdvadzadzin), Xanthi 671 00, Greece",
        "lat": 41.1346,
        "lng": 24.8882,
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
        "id": 551,
        "name": {
            "en": "Holy Spirit",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Kavala",
        "city": "Greece",
        "address": "Church of the Holy Spirit, Kiprou 14, 652 01 Kavala, Greece",
        "lat": 40.936,
        "lng": 24.4015,
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
        "id": 552,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Dydimoteicho",
        "city": "Greece",
        "address": "St. George Armenian Church, Didymoteicho 683 00, Greece",
        "lat": 41.3506,
        "lng": 26.4967,
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
        "id": 553,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Kalamata",
        "city": "Greece",
        "address": "Armenian Genocide Memorial, Kalamata 241 00, Greece",
        "lat": 37.0389,
        "lng": 22.1142,
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
        "id": 554,
        "name": {
            "en": "St. John",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Heraklion",
        "city": "Greece",
        "address": "St. John’s Church (Surp Hovhannes), Heraklion, Crete 712 02, Greece",
        "lat": 35.3387,
        "lng": 25.1442,
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
        "id": 555,
        "name": {
            "en": "Krikor",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Heraklion",
        "city": "Greece",
        "address": "Pastry Krikor, Leoforos 62 Martiron 146, Heraklion 713 04, Crete, Greece",
        "lat": 35.3279,
        "lng": 25.1235,
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
        "id": 556,
        "name": {
            "en": "Karteros",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Heraklion",
        "city": "Greece",
        "address": "Karteros Hotel, Karteros 715 00, Heraklion, Crete, Greece",
        "lat": 35.3326,
        "lng": 25.1794,
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
        "id": 557,
        "name": {
            "en": "Markosian",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Corfu",
        "city": "Greece",
        "address": "Geor. Theotoki 20, Kerkira 491 00, Corfu, Greece",
        "lat": 39.622681,
        "lng": 19.920036,
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
        "id": 558,
        "name": {
            "en": "Armenian Catholic",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Budapest",
        "city": "Hungary",
        "address": "Budapesti Fogolykiváltó Boldogasszony és Világosító Szent Gergely Örmény Katolikus Templom, Orlay u. 6, 1114 Budapest, Hungary",
        "lat": 47.4821,
        "lng": 19.0508,
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
        "id": 559,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Budapest",
        "city": "Hungary",
        "address": "Khachkar (Armenian Genocide memorial), Pet?fi tér, Budapest, Hungary",
        "lat": 47.49235,
        "lng": 19.0509,
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
        "id": 560,
        "name": {
            "en": "Yerevan Ormeny Bufe",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Budapest",
        "city": "Hungary",
        "address": "Thököly út 20, 1076 Budapest, Hungary",
        "lat": 47.5019,
        "lng": 19.0847,
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
        "id": 561,
        "name": {
            "en": "Dobrumba",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Budapest",
        "city": "Hungary",
        "address": "Dob utca 5, 1074 Budapest, Hungary",
        "lat": 47.496905,
        "lng": 19.059952,
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
        "id": 562,
        "name": {
            "en": "Kiss Erno",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Budapest",
        "city": "Hungary",
        "address": "Kiss Ern? (Ern? Kiss) commemorative plaque, Batthyány tér 1, 1011 Budapest, Hungary",
        "lat": 47.5065,
        "lng": 19.0403,
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
        "id": 563,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Veszprem",
        "city": "Hungary",
        "address": "Khachkar (Armenian cross-stone), Óváros tér (Main Square), Veszprém, Hungary",
        "lat": 47.0937,
        "lng": 17.9109,
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
        "id": 564,
        "name": {
            "en": "St. Stephen",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Debrecen",
        "city": "Hungary",
        "address": "Faraktár u. 78, 4034 Debrecen, Hungary",
        "lat": 47.52866,
        "lng": 21.657677,
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
        "id": 565,
        "name": {
            "en": "Greek Catholic",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Nyiregyhaza",
        "city": "Hungary",
        "address": "Kossuth tér 4, 4400 Nyíregyháza, Hungary",
        "lat": 47.95533,
        "lng": 21.71786,
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
        "id": 566,
        "name": {
            "en": "Szegedi Dom",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Szeged",
        "city": "Hungary",
        "address": "Dóm tér 15, 6720 Szeged, Hungary",
        "lat": 46.248923,
        "lng": 20.149134,
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
        "id": 567,
        "name": {
            "en": "Armenian Chapel",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Delhi",
        "city": "India",
        "address": "Armenian Church of the Holy Virgin, Chandni Chowk, Church Mission Road, Delhi 110006, India",
        "lat": 28.6507,
        "lng": 77.2311,
        "description": {
            "en": "a little Armenian chapel from the eighteenth century is still standing despite its rapid deterioration. The oldest Christian graves in the capital can be found in the chapel’s cemetery, renamed D’Eremao Cemetery. Its lack of maintenance makes visiting difficult, but some Armenian inscriptions remain legible on certain graves.",
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
        "id": 568,
        "name": {
            "en": "Nazareth",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Calcutta",
        "city": "India",
        "address": "2 Armenian Street, Barabazar, Kolkata 700001, India",
        "lat": 22.579602,
        "lng": 88.351337,
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
        "id": 569,
        "name": {
            "en": "Joseph Emin",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Calcutta",
        "city": "India",
        "address": "2 Armenian Street, Barabazar, Kolkata 700001, India",
        "lat": 22.579602,
        "lng": 88.351337,
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
        "id": 570,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Calcutta",
        "city": "India",
        "address": "Armenian Street, Barabazar Market, Kolkata 700001, West Bengal, India",
        "lat": 22.5796,
        "lng": 88.3513,
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
        "id": 571,
        "name": {
            "en": "Armenian College",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Calcutta",
        "city": "India",
        "address": "Armenian College & Philanthropic Academy, 56A, Mirza Ghalib Street (Free School Street), Kolkata 700016, West Bengal, India",
        "lat": 22.5597,
        "lng": 88.3529,
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
        "id": 572,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Calcutta",
        "city": "India",
        "address": "St. Gregory the Illuminator Armenian Church, Park Street, Tangra area, Kolkata 700017, West Bengal, India",
        "lat": 22.5486,
        "lng": 88.3699,
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
        "id": 573,
        "name": {
            "en": "Holy Trinity",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Calcutta",
        "city": "India",
        "address": "Holy Trinity Armenian Church, 5/A, Free School Street / Park Circus–Tangra area, Kolkata 700017, West Bengal, India",
        "lat": 22.5418,
        "lng": 88.3654,
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
        "id": 574,
        "name": {
            "en": "St. Jhon The Baptist",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Chinsurah",
        "city": "India",
        "address": "St. John the Baptist Church, Chinsurah (Hooghly), West Bengal 712101, India",
        "lat": 22.9037,
        "lng": 88.3968,
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
        "id": 575,
        "name": {
            "en": "St. Mary's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Berhampur",
        "city": "India",
        "address": "St. Mary’s Church, Berhampur (Brahmapur), Ganjam District, Odisha 760001, India",
        "lat": 19.3149,
        "lng": 84.7929,
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
        "id": 576,
        "name": {
            "en": "Virgin Mary",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Chennai",
        "city": "India",
        "address": "Armenian Church of the Virgin Mary, Armenian Street, George Town, Chennai, Tamil Nadu 600001, India",
        "lat": 13.0891,
        "lng": 80.2873,
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
        "id": 577,
        "name": {
            "en": "HaroutyounShmavonian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Chennai",
        "city": "India",
        "address": "",
        "lat": 13.089026973438509,
        "lng": 80.28773314353369,
        "description": {
            "en": "Father Harutyun Shmavonian, now buried at the Armenian church, published Azdarar, the first Armenian-language newspaper in the world, in 1794.",
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
        "id": 578,
        "name": {
            "en": "Coja Petrus Uscan",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Chennai",
        "city": "India",
        "address": "Maraimalai Adigal Bridge, Anna Salai, Saidapet, Chennai, Tamil Nadu 600015, India",
        "lat": 13.0253,
        "lng": 80.2238,
        "description": {
            "en": "the Maraimalai Adigal Bridge, the first bridge to cross the Adyar River, was built in 1728 by the wealthy Armenian businessman Coja Petrus Uscan. A commemorative plaque,  can be seen at the north end of the bridge, next to the Saidapet bus stop.",
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
        "id": 579,
        "name": {
            "en": "Armenian cemetry",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Haydarabad",
        "city": "India",
        "address": "Armenian Cemetery, Uppuguda, Hyderabad, Telangana 500053, India",
        "lat": 17.3716,
        "lng": 78.4897,
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
        "id": 580,
        "name": {
            "en": "virgin mary",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Surat",
        "city": "India",
        "address": "Armenian Church (Church of Virgin Mary), Katargam–Amroli Road, Katargam, Surat, Gujarat 395004, India",
        "lat": 21.2317,
        "lng": 72.833,
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
        "id": 581,
        "name": {
            "en": "Dutch Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Surat",
        "city": "India",
        "address": "Dutch & Armenian Cemetery, 1, Katargam Rd, Rampura, Raman Nagar, Katargam Darwaja, Surat, Gujarat 395003, India",
        "lat": 21.2093,
        "lng": 72.8273,
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
        "id": 582,
        "name": {
            "en": "St. Peter's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Mumbai",
        "city": "India",
        "address": "St. Peter’s Armenian Church, 66 Nagindas Master Road, Fort, Mumbai, Maharashtra 400023, India",
        "lat": 18.9322,
        "lng": 72.8356,
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
        "id": 583,
        "name": {
            "en": "Lavash",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Goa",
        "city": "India",
        "address": "Lavash Armenian Restaurant, Jacinto Road, Khobra Vaddo, Calangute, Goa 403516, India",
        "lat": 15.5439,
        "lng": 73.7553,
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
        "id": 584,
        "name": {
            "en": "St. Sarkis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tehran",
        "city": "Iran",
        "address": "St. Sarkis Cathedral, Karim Khan Zand St & Nejatollahi St, Tehran, Iran",
        "lat": 35.7149,
        "lng": 51.4151,
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
        "id": 585,
        "name": {
            "en": "Lord",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tehran",
        "city": "Iran",
        "address": "Lord Cafe Confectionery, No. 246 Nejatollahi St, District 6, Tehran, Iran",
        "lat": 35.7147,
        "lng": 51.4125,
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
        "id": 586,
        "name": {
            "en": "Armenian Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tehran",
        "city": "Iran",
        "address": "Armenian Evangelical Church, Vanak Square, 7th Street (Niloo / Lahigani St.), No. 30, Tehran, Iran",
        "lat": 35.7576,
        "lng": 51.4098,
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
        "id": 587,
        "name": {
            "en": "St. John",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tehran",
        "city": "Iran",
        "address": "St. John’s (Sourb Hovhannes) Church, Narmak / Armenian Quarter, Tehran, Iran",
        "lat": 35.7472,
        "lng": 51.5256,
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
        "id": 588,
        "name": {
            "en": "Gohar Mesropian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Tehran",
        "city": "Iran",
        "address": "Gohar Mesropian Armenian School (Gohar Armenian School), 4th Street, Tehran, Iran",
        "lat": 35.7246,
        "lng": 51.4169,
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
        "id": 589,
        "name": {
            "en": "Leon",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tehran",
        "city": "Iran",
        "address": "Leon Restaurant (León Café / Leon chain), Sheykh Bahayi St, ASP Towers, District 6, Tehran, Iran",
        "lat": 35.7444,
        "lng": 51.3989,
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
        "id": 590,
        "name": {
            "en": "Souren",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tehran",
        "city": "Iran",
        "address": "Souren Restaurant (Souren Pizza), West Varsho Street, District 6, Tehran, Iran",
        "lat": 35.742,
        "lng": 51.392,
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
        "id": 591,
        "name": {
            "en": "Ararat Club",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tehran",
        "city": "Iran",
        "address": "Ararat Club Restaurant (Ararat Café Restaurant), Mirzaye Shirazi St, between 5th & 7th St, No. 31, Tehran, Iran",
        "lat": 35.7165,
        "lng": 51.4089,
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
        "id": 592,
        "name": {
            "en": "Reera",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tehran",
        "city": "Iran",
        "address": "Reera Café & Restaurant (Café Reera), No. 5 Dead End, Lolagar St., Nofel Loshato St., Tehran, Iran",
        "lat": 35.6961,
        "lng": 51.4231,
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
        "id": 593,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tehran",
        "city": "Iran",
        "address": "Church of the Holy Mother of God (Sourb Astvatsatsin), Armenian Church Complex, Between Masoud-e-Saad Street and Mirza Kuchak Khan Street, Tehran, Iran",
        "lat": 35.7096,
        "lng": 51.4078,
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
        "id": 594,
        "name": {
            "en": "Armenian Museum Of Anthopology",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Tehran",
        "city": "Iran",
        "address": "Armenian Museum of Anthropology (Armenian Ethnographic Museum / Arch Bishop Ardak Manookian Museum), Holy Mary Church Complex, Karim Khan Zand St, Tehran, Iran",
        "lat": 35.7006,
        "lng": 51.4248,
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
        "id": 595,
        "name": {
            "en": "Naderi",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tehran",
        "city": "Iran",
        "address": "Café Naderi, Jomhuri Street (near Hafez Bridge / Istanbul Crossroad), Tehran, Iran",
        "lat": 35.6948,
        "lng": 51.4165,
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
        "id": 596,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tehran",
        "city": "Iran",
        "address": "St. Gregory the Illuminator Armenian Catholic Church (Sourb Grigor Lousavoritch), Armenia Street / Karim Khan Zand St area, Tehran, Iran",
        "lat": 35.7052,
        "lng": 51.4071,
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
        "id": 597,
        "name": {
            "en": "Saints Thaddeus and Bartholomew",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tehran",
        "city": "Iran",
        "address": "Saints Thaddeus and Bartholomew Church (Surp Tadevos–Bartoghimeos), Armenians Alley, south of Tehran Grand Bazaar, District 12, Tehran, Iran",
        "lat": 35.6704,
        "lng": 51.4274,
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
        "id": 598,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tehran",
        "city": "Iran",
        "address": "Saint George Church (Sourb Gevorg), Darkhunqah Alley (Koocheh Darkh?ng?h), Sangelaj district, Tehran, Iran",
        "lat": 35.6738,
        "lng": 51.4121,
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
        "id": 599,
        "name": {
            "en": "Vartanants",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tehran",
        "city": "Iran",
        "address": "St. Vartanants Church, Dahmetre Aramaneh Ave (Heshmatiyeh / Sardarabad district), District 7, Tehran, Iran",
        "lat": 35.7201,
        "lng": 51.4544,
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
        "id": 600,
        "name": {
            "en": "Paradisio",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tehran",
        "city": "Iran",
        "address": "Paradiso Café (Cafe Paradiso), No. 12 Mehrdad Street, Motahari Avenue, Tehran, Iran",
        "lat": 35.7264,
        "lng": 51.4259,
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
        "id": 601,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tehran",
        "city": "Iran",
        "address": "Armenia Café Restaurant",
        "lat": 7.0,
        "lng": 35.7204,
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
        "id": 602,
        "name": {
            "en": "Alik",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Tehran",
        "city": "Iran",
        "address": "Alik Armenian Daily Newspaper, Karim Khan Zand Ave, near Nejatollahi St, Tehran, Iran",
        "lat": 35.7058,
        "lng": 51.4136,
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
        "id": 603,
        "name": {
            "en": "Joseph",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tehran",
        "city": "Iran",
        "address": "Joseph Sandwich, Eshqyar (Eshghyar) Street, District 7, Tehran, Iran",
        "lat": 35.724,
        "lng": 51.4336,
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
        "id": 604,
        "name": {
            "en": "Holy Translators",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tehran",
        "city": "Iran",
        "address": "Holy Translators Church (Sourb Targmanchats), Vahideh Street, Armenian School Alley, District 8, Tehran, Iran",
        "lat": 35.713,
        "lng": 51.424,
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
        "id": 605,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tehran",
        "city": "Iran",
        "address": "Saint Gregory the Illuminator Church (Sourb Grigor Lusavoritch), Majidiyeh neighborhood, District 8, Tehran, Iran",
        "lat": 35.7445,
        "lng": 51.4626,
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
        "id": 606,
        "name": {
            "en": "Ararat Club",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Tehran",
        "city": "Iran",
        "address": "Ararat Sports Complex (Armenian Stadium), Vanak, District 3, Tehran, Iran",
        "lat": 35.7682,
        "lng": 51.4016,
        "description": {
            "en": "Armenian visitors can access the complex, which includes a gym, tennis courts, cafés, and even a chapel with some particularly interesting contemporary architecture.",
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
        "id": 607,
        "name": {
            "en": "St. Minas",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tehran",
        "city": "Iran",
        "address": "St. Minas Church (Saint Minas Armenian Apostolic Church), Vanak / Armenian Fort area, Ararat Street, District 3, Tehran, Iran",
        "lat": 35.766,
        "lng": 51.402,
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
        "id": 608,
        "name": {
            "en": "St. Anthony's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Haykashen",
        "city": "iran",
        "address": "Armenian Catholic St. Anthony’s Church (unverified location in Haykashen community, Mazandaran Province, Iran)",
        "lat": 36.57382459413911,
        "lng": 51.98015811827076,
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
        "id": 609,
        "name": {
            "en": "Haykashen",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Haykashen",
        "city": "Iran",
        "address": "Haykashen",
        "lat": 36.572639346040496,
        "lng": 51.980388324731976,
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
        "id": 610,
        "name": {
            "en": "New Julfa",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Isfahan",
        "city": "Iran",
        "address": "Isfahan Province, Isfahan, New Julfa (Vank Church Alley area)",
        "lat": 32.6351,
        "lng": 51.6534,
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
        "id": 611,
        "name": {
            "en": "Holy Savior",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (Vank Cathedral / Church Street area near Hakim Nezami St)",
        "lat": 32.635,
        "lng": 51.6557,
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
        "id": 612,
        "name": {
            "en": "Khachatour Kessaratsi",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (Vank Cathedral complex, opposite Holy Savior Cathedral)",
        "lat": 32.6349,
        "lng": 51.6556,
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
        "id": 613,
        "name": {
            "en": "St. Mary",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa (St. Mary / Surb Astvatsatsin Church), Isfahan, Isfahan Province, Iran",
        "lat": 32.6339,
        "lng": 51.6572,
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
        "id": 614,
        "name": {
            "en": "Church Of Bethlehem",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (Church of Bethlehem / Bedkhem Church, near Julfa Square & St. Mary Church)",
        "lat": 32.636448,
        "lng": 51.658527,
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
        "id": 615,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (St. George’s Church / Sourb Gevorg, Gharib Church)",
        "lat": 32.6380197,
        "lng": 51.6542628,
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
        "id": 616,
        "name": {
            "en": "Merchant",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, near Vank Cathedral (Church St area)",
        "lat": 32.6346658,
        "lng": 51.6551868,
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
        "id": 617,
        "name": {
            "en": "Shant",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, near Jolfa Square",
        "lat": 32.6357247,
        "lng": 51.6557583,
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
        "id": 618,
        "name": {
            "en": "Akhtamar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Church Street area",
        "lat": 32.6355866,
        "lng": 51.655657,
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
        "id": 619,
        "name": {
            "en": "Ani",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, close to Vank Cathedral",
        "lat": 32.6358358,
        "lng": 51.6556027,
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
        "id": 620,
        "name": {
            "en": "Van",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, near Bethlehem Church",
        "lat": 32.6363407,
        "lng": 51.6569591,
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
        "id": 621,
        "name": {
            "en": "St. John The Baptist",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (St. John the Baptist Church / Sourb Hovhannes Mgrditch, Charsou neighborhood near St. Catherine Convent)",
        "lat": 32.6322,
        "lng": 51.6509,
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
        "id": 622,
        "name": {
            "en": "St. Nicholas",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (Saint Nicholas Church / Surb Nikoghayos Hayrapet, Gharagel neighbourhood)",
        "lat": 32.6379,
        "lng": 51.6488,
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
        "id": 623,
        "name": {
            "en": "St. Sarkis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (St. Sarkis Church / Surp Sarkis Armenian Apostolic Church, Yerevan neighborhood)",
        "lat": 32.6333,
        "lng": 51.6414,
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
        "id": 624,
        "name": {
            "en": "St. Nerses",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (St. Nerses Church / Surp Nerses Medz, Kocher neighbourhood near Our Lady of the Rosary Church)",
        "lat": 32.63043925,
        "lng": 51.64953679,
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
        "id": 625,
        "name": {
            "en": "Our Lady Of Holy Rosery",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (Church of Our Lady of the Holy Rosary / Church of Our Lady of the Rosary, Kocher neighbourhood)",
        "lat": 32.63056,
        "lng": 51.64958,
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
        "id": 626,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (Ararat Sports Complex, Armenian Ararat Club grounds near Ararat Square)",
        "lat": 32.6341,
        "lng": 51.6576,
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
        "id": 627,
        "name": {
            "en": "Arka",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (Cafe Arka, near Vank Cathedral / Jolfa Square area, Armenian quarter)",
        "lat": 32.635,
        "lng": 51.6555,
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
        "id": 628,
        "name": {
            "en": "St. Stephen",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (St. Stephen Church / Surb Stepanos, Hakopjan neighbourhood – largest Armenian church in Isfahan)",
        "lat": 32.6358,
        "lng": 51.6501,
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
        "id": 629,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Isfahan",
        "city": "Iran",
        "address": "New Julfa, Isfahan, Isfahan Province, Iran (St. Gregory the Illuminator Church / Surp Grigor Lusavorich, Small Meidan neighbourhood)",
        "lat": 32.6381,
        "lng": 51.6529,
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
        "id": 630,
        "name": {
            "en": "St. Sarkis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Shahin Shahr",
        "city": "Iran",
        "address": "Shahin Shahr",
        "lat": 32.8599,
        "lng": 51.5532,
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
        "id": 631,
        "name": {
            "en": "Armenian Church",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Zarneh",
        "city": "Iran",
        "address": "Zarneh (Zarne / Boloran), Fereydan Valley, Isfahan Province, Iran",
        "lat": 33.104,
        "lng": 50.0845,
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
        "id": 632,
        "name": {
            "en": "St. Nerses",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Khuygan-e Sofla",
        "city": "Iran",
        "address": "Khuygan-e Sofla village, Varzaq-e Jonubi Rural District, Central District, Fereydan County, Isfahan Province, Iran",
        "lat": 32.83336,
        "lng": 50.37609,
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
        "id": 633,
        "name": {
            "en": "Sourp Hovhannes",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Gharghan",
        "city": "Iran",
        "address": "Gharghan, Fereydan County, Isfahan Province, Iran (Armenian Church of Gharghan / Surp Hovhannes Church)",
        "lat": 32.903827,
        "lng": 50.3673688,
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
        "id": 634,
        "name": {
            "en": "Sourp Hovhannes",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Upper Khuygan",
        "city": "Iran",
        "address": "Upper Khuygan, Fereydunshahr area, Isfahan Province, Iran (St. Hovhannes Church / Holy John Church)",
        "lat": 32.85,
        "lng": 50.4,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 635,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Maku",
        "city": "Iran",
        "address": "Dzordzor Chapel (Chapel of the Holy Mother of God), near Barun village, Maku County, West Azerbaijan Province, Iran",
        "lat": 39.1878,
        "lng": 44.4761,
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
        "id": 636,
        "name": {
            "en": "Thaddeus Monastry",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Maku",
        "city": "Iran",
        "address": "St. Thaddeus Monastery (Qara Kelisa / Kara Kilise)",
        "lat": 39.0922,
        "lng": 44.5444,
        "description": {
            "en": "St. Thaddeus Monastery, also called Qareh Kalisa, is one of the oldest Christian churches still standing today. The first version of the building would have been built in the first century, either by the apostle Thaddeus himself, or by worshippers at his burial site.",
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
        "id": 637,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Mahlazan",
        "city": "Iran",
        "address": "Church of the Holy Cross (Sourb Khatch), Mahlazan (Mahlazan village), West Azerbaijan Province, Iran",
        "lat": 39.0715,
        "lng": 44.385,
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
        "id": 638,
        "name": {
            "en": "St. Sarkis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Khoy",
        "city": "Iran",
        "address": "Khoy, West Azerbaijan Province, Iran (Saint Sarkis Church / Surp Sarkis, medieval Armenian Apostolic church in Khoy)",
        "lat": 38.5519,
        "lng": 44.9419,
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
        "id": 639,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Haftvan",
        "city": "Iran",
        "address": "St. George Church (Sourb Gevorg), Haftvan, Salmas County, West Azerbaijan Province, Iran",
        "lat": 38.17,
        "lng": 44.7565,
        "description": {
            "en": "numerous villages in the region of Salmas were inhabited by Armenians until the beginning of the twentieth century. The writer Raffi was born there in 1835, in the village of Pekajik (Payajuk in Armenian), and the family of the tennis player Andre Agassi is also from Salmas.",
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
        "id": 640,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tabriz",
        "city": "Iran",
        "address": "Rasta Kucheh Aghzi Square (Armenian Quarter), Tabriz, East Azerbaijan Province, Iran",
        "lat": 38.0816,
        "lng": 46.2937,
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
        "id": 641,
        "name": {
            "en": "Armenian Museum O Tabriz",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Tabriz",
        "city": "Iran",
        "address": "Tabriz, Rasta Kucheh Aghzi Square (Armenian Quarter), East Azerbaijan Province, Iran",
        "lat": 38.0718,
        "lng": 46.2863,
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
        "id": 642,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tabriz",
        "city": "Iran",
        "address": "Maralan neighborhood (historic Armenian quarter), Tabriz, East Azerbaijan Province, Iran",
        "lat": 38.0719,
        "lng": 46.3086,
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
        "id": 643,
        "name": {
            "en": "St. Sarkis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tabriz",
        "city": "Iran",
        "address": "Lilava neighborhood (historic Armenian quarter), Tabriz, East Azerbaijan Province, Iran",
        "lat": 38.0696,
        "lng": 46.2918,
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
        "id": 644,
        "name": {
            "en": "Shoghakat",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tabriz",
        "city": "Iran",
        "address": "Shoghakat Church (Armenian Cemetery of Tabriz), Charm Street / Bolvar-e Mollasadra area, Tabriz, East Azerbaijan Province, Iran",
        "lat": 38.0562,
        "lng": 46.2839,
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
        "id": 645,
        "name": {
            "en": "St. John",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Maragheh",
        "city": "Iran",
        "address": "Maragheh, East Azerbaijan Province, Iran (Saint John / Hovhannes Church, Gilaslu Street / Imam Khomeini St. area)",
        "lat": 37.3876,
        "lng": 46.2339,
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
        "id": 646,
        "name": {
            "en": "Sourp Hovvi",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Julfa",
        "city": "Iran",
        "address": "West of Jolfa, near the Aras River, Jolfa County, East Azerbaijan Province, Iran",
        "lat": 38.9754,
        "lng": 45.5729,
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
        "id": 647,
        "name": {
            "en": "St. Stephen",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Julfa",
        "city": "Iran",
        "address": "Near Daran village, Jolfa County, East Azerbaijan Province, Iran",
        "lat": 38.9789,
        "lng": 45.4733,
        "description": {
            "en": "St. Stephen’s Monastery (Sourb Stepanos), called Maghardavank in Armenian, has a breathtaking interior. Its construction dates back to the ninth century, but it was restored in the seventeenth century. Today, it’s registered as a UNESCO World Heritage Site.",
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
        "id": 648,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Julfa",
        "city": "Iran",
        "address": "Jolfa, East Azerbaijan Province, Iran (Armenian Church of the Holy Mother of God / Surb Astvatsatsin, Old Julfa area near the Aras River)",
        "lat": 38.9402,
        "lng": 45.6287,
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
        "id": 649,
        "name": {
            "en": "St. John",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Julfa",
        "city": "Iran",
        "address": "Old Julfa (historic Armenian city), Jolfa County, East Azerbaijan Province, Iran",
        "lat": 38.945,
        "lng": 45.63,
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
        "id": 650,
        "name": {
            "en": "St. Sarkis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Julfa",
        "city": "Iran",
        "address": "Old Julfa (historic Armenian city), Jolfa County, East Azerbaijan Province, Iran",
        "lat": 38.9445,
        "lng": 45.6312,
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
        "id": 651,
        "name": {
            "en": "St. Andreas",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Julfa",
        "city": "Iran",
        "address": "Old Julfa (historic Armenian city), Jolfa County, East Azerbaijan Province, Iran",
        "lat": 38.9453,
        "lng": 45.632,
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
        "id": 652,
        "name": {
            "en": "St. Gevorg",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Julfa",
        "city": "Iran",
        "address": "Old Julfa (historic Armenian city), Jolfa County, East Azerbaijan Province, Iran",
        "lat": 38.9448,
        "lng": 45.633,
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
        "id": 653,
        "name": {
            "en": "St. Mary",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bandar-e Anzali",
        "city": "Iran",
        "address": "Bandar-e Anzali, Gilan Province, Iran (Armenian St. Mary Church, near Shahrdari Square / city center)",
        "lat": 37.4686,
        "lng": 49.4622,
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
        "id": 654,
        "name": {
            "en": "Antranik",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bandar-e Anzali",
        "city": "Iran",
        "address": "Bandar-e Anzali, Gilan Province, Iran (Restaurant Antranik / Andranik Restaurant, near the old city center / municipality area)",
        "lat": 37.4711,
        "lng": 49.4608,
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
        "id": 655,
        "name": {
            "en": "St. Mesrop",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bandar-e Anzali",
        "city": "Iran",
        "address": "Bandar-e Anzali, Gilan Province, Iran (Armenian Apostolic Church of St. Mesrop, near the Armenian cemetery / city center area)",
        "lat": 37.4719,
        "lng": 49.4629,
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
        "id": 656,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Shiraz",
        "city": "Iran",
        "address": "Shiraz, Fars Province, Iran (Armenian Church of the Holy Mother of God / Surb Astvatsatsin, near the Armenian cemetery on the northern edge of the city)",
        "lat": 29.6553,
        "lng": 52.5351,
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
        "id": 657,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Hamedan",
        "city": "Iran",
        "address": "Hamedan, Hamadan Province, Iran (Armenian Evangelical Church / Holy Mother of God Church, Armenian quarter near central Hamedan)",
        "lat": 34.8006,
        "lng": 48.5147,
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
        "id": 658,
        "name": {
            "en": "St. Stephen",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Hamedan",
        "city": "Iran",
        "address": "Hamedan, Hamadan Province, Iran (Armenian St. Stephen Church / Surb Stepanos, historic Armenian quarter near central Hamedan)",
        "lat": 34.8032,
        "lng": 48.5098,
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
        "id": 659,
        "name": {
            "en": "Armenian Migration",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Hamedan",
        "city": "Iran",
        "address": "Hamedan, Hamadan Province, Iran (former Armenian Evangelical Church / Sourb Astvatsatsin site, central Armenian quarter near Shohada Square area)",
        "lat": 34.8009,
        "lng": 48.5144,
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
        "id": 660,
        "name": {
            "en": "St. Mesrop",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Mashhad",
        "city": "Iran",
        "address": "Mashhad, Razavi Khorasan Province, Iran (Armenian St. Mesrop Church / Deh Dey Square – Janbazan area, near central Mashhad)",
        "lat": 36.3116,
        "lng": 59.5702,
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
        "id": 661,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Baghdad",
        "city": "Iraq",
        "address": "St. Gregory the Illuminator Cathedral, Al-Tayaran Square, Al-Jadriya district, Baghdad, Iraq",
        "lat": 33.0,
        "lng": 19.0,
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
        "id": 662,
        "name": {
            "en": "Armenian Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Baghdad",
        "city": "iraq",
        "address": "Armenian Evangelical Church, 8CH7+7J3, Baghdad, Baghdad Governorate, Iraq",
        "lat": 33.3281376,
        "lng": 44.4140458,
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
        "id": 663,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Baghdad",
        "city": "iraq",
        "address": "The Church of the Holy Mother of God (Surp Asdvadzadzin), Camp Sarah (Dora), Baghdad, Baghdad Governorate, Iraq",
        "lat": 33.261412,
        "lng": 44.392099,
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
        "id": 664,
        "name": {
            "en": "Our Lady Of The Flowers",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Baghdad",
        "city": "iraq",
        "address": "Armenian Catholic Church of Our Lady of the Flowers (Saydat az-Zohour), Karrada district, Baghdad, Baghdad Governorate, Iraq",
        "lat": 33.305801,
        "lng": 44.434593,
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
        "id": 665,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Basra",
        "city": "Iraq",
        "address": "Church of the Holy Mother of God (Surp Asdvadzadzin), Old Basra (Al Basrah Al Qadimah), Basra, Basra Governorate, Iraq",
        "lat": 30.5085,
        "lng": 47.7804,
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
        "id": 666,
        "name": {
            "en": "Nerses The Gracfull",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Duhok",
        "city": "Iraq",
        "address": "Church of St. Nerses the Graceful (Surp Nerses Shnorhali), Qazi Mohammad Road, Duhok, Duhok Governorate, Iraq",
        "lat": 36.0,
        "lng": 51.0,
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
        "id": 667,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Zakho",
        "city": "Iraq",
        "address": "Church of the Holy Mother of God (Surp Asdvadzadzin), Zakho, Duhok Governorate, Iraq",
        "lat": 37.144,
        "lng": 42.685,
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
        "id": 668,
        "name": {
            "en": "Avrzog Miri",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Avrzog Miri",
        "city": "Iraq",
        "address": "Avrzog Miri (Avrzog Miri village), Duhok Governorate, Kurdistan Region, Iraq",
        "lat": 37.0944,
        "lng": 43.0606,
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
        "id": 669,
        "name": {
            "en": "St. Vartan",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Avrzog Miri",
        "city": "Iraq",
        "address": "St. Vartan Armenian Apostolic Church, Avzrog Miri, Simele District, Duhok Governorate, Iraq",
        "lat": 36.9363,
        "lng": 42.6286,
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
        "id": 670,
        "name": {
            "en": "Havresk",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Havresk",
        "city": "Iraq",
        "address": "Havresk village, Alqosh District, Duhok Governorate, Kurdistan Region, Iraq",
        "lat": 36.6992,
        "lng": 43.0878,
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
        "id": 671,
        "name": {
            "en": "St. Hripsime",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Havresk",
        "city": "Iraq",
        "address": "St. Hripsime Armenian Apostolic Church, Havresk village, Alqosh District, Duhok Governorate, Iraq",
        "lat": 36.6993,
        "lng": 43.0879,
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
        "id": 672,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Erbil",
        "city": "Iraq",
        "address": "Erbil, Ankawa district, Erbil Governorate, Kurdistan Region, Iraq",
        "lat": 36.216,
        "lng": 43.996,
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
        "id": 673,
        "name": {
            "en": "Nazeli",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Erbil",
        "city": "Iraq",
        "address": "Nazeli Restaurant",
        "lat": 36.2205,
        "lng": 43.9952,
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
        "id": 674,
        "name": {
            "en": "Levant",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Erbil",
        "city": "Iraq",
        "address": "Levant Restaurant",
        "lat": 36.2213,
        "lng": 43.9968,
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
        "id": 675,
        "name": {
            "en": "St. Vartan",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Kirkuk",
        "city": "Iraq",
        "address": "Armenian Church, F9HJ+HCH, Kirkuk, Kirkuk Governorate, Iraq",
        "lat": 35.4789313,
        "lng": 44.381125,
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
        "id": 676,
        "name": {
            "en": "Christ Church Cathedral",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Dublin",
        "city": "Ireland",
        "address": "Khachkar (Armenian Genocide Memorial), Christ Church Cathedral, Dublin 8, Ireland",
        "lat": 53.3439,
        "lng": -6.2716,
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
        "id": 677,
        "name": {
            "en": "Gapo",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Listowel",
        "city": "Ireland",
        "address": "24 Lower William Street, Listowel, Co. Kerry, V31 RY86, Ireland",
        "lat": 52.4464767,
        "lng": -9.4860154,
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
        "id": 678,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7733,
        "lng": 35.2283,
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
        "id": 679,
        "name": {
            "en": "the Armenian Patriarchate of Jerusalem,",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Armenian Patriarchate of Jerusalem, Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7737,
        "lng": 35.229,
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
        "id": 680,
        "name": {
            "en": "St. James",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Cathedral of St. James (Sourp Hagop), Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7736,
        "lng": 35.2292,
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
        "id": 681,
        "name": {
            "en": "Sts. Tarkmanchats",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Sts. Targmantchats School, Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7741,
        "lng": 35.2294,
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
        "id": 682,
        "name": {
            "en": "St. Toros",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Church of St. Toros (Sourp Kevork / St. Toros Chapel), Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7735,
        "lng": 35.2295,
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
        "id": 683,
        "name": {
            "en": "Archangels",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Church of the Holy Archangels, Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7734,
        "lng": 35.2296,
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
        "id": 684,
        "name": {
            "en": "Calouste Gulbenkian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Calouste Gulbenkian Library, Armenian Patriarchate of Jerusalem, Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7737,
        "lng": 35.2291,
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
        "id": 685,
        "name": {
            "en": "Alex And Marie Manoogian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Alex & Marie Manoogian Seminary, Armenian Patriarchate of Jerusalem, Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7738,
        "lng": 35.2293,
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
        "id": 686,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Armenian Museum of Jerusalem, Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7736,
        "lng": 35.229,
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
        "id": 687,
        "name": {
            "en": "Armenian Tavern",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Armenian Tavern Restaurant, Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.774,
        "lng": 35.2289,
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
        "id": 688,
        "name": {
            "en": "Bulghourji",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Bulghourji Restaurant, Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7741,
        "lng": 35.2287,
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
        "id": 689,
        "name": {
            "en": "Mardig",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Mardig Minimarket, 52GV+C52, Erbil, Iraq",
        "lat": 36.1760216,
        "lng": 44.0428903,
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
        "id": 690,
        "name": {
            "en": "Mardig",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Erbil",
        "city": "Iraq",
        "address": "Mardig Minimarket, 52GV+C52, Erbil, Erbil Governorate, Iraq",
        "lat": 36.1760216,
        "lng": 44.0428903,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 691,
        "name": {
            "en": "Curch Of Holy Sepulcher",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Church of the Holy Sepulchre, Christian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7785,
        "lng": 35.2296,
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
        "id": 692,
        "name": {
            "en": "Armenian Catholic",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Armenian Catholic Patriarchate of Jerusalem, Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7741,
        "lng": 35.2288,
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
        "id": 693,
        "name": {
            "en": "Yerevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Yerevan restaurant, Old City, Jerusalem, Israel",
        "lat": 31.778564,
        "lng": 35.226654,
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
        "id": 694,
        "name": {
            "en": "Holy Savior",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Armenian Church of the Holy Saviour (Surp Prgich), Armenian Quarter, Old City, Jerusalem, Israel",
        "lat": 31.7739,
        "lng": 35.2293,
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
        "id": 695,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Armenian Cemetery, Mount Zion, Jerusalem, Israel",
        "lat": 31.7696,
        "lng": 35.2282,
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
        "id": 696,
        "name": {
            "en": "Aro Sandrouni",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Harout Sandrouni Workshop",
        "lat": 31.776,
        "lng": 35.2287,
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
        "id": 697,
        "name": {
            "en": "George And Dorin Sandrouni",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Sandrouni Armenian Ceramic Center",
        "lat": 39.0,
        "lng": 31.7786,
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
        "id": 698,
        "name": {
            "en": "Vic's Art Studio",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Vic Lepejian Armenian Ceramics & Pottery",
        "lat": 77.0,
        "lng": 31.7752,
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
        "id": 699,
        "name": {
            "en": "Balian",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Balian Armenian Ceramics of Jerusalem, 75 Nablus Road, East Jerusalem, Israel",
        "lat": 31.7762,
        "lng": 35.2291,
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
        "id": 700,
        "name": {
            "en": "Arman Darian",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Arman Darian, Darian Armenian Gallery & Ceramics, 12 Shlomzion Hamalka Street, Jerusalem, Israel",
        "lat": 31.7801,
        "lng": 35.2219,
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
        "id": 701,
        "name": {
            "en": "Nativity",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jerusalem",
        "city": "Israel",
        "address": "Basilica of the Nativity, Manger Square, Bethlehem, State of Palestine",
        "lat": 31.7054,
        "lng": 35.2074,
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
        "id": 702,
        "name": {
            "en": "Yerevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Jericho",
        "city": "Palestine",
        "address": "Restaurant Yerevan, VF6R+9H2, Jericho, West Bank, Palestine",
        "lat": 31.8616,
        "lng": 35.453,
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
        "id": 703,
        "name": {
            "en": "Saint Nicholas",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jaffa",
        "city": "Israel",
        "address": "Saint Nicholas Church & Monastery, Greek Orthodox compound, Old Jaffa, Tel Aviv–Yafo, Israel",
        "lat": 32.0522,
        "lng": 34.7524,
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
        "id": 704,
        "name": {
            "en": "St. Yeghya",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Haifa",
        "city": "Israel",
        "address": "Armenian Church of St. Yeghia (khachkar in courtyard), Wadi Nisnas / Mount Carmel area, Haifa, Israel",
        "lat": 32.8199,
        "lng": 34.9872,
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
        "id": 705,
        "name": {
            "en": "Cardinal Agaganian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Rome",
        "city": "Italy",
        "address": "Church of St. Nicholas of Tolentino (Chiesa di San Nicola da Tolentino), Via San Nicola da Tolentino, Rome, Italy",
        "lat": 41.9036,
        "lng": 12.4897,
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
        "id": 706,
        "name": {
            "en": "St. Blaise",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Rome",
        "city": "Italy",
        "address": "San Biagio degli Armeni (Armenian Church of Saint Blaise), Via Giulia, Rome, Italy",
        "lat": 41.8969,
        "lng": 12.4686,
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
        "id": 707,
        "name": {
            "en": "Holly Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Venice",
        "city": "Italy",
        "address": "Church of the Holy Cross of the Armenians (Chiesa della Santa Croce degli Armeni), Calle degli Armeni, Venice, Italy",
        "lat": 45.4337,
        "lng": 12.3336,
        "description": {
            "en": "Access to the church once a month via a small street near  st Marc Basilica",
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
        "id": 708,
        "name": {
            "en": "Moorat Raphael",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Venice",
        "city": "Italy",
        "address": "Moorat-Raphael Armenian College (Collegio Armeno Moorat-Raphael), San Servolo Island / Venice, Italy",
        "lat": 45.4253,
        "lng": 12.3552,
        "description": {
            "en": "1997. Today, the palace hosts exhibitions staged by the Venice Biennale, along with a small Museum of the 2018 Armenian Revolution and an Armenian library.",
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
        "id": 709,
        "name": {
            "en": "Saint Lazzar",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Venice",
        "city": "Italy",
        "address": "San Lazzaro degli Armeni (Monastery of San Lazzaro of the Armenians), Venice Lagoon, Venice, Italy",
        "lat": 45.4189,
        "lng": 12.3445,
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
        "id": 710,
        "name": {
            "en": "St. Forty Martyrs",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Milan",
        "city": "Italy",
        "address": "Via Jommelli, 30, 20131 Milano, Italy",
        "lat": 45.4817,
        "lng": 9.2249,
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
        "id": 711,
        "name": {
            "en": "Casa Armena",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Milan",
        "city": "Italy",
        "address": "Piazza Velasca, 4, 20122 Milano, Italy",
        "lat": 45.4619,
        "lng": 9.1885,
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
        "id": 712,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Milan",
        "city": "Italy",
        "address": "Via Jommelli, 30, 20131 Milano, Italy",
        "lat": 45.4817,
        "lng": 9.2249,
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
        "id": 713,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Milan",
        "city": "Italy",
        "address": "Piazza Sant’Ambrogio, 20123 Milano, Italy",
        "lat": 45.4625,
        "lng": 9.1759,
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
        "id": 714,
        "name": {
            "en": "the church of bartholomew of the armenians",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Geno",
        "city": "Italy",
        "address": "Piazza Sant’Ambrogio, 1, 20123 Milano, Italy",
        "lat": 45.4624,
        "lng": 9.1758,
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
        "id": 715,
        "name": {
            "en": "Ararat restaurant and wine bar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Florence",
        "city": "Italy",
        "address": "Via dei Servi, 17R, 50122 Firenze, Italy",
        "lat": 43.7731,
        "lng": 11.2587,
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
        "id": 716,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Livorno",
        "city": "Italy",
        "address": "Via della Madonna, 36, 57123 Livorno, Italy",
        "lat": 43.5516,
        "lng": 10.3083,
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
        "id": 717,
        "name": {
            "en": "St. Gregory The Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Naples",
        "city": "Italy",
        "address": "Via San Gregorio Armeno, 51, 80138 Napoli NA, Italy",
        "lat": 40.8502,
        "lng": 14.2576,
        "description": {
            "en": "Contains the relics of St. GRegory The illuminator",
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
        "id": 718,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Naples",
        "city": "Italy",
        "address": "Khachkar of St. Gregory the Armenian, Via San Gregorio Armeno, 51, 80138 Napoli NA, Italy",
        "lat": 40.8503,
        "lng": 14.2577,
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
        "id": 719,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Nardo",
        "city": "Italy",
        "address": "Statue of Gregory the Illuminator, Piazza Salandra, 73048 Nardò",
        "lat": 40.176,
        "lng": 18.0315,
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
        "id": 720,
        "name": {
            "en": "St. Mary Of The Armenians",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Matera",
        "city": "Italy",
        "address": "Chiesa di Santa Maria de Armenis, Via Madonna delle Virtù (Sassi di Matera), 75100 Matera MT, Italy",
        "lat": 40.666,
        "lng": 16.6115,
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
        "id": 721,
        "name": {
            "en": "St. Mary Of The Armenians",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Forenzo",
        "city": "Italy",
        "address": "Chiesa di Santa Maria degli Armeni, Strada Provinciale 66 di Forenza Scalo, 85023 Forenza (PZ), Italy",
        "lat": 40.8659,
        "lng": 15.8422,
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
        "id": 722,
        "name": {
            "en": "St. Andrew Of The Armenians",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Taranto",
        "city": "Italy",
        "address": "Chiesa di Sant’Andrea degli Armeni, Piazzetta Monteoliveto, 74123 Taranto TA, Italy",
        "lat": 40.47497,
        "lng": 17.22988,
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
        "id": 723,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Ancona",
        "city": "Italy",
        "address": "Chiesa di San Gregorio Illuminatore, Ancona, Italy",
        "lat": 43.6159,
        "lng": 13.5189,
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
        "id": 724,
        "name": {
            "en": "Taverna Yerevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Syracuse",
        "city": "Italy",
        "address": "Taverna Yerevan, Via Francesco Crispi, 48, 96100 Siracusa SR, Italy",
        "lat": 37.06764,
        "lng": 15.28289,
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
        "id": 725,
        "name": {
            "en": "St. Thaddeus",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Amman",
        "city": "Jordan",
        "address": "St. Thaddeus Armenian Apostolic Church, Al-Shefaa Street (Jabal Al-Ashrafiyeh), Amman, Jordan",
        "lat": 31.94123,
        "lng": 35.9335,
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
        "id": 726,
        "name": {
            "en": "Homentmen",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Amman",
        "city": "Jordan",
        "address": "Homenetmen Club (Homenetmen Amman), Ashrafieh, Amman, Jordan",
        "lat": 31.9603,
        "lng": 35.9309,
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
        "id": 727,
        "name": {
            "en": "Youzbashian-Gulbenkian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Amman",
        "city": "Jordan",
        "address": "Yuzbashian–Gulbenkian Armenian School, Hatem Al-Taee Street, Jabal Al-Ashrafiyeh, Amman, Jordan",
        "lat": 31.9606,
        "lng": 35.9307,
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
        "id": 728,
        "name": {
            "en": "Sts. Sahag and Mesrop",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Amman",
        "city": "Jordan",
        "address": "Church of St. Sahag and St. Mesrob (Armenian Catholic Church), Hatem Al-Taee Street, Jabal Al-Ashrafiyeh, Amman, Jordan",
        "lat": 31.9606,
        "lng": 35.9308,
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
        "id": 729,
        "name": {
            "en": "Joseph",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Amman",
        "city": "Jordan",
        "address": "Joseph Ceramics, Ibn Tofail Street, Jabal Al-Weibdeh, Amman, Jordan",
        "lat": 31.95685,
        "lng": 35.9277,
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
        "id": 730,
        "name": {
            "en": "Levant",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Amman",
        "city": "Jordan",
        "address": "Levant Restaurant, 3rd Circle (Methqal Al Fayez Street), Amman, Jordan",
        "lat": 31.9587,
        "lng": 35.8959,
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
        "id": 731,
        "name": {
            "en": "Rita's",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Amman",
        "city": "Jordan",
        "address": "Rita’s Armenian Lahmajoun (Rita’s Armenian Kitchen), At Tufayl Ben An Nu’man Street, Al Yasmin, Amman, Jordan",
        "lat": 31.9549,
        "lng": 35.8732,
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
        "id": 732,
        "name": {
            "en": "St. Garabed",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jordan River",
        "city": "Jordan",
        "address": "St. Garabed Armenian Chapel (Jordan River Baptism Site area), Al-Maghtas, Jordan River, Jordan",
        "lat": 31.8379,
        "lng": 35.5496,
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
        "id": 733,
        "name": {
            "en": "St. Karapet",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Almaty",
        "city": "Kazakhstan",
        "address": "Church of St. Karapet — Almaty, Kazakhstan",
        "lat": 43.329712,
        "lng": 76.950589,
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
        "id": 734,
        "name": {
            "en": "Nash Dvor",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Almaty",
        "city": "Kazakhstan",
        "address": "Kabanbay Batyr St 40, Almaty 050000, Kazakhstan",
        "lat": 43.250788,
        "lng": 76.9625672,
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
        "id": 735,
        "name": {
            "en": "Arax",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Almaty",
        "city": "Kazakhstan",
        "address": "Abay Ave 107a (corner of Mirzoyan St), Almaty, Kazakhstan",
        "lat": 43.2405662,
        "lng": 76.912918,
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
        "id": 736,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Nur-Sultan",
        "city": "Kazakhstan",
        "address": "Palace of Peace and Reconciliation (khachkar monument area), Astana, Kazakhstan",
        "lat": 51.1231,
        "lng": 71.4636,
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
        "id": 737,
        "name": {
            "en": "Nairi",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Karaganda",
        "city": "Kazakhstan",
        "address": "Shakhterov Ave 33/2, Karaganda 100026, Kazakhstan",
        "lat": 49.774633,
        "lng": 73.127913,
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
        "id": 738,
        "name": {
            "en": "Drevniy Rim",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Karaganda",
        "city": "Kazakhstan",
        "address": "Ulitsa Zavodskaya 25/3, Karaganda 100000, Kazakhstan",
        "lat": 49.8194444,
        "lng": 73.0513889,
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
        "id": 739,
        "name": {
            "en": "Urartu",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Karaganda",
        "city": "Kazakhstan",
        "address": "Säken Seifullin Ave 7/1, Karaganda, Kazakhstan",
        "lat": 49.805378,
        "lng": 73.065895,
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
        "id": 740,
        "name": {
            "en": "Tsar Tigran",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Karaganda",
        "city": "Kazakhstan",
        "address": "Pichugin St 5, Karaganda 100000, Kazakhstan",
        "lat": 49.816776,
        "lng": 73.121832,
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
        "id": 741,
        "name": {
            "en": "Dvin",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Pavlodar",
        "city": "Kazakhstan",
        "address": "Ulitsa Puteyskaya 2/7, Pavlodar 140000, Kazakhstan",
        "lat": 52.305525,
        "lng": 76.958878,
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
        "id": 742,
        "name": {
            "en": "Akhtamar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Pavlodar",
        "city": "Kazakhstan",
        "address": "Kamzin St 67/1, Pavlodar 140011, Kazakhstan",
        "lat": 52.274906,
        "lng": 76.989237,
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
        "id": 743,
        "name": {
            "en": "Mangal",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Pavlodar",
        "city": "Kazakhstan",
        "address": "Suvorov St 4–6, Pavlodar 140000, Kazakhstan",
        "lat": 52.286685,
        "lng": 76.970665,
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
        "id": 744,
        "name": {
            "en": "Tandyrny Dvorik",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Pavlodar",
        "city": "Kazakhstan",
        "address": "Yestay St 81, Pavlodar 140003, Kazakhstan",
        "lat": 52.281228,
        "lng": 76.960122,
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
        "id": 745,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Pavlodar",
        "city": "Kazakhstan",
        "address": "Kenesary St / Republic Ave area, Astana, Kazakhstan",
        "lat": 51.128,
        "lng": 71.4304,
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
        "id": 746,
        "name": {
            "en": "Urartu",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Petropavl",
        "city": "Kazakhstan",
        "address": "Internatsionalnaya St 4, Petropavl 150000, Kazakhstan",
        "lat": 54.8756,
        "lng": 69.1397,
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
        "id": 747,
        "name": {
            "en": "Artsakh",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Aktobe",
        "city": "Kazakhstan",
        "address": "Az Nauryz St 39, Aktobe 030000, Kazakhstan",
        "lat": 50.2902,
        "lng": 57.1676,
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
        "id": 748,
        "name": {
            "en": "Taron",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Aktobe",
        "city": "Kazakhstan",
        "address": "Aiteke Bi St 104, Aktobe, Kazakhstan",
        "lat": 50.2869,
        "lng": 57.1663,
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
        "id": 749,
        "name": {
            "en": "Urartu",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Aktobe",
        "city": "Kazakhstan",
        "address": "Sankibay Batyr Ave 137, Aktobe, Kazakhstan",
        "lat": 50.299,
        "lng": 57.1705,
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
        "id": 750,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Aktobe",
        "city": "Kazakhstan",
        "address": "Khachkar at Assumption Cathedral courtyard, Astana",
        "lat": 51.1289,
        "lng": 71.4309,
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
        "id": 751,
        "name": {
            "en": "Mayar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kuwait",
        "city": "Kuwait",
        "address": "104 St, Sharq (behind Boubyan Bank, near Kuwait Stock Exchange area), Kuwait City, Kuwait",
        "lat": 29.3751,
        "lng": 47.9898,
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
        "id": 752,
        "name": {
            "en": "St. Vartan",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Kuwait",
        "city": "Kuwait",
        "address": "Block 3, Salmiya (Armenian Church complex area), Kuwait City, Kuwait",
        "lat": 29.3398,
        "lng": 48.0872,
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
        "id": 753,
        "name": {
            "en": "Almayyas",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kuwait",
        "city": "Kuwait",
        "address": "Street 3, Khaled Zaid Al-Khaled Complex, Salmiya, Kuwait City, Kuwait",
        "lat": 29.338314,
        "lng": 48.050871,
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
        "id": 754,
        "name": {
            "en": "Armenian National",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Kuwait",
        "city": "Kuwait",
        "address": "Block 2, Street 4, Surra (near Adailiya), Kuwait City, Kuwait",
        "lat": 29.3306,
        "lng": 47.9894,
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
        "id": 755,
        "name": {
            "en": "Ochag",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bishkek",
        "city": "Kyrgyzstan",
        "address": "Turgeneva St 91A, Bishkek, Kyrgyzstan",
        "lat": 42.8759,
        "lng": 74.5882,
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
        "id": 756,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Riga",
        "city": "Latvia",
        "address": "Kojusalas iela 5, Riga, LV-1003, Latvia",
        "lat": 56.9378,
        "lng": 24.1419,
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
        "id": 757,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Riga",
        "city": "Latvia",
        "address": "Bastejkalna Park, near the canal / Freedom Monument area, Riga, Latvia",
        "lat": 56.9506,
        "lng": 24.1049,
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
        "id": 758,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Riga",
        "city": "Latvia",
        "address": "Dzirnavu iela 62, Riga, Latvia",
        "lat": 56.9529,
        "lng": 24.1166,
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
        "id": 759,
        "name": {
            "en": "Aragats",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Riga",
        "city": "Latvia",
        "address": "Jura Alun?na iela 2A, Riga, Latvia",
        "lat": 56.9517,
        "lng": 24.1113,
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
        "id": 760,
        "name": {
            "en": "Akhtamar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Riga",
        "city": "Latvia",
        "address": "Mat?sa iela 38, Riga, Latvia",
        "lat": 56.9577,
        "lng": 24.1376,
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
        "id": 761,
        "name": {
            "en": "Erebuni",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Riga",
        "city": "Latvia",
        "address": "Augusta Deglava iela 55B, Riga, Latvia",
        "lat": 56.9436,
        "lng": 24.183,
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
        "id": 762,
        "name": {
            "en": "Dzulieta",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Riga",
        "city": "Latvia",
        "address": "L??pl?ša iela 78, Riga, Latvia",
        "lat": 56.9563,
        "lng": 24.1211,
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
        "id": 763,
        "name": {
            "en": "Za?ais d?rzs",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Riga",
        "city": "Latvia",
        "address": "Liep?jas iela 19, Riga, Latvia",
        "lat": 56.9466,
        "lng": 24.0907,
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
        "id": 764,
        "name": {
            "en": "Zangezur",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Jurmala",
        "city": "Latvia",
        "address": "Jomas iela 80, Majori, J?rmala, Latvia",
        "lat": 56.9742161,
        "lng": 23.8091292,
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
        "id": 765,
        "name": {
            "en": "Yerevan Pantok",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Jurmala",
        "city": "Latvia",
        "address": "Jomas iela 25, Majori, J?rmala, Latvia",
        "lat": 56.9723913,
        "lng": 23.7954499,
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
        "id": 766,
        "name": {
            "en": "Nojan Tapan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Jurmala",
        "city": "Latvia",
        "address": "Asaru prospekts 15, Asari, J?rmala, Latvia",
        "lat": 56.9593954,
        "lng": 23.6892157,
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
        "id": 767,
        "name": {
            "en": "St. Nishan",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "VGW2+34Q, Downtown Beirut, Beirut, Lebanon",
        "lat": 33.8952,
        "lng": 35.500353,
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
        "id": 768,
        "name": {
            "en": "Sts. Elias And Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Debbas Square, Downtown Beirut, Beirut, Lebanon",
        "lat": 33.8959,
        "lng": 35.5004,
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
        "id": 769,
        "name": {
            "en": "Haigazian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Rue du Mexique, Kantari, Beirut, Lebanon",
        "lat": 33.8938,
        "lng": 35.4849,
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
        "id": 770,
        "name": {
            "en": "First Evangelical armenian",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Rue Mexique (Mexique Street), Kantari, Beirut, Lebanon",
        "lat": 33.8936,
        "lng": 35.4929,
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
        "id": 771,
        "name": {
            "en": "Yeprem And Martha Philibosian Evangelical College",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Mexique Street, Kantari, Beirut, Lebanon",
        "lat": 33.8936,
        "lng": 35.4929,
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
        "id": 772,
        "name": {
            "en": "Ichkhanian",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Rue Hussein Beyhum, Zokak el-Blat, Beirut, Lebanon",
        "lat": 33.8977,
        "lng": 35.496,
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
        "id": 773,
        "name": {
            "en": "Arame",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Tekeyan Cultural Center, Nahr Ibrahim Street, 5th floor, Saifi, Beirut, Lebanon",
        "lat": 33.8926,
        "lng": 35.5076,
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
        "id": 774,
        "name": {
            "en": "Tekeyan",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Nahr Ibrahim Street, Saifi, Beirut Central District, Beirut, Lebanon",
        "lat": 33.8937,
        "lng": 35.5076,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "l",
        "furtherReading": ""
    },
    {
        "id": 775,
        "name": {
            "en": "Mayrig",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "282 Pasteur Street, Mansour Building, Gemmayzeh, Beirut",
        "lat": 33.8957,
        "lng": 35.5187,
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
        "id": 776,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Armenia Street, Mar Mikhael, Beirut, Lebanon",
        "lat": 33.8968,
        "lng": 35.5256,
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
        "id": 777,
        "name": {
            "en": "Seza-Bistro Armenien",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Rue Patriarch Arida, Mar Mikhael, Beirut, Lebanon",
        "lat": 33.8959,
        "lng": 35.5319,
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
        "id": 778,
        "name": {
            "en": "Nor Hadjin",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Nor Hadjin, Beirut, Lebanon",
        "lat": 33.8968,
        "lng": 35.5348,
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
        "id": 779,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Hadjin / Mar Mikhael, Bourj Hammoud–Medawar area, Beirut, Lebanon",
        "lat": 33.8965,
        "lng": 35.5336,
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
        "id": 780,
        "name": {
            "en": "Ararad Daily",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Ararad Daily Newspaper, Mar Mikhael, Beirut",
        "lat": 33.8966,
        "lng": 35.5337,
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
        "id": 781,
        "name": {
            "en": "Armenian Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Younes Gebeili Street (Getawi area), Ashrafieh, Beirut, Lebanon",
        "lat": 33.8963,
        "lng": 35.5272,
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
        "id": 782,
        "name": {
            "en": "Armenian Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Ashrafieh (Rmeil / near Daraj el-Jdeideh area), Beirut, Lebanon",
        "lat": 33.8962,
        "lng": 35.5273,
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
        "id": 783,
        "name": {
            "en": "Massis",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Beirut, Lebanon",
        "lat": 33.897,
        "lng": 35.506,
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
        "id": 784,
        "name": {
            "en": "Sourp Hagop",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Jeitawi / Ashrafieh area, Beirut, Lebanon",
        "lat": 33.8944,
        "lng": 35.5274,
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
        "id": 785,
        "name": {
            "en": "Hayashen",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Hayashen area, Bourj Hammoud / Medawar district, Beirut, Lebanon",
        "lat": 33.8958,
        "lng": 35.533,
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
        "id": 786,
        "name": {
            "en": "Sourp Hovannu Garabed",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Hayashen / Bourj Hammoud–Medawar area, Beirut, Lebanon",
        "lat": 33.8967,
        "lng": 35.5334,
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
        "id": 787,
        "name": {
            "en": "Holy Ressurection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Karantina / Medawar area, near Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8939,
        "lng": 35.5362,
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
        "id": 788,
        "name": {
            "en": "Onno Bistro",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Beirut",
        "city": "Lebanon",
        "address": "Badaro Street, Beirut, Lebanon",
        "lat": 33.8749,
        "lng": 35.5166,
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
        "id": 789,
        "name": {
            "en": "Bourj Hammoud",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Bourj Hammoud, Metn District (Greater Beirut), Lebanon",
        "lat": 33.896,
        "lng": 35.538,
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
        "id": 790,
        "name": {
            "en": "Marash",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Marash quarter, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8963,
        "lng": 35.5369,
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
        "id": 791,
        "name": {
            "en": "Norashen",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Norashen quarter, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8959,
        "lng": 35.5385,
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
        "id": 792,
        "name": {
            "en": "Amanos",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Amanos quarter, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8968,
        "lng": 35.54,
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
        "id": 793,
        "name": {
            "en": "Sis",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Sis quarter, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8955,
        "lng": 35.5398,
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
        "id": 794,
        "name": {
            "en": "Adana",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Adana quarter, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8971,
        "lng": 35.5378,
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
        "id": 795,
        "name": {
            "en": "Aztag",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Aztag Newspaper, Armenia St Bourj Hammoud, Beirut",
        "lat": 33.8972,
        "lng": 35.537,
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
        "id": 796,
        "name": {
            "en": "Zartonk",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Armenia Street, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8974,
        "lng": 35.5373,
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
        "id": 797,
        "name": {
            "en": "Sts. Vartanants",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Bourj Hammoud (Marash / Nor Hadjin area), Beirut, Lebanon",
        "lat": 33.8969,
        "lng": 35.5359,
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
        "id": 798,
        "name": {
            "en": "Hamazkayin Lucy Tutunjian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Shaghzoyan Center, Ground Floor, Harboyan Street, Bourj Hammoud, Lebanon",
        "lat": 33.89582,
        "lng": 35.53862,
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
        "id": 799,
        "name": {
            "en": "Voice Of Van",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Voice of Van — Shaghzoyan Center, Harboyan Street, Bourj Hammoud, Lebanon",
        "lat": 33.8958,
        "lng": 35.5386,
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
        "id": 800,
        "name": {
            "en": "Vahan Tekeyan",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Vahan Tekeyan School — Baghdad Street, Bourj Hammoud, Lebanon",
        "lat": 33.8939,
        "lng": 35.5413,
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
        "id": 801,
        "name": {
            "en": "Apo",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Tiro Street, Bourj Hammoud, Lebanon",
        "lat": 33.8955,
        "lng": 35.53883,
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
        "id": 802,
        "name": {
            "en": "Noy",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Harboyan Trade Center, Moutraniye Street, Bourj Hammoud, Lebanon",
        "lat": 33.8947,
        "lng": 35.53955,
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
        "id": 803,
        "name": {
            "en": "Falafel Arax",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Arax Street, Bourj Hammoud, Lebanon",
        "lat": 33.89326,
        "lng": 35.55035,
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
        "id": 804,
        "name": {
            "en": "Arax",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Arax Street — Bourj Hammoud, Mount Lebanon, Lebanon",
        "lat": 33.8958,
        "lng": 35.5349,
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
        "id": 805,
        "name": {
            "en": "Holy Forty Martyrs",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Nor Marash (near Armenian Prelacy), Bourj Hammoud, Lebanon",
        "lat": 33.89263,
        "lng": 35.53843,
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
        "id": 806,
        "name": {
            "en": "Mesrobian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Arax Street, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.89071,
        "lng": 35.53873,
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
        "id": 807,
        "name": {
            "en": "Holy Savior",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Bourj Hammoud, Lebanon",
        "lat": 33.8833,
        "lng": 35.5333,
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
        "id": 808,
        "name": {
            "en": "St. Agnés",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8926,
        "lng": 35.5391,
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
        "id": 809,
        "name": {
            "en": "Shamalian Tatiguian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Armenian Evangelical Shamlian-Tatigian Secondary School — Marash Street (Nor Marash area), Bourj Hammoud, Lebanon",
        "lat": 33.8906,
        "lng": 35.5387,
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
        "id": 810,
        "name": {
            "en": "Armenian Genocide",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "near Yerevan Street / Armenian Genocide Square, Bourj Hammoud, Lebanon",
        "lat": 33.8919,
        "lng": 35.5368,
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
        "id": 811,
        "name": {
            "en": "Armenian Genocide",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Armenian Genocide Square — Yerevan Street, Bourj Hammoud, Lebanon",
        "lat": 33.8918,
        "lng": 35.5367,
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
        "id": 812,
        "name": {
            "en": "Ghazar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Arax Street, Bourj Hammoud, Lebanon",
        "lat": 33.8942,
        "lng": 35.5401,
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
        "id": 813,
        "name": {
            "en": "Hovig",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Marash Street, Bourj Hammoud, Lebanon",
        "lat": 33.8929,
        "lng": 35.5389,
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
        "id": 814,
        "name": {
            "en": "Ghazar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Arax Street, Bourj Hammoud, Lebanon",
        "lat": 33.8943,
        "lng": 35.5402,
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
        "id": 815,
        "name": {
            "en": "Badguer",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Badguer Cultural Center — Arax Street, near Harboyan/Baghdasarian area, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8937,
        "lng": 35.5396,
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
        "id": 816,
        "name": {
            "en": "Mano",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Arax Street, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8944,
        "lng": 35.5403,
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
        "id": 817,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Nor Adana district, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8878,
        "lng": 35.5347,
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
        "id": 818,
        "name": {
            "en": "Harout",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Harout Bakery — Arax Street, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8946,
        "lng": 35.5405,
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
        "id": 819,
        "name": {
            "en": "Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Yerevan Street, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8894,
        "lng": 35.537,
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
        "id": 820,
        "name": {
            "en": "Yerevan",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Yerevan Street — Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8896,
        "lng": 35.5372,
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
        "id": 821,
        "name": {
            "en": "Peter And Elizabeth Torosian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Peter and Elizabeth Torosian School — Yerevan Street, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8893,
        "lng": 35.5371,
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
        "id": 822,
        "name": {
            "en": "United Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "United Armenian College — Arax Street, near Yerevan Street intersection (Armenian schools district), Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.891,
        "lng": 35.5382,
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
        "id": 823,
        "name": {
            "en": "St. Sarkis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Saint Sarkis Church (Nor Sis) — Nor Sis district, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8889,
        "lng": 35.5338,
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
        "id": 824,
        "name": {
            "en": "Sahagian–Levon Mgrtichian School",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Arax Street area, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8921,
        "lng": 35.5389,
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
        "id": 825,
        "name": {
            "en": "Mekhitarist",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Mekhitarist School — Arax Street, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.893,
        "lng": 35.54,
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
        "id": 826,
        "name": {
            "en": "Hripsimiants",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Bourj Hammoud",
        "city": "Lebanon",
        "address": "Hripsimiants Catholic School — Arax Street, near the Armenian Genocide Square / Yerevan Street school district, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.8923,
        "lng": 35.5397,
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
        "id": 827,
        "name": {
            "en": "Ohannes",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "beirut",
        "city": "Lebanon",
        "address": "Hankach Street, Beirut, Lebanon",
        "lat": 33.8869,
        "lng": 35.5131,
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
        "id": 828,
        "name": {
            "en": "Ichkhanian",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Zalqa",
        "city": "Lebanon",
        "address": "WH3H+9HC, Zalka (Zalqa), Metn District, Mount Lebanon Governorate, Lebanon",
        "lat": 33.90344,
        "lng": 35.5789,
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
        "id": 829,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Zalqa",
        "city": "Lebanon",
        "address": "WH2G+RWV, Zalka (Zalqa), Metn District, Mount Lebanon, Lebanon",
        "lat": 33.90212,
        "lng": 35.57731,
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
        "id": 830,
        "name": {
            "en": "Harboyan",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Zalqa",
        "city": "Lebanon",
        "address": "Harboyan Trade Center, Off Dora Highway, Bourj Hammoud, Beirut, Lebanon",
        "lat": 33.894,
        "lng": 35.5385,
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
        "id": 831,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Antelias",
        "city": "Lebanon",
        "address": "Antelias, Armenian Catholicosate of the Great House of Cilicia, Mount Lebanon, Lebanon",
        "lat": 33.9176,
        "lng": 35.5845,
        "description": {
            "en": "In addition to the lavish St. Gregory the Illuminator Cathedral, the compound is also home to St. Stephen Chapel (Sourp Stepanos), the Holy Martyrs Memorial and the Cilicia Museum.",
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
        "id": 832,
        "name": {
            "en": "Yegishe Manougian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "debbayeh",
        "city": "Lebanon",
        "address": "Debbayeh - Haret El Bellaneh, Mount Lebanon, Lebanon",
        "lat": 33.9383,
        "lng": 35.5933,
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
        "id": 833,
        "name": {
            "en": "AGBU Demirdjian Center",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Antelias",
        "city": "Lebanon",
        "address": "Autostrade Dbayé, Naccash Exit, Antelias, Mount Lebanon, Lebanon",
        "lat": 33.9339,
        "lng": 35.5939,
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
        "id": 834,
        "name": {
            "en": "Batchig",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Antelias",
        "city": "Lebanon",
        "address": "Kassis Street, Dbayeh (Antelias), Mount Lebanon, Lebanon",
        "lat": 33.9204,
        "lng": 35.5868,
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
        "id": 835,
        "name": {
            "en": "Onno",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Antelias",
        "city": "Lebanon",
        "address": "WH9R+Q85, Naqqache (Antelias area), Mount Lebanon, Lebanon",
        "lat": 33.919386,
        "lng": 35.590874,
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
        "id": 836,
        "name": {
            "en": "Melankton And Haig Arslanian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Mezher",
        "city": "Lebanon",
        "address": "WH5W+3G9, Mezher, Lebanon",
        "lat": 33.9076608,
        "lng": 35.5963577,
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
        "id": 837,
        "name": {
            "en": "Tenjoukian",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Mezher",
        "city": "Lebanon",
        "address": "Tenjoukian Stadium (Homenetmen Aghpalian Club), Mezher (Antelias), Mount Lebanon, Lebanon",
        "lat": 33.908942,
        "lng": 35.593326,
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
        "id": 838,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Aintoura",
        "city": "Lebanon",
        "address": "Khachkar (Antoura Memorial, Collège Saint Joseph), Aintoura, Mount Lebanon, Lebanon",
        "lat": 33.9589,
        "lng": 35.634,
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
        "id": 839,
        "name": {
            "en": "Noy",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Jounieh",
        "city": "Lebanon",
        "address": "XJPP+G78, Haret Sakher (Jounieh), Mount Lebanon, Lebanon",
        "lat": 33.9862789,
        "lng": 35.6356942,
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
        "id": 840,
        "name": {
            "en": "Holy Ressurection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jounieh",
        "city": "Lebanon",
        "address": "Haret Sakher, Jounieh, Mount Lebanon, Lebanon",
        "lat": 33.9876,
        "lng": 35.6364,
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
        "id": 841,
        "name": {
            "en": "St. Rita",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Jounieh",
        "city": "Lebanon",
        "address": "Armenian Catholic Chapel of St. Rita (Ghadir) — Ghadir, Jounieh, Mount Lebanon, Lebanon",
        "lat": 33.9865,
        "lng": 35.6206,
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
        "id": 842,
        "name": {
            "en": "Lebanese Armenian Freindship",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Jounieh",
        "city": "Lebanon",
        "address": "Lebanese–Armenian Friendship Monument — Jounieh Waterfront, Haret Sakher, Jounieh, Mount Lebanon, Lebanon",
        "lat": 33.9879,
        "lng": 35.6367,
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
        "id": 843,
        "name": {
            "en": "Batchig",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Broummana",
        "city": "Lebanon",
        "address": "Broummana Villa, Broummana, Mount Lebanon, Lebanon",
        "lat": 33.884988,
        "lng": 35.635731,
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
        "id": 844,
        "name": {
            "en": "Arteen",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Broummana",
        "city": "Lebanon",
        "address": "Broumana Main Street, Broummana, Mount Lebanon, Lebanon",
        "lat": 33.88542,
        "lng": 35.638396,
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
        "id": 845,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bikfaya",
        "city": "Lebanon",
        "address": "Bikfaya, Metn District, Mount Lebanon, Lebanon",
        "lat": 33.9008,
        "lng": 35.5646,
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
        "id": 846,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Bikfaya",
        "city": "Lebanon",
        "address": "Armenian Genocide Memorial (Armenian Seminary grounds, Bikfaya / Bekfaya Monastery of the Catholicosate of Cilicia), Bikfaya, Mount Lebanon, Lebanon",
        "lat": 33.9158,
        "lng": 35.6629,
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
        "id": 847,
        "name": {
            "en": "Mkhitarist fathers",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "jbeil",
        "city": "Lebanon",
        "address": "Mekhitarist Fathers Convent (Monastère des Pères Mékhitaristes) — Jbeil (Byblos), Mount Lebanon, Lebanon",
        "lat": 34.1243,
        "lng": 35.6482,
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
        "id": 848,
        "name": {
            "en": "Our Lady Of Bzommar",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bzommar",
        "city": "Lebanon",
        "address": "Bzommar, Keserwan District, Mount Lebanon, Lebanon",
        "lat": 33.9783,
        "lng": 35.7046,
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
        "id": 849,
        "name": {
            "en": "Aram Bezikian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Byblos",
        "city": "Lebanon",
        "address": "Armenia Street, Birds’ Nest Orphanage, Byblos 4504, Lebanon",
        "lat": 34.1184689,
        "lng": 35.6482948,
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
        "id": 850,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Byblos",
        "city": "Lebanon",
        "address": "Armenia Street, Byblos (Jbeil), Lebanon",
        "lat": 34.1185,
        "lng": 35.6483,
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
        "id": 851,
        "name": {
            "en": "Ohannes",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Batroun",
        "city": "Lebanon",
        "address": "Batroun Old Souks, Batroun, Lebanon",
        "lat": 34.2557373,
        "lng": 35.6589813,
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
        "id": 852,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tripoli",
        "city": "Lebanon",
        "address": "Armenian Apostolic Church of Saint Gregory the Illuminator, Mina–Tripoli, Lebanon",
        "lat": 34.4512,
        "lng": 35.8166,
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
        "id": 853,
        "name": {
            "en": "Armenian Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Tripoli",
        "city": "Lebanon",
        "address": "Armenian Evangelical School of Tripoli, Mina–Tripoli, Lebanon",
        "lat": 34.4498,
        "lng": 35.8152,
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
        "id": 854,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Zahle",
        "city": "Lebanon",
        "address": "St. Gregory the Illuminator Armenian Church, Zahlé, Lebanon",
        "lat": 33.8486,
        "lng": 35.9022,
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
        "id": 855,
        "name": {
            "en": "Our Lady Of Fatima",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Zahle",
        "city": "Lebanon",
        "address": "Our Lady of Fatima Church, Zahlé, Lebanon",
        "lat": 33.8468,
        "lng": 35.9045,
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
        "id": 856,
        "name": {
            "en": "Holy Rosary",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "Holy Rosary Church, Anjar, Lebanon",
        "lat": 33.7277,
        "lng": 35.9316,
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
        "id": 857,
        "name": {
            "en": "St. Paul",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "St. Paul Church, Anjar, Lebanon",
        "lat": 33.7283,
        "lng": 35.9308,
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
        "id": 858,
        "name": {
            "en": "Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "Armenian Evangelical Church, Anjar, Lebanon",
        "lat": 33.7271,
        "lng": 35.9324,
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
        "id": 859,
        "name": {
            "en": "Haratch",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "Haratch Armenian School, Anjar, Lebanon",
        "lat": 33.7289,
        "lng": 35.9319,
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
        "id": 860,
        "name": {
            "en": "Anjar",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "Anjar, Beqaa Governorate, Lebanon",
        "lat": 33.7278,
        "lng": 35.9313,
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
        "id": 861,
        "name": {
            "en": "Boghos Snabian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "Boghos Snabian House Museum, Anjar, Lebanon",
        "lat": 33.7286,
        "lng": 35.9314,
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
        "id": 862,
        "name": {
            "en": "Armenian Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "Armenian Genocide Memorial Monument, Anjar, Lebanon",
        "lat": 33.7281,
        "lng": 35.9316,
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
        "id": 863,
        "name": {
            "en": "Razmig",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "Restaurant Razmig, Anjar, Lebanon",
        "lat": 33.7284,
        "lng": 35.9315,
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
        "id": 864,
        "name": {
            "en": "Naba Anjar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "Nabaa Anjar Restaurant, Anjar, Lebanon",
        "lat": 33.7335,
        "lng": 35.9446,
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
        "id": 865,
        "name": {
            "en": "Al Shams",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "Al Shams Restaurant (Anjar), Lebanon",
        "lat": 33.7337,
        "lng": 35.945,
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
        "id": 866,
        "name": {
            "en": "Armenia Homemade",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "Armenia Homemade (shop), Anjar, Lebanon",
        "lat": 33.7282,
        "lng": 35.9317,
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
        "id": 867,
        "name": {
            "en": "Anjar Art Gallery",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Anjar",
        "city": "Lebanon",
        "address": "Anjar Art Gallery, PWGH+RMH, Anjar, Lebanon",
        "lat": 33.7271,
        "lng": 35.9292,
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
        "id": 868,
        "name": {
            "en": "St. Vardan",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Vilnius",
        "city": "Lithuania",
        "address": "A. Juozapavi?iaus g. 11A, 09311 Vilnius, Lithuania",
        "lat": 54.691523,
        "lng": 25.285557,
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
        "id": 869,
        "name": {
            "en": "Achtamar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vilnius",
        "city": "Lithuania",
        "address": "S. Konarskio g. 1/2, 03109 Vilnius, Lithuania",
        "lat": 54.6808617,
        "lng": 25.261816,
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
        "id": 870,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vilnius",
        "city": "Lithuania",
        "address": "Žirm?n? g. 70, 09133 Vilnius, Lithuania",
        "lat": 54.7188427,
        "lng": 25.3027197,
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
        "id": 871,
        "name": {
            "en": "Plento Grill And Wine",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vilnius",
        "city": "Lithuania",
        "address": "Nemen?in?s pl. 33, 10105 Vilnius, Lithuania",
        "lat": 54.7346644,
        "lng": 25.338939,
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
        "id": 872,
        "name": {
            "en": "Armenian Grill",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vilnius",
        "city": "Lithuania",
        "address": "Vaidilut?s g. 9, 10100 Vilnius, Lithuania",
        "lat": 54.7322978,
        "lng": 25.2981958,
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
        "id": 873,
        "name": {
            "en": "Armenia Grill",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vilnius",
        "city": "Lithuania",
        "address": "Pilait?s pr. 65, 06200 Vilnius, Lithuania",
        "lat": 54.7109188,
        "lng": 25.1689524,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 874,
        "name": {
            "en": "Araks",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vilnius",
        "city": "Lithuania",
        "address": "Žirg? g. 2B, Raudondvaris, 14257 Vilniaus r., Lithuania",
        "lat": 54.8281094,
        "lng": 25.2771896,
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
        "id": 875,
        "name": {
            "en": "Gregory Of Narek",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Kaunas",
        "city": "Lithuania",
        "address": "Armenian Khachkar (Kaunas City Municipality Vincas Kudirka Public Library) — Laisv?s al. 57, 44305 Kaunas, Lithuania",
        "lat": 54.897189,
        "lng": 23.903587,
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
        "id": 876,
        "name": {
            "en": "Araratas",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kaunas",
        "city": "Lithuania",
        "address": "Taikos pr. 28, 50246 Kaunas, Lithuania",
        "lat": 54.9110166,
        "lng": 23.9436942,
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
        "id": 877,
        "name": {
            "en": "Kaukazas",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kaunas",
        "city": "Lithuania",
        "address": "A. Juozapavi?iaus pr. 44, 45220 Kaunas, Lithuania",
        "lat": 54.869679,
        "lng": 23.9416509,
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
        "id": 878,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Kaunas",
        "city": "Lithuania",
        "address": "Žolyno g. 2, Pagiriai, 53284 Kauno r., Lithuania",
        "lat": 54.803627,
        "lng": 23.8400901,
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
        "id": 879,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Girenai",
        "city": "Lithuania",
        "address": "Aitros g. 16, 90306 Gir?nai (Rietavas district), Lithuania",
        "lat": 55.6196018,
        "lng": 22.000805,
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
        "id": 880,
        "name": {
            "en": "Ararat All Suites",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Klaipeda",
        "city": "Lithuania",
        "address": "Liep? g. 48A, 92107 Klaip?da, Lithuania",
        "lat": 55.712955,
        "lng": 21.135493,
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
        "id": 881,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Klaipeda",
        "city": "Lithuania",
        "address": "Liep? g. 48A, 92107 Klaip?da, Lithuania",
        "lat": 55.71521,
        "lng": 21.14314,
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
        "id": 882,
        "name": {
            "en": "Pepper Gray",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Klaipeda",
        "city": "Lithuania",
        "address": "Vingio g. 21, 95203 Klaip?da, Lithuania",
        "lat": 55.6687456,
        "lng": 21.195537,
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
        "id": 883,
        "name": {
            "en": "Nairi",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Klaipeda",
        "city": "Lithuania",
        "address": "Minijos g. 169K, 94287 Klaip?da, Lithuania",
        "lat": 55.667956,
        "lng": 21.1631078,
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
        "id": 884,
        "name": {
            "en": "Armeniska Virtuve",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Palanga",
        "city": "Lithuania",
        "address": "J. Basanavi?iaus g. 13, 00216 Palanga, Lithuania",
        "lat": 55.91738,
        "lng": 21.061,
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
        "id": 885,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Palanga",
        "city": "Lithuania",
        "address": "Vytauto g. 149A, 00169 Palanga, Lithuania",
        "lat": 55.91595,
        "lng": 21.06935,
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
        "id": 886,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Siauliai",
        "city": "Lithuania",
        "address": "Hill of Crosses (Kryži? kalnas), Jurgai?iai / Domantai, 81439 Šiauliai district, Lithuania",
        "lat": 55.59484,
        "lng": 23.42735,
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
        "id": 887,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Siauliai",
        "city": "Lithuania",
        "address": "Tilž?s g. 225, 76200 Šiauliai, Lithuania",
        "lat": 55.93398,
        "lng": 23.32186,
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
        "id": 888,
        "name": {
            "en": "Jerevan",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Druskininkai",
        "city": "Lithuania",
        "address": "Vilniaus kel. 2, Nerav? km., 66441 Druskininkai, Lithuania",
        "lat": 54.03465,
        "lng": 24.0449,
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
        "id": 889,
        "name": {
            "en": "El Arm El",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Druskininkai",
        "city": "Lithuania",
        "address": "Vilniaus kel. 3, Gr?tas, Vie?i?n? sen., 66441 Druskininkai, Lithuania",
        "lat": 54.0324,
        "lng": 24.07263,
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
        "id": 890,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Penang",
        "city": "Malaysia",
        "address": "Armenian Street — George Town, 10200 George Town, Penang, Malaysia",
        "lat": 5.41485,
        "lng": 100.33654,
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
        "id": 891,
        "name": {
            "en": "Sarkies Corner",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Penang",
        "city": "Malaysia",
        "address": "10 Lebuh Farquhar, 10200 George Town, Penang, Malaysia",
        "lat": 5.42184,
        "lng": 100.33673,
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
        "id": 892,
        "name": {
            "en": "Christ Church",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Malacca",
        "city": "Malaysia",
        "address": "Jalan Gereja, Bandar Hilir, 75000 Melaka, Malaysia",
        "lat": 2.19435,
        "lng": 102.24857,
        "description": {
            "en": "Inside the Christ Church Melaka, Armenian inscriptions can  be read along the central aisle. They are from the tomb of Jacob Shamier, a rich Armenian merchant born in Persia, who settled in Malacca in the eighteenth century.",
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
        "id": 893,
        "name": {
            "en": "Madonna of Liesse",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Valetta",
        "city": "Malta",
        "address": "Triq Sant’ Orsla, Valletta VLT 1610, Malta",
        "lat": 35.89657,
        "lng": 14.51363,
        "description": {
            "en": "The Church of the Madonna of Liesse was built in 1620 by Fra Giacomo De Chess du Bellay, Bailiff of Armenia.",
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
        "id": 894,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Valetta",
        "city": "Malta",
        "address": "Hastings Garden (Gardens of Hastings), St. Christopher Street, Valletta, Malta",
        "lat": 35.89819575838967,
        "lng": 14.508046758268412,
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
        "id": 895,
        "name": {
            "en": "Armenian Genocide",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Mexico",
        "city": "Mexico",
        "address": "Parque México, Avenida México s/n, Hipódromo, 06100 Mexico City, Mexico",
        "lat": 19.41246,
        "lng": -99.17122,
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
        "id": 896,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Chisinau",
        "city": "Moldava",
        "address": "Strada Armeneasc?, Chi?in?u, Moldova",
        "lat": 47.02666,
        "lng": 28.84078,
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
        "id": 897,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Chisinau",
        "city": "Moldava",
        "address": "Strada Armeneasc? 50, Chi?in?u, Moldova",
        "lat": 47.02678,
        "lng": 28.84102,
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
        "id": 898,
        "name": {
            "en": "Holy Ressurection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Chisinau",
        "city": "Moldava",
        "address": "Strada Armeneasc? 50, Chi?in?u, Moldova",
        "lat": 47.02678,
        "lng": 28.84102,
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
        "id": 899,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Chisinau",
        "city": "Moldava",
        "address": "Armenian Apostolic Church “Holy Mother of God”, Strada Armeneasc? 50, Chi?in?u, Moldova",
        "lat": 47.02678,
        "lng": 28.84102,
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
        "id": 900,
        "name": {
            "en": "La Sarkis",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Chisinau",
        "city": "Moldava",
        "address": "str. Alexei Mateevici 113/A, Chi?in?u, Moldova",
        "lat": 47.01492,
        "lng": 28.82458,
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
        "id": 901,
        "name": {
            "en": "Manuc Bei",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Chisinau",
        "city": "Moldava",
        "address": "str. Mitropolit Varlaam 51, Hînce?ti 3400, Moldova",
        "lat": 46.82571,
        "lng": 28.58217,
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
        "id": 902,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Balti",
        "city": "Moldava",
        "address": "Strada Hotin, MD-3100, B?l?i, Moldova",
        "lat": 47.7593,
        "lng": 27.928,
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
        "id": 903,
        "name": {
            "en": "Grigoriopol",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Grigoriopol",
        "city": "Transnistria",
        "address": "Grigoriopol, Transnistria (Moldova)",
        "lat": 47.1569,
        "lng": 29.2947,
        "description": {
            "en": "Grigoriopol was founded in 1792 by the Decree of Catherine the Great as an Armenian colony.",
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
        "id": 904,
        "name": {
            "en": "St. Nicholas",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Grigoriopol",
        "city": "Transnistria",
        "address": "Grigoriopol, Transnistria (Moldova)",
        "lat": 47.1518,
        "lng": 29.2896,
        "description": {
            "en": "Historically an Armenian church.",
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
        "id": 905,
        "name": {
            "en": "Mangal Express",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Tiraspol",
        "city": "Transnistria",
        "address": "Strada Sverdlov 36, Tiraspol, Transnistria (Moldova)",
        "lat": 46.84783,
        "lng": 29.58641,
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
        "id": 906,
        "name": {
            "en": "Caucasia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Ulaanbaatar",
        "city": "Mongolia",
        "address": "Usnii g?????, just east of ASA Circus, Sukhbaatar District, Ulaanbaatar, Mongolia",
        "lat": 47.91239,
        "lng": 106.90877,
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
        "id": 907,
        "name": {
            "en": "Armenie",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Casablanca",
        "city": "Morocco",
        "address": "Rue d’Arménie, Quartier des Hôpitaux / Maârif, Casablanca 20250, Morocco",
        "lat": 33.57592,
        "lng": -7.63628,
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
        "id": 908,
        "name": {
            "en": "Armenie",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Casablanca",
        "city": "Morocco",
        "address": "Boulevard d’Alexandrie, Quartier Hermitage, Casablanca, Morocco",
        "lat": 33.57928,
        "lng": -7.61492,
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
        "id": 909,
        "name": {
            "en": "St. John The Baptist",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Yangon",
        "city": "Myanmar",
        "address": "66 Bo Aung Kyaw Street, Yangon 11182, Myanmar",
        "lat": 16.76998,
        "lng": 96.17029,
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
        "id": 910,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Amsterdam",
        "city": "Netherlands",
        "address": "Oudezijds Achterburgwal, 1012 Amsterdam, Netherlands",
        "lat": 52.3728,
        "lng": 4.90095,
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
        "id": 911,
        "name": {
            "en": "Holy Spirit",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Amsterdam",
        "city": "Netherlands",
        "address": "Krom Boomssloot 22, 1011 GW Amsterdam, Netherlands",
        "lat": 52.37286,
        "lng": 4.90455,
        "description": {
            "en": "The oldest in western europe",
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
        "id": 912,
        "name": {
            "en": "Lavash",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Amsterdam",
        "city": "Netherlands",
        "address": "Korte Leidsedwarsstraat 119, 1017 PZ Amsterdam, Netherlands",
        "lat": 52.36335,
        "lng": 4.88473,
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
        "id": 913,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "The Hague",
        "city": "Netherlands",
        "address": "Peace Palace garden (Carnegieplein 2), 2517 KJ The Hague, Netherlands",
        "lat": 52.08963,
        "lng": 4.29476,
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
        "id": 914,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Almelo",
        "city": "Netherlands",
        "address": "Vriezenveenseweg 174, 7602 PV Almelo, Netherlands",
        "lat": 52.35792,
        "lng": 6.65486,
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
        "id": 915,
        "name": {
            "en": "Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Almelo",
        "city": "Netherlands",
        "address": "Vriezenveenseweg 174, 7602 PV Almelo, Netherlands",
        "lat": 52.35792,
        "lng": 6.65486,
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
        "id": 916,
        "name": {
            "en": "Arax",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Almelo",
        "city": "Netherlands",
        "address": "Ootmarsumsestraat 250, 7603 AP Almelo, Netherlands",
        "lat": 52.36614,
        "lng": 6.67794,
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
        "id": 917,
        "name": {
            "en": "Genocide Memorial",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Assen",
        "city": "Netherlands",
        "address": "Boskampweg 30, 9405 PT Assen, Netherlands",
        "lat": 53.00374,
        "lng": 6.56198,
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
        "id": 918,
        "name": {
            "en": "Apricot",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Assen",
        "city": "Netherlands",
        "address": "Torenlaan 4A, 9401 HP Assen, Netherlands",
        "lat": 52.9932229,
        "lng": 6.5624261,
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
        "id": 919,
        "name": {
            "en": "Shirak",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Den Bosch",
        "city": "Netherlands",
        "address": "Karrenstraat 14, 5211 EH ’s-Hertogenbosch, Netherlands",
        "lat": 51.68963,
        "lng": 5.30123,
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
        "id": 920,
        "name": {
            "en": "St. Karapet",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Maastricht",
        "city": "Netherlands",
        "address": "Potterieplein 50, 6216 VB Maastricht, Netherlands",
        "lat": 50.85441,
        "lng": 5.68978,
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
        "id": 921,
        "name": {
            "en": "Saint Servatius",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Maastricht",
        "city": "Netherlands",
        "address": "Keizer Karelplein 3, 6211 TC Maastricht, Netherlands",
        "lat": 50.84883,
        "lng": 5.68741,
        "description": {
            "en": "Saint Servatius, an armenian bishop who evangelised the region in the forth century.",
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
        "id": 922,
        "name": {
            "en": "Armenian Alphabet Stone",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Aukland",
        "city": "New Zeeland",
        "address": "Meadowood Community House, 55 Meadowood Drive, Unsworth Heights, Auckland 0632, New Zealand",
        "lat": -36.7421,
        "lng": 174.7219,
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
        "id": 923,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Bergen",
        "city": "Norway",
        "address": "Rekstensamlingene area (Ulriken foothills / Bergen cultural site), Bergen, Vestland, Norway",
        "lat": 60.3626,
        "lng": 5.3482,
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
        "id": 924,
        "name": {
            "en": "Armenian Genocide",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Kragero",
        "city": "Norway",
        "address": "Kragerø Cemetery (Kragerø kirkegård), Gunnarsholmen / Frydensborg area, 3770 Kragerø, Norway",
        "lat": 58.87192,
        "lng": 9.41374,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 925,
        "name": {
            "en": "Bodil Biorn",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Kragero",
        "city": "Norway",
        "address": "Kragerø Rådhus (Town Hall), P. A. Heuchs gate 8, 3770 Kragerø, Norway",
        "lat": 58.87201,
        "lng": 9.41184,
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
        "id": 926,
        "name": {
            "en": "Piekarnia Kaukaska",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Warsaw",
        "city": "Poland",
        "address": "al. Jana Paw?a II 11, 00-828 Warszawa, Poland",
        "lat": 52.2314595,
        "lng": 20.9989396,
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
        "id": 927,
        "name": {
            "en": "Erywan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Warsaw",
        "city": "Poland",
        "address": "Bracka 3, 00-501 Warszawa, Poland",
        "lat": 52.229825,
        "lng": 21.019968,
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
        "id": 928,
        "name": {
            "en": "Treasury of polish Armenians",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Warsaw",
        "city": "Poland",
        "address": "Treasury of Polish Armenians Exhibition — ul. ?wi?tojerska 12, 00-236 Warszawa, Poland",
        "lat": 52.249258,
        "lng": 21.002903,
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
        "id": 929,
        "name": {
            "en": "Awedis",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Warsaw",
        "city": "Poland",
        "address": "Awedis — ul. ?wi?tojerska 12, 00-236 Warszawa, Poland",
        "lat": 52.249258,
        "lng": 21.002903,
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
        "id": 930,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Warsaw",
        "city": "Poland",
        "address": "Skwer Ormia?ski — Powsi?ska & Okr??na Streets, 02-903 Warszawa, Poland",
        "lat": 52.1959,
        "lng": 21.0627,
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
        "id": 931,
        "name": {
            "en": "Temple Of Dvine Providence",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Warsaw",
        "city": "Poland",
        "address": "Temple of Divine Providence — ul. Prymasa Augusta Hlonda 1, 02-972 Warszawa, Poland",
        "lat": 52.159058,
        "lng": 21.072165,
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
        "id": 932,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lublin",
        "city": "Poland",
        "address": "Armenia - kuchnia kaukaska — Rynek 7, 20-111 Lublin, Poland",
        "lat": 51.248087,
        "lng": 22.5681439,
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
        "id": 933,
        "name": {
            "en": "Jazzve",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lublin",
        "city": "Poland",
        "address": "Jazzve kuchnia kaukaska — Bernardy?ska 20, 20-109 Lublin, Poland",
        "lat": 51.2450243,
        "lng": 22.5672086,
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
        "id": 934,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Lublin",
        "city": "Poland",
        "address": "Chaczkar krzy? kamienny ormia?sko-polskiej przyja?ni — Plac Jana Kochanowskiego, 20-000 Lublin, Poland",
        "lat": 51.24583,
        "lng": 22.5617678,
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
        "id": 935,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Naleczow",
        "city": "Poland",
        "address": "Ararat — 1 Maja 1, 24-150 Na??czów, Poland",
        "lat": 51.287305,
        "lng": 22.2156004,
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
        "id": 936,
        "name": {
            "en": "Armenian Houses",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Zamosc",
        "city": "Poland",
        "address": "Armenian Houses (Ormia?skie Kamienice) — Ormia?ska Street, Rynek Wielki, 22-400 Zamo??, Poland",
        "lat": 50.7176,
        "lng": 23.252,
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
        "id": 937,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Zamosc",
        "city": "Poland",
        "address": "Khachkar in Zamo?? (Armenian cross-stone near Old Town) — ul. Akademicka / near Zamo?? Old Town park area, 22-400 Zamo??, Poland",
        "lat": 50.71795,
        "lng": 23.25255,
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
        "id": 938,
        "name": {
            "en": "St. Nicholas",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Krakow",
        "city": "Poland",
        "address": "ul. Kopernika 9, 31-034 Kraków, Poland",
        "lat": 50.0609,
        "lng": 19.9471,
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
        "id": 939,
        "name": {
            "en": "Granat Express",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Katowice",
        "city": "Poland",
        "address": "ul. Micha?a Gra?y?skiego 2, 40-126 Katowice, Poland",
        "lat": 50.25973,
        "lng": 19.02198,
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
        "id": 940,
        "name": {
            "en": "Holy Trinity",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Gliwice",
        "city": "Poland",
        "address": "Holy Trinity Church — ul. Miko?owska 4, 44-100 Gliwice, Poland",
        "lat": 50.29152,
        "lng": 18.66782,
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
        "id": 941,
        "name": {
            "en": "Ormianska",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Gliwice",
        "city": "Poland",
        "address": "Ormia?ska Restaurant — ul. Jana Siemi?skiego 22, 44-100 Gliwice, Poland",
        "lat": 50.29653,
        "lng": 18.65947,
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
        "id": 942,
        "name": {
            "en": "Smaki Armenii",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Nysa",
        "city": "Poland",
        "address": "ul. Józefa Che?mo?skiego 20, 48-300 Nysa, Poland",
        "lat": 50.47072,
        "lng": 17.33388,
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
        "id": 943,
        "name": {
            "en": "Armine",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Wroclaw",
        "city": "Poland",
        "address": "ul. Wojciecha Bogus?awskiego 83, 50-031 Wroc?aw, Poland",
        "lat": 51.10586,
        "lng": 17.03582,
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
        "id": 944,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Wroclaw",
        "city": "Poland",
        "address": "Armenian Square (Skwer Ormia?ski – khachkar site) — ul. Klemensa Janickiego 2/4, 50-529 Wroc?aw, Poland",
        "lat": 51.1092,
        "lng": 17.0405,
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
        "id": 945,
        "name": {
            "en": "Lavash",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lodz",
        "city": "Poland",
        "address": "ul. Piotrkowska 76, 90-422 ?ód?, Poland",
        "lat": 51.7678719,
        "lng": 19.456969,
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
        "id": 946,
        "name": {
            "en": "Kavkaz",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lodz",
        "city": "Poland",
        "address": "al. Tadeusza Ko?ciuszki 34, 90-001 ?ód?, Poland",
        "lat": 51.7658883,
        "lng": 19.4545505,
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
        "id": 947,
        "name": {
            "en": "Lamadzu",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lodz",
        "city": "Poland",
        "address": "ul. Stefana Jaracza 41, 90-252 ?ód?, Poland",
        "lat": 51.7733999,
        "lng": 19.4652001,
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
        "id": 948,
        "name": {
            "en": "Garni",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lodz",
        "city": "Poland",
        "address": "ul. gen. W?adys?awa Sikorskiego 2, 95-200 Pabianice, Poland",
        "lat": 51.664057,
        "lng": 19.3771489,
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
        "id": 949,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Lodz",
        "city": "Poland",
        "address": "Khachkar in ?ód? — near Ko?ció? ?w. El?biety / Armenian Catholic community site, ul. ?eromskiego 56, 90-625 ?ód?, Poland",
        "lat": 51.7629,
        "lng": 19.4487,
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
        "id": 950,
        "name": {
            "en": "Armenian Houses",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Pioterkow Trybunalski",
        "city": "Poland",
        "address": "Domy Ormia?skie (Armenian Houses), Rynek Trybunalski 1–7, 97-300 Piotrków Trybunalski, Poland",
        "lat": 51.4055,
        "lng": 19.7032,
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
        "id": 951,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Gdansk",
        "city": "Poland",
        "address": "?abi Kruk 3, 80-822 Gda?sk, Poland",
        "lat": 54.3452,
        "lng": 18.6505,
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
        "id": 952,
        "name": {
            "en": "Caloust Gulbenkian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Lisbon",
        "city": "Portugal",
        "address": "Av. de Berna 45A, 1067-001 Lisboa, Portugal",
        "lat": 38.7378,
        "lng": -9.1535,
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
        "id": 953,
        "name": {
            "en": "Ararate",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lisbon",
        "city": "Portugal",
        "address": "Av. Conde Valbom 70, 1050-099 Lisboa, Portugal",
        "lat": 38.7348,
        "lng": -9.1489,
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
        "id": 954,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Porto",
        "city": "Portugal",
        "address": "R. da Arménia, 4050-430 Porto, Portugal",
        "lat": 41.1458,
        "lng": -8.6208,
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
        "id": 955,
        "name": {
            "en": "Mamig",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Doha",
        "city": "Qatar",
        "address": "Katara Cultural Village, Shakespeare St, Doha, Qatar",
        "lat": 25.3596,
        "lng": 51.531,
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
        "id": 956,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bucharest",
        "city": "Romania",
        "address": "Sector 2, Bucharest, Romania",
        "lat": 44.4383,
        "lng": 26.1126,
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
        "id": 957,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bucharest",
        "city": "Romania",
        "address": "Strada Armeneasc? (Armenia Street), Armenian Quarter, Bucharest, Romania",
        "lat": 44.439,
        "lng": 26.1119,
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
        "id": 958,
        "name": {
            "en": "Sts. Michel And Gabriel Archangels",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bucharest",
        "city": "Romania",
        "address": "Bulevardul Carol I 43, Sector 2, Bucharest, Romania",
        "lat": 44.4398,
        "lng": 26.1129,
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
        "id": 959,
        "name": {
            "en": "Dudian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Bucharest",
        "city": "Romania",
        "address": "Dudian House Museum (Casa Memorial? Dudian), Bucharest, Romania",
        "lat": 44.4372,
        "lng": 26.0987,
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
        "id": 960,
        "name": {
            "en": "Union of Romanian Armenians",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Bucharest",
        "city": "Romania",
        "address": "Bd. Carol I nr. 43, Sector 2, Bucharest, Romania",
        "lat": 44.4392,
        "lng": 26.1059,
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
        "id": 961,
        "name": {
            "en": "Nor Gyank",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Bucharest",
        "city": "Romania",
        "address": "44.4378, 26.0970",
        "lat": null,
        "lng": null,
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
        "id": 962,
        "name": {
            "en": "Casa Melik",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Bucharest",
        "city": "Romania",
        "address": "Strada Sp?tarului 22, Sector 2, Bucharest, Romania",
        "lat": 44.4381,
        "lng": 26.1125,
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
        "id": 963,
        "name": {
            "en": "Zambaccian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Bucharest",
        "city": "Romania",
        "address": "Strada Muzeul Zambaccian 21A, Sector 1, Bucharest, Romania",
        "lat": 44.4609,
        "lng": 26.091,
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
        "id": 964,
        "name": {
            "en": "St. Gregory",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bucharest",
        "city": "Romania",
        "address": "Bulevardul Carol I 43, Sector 2, Bucharest, Romania",
        "lat": 44.4398,
        "lng": 26.1129,
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
        "id": 965,
        "name": {
            "en": "Arca Lui Noe",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sinaia",
        "city": "Romania",
        "address": "Strada Furnica 51, Sinaia, Romania",
        "lat": 45.3561,
        "lng": 25.541,
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
        "id": 966,
        "name": {
            "en": "St. John The Baptist",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Pitesti",
        "city": "Romania",
        "address": "43 Strada Egalit??ii, Pite?ti, Arge? County, Romania",
        "lat": 44.8583,
        "lng": 24.8697,
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
        "id": 967,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Pitesti",
        "city": "Romania",
        "address": "Strada Gheorghe Doja 28, Pite?ti, Arge? County, Romania",
        "lat": 44.8566,
        "lng": 24.8691,
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
        "id": 968,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Pitesti",
        "city": "Romania",
        "address": "Pia?a General Vasile Milea, Sector 6, Bucharest, Romania",
        "lat": 44.4267,
        "lng": 26.0469,
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
        "id": 969,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Constanta",
        "city": "Romania",
        "address": "Strada Callatis 1, Constan?a, Romania",
        "lat": 44.1722,
        "lng": 28.6575,
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
        "id": 970,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Constanta",
        "city": "Romania",
        "address": "Bulevardul Regina Elisabeta, Constan?a, Romania",
        "lat": 44.1729,
        "lng": 28.6631,
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
        "id": 971,
        "name": {
            "en": "St. Gregory",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tulcea",
        "city": "Romania",
        "address": "Strada Concordiei 5, Tulcea, Romania",
        "lat": 45.178,
        "lng": 28.7966,
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
        "id": 972,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Braila",
        "city": "Romania",
        "address": "Calea Gala?i, Br?ila, Romania",
        "lat": 45.2706,
        "lng": 27.9642,
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
        "id": 973,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Galati",
        "city": "Romania",
        "address": "Strada Traian 290, Gala?i, Romania",
        "lat": 45.4379,
        "lng": 28.0421,
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
        "id": 974,
        "name": {
            "en": "St. Georges",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Focsani",
        "city": "Romania",
        "address": "Bulevardul Independen?ei 20, Foc?ani, Vrancea County, Romania",
        "lat": 45.6939,
        "lng": 27.1846,
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
        "id": 975,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Targu Ocna",
        "city": "Romania",
        "address": "Strada V?leni, Târgu Ocna, Bac?u County, Romania",
        "lat": 46.2765,
        "lng": 26.6138,
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
        "id": 976,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Roman",
        "city": "Romania",
        "address": "Neam? County, Romania",
        "lat": 46.9256,
        "lng": 26.9264,
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
        "id": 977,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Roman",
        "city": "Romania",
        "address": "Neam? County, Romania",
        "lat": 46.927,
        "lng": 26.9269,
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
        "id": 978,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Iasi",
        "city": "Romania",
        "address": "Strada Armean? 24, Ia?i, Romania",
        "lat": 47.1596,
        "lng": 27.5851,
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
        "id": 979,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Iasi",
        "city": "Romania",
        "address": "Strada Armeneasc? (Armenia Street), Ia?i, Romania",
        "lat": 47.1596,
        "lng": 27.5851,
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
        "id": 980,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Botosani",
        "city": "Romania",
        "address": "Strada Armean? 3, Boto?ani, Boto?ani County, Romania",
        "lat": 47.7456,
        "lng": 26.6652,
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
        "id": 981,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Botosani",
        "city": "Romania",
        "address": "Strada Armeneasc?, Boto?ani, Romania",
        "lat": 47.7463,
        "lng": 26.669,
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
        "id": 982,
        "name": {
            "en": "Holy Trinity",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Botosani",
        "city": "Romania",
        "address": "Strada George Enescu 12, Boto?ani, Romania",
        "lat": 47.7483,
        "lng": 26.6656,
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
        "id": 983,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Botosani",
        "city": "Romania",
        "address": "Strada Armean? 20, Boto?ani, Romania",
        "lat": 47.7459,
        "lng": 26.667,
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
        "id": 984,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Botosani",
        "city": "Romania",
        "address": "Strada Eternit??ii 10, Boto?ani, Romania",
        "lat": 47.748,
        "lng": 26.6685,
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
        "id": 985,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Suceava",
        "city": "Romania",
        "address": "Strada Armeneasc? 1, Suceava, Suceava County, Romania",
        "lat": 47.6396,
        "lng": 26.2521,
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
        "id": 986,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Suceava",
        "city": "Romania",
        "address": "Strada Armeneasc? (Armenia Street), Suceava, Romania",
        "lat": 47.6469,
        "lng": 26.2579,
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
        "id": 987,
        "name": {
            "en": "St. Simon",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Suceava",
        "city": "Romania",
        "address": "Strada Sbiera I. G. 51, Suceava, Romania",
        "lat": 47.64997,
        "lng": 26.25372,
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
        "id": 988,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Suceava",
        "city": "Romania",
        "address": "Strada Zamca 21, 720214 Suceava, Romania",
        "lat": 47.6499,
        "lng": 26.2538,
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
        "id": 989,
        "name": {
            "en": "Zamca",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Suceava",
        "city": "Romania",
        "address": "Strada Zamca 30, 720214 Suceava, Romania",
        "lat": 47.65269,
        "lng": 26.24377,
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
        "id": 990,
        "name": {
            "en": "Hagigadar",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Suceava",
        "city": "Romania",
        "address": "Strada Hagigadar 36, 727370 Bulai (Suceava), Romania",
        "lat": 47.62111,
        "lng": 26.23228,
        "description": {
            "en": "The monastery’s clock was brought to Moldavia from Tatev (Armenia) around 1250.",
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
        "id": 991,
        "name": {
            "en": "Gherla",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Gherla",
        "city": "Romania",
        "address": "© Mapbox Conditions d’utilisation© OpenStreetMap",
        "lat": null,
        "lng": null,
        "description": {
            "en": "Gherla (historically known as Armenopolis) is the most emblematic city for Romania’s Armenian community. The first Armenians arrived in Transylvania (then ruled by the Hungarians) during the thirteenth and fourteenth centuries, coming  from the city of Ani, which was vacated during these years. The Armenians progressively assimilated into the Hungarian bourgeoisie: Armenopolis became Szamosújvár (in Hungarian), and then Gherla (in Romanian) when it was integrated into Romania.",
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
        "id": 992,
        "name": {
            "en": "St. Salomon",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Gherla",
        "city": "Romania",
        "address": "Strada Clo?ca 3, 405300 Gherla, Romania",
        "lat": 47.02702,
        "lng": 23.91003,
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
        "id": 993,
        "name": {
            "en": "Holy Trinity",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Gherla",
        "city": "Romania",
        "address": "Strada ?tefan cel Mare 1, 405300 Gherla, Romania",
        "lat": 47.01472,
        "lng": 23.9025,
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
        "id": 994,
        "name": {
            "en": "Holy Trinity",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Dumbaveni",
        "city": "Romania",
        "address": "Strada Avram Iancu 2, 555500 Dumbr?veni, Romania",
        "lat": 46.22535,
        "lng": 24.57735,
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
        "id": 995,
        "name": {
            "en": "Sts. Peter And Paul",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Dumbaveni",
        "city": "Romania",
        "address": "Strada Timotei Cipariu 1, 555500 Dumbr?veni, Romania",
        "lat": 46.22695,
        "lng": 24.5759,
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
        "id": 996,
        "name": {
            "en": "St. Elizabeth",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Dumbaveni",
        "city": "Romania",
        "address": "Strada Avram Iancu 2, 555500 Dumbr?veni, Romania",
        "lat": 46.22535,
        "lng": 24.57735,
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
        "id": 997,
        "name": {
            "en": "Transilvania Armenians",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Dumbaveni",
        "city": "Romania",
        "address": "Apafi Castle, Strada Cuza Vod? 4, Dumbr?veni, Romania",
        "lat": 46.22514,
        "lng": 24.57737,
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
        "id": 998,
        "name": {
            "en": "Holy Mother of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Gheorgheni",
        "city": "Romania",
        "address": "Strada Márton Áron 9–11, 535500 Gheorgheni, Romania",
        "lat": 46.7237,
        "lng": 25.6054,
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
        "id": 999,
        "name": {
            "en": "Holy Trinity",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Frumoasa",
        "city": "Romania",
        "address": "DC6 (or DN12A area), 537115 Frumoasa, Harghita, Romania",
        "lat": 46.6539,
        "lng": 25.7446,
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
        "id": 1000,
        "name": {
            "en": "Ararat Hyatt",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Moscow",
        "city": "Russia",
        "address": "Neglinnaya St, 4, Moscow, Russia, 109012",
        "lat": 55.759903,
        "lng": 37.6217538,
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
        "id": 1001,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "Neglinnaya St, 4, Moscow, Russia, 109012",
        "lat": 55.759903,
        "lng": 37.6217538,
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
        "id": 1002,
        "name": {
            "en": "Noyev Kovcheg",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "Maly Ivanovsky Pereulok, 9, Moscow, Russia, 109028",
        "lat": 55.753968,
        "lng": 37.641319,
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
        "id": 1003,
        "name": {
            "en": "Dolmama",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "Romanov Pereulok, 2/6 ???????? 13, Moscow, Russia, 125009",
        "lat": 55.755764,
        "lng": 37.611473,
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
        "id": 1004,
        "name": {
            "en": "Dimitri Nalbandian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Moscow",
        "city": "Russia",
        "address": "Tverskaya St, 8, bldg. 2, Moscow, Russia, 125009",
        "lat": 55.76058,
        "lng": 37.60964,
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
        "id": 1005,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Moscow",
        "city": "Russia",
        "address": "17 Tverskaya Street, Moscow, Russia, 125009",
        "lat": 55.76112,
        "lng": 37.60921,
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
        "id": 1006,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "Tverskaya St, 17, Moscow, Russia, 125009",
        "lat": 55.76301,
        "lng": 37.60949,
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
        "id": 1007,
        "name": {
            "en": "Gayane's",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "2-y Smolensky Pereulok, 1/4, Moscow, Russia, 121099",
        "lat": 55.74692,
        "lng": 37.58188,
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
        "id": 1008,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "2-y Smolensky Pereulok, 1/4, Moscow, Russia, 121099",
        "lat": 55.74692,
        "lng": 37.58188,
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
        "id": 1009,
        "name": {
            "en": "Lavash",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "Sadovnicheskaya St, 82/2, Moscow, Russia",
        "lat": 55.7411,
        "lng": 37.6387,
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
        "id": 1010,
        "name": {
            "en": "dolma",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "Sretenka St, 12, Moscow, Russia, 107045",
        "lat": 55.7646,
        "lng": 37.6338,
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
        "id": 1011,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Moscow",
        "city": "Russia",
        "address": "Ulitsa Sergeya Makeeva 12, Moscow, Russia, 123022",
        "lat": 55.75999,
        "lng": 37.55747,
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
        "id": 1012,
        "name": {
            "en": "Holy Reserrection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Moscow",
        "city": "Russia",
        "address": "Ulitsa Sergeya Makeeva 12, Moscow, Russia, 123022",
        "lat": 55.75999,
        "lng": 37.55747,
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
        "id": 1013,
        "name": {
            "en": "Holy Transfiguration",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Moscow",
        "city": "Russia",
        "address": "Ulitsa Trubnaya 38, Moscow, Russia, 127051",
        "lat": 55.76872,
        "lng": 37.62211,
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
        "id": 1014,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Moscow",
        "city": "Russia",
        "address": "Olympiyskiy Prospekt / Trifonovskaya St area, Moscow, Russia",
        "lat": 55.7881,
        "lng": 37.6212,
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
        "id": 1015,
        "name": {
            "en": "Christ The Savior Cathedral",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Moscow",
        "city": "Russia",
        "address": "Volkhonka Street / Cathedral of Christ the Saviour area, Moscow, Russia",
        "lat": 55.7447,
        "lng": 37.6059,
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
        "id": 1016,
        "name": {
            "en": "iMMACULATE cONCEPTION",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Moscow",
        "city": "Russia",
        "address": "Malaya Gruzinskaya Ulitsa 27, Moscow, Russia, 123557",
        "lat": 55.77062,
        "lng": 37.58518,
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
        "id": 1017,
        "name": {
            "en": "Armenian Russian Friendship",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Moscow",
        "city": "Russia",
        "address": "Nikitskiye Vorota Square, Moscow, Russia",
        "lat": 55.7579,
        "lng": 37.5994,
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
        "id": 1018,
        "name": {
            "en": "Stary Faeton",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "Bolshaya Nikitskaya St, 55/52, Moscow, Russia, 121069",
        "lat": 55.7569,
        "lng": 37.6062,
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
        "id": 1019,
        "name": {
            "en": "U Burcho",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "Sadovnicheskaya Naberezhnaya, 79, Moscow, Russia, 115035",
        "lat": 55.7418,
        "lng": 37.6389,
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
        "id": 1020,
        "name": {
            "en": "Erevan Plaza",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Moscow",
        "city": "Russia",
        "address": "Bolshaya Tulskaya Ulitsa 13, Moscow, Russia, 115191",
        "lat": 55.7082,
        "lng": 37.6227,
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
        "id": 1021,
        "name": {
            "en": "Duduk",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "Lokomotivny Proyezd 6, bld.1, Moscow, Russia, 127238",
        "lat": 55.8586,
        "lng": 37.5489,
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
        "id": 1022,
        "name": {
            "en": "Dolmaster",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "Mytnaya St, 74 (Danilovsky Market), Moscow, Russia, 115191",
        "lat": 55.7139,
        "lng": 37.6268,
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
        "id": 1023,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Moscow",
        "city": "Russia",
        "address": "Danilov Monastery grounds (courtyard), Moscow, Russia",
        "lat": 55.71035,
        "lng": 37.62055,
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
        "id": 1024,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Moscow",
        "city": "Russia",
        "address": "Prospekt Mira 119, Pavilion 68, Moscow, Russia, 129223",
        "lat": 55.83091,
        "lng": 37.63366,
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
        "id": 1025,
        "name": {
            "en": "Aviapark Mall - restaurant Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Moscow",
        "city": "Russia",
        "address": "Khodynskiy Bulvar 4, Moscow, Russia, 125167",
        "lat": 55.79062,
        "lng": 37.53381,
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
        "id": 1026,
        "name": {
            "en": "St. Catherine's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Saint Petersburg",
        "city": "Russia",
        "address": "Nevsky Ave, 40–42, St Petersburg, Russia, 191186",
        "lat": 59.93526,
        "lng": 30.33318,
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
        "id": 1027,
        "name": {
            "en": "Holy Resurrection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Saint Petersburg",
        "city": "Russia",
        "address": "Naberezhnaya Reki Smolenki, 29, St Petersburg, Russia, 199178",
        "lat": 59.94657,
        "lng": 30.23833,
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
        "id": 1028,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Saint Petersburg",
        "city": "Russia",
        "address": "Naberezhnaya Reki Smolenki, St Petersburg, Russia, 199178",
        "lat": 59.94333,
        "lng": 30.24861,
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
        "id": 1029,
        "name": {
            "en": "Komitas",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Saint Petersburg",
        "city": "Russia",
        "address": "Kamskiy Garden, St Petersburg, Russia, 199178",
        "lat": 59.9480847,
        "lng": 30.2615463,
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
        "id": 1030,
        "name": {
            "en": "Dolmaster",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Saint Petersburg",
        "city": "Russia",
        "address": "Pochtamtskaya Ulitsa, 1, St Petersburg, Russia, 190000",
        "lat": 59.92993,
        "lng": 30.30071,
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
        "id": 1031,
        "name": {
            "en": "Kilikia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Saint Petersburg",
        "city": "Russia",
        "address": "Griboyedov channel embankment, 40, St Petersburg, Russia, 191023",
        "lat": 59.93033,
        "lng": 30.31965,
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
        "id": 1032,
        "name": {
            "en": "Erivan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Saint Petersburg",
        "city": "Russia",
        "address": "Fontanka River Embankment, 51, St Petersburg, Russia, 191011",
        "lat": 59.92594,
        "lng": 30.33766,
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
        "id": 1033,
        "name": {
            "en": "Menua",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Saint Petersburg",
        "city": "Russia",
        "address": "Inzhenernaya St, 6, St Petersburg, Russia, 191023",
        "lat": 59.93863,
        "lng": 30.33591,
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
        "id": 1034,
        "name": {
            "en": "U Gagika",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Saint Petersburg",
        "city": "Russia",
        "address": "Lermontovskiy Prospekt, 7, St Petersburg, Russia, 190000",
        "lat": 59.91973,
        "lng": 30.29654,
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
        "id": 1035,
        "name": {
            "en": "Noyan Tapan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Saint Petersburg",
        "city": "Russia",
        "address": "Sadovaya St, 84, St Petersburg, Russia, 190121",
        "lat": 59.91916,
        "lng": 30.28937,
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
        "id": 1036,
        "name": {
            "en": "Ararat Wine",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Saint Petersburg",
        "city": "Russia",
        "address": "Lermontovskiy Prospekt, 8/10, St Petersburg, Russia, 190068",
        "lat": 59.91942,
        "lng": 30.29687,
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
        "id": 1037,
        "name": {
            "en": "Noy",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Pushkin",
        "city": "Russia",
        "address": "Avtomobil'naya Ulitsa, 4, St Petersburg, Russia, 196634",
        "lat": 59.72761,
        "lng": 30.47692,
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
        "id": 1038,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Vsevolozhsk",
        "city": "Russia",
        "address": "Rumbolovskaya Ulitsa, 1, Vsevolozhsk, Leningrad Oblast, Russia, 188640",
        "lat": 60.01956,
        "lng": 30.64574,
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
        "id": 1039,
        "name": {
            "en": "Karine",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Vsevolozhsk",
        "city": "Russia",
        "address": "Armyanskiy Pereulok, 11, Vsevolozhsk, Leningrad Oblast, Russia, 188643",
        "lat": 59.99756,
        "lng": 30.65979,
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
        "id": 1040,
        "name": {
            "en": "Holy Resurrection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Rostov On Don",
        "city": "Russia",
        "address": "Church of the Resurrection (Armenian Apostolic Church “Surb Harutyun”), Rostov-on-Don, Russia",
        "lat": 47.2306,
        "lng": 39.7656,
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
        "id": 1041,
        "name": {
            "en": "Russian Armenian Friendship",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Rostov On Don",
        "city": "Russia",
        "address": "Svobody Square, 14/2, Rostov-on-Don, Russia, 344113",
        "lat": 47.22797,
        "lng": 39.71046,
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
        "id": 1042,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Rostov On Don",
        "city": "Russia",
        "address": "Ulitsa Bagramyana, 1, Rostov-on-Don, Russia, 344113",
        "lat": 47.29054,
        "lng": 39.72202,
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
        "id": 1043,
        "name": {
            "en": "St. Karapet",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Rostov On Don",
        "city": "Russia",
        "address": "57 Chentsov Street, Rostov-on-Don, Russia, 344113",
        "lat": 47.22797,
        "lng": 39.71046,
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
        "id": 1044,
        "name": {
            "en": "Erevan",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Rostov On Don",
        "city": "Russia",
        "address": "Yerevanskaya Ulitsa, Rostov-on-Don, Russia, 344000",
        "lat": 47.2229,
        "lng": 39.7201,
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
        "id": 1045,
        "name": {
            "en": "Bagramyan",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Rostov On Don",
        "city": "Russia",
        "address": "Ulitsa Bagramyana, Rostov-on-Don, Russia, 344113",
        "lat": 47.29054,
        "lng": 39.72202,
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
        "id": 1046,
        "name": {
            "en": "Sevan Plaza",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Rostov On Don",
        "city": "Russia",
        "address": "Erevanskaya Ulitsa, 1A, Rostov-on-Don, Russia, 344037",
        "lat": 47.2313,
        "lng": 39.7661,
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
        "id": 1047,
        "name": {
            "en": "Holy Ascension",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Chaltyr",
        "city": "Russia",
        "address": "6th Line Street, Chaltyr, Myasnikovsky District, Rostov Oblast, Russia, 346800",
        "lat": 47.29056,
        "lng": 39.72006,
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
        "id": 1048,
        "name": {
            "en": "Anush",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Chaltyr",
        "city": "Russia",
        "address": "Ulitsa 6-Ya Liniya, 9, Chaltyr, Rostov Oblast, Russia, 346800",
        "lat": 47.2908,
        "lng": 39.7203,
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
        "id": 1049,
        "name": {
            "en": "Javakhk",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Chaltyr",
        "city": "Russia",
        "address": "Ulitsa Patkanyana, 73, Chaltyr, Rostov Oblast, Russia, 346800",
        "lat": 47.2889,
        "lng": 39.7178,
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
        "id": 1050,
        "name": {
            "en": "Christ The Savior",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Krym",
        "city": "Russia",
        "address": "Ulitsa Myasnikyana 51, Krym village, Myasnikovsky District, Rostov Oblast, Russia, 346812",
        "lat": 47.2821,
        "lng": 39.7193,
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
        "id": 1051,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Bolshie-Saly",
        "city": "Russia",
        "address": "Bolshiye Saly, Myasnikovsky District, Rostov Oblast, Russia, 346816",
        "lat": 47.3316,
        "lng": 39.7304,
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
        "id": 1052,
        "name": {
            "en": "St. Georges",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Sultan-Saly",
        "city": "Russia",
        "address": "Sultan-Saly, Myasnikovsky District, Rostov Oblast, Russia, 346815",
        "lat": 47.35611,
        "lng": 39.58472,
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
        "id": 1053,
        "name": {
            "en": "St. Karapet",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Nesvetay",
        "city": "Russia",
        "address": "Nesvetay village, Myasnikovsky District, Rostov Oblast, Russia, 346816",
        "lat": 47.3433,
        "lng": 39.5854,
        "description": {
            "en": "In ruins",
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
        "id": 1054,
        "name": {
            "en": "St. Sargis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Shakhty",
        "city": "Russia",
        "address": "St. Sarkis Armenian Apostolic Church, Shakhty, Rostov Oblast, Russia",
        "lat": 47.7098,
        "lng": 40.2149,
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
        "id": 1055,
        "name": {
            "en": "Khachkar",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Shakhty",
        "city": "Russia",
        "address": "Alexandrovsky Park, Central Alley near the chapel area, Shakhty, Rostov Oblast, Russia",
        "lat": 47.7063,
        "lng": 40.2068,
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
        "id": 1056,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Novocherkassk",
        "city": "Russia",
        "address": "Armenian Church of St. Gregory the Illuminator (Surp Grigor Lusavorich), Novocherkassk, Rostov Oblast, Russia, 346400",
        "lat": 47.4146,
        "lng": 40.0939,
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
        "id": 1057,
        "name": {
            "en": "John The Apostle",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Krasnodar",
        "city": "Russia",
        "address": "Turgenev Street 165, Krasnodar, Russia, 350049",
        "lat": 45.0449,
        "lng": 38.9763,
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
        "id": 1058,
        "name": {
            "en": "Sts. Sahak And Mesrop",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Krasnodar",
        "city": "Russia",
        "address": "Evdokia Bershanskaya Street 416/418, Krasnodar, Russia, 350912",
        "lat": 45.0332,
        "lng": 39.12833,
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
        "id": 1059,
        "name": {
            "en": "Basturma",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Krasnodar",
        "city": "Russia",
        "address": "Ulitsa Rossiyskaya, 72/1, Krasnodar, Russia, 350901",
        "lat": 45.0645,
        "lng": 38.9771,
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
        "id": 1060,
        "name": {
            "en": "Pinocchio Djan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Krasnodar",
        "city": "Russia",
        "address": "Ulitsa Zipovskaya, 5/4, Krasnodar, Russia, 350000",
        "lat": 45.0551,
        "lng": 38.9879,
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
        "id": 1061,
        "name": {
            "en": "Pantok",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Krasnodar",
        "city": "Russia",
        "address": "Ulitsa Severnaya, 510, Krasnodar, Russia, 350038",
        "lat": 45.0442,
        "lng": 38.9901,
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
        "id": 1062,
        "name": {
            "en": "Arin Berd",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Krasnodar",
        "city": "Russia",
        "address": "Ulitsa Severnaya, 343, Krasnodar, Russia, 350002",
        "lat": 45.0493,
        "lng": 38.9804,
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
        "id": 1063,
        "name": {
            "en": "Kovcheg",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Anapa",
        "city": "Russia",
        "address": "Prospekt Revolyutsii, 1, Anapa, Krasnodar Krai, Russia, 353440",
        "lat": 44.8947,
        "lng": 37.3162,
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
        "id": 1064,
        "name": {
            "en": "Brynza",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Anapa",
        "city": "Russia",
        "address": "Ulitsa Shevchenko, 1A, Anapa, Krasnodar Krai, Russia, 353440",
        "lat": 44.8952,
        "lng": 37.3154,
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
        "id": 1065,
        "name": {
            "en": "Gaykodzor",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Gaykodzor",
        "city": "Russia",
        "address": "Gaykodzor village (Gaikodzor), Anapa Urban Okrug, Krasnodar Krai, Russia, 353440",
        "lat": 44.85389,
        "lng": 37.43722,
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
        "id": 1066,
        "name": {
            "en": "St. Sargis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Gaykodzor",
        "city": "Russia",
        "address": "Gaikodzor (Gaykodzor), Anapa Urban Okrug, Krasnodar Krai, Russia, 353440",
        "lat": 44.85406,
        "lng": 37.43729,
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
        "id": 1067,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Novorassiysk",
        "city": "Russia",
        "address": "Novorossiysk, Krasnodar Krai, Russia, 353900",
        "lat": 44.742,
        "lng": 37.7851,
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
        "id": 1068,
        "name": {
            "en": "Nur",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Novorassiysk",
        "city": "Russia",
        "address": "Prospekt Dzerzhinskogo, 185, Novorossiysk, Krasnodar Krai, Russia, 353920",
        "lat": 44.69189,
        "lng": 37.77909,
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
        "id": 1069,
        "name": {
            "en": "Lavash",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Gelendzhik",
        "city": "Russia",
        "address": "Ulitsa Revolyutsionnaya, 47, Gelendzhik, Krasnodar Krai, Russia, 353470",
        "lat": 44.5552,
        "lng": 38.0611,
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
        "id": 1070,
        "name": {
            "en": "Shaumyan",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Shaumyan",
        "city": "Russia",
        "address": "Shaumyan village, Tuapsinsky District, Krasnodar Krai, Russia, 352825",
        "lat": 44.32222,
        "lng": 39.29167,
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
        "id": 1071,
        "name": {
            "en": "St. Echmiadzin",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Shaumyan",
        "city": "Russia",
        "address": "Ulitsa Shaumyana, 74, Shaumyan, Tuapsinsky District, Krasnodar Krai, Russia, 352825",
        "lat": 44.31978,
        "lng": 39.29276,
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
        "id": 1072,
        "name": {
            "en": "Terzyan",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Terzyan",
        "city": "Russia",
        "address": "Terziyan village, Tuapsinsky District, Krasnodar Krai, Russia, 352691",
        "lat": 44.21056,
        "lng": 39.42833,
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
        "id": 1073,
        "name": {
            "en": "St; John The Baptist",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Terzyan",
        "city": "Russia",
        "address": "Terziyan village, Tuapsinsky District, Krasnodar Krai, Russia, 352691",
        "lat": 44.2109,
        "lng": 39.4287,
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
        "id": 1074,
        "name": {
            "en": "Arshalouys Khanzhyan",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Terzyan",
        "city": "Russia",
        "address": "Terziyan village, Tuapsinsky District, Krasnodar Krai, Russia, 352691",
        "lat": 44.2107,
        "lng": 39.428,
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
        "id": 1075,
        "name": {
            "en": "Nian",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Terzyan",
        "city": "Russia",
        "address": "Terziyan village, Tuapsinsky District, Krasnodar Krai, Russia, 352691",
        "lat": 44.2108,
        "lng": 39.4286,
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
        "id": 1076,
        "name": {
            "en": "St. Nicholas The Wonderworker",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Novomikhayilovsky",
        "city": "Russia",
        "address": "Morskaya Ulitsa, 41, Novomikhaylovsky, Krasnodar Krai, Russia, 352856",
        "lat": 44.2369,
        "lng": 38.8482,
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
        "id": 1077,
        "name": {
            "en": "St. Nicholas The Wonderworker",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tenginka",
        "city": "Russia",
        "address": "Tenginka village, Tuapsinsky District, Krasnodar Krai, Russia, 352843",
        "lat": 44.2731,
        "lng": 38.9734,
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
        "id": 1078,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Sochi",
        "city": "Russia",
        "address": "Ulitsa Vinogradnaya, 18, Sochi, Krasnodar Krai, Russia, 354000",
        "lat": 43.5872,
        "lng": 39.7229,
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
        "id": 1079,
        "name": {
            "en": "St. Sargis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Sochi",
        "city": "Russia",
        "address": "Ulitsa Bestuzheva, 1, Adler district, Sochi, Krasnodar Krai, Russia, 354340",
        "lat": 43.4317,
        "lng": 39.9208,
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
        "id": 1080,
        "name": {
            "en": "St. John The Baptist",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Loo",
        "city": "Russia",
        "address": "Loo village, Lazarevsky District, Sochi, Krasnodar Krai, Russia, 354208",
        "lat": 43.6748,
        "lng": 39.6061,
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
        "id": 1081,
        "name": {
            "en": "St. Sargis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Kalinovka",
        "city": "Russia",
        "address": "Kalinovka village, Lazarevsky District, Sochi, Krasnodar Krai, Russia, 354203",
        "lat": 43.7866,
        "lng": 39.5619,
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
        "id": 1082,
        "name": {
            "en": "St. Nareg",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Altmets",
        "city": "Russia",
        "address": "Altmets village, on the right bank of the Dagomys River, Lazarevsky District, Sochi, Krasnodar Krai, Russia, 354207",
        "lat": 43.7761,
        "lng": 39.5578,
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
        "id": 1083,
        "name": {
            "en": "Hamshen Armenians",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Altmets",
        "city": "Russia",
        "address": "Altmets (Nor Luys) village, Lazarevsky District, Sochi, Krasnodar Krai, Russia",
        "lat": 43.7761,
        "lng": 39.5578,
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
        "id": 1084,
        "name": {
            "en": "Zamok Dvin",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sochi",
        "city": "Russia",
        "address": "Vinogradnaya St, 189, Sochi, Russia, 354068",
        "lat": 43.5873,
        "lng": 39.7229,
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
        "id": 1085,
        "name": {
            "en": "Stary Erivan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sochi",
        "city": "Russia",
        "address": "Severnaya St, 10, Sochi, Russia, 354000",
        "lat": 43.5992,
        "lng": 39.7251,
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
        "id": 1086,
        "name": {
            "en": "Urartu",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sochi",
        "city": "Russia",
        "address": "Armyanskaya St, 31, Sochi, Russia, 354055",
        "lat": 43.5928,
        "lng": 39.7302,
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
        "id": 1087,
        "name": {
            "en": "Amshensky Dvor",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sochi",
        "city": "Russia",
        "address": "Kazachy Brod village, Krasnoflotskaya St, 15A, Sochi, Russia",
        "lat": 43.439,
        "lng": 39.9333,
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
        "id": 1088,
        "name": {
            "en": "Armiansky Dvor",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sochi",
        "city": "Russia",
        "address": "Energetikov St, 11B, Adler, Sochi, Russia, 354340",
        "lat": 43.4321,
        "lng": 39.9205,
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
        "id": 1089,
        "name": {
            "en": "Polyana Vkusa",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sochi",
        "city": "Russia",
        "address": "Karla Marksa St, 20, Sochi, Russia, 354000",
        "lat": 43.5859,
        "lng": 39.7202,
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
        "id": 1090,
        "name": {
            "en": "Nreni",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sochi",
        "city": "Russia",
        "address": "Kurortny Ave, 16, Sochi, Russia, 354000",
        "lat": 43.5851,
        "lng": 39.7208,
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
        "id": 1091,
        "name": {
            "en": "Abris",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sochi",
        "city": "Russia",
        "address": "Kurortny Ave, 16, Sochi, Russia, 354000",
        "lat": 43.5851,
        "lng": 39.7208,
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
        "id": 1092,
        "name": {
            "en": "St. Georges",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Apsheronsk",
        "city": "Russia",
        "address": "Apsheronsk, Krasnodar Krai, Russia, 352690",
        "lat": 44.4658,
        "lng": 39.7362,
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
        "id": 1093,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Belorechensk",
        "city": "Russia",
        "address": "Ulitsa Shosseynaya, 4, Belorechensk, Krasnodar Krai, Russia, 352630",
        "lat": 44.7636,
        "lng": 39.8721,
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
        "id": 1094,
        "name": {
            "en": "Holy Resurrection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Matkop",
        "city": "Russia",
        "address": "Maykop, Republic of Adygea, Russia, 385000",
        "lat": 44.6071,
        "lng": 40.1058,
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
        "id": 1095,
        "name": {
            "en": "Armavir",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Armavir",
        "city": "Russia",
        "address": "Armavir, Krasnodar Krai, Russia, 352900",
        "lat": 44.9892,
        "lng": 41.1234,
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
        "id": 1096,
        "name": {
            "en": "Holy Ascension",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Armavir",
        "city": "Russia",
        "address": "Armavir, Krasnodar Krai, Russia, 352900",
        "lat": 44.9893,
        "lng": 41.1232,
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
        "id": 1097,
        "name": {
            "en": "Stary Gorod",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Armavir",
        "city": "Russia",
        "address": "Ulitsa Efremova, 73, Armavir, Krasnodar Krai, Russia, 352900",
        "lat": 44.9992,
        "lng": 41.1291,
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
        "id": 1098,
        "name": {
            "en": "St. Sargis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Slavyansk On Kuban",
        "city": "Russia",
        "address": "Slavyansk-on-Kuban, Krasnodar Krai, Russia, 353560",
        "lat": 45.2609,
        "lng": 38.1268,
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
        "id": 1099,
        "name": {
            "en": "Noy",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Slavyansk On Kuban",
        "city": "Russia",
        "address": "Ulitsa Lenina, 4A, Trudobelikovsky, Krasnoarmeysky District, Krasnodar Krai, Russia, 353811",
        "lat": 45.2779,
        "lng": 38.1462,
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
        "id": 1100,
        "name": {
            "en": "St. Mary Magdalene",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Stavropol",
        "city": "Russia",
        "address": "Voityka Street 33, Stavropol, Stavropol Krai, Russia, 355008",
        "lat": 45.0432,
        "lng": 41.9691,
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
        "id": 1101,
        "name": {
            "en": "Baklazhan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Stavropol",
        "city": "Russia",
        "address": "Ulitsa Lenina, 429A, Stavropol, Stavropol Krai, Russia, 355029",
        "lat": 45.0431,
        "lng": 41.9692,
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
        "id": 1102,
        "name": {
            "en": "St. Sargis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Pyatigorsk",
        "city": "Russia",
        "address": "Pyatigorsk, Stavropol Krai, Russia, 357500",
        "lat": 44.0398,
        "lng": 43.0709,
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
        "id": 1103,
        "name": {
            "en": "Kilikia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Pyatigorsk",
        "city": "Russia",
        "address": "Pyatigorsk, Stavropol Krai, Russia, 357500",
        "lat": 44.0399,
        "lng": 43.0708,
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
        "id": 1104,
        "name": {
            "en": "Vaspurakan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Konstantinovskaya",
        "city": "Russia",
        "address": "Ulitsa Lenina, 1, Konstantinovskaya, Stavropol Krai, Russia, 357565",
        "lat": 45.0319,
        "lng": 41.6892,
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
        "id": 1105,
        "name": {
            "en": "St. Vardan Mamigonian",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Kislovodsk",
        "city": "Russia",
        "address": "Kislovodsk, Stavropol Krai, Russia, 357700",
        "lat": 43.9189,
        "lng": 42.7208,
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
        "id": 1106,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Mineralnye Vody",
        "city": "Russia",
        "address": "Mineralnye Vody, Stavropol Krai, Russia",
        "lat": 44.2104,
        "lng": 43.1358,
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
        "id": 1107,
        "name": {
            "en": "St. Hripsime",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Yessetuki",
        "city": "Russia",
        "address": "Yessentuki, Stavropol Krai, Russia, 357600",
        "lat": 44.0448,
        "lng": 42.8589,
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
        "id": 1108,
        "name": {
            "en": "Christ The Savior",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Suvorovskaya",
        "city": "Russia",
        "address": "Suvorovskaya, Predgorny District, Stavropol Krai, Russia, 357350",
        "lat": 44.0302,
        "lng": 42.9601,
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
        "id": 1109,
        "name": {
            "en": "St.George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Georgiyevsk",
        "city": "Russia",
        "address": "Georgiyevsk, Stavropol Krai, Russia",
        "lat": 44.15194,
        "lng": 43.46972,
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
        "id": 1110,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Budyonnovsk",
        "city": "Russia",
        "address": "Holy Cross Church (Budyonnovsk, Stavropol Krai, Russia)",
        "lat": 44.7806,
        "lng": 44.1669,
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
        "id": 1111,
        "name": {
            "en": "Holy Resurrection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Budyonnovsk",
        "city": "Russia",
        "address": "Holy Cross Church (Budyonnovsk, Stavropol Krai, Russia)",
        "lat": 44.7806,
        "lng": 44.1669,
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
        "id": 1112,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Edissiya",
        "city": "Russia",
        "address": "Church of the Holy Mother of God (Edissiya, Stavropol Krai, Russia)",
        "lat": 44.0442,
        "lng": 44.3268,
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
        "id": 1113,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Vladikavkaz",
        "city": "Russia",
        "address": "St Gregory the Illuminator Church (Vladikavkaz, North Ossetia–Alania, Russia)",
        "lat": 43.02016,
        "lng": 44.68196,
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
        "id": 1114,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Cherkessk",
        "city": "Russia",
        "address": "St George Church (Cherkessk, Karachay-Cherkessia, Russia)",
        "lat": 44.22333,
        "lng": 42.05778,
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
        "id": 1115,
        "name": {
            "en": "Holy Savior",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Derpent",
        "city": "Russia",
        "address": "Ulitsa Mazakhira Rzayeva, 37, Derbent, Republic of Dagestan, Russia, 368600",
        "lat": 42.058154,
        "lng": 48.286968,
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
        "id": 1116,
        "name": {
            "en": "Sts. Peter And Paul",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Makhachkala",
        "city": "Russia",
        "address": "St Peter and St Paul Church (Makhachkala, Republic of Dagestan, Russia)",
        "lat": 42.9846,
        "lng": 47.5048,
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
        "id": 1117,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Kizlyar",
        "city": "Russia",
        "address": "im. ul. Kirova, Kizlyar, Republic of Dagestan, Russia, 368830",
        "lat": 43.8519,
        "lng": 46.711,
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
        "id": 1118,
        "name": {
            "en": "St. Grigoris",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Nyugdi",
        "city": "Russia",
        "address": "Nyugdi, Republic of Dagestan, Russia, 368193",
        "lat": 42.0939,
        "lng": 48.0418,
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
        "id": 1119,
        "name": {
            "en": "St. Hripsime",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Astrakhan",
        "city": "Russia",
        "address": "Ulitsa Chelyuskintsev, 105, Astrakhan, Astrakhan Oblast, Russia, 414000",
        "lat": 46.3479,
        "lng": 48.0286,
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
        "id": 1120,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Astrakhan",
        "city": "Russia",
        "address": "Sovetskaya Ulitsa, 36, Astrakhan, Astrakhan Oblast, Russia, 414000",
        "lat": 46.3499,
        "lng": 48.0347,
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
        "id": 1121,
        "name": {
            "en": "Armenian Genocide",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Astrakhan",
        "city": "Russia",
        "address": "Square \"Armenia\", Sovetskaya Ulitsa, 36, Astrakhan, Astrakhan Oblast, Russia, 414000",
        "lat": 46.3499,
        "lng": 48.0347,
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
        "id": 1122,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Volgograd",
        "city": "Russia",
        "address": "Ulitsa Novoryadskaya, 124, Volgograd, Volgograd Oblast, Russia, 400081",
        "lat": 48.729129,
        "lng": 44.484787,
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
        "id": 1123,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Volgograd",
        "city": "Russia",
        "address": "Volgograd, Volgograd Oblast, Russia",
        "lat": 48.729129,
        "lng": 44.484787,
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
        "id": 1124,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Volgograd",
        "city": "Russia",
        "address": "Khachkar (Mamayev Kurgan, Volgograd, Russia)",
        "lat": 48.7426,
        "lng": 44.5375,
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
        "id": 1125,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Saratov",
        "city": "Russia",
        "address": "Volzhskaya Ulitsa, 36, Saratov, Saratov Oblast, Russia, 410031",
        "lat": 51.5293,
        "lng": 46.0359,
        "description": {
            "en": "(Surb Astvatsatsin) is part of an important cultural and religious compound that includes a Sunday school, a museum, and a library.",
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
        "id": 1126,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Saratov",
        "city": "Russia",
        "address": "Khachkar (Chernyshevskogo Avenue, Saratov, Russia)",
        "lat": 51.5346,
        "lng": 46.0047,
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
        "id": 1127,
        "name": {
            "en": "Erevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Saratov",
        "city": "Russia",
        "address": "Ulitsa Pervomayskaya 33/35, Saratov, Saratov Oblast, Russia",
        "lat": 51.5306,
        "lng": 46.0341,
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
        "id": 1128,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Samara",
        "city": "Russia",
        "address": "Ulitsa Novo-Sadovaya, 154?, Samara, Samara Oblast, Russia, 443068",
        "lat": 53.2339,
        "lng": 50.1926,
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
        "id": 1129,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Togliatti",
        "city": "Russia",
        "address": "Komsomolskoye Shosse, 2?, Tolyatti, Samara Oblast, Russia, 445046",
        "lat": 53.4726,
        "lng": 49.4748,
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
        "id": 1130,
        "name": {
            "en": "Friendship between nations",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Togliatti",
        "city": "Russia",
        "address": "ul. Zhilina, Tolyatti, Samara Oblast, Russia, 445020",
        "lat": 53.5107,
        "lng": 49.4177,
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
        "id": 1131,
        "name": {
            "en": "Artsakh",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Togliatti",
        "city": "Russia",
        "address": "????? Mupa, 170-?, Tolyatti, Samara Oblast, Russia, 445035",
        "lat": 53.5079,
        "lng": 49.4284,
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
        "id": 1132,
        "name": {
            "en": "David Bek",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kazan",
        "city": "Russia",
        "address": "Dorozhnaya Ulitsa, 15?, Kazan, Republic of Tatarstan, Russia, 420071",
        "lat": 55.8016,
        "lng": 49.2207,
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
        "id": 1133,
        "name": {
            "en": "Granat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Naberezhnye Chelny",
        "city": "Russia",
        "address": "Avtozavodskiy Prospekt, 7, Naberezhnye Chelny, Republic of Tatarstan, Russia, 423815",
        "lat": 55.7439,
        "lng": 52.3954,
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
        "id": 1134,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Bolgar",
        "city": "Russia",
        "address": "Bolgar Historical and Archaeological Complex, Bolgar, Republic of Tatarstan, Russia, 422840",
        "lat": 54.974,
        "lng": 49.0318,
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
        "id": 1135,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Almetyevsk",
        "city": "Russia",
        "address": "Park of Friendship of Peoples, Almetyevsk, Republic of Tatarstan, Russia, 423450",
        "lat": 54.9039,
        "lng": 52.315,
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
        "id": 1136,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Neftekamsk",
        "city": "Russia",
        "address": "Park of Friendship of Peoples, Neftekamsk, Republic of Bashkortostan, Russia",
        "lat": 56.088,
        "lng": 54.2483,
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
        "id": 1137,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Salavat",
        "city": "Russia",
        "address": "Park of Culture and Recreation, Salavat, Republic of Bashkortostan, Russia",
        "lat": 53.3616,
        "lng": 55.9246,
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
        "id": 1138,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Oktyabrsky",
        "city": "Russia",
        "address": "Park of Culture and Leisure, Oktyabrsky, Republic of Bashkortostan, Russia",
        "lat": 54.4769,
        "lng": 53.471,
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
        "id": 1139,
        "name": {
            "en": "Noy",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lebyazhy",
        "city": "Russia",
        "address": "Ulitsa Tsentralnaya, Lebyazhy (near Ufa), Karmaskalinsky District, Republic of Bashkortostan, Russia",
        "lat": 54.6636,
        "lng": 55.8242,
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
        "id": 1140,
        "name": {
            "en": "Araks",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lebyazhy",
        "city": "Russia",
        "address": "Ulitsa Tsentralnaya, Lebyazhy (near Ufa), Karmaskalinsky District, Republic of Bashkortostan, Russia",
        "lat": 54.6634,
        "lng": 55.824,
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
        "id": 1141,
        "name": {
            "en": "Otdykh",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lebyazhy",
        "city": "Russia",
        "address": "Ulitsa Tsentralnaya, 1, k1, village Lebyazhy (near Ufa), Ufa district, Republic of Bashkortostan, Russia",
        "lat": 54.6635,
        "lng": 55.8242,
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
        "id": 1142,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Perm",
        "city": "Russia",
        "address": "ul. Vasiliya Vasilyeva, 7, Perm, Perm Krai, Russia, 614033",
        "lat": 58.0137,
        "lng": 56.2466,
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
        "id": 1143,
        "name": {
            "en": "Nayiri",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Perm",
        "city": "Russia",
        "address": "ul. Sovetskaya, 67, Perm, Perm Krai, Russia, 614000",
        "lat": 58.0086,
        "lng": 56.2263,
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
        "id": 1144,
        "name": {
            "en": "St. Gregory the Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Izhevsk",
        "city": "Russia",
        "address": "Ulitsa Vasilievskaya, 7, Izhevsk, Udmurt Republic, Russia",
        "lat": 56.8378,
        "lng": 53.2169,
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
        "id": 1145,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Sarapul",
        "city": "Russia",
        "address": "Friendship of Peoples Park (approx. location of Armenian memorial area)",
        "lat": 56.4763,
        "lng": 53.7978,
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
        "id": 1146,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Glazov",
        "city": "Russia",
        "address": "Friendship of Peoples Park (approx. location of Armenian memorial area)",
        "lat": 58.1408,
        "lng": 52.658,
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
        "id": 1147,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Cheboksary",
        "city": "Russia",
        "address": "Ulitsa Yaroslavskaya, 40B, Cheboksary, Chuvash Republic, Russia, 428012",
        "lat": 56.1388,
        "lng": 47.2496,
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
        "id": 1148,
        "name": {
            "en": "Sevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kanash",
        "city": "Russia",
        "address": "Krasnoarmeyskaya Ulitsa, 14, Kanash, Chuvash Republic, Russia",
        "lat": 55.5062,
        "lng": 47.4913,
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
        "id": 1149,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kanash",
        "city": "Russia",
        "address": "",
        "lat": 55.5062,
        "lng": 47.4913,
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
        "id": 1150,
        "name": {
            "en": "Holy Savior",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Nizhny Novgorod",
        "city": "Russia",
        "address": "Ulitsa Shevchenko, 2, Nizhny Novgorod, Nizhny Novgorod Oblast, Russia, 603000",
        "lat": 56.3206,
        "lng": 44.0098,
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
        "id": 1151,
        "name": {
            "en": "Abrikos",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Nizhny Novgorod",
        "city": "Russia",
        "address": "Ulitsa Krasnaya Sloboda, 8, Nizhny Novgorod, Nizhny Novgorod Oblast, Russia",
        "lat": 56.3213,
        "lng": 44.0094,
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
        "id": 1152,
        "name": {
            "en": "Holy Savior",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Kirov",
        "city": "Russia",
        "address": "Church of Christ the Saviour, Moskovskaya Ulitsa 120, Kirov, Kirov Oblast, Russia 610033",
        "lat": 58.601403,
        "lng": 49.619057,
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
        "id": 1153,
        "name": {
            "en": "Kamelot",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kirov",
        "city": "Russia",
        "address": "Parkovaya Ulitsa 5, Kirov, Kirov Oblast, Russia 610926",
        "lat": 58.5379,
        "lng": 49.7076,
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
        "id": 1154,
        "name": {
            "en": "Erevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Penza",
        "city": "Russia",
        "address": "Ulitsa Kirova, 42, Penza, Penza Oblast, Russia 440600",
        "lat": 53.1949,
        "lng": 45.0186,
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
        "id": 1155,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Yaroslavl",
        "city": "Russia",
        "address": "Tutayevskoye Shosse 95 ?????? 1, Yaroslavl, Yaroslavl Oblast, Russia 150033",
        "lat": 57.6816,
        "lng": 39.7707,
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
        "id": 1156,
        "name": {
            "en": "Kavkazskaya Plennitsa",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Yaroslavl",
        "city": "Russia",
        "address": "Bol'shaya Oktyabr'skaya Ulitsa 37/1, Yaroslavl, Russia",
        "lat": 57.6239,
        "lng": 39.8878,
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
        "id": 1157,
        "name": {
            "en": "Kovcheg",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Yaroslavl",
        "city": "Russia",
        "address": "Ulitsa Vishnyaki 3?, Yaroslavl, Russia",
        "lat": 57.5808,
        "lng": 39.9517,
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
        "id": 1158,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Vladimir",
        "city": "Russia",
        "address": "Pogodina Street 10, Vladimir, Vladimir Oblast, Russia",
        "lat": 56.1546,
        "lng": 40.452,
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
        "id": 1159,
        "name": {
            "en": "Holy Resurrection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tver",
        "city": "Russia",
        "address": "Naberezhnaya Afanasiya Nikitina 38, Tver, Tver Oblast, Russia 170026",
        "lat": 56.866375,
        "lng": 35.905037,
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
        "id": 1160,
        "name": {
            "en": "Holy Resurrection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Lipetsk",
        "city": "Russia",
        "address": "Voskresenskoe settlement, Chaplyginsky District, Lipetsk Oblast, Russia 399833",
        "lat": 53.5331,
        "lng": 38.8428,
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
        "id": 1161,
        "name": {
            "en": "Dvin",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lipetsk",
        "city": "Russia",
        "address": "Ploshchad Kosmonavtov 110, Lipetsk, Lipetsk Oblast, Russia 398035",
        "lat": 52.5962,
        "lng": 39.5687,
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
        "id": 1162,
        "name": {
            "en": "St. Stephen's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Kaliningrad",
        "city": "Russia",
        "address": "Ulitsa Aleksandra Nevskogo 78B, Kaliningrad, Kaliningrad Oblast, Russia 236016",
        "lat": 54.7387,
        "lng": 20.5249,
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
        "id": 1163,
        "name": {
            "en": "Kamelot",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kaliningrad",
        "city": "Russia",
        "address": "Mamonovskoe Shosse 12, Kaliningrad, Russia",
        "lat": 54.6656,
        "lng": 20.4538,
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
        "id": 1164,
        "name": {
            "en": "Zolotoye ozero",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kaliningrad",
        "city": "Russia",
        "address": "Mamonovskoe Shosse 13/1, Kaliningrad, Russia",
        "lat": 54.6536,
        "lng": 20.4692,
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
        "id": 1165,
        "name": {
            "en": "Novy Ochag",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Svetlogorsk",
        "city": "Russia",
        "address": "Oktyabrskaya Ulitsa 19, Svetlogorsk, Kaliningrad Oblast, Russia 238560",
        "lat": 54.9438,
        "lng": 20.1517,
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
        "id": 1166,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Murmansk",
        "city": "Russia",
        "address": "Geroev Severomortsev Avenue 1, Murmansk, Murmansk Oblast, Russia 183038",
        "lat": 68.9683,
        "lng": 33.0839,
        "description": {
            "en": "is the world’s northernmost outdoor khachkar.",
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
        "id": 1167,
        "name": {
            "en": "Erevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Murmansk",
        "city": "Russia",
        "address": "proezd Ivana Khalatina 3, Murmansk, Murmansk Oblast, Russia 183031",
        "lat": 68.9566,
        "lng": 33.0722,
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
        "id": 1168,
        "name": {
            "en": "Urartu",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Murmansk",
        "city": "Russia",
        "address": "Ulitsa Ushakova 9, Murmansk, Murmansk Oblast, Russia 183017",
        "lat": 68.9626,
        "lng": 33.0664,
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
        "id": 1169,
        "name": {
            "en": "St. Karapet",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Yekaterinburg",
        "city": "Russia",
        "address": "Ulitsa Yevgeniya Savkova 2, Yekaterinburg, Sverdlovsk Oblast, Russia 620105",
        "lat": 56.8193,
        "lng": 60.6177,
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
        "id": 1170,
        "name": {
            "en": "Kinza I Bazilik",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Yekaterinburg",
        "city": "Russia",
        "address": "Ulitsa Sverdlova 11A, Yekaterinburg, Sverdlovsk Oblast, Russia 620027",
        "lat": 56.8487,
        "lng": 60.6142,
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
        "id": 1171,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Chelyabinsk",
        "city": "Russia",
        "address": "Ulitsa Beyvelya 7, Kurchatovsky District, Chelyabinsk, Chelyabinsk Oblast 454100, Russia",
        "lat": 55.2016,
        "lng": 61.3039,
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
        "id": 1172,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Chelyabinsk",
        "city": "Russia",
        "address": "Ulitsa Kirova, 60?, Chelyabinsk, Chelyabinsk Oblast 454084, Russia",
        "lat": 55.17421,
        "lng": 61.39909,
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
        "id": 1173,
        "name": {
            "en": "Stary Erevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Chelyabinsk",
        "city": "Russia",
        "address": "Ulitsa Molodogvardeitsev, 39?, Chelyabinsk, Chelyabinsk Oblast 454136, Russia",
        "lat": 55.1756,
        "lng": 61.3038,
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
        "id": 1174,
        "name": {
            "en": "Noy",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Chelyabinsk",
        "city": "Russia",
        "address": "Ulitsa Beyvelya, 9, Chelyabinsk, Chelyabinsk Oblast 454021, Russia",
        "lat": 55.2019,
        "lng": 61.3031,
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
        "id": 1175,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Surgut",
        "city": "Russia",
        "address": "Aeroflotskaya Ulitsa 35, Surgut, Khanty-Mansi Autonomous Okrug, Russia",
        "lat": 61.3269,
        "lng": 73.4015,
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
        "id": 1176,
        "name": {
            "en": "Armianskaya Kukhnya",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Surgut",
        "city": "Russia",
        "address": "Ulitsa Nizhnevartovskoye Shosse, 2, Surgut, Khanty-Mansi Autonomous Okrug, Russia",
        "lat": 61.2478,
        "lng": 73.3849,
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
        "id": 1177,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Novosibirsk",
        "city": "Russia",
        "address": "Oktyabrskaya Ulitsa 9, Novosibirsk 630099, Russia",
        "lat": 55.0302,
        "lng": 82.9204,
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
        "id": 1178,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Novosibirsk",
        "city": "Russia",
        "address": "Ulitsa Mayakovskogo 5A, Novosibirsk, 630037, Russia",
        "lat": 55.0303,
        "lng": 82.9206,
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
        "id": 1179,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Ob",
        "city": "Russia",
        "address": "Lineynaya Ulitsa 2, Ob, Novosibirsk Oblast, Russia 633100",
        "lat": 55.018,
        "lng": 82.65,
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
        "id": 1180,
        "name": {
            "en": "Lazurny Bereg",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kemerovo",
        "city": "Russia",
        "address": "Ulitsa Zarechnaya 14, Sukhovo, Kemerovo Oblast, Russia 650003",
        "lat": 55.3318,
        "lng": 86.1239,
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
        "id": 1181,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Kemerovo",
        "city": "Russia",
        "address": "Ulitsa Noyabrskaya 58A, Kemerovo, Kemerovo Oblast, Russia 650000",
        "lat": 55.3459,
        "lng": 86.0846,
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
        "id": 1182,
        "name": {
            "en": "Russian Armenian Friendship",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Novokuznetsk",
        "city": "Russia",
        "address": "Central District, Novokuznetsk, Kemerovo Oblast – Kuzbass, Russia",
        "lat": 53.757,
        "lng": 87.1336,
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
        "id": 1183,
        "name": {
            "en": "Urartu",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Novokuznetsk",
        "city": "Russia",
        "address": "Prospekt N. S. Yermakova 30A, Novokuznetsk, Kemerovo Oblast, Russia 654007",
        "lat": 53.7576,
        "lng": 87.1344,
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
        "id": 1184,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Sosnovka",
        "city": "Russia",
        "address": "Ulitsa Korodnaya 30, Sosnovka, Novokuznetsky District, Kemerovo Oblast, Russia 654201",
        "lat": 53.7692,
        "lng": 87.2316,
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
        "id": 1185,
        "name": {
            "en": "Vard",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Sosnovka",
        "city": "Russia",
        "address": "Kordonnaya Street 13/1, Sosnovka, Novokuznetsk, Kemerovo Oblast, Russia 654201",
        "lat": 53.783,
        "lng": 87.129,
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
        "id": 1186,
        "name": {
            "en": "Russian Armenian Friendship",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Barnaul",
        "city": "Russia",
        "address": "Prospekt Lenina, 61, Barnaul, Altai Krai, Russia 656049",
        "lat": 53.3476,
        "lng": 83.7785,
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
        "id": 1187,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Barnaul",
        "city": "Russia",
        "address": "Ulitsa Severovokzalnaya 23, Barnaul, Altai Krai, Russia 656023",
        "lat": 53.3512,
        "lng": 83.7734,
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
        "id": 1188,
        "name": {
            "en": "St. Hripsime",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Barnaul",
        "city": "Russia",
        "address": "Ulitsa Popova 210, Barnaul, Altai Krai, Russia 656067",
        "lat": 53.3449,
        "lng": 83.7916,
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
        "id": 1189,
        "name": {
            "en": "St. Sargis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Krasnoyarsk",
        "city": "Russia",
        "address": "Molokova Street 3, Krasnoyarsk, Krasnoyarsk Krai, Russia 660077",
        "lat": 56.0442,
        "lng": 92.9133,
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
        "id": 1190,
        "name": {
            "en": "Urartu",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Krasnoyarsk",
        "city": "Russia",
        "address": "Karla Marksa St. 14A, Krasnoyarsk, Krasnoyarsk Krai 660049, Russia",
        "lat": 56.0086,
        "lng": 92.8728,
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
        "id": 1191,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Norilsk",
        "city": "Russia",
        "address": "Ulitsa Kirova, 15A, Norilsk, Krasnoyarsk Krai, Russia, 663305",
        "lat": 69.35579,
        "lng": 88.18929,
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
        "id": 1192,
        "name": {
            "en": "St. John The Baptist",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Irkutsk",
        "city": "Russia",
        "address": "Baikalskaya St 37/1, Irkutsk, Russia 664047",
        "lat": 52.27778,
        "lng": 104.30301,
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
        "id": 1193,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Blagoveshchenk",
        "city": "Russia",
        "address": "Relochny Lane 15, Blagoveshchensk, Amur Oblast, Russia 675000",
        "lat": 50.261571,
        "lng": 127.513896,
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
        "id": 1194,
        "name": {
            "en": "Ani",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Blagoveshchenk",
        "city": "Russia",
        "address": "Oktyabrskaya Ulitsa 190, Blagoveshchensk, Russia 675000",
        "lat": 50.2619,
        "lng": 127.5306,
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
        "id": 1195,
        "name": {
            "en": "Panorama",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Blagoveshchenk",
        "city": "Russia",
        "address": "Ulitsa Mukhina 114, Blagoveshchensk, Russia 675000",
        "lat": 50.2607,
        "lng": 127.5352,
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
        "id": 1196,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Blagoveshchenk",
        "city": "Russia",
        "address": "Krasnoflotskaya St 147, Blagoveshchensk, Russia 675000",
        "lat": 50.2629,
        "lng": 127.5336,
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
        "id": 1197,
        "name": {
            "en": "St. Karapet",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Yakutsk",
        "city": "Russia",
        "address": "Okrugnaya Doroga 4A, Yakutsk, Republic of Sakha (Yakutia), Russia 677000",
        "lat": 62.0539,
        "lng": 129.7382,
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
        "id": 1198,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Vladivostok",
        "city": "Russia",
        "address": "Volodarskogo St 13, Vladivostok, Primorsky Krai, Russia 690001",
        "lat": 43.1165,
        "lng": 131.91135,
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
        "id": 1199,
        "name": {
            "en": "Massis",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vladivostok",
        "city": "Russia",
        "address": "Tramvaynaya St 14B, Vladivostok, Russia 690005",
        "lat": 43.1186,
        "lng": 131.8958,
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
        "id": 1200,
        "name": {
            "en": "Spartak",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vladivostok",
        "city": "Russia",
        "address": "Svetlanskaya St 147D, Vladivostok, Russia 690001",
        "lat": 43.1109,
        "lng": 131.9227,
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
        "id": 1201,
        "name": {
            "en": "Tri Peskaria",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vladivostok",
        "city": "Russia",
        "address": "100-letiya Vladivostoka Ave 182, Vladivostok, Russia 690068",
        "lat": 43.1349,
        "lng": 131.9056,
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
        "id": 1202,
        "name": {
            "en": "Sevan",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Vladivostok",
        "city": "Russia",
        "address": "Ulitsa Makovskogo 42A, Vladivostok, Russia 690041",
        "lat": 43.223,
        "lng": 132.0009,
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
        "id": 1203,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Nakhodka",
        "city": "Russia",
        "address": "42.8133, 132.8735",
        "lat": null,
        "lng": null,
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
        "id": 1204,
        "name": {
            "en": "Mayrig",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Riyadh",
        "city": "Saudi Arabia",
        "address": "Hilton Riyadh Hotel, Eastern Ring Rd, Granada, Riyadh 13241, Saudi Arabia",
        "lat": 24.7966,
        "lng": 46.7418,
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
        "id": 1205,
        "name": {
            "en": "Lusin",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Riyadh",
        "city": "Saudi Arabia",
        "address": "Centria Mall, Olaya-Tahlia Intersection, Riyadh 12241, Saudi Arabia",
        "lat": 24.6939,
        "lng": 46.6856,
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
        "id": 1206,
        "name": {
            "en": "Cilicia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Riyadh",
        "city": "Saudi Arabia",
        "address": "24.7136, 46.6753",
        "lat": null,
        "lng": null,
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
        "id": 1207,
        "name": {
            "en": "Lavash",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Riyadh",
        "city": "Saudi Arabia",
        "address": "8049 Prince Muhammad Bin Abdulaziz Rd, Al Olaya, Riyadh 12313, Saudi Arabia",
        "lat": 24.7038,
        "lng": 46.6899,
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
        "id": 1208,
        "name": {
            "en": "Lusin",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Jeddah",
        "city": "Saudi Arabia",
        "address": "Centria Mall, Prince Mohammed bin Abdulaziz Rd (Tahlia), Al Andalus, Jeddah, Saudi Arabia",
        "lat": 21.5586,
        "lng": 39.1612,
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
        "id": 1209,
        "name": {
            "en": "Jermencic",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Sokobanja",
        "city": "Serbia",
        "address": "Mount Ozren, near Sokobanja, Zaje?ar District, Serbia 18230",
        "lat": 43.61621,
        "lng": 21.83175,
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
        "id": 1210,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Singapore",
        "city": "Singapore",
        "address": "60 Hill Street, Singapore 179366",
        "lat": 1.2892,
        "lng": 103.8429,
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
        "id": 1211,
        "name": {
            "en": "Armenian Heritage Gallery",
            "fr": "",
            "hy": ""
        },
        "category": "museum",
        "country": "Singapore",
        "city": "Singapore",
        "address": "60 Hill St, Singapore 179366",
        "lat": 1.2892,
        "lng": 103.8429,
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
        "id": 1212,
        "name": {
            "en": "Armenian",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Singapore",
        "city": "Singapore",
        "address": "Singapore 179934",
        "lat": 1.2944,
        "lng": 103.8493,
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
        "id": 1213,
        "name": {
            "en": "Sarkies",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Singapore",
        "city": "Singapore",
        "address": "Newton, Singapore",
        "lat": 1.3141,
        "lng": 103.8366,
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
        "id": 1214,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Bratislava",
        "city": "Slovakia",
        "address": "Bratislava Old Town, Slovakia",
        "lat": 48.1417,
        "lng": 17.1083,
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
        "id": 1215,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Bratislava",
        "city": "Slovakia",
        "address": "Bratislava Old Town, Slovakia",
        "lat": 48.1416,
        "lng": 17.1085,
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
        "id": 1216,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Johannesburg",
        "city": "South Africa",
        "address": "1 Duncombe Road, cnr Jan Smuts Avenue, Forest Town, Johannesburg 2193, South Africa",
        "lat": -26.1776,
        "lng": 28.0026,
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
        "id": 1217,
        "name": {
            "en": "Casa Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "cultural_center",
        "country": "Barcelona",
        "city": "Spain",
        "address": "Carrer del Concili de Trento, 20, 08018 Barcelona, Spain",
        "lat": 41.4047,
        "lng": 2.1978,
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
        "id": 1218,
        "name": {
            "en": "Urartu Al Foc",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Barcelona",
        "city": "Spain",
        "address": "Avinguda de Santa Maria 8, 08860 Castelldefels, Barcelona, Spain",
        "lat": 41.2796,
        "lng": 1.9717,
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
        "id": 1219,
        "name": {
            "en": "Urartu Fresc",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Barcelona",
        "city": "Spain",
        "address": "Av. de la Constitució 109, 08860 Castelldefels, Barcelona, Spain",
        "lat": 41.2796,
        "lng": 1.9717,
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
        "id": 1220,
        "name": {
            "en": "El Gust D'Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Barcelona",
        "city": "Spain",
        "address": "Carrer de Garcilaso, 23, 08027 Barcelona, Spain",
        "lat": 41.4279,
        "lng": 2.1807,
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
        "id": 1221,
        "name": {
            "en": "Saint Jordi",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Lloret Del Mar",
        "city": "Spain",
        "address": "Carrer dels Màrtirs 14, 17310 Lloret de Mar, Girona, Spain",
        "lat": 41.7006,
        "lng": 2.8457,
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
        "id": 1222,
        "name": {
            "en": "Yerevan",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Lloret Del Mar",
        "city": "Spain",
        "address": "Carrer de la Vila 4, 17310 Lloret de Mar, Girona, Spain",
        "lat": 41.6998,
        "lng": 2.8452,
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
        "id": 1223,
        "name": {
            "en": "Armenian Genocide",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Lloret Del Mar",
        "city": "Spain",
        "address": "Camí del Repòs, 17310 Lloret de Mar, Girona, Spain",
        "lat": 41.7003,
        "lng": 2.8465,
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
        "id": 1224,
        "name": {
            "en": "Tigran Gastrobar",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Valencia",
        "city": "Spain",
        "address": "Passeig de l’Albereda 54, 46023 Valencia, Spain",
        "lat": 39.4703,
        "lng": -0.3639,
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
        "id": 1225,
        "name": {
            "en": "Armenian Genocide",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Valencia",
        "city": "Spain",
        "address": "Jardines del Antiguo Cauce del Río Turia (near Pont de l’Exposició), Valencia, Spain",
        "lat": 39.4761,
        "lng": -0.3763,
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
        "id": 1226,
        "name": {
            "en": "Armenian Grill House",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Punta Prima",
        "city": "Spain",
        "address": "Calle Escorpiones 2T, Centro Comercial Punta Marina, 03185 Torrevieja, Alicante, Spain",
        "lat": 37.9406,
        "lng": -0.7352,
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
        "id": 1227,
        "name": {
            "en": "Armenian Shish Kebab",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Punta Prima",
        "city": "Spain",
        "address": "Calle Escorpiones 2T, CC Punta Marina, 03185 Torrevieja, Alicante, Spain",
        "lat": 37.9406,
        "lng": -0.7352,
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
        "id": 1228,
        "name": {
            "en": "St. Mary Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Malaga",
        "city": "Spain",
        "address": "Calle Los Naranjos 6, 29630 Benalmádena, Málaga, Spain",
        "lat": 36.5952,
        "lng": -4.5391,
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
        "id": 1229,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Malaga",
        "city": "Spain",
        "address": "Parque de la Paloma, Avenida Federico García Lorca, 29630 Benalmádena, Málaga, Spain",
        "lat": 36.5962,
        "lng": -4.5309,
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
        "id": 1230,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "San Sebastian",
        "city": "Spain",
        "address": "Jardines de la Catedral del Buen Pastor, Urdaneta Kalea 12, 20006 Donostia–San Sebastián, Gipuzkoa, Spain",
        "lat": 43.317,
        "lng": -1.9812,
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
        "id": 1231,
        "name": {
            "en": "Pita Club Arxiduc",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Balearic Islands",
        "city": "Spain",
        "address": "Carrer de l’Arxiduc Lluís Salvador, 72, 07004 Palma, Illes Balears, Spain",
        "lat": 39.5835,
        "lng": 2.6512,
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
        "id": 1232,
        "name": {
            "en": "Barmenia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Balearic Islands",
        "city": "Spain",
        "address": "Avinguda de Joan Miró 15, 07014 Palma, Illes Balears, Spain",
        "lat": 39.5676,
        "lng": 2.6306,
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
        "id": 1233,
        "name": {
            "en": "Rincon Armenio",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Canary Islands",
        "city": "Spain",
        "address": "Avenida de la Playa 2, 38660 Playa de las Américas, Tenerife, Canary Islands, Spain",
        "lat": 28.0648,
        "lng": -16.7293,
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
        "id": 1234,
        "name": {
            "en": "St Gregory",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Khartoum",
        "city": "Sudan",
        "address": "Khartoum 2, Khartoum, Sudan",
        "lat": 15.5969,
        "lng": 32.553,
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
        "id": 1235,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Stockholm",
        "city": "Sweden",
        "address": "Överjärva gårdsväg, 170 67 Solna, Sweden",
        "lat": 59.3807,
        "lng": 18.0005,
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
        "id": 1236,
        "name": {
            "en": "Duduk",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Stockholm",
        "city": "Sweden",
        "address": "Armégatan 14, 171 71 Solna (Stockholm), Sweden",
        "lat": 59.3607,
        "lng": 18.0005,
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
        "id": 1237,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Sodertalje",
        "city": "Sweden",
        "address": "Prästgårdsvägen 8, 151 61 Södertälje, Sweden",
        "lat": 59.2018,
        "lng": 17.6284,
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
        "id": 1238,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Sodertalje",
        "city": "Sweden",
        "address": "Prästgårdsvägen 8, 151 61 Södertälje, Sweden",
        "lat": 59.2018,
        "lng": 17.6284,
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
        "id": 1239,
        "name": {
            "en": "Kollgrill 98",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Sodertalje",
        "city": "Sweden",
        "address": "Storvretsvägen 4, 147 54 Tumba, Sweden",
        "lat": 59.1986,
        "lng": 17.8332,
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
        "id": 1240,
        "name": {
            "en": "Genocide",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Orebro",
        "city": "Sweden",
        "address": "Varbergagatan 260, 703 52 Örebro, Sweden",
        "lat": 59.2618,
        "lng": 15.1996,
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
        "id": 1241,
        "name": {
            "en": "Yerevan Mangal",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Orebro",
        "city": "Sweden",
        "address": "Järntorgsgatan 6, 703 39 Örebro, Sweden",
        "lat": 59.2689,
        "lng": 15.2132,
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
        "id": 1242,
        "name": {
            "en": "St. Hagop",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Geneva",
        "city": "Switzerland",
        "address": "Route de Troinex 64, 1256 Troinex, Geneva, Switzerland",
        "lat": 46.1658,
        "lng": 6.1461,
        "description": {
            "en": "The Hagop D. Topalian Armenian Center, which sits next to the church, hosts the community’s cultural events, including a Wednesday school for the children. The interesting library is worth a visit. Switzerland’s main Armenian newspaper, Artzakank, is available there.",
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
        "id": 1243,
        "name": {
            "en": "The Streetlights Of Memory",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Geneva",
        "city": "Switzerland",
        "address": "arc Trembley, Avenue Giuseppe Motta, 1209 Geneva, Switzerland",
        "lat": 46.217,
        "lng": 6.1118,
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
        "id": 1244,
        "name": {
            "en": "Arakel",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Geneva",
        "city": "Switzerland",
        "address": "Rue Henri-Blanvalet 17, 1207 Genève, Switzerland",
        "lat": 46.2039,
        "lng": 6.1672,
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
        "id": 1245,
        "name": {
            "en": "Mayrig",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Geneva",
        "city": "Switzerland",
        "address": "Rue Caroline 8, 1227 Genève, Switzerland",
        "lat": 46.2029,
        "lng": 6.1458,
        "description": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "image": "",
        "verified": true,
        "ratings": [],
        "comments": [],
        "source": "",
        "furtherReading": ""
    },
    {
        "id": 1246,
        "name": {
            "en": "Holy Forty Martyrs",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Jdayde (Jdeydeh) Quarter, Salibeh Street, Aleppo, Syria",
        "lat": 36.2062,
        "lng": 37.1553,
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
        "id": 1247,
        "name": {
            "en": "Haigazian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Aziziyeh / New Aleppo district (near the Armenian schools cluster), Aleppo, Syria",
        "lat": 36.2072,
        "lng": 37.1379,
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
        "id": 1248,
        "name": {
            "en": "Our Lady Of Pity",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Aziziyah district, near Jdaydeh (Old City edge), Aleppo, Syria",
        "lat": 36.2048,
        "lng": 37.1497,
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
        "id": 1249,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Jdeydeh (Al-Jdayde) Armenian quarter, near Salibeh Street, Aleppo, Syria",
        "lat": 36.206,
        "lng": 37.1558,
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
        "id": 1250,
        "name": {
            "en": "Kilikian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Aziziyeh / Armenian school district, Aleppo, Syria",
        "lat": 36.2079,
        "lng": 37.1446,
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
        "id": 1251,
        "name": {
            "en": "Emmanuel",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Aziziyeh district, near the Armenian Evangelical school area, Aleppo, Syria",
        "lat": 36.2069,
        "lng": 37.1442,
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
        "id": 1252,
        "name": {
            "en": "Baron",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Baron Street, Aziziyeh District, Aleppo, Syria",
        "lat": 36.205,
        "lng": 37.15,
        "description": {
            "en": "Lawrence of Arabia, Agatha Christie (who wrote Murder on the Orient Express there), Charles de Gaulle, David Rockefeller, Theodore Roosevelt, Charles Lindbergh, Gamal Abdel Nasser and Yuri Gagarin stayed there",
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
        "id": 1253,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Aziziyeh district (Armenian quarter), near Armenian schools area, Aleppo, Syria",
        "lat": 36.2075,
        "lng": 37.1452,
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
        "id": 1254,
        "name": {
            "en": "Lazar Najarian - Kaloust Gulbenkian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Aziziyeh District, near Baron Street / Armenian school complex, Aleppo, Syria",
        "lat": 36.2068,
        "lng": 37.1449,
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
        "id": 1255,
        "name": {
            "en": "St. James Hagop",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Iman Street, Old Syriac (Assyrian) Quarter, Aleppo, Syria",
        "lat": 36.2173,
        "lng": 37.1452,
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
        "id": 1256,
        "name": {
            "en": "Mkhitarist",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Baron Street / Aziziyeh Armenian school district, Aleppo, Syria",
        "lat": 36.2069,
        "lng": 37.145,
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
        "id": 1257,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Elias IV Patriarch Street, Suleymaniyeh (Sulaimaniyeh), Aleppo, Syria",
        "lat": 36.2198,
        "lng": 37.1587,
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
        "id": 1258,
        "name": {
            "en": "Holy Savior",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Suleimaniyeh District, Aleppo, Aleppo Governorate, Syria",
        "lat": 36.216208,
        "lng": 37.158244,
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
        "id": 1259,
        "name": {
            "en": "Bethel",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Suleimaniyeh, Aleppo, Syria",
        "lat": 36.2108,
        "lng": 37.1519,
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
        "id": 1260,
        "name": {
            "en": "Martyr's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "uleimaniyeh, Aleppo, Syria",
        "lat": 36.2147,
        "lng": 37.1556,
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
        "id": 1261,
        "name": {
            "en": "Grtasirats",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Suleimaniyeh District, Aleppo, Syria (near Jdeydeh edge)",
        "lat": 36.2192,
        "lng": 37.1593,
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
        "id": 1262,
        "name": {
            "en": "Gulbenkian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Suleimaniyeh District, Aleppo, Syria",
        "lat": 36.2186,
        "lng": 37.1589,
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
        "id": 1263,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Midan (Al-Midan), Aleppo, Syria",
        "lat": 36.2129,
        "lng": 37.1695,
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
        "id": 1264,
        "name": {
            "en": "Karen Jeppe",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Midan district, Aleppo, Syria (near Armenian Prelacy area)",
        "lat": 36.2126,
        "lng": 37.1689,
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
        "id": 1265,
        "name": {
            "en": "Zavarian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Midan district, Aleppo, Syria (within the Armenian church/school complex area)",
        "lat": 36.2123,
        "lng": 37.1691,
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
        "id": 1266,
        "name": {
            "en": "Sahakian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Midan district, Aleppo, Syria (inside St. Gregory Armenian Church complex)",
        "lat": 36.2122,
        "lng": 37.1693,
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
        "id": 1267,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Iman Street, Midan district, Aleppo, Syria",
        "lat": 36.2173,
        "lng": 37.1452,
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
        "id": 1268,
        "name": {
            "en": "Mesrobian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Midan district, Aleppo, Syria (adjacent to Surp Kevork / St. George Church area)",
        "lat": 36.2128,
        "lng": 37.1694,
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
        "id": 1269,
        "name": {
            "en": "Holy Trinity",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Al-Midan district, Aleppo, Syria",
        "lat": 36.2208,
        "lng": 37.1633,
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
        "id": 1270,
        "name": {
            "en": "Our Lady Of Annunciation",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aleppo",
        "city": "Syria",
        "address": "Sheikh Maqsoud district, Aleppo, Syria",
        "lat": 36.2311,
        "lng": 37.1546,
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
        "id": 1271,
        "name": {
            "en": "Notre Dame Queen Of The Univers",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Damascus",
        "city": "Syria",
        "address": "Bab Touma, Old Damascus, Syria",
        "lat": 33.513,
        "lng": 36.3136,
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
        "id": 1272,
        "name": {
            "en": "St. Sarkis",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Damascus",
        "city": "Syria",
        "address": "Bab Sharqi / Old Damascus, Damascus, Syria",
        "lat": 33.5119,
        "lng": 36.3039,
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
        "id": 1273,
        "name": {
            "en": "Kessab",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Kessab",
        "city": "Syria",
        "address": "Kessab (???), Latakia Governorate, Syria",
        "lat": 35.925,
        "lng": 35.989,
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
        "id": 1274,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Kessab",
        "city": "Syria",
        "address": "Kessab, Latakia Governorate, Syria",
        "lat": 35.9256,
        "lng": 35.9897,
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
        "id": 1275,
        "name": {
            "en": "Holy Trinity",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Kessab",
        "city": "Syria",
        "address": "Kessab, Latakia Governorate, Syria",
        "lat": 35.9249,
        "lng": 35.9892,
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
        "id": 1276,
        "name": {
            "en": "St. Michael",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Kessab",
        "city": "Syria",
        "address": "Kessab, Latakia Governorate, Syria",
        "lat": 35.9251,
        "lng": 35.9888,
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
        "id": 1277,
        "name": {
            "en": "Karadouran",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Karadouran",
        "city": "Syria",
        "address": "Karadouran (Garaturan / al-Samra), Kessab region, Latakia Governorate, Syria",
        "lat": 35.924,
        "lng": 35.9625,
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
        "id": 1278,
        "name": {
            "en": "St. Stephen's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Karadouran",
        "city": "Syria",
        "address": "Karadouran, Kessab region, Syria",
        "lat": 35.9262,
        "lng": 35.9618,
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
        "id": 1279,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Karadouran",
        "city": "Syria",
        "address": "Karadouran, Kessab region, Syria",
        "lat": 35.9255,
        "lng": 35.9624,
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
        "id": 1280,
        "name": {
            "en": "Evangelical",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Karadouran",
        "city": "Syria",
        "address": "Karadouran, Kessab region, Syria",
        "lat": 35.925,
        "lng": 35.9621,
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
        "id": 1281,
        "name": {
            "en": "Baghjah Ghaz",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "baghjah ghaz",
        "city": "Syria",
        "address": "Baghjah Ghaz (???? ???), Latakia Governorate, Syria",
        "lat": 35.879,
        "lng": 35.926,
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
        "id": 1282,
        "name": {
            "en": "Ekizolouk",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Ekizolouk",
        "city": "Syria",
        "address": "Ekizolouk (Ekizolukh / Nab‘ain), Kessab region, Latakia Governorate, Syria",
        "lat": 35.9158,
        "lng": 35.9786,
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
        "id": 1283,
        "name": {
            "en": "Emmanuel",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Ekizolouk",
        "city": "Syria",
        "address": "Emmanuel Armenian Evangelical Church, Ekizolouk (Nab‘ain), Kessab region, Latakia Governorate, Syria",
        "lat": 35.9159,
        "lng": 35.9788,
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
        "id": 1284,
        "name": {
            "en": "Holy Mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Latakia",
        "city": "Syria",
        "address": "Kidun area, Latakia, Syria",
        "lat": 35.5239,
        "lng": 35.7786,
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
        "id": 1285,
        "name": {
            "en": "St. Stephen's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Aramo",
        "city": "Syria",
        "address": "Aramo village, Syria",
        "lat": 35.6303,
        "lng": 36.135,
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
        "id": 1286,
        "name": {
            "en": "St. George",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Ghnemiyeh",
        "city": "Syria",
        "address": "Ghnemiyeh village, Latakia Governorate, Syria",
        "lat": 35.4706,
        "lng": 36.0698,
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
        "id": 1287,
        "name": {
            "en": "St. Anna",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Al-Yaqubiyeh",
        "city": "Syria",
        "address": "Al-Yaqubiyeh village, Jisr al-Shughur area, Idlib Governorate, Syria",
        "lat": 35.8146,
        "lng": 36.3142,
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
        "id": 1288,
        "name": {
            "en": "St. Hripsime",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Al-Yaqubiyeh",
        "city": "Syria",
        "address": "l-Yaqubiyeh village, Jisr al-Shughur area, Idlib Governorate, Syria",
        "lat": 35.8148,
        "lng": 36.3145,
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
        "id": 1289,
        "name": {
            "en": "Holy Martyrs",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Raqqa",
        "city": "Syria",
        "address": "central Raqqa, Raqqa Governorate, Syria",
        "lat": 35.9456,
        "lng": 39.0155,
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
        "id": 1290,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Tell Abyad",
        "city": "Syria",
        "address": "Tell Abyad, Raqqa Governorate, Syria",
        "lat": 36.7008,
        "lng": 38.9532,
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
        "id": 1291,
        "name": {
            "en": "St. Garabed",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Hassakah",
        "city": "Syria",
        "address": "Al-Hasakah city, Al-Hasakah Governorate, Syria",
        "lat": 36.502,
        "lng": 40.7478,
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
        "id": 1292,
        "name": {
            "en": "Holy Family",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Hassakah",
        "city": "Syria",
        "address": "Al-Hasakah city, Al-Hasakah Governorate, Syria",
        "lat": 36.5032,
        "lng": 40.7469,
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
        "id": 1293,
        "name": {
            "en": "Mesrobian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Hassakah",
        "city": "Syria",
        "address": "Al-Hasakah, Syria",
        "lat": 36.5022,
        "lng": 40.7479,
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
        "id": 1294,
        "name": {
            "en": "St. James",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Qamishli",
        "city": "Syria",
        "address": "Qamishli, Al-Hasakah Governorate, Syria",
        "lat": 37.0517,
        "lng": 41.2269,
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
        "id": 1295,
        "name": {
            "en": "St. Joseph",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Qamishli",
        "city": "Syria",
        "address": "Qamishli, Al-Hasakah Governorate, Syria",
        "lat": 37.051,
        "lng": 41.2258,
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
        "id": 1296,
        "name": {
            "en": "Azkayin Eprad Varjaran",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Qamishli",
        "city": "Syria",
        "address": "Qamishli, Al-Hasakah Governorate, Syria",
        "lat": 37.0516,
        "lng": 41.2266,
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
        "id": 1297,
        "name": {
            "en": "Holy mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Ras Al-Ayn",
        "city": "Syria",
        "address": "Ras al-Ayn (Serê Kaniyê), Al-Hasakah Governorate, Syria",
        "lat": 36.852,
        "lng": 40.0735,
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
        "id": 1298,
        "name": {
            "en": "Holy mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Al Malikiyah",
        "city": "Syria",
        "address": "Al-Malikiyah, Al-Hasakah Governorate, Syria",
        "lat": 37.1778,
        "lng": 42.1395,
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
        "id": 1299,
        "name": {
            "en": "Azadoutyoun",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Al Malikiyah",
        "city": "syria",
        "address": "Al-Malikiyah (Derik), Al-Hasakah Governorate, Syria",
        "lat": 37.1776,
        "lng": 42.1393,
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
        "id": 1300,
        "name": {
            "en": "Armenian Genocide Memorial Comlex",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Deir Ez-Zor",
        "city": "Syria",
        "address": "Al-Malikiyah (Derik), Al-Hasakah Governorate, Syria",
        "lat": 37.1776,
        "lng": 42.1393,
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
        "id": 1301,
        "name": {
            "en": "Holy Resurrection",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Margadeh",
        "city": "Syria",
        "address": "Margadeh village, Deir ez-Zor Governorate, Syria",
        "lat": 35.312,
        "lng": 40.155,
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
        "id": 1302,
        "name": {
            "en": "St. Mesrob",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Homs",
        "city": "Syria",
        "address": "Al-Hamidiyah quarter, Old Homs, Syria",
        "lat": 34.7292,
        "lng": 36.7168,
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
        "id": 1303,
        "name": {
            "en": "Sahakian",
            "fr": "",
            "hy": ""
        },
        "category": "school",
        "country": "Homs",
        "city": "Syria",
        "address": "Al-Hamidiyah quarter, Old Homs, Syria",
        "lat": 34.729,
        "lng": 36.7169,
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
        "id": 1304,
        "name": {
            "en": "Ararat",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Dushambe",
        "city": "Tajikistan",
        "address": "Dushanbe, Tajikistan",
        "lat": 38.5848262,
        "lng": 68.7497324,
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
        "id": 1305,
        "name": {
            "en": "St. Nicholas Russian Church",
            "fr": "",
            "hy": ""
        },
        "category": "monument",
        "country": "Dushambe",
        "city": "Tajikistan",
        "address": "HR88+HPR, Dushanbe, Tajikistan",
        "lat": 38.566625,
        "lng": 68.816981,
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
        "id": 1306,
        "name": {
            "en": "Lavash And Wine",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Dar Es-Salam",
        "city": "Tanzania",
        "address": "Mbezi Beach, Dar es Salaam, Tanzania",
        "lat": -6.7242,
        "lng": 39.2319,
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
        "id": 1307,
        "name": {
            "en": "Artinian",
            "fr": "",
            "hy": ""
        },
        "category": "shop",
        "country": "Bangkok",
        "city": "Thailand",
        "address": "41/18-20 Silom Soi 19, Silom Road, Silom, Bang Rak, Bangkok 10500, Thailand",
        "lat": 13.724,
        "lng": 100.5256,
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
        "id": 1308,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Pattaya",
        "city": "Thailand",
        "address": "159/38 Moo 5, Naklua Road, Pattaya, Chon Buri 20150, Thailand",
        "lat": 12.9534,
        "lng": 100.8878,
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
        "id": 1309,
        "name": {
            "en": "Armenia",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Pattaya",
        "city": "Thailand",
        "address": "Soi Welcome Jomtien Beach, Jomtien, Pattaya, Chon Buri 20150, Thailand",
        "lat": 12.8799,
        "lng": 100.8871,
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
        "id": 1310,
        "name": {
            "en": "Holy mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Kumkap?, Fatih, Istanbul 34130, Turkey",
        "lat": 41.0045,
        "lng": 28.9612,
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
        "id": 1311,
        "name": {
            "en": "Holy Trinity",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Bal?k Pazar? Sahne Sok. No:24/A, Galatasaray, Beyo?lu, Istanbul 34433, Turkey",
        "lat": 41.0344,
        "lng": 28.9775,
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
        "id": 1312,
        "name": {
            "en": "Ara",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Tomtom Mahallesi, Ara Güler Soka?? No:2, 34433 Beyo?lu, Istanbul, Turkey",
        "lat": 41.033,
        "lng": 28.9771,
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
        "id": 1313,
        "name": {
            "en": "Jash",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Pürtela? Mahallesi, Cihangir Caddesi No:9, Beyo?lu, Istanbul 34427, Turkey",
        "lat": 41.0337,
        "lng": 28.9768,
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
        "id": 1314,
        "name": {
            "en": "Vartanants",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "?ahadet Sokak No:13, Feriköy, ?i?li, Istanbul 34379, Turkey",
        "lat": 41.0502,
        "lng": 28.9804,
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
        "id": 1315,
        "name": {
            "en": "Immaculate Conception",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Koca Mustafa Pa?a Mahallesi, Fatih, Istanbul 34098, Turkey",
        "lat": 41.0084,
        "lng": 28.9399,
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
        "id": 1316,
        "name": {
            "en": "Hrant Dink",
            "fr": "",
            "hy": ""
        },
        "category": "neighborhood",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Halaskargazi Caddesi No:74, Sebat Apartman?, Osmanbey, ?i?li, Istanbul, Turkey",
        "lat": 41.052998,
        "lng": 28.987286,
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
        "id": 1317,
        "name": {
            "en": "Holy mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "?lhan Sokak No:28, Be?ikta?, Istanbul 34353, Turkey",
        "lat": 41.0431,
        "lng": 29.0019,
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
        "id": 1318,
        "name": {
            "en": "Holy mother Of God",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Cibinlik Sokak No:5, Ortaköy, Be?ikta?, Istanbul 34347, Turkey",
        "lat": 41.0476,
        "lng": 29.0262,
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
        "id": 1319,
        "name": {
            "en": "St. Stephen's",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "?nci Çiçe?i Sokak No:4, Ye?ilköy, Bak?rköy, Istanbul 34149, Turkey",
        "lat": 40.9571,
        "lng": 28.8214,
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
        "id": 1320,
        "name": {
            "en": "St. Levon",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Ali Suavi Sk. No:1, Kad?köy border area (Kad?köy–Osmana?a is Asian-adjacent but often included in metro lists)",
        "lat": 40.9903,
        "lng": 29.0308,
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
        "id": 1321,
        "name": {
            "en": "Anarad Hghoutyoun",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Sarayiçi Sk. No:7, Samatya/Fatih, Istanbul",
        "lat": 41.0084,
        "lng": 28.9399,
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
        "id": 1322,
        "name": {
            "en": "catholic archeparchy",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Koca Mustafa Pa?a Mah., I?k?rlak Sk. No:18, Fatih, Istanbul",
        "lat": 41.0086,
        "lng": 28.9395,
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
        "id": 1323,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Dereboyu Cd. No:76, Ortaköy, Be?ikta?, Istanbul",
        "lat": 41.047,
        "lng": 29.027,
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
        "id": 1324,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Papa Roncalli Sk., ?i?li, Istanbul",
        "lat": 41.0419,
        "lng": 28.9862,
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
        "id": 1325,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Yedi Kuyular Cd. No:6, ?i?li, Istanbul",
        "lat": 41.0407,
        "lng": 28.9848,
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
        "id": 1326,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Kuyu 1 Sk. No:5, Beyo?lu, Istanbul",
        "lat": 41.0269,
        "lng": 28.9731,
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
        "id": 1327,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Hasköy / Beyo?lu area, Istanbul",
        "lat": 41.0468,
        "lng": 28.9485,
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
        "id": 1328,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "(Pangalt? / ?i?li district), Halaskargazi area, Istanbul",
        "lat": 41.0487,
        "lng": 28.9856,
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
        "id": 1329,
        "name": {
            "en": "",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Beyo?lu–Fatih corridor",
        "lat": 41.0062,
        "lng": 28.9723,
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
        "id": 1330,
        "name": {
            "en": "St. Takavor",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Church, Cafera?a Mah., Mühürdar Cad. vicinity, Kad?köy, Istanbul, Turkey — 40.98996, 29.02436",
        "lat": null,
        "lng": null,
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
        "id": 1331,
        "name": {
            "en": "St. Leon",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Ali Suavi Sokak No:1, Alt?yol, Kad?köy, Istanbul, Turkey — 40.9909, 29.0280",
        "lat": null,
        "lng": null,
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
        "id": 1332,
        "name": {
            "en": "Holy Cross",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Meyilli Sk. No:1, Selami Ali, 34664 Üsküdar, Istanbul, Turkey — 41.02482, 29.03080",
        "lat": null,
        "lng": null,
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
        "id": 1333,
        "name": {
            "en": "St. Garabed",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Vasiyet Sk. No:6, Murat Reis, 34664 Üsküdar, Istanbul, Turkey — 41.02092, 29.03137",
        "lat": null,
        "lng": null,
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
        "id": 1334,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Kemeralt?, Sak?zc?lar Sok. No:9, Karaköy, Beyo?lu, Istanbul, Turkey — 41.02575, 28.97850",
        "lat": null,
        "lng": null,
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
        "id": 1335,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Çankaya St., Büyükada, Adalar, Istanbul, Turkey — 40.8706, 29.1269",
        "lat": null,
        "lng": null,
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
        "id": 1336,
        "name": {
            "en": "Jash",
            "fr": "",
            "hy": ""
        },
        "category": "restaurant",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Alsancak Cd. No:27, K?nal?ada, Adalar, Istanbul, Turkey — 40.91114, 29.05475",
        "lat": null,
        "lng": null,
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
        "id": 1337,
        "name": {
            "en": "Holy Assumption",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Istanbul",
        "city": "Turkey",
        "address": "Büyükada, Adalar, Istanbul, Turkey — 40.87219, 29.12621",
        "lat": null,
        "lng": null,
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
        "id": 1338,
        "name": {
            "en": "St. Gregory The Illuminator",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Kayseri",
        "city": "Turkey",
        "address": "Melikgazi district, Kayseri, Turkey — 38.71179, 35.48428",
        "lat": null,
        "lng": null,
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
        "id": 1339,
        "name": {
            "en": "Holy Apostels",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Mus",
        "city": "Turkey",
        "address": "Holy Apostles (Sourp Arakelots) Monastery, 11 km SE of Mu?, Mu? Province, Turkey — 38.69586, 41.51964",
        "lat": null,
        "lng": null,
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
        "id": 1340,
        "name": {
            "en": "Aghperig",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Mus",
        "city": "Turkey",
        "address": "Aghperig (Surp Aghperig) Monastery ruins, Sason/Mu? region, Bitlis Province, Turkey — 38.5828, 41.5981",
        "lat": null,
        "lng": null,
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
        "id": 1341,
        "name": {
            "en": "St Garabed",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Mus",
        "city": "Turkey",
        "address": "St. Garabed Monastery ruins, Mu? plain / Taron region (exact site uncertain, traditionally near Arakelots area), Turkey — ~38.70, 41.50",
        "lat": null,
        "lng": null,
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
        "id": 1342,
        "name": {
            "en": "Abarank",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Ucpinar",
        "city": "Turkey",
        "address": "Monastery ruins, near Üçp?nar village, Tercan district, Erzincan Province, Turkey — 39.76890, 40.40360",
        "lat": null,
        "lng": null,
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
        "id": 1343,
        "name": {
            "en": "St. Minas",
            "fr": "",
            "hy": ""
        },
        "category": "church",
        "country": "Gezkoy",
        "city": "Turkey",
        "address": "Surp Minas (Kes / Gezköy) Monastery ruins, Gezköy village, Aziziye district, Erzurum Province, Turkey — 39.92245, 41.18258",
        "lat": null,
        "lng": null,
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
    }
];


// ===== Data Management =====
const DATA_VERSION = '3';

function initData() {
    // Reset POIs when data version changes (new CSV import)
    if (localStorage.getItem('la_data_version') !== DATA_VERSION) {
        localStorage.setItem('la_pois', JSON.stringify(samplePOIs));
        localStorage.setItem('la_data_version', DATA_VERSION);
        localStorage.setItem('la_nextId', '2000');
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
        localStorage.setItem('la_nextId', '2000');
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
