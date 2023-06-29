<script setup></script>

<template>
    <div class="header-container">
        <slot></slot>
    </div>
</template>

<style scoped>
.header-container {
    width: 100%;
    border-radius: 12px;
    background-color: var(--success-shade);
    border: 2px solid var(--neutral-shade);
    box-shadow: 4px 4px var(--neutral-shade);

    text-align: center;

    margin-bottom: 1rem;
}

:deep(div) {
    color: var(--neutral-shade);
    font-size: 2rem;
}
</style>