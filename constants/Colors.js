const Colors = {
    primary400: 'rgb(42, 171, 238)',
    primary500: 'rgb(23, 156, 222)',
    primary600: 'rgb(0, 136, 204)',
    secondary500: 'rgb(140, 140, 140)',
    secondary600: 'rgb(51, 51, 51)',
    accent500: 'rgb(255, 255, 255)',
    darkMain: 'rgb(47, 47, 47)',
    text: 'rgb(0, 0, 0)',

    toRgba: (colorRgb, alpha) => colorRgb.replace('rgb', 'rgba').replace(')', `,${alpha})`)
}

export default Colors;