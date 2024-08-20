export const getDateAndTime = () => {
    const dateOptions = {
        hour: "numeric",
        minute: "numeric",
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
      };
    const locale = navigator.language;
    const now = new Date();
    const curDate = new Intl.DateTimeFormat(locale, dateOptions).format(now);
    return curDate;
};