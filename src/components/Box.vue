<template>
    <div class="boxStyle">
        <p>{{ boxTitle }}</p>
    </div>
</template>

<script>
export default {
    props: {
        boxTitle: {
            type: String,
            required: true
        }
    }
}
</script>