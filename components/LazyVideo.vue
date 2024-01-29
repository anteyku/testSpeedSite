<template>
    
    <div @click="bam" v-if="!click" class="img">
        <img id="img__pos" src="/images/youtube.png" alt="yotube">
        <img :src="urlImg" alt="картинка">
    </div>
    <div v-if="click" class="video">
        <iframe :id="id" :src="urlVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
         gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
</template>

<script>
    export default {
        props: ['message'],
        data(){
            return {
                urlImg: ``,
                urlVideo: ``,
                click: false,
                id: ``
            }
        },
        methods: {
            bam(){
                this.click = true;
                
                
            }
           
        },
        mounted() {
            const url = this.message;
            const regex = /=(.*)/;
            const id = regex.exec(url);
            this.urlImg = `https://img.youtube.com/vi/${id[1]}/0.jpg`;
            this.urlVideo = `https://www.youtube.com/embed/${id[1]}?autoplay=1`
            this.id = id;
          
           
            

        }        
    }
</script>

<style lang="less">

    .video{
        width: 100%;
        height: 100%;

        iframe{
            height: 100%;
        }
    }
    .img{
        height: 100%;
        position: relative;
        cursor: pointer;
        #img__pos{
            position: absolute;
            width: 60px;
            height: 60px;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
        }
        img{
            width: 100%;
        }
    }
</style>