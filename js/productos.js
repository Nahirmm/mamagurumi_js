class Producto {
    constructor(objeto) {
      this.id = objeto.id;
      this.nombre = objeto.nombre;
      this.alto = objeto.alto;
      this.ancho = objeto.ancho;
      this.material = objeto.material;
      this.imagen = objeto.imagen;
      this.class = objeto.class;
      this.modal = objeto.modal;
      this.modalLabel = objeto.modalLabel;
      this.colores = objeto.colores;
      this.autora = objeto.autora;
      this.precio = objeto.precio;
      this.cantidad = objeto.cantidad;
    }
  }
  
  let tienda = [
    {
      id: 1,
      nombre: "Ganesha o Krishna",
      alto: 32,
      ancho: 24,
      material: "Lana cashmilon fina",
      imagen: "../assets/ganeshaykrishna.jpg",
      class: "ganeshaykrishna",
      modal: "ModalGyK",
      modalLabel: "ModalLabelGyK",
      colores: "Único",
      autora: "Madelenon",
      precio: 1500,
      cantidad: 1,
    },
    {
      id: 2,
      nombre: "Zorrito 'Milo'",
      alto: 16,
      ancho: 16,
      material: "Hilo fino",
      imagen: "../assets/zorromilo.png",
      class: "milo",
      modal: "ModalMilo",
      modalLabel: "ModalLabelMilo",
      colores: "Naranja pastel, Naranja fuerte o Marrón",
      autora: "Tartarumies",
      precio: 1200,
      cantidad: 1,
    },
    {
      id: 3,
      nombre: "Lara y sus disfraces",
      alto: 24,
      ancho: 13,
      material: "Hilo fino",
      imagen: "../assets/laraysusdisfraces.png",
      class: "laraysusdisfraces",
      modal: "ModalLara",
      modalLabel: "ModalLabelLara",
      colores: "Único",
      autora: "Tartarumies",
      precio: 2000,
      cantidad: 1,
    },
    {
      id: 4,
      nombre: "Oso Camilo",
      alto: 10,
      ancho: 7,
      material: "Lana cashmilon fina",
      imagen: "../assets/camilooso.jpg",
      class: "camiloOso",
      modal: "ModalCamilo",
      modalLabel: "ModalLabelCamilo",
      colores: "Beige, Gris o Marrón oscuro",
      autora: "Madelenon",
      precio: 800,
      cantidad: 1,
    },
    {
      id: 5,
      nombre: "Muñeca Candy",
      alto: 28,
      ancho: 15,
      material: "Hilo fino",
      imagen: "../assets/candy.png",
      class: "candy",
      modal: "ModalCandy",
      modalLabel: "ModalLabelCandy",
      colores: "Único",
      autora: "Tartarumies",
      precio: 1500,
      cantidad: 1,
    },
    {
      id: 6,
      nombre: "Cotorra Catalina",
      alto: 13,
      ancho: 7,
      material: "Lana cashmilon fina",
      imagen: "../assets/cotorra.JPG",
      class: "cotorra",
      modal: "ModalCotorra",
      modalLabel: "ModalLabelCotorra",
      colores: "Verde y azul, Amarillo y gris o Rosa y verde agua",
      autora: "Pica Pau",
      precio: 900,
      cantidad: 1,
    },
    {
      id: 7,
      nombre: "Muñeca Kiara y Din",
      alto: 26,
      ancho: 14,
      material: "Hilo fino",
      imagen: "../assets/kiaraydin.jpg",
      class: "kiaraydin",
      modal: "ModalKiara",
      modalLabel: "ModalLabelKiara",
      colores: "Único",
      autora: "Tartarumies",
      precio: 1700,
      cantidad: 1,
    },
    {
      id: 8,
      nombre: "Animalitos",
      alto: 12,
      ancho: 6,
      material: "Lana cashmilon fina",
      imagen: "../assets/animalitos.jpg",
      class: "animalitos",
      modal: "ModalAnimalitos",
      modalLabel: "ModalLabelAnimalitos",
      colores: "Único",
      autora: "Little bear crochets",
      precio: 850,
      cantidad: 1,
    },
  ];
  
  const ursula = new Producto({
    id: 9,
    nombre: "Muñeca Ursula y gatito",
    alto: 24,
    ancho: 13,
    material: "Hilo fino",
    imagen: "../assets/ursulaygatito.png",
    class: "ursulaygatito",
    modal: "ModalUrsula",
    modalLabel: "ModalLabelUrsula",
    colores: "Único",
    autora: "Tartarumies",
    precio: 1700,
    cantidad: 1,
  });
  tienda.push(ursula);
  
  console.log(tienda);