function Pokemon({ pokemon }) {
  if (!pokemon) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2> Welcome, {pokemon?.name}!</h2>
      <img
        src={pokemon?.sprites.front_default}
        alt={pokemon?.name}
        style={{ width: 200 }}
      />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
  const pokemon = await res.json()

  return {
    props: {
      pokemon,
    },
  }
}

export default Pokemon
