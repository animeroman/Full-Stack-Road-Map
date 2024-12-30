$(function () {
  // JSON, $.getJSON()
  let pokemonAPiUrl = 'https://pokeapi.co/api/v2/generation/1';
  let pokemonByName = 'https://pokeapi.co/api/v2/pokemon/';

  $.getJSON(pokemonAPiUrl).done(function (data) {
    console.log(data);
    $.each(data.pokemon_species, function (index, pokemon) {
      let name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
      let link = $('<a>')
        .attr('id', pokemon.name)
        .attr('href', '#')
        .append($('<strong>').text(name));
      let par = $('<p>')
        .html('Pokemon species no. ' + (index + 1) + ' is ')
        .append(link);

      link.click(function (event) {
        $.getJSON(pokemonByName + pokemon.name).done(function (details) {
          console.log(details);
          let pokemonDiv = $('#pokemon-details');
          pokemonDiv.empty();
          pokemonDiv.append('<h2>' + name + '</h2>');
          pokemonDiv.append(
            '<img src="' + details.sprites.front_default + '">'
          );
          pokemonDiv.append('<img src="' + details.sprites.back_default + '">');
          pokemonDiv.append('<img src="' + details.sprites.front_shiny + '">');
          pokemonDiv.append('<img src="' + details.sprites.back_shiny + '">');
        });
        event.preventDefault();
      });

      par.appendTo('#pokemon');
    })
      .fail(function () {
        console.log('Request to PokemonApi failed.');
      })
      .always(function () {
        console.log('Pokemon is awesome!');
      });
  });
});
