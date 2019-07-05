'use strict';

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script = {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    activeItem: {
      type: Number,
      default: -1
    },
    noResultsMessage: {
      type: String,
      required: true
    }
  },
  computed: {
    listClasses () {
      return this.isStyled
        ? {
          listClass: 'v-a11y-combobox__list--is-styled',
          itemClass: 'v-a11y-combobox__list-item--is-styled'
        }
        : ''
    }
  },
  inject: [
    'isStyled',
    'getId'
  ]
};

/* script */
            const __vue_script__ = script;
            
/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"v-a11y-combobox__list",class:_vm.listClasses.listClass,attrs:{"id":"vCbResultList","name":"list","mode":"out-in","tag":"ul","tabindex":"0"}},[(!_vm.items.length)?_c('li',{key:"vCbNoResults",staticClass:"v-a11y-combobox__list-item"},[_c('span',[_vm._v(_vm._s(_vm.noResultsMessage))])]):_vm._l((_vm.items),function(item,index){return _c('li',{key:index,staticClass:"v-a11y-combobox__list-item",class:_vm.listClasses.itemClass,attrs:{"id":_vm.getId(index),"aria-selected":(_vm.activeItem === index).toString(),"role":"option"},on:{"click":function($event){_vm.$emit('resultClick', index);}}},[_c('span',[_vm._v(_vm._s(item.title))])])})],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-0e4060ec_0", { source: "\n.list-enter-active,.list-leave-active,.list-move{transition:all .2s\n}\n.list-enter{transform:translateY(30px)\n}\n.list-enter,.list-leave-to{opacity:0\n}\n.list-leave-to{position:absolute\n}\n.v-a11y-combobox__list--is-styled{background-color:#fff;border:1px solid #cecece;border-color:var(--v-a11y-cb-clr-light);border-radius:.25rem;box-shadow:0 .1em .14em rgba(0,0,0,.12),0 .1em .18em rgba(0,0,0,.24);left:2vmin;list-style:none;margin:0;max-height:20rem;overflow:scroll;padding:.5rem;padding:var(--v-a11y-cb-space);position:absolute;right:2vmin;text-align:left;z-index:10;z-index:var(--v-a11y-cb-z-index)\n}\n.v-a11y-combobox__list-item--is-styled{border-bottom:2px solid #cecece;border-bottom-color:var(--v-a11y-cb-clr-light);padding:.25rem 0 .125rem;padding:calc(var(--v-a11y-cb-space)/ 2) 0 calc(var(--v-a11y-cb-space / 4));position:relative\n}\n.v-a11y-combobox__list-item--is-styled span{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%\n}\n.v-a11y-combobox__list-item--is-styled::after{background-color:#00008b;background-color:var(--v-a11y-cb-clr-dark);bottom:-2px;content:'';height:2px;left:0;position:absolute;transform:scaleX(0);transform-origin:center;transition:transform .2s ease-out;width:100%\n}\n.v-a11y-combobox__list-item--is-styled:hover::after,.v-a11y-combobox__list-item--is-styled[aria-selected=true]::after{transform:scaleX(1)\n}\n.v-a11y-combobox__list-item--is-styled:not(:last-child){margin-bottom:.5rem;margin-bottom:var(--v-a11y-cb-space)\n}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = "data-v-0e4060ec";
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "A11yComboboxList.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      {
        // In SSR.
        hook = function(context) {
          // 2.3 injection
          context =
            context || // cached call
            (this.$vnode && this.$vnode.ssrContext) || // stateful
            (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }
          // inject component styles
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          // register component module identifier for async chunk inference
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        component._ssrRegister = hook;
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  function __vue_create_injector_ssr__(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
      context = __VUE_SSR_CONTEXT__;
    }

    if (!context) return function () {}

    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: () => context._styles
      });
      context._renderStyles = renderStyles;
    }

    function renderStyles(styles) {
      let css = '';
      for (const {ids, media, parts} of styles) {
        css +=
          '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
          + parts.join('\n') +
          '</style>';
      }

      return css
    }

    return function addStyle(id, css) {
      const group = css.media || 'default';
      const style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

      if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.parts.push(code);
      }
    }
  }

  
  var A11yComboboxList = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    __vue_create_injector_ssr__
  );

//

var script$1 = {
  components: {
    A11yComboboxList
  },
  props: {
    items: {
      type: Array,
      default: () => []
    },
    inputLabel: {
      type: String,
      required: true
    },
    isStyled: {
      type: Boolean,
      default: false
    },
    noResultsMessage: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      inputValue: '',
      hasFocus: false,
      arrowPosition: -1
    }
  },
  computed: {
    showsList () {
      return Boolean(this.inputValue && this.hasFocus)
    },
    cbClasses () {
      return this.isStyled
        ? {
          base: 'v-a11y-combobox--is-styled',
          label: 'v-a11y-combobox__label--is-styled',
          input: 'v-a11y-combobox__input--is-styled'
        }
        : ''
    }
  },
  mounted () {
    document.addEventListener('click', this.handleClick, false);
  },
  destroyed () {
    document.removeEventListener('click', this.handleClick, false);
  },
  methods: {
    onChange () {
      this.$emit('input', this.inputValue);
      this.hasFocus = true;
      this.arrowPosition = -1;
    },
    onKeyDown () {
      if (this.showsList && (this.arrowPosition < this.items.length - 1)) {
        this.arrowPosition++;
      }
    },
    onKeyUp () {
      if (this.showsList) {
        this.arrowPosition === -1
          ? this.arrowPosition = this.items.length - 1
          : this.arrowPosition = this.arrowPosition - 1;
      }
    },
    onEnter () {
      if (this.arrowPosition > -1) {
        this.$emit('foundResult', this.items[this.arrowPosition].id);
        this.inputValue = this.items[this.arrowPosition].title;
        this.hasFocus = false;
        this.arrowPosition = -1;
      }
    },
    onEscape () {
      this.arrowPosition = -1;
      this.inputValue = '';
    },
    onResultClick (id) {
      this.$emit('foundResult', this.items[id].id);
      this.hasFocus = false;
      this.arrowPosition = -1;
    },
    handleClick (evt) {
      if (!this.$el.contains(evt.target)) {
        this.hasFocus = false;
      }
    },
    getId (id) {
      return id < 0 ? false : `vCbItem_${id}`
    }
  },
  provide () {
    return {
      isStyled: this.isStyled,
      getId: this.getId
    }
  }
};

/* script */
            const __vue_script__$1 = script$1;
            
/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-a11y-combobox",class:_vm.cbClasses.base,attrs:{"aria-expanded":_vm.showsList.toString(),"role":"combobox","aria-owns":"vCbResultList","aria-haspopup":"listbox"}},[_vm._ssrNode("<label for=\"cbInput\""+(_vm._ssrClass("v-a11y-combobox__label",_vm.cbClasses.label))+">"+_vm._ssrEscape(" "+_vm._s(_vm.inputLabel))+"</label> <input id=\"cbInput\""+(_vm._ssrAttr("aria-activedescendant",_vm.getId(_vm.arrowPosition)))+" type=\"text\" name=\"cbInput\" role=\"searchbox\" aria-autocomplete=\"list\" aria-controls=\"vCbResultList\" aria-multiline=\"false\""+(_vm._ssrAttr("value",(_vm.inputValue)))+(_vm._ssrClass("v-a11y-combobox__input",_vm.cbClasses.input))+"> "),_c('transition',{attrs:{"name":"fade-up"}},[_c('a11y-combobox-list',{directives:[{name:"show",rawName:"v-show",value:(_vm.showsList),expression:"showsList"}],attrs:{"items":_vm.items,"active-item":_vm.arrowPosition,"aria-label":_vm.inputLabel,"no-results-message":_vm.noResultsMessage,"role":"listbox"},on:{"resultClick":_vm.onResultClick}})],1)],2)};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = function (inject) {
    if (!inject) return
    inject("data-v-066e9b62_0", { source: "\n.fade-up-enter-active,.fade-up-move{transition:all .3s ease-out\n}\n.fade-up-move{transition:all .3s ease-out\n}\n.fade-up-enter{opacity:0;transform:translateY(1.5rem)\n}\n.fade-up-leave-to{opacity:0;position:absolute;transform:translateY(.5rem)\n}\n.fade-up-leave-active{transition:all .1333s ease-in\n}\n:root{--v-a11y-cb-space:0.5rem;--v-a11y-cb-clr-light:rgb(206, 206, 206);--v-a11y-cb-clr-dark:darkblue;--v-a11y-cb-z-index:10\n}\n.v-a11y-combobox--is-styled{margin:0 auto;max-width:30rem;padding:1rem;padding:calc(var(--v-a11y-cb-space) * 2);position:relative;width:100%\n}\n.v-a11y-combobox__label--is-styled{display:block;padding-bottom:.25rem;padding-bottom:calc(var(--v-a11y-cb-space)/ 2)\n}\n.v-a11y-combobox__input--is-styled{border-radius:.25rem .25rem 0 0;border:1px solid #cecece;border-bottom:2px solid #cecece;font-size:inherit;font-family:inherit;padding:.25rem .5rem;padding:calc(var(--v-a11y-cb-space)/ 2) var(--v-a11y-cb-space);width:100%\n}\n.v-a11y-combobox__input--is-styled:focus{border-bottom-color:#00008b;border-bottom-color:var(--v-a11y-cb-clr-dark);outline:0\n}", map: undefined, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = "data-v-066e9b62";
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* component normalizer */
  function __vue_normalize__$1(
    template, style, script,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    const component = (typeof script === 'function' ? script.options : script) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "A11yCombobox.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      let hook;
      {
        // In SSR.
        hook = function(context) {
          // 2.3 injection
          context =
            context || // cached call
            (this.$vnode && this.$vnode.ssrContext) || // stateful
            (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }
          // inject component styles
          if (style) {
            style.call(this, createInjectorSSR(context));
          }
          // register component module identifier for async chunk inference
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        component._ssrRegister = hook;
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          const originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  function __vue_create_injector_ssr__$1(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
      context = __VUE_SSR_CONTEXT__;
    }

    if (!context) return function () {}

    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: () => context._styles
      });
      context._renderStyles = renderStyles;
    }

    function renderStyles(styles) {
      let css = '';
      for (const {ids, media, parts} of styles) {
        css +=
          '<style data-vue-ssr-id="' + ids.join(' ') + '"' + (media ? ' media="' + media + '"' : '') + '>'
          + parts.join('\n') +
          '</style>';
      }

      return css
    }

    return function addStyle(id, css) {
      const group = css.media || 'default';
      const style = context._styles[group] || (context._styles[group] = { ids: [], parts: [] });

      if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.parts.push(code);
      }
    }
  }

  
  var A11yCombobox = __vue_normalize__$1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    __vue_create_injector_ssr__$1
  );

module.exports = A11yCombobox;
