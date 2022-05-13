import { createApp } from "vue";

let app = createApp({
  data() {
    return {
      showRörelse: false,
      showEnergi: false,
      showNewton: false,
      T: 0,
      V: 0,
      S: 0,
    };
  },
}).mount("#app");
