/* global Vue, VueMdl, WebGLRenderingContext */

import { ResNet50 } from './resnet50'

Vue.component('resnet50', ResNet50)
Vue.use(VueMdl.default)

const app = new Vue({
  el: '#app',

  data: function () {
    return {
      currentView: 'resnet50',
      hasWebgl: true
    }
  },

  created: function () {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    // Report the result.
    if (gl && gl instanceof WebGLRenderingContext) {
      this.hasWebgl = true
    } else {
      this.hasWebgl = false
    }
  }
})