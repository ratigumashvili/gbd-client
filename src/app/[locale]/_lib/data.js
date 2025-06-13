export const taxonRank = [
    {
        id: 1,
        value: "Kingdom",
        name: "Kingdom"
    },
    {
        id: 2,
        value: "Phylum",
        name: "Phylum"
    },
    {
        id: 3,
        value: "TaxClass",
        name: "Class"
    },
    {
        id: 4,
        value: "TaxOrder",
        name: "Order"
    },
    {
        id: 5,
        value: "Family",
        name: "Family"
    },
    {
        id: 6,
        value: "Genus",
        name: "Genus"
    }
]


export const iucnCategory = [
    {
        id: 1,
        value: "EX",
        name: "Extinct (EX)"
    },
    {
        id: 2,
        value: "EW",
        name: "Extinct in the wild (EW)"
    },
    {
        id: 3,
        value: "CR",
        name: "Critically endangered (CR)"
    },
    {
        id: 4,
        value: "EN",
        name: "Endangered (EN)"
    },
    {
        id: 5,
        value: "VU",
        name: "Vulnerable (VU)"
    },
    {
        id: 6,
        value: "NT",
        name: "Near threatened (NT)"
    },
    {
        id: 7,
        value: "LC",
        name: "Least concern (LC)"
    },
    {
        id: 8,
        value: "DD",
        name: "Data deficient (DD)"
    },
    {
        id: 9,
        value: "NE",
        name: "Not evaluated (NE)"
    },
    {
        id: 10,
        value: "RE",
        name: "Regionally Extinct (RE)"
    },
]


export const places = [
    {
        id: 1,
        geocode: [41.951009091724735, 44.05444079360828,],
        popup: {
            placeName: "Khashuri",
            regionName: "Kartli"
        },
        genus: [
            {
                id: 1,
                name: "Genus Xylaria",
                species: [
                    {
                        id: 1,
                        name: 'Mustela ermina',
                        url: 'species/mustela-lutreola'
                    },
                    {
                        id: 2,
                        name: 'Annulohypoxylon truncatum',
                        url: 'species/mustela-lutreola'
                    },
                ]
            },
            {
                id: 2,
                name: "Genus Annulohypoxylon",
                species: [
                    {
                        id: 2,
                        name: "Nemania atropurpurea",
                        url: 'species/mustela-lutreola'
                    },
                    {
                        id: 3,
                        name: "Nemania effusa",
                        url: 'species/mustela-lutreola'
                    },
                    {
                        id: 4,
                        name: "Nemania serpens",
                        url: 'species/mustela-lutreola'
                    }
                ]
            }
        ],
    },
    {
        id: 2,
        geocode: [41.95933395809723, 44.10953850484631],
        popup: {
            placeName: "Surami",
            regionName: "Kartli"
        },
        genus: [
            {
                id: 3,
                name: "Genus Nemania",
                species: [
                    {
                        id: 1,
                        name: 'Mustela ermina',
                        url: 'species/mustela-ermina'
                    },
                    {
                        id: 2,
                        name: 'Poronia punctata',
                        url: 'species/mustela-ermina'
                    },
                    {
                        id: 3,
                        name: 'Ustulina deusta',
                        url: 'species/mustela-ermina'
                    },
                    {
                        id: 4,
                        name: 'Mustela ermina',
                        url: 'species/mustela-ermina'
                    },
                    {
                        id: 5,
                        name: 'Poronia punctata',
                        url: 'species/mustela-ermina'
                    },
                    {
                        id: 6,
                        name: 'Ustulina deusta',
                        url: 'species/mustela-ermina'
                    },
                ]
            },
            {
                id: 9,
                name: "Genus Poronia",
                species: [
                    {
                        id: 2,
                        name: "Ustulina maxima",
                        url: 'species/mustela-ermina'
                    },
                    {
                        id: 3,
                        name: "Xylaria carpophila",
                        url: 'species/mustela-ermina'
                    },
                    {
                        id: 4,
                        name: "Xylaria hypoxylon",
                        url: 'species/mustela-ermina'
                    }
                ]
            },
            {
                id: 11,
                name: "Genus Hymenostilbe",
                species: [
                    {
                        id: 3,
                        name: "Xylaria carpophila",
                        url: 'species/mustela-ermina'
                    },
                    {
                        id: 4,
                        name: "Xylaria hypoxylon",
                        url: 'species/mustela-ermina'
                    }
                ]
            },
            {
                id: 12,
                name: "Genus Tolypocladium",
                species: [
                    {
                        id: 1,
                        name: "Tolypocladium ophioglossoides",
                        url: 'species/mustela-ermina'
                    },
                    {
                        id: 2,
                        name: "Xylaria carpophila",
                        url: 'species/mustela-ermina'
                    },
                    {
                        id: 3,
                        name: "Xylaria hypoxylon",
                        url: 'species/mustela-ermina'
                    },
                    {
                        id: 4,
                        name: "Xylaria hypoxylon",
                        url: 'species/mustela-ermina'
                    }
                ]
            }
        ],
    },
    {
        id: 3,
        geocode: [41.92611867250862, 43.95535938483622],
        popup: {
            placeName: "Some other name",
            regionName: "Test region name"
        },
        genus: [
            {
                id: 3,
                name: "Genus Ustulina",
                species: [
                    {
                        id: 1,
                        name: 'Mustela nivalis',
                        url: 'species/mustela-nivalis'
                    }
                ]
            }
        ],
    }
]

// Heatmap data 

export const heatmapData = [
    [37.7749, -122.4194, 50],
    [51.505, -0.09, 0.1],
    [51.106, -0.08, 0.5],
    [51.507, -0.07, 0.3],
    [51.505, -0.09, 0.1],
    [51.508, -0.07, 0.2],
    [51.509, -0.06, 0.7],
    [51.507, -0.08, 0.4],
    [51.504, -0.07, 0.6],
    [51.503, -0.09, 0.3],
    [51.506, -0.06, 0.2],
    [40.7128, -74.006, 100],
    [34.0522, -118.2437, 80],
    [41.8781, -87.6298, 70],
    [29.7604, -95.3698, 60],
    [42.3601, -71.0589, 50],
    [32.7157, -117.1611, 40],
    [39.9526, -75.1652, 30],
    [33.4484, -112.074, 20],
    [47.6062, -122.3321, 10],
    [38.9072, -77.0369, 5],

    [19.076, 72.8777, 50], // Mumbai
    [19.041, 73.0777, 10], // Mumbai
    [19.066, 73.8077, 20], // Mumbai
    [19.076, 73.3077, 30], // Mumbai
    [28.7041, 77.1025, 40], // Delhi
    [12.9716, 77.5946, 30], // Bangalore
    [22.5726, 88.3639, 20], // Kolkata
    [13.0827, 80.2707, 10], // Chennai
    [26.9124, 75.7873, 5], // Jaipur
    [17.385, 78.4867, 5], // Hyderabad
    [22.7196, 75.8577, 2], // Indore
    [19.076, 72.8777, 3]
];

export const activityChartData = [
    { date: '2024-04-01', count: 1 },
    { date: '2024-05-22', count: 22 },
    { date: '2024-06-1', count: 6 },
    { date: '2024-06-27', count: 11 },
    { date: '2024-06-28', count: 3 },
    { date: '2025-06-29', count: 8 },
    { date: '2025-11-03', count: 2 },
    { date: '2025-11-04', count: 3 },
    { date: '2024-12-28', count: 6 },
    { date: '2025-01-14', count: 12 },
    { date: '2025-01-26', count: 21 },
]

export const species = [
    {
        id: 1,
        slug: 'mustela-lutreola',
        name: 'Mustela lutreola',
        scientificNameID: '2438',
        nameAccordingTo: {
            title: 'Darwin Core',
            url: 'https://dwc.tdwg.org/list/#dwc_nameAccordingTo'
        },
        species: 'lutreola',
        taxonRank: {
            title: 'Darwin Core',
            url: 'https://dwc.tdwg.org/list/#dwc_taxonRank'
        },
        scientificNameAuthorship: {
            title: 'Darwin Core',
            url: 'https://dwc.tdwg.org/list/#dwc_scientificNameAuthorship'
        },
        vernacularName: {
            title: 'Darwin Core',
            url: 'https://dwc.tdwg.org/list/#dwc_vernacularName'
        },
        georgianName: 'წაულა',
        referenceOfOccurrenceInGeorgia: [
            {
                id: 1,
                title: 'Bukhnikashvili, A. & Kandaurov, A., 2002. The annotated list of mammals of Georgia. Proceedings of the Institute of Zoology, Tbilisi, XXI: 319-336'
            },
            {
                id: 2,
                title: 'Testing more then one reference'
            }
        ],
        speciesDistribution: [
            [37.7749, -122.4194, 50],
            [51.505, -0.09, 0.1],
            [51.106, -0.08, 0.5],
            [51.507, -0.07, 0.3],
            [51.505, -0.09, 0.1],
            [51.508, -0.07, 0.2],
            [51.509, -0.06, 0.7],
            [51.507, -0.08, 0.4],
            [51.504, -0.07, 0.6],
            [51.503, -0.09, 0.3],
            [51.506, -0.06, 0.2],
        ],
        conservationStatus: {
            nationalRedLisStatus: 'CR',
            IUCNRedListStatus: 'CR',
            protectionStatus: 'Not defined',
            reason: 'A3ce (IUCN)',
            trend: 'Unknown',
            native_introduced: 'Native',
            comment: '**',
            georgianName: 'წაულა',
            englishName: 'European Mink',
            subSpecies: 'M.l. turovi',
            synonyms: 'Mustela lutreola caucasica, M.l. binominata',
            taxonomyAccordingTo: 'www.redlist.org',
            referencies: [
                {
                    id: 1,
                    title: 'Bukhnikashvili, A. & Kandaurov, A., 2002. The annotated list of mammals of Georgia. Proceedings of the Institute of Zoology, Tbilisi, XXI: 319-420'
                },
                {
                    id: 2,
                    title: "Test 222"
                }
            ],
            evaluatedBy: [
                {
                    id: 1,
                    name: 'Bukhnikashvili A.'
                },
                {
                    id: 2,
                    name: 'Kandaurov A.'
                },
                {
                    id: 3,
                    name: 'Natradze I.'
                }
            ],
            dateEvaluated: 'Nov 2021'
        }
    },
    {
        id: 2,
        slug: 'mustela-ermina',
        name: 'Mustela ermina',
        scientificNameID: '2437',
        nameAccordingTo: {},
        species: 'ermina',
        taxonRank: {
            title: 'Darwin Core',
            url: 'https://dwc.tdwg.org/list/#dwc_taxonRank'
        },
        scientificNameAuthorship: {},
        vernacularName: {},
        georgianName: '',
        referenceOfOccurrenceInGeorgia: [],
        speciesDistribution: [
            [37.7749, -122.4194, 50],
            [51.505, -0.09, 0.1],
            [51.106, -0.08, 0.5],
            [51.507, -0.07, 0.3],
            [51.505, -0.09, 0.1],
            [51.508, -0.07, 0.2],
            [51.509, -0.06, 0.7],
            [51.507, -0.08, 0.4],
            [51.504, -0.07, 0.6],
            [51.503, -0.09, 0.3],
            [51.506, -0.06, 0.2],
        ],
        conservationStatus: {
            nationalRedLisStatus: 'DD',
            IUCNRedListStatus: 'LC',
            protectionStatus: 'Not defined',
            reason: 'N/A',
            trend: 'Unknown',
            native_introduced: 'Native',
            comment: '**',
            georgianName: 'ყარყუმი',
            englishName: 'Stoat',
            subSpecies: 'M.e. teberdiana',
            synonyms: '',
            taxonomyAccordingTo: 'www.redlist.org',
            referencies: [
                {
                    id: 1,
                    title: 'Bukhnikashvili, A. & Kandaurov, A., 2002. The annotated list of mammals of Georgia. Proceedings of the Institute of Zoology, Tbilisi, XXI: 319-419'
                },
                {
                    id: 2,
                    title: "test"
                }
            ],
            evaluatedBy: [
                {
                    id: 1,
                    name: 'Bukhnikashvili A.'
                },
                {
                    id: 2,
                    name: 'Kandaurov A.'
                },
                {
                    id: 3,
                    name: 'Natradze I.'
                }
            ],
            dateEvaluated: 'Nov 2021'
        }
    }
]