import image from "./s2.webp";
function ExploreSection() {
  return (
    <section
      id="explore"
      style={{
        padding: '60px 10vw',
        background: 'linear-gradient(135deg, #232526 0%, #2c5364 100%)',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '0 0 32px 32px',
      }}
    >
      <h1 style={{ fontSize: '2.2rem', color: '#00e6e6', marginBottom: '18px' }}>
        Explore Your Spending Patterns
      </h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '24px' }}>
        Dive into detailed analytics and insights. Discover where your money goes, identify trends, and make smarter financial decisions.
      </p>
      <button
        style={{
          background: '#ffd700',
          color: '#222',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 28px',
          fontWeight: 'bold',
          fontSize: '1rem',
          cursor: 'pointer',
          marginBottom: '32px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        }}
      >
        Analyze Now
      </button>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '32px' }}>
        <img
          src={image}
          alt="Analytics"
          style={{
            borderRadius: '18px',
            width: '240px',
            marginRight: '40px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          }}
        />
        <div style={{ textAlign: 'left', maxWidth: '400px' }}>
          <h3 style={{ color: '#ffd700' }}>Insights at a Glance</h3>
          <ul style={{ paddingLeft: '18px', fontSize: '1rem' }}>
            <li>See your top spending categories</li>
            <li>Track monthly and yearly trends</li>
            <li>Get personalized saving tips</li>
            <li>Visualize your progress with charts</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ExploreSection;
