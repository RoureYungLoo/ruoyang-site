import DefaultTheme from 'vitepress/theme'
import Foo from './Foo.vue'
import HomePage from './HomePage.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('foo', Foo)
        app.component('HomePage', HomePage)
    }
}
