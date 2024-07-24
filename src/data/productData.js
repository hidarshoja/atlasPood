const product = {
    name: 'Basic Tee',
    price: '$35',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Women', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        id: 1,
        imageSrc: '/img/img6.jpg',
        imageAlt: "Back of women's Basic Tee in black.",
        primary: true,
        name: 'Silk curtains',
        price : "6,115,000"
      },
      {
        id: 2,
        imageSrc: '/img/img7.jpg',
        imageAlt: "Side profile of women's Basic Tee in black.",
        primary: false,
        name: 'Silk curtain, cotton fabric',
        price : "6,195,000"
      },
      {
        id: 3,
        imageSrc: '/img/img8.jpg',
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
        name: 'Silk curtain,  fabric3',
        price : "13,815,000"
      },
      {
        id: 4,
        imageSrc: '/img/img9.jpg',
        imageAlt: "Front of women's Basic Tee in black.",
        primary: false,
        name: 'curtain, cotton fabric',
        price : "10,105,000"
      },
    ],
    colors: [
      { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
      { name: 'Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
      { name: 'white', bgColor: 'bg-gray-100', selectedColor: 'ring-gray-400' },
      { name: 'red', bgColor: 'bg-red-400', selectedColor: 'ring-red-400' },
      { name: 'blue', bgColor: 'bg-blue-400', selectedColor: 'ring-blue-400' },
    ],
    sizes: [
      { name: '130CM * 320CM', inStock: true },
      { name: '130CM * 300CM', inStock: false },
      { name: '280CM * 300CM', inStock: false },
      { name: '300CM * 120CM', inStock: true },
      { name: '200CM * 120CM', inStock: true },
    ],
    description: `
      <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
      <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
    `,
    details: [
      'Only the best materials',
      'Ethically and locally made',
      'Pre-washed and pre-shrunk',
      'Machine wash cold with similar colors',
    ],
  };
  
  export default product;
  