<template>
    <div>
        <button class="btn-circle"
                :class="{ completed: allComplete }"
                @click.prevent="toggleAll">Toggle All</button>

        <button @click="reset">Delete All</button>
        <Todo></Todo>

    </div>
</template>

<script>
    /* eslint-disable */
    import { mapActions, mapGetters } from 'vuex';
    import Todo from './Todo';
    export default {
        components: {
            Todo,
        },
        name: "Handlers",
        computed: {
            ...mapGetters(['getTodoList']),
            allComplete() {
                if (this.getTodoList.length === 0)
                    return false;
                let status = this.getTodoList[0].finished;

                for (let i = 1; i < this.getTodoList.length; i++) {
                    status = status && this.getTodoList[i].finished;
                }

                return status;
            },
        },
        methods: {
            ...mapActions(['removeTask', 'toggleStatus']),
            reset() {
                while (this.getTodoList.length > 0) {
                    this.removeTask(0);
                }
            },
            toggleAll() {
                if (this.getTodoList.length === 0) {
                    return;
                }

                let status = !this.allComplete;
                let i = 0;

                while(i < this.getTodoList.length) {
                    if (this.getTodoList[i].finished !== status) {
                        this.toggleStatus(i);
                    } else {
                        i++;
                    }
                }

            },
            mouseLeave: function() {
                alert('Mouse Leave')
            },
        },
    };
</script>

<style scoped>
    .btn {
        background: #f7f7f7;
        line-height:2em;
        border-radius:10px;
        font-size:1.2rem;
        color: #2c3e50;
        cursor:pointer;
        -webkit-transition:all .2s ease;
        transition:all .2s ease;
        position: relative;
        text-align: left;
        text-indent: 3rem;
        padding: 0.5rem 1.5rem;
        margin: 10px 10px;
    }
    .btn:hover {
        background: #2c3e50;
        color:#eee;
        -webkit-transition:all .2s ease;
        transition:all .2s ease;
    }

    .btn-circle {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        position: absolute;
        margin: 5px 5px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .completed {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        position: absolute;
        margin: 5px 5px;
        background-color: #2c3e50;
        display: flex;
        align-items: center;
        justify-content: center;
    }


</style>
