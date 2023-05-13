<template>
    <div class="container-fluid text-center">
        <div class="contact-information col-md-8 col-xs-12">
            <h1 class="heading">{{ contact.heading }}</h1>
            <p class="description col-md-8 col-xs-12" v-for="item in contact.description" :key="item">{{ item }}</p>
            <a :href="contact.email" class="btn btn-primary btn-lg"><span>{{ contact.cta }}</span></a>
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
              description: [
                "I am currently looking for any new opportunities, got any work opportunity or any suggestion or just want to say hi, my inbox is always open. I'll try my best to get back to you!.",
                "If you found value in something I have created, please feel free to give me a shout out. I would love to hear from you!"],
              cta: "Say Hello",
              email: "mailto:rajaravichandravelichety@gmail.com"
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