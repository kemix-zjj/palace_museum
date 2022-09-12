<template>
  <div>
    <History></History>
    <ItemBlock></ItemBlock>
    <Shangy></Shangy>
  </div>
</template>

<script>
import History from "./History";
import ItemBlock from "./ItemBlock";
import Shangy from "./Shangy";
export default {
  name: "Detail",
  components: {
    History,
    ItemBlock,
    Shangy,
  },
};
</script>

<style>
</style>