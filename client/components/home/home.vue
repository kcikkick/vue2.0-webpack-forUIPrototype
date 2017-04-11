<template>
    <p class="p-blue">{{title}}</p>
</template>



<script>

export default{
    name:'home',
    data(){
        return {
            title:'Home PAGE'
        }
    },
    methods: {
        clickButton:function(){
            this.title='change home page';
        }
    }
}


</script>

<style scoped>
    .p-blue{
        color:blue;
    }
</style>