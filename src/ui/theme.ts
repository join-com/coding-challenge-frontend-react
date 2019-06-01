// function colorToRgba(hex: string, alpha: number) {
//     var r = parseInt(hex.slice(1, 3), 16),
//         g = parseInt(hex.slice(3, 5), 16),
//         b = parseInt(hex.slice(5, 7), 16);

//     if (alpha) {
//         return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
//     } else {
//         return 'rgb(' + r + ', ' + g + ', ' + b + ')';
//     }
// }

export const theme = {
    fontSizes: [12, 14, 16, 18, 24, 32, 36, 72, 96],
    space: [
        // margin and padding
        0,
        5,
        10,
        15,
        25,
    ],
    colors: {
        buttonBackground: 'rgba(0, 0, 0, 0.9)',
    },
};
