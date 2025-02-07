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

// export const taxonomy = [
//     {
//         id: 1,
//         name: "Animalia",
//         slug: 'kingdom-animalia',
//         description: {
//             scientificNameId: "45130",
//             nameAccordingTo: {
//                 title: 'www.faunaeur.org',
//                 url: "https://dwc.tdwg.org/list/#dwc_nameAccordingTo"
//             },
//             namePublishedInYear: 2023,
//             species: 'anananan',
//             infraspecificEpithet: "anananan",
//             taxonRank: {
//                 title: "Kingdom",
//                 url: "https://dwc.tdwg.org/list/#dwc_taxonRank"
//             },
//             scientificNameAuthorship: {
//                 title: "Linnaeus, 1758",
//                 url: "https://dwc.tdwg.org/list/#dwc_scientificNameAuthorship"
//             },
//             vernacularName: {
//                 title: "Animals",
//                 url: "https://dwc.tdwg.org/list/#dwc_vernacularName"
//             },
//             georgianName: "ცხოველები",
//             taxonomicStatus: "open",
//             taxonRemarks: "open",
//             GBDRemarks: `<p>This Phyllum unifies all living animals except Protozoa, from sponges to human beings. Out of ca. 1,500 000 animal species found worldwide 10 to 15 thousands are recorded for Georgia (one out of each 100 species found in the World). This is not too little taken into account that Georgia has small area and this is not a tropical country.</p>`,
//             pageAuthors: [
//                 {
//                     id: 1,
//                     name: "David Tarkhnishvili"
//                 }
//             ]
//         },
//         photos: [
//             {
//                 id: 1,
//                 url: "https://biodiversity.iliauni.edu.ge/DBImages/Capra-aegagrus.jpg",
//                 title: "Capra aegagrus",
//                 taxon: "Animalia",
//                 taxonId: 1,
//                 comment: null,
//                 author: "Davit Tarknishvili",
//                 authorId: 1,
//                 uploadedBy: "Davit Tarkhnishvili",
//             },
//             {
//                 id: 2,
//                 url: "https://biodiversity.iliauni.edu.ge/DBImages/Lumbricus-sp.jpg",
//                 title: "Lumbricus sp",
//                 taxon: "Animalia",
//                 taxonId: 1,
//                 comment: null,
//                 author: "Davit Tarkhnishvili",
//                 authorId: 1,
//                 uploadedBy: null
//             },
//             {
//                 id: 3,
//                 url: "https://biodiversity.iliauni.edu.ge/DBImages/Erusheti%20Range%2022%2009%2007%20(124).jpg",
//                 title: "Gordius aquaticus",
//                 taxon: "Animalia",
//                 taxonId: 1,
//                 comment: "Erusheti Range, 22 Sept. 2007",
//                 author: "Davit Tarkhnishvili",
//                 authorId: 1,
//                 uploadedBy: null
//             },
//             {
//                 id: 4,
//                 url: "https://biodiversity.iliauni.edu.ge/DBImages/New/f2011040030.jpg",
//                 title: "Athene noctua",
//                 taxon: "Animalia",
//                 taxonId: 1,
//                 comment: "Vashlovani-Chachuna, 2009",
//                 author: "Zura Javakhishvili",
//                 authorId: 2,
//                 uploadedBy: "Zura Javakhishvili"
//             },
//             {
//                 id: 5,
//                 url: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2013125611.jpg",
//                 title: "Delphinus delphis",
//                 taxon: "Animalia",
//                 taxonId: 1,
//                 comment: "Black Sea, Grigoleti",
//                 author: "Zurab Gurielidze",
//                 authorId: 3,
//                 uploadedBy: null
//             },
//             {
//                 id: 6,
//                 url: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2015025534.jpg",
//                 title: "Gigantomilax lederi",
//                 taxon: "Animalia",
//                 taxonId: 1,
//                 comment: "Baniskhevi, Borjomi Gorge",
//                 author: "David Tarkhnishvili",
//                 authorId: 1,
//                 uploadedBy: "David Tarkhnishvili"
//             },
//             {
//                 id: 7,
//                 url: "https://biodiversity.iliauni.edu.ge/DBImages/New/f2015012815.jpg",
//                 title: "Ischnura elegans",
//                 taxon: "Animalia",
//                 taxonId: 1,
//                 comment: "Tbilisi sea, July 2014. Copulation.",
//                 author: "Diego Rodriguez",
//                 authorId: 4,
//                 uploadedBy: "Diego Rodriguez"
//             },
//             {
//                 id: 8,
//                 url: "https://biodiversity.iliauni.edu.ge/DBImages/New/f2016024033.jpg",
//                 title: "Lebia trimaculata",
//                 taxon: "Animalia",
//                 taxonId: 1,
//                 comment: "Village Dighomi, 14.02.2016. Id confirmed by Alexander Anichtchenko.",
//                 author: "Armen Seropian",
//                 authorId: 5,
//                 uploadedBy: "Armen Seropian"
//             }
//         ],
//         phylum: [
//             {
//                 id: 1,
//                 name: 'Annelida',
//                 slug: 'annelida',
//                 description: {
//                     scientificNameId: "",
//                     nameAccordingTo: {
//                         title: "tolweb.org",
//                         url: "http://tolweb.org/tree?group=Eukaryotes&contgroup=Life_on_Earth"
//                     },
//                     taxonRank: {
//                         title: "Phylum",
//                         url: "https://dwc.tdwg.org/list/#dwc_taxonRank"
//                     },
//                     scientificNameAuthorship: {
//                         title: "Lamarck, 1809",
//                         url: "https://dwc.tdwg.org/list/#dwc_scientificNameAuthorship"
//                     },
//                     vernacularName: {
//                         title: "Ring Worms",
//                         url: "https://dwc.tdwg.org/list/#dwc_vernacularName"
//                     },
//                     georgianName: "რგოლიანი ჭიები",
//                     GBDRemarks: `<p>Georgia has 131 terrestrial and freshwater species of ring worms, most of that rainworms and leaches.</p>`,
//                     pageAuthors: [
//                         {
//                             id: 1,
//                             name: "David Tarkhnishvili"
//                         }
//                     ]
//                 },
//                 photos: [
//                     {
//                         id: 1,
//                         url: "https://biodiversity.iliauni.edu.ge/DBImages/lumbricus-tetritskaro.jpg",
//                         title: "",
//                         taxon: "Annelida",
//                         taxonId: 1,
//                         comment: 'Lumbricus spÂ',
//                         author: "Davit Tarknishvili",
//                         authorId: 1,
//                         uploadedBy: "Davit Tarkhnishvili",
//                     },
//                     {
//                         id: 2,
//                         url: "https://biodiversity.iliauni.edu.ge/DBImages/Lumbricus-sp.jpg",
//                         title: "Lumbricidae sp",
//                         taxon: "Annelida",
//                         taxonId: 1,
//                         comment: '',
//                         author: "Davit Tarknishvili",
//                         authorId: 1,
//                         uploadedBy: "Davit Tarkhnishvili",
//                     },
//                     {
//                         id: 3,
//                         url: "https://biodiversity.iliauni.edu.ge/DBImages/Hirudo-Erusheti-Range-22-09.jpg",
//                         title: "Hirudinea sp",
//                         taxon: "Annelida",
//                         taxonId: 1,
//                         comment: 'Erusheti range 22 09 07',
//                         author: "Davit Tarknishvili",
//                         authorId: 1,
//                         uploadedBy: "Davit Tarkhnishvili",
//                     }
//                 ],
//                 class: [
//                     {
//                         id: 1,
//                         name: "Citellata",
//                         slug: "class-citellata"
//                     },
//                     {
//                         id: 2,
//                         name: "Clitellata",
//                         slug: "class-clitellata"
//                     },
//                     {
//                         id: 3,
//                         name: "Oligochaeta",
//                         slug: "class-oligochaeta"
//                     }
//                 ]
//             },
//             {
//                 id: 2,
//                 name: 'Arthropoda',
//                 slug: 'arthropoda',
//                 description: {

//                 },
//                 photos: [],
//                 class: [
//                     {
//                         id: 3,
//                         name: "Polychaeta",
//                         slug: "class-Polychaeta"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         id: 2,
//         name: "Fungi",
//         slug: 'kingdom-fungi',
//         description: {
//             scientificNameId: "45135",
//             nameAccordingTo: {
//                 title: 'www.faunaeur.org',
//                 url: "https://dwc.tdwg.org/list/#dwc_nameAccordingTo"
//             },
//             namePublishedInYear: null,
//             species: null,
//             infraspecificEpithet: null,
//             taxonRank: {
//                 title: "Kingdom",
//                 url: "https://dwc.tdwg.org/list/#dwc_taxonRank"
//             },
//             scientificNameAuthorship: null,
//             vernacularName: {
//                 title: "Fungi",
//                 url: "https://dwc.tdwg.org/list/#dwc_vernacularName"
//             },
//             georgianName: "სოკოები",
//             taxonomicStatus: null,
//             taxonRemarks: null,
//             GBDRemarks: null,
//             pageAuthors: []
//         },
//         photos: [
//             {
//                 id: 1,
//                 url: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012112923.jpg",
//                 title: "Gyromitra parma",
//                 taxon: "Fungi",
//                 taxonId: 2,
//                 comment: "Sabaduri forest in Tbilisi National Park. Under Fagus orientalis.",
//                 author: "Diego Rodriguez",
//                 authorId: 4,
//                 uploadedBy: "Diego Rodriguez"
//             },
//             {
//                 id: 2,
//                 url: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012020911.jpg",
//                 title: "Fomes fomentarius",
//                 taxon: "Fungi",
//                 taxonId: 2,
//                 comment: "On dead beech (Fagus orientalis), Tbilisi National Park.",
//                 author: "Diego Rodriguez",
//                 authorId: 4,
//                 uploadedBy: "Diego Rodriguez"
//             },
//             {
//                 id: 3,
//                 url: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012124444.jpg",
//                 title: "Fomitopsis pinicola, detail of the hymenium.",
//                 taxon: "Fungi",
//                 taxonId: 2,
//                 comment: "Tbilisi National Park",
//                 author: "Diego Rodriguez",
//                 authorId: 4,
//                 uploadedBy: "Diego Rodriguez"
//             },
//             {
//                 id: 4,
//                 url: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012012144.jpg",
//                 title: "Helvella acetabulum",
//                 taxon: "Fungi",
//                 taxonId: 2,
//                 comment: "Under Fagus orientalis y Carpinus caucasica, Sioni.",
//                 author: "Diego Rodriguez",
//                 authorId: 4,
//                 uploadedBy: "Diego Rodriguez"
//             },
//             {
//                 id: 5,
//                 url: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012075749.jpg",
//                 title: "Boletus luridus",
//                 taxon: "Fungi",
//                 taxonId: 2,
//                 comment: "Tbilisi",
//                 author: "Diego Rodriguez",
//                 authorId: 4,
//                 uploadedBy: "Diego Rodriguez"
//             },
//             {
//                 id: 6,
//                 url: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012013734.jpg",
//                 title: "Helvella lacunosa & Helvella lacunosa f. alba",
//                 taxon: "Fungi",
//                 taxonId: 2,
//                 comment: "Growing both in very rotten beech wood.",
//                 author: "Diego Rodriguez",
//                 authorId: 4,
//                 uploadedBy: "Diego Rodriguez"
//             },
//             {
//                 id: 7,
//                 url: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012015308.jpg",
//                 title: "Rutstroemia bulgarioides",
//                 taxon: "Fungi",
//                 taxonId: 2,
//                 comment: null,
//                 author: "Diego Rodriguez",
//                 authorId: 4,
//                 uploadedBy: "Diego Rodriguez"
//             },
//             {
//                 id: 8,
//                 url: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012033445.jpg",
//                 title: "Gloeophyllum sepiarium.",
//                 taxon: "Fungi",
//                 taxonId: 2,
//                 comment: "On dead wood of Pinus sp. Betania.",
//                 author: "Diego Rodriguez",
//                 authorId: 4,
//                 uploadedBy: "Diego Rodriguez"
//             }
//         ]
//     },
//     {
//         id: 3,
//         name: "Plantae",
//         slug: "kingdom-plantae",
//         description: {
//             scientificNameId: "45132",
//             nameAccordingTo: null,
//             namePublishedInYear: null,
//             species: null,
//             infraspecificEpithet: null,
//             taxonRank: {
//                 title: "Kingdom",
//                 url: "https://dwc.tdwg.org/list/#dwc_taxonRank"
//             },
//             scientificNameAuthorship: null,
//             vernacularName: null,
//             georgianName: null,
//             taxonomicStatus: null,
//             taxonRemarks: null,
//             GBDRemarks: null,
//             pageAuthors: []
//         },
//         photos: []
//     }
// ]

// Visual representation of taxonomy (Fungi) order

export const fungiTree = {
    title: "Kingdom Fungi",
    children: [
        {
            id: 1,
            name: "Phylum Ascomycota",
            url: "/",
            children: [
                {
                    id: 3,
                    name: "Class Eurotiomycetes",
                },
                {
                    id: 4,
                    name: "Class Lecanoromycetes"
                },
                {
                    id: 5,
                    name: "Class Arthoniomycetes"
                },
                {
                    id: 6,
                    name: "Class Candelariomycetes"
                },
                {
                    id: 7,
                    name: "Class Coniocybomycetes"
                },
                {
                    id: 8,
                    name: "Class Dothideomycetes"
                },
                {
                    id: 9,
                    name: "Class Eurotiomycete"
                },
                {
                    id: 10,
                    name: "Class Eurotiomycetes"
                },
                {
                    id: 11,
                    name: "Class Geoglossomycetes"
                },
                {
                    id: 12,
                    name: "Class Incertae sedis"
                },
                {
                    id: 13,
                    name: "Class Laboulbeniomycetes"
                },
                {
                    id: 14,
                    name: "Class Lecanoromycete"
                },
                {
                    id: 15,
                    name: "Class Lecanoromycetes"
                },
                {
                    id: 16,
                    name: "Class Leotiomycetes "
                },
                {
                    id: 17,
                    name: "Class Lichinomycetes"
                },
                {
                    id: 18,
                    name: "Class Orbiliomycetes"
                },
                {
                    id: 19,
                    name: "Class Pezizomycetes"
                },
                {
                    id: 20,
                    name: "Class Sareomycetes "
                },
                {
                    id: 21,
                    name: "Class Sordariomycetes"
                }

            ]
        },
        {
            id: 2,
            name: "Phylum Basidiomycota",
            url: "/",
            children: [
                {
                    id: 22,
                    name: "Class Agaricomycetes"
                },
                {
                    id: 23,
                    name: "Class Atractiellomycetes"
                },
                {
                    id: 24,
                    name: "Class Dacrymycetes"
                },
                {
                    id: 25,
                    name: "Class Exobasidiomycetes",
                    children: [
                        {
                            id: 34,
                            name: "Order Exobasidiales",
                            children: [
                                {
                                    id: 36,
                                    name: "Family Exobasidiaceae",
                                    children: [
                                        {
                                            id: 37,
                                            name: "Genus Exobasidium",
                                            children: [
                                                {
                                                    id: 38,
                                                    name: "Species Exobasidium camelliae"
                                                },
                                                {
                                                    id: 39,
                                                    name: "Species Exobasidium dubium"
                                                },
                                                {
                                                    id: 40,
                                                    name: "Species Exobasidium japonicum"
                                                },
                                                {
                                                    id: 41,
                                                    name: "Species Exobasidium rhododendri"
                                                },
                                                {
                                                    id: 42,
                                                    name: "Species Exobasidium vaccinii"
                                                },
                                                {
                                                    id: 43,
                                                    name: "Species Exobasidium vaccinii-uliginosi"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: 35,
                            name: "Order Polyporales (134)"
                        }
                    ]
                },
                {
                    id: 26,
                    name: "Class Tremellomycetes",
                    children: [
                        {
                            id: 27,
                            name: "Order Tremellales",
                            children: [
                                {
                                    id: 28,
                                    name: "Family Tremellaceae",
                                    children: [
                                        {
                                            id: 29,
                                            name: "Genus Phaeotremella",
                                            children: [
                                                {
                                                    id: 31,
                                                    name: "Species Phaeotremella fimbriata"
                                                }
                                            ]
                                        },
                                        {
                                            id: 30,
                                            name: "Genus Tremella",
                                            children: [
                                                {
                                                    id: 32,
                                                    name: "Species Tremella encephala"
                                                },
                                                {
                                                    id: 33,
                                                    name: "Species Tremella mesenterica"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }

            ]
        }
    ]
}

export const imageGalleryData = [
    {
        id: 1,
        src: "https://biodiversity.iliauni.edu.ge/DBImages/Capra-aegagrus.jpg",
        title: "Capra aegagrus",
        taxon: "Animalia",
        taxonId: 1,
        comment: null,
        author: "Davit Tarknishvili",
        authorId: 1,
        uploadedBy: "Davit Tarkhnishvili",
    },
    {
        id: 2,
        src: "https://biodiversity.iliauni.edu.ge/DBImages/Lumbricus-sp.jpg",
        title: "Lumbricus sp",
        taxon: "Animalia",
        taxonId: 1,
        comment: null,
        author: "Davit Tarkhnishvili",
        authorId: 1,
        uploadedBy: null
    },
    {
        id: 3,
        src: "https://biodiversity.iliauni.edu.ge/DBImages/Erusheti%20Range%2022%2009%2007%20(124).jpg",
        title: "Gordius aquaticus",
        taxon: "Animalia",
        taxonId: 1,
        comment: "Erusheti Range, 22 Sept. 2007",
        author: "Davit Tarkhnishvili",
        authorId: 1,
        uploadedBy: null
    },
    {
        id: 4,
        src: "https://biodiversity.iliauni.edu.ge/DBImages/New/f2011040030.jpg",
        title: "Athene noctua",
        taxon: "Animalia",
        taxonId: 1,
        comment: "Vashlovani-Chachuna, 2009",
        author: "Zura Javakhishvili",
        authorId: 2,
        uploadedBy: "Zura Javakhishvili"
    },
    {
        id: 5,
        src: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2013125611.jpg",
        title: "Delphinus delphis",
        taxon: "Animalia",
        taxonId: 1,
        comment: "Black Sea, Grigoleti",
        author: "Zurab Gurielidze",
        authorId: 3,
        uploadedBy: null
    },
    {
        id: 6,
        src: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2015025534.jpg",
        title: "Gigantomilax lederi",
        taxon: "Animalia",
        taxonId: 1,
        comment: "Baniskhevi, Borjomi Gorge",
        author: "David Tarkhnishvili",
        authorId: 1,
        uploadedBy: "David Tarkhnishvili"
    },
    {
        id: 7,
        src: "https://biodiversity.iliauni.edu.ge/DBImages/New/f2015012815.jpg",
        title: "Ischnura elegans",
        taxon: "Animalia",
        taxonId: 1,
        comment: "Tbilisi sea, July 2014. Copulation.",
        author: "Diego Rodriguez",
        authorId: 4,
        uploadedBy: "Diego Rodriguez"
    },
    {
        id: 8,
        src: "https://biodiversity.iliauni.edu.ge/DBImages/New/f2016024033.jpg",
        title: "Lebia trimaculata",
        taxon: "Animalia",
        taxonId: 1,
        comment: "Village Dighomi, 14.02.2016. Id confirmed by Alexander Anichtchenko.",
        author: "Armen Seropian",
        authorId: 5,
        uploadedBy: "Armen Seropian"
    },
    {
        id: 9,
        src: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012112923.jpg",
        title: "Gyromitra parma",
        taxon: "Fungi",
        taxonId: 2,
        comment: "Sabaduri forest in Tbilisi National Park. Under Fagus orientalis.",
        author: "Diego Rodriguez",
        authorId: 4,
        uploadedBy: "Diego Rodriguez"
    },
    {
        id: 10,
        src: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012020911.jpg",
        title: "Fomes fomentarius",
        taxon: "Fungi",
        taxonId: 2,
        comment: "On dead beech (Fagus orientalis), Tbilisi National Park.",
        author: "Diego Rodriguez",
        authorId: 4,
        uploadedBy: "Diego Rodriguez"
    },
    {
        id: 11,
        src: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012124444.jpg",
        title: "Fomitopsis pinicola, detail of the hymenium.",
        taxon: "Fungi",
        taxonId: 2,
        comment: "Tbilisi National Park",
        author: "Diego Rodriguez",
        authorId: 4,
        uploadedBy: "Diego Rodriguez"
    },
    {
        id: 12,
        src: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012012144.jpg",
        title: "Helvella acetabulum",
        taxon: "Fungi",
        taxonId: 2,
        comment: "Under Fagus orientalis y Carpinus caucasica, Sioni.",
        author: "Diego Rodriguez",
        authorId: 4,
        uploadedBy: "Diego Rodriguez"
    },
    {
        id: 13,
        src: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012075749.jpg",
        title: "Boletus luridus",
        taxon: "Fungi",
        taxonId: 2,
        comment: "Tbilisi",
        author: "Diego Rodriguez",
        authorId: 4,
        uploadedBy: "Diego Rodriguez"
    },
    {
        id: 14,
        src: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012013734.jpg",
        title: "Helvella lacunosa & Helvella lacunosa f. alba",
        taxon: "Fungi",
        taxonId: 2,
        comment: "Growing both in very rotten beech wood.",
        author: "Diego Rodriguez",
        authorId: 4,
        uploadedBy: "Diego Rodriguez"
    },
    {
        id: 15,
        src: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012015308.jpg",
        title: "Rutstroemia bulgarioides",
        taxon: "Fungi",
        taxonId: 2,
        comment: null,
        author: "Diego Rodriguez",
        authorId: 4,
        uploadedBy: "Diego Rodriguez"
    },
    {
        id: 16,
        src: "https://biodiversity.iliauni.edu.ge/thumb.php?img=DBImages/New/f2012033445.jpg",
        title: "Gloeophyllum sepiarium.",
        taxon: "Fungi",
        taxonId: 2,
        comment: "On dead wood of Pinus sp. Betania.",
        author: "Diego Rodriguez",
        authorId: 4,
        uploadedBy: "Diego Rodriguez"
    }
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