<template>
    <div class="home">
        <div class="content">{{ this.gag.content }}</div>
        <div class="good">
            <button v-on:click="good">面白い！</button>
            {{ this.gag.good }}
        </div>
        <div class="warning">
            <button v-on:click="warning">ギャグになっていない</button>
        </div>
        <div class="next">
            <button v-on:click="next">おかわり</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data: function(){
        return {
            gag: null,
            reviewed: false
        }
    },
    mounted(){
        this.axios.get('/api/gag/').then((res) => {
            this.gag = res.data;
        });
    },
    methods: {
        good: function(){
            if(!this.reviewed){
                this.axios.put('/api/gag/good/' + this.gag.id).then((res) => {
                    if(res.status === 200){
                        this.gag.good++;
                    }
                }).catch((err) => {
                    alert(err);
                });
                this.reviewed = true;
            }else{
                alert('レビューは１回までです');
            }
        },
        warning: function(){
            if(!this.reviewed){
                this.axios.put('/api/gag/warning/' + this.gag.id);
                this.reviewed = true;
            }else{
                alert('レビューは１回までです');
            }
        },
        next: function(){
            this.axios.get('/api/gag/').then((res) => {
                this.gag = res.data;
            });
            this.reviewed = false;
        }
    }
}
</script>

<style scoped>
.home {
    font-size: 24px;
}

.content {
    font-size: 40px;
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