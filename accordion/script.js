
Vue.component('accordion', {
    template: '<div class="accordion" @click="toggle()"><slot name="title"></slot><div class="accordion-content" v-if="isOpen"><slot name="content"></slot></div></div>',
    data: function () {
        return {
            isOpen: false
        }
    },
    methods: {
        toggle: function () {
            this.isOpen = !this.isOpen;
        }
    }
});
let vm = new Vue({
    el: "#app"
});
