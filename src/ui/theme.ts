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
    /** Размер шрифтов */
    fontSizes: [12, 14, 16, 18, 24, 32, 36, 72, 96],
    /** Отступы и границы */
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
    /** Общие цвета */
    colors: {
        UIClientError: '#ff6c00',
        UIServerError: '#ff0000',
        UITriggerRed: '#fe3d00',
        UITriggerBlue: '#00a9f6',
        UIModalFooterLightBlueGray: '#f3f9ff',
        UIModalTitleDefault: colorToRgba('#5e6670', 0.4),
        UICheckboxIconCopy: colorToRgba('#909cac', 0.2),
    },
    /** Размеры кнопок */
    buttonSizes: {
        xs: `
		height: 16px;
		padding: 0 16px;
		font-size: 10px;
	  `,
        sm: `
		height: 24px;
		padding: 0 24px;
		font-size: 13px;
	  `,
        md: `
		height: 34px;
		padding: 0 34px;
		font-size: 14px;
		letter-spacing: 0.4px;
	  `,
        lg: `
		height: 56px;
		padding: 0 56px;
		font-size: 20px;
	  `,
        default: `
		height: 24px;
		padding: 0 30px;
		font-size: 13px;
	  `,
    },
    /** Цвета кнопок */
    buttonColors: {
        green: `
		background-color: #a2d628;
		color: ${colorToRgba('#a2d628', 0.5)};
	  `,
        blue: `
		background-color: #507bfc;
		color: ${colorToRgba('#507bfc', 0.5)};
	  `,
        lightBlue: `
		background-color: #10aee7;
		color: ${colorToRgba('#10aee7', 0.5)};
	  `,
        default: `
		background-color: #cccccc;
		color: ${colorToRgba('#cccccc', 0.5)};
	  `,
    },
};
