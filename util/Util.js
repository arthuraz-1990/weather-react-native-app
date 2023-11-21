const Util = {
    formatNumber: (value) => value.toLocaleString('pt-BR'),
    translateMoonPhase: (value) => {
        switch (value) {
            case 'New Moon':
                return 'Lua Nova';
            case 'Waxing Crescent':
                return 'Lua Crescente';
            case 'Full Moon':
                return 'Lua Cheia';
            case 'Waning Crescent':
                return 'Lua Minguante';
            case 'First Quarter':
                return 'Quarto Crescente';
            case 'Waxing Gibbous':
                return 'Gibosa Crescente';
            case 'Waning Gibbous':
                return 'Gibosa Minguante';
            case 'Third Quarter':
                return 'Quarto Minguante';
            default:
                return value;
        }
    }
}

export default Util;