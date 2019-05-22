function colorToRgba(hex: string, alpha: number) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}

export const theme = {
    fontSizes: [12, 14, 16, 18, 24, 32, 36, 72, 96],
    space: [
        // margin and padding
        0,
        4,
        8,
        16,
        32,
        64,
        128,
        256,
    ],
    colors: {
        UIClientError: '#ff6c00',
        UIServerError: '#ff0000',
        UITriggerRed: '#fe3d00',
        UITriggerBlue: '#00a9f6',
        UIModalFooterLightBlueGray: '#f3f9ff',
        UIModalTitleDefault: colorToRgba('#5e6670', 0.4),
        UICheckboxIconCopy: colorToRgba('#909cac', 0.2),
    },
};
