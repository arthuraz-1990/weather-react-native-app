import ScreenSize from "./ScreenSize";

const FontSize = {
    large: {
        xl: 40,
        lg: 30,
        md: 25,
        sm: 22,
        xs: 20
    },
    main: {
        xl: 30,
        lg: 20,
        md: 18,
        sm: 15,
        xs: 12
    },
    secondary: {
        xl: 25,
        lg: 18,
        md: 12,
        sm: 10,
        xs: 8
    },
    small: {
        xl: 20,
        lg: 15,
        md: 10,
        sm: 8,
        xs: 6
    },
    getSize: (type, width) => {
        const breakpoint = ScreenSize.getScreenSize(width);
        return FontSize[type]?.[breakpoint] ?? FontSize.secondary.md;
    }
}

export default FontSize;