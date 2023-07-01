<script setup>
const props = defineProps({
    imageUrl: {
        type: String,
        default: "/"
    },
    imageAltText: {
        type: String,
        default: "No image loaded, placeholder image shown"
    },
    descText: {
        type: String,
        default: ""
    },
    projectName: {
        type: String,
        default: "Project Name"
    },
    roleText: {
        type: String,
        default: ""
    }
});
</script>

<template>
    <div class="card">
        <div class="card-header">
            <p class="header-text">{{projectName}}</p>
        </div>
        <div class="roles">
            <p class="roles-title">Role(s):</p>
            <p>{{ roleText }}</p>
        </div>
        <div class="thumb-img">
            <img :alt=imageAltText :src=imageUrl />
        </div>
        <div class="desc-text">
            <p>{{descText}}</p>
        </div>
    </div>
</template>

<style scoped>

.card {
    width: 100%;

    border-radius: 12px;
    border: 2px solid var(--neutral-shade);
    box-shadow: 4px 4px var(--neutral-shade);

    background-color: var(--accent-shade);
    color: var(--neutral-shade);

    display: flex;
    flex-direction: column;
}

.thumb-img {
    margin: 1em;
    display: flex;
    justify-content: center;

}

.thumb-img img {
    width: 100%;
    border-radius: 12px;
    border: 4px solid var(--primary-shade);
}
   

.thumb-img img:hover {
    box-shadow: none;
    transition: box-shadow 0.2s ease-in;
}

.desc-text {
    margin: 0 1em 1em 1em;
    background-color: var(--accent-shade-light);
    border-radius: 12px;
    align-self: center;
    text-wrap: pretty;
}

.desc-text p {
    text-shadow: var(--primary-shade-60) 1px 1px;
    padding: 0px 8px;
}

.card-header {
    margin: 1em 2.4em 0 2.4em;
    text-align: center;
}

.header-text {
    font-size: 1.6rem;
    margin: 0;
    text-shadow: var(--primary-shade-60) 2px 2px;
}

.roles {
    display: flex;
    flex-direction: row;
    gap: 4px;
    background-color: var(--accent-shade-light);
    border-radius: 12px;
    justify-content: center;
    margin: 1em 1em 0 1em;
}

.roles-title {
    font-family: "Ellograph Bold";
}


.roles p,
.roles span {
    margin-top: 2px;
    margin-bottom: 0;
    padding-left: 8px;
}

@media (min-width: 483px) {
    .header-text {
        font-size: 1.8rem;
    }
}

@media (min-width: 850px) {
    .header-text {
        font-size: 2.4rem;
    }
}
</style>