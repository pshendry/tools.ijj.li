import Vue from 'vue'
import Vuetify from 'vuetify'

import en from '../locale/en'

const locales = { en };

function getBrowserLocaleOrDefault() {
    var preferredLocales = (navigator.languages || [navigator.language]).map(l => l.split('-')[0]);
    return preferredLocales.find(l => Object.keys(locales).includes(l)) || 'en';
}

Vue.use(Vuetify, {
  lang: {
    locales,
    current: getBrowserLocaleOrDefault()
  },
  theme: {
    primary: '#dd2c00',
    accent: '#dd2c00',
    secondary: '#455a64',
    info: '#ab47bc',
    warning: '#ff9800',
    error: '#f44336',
    success: '#4caf50',
  }
})

// Leverage Vuetify's internationalization but work around its lousy syntax
Vue.prototype.$t = key => Vue.prototype.$vuetify.t("$vuetify." + key);
