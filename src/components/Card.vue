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

function getImageUrl(name) {
    console.log(name);
    let newURL = `src/assets/${name}`;
    console.log(newURL);
    return newURL;
};

</script>

<template>
    <div class="card">
        <div class="card-header">
            <p class="header-text">{{projectName}}</p>
        </div>
        <div class="roles">
            <p class="roles-title">Role(s):</p>
            <span>{{ roleText }}</span>
        </div>
        <div class="thumb-img">
            <img :alt=imageAltText :src="getImageUrl(imageUrl)" />
        </div>
        <div class="desc-text">
            <p>{{descText}}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    border-radius: 12px;
    border: 2px solid var(--neutral-shade);
    box-shadow: 4px 4px var(--neutral-shade);
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: var(--accent-shade);
    color: var(--neutral-shade);
    cursor: pointer;
    transition: border-color 0.25s;
    width: 80vh;
    margin: 1em;

    display: flex;
    flex-direction: column;
}

.thumb-img {
    margin: 0.8em;
    display: flex;
    justify-content: center;

}

.thumb-img img {
    width: 90%;
    border-radius: 12px;
    border: 4px solid var(--primary-shade);
}
   

.thumb-img img:hover {
    box-shadow: none;
    transition: box-shadow 0.2s ease-in;
}

.desc-text {
    margin: 0 0.8em;
}

.desc-text p {
    padding: 0 0.8em;
    margin: 0.8em;
    text-shadow: var(--primary-shade-60) 1px 1px;
}

.card-header {
    margin: 0 2.4em;
    text-align: right;
}

.header-text {
    font-size: 2rem;
    margin: 0;
    text-shadow: var(--primary-shade-60) 2px 2px;
}

.roles {
    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 4px;

    padding-left: 0.2em;
    margin: 0 2.4em;
}

.roles-title {
    font-family: "Ellograph Bold";
}

.roles p,
.roles span {
    margin-top: 2px;
    margin-bottom: 0;
}
</style>