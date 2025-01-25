import localfont from "next/font/local"

export const firaGo = localfont({
    src: [
      {
        path: "../../../../public/fonts/firago-300.ttf",
        weight: "300"
      },
      {
        path: "../../../../public/fonts/firago-400.ttf",
        weight: "400"
      },
      {
        path: "../../../../public/fonts/firago-500.ttf",
        weight: "500"
      },
      {
        path: "../../../../public/fonts/firago-700.ttf",
        weight: "700"
      },
    ],
    variable: "--font-firaGo"
  })
  
  export const arial = localfont({
    src: [
      {
        path: '../../../../public/fonts/arial-regulart.ttf'
      },
      {
        path: '../../../../public/fonts/arial-medium.ttf'
      },
      {
        path: '../../../../public/fonts/arial-bold.ttf'
      }
    ],
    variable: "--font-arial"
  })

  export const bpg = localfont({
    src: [
        {
            path: '../../../../public/fonts/bpg-nino-mtavruli-webfont.ttf',
            weight: '400',
            style: 'normal'
        },
        {
          path: '../../../../public/fonts/bpg_nino_mtavruli_bold.ttf',
          weight: '600',
          style: 'normal'
        }
    ],
    variable: "--font-bpg"
  })