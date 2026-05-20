<script setup lang="ts"></script>

<template>
  <div class="footer-container shadow-box sb">
    <slot></slot>
  </div>
</template>

<style scoped>
.footer-container {
  padding: 0.6em 1.2em;
  background-color: var(--caution-shade);
  color: var(--neutral-shade);
  position: relative;
  margin: 50px auto;
  min-height: 80px;
  min-width: 100px;
  font-family: var(--font-light);
  font-size: 1.2rem;
}

.footer-container a {
  color: var(--primary-shade);
  font-family: var(--font-demi-bold);
}

.sb:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 50px solid var(--neutral-shade);
  border-right: 30px solid transparent;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  bottom: 30%;
  right: -80px;
}

.sb:after {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 50px solid var(--caution-shade);
  border-right: 30px solid transparent;
  border-top: 30px solid transparent;
  border-bottom: 30px solid transparent;
  bottom: 32%;
  right: -72px;
}

:slotted(p) {
  width: 100%;
}
</style>
