import localfont from "next/font/local"

export const firaGo = localfont({
    src: [
      {
        path: "../../../../public/fonts/firago-300.woff2",
        weight: "300"
      },
      {
        path: "../../../../public/fonts/firago-400.woff2",
        weight: "400"
      },
      {
        path: "../../../../public/fonts/firago-500.woff2",
        weight: "500"
      },
      {
        path: "../../../../public/fonts/firago-700.woff2",
        weight: "700"
      },
    ],
    variable: "--font-firaGo"
  })
  
  export const arial = localfont({
    src: [
      {
        path: '../../../../public/fonts/arial-regulart.woff2'
      },
      {
        path: '../../../../public/fonts/arial-medium.woff2'
      },
      {
        path: '../../../../public/fonts/arial-bold.woff2'
      }
    ],
    variable: "--font-arial"
  })

  export const bpg = localfont({
    src: [
        {
            path: '../../../../public/fonts/bpg-nino-mtavruli-webfont.woff2',
            weight: '400',
            style: 'normal'
        },
        {
          path: '../../../../public/fonts/bpg_nino_mtavruli_bold.woff2',
          weight: '600',
          style: 'normal'
        }
    ],
    variable: "--font-bpg"
  })