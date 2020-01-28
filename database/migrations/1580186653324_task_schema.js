'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up() {
    this.create('tasks', (table) => {
      table.increments()
      table.timestamps()
      table.string('name')
      table.text('desc')
      table.integer('project_id').unsigned()
      table.foreign('project_id').references('projects.id').onDelete('CASCADE')
    })
  }

  down() {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
