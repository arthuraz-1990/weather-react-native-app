const ScreenSize = {
    xl: 900,
    lg: 600,
    md: 380,
    sm: 280,
    xs: 0,
    getScreenSize: (width) => Object.keys(ScreenSize).find(key => ScreenSize[key] <= width)
}

export default ScreenSize;