<template>
    <div class="terminal space shadow">
    <div class="top">
        <div class="btns">
            <span class="circle red"></span>
            <span class="circle yellow"></span>
            <span class="circle green"></span>
        </div>
    </div>
    <div class="body">
        <slot></slot>
   </div>
</div>
</template>

<script>
export default {
    name: 'TerminalCard',
    components: {
    },
    data() {
        return {
        }
    },
}
</script>

<style scoped>
* { margin: 0; padding: 0; }
.terminal {
    border-radius: 10px;
    position: relative;
}
.terminal .top {
    background: #E8E6E8;
    color: black;
    padding: 1rem;
    border-radius: 5px 5px 0 0;
}
.terminal .btns {
    position: absolute;
    top: 7px;
    left: 5px;
}
.terminal .circle {
    width: 12px;
    height: 12px;
    display: inline-block;
    border-radius: 15px;
    margin-left: 2px;
    border-width: 1px;
    border-style: solid;
}
.title{
    text-align: center;
}
.red { background: #EC6A5F; border-color: #D04E42; }
.green { background: #64CC57; border-color: #4EA73B; }
.yellow{ background: #F5C04F; border-color: #D6A13D; }
.clear{clear: both;}
.terminal .body {
    background: black;
    color: #7AFB4C;
    padding: 8px;
    overflow: auto;
}
/* .space {
    margin: 25px;
} */
.shadow { box-shadow: 0px 0px 10px rgba(0,0,0,.4)}
</style>