<template>
    <div class="container-fluid text-center">
        <div class="col-md-2"></div>
        <div class="contact-information col-md-8 col-xs-12">
            <h1 class="heading">{{ contact.heading }}</h1>
            <p class="description">{{ contact.description }}</p>
            <button class="btn btn-primary btn-lg"><span>{{ contact.cta }}</span></button>
        </div>
        <div class="col-md-2"></div>
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

.btn {
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.btn span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.btn span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.btn:hover span {
  padding-right: 25px;
}

.btn:hover span:after {
  opacity: 1;
  right: 0;
}
</style>