/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome':            { action: 'dashboard/view-welcome' },

  'GET /faq':                { view:   'pages/faq' },
  'GET /legal/terms':        { view:   'pages/legal/terms' },
  'GET /legal/privacy':      { view:   'pages/legal/privacy' },
  'GET /contact':            { view:   'pages/contact' },
  'GET /acerca':             { view:   'pages/acerca'},

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { view:   'pages/entrance/confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },

  'GET /inventario':         { action: 'view-inventario' },
  'GET /usuarios':           { action: 'view-usuarios' },
  'GET /ventas':             { action: 'ventas/view-ventas' },
  'GET /cotizaciones':       { action: 'ventas/view-cotizaciones' },
  'GET /clientes':           { action: 'clientes/view-clientes' },
  'GET /actualizarCotizacion': { action: 'ventas/view-actualizar-cotizacion' },


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the CloudSDK library.
  '/api/v1/account/logout':                               { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':                { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':                 { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':            { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                         { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                        { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email':  { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':     { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':           { action: 'deliver-contact-form-message' },

  'GET /api/v1/inventario/extraer-inventario':            { action: 'inventario/extraer-inventario'},
  'POST /api/v1/inventario/insertar-un-articulo':         { action: 'inventario/insertar-un-articulo' },
  'POST /api/v1/inventario/actualizar-un-articulo':       { action: 'inventario/actualizar-un-articulo'},
  'DELETE /api/v1/inventario/eliminar-un-articulo':       { action: 'inventario/eliminar-un-articulo'},

  'GET /api/v1/clientes/extraer-cliente':                 { action: 'clientes/extraer-cliente' },
  'GET /api/v1/clientes/extraer-clientes':                { action: 'clientes/extraer-clientes' },
  'POST /api/v1/clientes/insertar-cliente':               { action: 'clientes/insertar-cliente' },
  'POST /api/v1/clientes/actualizar-cliente':             { action: 'clientes/actualizar-cliente' },
  'POST /api/v1/clientes/eliminar-cliente':               { action: 'clientes/eliminar-cliente' },

  'GET /api/v1/contactos/extraer-contactos':              { action: 'contactos/extraer-contactos' },
  'POST /api/v1/contactos/insertar-contacto':             { action: 'contactos/insertar-contacto' },
  'POST /api/v1/contactos/actualizar-contacto':           { action: 'contactos/actualizar-contacto' },
  'POST /api/v1/contactos/eliminar-contacto':             { action: 'contactos/eliminar-contacto' },

  'GET /api/v1/ventas/extraer-cotizacion':                { action: 'ventas/extraer-cotizacion' },
  'GET /api/v1/ventas/extraer-cotizaciones':              { action: 'ventas/extraer-cotizaciones' },
  'GET /api/v1/ventas/copiar-cotizacion':                 { action: 'ventas/copiar-cotizacion' },
  'POST /api/v1/ventas/insertar-cotizacion':              { action: 'ventas/insertar-cotizacion' },
  'POST /api/v1/ventas/actualizar-cotizacion':            { action: 'ventas/actualizar-cotizacion' },
  'POST /api/v1/ventas/reservar-una-cotizacion':          { action: 'ventas/reservar-una-cotizacion' },
  'POST /api/v1/ventas/terminar-una-cotizacion':          { action: 'ventas/terminar-una-cotizacion' },
  'DELETE /api/v1/ventas/eliminar-cotizacion':            { action: 'ventas/eliminar-cotizacion' },

  'POST /api/v1/usuarios/actualiza-rol':                  { action: 'usuarios/actualiza-rol' },
  'POST /api/v1/usuarios/actividad-usuario':              { action: 'usuarios/actividad-usuario' },
  'GET /api/v1/usuarios/extraer-usuarios':                { action: 'usuarios/extraer-usuarios' },

  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',

};
