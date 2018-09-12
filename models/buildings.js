const mongoose = require('mongoose');
const Schema = mongoose.Schema;

buildingsSchema = new Schema({
  id: Schema.Types.ObjectId,
  nombre_portal_web: String,
  ref_inmueble: Number,  // string
  nombre_distrito: String,
  nombre_barrio: String,
  id_barrio: Number,
  ciudad: String,
  direccion: String,
  codigo_postal: Number,  // string
  superficie: Number,
  habitaciones: Number,
  num_planta: Number,
  ano_construccion: String,   //ha de ser Number
  precio_inmueble: Number,
  fecha_alta_bbdd: String,
  orientacion: String,
  nombre_api: String,
  telefono: Number,  // ha de ser string
  latitude: Number,
  longitude: Number,
  location: {
    type: {type: String},
    coordinates: [Number],
  },
  url_piso: String,
  fecha_alta_sql: String,
  desc_estado: String,
  fecha_alta_MONGO: String
});

buildingsSchema.index({ location: '2dsphere'});

const Buildings = mongoose.model('immobles', buildingsSchema);
//Nota: aqui en model, hem de posar el nom de la Collection. Molt important. Sino, es creara una nova

module.exports = Buildings;