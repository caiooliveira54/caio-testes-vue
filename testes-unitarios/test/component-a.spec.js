// test/component-a.spec.js
var Vue = require('vue')
var ComponentA = require('../../src/components/a.vue')

describe('a.vue', function () {

  // Opções JavaScript de afirmação (asserting)
  it('should have correct message', function () {
    expect(ComponentA.data().msg).toBe('Olá do componente A!')
  })

  // Afirmando o resultado renderizado fornecido pelo componente
  it('should render correct message', function () {
    var vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': ComponentA
      }
    }).$mount()
    expect(vm.$el.querySelector('h2.red').textContent).toBe('Olá do componente A!')
  })
})