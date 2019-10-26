'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

//Productos
Route.get('productos','ProductoController.index')
Route.get('productos/ver/:id','ProductoController.show')
Route.post('productos/crear', 'ProductoController.create')
Route.post('productos/editar/:id','ProductoController.edit')
Route.post('productos/eliminar/:id','ProductoController.destroy')

//Inventarios
Route.get('inventarios','InventarioController.index')
Route.get('inventarios/ver/:id','InventarioController.show')
Route.post('inventarios/crear', 'InventarioController.create')
Route.post('inventarios/editar/:id','InventarioController.edit')
Route.post('inventarios/eliminar/:id','InventarioController.destroy')