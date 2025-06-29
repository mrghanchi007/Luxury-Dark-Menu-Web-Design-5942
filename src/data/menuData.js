export const menuData = {
  appetizers: [
    {
      id: 'app1',
      name: 'Oysters Rockefeller',
      description: 'Fresh Blue Point oysters baked with creamed spinach, herbs, and a hint of Pernod, topped with hollandaise sauce',
      price: 24,
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: ['chef-special'],
      ingredients: ['Blue Point Oysters', 'Spinach', 'Pernod', 'Hollandaise', 'Fresh Herbs'],
      allergens: ['Shellfish', 'Dairy', 'Eggs']
    },
    {
      id: 'app2',
      name: 'Truffle Arancini',
      description: 'Crispy risotto balls filled with wild mushrooms and black truffle, served with truffle aioli',
      price: 18,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: ['vegetarian'],
      ingredients: ['Arborio Rice', 'Wild Mushrooms', 'Black Truffle', 'Parmesan', 'Truffle Oil'],
      allergens: ['Dairy', 'Eggs', 'Gluten']
    },
    {
      id: 'app3',
      name: 'Tuna Tartare',
      description: 'Yellowfin tuna with avocado, cucumber, and citrus ponzu, garnished with microgreens and sesame',
      price: 22,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Yellowfin Tuna', 'Avocado', 'Cucumber', 'Ponzu', 'Sesame', 'Microgreens'],
      allergens: ['Fish', 'Soy', 'Sesame']
    },
    {
      id: 'app4',
      name: 'Foie Gras Terrine',
      description: 'Silky foie gras terrine with caramelized figs, brioche toast, and aged balsamic reduction',
      price: 32,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: ['chef-special'],
      ingredients: ['Foie Gras', 'Fresh Figs', 'Brioche', 'Balsamic Vinegar', 'Port Wine'],
      allergens: ['Dairy', 'Gluten', 'Eggs']
    }
  ],
  mains: [
    {
      id: 'main1',
      name: 'Wagyu Beef Tenderloin',
      description: 'A5 Wagyu beef tenderloin with roasted bone marrow, seasonal vegetables, and red wine jus',
      price: 85,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: ['chef-special'],
      ingredients: ['A5 Wagyu Beef', 'Bone Marrow', 'Seasonal Vegetables', 'Red Wine', 'Fresh Thyme'],
      allergens: []
    },
    {
      id: 'main2',
      name: 'Lobster Thermidor',
      description: 'Maine lobster in a rich cognac cream sauce, gratinated with Gruyère cheese and fresh herbs',
      price: 68,
      image: 'https://images.unsplash.com/photo-1519858901144-d7d85d1b2b12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Maine Lobster', 'Cognac', 'Heavy Cream', 'Gruyère Cheese', 'Fresh Herbs'],
      allergens: ['Shellfish', 'Dairy', 'Alcohol']
    },
    {
      id: 'main3',
      name: 'Duck Confit',
      description: 'Slow-cooked duck leg with garlic and herbs, served with cherry gastrique and roasted fingerling potatoes',
      price: 42,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Duck Leg', 'Garlic', 'Fresh Herbs', 'Cherries', 'Fingerling Potatoes'],
      allergens: []
    },
    {
      id: 'main4',
      name: 'Vegetarian Wellington',
      description: 'Roasted portobello mushrooms, spinach, and goat cheese wrapped in flaky pastry with herb oil',
      price: 36,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: ['vegetarian'],
      ingredients: ['Portobello Mushrooms', 'Spinach', 'Goat Cheese', 'Puff Pastry', 'Herb Oil'],
      allergens: ['Dairy', 'Gluten', 'Eggs']
    },
    {
      id: 'main5',
      name: 'Chilean Sea Bass',
      description: 'Pan-seared Chilean sea bass with miso glaze, bok choy, and shiitake mushroom broth',
      price: 54,
      image: 'https://images.unsplash.com/photo-1519858901144-d7d85d1b2b12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Chilean Sea Bass', 'Miso Paste', 'Bok Choy', 'Shiitake Mushrooms', 'Dashi'],
      allergens: ['Fish', 'Soy']
    },
    {
      id: 'main6',
      name: 'Lamb Rack',
      description: 'Herb-crusted rack of lamb with ratatouille, rosemary jus, and roasted garlic purée',
      price: 58,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Rack of Lamb', 'Fresh Herbs', 'Ratatouille', 'Rosemary', 'Roasted Garlic'],
      allergens: []
    }
  ],
  desserts: [
    {
      id: 'des1',
      name: 'Chocolate Soufflé',
      description: 'Warm dark chocolate soufflé with Valrhona chocolate, served with vanilla bean ice cream',
      price: 16,
      image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: ['chef-special'],
      ingredients: ['Valrhona Chocolate', 'Eggs', 'Vanilla Bean', 'Heavy Cream', 'Sugar'],
      allergens: ['Dairy', 'Eggs', 'Gluten']
    },
    {
      id: 'des2',
      name: 'Crème Brûlée',
      description: 'Classic vanilla bean crème brûlée with caramelized sugar crust and fresh berries',
      price: 14,
      image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Heavy Cream', 'Vanilla Bean', 'Egg Yolks', 'Sugar', 'Fresh Berries'],
      allergens: ['Dairy', 'Eggs']
    },
    {
      id: 'des3',
      name: 'Tiramisu',
      description: 'Traditional tiramisu with espresso-soaked ladyfingers, mascarpone, and cocoa powder',
      price: 13,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Mascarpone', 'Ladyfingers', 'Espresso', 'Cocoa Powder', 'Marsala Wine'],
      allergens: ['Dairy', 'Gluten', 'Eggs', 'Alcohol']
    },
    {
      id: 'des4',
      name: 'Lemon Tart',
      description: 'Tangy lemon curd tart with buttery pastry crust, meringue, and candied lemon zest',
      price: 12,
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Lemon Curd', 'Pastry Crust', 'Meringue', 'Lemon Zest', 'Butter'],
      allergens: ['Dairy', 'Gluten', 'Eggs']
    }
  ],
  beverages: [
    {
      id: 'bev1',
      name: 'Château Margaux 2015',
      description: 'Premier Grand Cru Classé from Bordeaux, elegant and complex with notes of blackcurrant and cedar',
      price: 450,
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: ['chef-special'],
      ingredients: ['Cabernet Sauvignon', 'Merlot', 'Cabernet Franc', 'Petit Verdot'],
      allergens: ['Sulfites']
    },
    {
      id: 'bev2',
      name: 'Dom Pérignon 2012',
      description: 'Vintage Champagne with fine bubbles, brioche notes, and a long, elegant finish',
      price: 320,
      image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Chardonnay', 'Pinot Noir'],
      allergens: ['Sulfites']
    },
    {
      id: 'bev3',
      name: 'Macallan 25 Year',
      description: 'Single malt Scotch whisky aged in sherry oak casks, rich and complex with dried fruits',
      price: 85,
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Single Malt Whisky'],
      allergens: []
    },
    {
      id: 'bev4',
      name: 'Artisan Coffee',
      description: 'Single-origin Ethiopian coffee, hand-roasted and expertly brewed to perfection',
      price: 8,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Ethiopian Coffee Beans'],
      allergens: []
    },
    {
      id: 'bev5',
      name: 'Signature Cocktail',
      description: 'House special with premium gin, elderflower liqueur, cucumber, and fresh herbs',
      price: 18,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: ['chef-special'],
      ingredients: ['Premium Gin', 'Elderflower Liqueur', 'Cucumber', 'Fresh Herbs', 'Lime'],
      allergens: []
    },
    {
      id: 'bev6',
      name: 'Sparkling Water',
      description: 'Premium mineral water from the French Alps, naturally carbonated',
      price: 6,
      image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      badges: [],
      ingredients: ['Natural Mineral Water'],
      allergens: []
    }
  ]
};