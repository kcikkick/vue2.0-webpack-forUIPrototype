<template>
    <p class="p-red">{{title}}</p>
</template>



<script>

export default{
    name:'app',
    data(){
        return {
            title:'APP PAGE'
        }
    },methods: {
        clickButton:function(){
            this.title='change app page';
        }
    }
}


</script>

<style scoped>
    .p-red{
        color:red;
    }
</style>