import DatePicker from 'flowbite-datepicker/Datepicker';

window.addEventListener("load", function () {
const datepickerEl = document.getElementById("default-datepicker1");
if (Datepicker && datepickerEl) {
    const formattedToday = (new Date()).toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace(/\//g, '.');

    datepickerEl.value = formattedToday;
    Object.assign(DatePicker.locales, {
        ru: {
            days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
            daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            today: "Сегодня",
            clear: "Очистить",
            format: "dd.mm.yyyy",
            weekStart: 1,
            monthsTitle: 'Месяцы',
            // autoSelectToday: true
        },
        uz: {
            days: ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"],
            daysShort: ["Yak", "Du", "Se", "Chor", "Pay", "Ju", "Sha"],
            daysMin: ["Ya", "Du", "Se", "Cho", "Pa", "Ju", "Sha"],
            months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"],
            monthsShort: ["Yan", "Fev", "Mar", "Apr", "May", "Iyn", "Iyl", "Avg", "Sen", "Okt", "Noy", "Dek"],
            today: "Bugun",
            clear: "O'chirish",
            format: "dd.mm.yyyy",
            weekStart: 1,
            monthsTitle: 'Oylar',
            // autoSelectToday: true
        },
    });
    let datepicker = new DatePicker(datepickerEl, {
        language: datepickerEl.getAttribute('data-language'),
        autohide: true
    });
}
});