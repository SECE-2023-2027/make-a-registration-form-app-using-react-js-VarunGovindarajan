function Header() {
  return (
    <header style={{
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', padding: '15px 40px',
      background: '#0a2a4d', color: '#fff'
    }}>
    <div>VISIT PROFILES</div>
      <nav>
        <a href="#home" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Home</a>
        <a href="#explore" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Explore</a>
        <a href="#create" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Create</a>
        <a href="#share" style={{ margin: '0 10px', color: '#fff', textDecoration: 'none' }}>Share</a>
      </nav>
    </header>
  );
}

export default Header;
