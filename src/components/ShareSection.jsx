import image from "./first.jpeg"
function ShareSection() {
  return (
    <section
      id="share"
      style={{
        padding: '60px 10vw',
        background: 'linear-gradient(135deg, #232526 0%, #0f2027 100%)',
        color: '#fff',
        borderRadius: '0 0 32px 32px',
      }}
    >
      <div style={{ backgroundColor: 'rgba(0,230,230,0.08)', borderRadius: '18px', padding: '32px', marginBottom: '32px' }}>
        <h1 style={{ color: '#ffd700', fontSize: '2.2rem', marginBottom: '12px' }}>Share Your Progress</h1>
        <p style={{ fontSize: '1.1rem', marginBottom: '18px' }}>
          Celebrate your financial achievements! Share your savings milestones or budgeting wins with friends and family, and inspire others to take control of their finances.
        </p>
        <button
          style={{
            background: '#00e6e6',
            color: '#222',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 28px',
            fontWeight: 'bold',
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
          }}
        >
          Share Now
        </button>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', justifyContent: 'center' }}>
        <img
          src={image}
          alt="Share Progress"
          style={{
            borderRadius: '18px',
            width: '220px',
            marginRight: '40px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          }}
        />
        <div style={{ textAlign: 'left', maxWidth: '400px' }}>
          <h3 style={{ color: '#ffd700' }}>Inspire Others</h3>
          <ul style={{ paddingLeft: '18px', fontSize: '1rem' }}>
            <li>Share your savings journey</li>
            <li>Motivate friends to start budgeting</li>
            <li>Celebrate reaching your goals</li>
            <li>Build a supportive community</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ShareSection;
