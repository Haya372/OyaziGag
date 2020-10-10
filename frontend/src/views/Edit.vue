<template>
    <div class="edit">
        <p>内容</p>
        <textarea class="content" v-model="content"></textarea><br>
        <button v-on:click="submit">投稿</button>
    </div>
</template>

<script>
export default {
    name: "Edit",
    data(){
        return {
            content: ""
        }
    },
    methods: {
        submit(){
            this.axios.post('/api/gag', {
                content: this.content
            }).then((res) => {
                if(res.status === 200){
                    this.content = "";
                }
            }).catch((err) => {
                alert(err);
            })
        }
    }
}
</script>

<style scoped>
.edit {
    font-size: 30px;
}
textarea {
    font-size: 24px;
    width: 60%;
    height: 3em;
}
button {
    padding: 0.25em 0.5em;
    margin: 1em;
    text-decoration: none;
    color: #FFF;
    background: #01a2ff;/*背景色*/
    border-radius: 4px;/*角の丸み*/
    box-shadow: inset 0 2px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0, 0, 0, 0.19);
    font-weight: bold;
}
button:active {
    background: 2px #0c37fa;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.30);
}
</style>