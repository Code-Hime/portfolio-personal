<script setup>
</script>

<template>
    <div class="design-work work-container">
        <div class="design-item">
            <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F1PKTNtvVZ7BgIBSSqB74II%2FOverlayPrototyping%3Ftype%3Ddesign%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A32%26node-id%3D2-32%26mode%3Ddesign" allowfullscreen></iframe>
        </div>
        <div class="design-item">
            <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fvg9C4VDXa1wcaV7cxWeAM8%2FAtoZGeriCare%3Fnode-id%3D1-2%26starting-point-node-id%3D1%253A2%26mode%3Ddesign" allowfullscreen></iframe>
        </div>
        <div class="design-item">
            <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2LJ08mcJOdrUsmxx0t7LE9%2FThemeSwitching%3Ftype%3Ddesign%26node-id%3D2-25%26scaling%3Dcontain%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A25%26mode%3Ddesign" allowfullscreen></iframe>
        </div>
        <div class="design-item">
            <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FQVyY2eTlVpQKcG5GYgw4RN%2FProgressive-Design%3Ftype%3Ddesign%26node-id%3D5-2177%26scaling%3Dmin-zoom%26page-id%3D3%253A364%26starting-point-node-id%3D5%253A2177%26mode%3Ddesign" allowfullscreen></iframe>
        </div>
        <div class="design-item">
            <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FJ3wSo6cWxY7odwkjQMb7hY%2FDesign-System%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DAvyM7HDKXiPNqHaV-1" allowfullscreen></iframe>
        </div>
    </div>
</template>

<style scoped>
.design-work {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
    flex-basis: 80%;

    justify-content: center;
    align-items: center;

    margin-top: 2rem;
}

.design-item {
    justify-self: center;
    align-self: center;
    flex-grow: 1;
    aspect-ratio: 16 / 9;
    width: 100%;
    height: 100%;
}

iframe {
    border: 2px solid var(--primary-shade-dark);
    border-radius: 8px;
    width: 100%;
    height: 100%;
}
</style>