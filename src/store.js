import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list: [
            {
                name: 'Update CSS',
                finished: false,
            },
            {
                name: 'Change Task randomly',
                finished: false,
            },
        ],

        currentTask: {},
        showModal: false,
    },

    getters: {
        getTodoList: state => state.list,
        getCurrentTask: state => state.currentTask,
        getShowModal: state => state.showModal,
    },

    mutations: {
        ADD_TASK: (state, task) => {
            state.list.unshift(task);
        },
        REMOVE_TASK: (state, index) => {
            state.list.splice(index, 1);
        },
        CURRENT_TASK: (state, task) => {
            state.currentTask = task;
        },
        SHOW_MODAL: (state) => {
            state.showModal = !state.showModal;
        },
        TOGGLE_STATUS: (state, index) => {
            state.list[index].finished = !state.list[index].finished;
            if (state.list[index].finished) {
                let finishedTask = state.list.splice(index, 1)[0];
                state.list.push(finishedTask);
            }
        },

    },

    actions: {
        addTask: (context, task) => {
            context.commit('ADD_TASK', task);
        },
        removeTask: (context, index) => {
            context.commit('REMOVE_TASK', index);
        },
        currentTask: (context, task) => {
            context.commit('CURRENT_TASK', task);
        },
        toggleStatus: (context, index) => {
            context.commit('TOGGLE_STATUS', index);
        },
        showOrHiddenModal: (context) => {
            context.commit('SHOW_MODAL');
        },
    },
});
