<script setup></script>

<template>
    <div class="footer-container sb">
        <slot></slot>
    </div>
</template>

<style>
.footer-container {
    border-radius: 12px;
    border: 2px solid var(--neutral-shade);
    box-shadow: 4px 4px var(--neutral-shade);
    padding: 0.6em 1.2em;
    background-color: var(--caution-shade);
    color: var(--neutral-shade);
    position: relative;
    margin: 50px auto;
    min-height: 80px;
    min-width: 100px;

    font-family: 'Ellograph Light';
    font-size: 1.2rem;
}

.footer-container a {
    color: var(--primary-shade);
    font-family: 'Ellograph Demi Bold';
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
</style>