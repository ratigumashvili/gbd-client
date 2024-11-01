export const Languages = [
    {
        id: 1,
        name: "ქართ",
        locale: 'ka'
    },
    {
        id: 2,
        name: "Eng",
        locale: 'en'
    }
]

export const TopMenu = [
    {
        id: 1,
        title: 'home',
        path: '/',
        children: []
    },
    {
        id: 2,
        title: 'about',
        path: '/about',
        children: []
    },
    {
        id: 3,
        title: 'team',
        path: '/team',
        children: []
    },
    {
        id: 4,
        title: 'taxonomy',
        path: '/taxonomy',
        children: []
    },
    {
        id: 5,
        title: 'caucasus',
        path: '/caucasus',
        children: []
    },
    {
        id: 6,
        title: 'gallery',
        path: '/gallery',
        children: []
    },
    // {
    //     id: 7,
    //     title: 'collaborators',
    //     path: '/collaborators',
    //     children: []
    // }
]

export const MARGIN = { top: 10, right: 10, bottom: 50, left: 50 };

export const COLOR_LEGEND_HEIGHT = 60;

export const COLORS = [
  "#e7f0fa",
  "#c9e2f6",
  "#95cbee",
  "#0099dc",
  "#4ab04a",
  "#ffd73e",
  "#eec73a",
  "#e29421",
  "#e29421",
  "#f05336",
  "#ce472e",
];

export const THRESHOLDS = [
  0, 0.01, 0.02, 0.03, 0.09, 0.1, 0.15, 0.25, 0.4, 0.5, 1,
];

export const mapOptions = {
    zoom: 8,
    center: [42.236104704638805, 43.75807953121158]
}

export const conservationStatusInterface = {
    nationalRedLisStatus: '',
    IUCNRedListStatus: '',
    protectionStatus: '',
    reason: '',
    trend: '',
    native_introduced: '',
    comment: '',
    georgianName: '',
    englishName: '',
    subSpecies: '',
    synonyms: '',
    taxonomyAccordingTo: '',
    referencies: [],
    evaluatedBy: [],
    dateEvaluated: ''
}

export const singleMetaInterface = {
    id: null,
    slug: '',
    name: '',
    scientificNameID: '',
    nameAccordingTo: {},
    species: '',
    taxonRank: {},
    scientificNameAuthorship: {},
    vernacularName: {},
    georgianName: '',
    referenceOfOccurrenceInGeorgia: [],
    speciesDistribution: [],
}

export const taxonomyParentInterface = {
    scientificNameId: '',
    nameAccordingTo: {},
    namePublishedInYear: '',
    species: '',
    infraspecificEpithet: '',
    taxonRank: {},
    scientificNameAuthorship: {},
    vernacularName: '',
    georgianName: '',
    taxonomicStatus: '',
    taxonRemarks: '',
    GBDRemarks: '',
    pageAuthors: [],
}

export const AUTH_FORM_INITIAL_STATE = {
    data: null,
    zodErrors: null,
    message: null
}

export const RESEARCHERS_PER_PAGE = 4
