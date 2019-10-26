'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventarioSchema extends Schema {
  up () {
    this.create('inventarios', (table) => {
      table.increments()
      table.integer('idProducto').notNullable();
      table.string('proveedor').notNullable();
      table.integer('stock').notNullable();
      table.date('fecha').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('inventarios')
  }
}

module.exports = InventarioSchema
