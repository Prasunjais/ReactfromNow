import "./styles.css";
import { getDate } from "./getDateFormat";
import { fromNow } from "./inspired";
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
${fromNow(new Date("03-22-2020 17:00:47"))}
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
