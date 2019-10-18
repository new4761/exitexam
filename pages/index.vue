<template>
  <div>
    <div>{{doneCount}}</div>
       <!-- <div>{{getSrmColor}}</div> -->
    <div>
      <b-button @click="add()" block variant="primary">Block Level Button</b-button>
    </div>
  </div>
</template>

<script>
import myFunction3 from '~/controller/product';
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  middleware: "product",
  // created() {
  //   this.$store.dispatch("product/setDatafromAPi");
  // },
  mounted() {
    this.$store.dispatch("product/setDatafromAPi");
  },
  computed: mapGetters({
    doneCount: "product/getproData"
  }),
  methods: {
    add() {
      this.$store.dispatch("product/testpush");
    },
  //  getSrmColor: myFunction3.myFunction3,
  }
};

// computed: mapState({
//   doneCount: state => state.product.proData
// }),
</script>
