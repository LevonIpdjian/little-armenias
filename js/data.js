// ===== Sample Data - Armenian Points of Interest =====
const samplePOIs = [
    {
        id: 1,
        name: { en: 'Etchmiadzin Cathedral', fr: "Cath\u00e9drale d'Etchmiadzin", hy: '\u054d\u0578\u0582\u0580\u0562 \u0537\u057b\u0574\u056b\u0561\u056e\u0576\u056b \u0544\u0561\u0575\u0580 \u054f\u0561\u0573\u0561\u0580' },
        category: 'church',
        country: 'Armenia',
        city: 'Vagharshapat',
        lat: 40.1625,
        lng: 44.2908,
        description: {
            en: 'The Mother Cathedral of Holy Etchmiadzin is the oldest state-built church in the world, dating back to 301-303 AD. It serves as the headquarters of the Armenian Apostolic Church.',
            fr: "La cath\u00e9drale-m\u00e8re de Saint-Etchmiadzin est la plus ancienne \u00e9glise d'\u00c9tat au monde, datant de 301-303 apr\u00e8s J.-C. Elle est le si\u00e8ge de l'\u00c9glise apostolique arm\u00e9nienne.",
            hy: '\u054d\u0578\u0582\u0580\u0562 \u0537\u057b\u0574\u056b\u0561\u056e\u0576\u056b \u0544\u0561\u0575\u0580 \u054f\u0561\u0573\u0561\u0580\u0568 \u0561\u0577\u056d\u0561\u0580\u0570\u056b \u0561\u0574\u0565\u0576\u0561\u0570\u056b\u0576 \u057a\u0565\u057f\u0561\u056f\u0561\u0576 \u0565\u056f\u0565\u0572\u0565\u0581\u056b\u0576 \u0567, \u056f\u0561\u057c\u0578\u0582\u0581\u057e\u0561\u056e 301-303 \u0569\u057e\u0561\u056f\u0561\u0576\u0576\u0565\u0580\u056b\u0576\u0589'
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Etchmiadzin_Cathedral_Armenia.jpg/800px-Etchmiadzin_Cathedral_Armenia.jpg',
        verified: true,
        ratings: [5, 5, 4, 5, 5],
        comments: [
            { author: 'Anna', text: 'Absolutely stunning cathedral with incredible history.', date: '2025-03-15' },
            { author: 'Marco', text: 'A must-visit for anyone interested in early Christian architecture.', date: '2025-04-02' }
        ]
    },
    {
        id: 2,
        name: { en: 'Armenian Genocide Memorial (Tsitsernakaberd)', fr: "M\u00e9morial du g\u00e9nocide arm\u00e9nien (Tsitsernakaberd)", hy: '\u0540\u0561\u0575\u0578\u0581 \u0551\u0565\u0572\u0561\u057d\u057a\u0561\u0576\u0578\u0582\u0569\u0575\u0561\u0576 \u0570\u0578\u0582\u0577\u0561\u0580\u0571\u0561\u0576 (\u053e\u056b\u056e\u0565\u057c\u0576\u0561\u056f\u0561\u0562\u0565\u0580\u0564)' },
        category: 'monument',
        country: 'Armenia',
        city: 'Yerevan',
        lat: 40.1851,
        lng: 44.4903,
        description: {
            en: 'Tsitsernakaberd is the official Armenian Genocide memorial of Armenia, located on a hill in Yerevan. The memorial complex includes a 44-meter stele, an eternal flame, and the Armenian Genocide Museum-Institute.',
            fr: "Tsitsernakaberd est le m\u00e9morial officiel du g\u00e9nocide arm\u00e9nien en Arm\u00e9nie, situ\u00e9 sur une colline \u00e0 Erevan.",
            hy: '\u053e\u056b\u056e\u0565\u057c\u0576\u0561\u056f\u0561\u0562\u0565\u0580\u0564\u0568 \u0540\u0561\u0575\u0578\u0581 \u0551\u0565\u0572\u0561\u057d\u057a\u0561\u0576\u0578\u0582\u0569\u0575\u0561\u0576 \u057a\u0561\u0577\u057f\u0578\u0576\u0561\u056f\u0561\u0576 \u0570\u0578\u0582\u0577\u0561\u0580\u0571\u0561\u0576\u0576 \u0567, \u0563\u057f\u0576\u057e\u0578\u0582\u0574 \u0567 \u0535\u0580\u0587\u0561\u0576\u056b \u0562\u056c\u0578\u0582\u0580\u0576\u0565\u0580\u056b\u0576\u0589'
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tsitsernakaberd_Genocide_Memorial%2C_Yerevan%2C_Armenia.jpg/800px-Tsitsernakaberd_Genocide_Memorial%2C_Yerevan%2C_Armenia.jpg',
        verified: true,
        ratings: [5, 5, 5, 5, 4],
        comments: [
            { author: 'Sophie', text: 'A deeply moving experience. Everyone should visit.', date: '2025-02-20' }
        ]
    },
    {
        id: 3,
        name: { en: 'Sergei Parajanov Museum', fr: "Mus\u00e9e Sergue\u00ef Paradjanov", hy: '\u054d\u0565\u0580\u0563\u0565\u0575 \u054a\u0561\u0580\u0561\u057b\u0561\u0576\u0578\u057e\u056b \u0569\u0561\u0576\u0563\u0561\u0580\u0561\u0576' },
        category: 'museum',
        country: 'Armenia',
        city: 'Yerevan',
        lat: 40.1892,
        lng: 44.5083,
        description: {
            en: 'Dedicated to the famous Armenian film director Sergei Parajanov, this museum houses over 1,400 works including collages, drawings, sculptures, and personal belongings.',
            fr: "D\u00e9di\u00e9 au c\u00e9l\u00e8bre r\u00e9alisateur arm\u00e9nien Sergue\u00ef Paradjanov, ce mus\u00e9e abrite plus de 1 400 \u0153uvres.",
            hy: '\u0546\u057e\u056b\u0580\u057e\u0561\u056e \u0570\u0561\u0575\u057f\u0576\u056b \u056f\u056b\u0576\u0578\u057c\u0565\u056a\u056b\u057d\u0578\u0580 \u054d\u0565\u0580\u0563\u0565\u0575 \u054a\u0561\u0580\u0561\u057b\u0561\u0576\u0578\u057e\u056b\u0576, \u0569\u0561\u0576\u0563\u0561\u0580\u0561\u0576\u0568 \u057a\u0561\u0570\u0578\u0582\u0574 \u0567 \u0561\u057e\u0565\u056c\u056b \u0584\u0561\u0576 1400 \u057d\u057f\u0565\u0572\u056e\u0561\u0563\u0578\u0580\u056e\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0589'
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Sergei_Parajanov_Museum.jpg/640px-Sergei_Parajanov_Museum.jpg',
        verified: true,
        ratings: [4, 5, 4, 5],
        comments: []
    },
    {
        id: 4,
        name: { en: 'Noravank Monastery', fr: "Monast\u00e8re de Noravank", hy: '\u0546\u0578\u0580\u0561\u057e\u0561\u0576\u0584' },
        category: 'church',
        country: 'Armenia',
        city: 'Areni',
        lat: 39.6843,
        lng: 45.2326,
        description: {
            en: 'A 13th-century Armenian Apostolic Church monastery set in a narrow gorge. Known for its two-story Surb Astvatsatsin church with elaborate stone carvings.',
            fr: "Un monast\u00e8re de l'\u00c9glise apostolique arm\u00e9nienne du XIIIe si\u00e8cle situ\u00e9 dans une gorge \u00e9troite.",
            hy: '13-\u0580\u0564 \u0564\u0561\u0580\u056b \u0540\u0561\u0575 \u0531\u057c\u0561\u0584\u0565\u056c\u0561\u056f\u0561\u0576 \u0565\u056f\u0565\u0572\u0565\u0581\u0578\u0582 \u057e\u0561\u0576\u0584, \u0563\u057f\u0576\u057e\u0578\u0582\u0574 \u0567 \u0576\u0565\u0572 \u056f\u056b\u0580\u0573\u0578\u0582\u0574\u0589'
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Noravank_Monastery_complex.jpg/800px-Noravank_Monastery_complex.jpg',
        verified: true,
        ratings: [5, 5, 5, 4, 5],
        comments: [
            { author: 'David', text: 'The setting in the red canyon is breathtaking.', date: '2025-01-10' }
        ]
    },
    {
        id: 5,
        name: { en: 'Armenian Quarter of Jerusalem', fr: "Quartier arm\u00e9nien de J\u00e9rusalem", hy: '\u0535\u0580\u0578\u0582\u057d\u0561\u0572\u0565\u0574\u056b \u0570\u0561\u0575\u056f\u0561\u056f\u0561\u0576 \u0569\u0561\u0572\u0561\u0574\u0561\u057d' },
        category: 'cultural_center',
        country: 'Israel',
        city: 'Jerusalem',
        lat: 31.7741,
        lng: 35.2283,
        description: {
            en: 'One of the four quarters of the Old City of Jerusalem, the Armenian Quarter has been home to an Armenian community for over 1,600 years. It includes the Cathedral of St. James and the Armenian Museum.',
            fr: "L'un des quatre quartiers de la vieille ville de J\u00e9rusalem, le quartier arm\u00e9nien abrite une communaut\u00e9 arm\u00e9nienne depuis plus de 1 600 ans.",
            hy: '\u0535\u0580\u0578\u0582\u057d\u0561\u0572\u0565\u0574\u056b \u0570\u056b\u0576 \u0569\u0561\u0572\u0561\u0574\u0561\u057d\u0565\u0580\u056b\u0581 \u0574\u0565\u056f\u0568, \u0570\u0561\u0575\u056f\u0561\u056f\u0561\u0576 \u0569\u0561\u0572\u0561\u0574\u0561\u057d\u0568 \u0570\u0561\u0575\u0565\u0580\u056b \u0570\u0561\u0574\u0561\u0575\u0576\u0584\u0576 \u0567 \u0561\u057e\u0565\u056c\u056b \u0584\u0561\u0576 1600 \u057f\u0561\u0580\u056b\u0589'
        },
        image: '',
        verified: true,
        ratings: [5, 4, 4, 5],
        comments: []
    },
    {
        id: 6,
        name: { en: 'Armenian Cathedral of the Holy Cross (Akdamar)', fr: "Cath\u00e9drale arm\u00e9nienne de la Sainte-Croix (Akdamar)", hy: '\u054d\u0578\u0582\u0580\u0562 \u053d\u0561\u0579\u056b \u0565\u056f\u0565\u0572\u0565\u0581\u056b (\u0531\u0572\u0569\u0561\u0574\u0561\u0580)' },
        category: 'church',
        country: 'Turkey',
        city: 'Van',
        lat: 38.3340,
        lng: 43.0935,
        description: {
            en: 'A 10th-century Armenian Apostolic cathedral on Akdamar Island in Lake Van. Renowned for its remarkable bas-relief carvings depicting biblical scenes.',
            fr: "Une cath\u00e9drale apostolique arm\u00e9nienne du Xe si\u00e8cle sur l'\u00eele d'Akdamar dans le lac de Van.",
            hy: '10-\u0580\u0564 \u0564\u0561\u0580\u056b \u0540\u0561\u0575 \u0531\u057c\u0561\u0584\u0565\u056c\u0561\u056f\u0561\u0576 \u057f\u0561\u0573\u0561\u0580 \u0531\u0572\u0569\u0561\u0574\u0561\u0580 \u056f\u0572\u0566\u0578\u0582\u0574, \u054e\u0561\u0576\u0561 \u056c\u0573\u056b \u0574\u0565\u057b\u0589'
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Aghtamar_Island_on_Lake_Van_with_the_Armenian_Cathedral_of_the_Holy_Cross.jpg/800px-Aghtamar_Island_on_Lake_Van_with_the_Armenian_Cathedral_of_the_Holy_Cross.jpg',
        verified: true,
        ratings: [5, 5, 5],
        comments: []
    },
    {
        id: 7,
        name: { en: 'Manouchian Memorial', fr: "M\u00e9morial Manouchian", hy: '\u0544\u0561\u0576\u0578\u0582\u0577\u0575\u0561\u0576\u056b \u0570\u0578\u0582\u0577\u0561\u0580\u0571\u0561\u0576' },
        category: 'monument',
        country: 'France',
        city: 'Paris',
        lat: 48.8686,
        lng: 2.3963,
        description: {
            en: 'Memorial honoring Missak Manouchian and the FTP-MOI resistance group members who fought against Nazi occupation. Manouchian, an Armenian poet and resistance leader, was executed in 1944.',
            fr: "M\u00e9morial en hommage \u00e0 Missak Manouchian et aux membres du groupe de r\u00e9sistance FTP-MOI.",
            hy: '\u0540\u0578\u0582\u0577\u0561\u0580\u0571\u0561\u0576\u0568 \u0576\u057e\u056b\u0580\u057e\u0561\u056e \u0567 \u0544\u056b\u057d\u0561\u056f \u0544\u0561\u0576\u0578\u0582\u0577\u0575\u0561\u0576\u056b\u0576 \u0587 FTP-MOI \u0564\u056b\u0574\u0561\u0564\u0580\u0578\u0582\u0569\u0575\u0561\u0576 \u056d\u0574\u0562\u056b \u0561\u0576\u0564\u0561\u0574\u0576\u0565\u0580\u056b\u0576\u0589'
        },
        image: '',
        verified: true,
        ratings: [5, 4, 5],
        comments: [
            { author: 'Pierre', text: "Un lieu de m\u00e9moire important pour la France et l'Arm\u00e9nie.", date: '2025-05-01' }
        ]
    },
    {
        id: 8,
        name: { en: 'Caf\u00e9 Ararat', fr: 'Caf\u00e9 Ararat', hy: '\u0531\u0580\u0561\u0580\u0561\u057f \u057d\u0580\u0573\u0561\u0580\u0561\u0576' },
        category: 'restaurant',
        country: 'France',
        city: 'Marseille',
        lat: 43.2950,
        lng: 5.3744,
        description: {
            en: "A popular Armenian restaurant in Marseille's vibrant Armenian community district, serving traditional Armenian dishes and pastries.",
            fr: "Un restaurant arm\u00e9nien populaire dans le quartier de la communaut\u00e9 arm\u00e9nienne de Marseille.",
            hy: '\u054d\u056b\u0580\u057e\u0561\u056e \u0570\u0561\u0575\u056f\u0561\u056f\u0561\u0576 \u057c\u0565\u057d\u057f\u0578\u0580\u0561\u0576 \u0544\u0561\u0580\u057d\u0565\u056c\u056b \u0570\u0561\u0575\u056f\u0561\u056f\u0561\u0576 \u0570\u0561\u0574\u0561\u0575\u0576\u0584\u056b \u0569\u0561\u0572\u0561\u0574\u0561\u057d\u0578\u0582\u0574\u0589'
        },
        image: '',
        verified: false,
        ratings: [4, 4, 5],
        comments: []
    },
    {
        id: 9,
        name: { en: 'Alex Manoogian Cultural Center', fr: 'Centre culturel Alex Manoogian', hy: '\u0531\u056c\u0565\u0584\u057d \u0544\u0561\u0576\u0578\u0582\u056f\u0575\u0561\u0576 \u0574\u0577\u0561\u056f\u0578\u0582\u0569\u0561\u0575\u056b\u0576 \u056f\u0565\u0576\u057f\u0580\u0578\u0576' },
        category: 'cultural_center',
        country: 'United States',
        city: 'Detroit',
        lat: 42.4417,
        lng: -83.2614,
        description: {
            en: "A major Armenian cultural center in the Detroit metropolitan area, home to the Armenian community's cultural events, language classes, and community gatherings.",
            fr: "Un important centre culturel arm\u00e9nien dans la r\u00e9gion m\u00e9tropolitaine de Detroit.",
            hy: '\u0540\u0561\u0575\u056f\u0561\u056f\u0561\u0576 \u056f\u0561\u0580\u0587\u0578\u0580 \u0574\u0577\u0561\u056f\u0578\u0582\u0569\u0561\u0575\u056b\u0576 \u056f\u0565\u0576\u057f\u0580\u0578\u0576 \u0534\u0565\u0569\u0580\u0578\u0575\u0569\u056b \u0574\u0565\u057f\u0580\u0578\u057a\u0578\u056c\u056b\u057f\u0565\u0576 \u057f\u0561\u0580\u0561\u056e\u0584\u0578\u0582\u0574\u0589'
        },
        image: '',
        verified: true,
        ratings: [4, 5, 4],
        comments: []
    },
    {
        id: 10,
        name: { en: 'Armenian Church of St. Gregory the Illuminator', fr: "Eglise arm\u00e9nienne Saint-Gr\u00e9goire-l'Illuminateur", hy: '\u054d\u0578\u0582\u0580\u0562 \u0533\u0580\u056b\u0563\u0578\u0580 \u053c\u0578\u0582\u057d\u0561\u057e\u0578\u0580\u056b\u0579 \u0565\u056f\u0565\u0572\u0565\u0581\u056b' },
        category: 'church',
        country: 'Lebanon',
        city: 'Beirut',
        lat: 33.8878,
        lng: 35.5126,
        description: {
            en: 'One of the major Armenian churches in Beirut, serving the large Armenian community of Lebanon. The Bourj Hammoud neighborhood is known as "Little Armenia" of Beirut.',
            fr: "L'une des principales \u00e9glises arm\u00e9niennes de Beyrouth, au service de la grande communaut\u00e9 arm\u00e9nienne du Liban.",
            hy: '\u0532\u0565\u0575\u0580\u0578\u0582\u0569\u056b \u0570\u056b\u0574\u0576\u0561\u056f\u0561\u0576 \u0570\u0561\u0575\u056f\u0561\u056f\u0561\u0576 \u0565\u056f\u0565\u0572\u0565\u0581\u056b\u0576\u0565\u0580\u056b\u0581 \u0574\u0565\u056f\u0568, \u056e\u0561\u057c\u0561\u0575\u0578\u0582\u0574 \u0567 \u053c\u056b\u0562\u0561\u0576\u0561\u0576\u056b \u0574\u0565\u056e \u0570\u0561\u0575\u056f\u0561\u056f\u0561\u0576 \u0570\u0561\u0574\u0561\u0575\u0576\u0584\u056b\u0576\u0589'
        },
        image: '',
        verified: true,
        ratings: [4, 5],
        comments: []
    },
    {
        id: 11,
        name: { en: 'Geghard Monastery', fr: "Monast\u00e8re de Geghard", hy: '\u0533\u0565\u0572\u0561\u0580\u0564\u0561\u057e\u0561\u0576\u0584' },
        category: 'church',
        country: 'Armenia',
        city: 'Goght',
        lat: 40.1404,
        lng: 44.8178,
        description: {
            en: 'A medieval monastery partially carved out of an adjacent mountain. UNESCO World Heritage Site known for its extraordinary acoustics and rock-cut architecture.',
            fr: "Un monast\u00e8re m\u00e9di\u00e9val partiellement taill\u00e9 dans la montagne adjacente. Site du patrimoine mondial de l'UNESCO.",
            hy: '\u0544\u056b\u057b\u0576\u0561\u0564\u0561\u0580\u0575\u0561\u0576 \u057e\u0561\u0576\u0584, \u0574\u0561\u057d\u0561\u0574\u0562 \u0583\u0578\u0580\u0561\u0563\u0580\u057e\u0561\u056e \u056f\u056b\u0581 \u056f\u0578\u0572\u0574\u056b \u056c\u0565\u057c\u0561\u0576\u0589 \u0545\u0548\u0552\u0546\u0535\u054d\u053f\u0555\u056b \u0570\u0561\u0574\u0561\u0577\u056d\u0561\u0580\u0570\u0561\u0575\u056b\u0576 \u056a\u0561\u057c\u0561\u0576\u0563\u0578\u0582\u0569\u0575\u0561\u0576 \u057e\u0561\u0575\u0580\u0589'
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Geghard_Monastery%2C_Armenia.jpg/800px-Geghard_Monastery%2C_Armenia.jpg',
        verified: true,
        ratings: [5, 5, 5, 5],
        comments: [
            { author: 'Lilit', text: 'The singing inside the cave chapel is unforgettable.', date: '2025-06-12' }
        ]
    },
    {
        id: 12,
        name: { en: 'Armenian Heritage Park', fr: 'Parc du patrimoine arm\u00e9nien', hy: '\u0540\u0561\u0575\u056f\u0561\u056f\u0561\u0576 \u056a\u0561\u057c\u0561\u0576\u0563\u0578\u0582\u0569\u0575\u0561\u0576 \u0561\u0575\u0563\u056b' },
        category: 'monument',
        country: 'United States',
        city: 'Boston',
        lat: 42.3589,
        lng: -71.0510,
        description: {
            en: 'A public park on the Rose Fitzgerald Kennedy Greenway in Boston, featuring an abstract sculpture and a reflecting pool honoring Armenian heritage and the immigrant experience.',
            fr: "Un parc public sur la Rose Fitzgerald Kennedy Greenway \u00e0 Boston, avec une sculpture abstraite et un bassin honorant le patrimoine arm\u00e9nien.",
            hy: '\u0540\u0561\u0576\u0580\u0561\u0575\u056b\u0576 \u0561\u0575\u0563\u056b \u0532\u0578\u057d\u057f\u0578\u0576\u0578\u0582\u0574, \u0576\u057e\u056b\u0580\u057e\u0561\u056e \u0570\u0561\u0575\u056f\u0561\u056f\u0561\u0576 \u056a\u0561\u057c\u0561\u0576\u0563\u0578\u0582\u0569\u0575\u0561\u0576\u0568 \u0570\u0561\u0580\u0563\u0565\u056c\u0578\u0582\u0576\u0589'
        },
        image: '',
        verified: true,
        ratings: [4, 4, 5, 4],
        comments: []
    },
    {
        id: 13,
        name: { en: 'Matenadaran (Institute of Ancient Manuscripts)', fr: "Matenadaran (Institut des manuscrits anciens)", hy: '\u0544\u0561\u057f\u0565\u0576\u0561\u0564\u0561\u0580\u0561\u0576' },
        category: 'museum',
        country: 'Armenia',
        city: 'Yerevan',
        lat: 40.1920,
        lng: 44.5165,
        description: {
            en: "One of the world's richest repositories of medieval manuscripts and books, housing over 23,000 manuscripts. A center for research and preservation of Armenian cultural heritage.",
            fr: "L'un des plus riches d\u00e9p\u00f4ts de manuscrits et livres m\u00e9di\u00e9vaux au monde, abritant plus de 23 000 manuscrits.",
            hy: '\u0531\u0577\u056d\u0561\u0580\u0570\u056b \u0561\u0574\u0565\u0576\u0561\u0570\u0561\u0580\u0578\u0582\u057d\u057f \u0571\u0565\u057c\u0561\u0563\u056b\u0580 \u057a\u0561\u0570\u0578\u0581\u0576\u0565\u0580\u056b\u0581 \u0574\u0565\u056f\u0568, \u057a\u0561\u0570\u0578\u0582\u0574 \u0567 \u0561\u057e\u0565\u056c\u056b \u0584\u0561\u0576 23,000 \u0571\u0565\u057c\u0561\u0563\u056b\u0580\u0589'
        },
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Matenadaran1.jpg/800px-Matenadaran1.jpg',
        verified: true,
        ratings: [5, 5, 4, 5, 5],
        comments: [
            { author: 'Karen', text: 'An incredible treasure trove of Armenian history and knowledge.', date: '2025-03-28' }
        ]
    },
    {
        id: 14,
        name: { en: 'Ararat Armenian Restaurant', fr: 'Restaurant arm\u00e9nien Ararat', hy: '\u0531\u0580\u0561\u0580\u0561\u057f \u0570\u0561\u0575\u056f\u0561\u056f\u0561\u0576 \u057c\u0565\u057d\u057f\u0578\u0580\u0561\u0576' },
        category: 'restaurant',
        country: 'United States',
        city: 'Los Angeles',
        lat: 34.1599,
        lng: -118.3489,
        description: {
            en: 'Located in the heart of Little Armenia in Hollywood, this restaurant serves authentic Armenian cuisine and is a gathering place for the large Armenian diaspora community of Los Angeles.',
            fr: "Situ\u00e9 au c\u0153ur de la Petite Arm\u00e9nie \u00e0 Hollywood, ce restaurant sert une cuisine arm\u00e9nienne authentique.",
            hy: '\u0533\u057f\u0576\u057e\u0578\u0582\u0574 \u0567 \u0553\u0578\u0584\u0580 \u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576\u056b \u057d\u0580\u057f\u0578\u0582\u0574\u0589 \u054d\u057a\u0561\u057d\u0561\u0580\u056f\u0578\u0582\u0574 \u0567 \u0561\u057e\u0561\u0576\u0564\u0561\u056f\u0561\u0576 \u0570\u0561\u0575\u056f\u0561\u056f\u0561\u0576 \u056d\u0578\u0570\u0561\u0576\u0578\u0581\u0589'
        },
        image: '',
        verified: false,
        ratings: [4, 5, 4, 4],
        comments: []
    },
    {
        id: 15,
        name: { en: 'Armenian Genocide Museum-Institute', fr: "Mus\u00e9e-Institut du g\u00e9nocide arm\u00e9nien", hy: '\u0540\u0561\u0575\u0578\u0581 \u0551\u0565\u0572\u0561\u057d\u057a\u0561\u0576\u0578\u0582\u0569\u0575\u0561\u0576 \u0569\u0561\u0576\u0563\u0561\u0580\u0561\u0576-\u056b\u0576\u057d\u057f\u056b\u057f\u0578\u0582\u057f' },
        category: 'museum',
        country: 'Armenia',
        city: 'Yerevan',
        lat: 40.1847,
        lng: 44.4908,
        description: {
            en: 'An underground museum adjacent to the Tsitsernakaberd memorial, documenting the Armenian Genocide through photographs, documents, and personal testimonies.',
            fr: "Un mus\u00e9e souterrain adjacent au m\u00e9morial de Tsitsernakaberd, documentant le g\u00e9nocide arm\u00e9nien.",
            hy: '\u054d\u057f\u0578\u0580\u0563\u0565\u057f\u0576\u0575\u0561 \u0569\u0561\u0576\u0563\u0561\u0580\u0561\u0576\u0568 \u0563\u057f\u0576\u057e\u0578\u0582\u0574 \u0567 \u053e\u056b\u056e\u0565\u057c\u0576\u0561\u056f\u0561\u0562\u0565\u0580\u0564\u056b \u0570\u0578\u0582\u0577\u0561\u0580\u0571\u0561\u0576\u056b \u056f\u0578\u0572\u0584\u056b\u0576\u0589'
        },
        image: '',
        verified: true,
        ratings: [5, 5, 5, 5, 5],
        comments: []
    }
];

// ===== Data Management =====
function initData() {
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
        localStorage.setItem('la_nextId', '100');
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
