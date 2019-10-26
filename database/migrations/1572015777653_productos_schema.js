'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.string('codigo',15).notNullable().unique();
      table.string('nombre',35).notNullable();
      table.string('marca',25).notNullable();
      table.float('precio').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
