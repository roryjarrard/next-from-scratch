import Head from 'next/head'
import styles from './Pokemon.module.css'

function Pokemon({ pokemon }) {
  if (!pokemon) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>Pokemon: {pokemon?.name}</title>
      </Head>
      <div className={styles.container}>
        <h2> Welcome, {pokemon?.name}!</h2>
        <img
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
          style={{ width: 200 }}
        />
      </div>
    </>
  )
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
  const pokemon = await res.json()

  return {
    props: {
      pokemon,
    },
  }
}

export async function getStaticPaths() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const pokemon = await res.json()

  let paths = pokemon.results.map((p) => `/pokemon/${p.name}`)

  return {
    paths,
    fallback: false,
  }
}

export default Pokemon
