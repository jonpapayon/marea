// MAREA — Spa & Wellness es una marca ficticia creada como demostración de Web Wizards.
// Todos los datos de contacto son de ejemplo.
export const NEGOCIO = {
  nombre: "MAREA",
  subtitulo: "Spa & Wellness",
  ciudad: "Tulum, Quintana Roo",
  zona: "Región 15, Tulum, Quintana Roo",
  email: "hola@marea-spa.example",
  // Número de WhatsApp del negocio (formato internacional, solo dígitos).
  // Vacío = modo demostración: la solicitud se prepara pero no se envía a nadie.
  whatsapp: "",
  descripcion:
    "MAREA, spa boutique en Tulum: masajes, rituales faciales y experiencias corporales entre la selva y el mar. Reserva tu experiencia en línea.",
  horario: [
    { dias: "Lunes a sábado", horas: "9:00 – 20:00" },
    { dias: "Domingo", horas: "10:00 – 18:00" },
  ],
  // Horarios de inicio que ofrece la agenda.
  horarios: ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00"],
  diasReservables: 21,
};

export const TRATAMIENTOS = [
  {
    id: "masaje-relajante",
    nombre: "Masaje relajante",
    duracion: 60,
    precio: 1500,
    texto: "Presión suave y aceites tibios para soltar el cuerpo y bajar el ritmo.",
    imagen: "/img/masaje-relajante.webp",
    alt: "Manos de terapeuta durante un masaje de espalda",
  },
  {
    id: "masaje-profundo",
    nombre: "Masaje profundo",
    duracion: 90,
    precio: 2200,
    texto: "Trabajo lento sobre espalda, cuello y piernas para la tensión acumulada.",
    imagen: "/img/masaje-profundo.webp",
    alt: "Manos de terapeuta trabajando la pierna sobre lino natural",
  },
  {
    id: "ritual-facial",
    nombre: "Ritual facial",
    duracion: 60,
    precio: 1800,
    texto: "Limpieza, aceites botánicos y masaje facial para una piel descansada.",
    imagen: "/img/ritual-facial.webp",
    alt: "Gotero con aceite facial sobre la palma de una mano",
  },
  {
    id: "experiencia-corporal",
    nombre: "Experiencia corporal",
    duracion: 90,
    precio: 2500,
    texto: "Exfoliación, piedras calientes y masaje completo, de los pies a la cabeza.",
    imagen: "/img/experiencia-corporal.webp",
    alt: "Piedras volcánicas calientes y flores de gardenia sobre la espalda",
  },
];

export const formatoPrecio = (n) =>
  "$" + n.toLocaleString("en-US") + " MXN";
