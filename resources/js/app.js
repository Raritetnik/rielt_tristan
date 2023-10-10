/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import { createApp } from 'vue';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({});

import SectionBlock from './components/sections/SectionBlock.vue';
import Banner from './components/sections/Banner.vue';
import BioSection from './components/sections/BioSection.vue';
import BarSection from './components/sections/BarSection.vue';
import Contact from './components/sections/Contact.vue';
import Title from './components/elements/Title.vue';
import Checkbox from './components/elements/Checkbox.vue';
import Navigation from './components/elements/Navigation.vue';


app.component('section-block', SectionBlock);
app.component('banner-block', Banner);
app.component('bar-block', BarSection);
app.component('contact-form', Contact);
app.component('title-section', Title);
app.component('checkbox', Checkbox);
app.component('biographie', BioSection);
app.component('navigation', Navigation);



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
