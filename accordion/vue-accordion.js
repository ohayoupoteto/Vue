Vue.component("accordion", {
    template: `
      <div class="accordion">
        <div class="title"  @click="open()">
          <slot name="title"></slot>
          <transition name="rotate" mode="out-in">
            <i class="fas fa-chevron-up" v-if="isOpen" key="rotate1"></i>
            <i class="fas fa-chevron-down" v-else key="rotate2"></i>
          </transition>
        </div>
        <transition name="open" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @after-leave="afterLeave">
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
        open: function () {
            this.isOpen = !this.isOpen;
        },
        beforeEnter: function (el) {
            el.style.height = "100px";
        },
        enter: function (el) {
            el.style.height = el.scrollHeight + "px"
        },
        beforeLeave: function (el) {
            el.style.height = el.scrollHeight + "px"
        },
        afterLeave: function (el) {
            el.style.height = "0";
        }
    }
});
new Vue({
    el: "#app"
});
