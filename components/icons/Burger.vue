<template>
  <div class="grid justify-items-center gap-1.5">
    <span class="h-1 w-8 rounded-full bg-brick transition" :class="{'rotate-45 translate-y-2.5': showMenu }"></span>
    <span class="h-1 w-8 rounded-full bg-brick transition" :class="{'scale-x-0': showMenu }"></span>
    <span class="h-1 w-8 rounded-full bg-brick transition" :class="{'-rotate-45 -translate-y-2.5': showMenu }"></span>
  </div>
</template>

<script>
export default {
  name: 'burgerShape',
  props: {
    showMenu: {
      type: Boolean,
      default: false
    }
  }
}
</script>
