<template>
    <div>
        <ul style="list-style: none; padding: 0 40px;" >
            <li>
                <input class="input-field" v-model="name" @keyup.enter.prevent="addNewTask"
                       placeholder="Enter to add new task">
            </li>
            <li class="btn" v-for="(task, index) in getTodoList" :key="index">

                <button class="btn-circle"
                        :class="{ completed: task.finished }"
                        @click.prevent="toggleTaskStatus(index)"
                ></button>

                {{task.name}}

                <button class="button" @click="remove(index)">X</button>
            </li>
        </ul>

    </div>
</template>

<script>
    /* eslint-disable */
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "Todo",
        data() {
            return {
                name: '',
            };
        },
        computed: {
            ...mapGetters(['getTodoList']),
            length: function() {
                return this.getTodoList().length;
            },
        },
        methods: {
            ...mapActions(['addTask', 'removeTask', 'toggleStatus']),
            addNewTask() {
                if (this.name.length === 0)
                    return;
                this.addTask({
                    name: this.name,
                    finished: false,
                });
                this.name = '';
            },
            toggleTaskStatus(index) {
                this.toggleStatus(index);

            },
            remove(index) {
                this.removeTask(index);
            },
            changeCurrentTask(index) {
                this.changeTask[index] = true;
                console.log(this.changeTask);
                console.log(this.changeTask[index]);
            }
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

    .input-field {
        background:rgba(255,255,255,0.1);
        line-height:1.5em;
        font-size:1.1rem;
        border-width: thin;
        border-radius: 5px;
        border-color: #f7f7f7;
        color:#2c3e50;
        box-sizing:border-box;
        padding: 0.5rem 1.5rem;
        margin: 10px 10px;
        width: 98%;
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
        cursor: pointer;
    }
    .completed {
        cursor: pointer;
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

    .button {
        border: none;
        display: none;
        background: #2c3e50;
        color:#eee;
        right: -5px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        position: absolute;
        align-items: center;
        justify-content: center;

    }

    .btn:hover .button {
        display: block;
        right: 1rem;
        top: 0.8rem;
        cursor: pointer;
        text-align: center;
    }

</style>
