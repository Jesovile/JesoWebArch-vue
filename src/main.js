import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

// catalog items
function stubItems(count) {
    const result = [];
    for (let i = 0; i < count; i++) {
        result[i] = {
            id: `IT${i}`,
            name: `Item ${i}`,
            description: `It's description for Item ${i}`,
        };
    }
    return result;
}

// viewed items
function viewed(items) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
        if (i % 4 === 0) {
            result.push(items[i].id);
        }
    }
    return result;
}

// favorite items
function favorite(items) {
    let result = [];
    for (let i = 1; i < items.length; i++) {
        if (i % 4 === 0) {
            result.push(items[i].id);
        }
    }
    return result;
}

// full descriptions
function fullDescriptions(items) {
    return items.map((item) => ({
        id: item.id,
        fullDescription: item.id + " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu ullamcorper nisl. Aenean et odio ante. Etiam\n" +
            "eget urna tristique nulla aliquet interdum. Aliquam ornare magna quis ante dapibus maximus. In ligula enim,\n" +
            "sodales a est eu, ullamcorper lobortis nibh. Vestibulum in quam eget purus lacinia imperdiet id id enim. Donec\n" +
            "maximus, ipsum eget dictum ultricies, diam lorem commodo lacus, sit amet blandit magna orci et eros. Donec\n" +
            "gravida tortor at nibh consectetur hendrerit. Integer pretium magna tempor enim suscipit finibus. Vivamus\n" +
            "imperdiet vitae velit dignissim rutrum. Nulla gravida sem in ullamcorper ullamcorper.\n" +
            "Nulla ultrices neque in nisi mollis, porttitor tristique arcu congue. Integer dapibus, massa nec sagittis\n" +
            "auctor, risus quam convallis mauris, sed dignissim nunc erat eu est. Morbi lacinia tellus eu mi ullamcorper\n" +
            "ultrices. Proin dignissim imperdiet diam, ut facilisis nisi suscipit a. Maecenas non quam quis tortor\n" +
            "tristique sollicitudin commodo ac libero. Etiam dignissim mattis metus, in pharetra ipsum aliquet quis.\n" +
            "Pellentesque et nisl vitae magna egestas fermentum. Ut ullamcorper ante in mauris rhoncus maximus. Maecenas\n" +
            "commodo blandit risus, in tristique lectus. Maecenas varius nibh ac leo consequat, eu ultricies ex ornare.\n" +
            "Praesent luctus odio nisl, ut pellentesque nibh venenatis a. Duis ornare rhoncus arcu ac ornare.\n" +
            "Donec pretium semper ultrices. Cras nec neque at ex aliquet bibendum. Maecenas consectetur consequat tellus\n" +
            "mollis vulputate. Fusce malesuada scelerisque semper. Sed posuere interdum tortor, tincidunt scelerisque nisl\n" +
            "congue eget. Nullam eleifend, dolor in auctor convallis, leo tortor rutrum mauris, et feugiat enim nibh eu\n" +
            "ligula. In in metus leo. Quisque orci dui, dapibus tincidunt leo eu, consectetur fringilla massa."
    }));
}

// not-available items
function notAvailable(items) {
    let result = [];
    for (let i = 3; i < items.length; i++) {
        if (i % 4 === 0) {
            result.push(items[i].id);
        }
    }
    return result;
}

const stubStore = stubItems(9);

// application state
const store = new Vuex.Store({
    state: {
        catalogItems: stubStore,
        viewed: viewed(stubStore),
        notAvailable: notAvailable(stubStore),
        itemDescriptions: fullDescriptions(stubStore),
        favorite: favorite(stubStore),
    },
})

// router
const routes = [];

const router = new VueRouter({routes});

// root Vue
new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
