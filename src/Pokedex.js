import React from 'react';

import Pokemon from './Pokemon';
import Image from './components/Image';
import Button from './components/Buttons';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemonPosition: 0,
      pokemonType: 'All',
      enabled: false
    };

    this.allPokemons = this.allPokemons.bind(this);
  }

  nextPokemon(sizeArray) {
    this.setState((prevState) => ({
      pokemonPosition:
        prevState.pokemonPosition < sizeArray - 1
          ? prevState.pokemonPosition + 1
          : 0
    }));
  }

  prevPokemon(sizeArray) {
    this.setState((prevState) => ({
      pokemonPosition:
        prevState.pokemonPosition > 0
        ? prevState.pokemonPosition - 1
        : sizeArray - 1
    }));
  }

  allPokemons() {
    const { pokemons } = this.props;
    return pokemons;
  }

  filterPokemon(type) {
    const pokemons = this.allPokemons();

    let filtered = pokemons.filter((pokemon) => pokemon.type === type).length;
    if (type === 'All') filtered = pokemons.length;

    const result = filtered > 1 ? false : true;

    this.setState({
      pokemonPosition: 0,
      pokemonType: type,
      enabled: result
    });
  }

  filteredPokemonsArray(type) {
    const pokemons = this.allPokemons();

    if (type === 'All') return pokemons;
    return pokemons.filter((pokemon) => pokemon.type === type);
  }

  filterTypeArray() {
    const { pokemons } = this.props;
    const filterType = [];

    for (let index = 0; index < pokemons.length; index += 1) {
      const pokemon = pokemons[index];
      if (index === 0 || !filterType.includes(pokemon.type)) {
        filterType.push(pokemon.type);
      }
    }

    return filterType;
  }

  render() {
    const { pokemonPosition, pokemonType, enabled } = this.state;
    const filteredPokemons = this.filteredPokemonsArray(pokemonType);
    const filterType = this.filterTypeArray();

    return (
      <main>
        <div className='pokemon'>
          <div className='pokedex'>
            <div className='left'>
              <div className='bg_curve1_left' />
              <div className='bg_curve2_left' />
              <div className='curve1_left'>
                <div className='buttonGlass'>
                  <div className='reflect' />
                </div>
                <div className='miniButtonGlass_left' />
                <div className='miniButtonGlass_left' />
                <div className='miniButtonGlass_left' />
              </div>
              <div className='curve2_left'>
                <div className='junction'>
                  <div className='junction_parts' />
                  <div className='junction_parts' />
                </div>
              </div>
              <div className='screen'>
                <div className='topPicture'>
                  <div className='buttontopPicture1' />
                  <div className='buttontopPicture2' />
                </div>
                <div className='picture'>
                  <Image
                    image={filteredPokemons[pokemonPosition].image}
                    name={filteredPokemons[pokemonPosition].name}
                  />
                </div>
                <div className='buttonbottomPicture' />
                <div className='speakers'>
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className='bigbluebutton' />
              <div className='barbutton green left_left' />
              <div className='barbutton red left_right' />
              <div className='cross'>
                <Button
                  disabled={enabled}
                  callback={() => this.nextPokemon(filteredPokemons.length)}
                  className='button topcross'>
                  <div className='arrow upT' />
                </Button>
                <Button
                  disabled={enabled}
                  callback={() => this.prevPokemon(filteredPokemons.length)}
                  className='button leftcross'>
                  <div className='arrow leftT' />
                </Button>
                <Button
                  disabled={enabled}
                  callback={() => this.nextPokemon(filteredPokemons.length)}
                  className='button rightcross'>
                  <div className='arrow rightT' />
                </Button>
                <div className='button midcross'>
                  <div className='midCircle' />
                </div>
                <Button
                  disabled={enabled}
                  callback={() => this.prevPokemon(filteredPokemons.length)}
                  className='button botcross'>
                  <div className='arrow downT' />
                </Button>
              </div>
            </div>
            <div className='right'>
              <Pokemon pokemon={filteredPokemons[pokemonPosition]} />
              <div className='blueButtons'>
                <Button
                  className='blueButton'
                  callback={() => this.filterPokemon('All')}>
                  All
                </Button>
                {filterType.map((type) => (
                  <Button
                    className='blueButton'
                    key={type}
                    callback={() => this.filterPokemon(type)}>
                    {type}
                  </Button>
                ))}
              </div>
              <div className='miniButtonGlass_right' />
              <div className='miniButtonGlass_right' />
              <div className='barbutton green right_left' />
              <div className='barbutton red right_right' />
              <div className='yellowBox'>
                <Button
                  disabled={enabled}
                  callback={() => this.prevPokemon(filteredPokemons.length)}>
                  Previous Pokemon
                </Button>
                <Button
                  disabled={enabled}
                  callback={() => this.nextPokemon(filteredPokemons.length)}>
                  Next Pokemon
                </Button>
              </div>
              <div className='bg_curve1_right' />
              <div className='bg_curve2_right' />
              <div className='curve1_right' />
              <div className='curve2_right' />
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Pokedex;
