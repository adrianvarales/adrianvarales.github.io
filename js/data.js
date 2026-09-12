/* ============================================================
   ADRIAN VARALES PROPIEDADES — Catálogo (Tandil, Bs. As.)
   Fuente: Excel "PROPIEDADES_STOCK_AV_PROP" + chat WhatsApp.
   "cover" = índice de la foto de portada (fachada para casas/deptos).
   ============================================================ */

const SITE = {
  agent: "Adrián Varales",
  brand: "Adrián Varales Propiedades",
  city: "Tandil",
  province: "Buenos Aires, Argentina",
  whatsapp: "5492494654199",
  whatsappPretty: "+54 9 2494 65-4199",
  instagram: "https://instagram.com/adrianvarales.propiedades",
  instagramHandle: "@adrianvarales.propiedades",
  email: "info@adrianvarales.com.ar",
  tagline: "Propiedades en Tandil, con criterio y cercanía.",
};

const PROPERTIES = [
  {
    id: "pellegrini-50", title: "Dúplex con quincho y terraza", address: "Pellegrini 50", zone: "A 50 m del Supermercado Monarca · Tandil",
    type: "Departamento", operation: "Venta", price: 85000, status: "Disponible", featured: true, badge: "Muy buena ubicación",
    beds: 2, baths: 2, parking: 1, area: null, images: 14, cover: 5,
    short: "Departamento dúplex con comodidades de casa: quincho, terraza propia y espacio vehicular.",
    description: "Departamento dúplex que combina la practicidad de un departamento con las comodidades de una casa. 2 habitaciones, cocina independiente, toilette y baño completo, quincho, espacio vehicular y terraza propia. Excelente ubicación, a 50 m del Supermercado Monarca.",
    features: ["2 habitaciones", "Cocina independiente", "Toilette + baño completo", "Quincho", "Terraza propia", "Espacio vehicular"],
  },
  {
    id: "zona-procrear", title: "Departamento moderno con patio", address: "Zona Procrear", zone: "Tandil",
    type: "Departamento", operation: "Venta", price: 82000, status: "Disponible", featured: true, badge: "Moderno",
    beds: 2, baths: 1, parking: 1, area: null, images: 10, cover: 8,
    short: "Unidad tipo casa, moderna y funcional, con patio propio, entrada de auto y parrilla.",
    description: "Una opción ideal para vivir cómodo y moderno, con espacios que hoy todos buscan. 2 habitaciones, estar comedor, cocina, losa radiante, patio propio, entrada de auto y parrilla.",
    features: ["2 habitaciones", "Estar comedor", "Cocina", "Losa radiante", "Patio propio", "Entrada de auto", "Parrilla"],
  },
  {
    id: "cerro-redondo-200", title: "Casa con potencial", address: "Cerro Redondo al 200", zone: "Zona residencial tranquila · Tandil",
    type: "Casa", operation: "Venta", price: 87000, status: "Disponible", featured: true, badge: null,
    beds: 2, baths: 1, parking: 1, area: "Lote 10 × 30 m", images: 14, cover: 1,
    short: "Casa con espacios amplios, loft/oficina y lote con potencial de desarrollo.",
    description: "Casa con espacios amplios y funcionales, ideal para quienes buscan comodidad y potencial. Living comedor luminoso, cocina integrada, 2 habitaciones y un loft/oficina con espacio extra para proyectar. Sobre lote de 10 × 30 m.",
    features: ["2 habitaciones", "Loft / oficina", "Living comedor luminoso", "Cocina integrada", "Baño", "Lote 10 × 30 m"],
  },
  {
    id: "piccirilli-100", title: "2 locales comerciales", address: "Piccirilli al 100", zone: "Zona de fácil acceso · Tandil",
    type: "Local", operation: "Venta", price: 110000, priceNote: "c/u", status: "Disponible", featured: false, badge: "2 unidades",
    beds: null, baths: null, parking: null, area: "8 × 7 m c/u · lote 1.149 m²", images: 3, cover: 1,
    short: "2 locales de 8 × 7 m c/u sobre lote de 1.149 m². También disponibles en alquiler.",
    description: "2 locales comerciales de 8 × 7 metros cada uno, sobre un lote de 1.149 m², ideal para distintos rubros. También disponibles en alquiler ($600.000 c/u). Listos para iniciar o potenciar tu emprendimiento en una zona de fácil acceso.",
    features: ["2 locales", "8 × 7 m c/u", "Lote de 1.149 m²", "También en alquiler", "Muy buen estado"],
  },
  {
    id: "suarez-garcia-2300", title: "Lote amplio con servicios", address: "Suárez García al 2300", zone: "Barrio Docente · Tandil",
    type: "Lote", operation: "Venta", price: 22000, status: "Disponible", featured: false, badge: "Oportunidad",
    beds: null, baths: null, parking: null, area: "16 × 30 m", images: 10, cover: 1,
    short: "Lote amplio con todos los servicios en una zona tranquila y en crecimiento.",
    description: "Excelente oportunidad para construir o invertir en una zona tranquila y en crecimiento. Lote amplio de 16 × 30 m, con todos los servicios. Ideal primera vivienda o inversión de tierra.",
    features: ["16 × 30 m", "Todos los servicios", "Zona en crecimiento", "Ideal construir o invertir"],
  },
  {
    id: "piedrabuena-2400", title: "Lote en Villa Italia", address: "Piedrabuena al 2400", zone: "Villa Italia · Tandil",
    type: "Lote", operation: "Venta", price: 25000, status: "Disponible", featured: false, badge: null,
    beds: null, baths: null, parking: null, area: "249,5 m² · 10 × 24,95 m", images: 2, cover: 1, priceNote: "Libre de gastos",
    short: "249,5 m² en uno de los sectores de mayor desarrollo residencial de la ciudad.",
    description: "Excelente oportunidad para construir o invertir en Villa Italia, uno de los sectores con mayor desarrollo residencial de Tandil. Lote regular de 249,5 m² (10 m de frente × 24,95 m de fondo), fácil de aprovechar. Libre de gastos.",
    features: ["249,5 m²", "10 × 24,95 m", "Villa Italia", "Terreno regular", "Libre de gastos"],
  },
];

/* Helpers compartidos -------------------------------------------------- */
function propImage(id, n) { return `assets/properties/${id}/${String(n).padStart(2, "0")}.jpg`; }
function coverImage(p) { return propImage(p.id, p.cover || 1); }
function priceLabel(p) {
  if (p.priceText) return p.priceText;
  if (p.price == null) return "Consultar valor";
  return "USD " + p.price.toLocaleString("es-AR");
}
function waLink(text) {
  const t = encodeURIComponent(text || "Hola Adrián, quiero hacer una consulta sobre una propiedad.");
  return `https://wa.me/${SITE.whatsapp}?text=${t}`;
}
function getProperty(id) { return PROPERTIES.find((p) => p.id === id); }
