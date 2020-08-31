import { Tabs, Button, Notification } from "buefy";

const buefy = Vue => {
  Vue.use(Tabs);
  Vue.use(Button);
  Vue.use(Notification);
};

const configure = Vue => {
  buefy(Vue);
};

export default configure;
