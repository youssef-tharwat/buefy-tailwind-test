import { Tabs, Button } from "buefy";

const buefy = Vue => {
  Vue.use(Tabs);
  Vue.use(Button);
};

const configure = Vue => {
  buefy(Vue);
};

export default configure;
