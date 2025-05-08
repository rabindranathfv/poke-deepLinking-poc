function Header() {
    return ( <header>
        <h1>Welcome to the Pokémon World</h1>
        <p>Click on a Pokémon to view its details</p>
        <button onClick={() => (window.location.href = 'deeplinking/index.html')} style={{ marginTop: '20px', padding: '10px 10px', fontSize: '12px' }}>Go to Fallback Page</button>
      </header> );
}

export default Header;