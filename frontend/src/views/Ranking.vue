<template>
    <div class="ranking">
        <table>
            <tr>
                <th>順位</th>
                <th>内容</th>
                <th>面白い！</th>
            </tr>
            <tr v-for="(gag, i) in gags" :key="i">
                <td>{{ i + 1 }}位</td>
                <td>{{ gag.content }}</td>
                <td>{{ gag.good }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Ranking',
    data(){
        return {
            gags: null
        }
    },
    mounted(){
        this.axios.get('/api/gag/ranking').then((res) => {
            this.gags = res.data;
        });
    }
}
</script>

<style scoped>
table{
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
    border-spacing: 0;
    width: 80%;
}

table tr{
    border-bottom: solid 1px #eee;
    cursor: pointer;
}

table th,table td{
    text-align: center;
    width: 25%;
    padding: 15px 0;
}

table th {
    background-color: aqua;
}
</style>