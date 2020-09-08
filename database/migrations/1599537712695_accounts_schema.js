'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AccountsSchema extends Schema {
  up () {
    this.create('accounts', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('accounts')
  }
}

module.exports = AccountsSchema
