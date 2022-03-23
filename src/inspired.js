const rtf = new Intl.RelativeTimeFormat("zh-TW", {
  localeMatcher: "best fit", // other values: "lookup"
  numeric: "always", // other values: "auto"
  style: "long" // other values: "short" or "narrow"
});

var MS_SECOND = 1000;
var MS_MINUTE = MS_SECOND * 60;
var MS_HOUR = MS_MINUTE * 60;
var MS_DAY = MS_HOUR * 24;
var MS_MONTH = MS_DAY * 30;
var MS_YEAR = MS_DAY * 365;
var FROM_NOW_JUST_NOW = MS_SECOND * 44;
var FROM_NOW_MINUTE = MS_SECOND * 89;
var FROM_NOW_MINUTES = MS_MINUTE * 44;
var FROM_NOW_HOUR = MS_MINUTE * 89;
var FROM_NOW_HOURS = MS_HOUR * 21;
var FROM_NOW_DAY = MS_HOUR * 35;
var FROM_NOW_DAYS = MS_DAY * 25;
var FROM_NOW_MONTH = MS_DAY * 45;
var FROM_NOW_MONTHS = MS_DAY * 319;
var FROM_NOW_YEAR = MS_DAY * 547;

const getTickCount = (value = Date.now()) => {
  if (typeof value === "number") {
    return value;
  }
  return new Date(value).getTime();
};

export const fromNow = (value) => {
  var nowTick = getTickCount();
  var valueTick = getTickCount(value);
  var delta = nowTick - valueTick;

  if (delta <= FROM_NOW_JUST_NOW) {
    return "a few seconds ago";
  } else if (delta <= FROM_NOW_MINUTE) {
    return "a minute ago";
  } else if (delta <= FROM_NOW_MINUTES) {
    // return Math.ceil(delta / MS_MINUTE) + " minutes ago";
    return rtf.format(-Math.ceil(delta / MS_MINUTE), "minute");
  } else if (delta <= FROM_NOW_HOUR) {
    return "an hour ago";
  } else if (delta <= FROM_NOW_HOURS) {
    return rtf.format(-Math.ceil(delta / MS_HOUR), "hour");
    // return Math.ceil(delta / MS_HOUR) + " hours ago";
  } else if (delta <= FROM_NOW_DAY) {
    return "a day ago";
  } else if (delta <= FROM_NOW_DAYS) {
    return rtf.format(-Math.ceil(delta / MS_DAY), "day");
    // return Math.ceil(delta / MS_DAY) + " days ago";
  } else if (delta <= FROM_NOW_MONTH) {
    return "a month ago";
  } else if (delta <= FROM_NOW_MONTHS) {
    // return Math.ceil(delta / MS_MONTH) + " months ago";
    return rtf.format(-Math.ceil(delta / MS_MONTH), "month");
  } else if (delta <= FROM_NOW_YEAR) {
    return "a year ago";
  } else {
    return rtf.format(-Math.ceil(delta / MS_YEAR), "year");
    // return Math.ceil(delta / MS_YEAR) + " years ago";
  }
};
