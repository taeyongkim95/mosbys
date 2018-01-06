// Written by Jacob Craffey and Taeyong Kim
// Uses JQuery

$(document).ready(function(){

  $('.flavor-popup').popup({
    transition: 'all 0.3s'
  });

  $('#feedback-popup').popup({
    transition: 'all 0.3s'
  });

  $('#feedback').click(function() {
    $('#feedback-popup').popup('show');
  });

  $('#sign-up-popup').popup({
      transition: 'all 0.3s'
  });

  $('#sign-up').click(function() {
      $('#sign-up-popup').popup('show');
  });

  /* Dynamic Flavor Selection */

  $('.choose-flavor').click(function() {
    $('.flavor-product').remove();
  });

  var butter = [
    { name: 'Butter',
    description: '',
    image: '../images/icons/white_icons/flavors/butter.png'},
    { name: 'Maple Butter',
    description: '',
    image: '../images/icons/maple_butter.png'},
    { name: 'Movie Theatre Butter',
    description: 'Rich buttery popcorn, just like the theatre.',
    image: '../images/icons/white_icons/flavors/movie_butter.png'},
    { name: 'Skinny',
    description: 'Lite butter and sodium free.  Perfect for the health-conscious popcorn connoisseur.',
    image: '../images/icons/skinny_icon.png'},
  ];

  var kettle = [
    { name: 'Kettle Corn',
    description: 'White popcorn with a salty and sweet flavor.',
    image: '../images/icons/white_icons/other/kettlecorn.png'},
    { name: 'French Toast',
    description: 'Cinnamon and sugar goodness in every bite.',
    image: '../images/icons/white_icons/flavors/french_toast.png'},
    { name: '',
    description: '',
    image: ''},
    { name: '',
    description: '',
    image: ''},
  ]

  var cheese = [
    { name: 'Pizza',
    description: 'Savory seasoning and mild mozzerella combined for a real pizza taste',
    image: "../images/icons/white_icons/cheese/pizza.png"},
    { name: 'Sour Cream and Chive',
    description: 'Slightly tart and very savory with a hint of seasoning.',
    image: '../images/icons/sour_cream&chive.png'},
    { name: 'Buffalo Ranch',
      description: 'Spicy buffalo blended with a cool ranch for the perfect flavor.',
      image: '../images/icons/buffalo_ranch.png'},
    { name: 'Dill Pickle',
    description: 'White popcorn with a dill\'icious flavor.',
    image: "../images/icons/white_icons/cheese/dill.png"},
    { name: 'Honey BBQ',
    description: 'Sweet honey mixed with tangy BBQ.',
    image: "../images/icons/white_icons/cheese/honey_bbq.png"},
    { name: 'Jalapeño Nacho',
    description: 'Spicy jalapeño and savory cheddar cheese.',
    image: '../images/icons/white_icons/flavors/jalapeno_nacho.png'},
    { name: 'Jalapeño Ranch',
    description: 'Spicy jalapeño flavor with a dash of cool ranch.',
    image: '../images/icons/jalapeno_ranch.png'},
    { name: 'Loaded Baked Potatoes',
    description: 'The delectible delight of baked potato with all the fixin\'s.',
    image: '../images/icons/baked_potato.png'},
    { name: 'Mac + Cheese',
    description: 'A delightful mix of mild and sharp cheddar cheese flavors.',
    image: "../images/icons/white_icons/cheese/mac_cheese.png"},
    { name: 'Nacho Cheese',
    description: 'Cheddar cheese with a spicy flare.',
    image: '../images/icons/white_icons/flavors/nacho_cheese.png'},
    { name: 'Salt + Pepper',
    description: 'White popcorn with just enough salt and pepper.',
    image: "../images/icons/white_icons/cheese/salt_pepper.png"},
    { name: 'White Cheddar',
    description: 'A delectably tangy cheese.',
    image: "../images/icons/white_icons/cheese/cheese2.png"},
    { name: 'Cheddar',
    description: 'A rich and mild cheddar flavor.',
    image: "../images/icons/white_icons/cheese/cheese2.png"},
    { name: 'BBQ Bacon',
    description: 'A perfect pairing of tangy BBQ and savory bacon.',
    image: '../images/icons/white_icons/flavors/bbq_bacon.png'},
    { name: 'Cheddar Bacon',
    description: 'Bold combination of sharp cheddar and bacon.',
    image: "../images/icons/white_icons/cheese/cheddar_bacon.png"},
    { name: 'Sriracha Lime',
    description: 'Spicy sriracha paired with zesty lime',
    image: '../images/icons/white_icons/flavors/sriracha_lime.png'},
    ];

    var cheesePrice = [
      { junior: 3.50,
        small: 5.50,
        medium: 10,
        large: 14,
        family: 25
    }];

  var candy = [
    { name: 'Peach Mango',
      description: 'Sweet Peach and mouthwatering mango together at last.',
      image: '../images/icons/white_icons/flavors/peach_mango.png'},
    { name: 'Pineapple',
    description: 'Perfect pineapple for an island inspired treat.',
    image: '../images/icons/white_icons/flavors/pineapple.png'},
    { name: 'Watermelon',
    description: 'The sweet taste of summer watermelon.',
    image: '../images/icons/white_icons/candy/watermelon.png'},
    { name: 'Rainbow',
    description: 'A tantilizing mix of fruit flavors.',
    image: '../images/icons/white_icons/candy/rainbow.png'},
    { name: 'Green Apple',
    description: 'The crisp, tart taste of a green apple fresh from the orchard.',
    image: '../images/icons/white_icons/candy/green_apple.png'},
    { name: 'Blueberry',
    description: 'Fresh picked blueberry flavor.',
    image: '../images/icons/white_icons/candy/blueberry.png'},
    { name: 'Black Cherry',
    description: 'Fresh picked cherry with a dash of sourness.',
    image: '../images/icons/white_icons/candy/cherry.png'},
    { name: 'Blue Raspberry',
    description: 'A candy coated raspberry treat.',
    image: '../images/icons/white_icons/candy/blue_raspberry.png'},
    { name: 'Blue Coconut',
    description: 'The sweet island cocunut brings you right to the beach.',
    image: '../images/icons/white_icons/candy/blue_coconut.png'},
    { name: 'Grape',
    description: 'Sweet and juicy grape goodness.',
    image: '../images/icons/white_icons/flavors/grape.png'},
    { name: 'Fruit Punch',
    description: 'A tropical fruit explosion.',
    image: '../images/icons/white_icons/flavors/fruit_punch.png'},
    { name: 'Strawberry Lemonade',
    description: 'Sweet strawberry blended with tart lemonade.',
    image: '../images/icons/white_icons/candy/strawberry_lemonade.png'},
    { name: 'Bubble Gum',
    description: 'The sugary pop of flavor you love.',
    image: '../images/icons/white_icons/candy/bubblegum.png'},
    { name: 'Cotton Candy',
    description: 'The sweet spun flavor from the county fair.',
    image: '../images/icons/white_icons/candy/cotton_candy.png'},
    { name: 'Cinnabun',
    description: 'Sweet and enticing cinnamon sugar flavor.',
    image: '../images/icons/white_icons/candy/cinnabon.png'},
    ];

  var caramel = [
    { name: 'Caramel',
    description: 'Buttery caramel goodness.',
    image: '../images/icons/white_icons/flavors/caramel.png'},
    { name: 'Salted Caramel',
    description: 'The tradition of caramel with the added zest of sea salt.',
    image: '../images/icons/white_icons/flavors/salted_caramel.png'},
    { name: 'Honey Caramel',
    description: '',
    image: '../images/icons/honey_caramel1.png'},
    { name: 'Maple Caramel',
    description: '',
    image: '../images/icons/maple_caramel.png'},
    { name: 'Caramel Butter',
    description: '',
    image: '../images/icons/white_icons/flavors/caramel_butter.png'},
  ]


  var premium = [
    { name: 'Mint Chocolate',
      description: 'Refreshing mint topped with mint cookies and chocolate milk.',
      image: '../images/icons/white_icons/flavors/mint_chocolate.png'},
    { name: 'Nutty Niyla',
    description: 'Traditional toffee mixed with peanuts.',
    image: '../images/icons/white_icons/flavors/nutty_nalia.png'},
    { name: 'Toffee Almond',
    description: 'Rich buttery toffee combined with roasted almonds.',
    image: '../images/icons/white_icons/flavors/toffee_almond.png'},
    { name: 'Tuxedo',
    description: 'Caramel corn dressed up in milk and white chocolates.',
    image: '../images/icons/white_icons/premium/tuxedo.png'},
    { name: 'Smores',
    description: 'Caramel corn drizzled in a toasted marshmellow, graham cracker and Hersheys® chocolate topping.',
    image: '../images/icons/white_icons/premium/smores.png'},
    { name: 'Red Velvet',
    description: 'A new twist to everyone\'s favorite cake.',
    image: '../images/icons/white_icons/flavors/red_velvet.png'},
    { name: 'Cookies and Cream',
    description: 'Chocolate and vanilla with cookie crumbs.',
    image: '../images/icons/white_icons/premium/cookies_cream.png'},
    { name: 'Chocolate Drizzle',
    description: 'Pure, simple chocolate drizzled over white popcorn.',
    image: '../images/icons/white_icons/premium/chocolate_drizzle.png'},
    { name: 'Caramel Pecan',
    description: 'Sweet caramel with a pecan crunch',
    image: '../images/icons/caramel_pecan.png'},
    { name: 'Cheesecake',
    description: 'A dessert-like taste with just enough sweet.',
    image: '../images/icons/white_icons/flavors/cheesecake.png'},
    { name: 'Caramel Cashew',
    description: 'Candied caramel with cashew nuttiness.',
    image: '../images/icons/white_icons/flavors/caramel_cashew.png'},
  ];

  $('#choose-butter').click(function() {
    $('#display-click').html("Butter");
    butter.forEach(function(flavor) {
      $('#flavor-product-wrapper').append('<div class="flavor-product"><h1>'+flavor.name+'</h1></br><div id="flavor-image-wrapper"><img src='+flavor.image+'></div?</div>');
    });
    $('.flavor-product').click(function(e){
      var name = e.currentTarget.textContent;
      var flavorObj = butter.filter(function(item) {
        return item.name === name;
      })[0];
      $('#price').val("");
      $('#popup-flavor').html(name);
      $('#flavor-description').html(flavorObj.description);
      $('.flavor-image').remove();
      $('#popup-image-display').append('<img class="flavor-image" src='+flavorObj.image+'>');
      $('.flavor-popup').popup('show');
    });
  });

  $('#choose-kettle').click(function() {
    $('#display-click').html("Kettle");
    kettle.forEach(function(flavor) {
      $('#flavor-product-wrapper').append('<div class="flavor-product"><h1>'+flavor.name+'</h1></br><div id="flavor-image-wrapper"><img src='+flavor.image+'></div?</div>');
    });
    $('.flavor-product').click(function(e){
      var name = e.currentTarget.textContent;
      var flavorObj = kettle.filter(function(item) {
        return item.name === name;
      })[0];
      $('#price').val("");
      $('#popup-flavor').html(name);
      $('#flavor-description').html(flavorObj.description);
      $('.flavor-image').remove();
      $('#popup-image-display').append('<img class="flavor-image" src='+flavorObj.image+'>');
      $('.flavor-popup').popup('show');
    });
  });

  $('#choose-cheese').click(function() {
    $('#display-click').html("Cheese");
    cheese.forEach(function(flavor) {
      $('#flavor-product-wrapper').append('<div class="flavor-product"><h1>'+flavor.name+'</h1></br><div id="flavor-image-wrapper"><img src='+flavor.image+'></div?</div>');
    });
    $('.flavor-product').click(function(e){
      var name = e.currentTarget.textContent;
      var flavorObj = cheese.filter(function(item) {
        return item.name === name;
      })[0];
      $('#price').val("");
      $('#popup-flavor').html(name);
      $('#flavor-description').html(flavorObj.description);
      $('.flavor-image').remove();
      $('#popup-image-display').append('<img class="flavor-image" src='+flavorObj.image+'>');
      $('.flavor-popup').popup('show');
    });
  });

  $('#choose-caramel').click(function() {
    $('#display-click').html("Caramel");
    caramel.forEach(function(flavor) {
      $('#flavor-product-wrapper').append('<div class="flavor-product"><h1>'+flavor.name+'</h1></br><div id="flavor-image-wrapper"><img src='+flavor.image+'></div?</div>');
    });
    $('.flavor-product').click(function(e){
      var name = e.currentTarget.textContent;
      var flavorObj = caramel.filter(function(item) {
        return item.name === name;
      })[0];
      $('#price').val("");
      $('#popup-flavor').html(name);
      $('#flavor-description').html(flavorObj.description);
      $('.flavor-image').remove();
      $('#popup-image-display').append('<img class="flavor-image" src='+flavorObj.image+'>');
      $('.flavor-popup').popup('show');
    });
  });

  $('#choose-candy').click(function() {
    $('#display-click').html("Candy");
    candy.forEach(function(flavor) {
      $('#flavor-product-wrapper').append('<div class="flavor-product"><h1>'+flavor.name+'</h1></br><div id="flavor-image-wrapper"><img src='+flavor.image+'></div?</div>');
    });
    $('.flavor-product').click(function(e){
      var name = e.currentTarget.textContent;
      var flavorObj = candy.filter(function(item) {
        return item.name === name;
      })[0];
      $('#price').val("");
      $('#popup-flavor').html(name);
      $('#flavor-description').html(flavorObj.description);
      $('.flavor-image').remove();
      $('#popup-image-display').append('<img class="flavor-image" src='+flavorObj.image+'>');
      $('.flavor-popup').popup('show');
    });
  });

  $('#choose-premium').click(function() {
    $('#display-click').html("Premium");
    premium.forEach(function(flavor) {
      $('#flavor-product-wrapper').append('<div class="flavor-product"><h1>'+flavor.name+'</h1></br><div id="flavor-image-wrapper"><img src='+flavor.image+'></div?</div>');
    });
    $('.flavor-product').click(function(e){
      var name = e.currentTarget.textContent;
      var flavorObj = premium.filter(function(item) {
        return item.name === name;
      })[0];
      $('#price').val("");
      $('#popup-flavor').html(name);
      $('#flavor-description').html(flavorObj.description);
      $('.flavor-image').remove();
      $('#popup-image-display').append('<img class="flavor-image" src='+flavorObj.image+'>');
      $('.flavor-popup').popup('show');
    });
  });

  $('#shop-more').click(function() {
    console.log('hello');
  })



  //===========================================//

  $('#junior').click(function() {
    var category = $('#display-click').text();
    if (category === "Butter") {
      $('#price').val(2);
    }
    else if (category === "Kettle") {
      $('#price').val(3);
    }
    else if (category === "Cheese") {
      $('#price').val(3.50);
    }
    else if (category === "Caramel") {
      $('#price').val(4.50);
    }
    else if (category === "Candied Fruit") {
      $('#price').val(4.50);
    }
    else if (category === "Premium") {
      $('#price').val(5.50);
    }
  })
});
