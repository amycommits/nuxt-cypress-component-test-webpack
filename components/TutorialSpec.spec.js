import { mount } from '@cypress/vue'
import Tutorial from './Tutorial.vue'

it('playground', () => {
  mount(Tutorial)
  cy.contains('HOWDY').should('exist')
})