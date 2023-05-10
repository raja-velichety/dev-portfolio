<template>
    <div class="container-fluid">
        <div class="contact-information text-center">
            <h1 class="heading">{{ contact.heading }}</h1>
            <p class="description">{{ contact.description }}</p>
            <button class="btn btn-primary btn-lg">{{ contact.cta }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactView',
    data() {
        return {
            contact : {
                heading: "4. What's Next?",
                description: "Although I am not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
                cta: "Say Hello"
            }
        }
    },
}
</script>

<style scoped>
.contact-information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>