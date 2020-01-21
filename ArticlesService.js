const articles = [
  { id: 1, name: 'Camisa', price: 25, img: '/camisa-manga-larga-de-hombre-oporto-1-120-personalizada.jpg' },
  { id: 2, name: 'Camiseta manga corta', price: 10, img: '/camiseta-m-corta-tsra.jpg' },
  { id: 3, name: 'Camiseta manga larga', price: 15, img: '/camiseta_manga_larga_sport_pilates_y_gimnasia_suave_hombre_100_regular_azul_gris_domyos_by_decathlon_8505909_1505167.jpg' },
  { id: 4, name: 'Botas', price: 35, img: '/61hJ6RNCjrL._UX500_.jpg' }
];

exports.getArticles = () => {
  return articles;
}