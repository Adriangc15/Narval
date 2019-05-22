/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"confirmEmail":{"verb":"GET","url":"/email/confirm","args":["token"]},"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"updatePassword":{"verb":"PUT","url":"/api/v1/account/update-password","args":["password"]},"updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","emailAddress"]},"updateBillingCard":{"verb":"PUT","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},"login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},"signup":{"verb":"POST","url":"/api/v1/entrance/signup","args":["emailAddress","password","fullName"]},"sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},"updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]},"extraerInventario":{"verb":"GET","url":"/api/v1/inventario/extraer-inventario","args":[]},"insertarUnArticulo":{"verb":"POST","url":"/api/v1/inventario/insertar-un-articulo","args":["id","descripcion","categoria","precio","cantidadLibre","cantidadUso","cantidadReservado","cantidadDanado","cantidadTotal","unidadMedida","activo","amperaje","tipo","serialesBuenos","serialesUso","serialesReservado","serialesDanado","serialesTotal","largo"]},"actualizarUnArticulo":{"verb":"POST","url":"/api/v1/inventario/actualizar-un-articulo","args":["id","descripcion","categoria","precio","cantidadLibre","cantidadUso","cantidadReservado","cantidadDanado","cantidadTotal","unidadMedida","activo","amperaje","tipo","serialesBuenos","serialesUso","serialesReservado","serialesDanado","serialesTotal","largo"]},"eliminarUnArticulo":{"verb":"DELETE","url":"/api/v1/inventario/eliminar-un-articulo","args":["id"]},"extraerCliente":{"verb":"GET","url":"/api/v1/clientes/extraer-cliente","args":["cedula"]},"extraerClientes":{"verb":"GET","url":"/api/v1/clientes/extraer-clientes","args":[]},"insertarCliente":{"verb":"POST","url":"/api/v1/clientes/insertar-cliente","args":["nombre","nombreReal","cedula","correo","telefono","activo"]},"actualizarCliente":{"verb":"POST","url":"/api/v1/clientes/actualizar-cliente","args":["nombre","nombreReal","cedula","correo","telefono","activo"]},"eliminarCliente":{"verb":"POST","url":"/api/v1/clientes/eliminar-cliente","args":["cedula"]},"extraerContactos":{"verb":"GET","url":"/api/v1/contactos/extraer-contactos","args":[]},"insertarContacto":{"verb":"POST","url":"/api/v1/contactos/insertar-contacto","args":["nombre","cedula","telefono","correo","activo","cliente"]},"actualizarContacto":{"verb":"POST","url":"/api/v1/contactos/actualizar-contacto","args":["nombre","cedula","correo","telefono","activo"]},"eliminarContacto":{"verb":"POST","url":"/api/v1/contactos/eliminar-contacto","args":["cedula"]},"extraerCotizacion":{"verb":"GET","url":"/api/v1/ventas/extraer-cotizacion","args":["id"]},"extraerCotizaciones":{"verb":"GET","url":"/api/v1/ventas/extraer-cotizaciones","args":[]},"copiarCotizacion":{"verb":"GET","url":"/api/v1/ventas/copiar-cotizacion","args":["id"]},"insertarCotizacion":{"verb":"POST","url":"/api/v1/ventas/insertar-cotizacion","args":["lugarEvento","esDiseno","esMontaje","esAlquiler","descripcion","fechaEvento","fechaFinEvento","fechaMontaje","fechaDesmontaje","estado","jsonArticulos","encargado","cliente","contacto"]},"actualizarCotizacion":{"verb":"POST","url":"/api/v1/ventas/actualizar-cotizacion","args":["id","lugarEvento","esDiseno","esMontaje","esAlquiler","descripcion","fechaEvento","fechaFinEvento","fechaMontaje","fechaDesmontaje","estado","encargado","cliente","contacto","jsonArticulos"]},"reservarUnaCotazacion":{"verb":"POST","url":"/api/v1/ventas/reservar-una-cotazacion","args":["id"]},"terminarUnaCotizacion":{"verb":"POST","url":"/api/v1/ventas/terminar-una-cotizacion","args":["id","comentario"]},"eliminarCotizacion":{"verb":"DELETE","url":"/api/v1/ventas/eliminar-cotizacion","args":["encargado","id"]}}
  /* eslint-enable */

});
