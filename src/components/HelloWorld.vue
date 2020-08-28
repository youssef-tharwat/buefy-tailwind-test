<template>
  <section>
    <b-tabs position="is-centered" class="block">
      <b-tab-item label="Buttons">
        <b-button type="is-primary">Primary</b-button>
        <b-button type="is-primary is-light">Primary Light</b-button>

        <b-button type="is-success">Success</b-button>
        <b-button type="is-success is-light">Success Light</b-button>

        <b-button type="is-danger">Danger</b-button>
        <b-button type="is-danger is-light">Danger Light</b-button>
      </b-tab-item>
      <b-tab-item label="Music"></b-tab-item>
      <b-tab-item label="Videos"></b-tab-item>
    </b-tabs>
  </section>
</template>


<script>
export default {
  name: "HelloWorld",
};
</script>

