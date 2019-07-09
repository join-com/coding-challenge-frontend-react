export default class Dateutil {
	static getLocale = navigator.language || navigator.userLanguage;

	static getTimestampDate = timestamp => new Date(timestamp * 1000);
	static getLoaleDateString = timestamp =>
		Dateutil.getTimestampDate(timestamp).toLocaleDateString();

	static getDateString = timestamp => Dateutil.getTimestampDate(timestamp).toDateString();

	static convertDateToUnixtimestamp = date => new Date(date).getTime() / 1000;

	static getDatePickerFormat = timestamp => {
		if (!timestamp) return "";
		let date = Dateutil.getTimestampDate(timestamp),
			day = "0" + date.getDate(),
			month = "0" + (date.getMonth() + 1),
			year = date.getFullYear();
		day = day.legth > 2 ? day.substr(0, 1) : day;
		month = month.legth > 2 ? month.substr(0, 1) : month;
		return `${year}-${month}-${day}`;
	};

	static getnamedate = timestamp => {
		if (!timestamp) return "";
		let date = Dateutil.getTimestampDate(timestamp); //m/d/yyyy
		let months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		],
			day = date.getDate(),
			month = date.getMonth(),
			year = date.getFullYear();
		return day + " " + months[month] + " " + year;
	};
}

