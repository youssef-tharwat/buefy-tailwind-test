<template>
  <section>
    <b-tabs position="is-centered" class="block">
      <b-tab-item label="Buttons">
        <b-button type="is-primary" class="tw-mr-10">Primary</b-button>
        <b-button type="is-primary is-light" class="tw-mr-10">Primary Light</b-button>

        <b-button type="is-success" class="tw-mr-10">Success</b-button>
        <b-button type="is-success is-light" class="tw-mr-10">Success Light</b-button>

        <b-button type="is-danger" class="tw-mr-10">Danger</b-button>
        <b-button type="is-danger is-light" class="tw-mr-10">Danger Light</b-button>
      </b-tab-item>
      <b-tab-item label="Notifications">
        <notification></notification>
      </b-tab-item>
      <b-tab-item label="Videos"></b-tab-item>
    </b-tabs>
  </section>
</template>


<script>
import Notification from "./Notification.vue";

export default {
  name: "HelloWorld",
  components: {
    Notification,
  },
};
</script>

