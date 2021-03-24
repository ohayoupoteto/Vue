
Vue.component('accordion', {
    template: `
      <div class="accordion" @click="toggle()">
        <slot name="title"></slot>
        <transition name="rotate">
           <i class="fas fa-chevron-down"  v-if="!isOpen"></i>
        </transition>
        <transition name="rotate">
          <i class="fas fa-chevron-up" v-if="isOpen"></i>
        </transition>
        <transition name="open">
          <div class="accordion-content" v-if="isOpen">
            <slot name="content"></slot>
          </div>
        </transition>
      </div>`,
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
new Vue({
    el: "#app"
});
