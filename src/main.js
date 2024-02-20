import { createApp } from "vue";
import App from "./App.vue";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faInstagram,
  faFacebookF,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faAngleRight,
  faAngleLeft,
  faDollarSign,
  faCar,
  faGasPump,
  faArrowRight,
  faQuoteRight,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faInstagram,
  faFacebookF,
  faTwitter,
  faBars,
  faAngleRight,
  faAngleLeft,
  faDollarSign,
  faCar,
  faGasPump,
  faArrowRight,
  faQuoteRight,
  faCheck,
  faXmark
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
