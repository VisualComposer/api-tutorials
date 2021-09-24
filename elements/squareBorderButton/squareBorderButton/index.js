/* eslint-disable import/no-webpack-loader-syntax */
import vcCake from 'vc-cake'
import SquareBorderButtonComponent from './component'

const vcvAddElement = vcCake.getService('cook').add

vcvAddElement(
  require('./settings.json'),
  // Component callback
  function (component) {
    component.add(SquareBorderButtonComponent)
  },
  // css settings // css for element
  {
    css: require('raw-loader!./styles.css'),
    editorCss: require('raw-loader!./editor.css'),
    mixins: {
      titleColor: {
        mixin: require('raw-loader!./cssMixins/titleColor.pcss')
      },
      backgroundColor: {
        mixin: require('raw-loader!./cssMixins/backgroundColor.pcss')
      },
      borderColor: {
        mixin: require('raw-loader!./cssMixins/borderColor.pcss')
      },
      borderWidth: {
        mixin: require('raw-loader!./cssMixins/borderWidth.pcss')
      },
    }
  },
  // javascript callback
  ''
)
