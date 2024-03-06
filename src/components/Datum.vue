<template>
    <div class="ListDatum">
        <p class="ListDatumText">{{ Datum }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            Datum: {
                type: Date,
                required: true
            }
        }
    }
</script>