<template>
  <Transition name="fadeslide" appear>
    <slot></slot>
  </Transition>

</template>

<script>
  // to use transition on list items (with v-for) --> use TransitionGroup
  // and we can add a tag on it ex:
  // <TransitionGroup name="fadeslide" tag="ul">
  //   <li v-for="item in items" :key="item.id">
  //     {{ item.name }}
  //   </li>
  // </TransitionGroup>
</script>

<style>
  .fadeslide-enter-active, .fadeslide-leave-active {
    transition: all 0.5s ease;
  }

  .fadeslide-enter-from {
    opacity: 0;
    transform: translateX(10px);
  }

  .fadeslide-leave-to {
    opacity: 0;
    transform: translateX(-10px);
  }
</style>
