import SignupForm from './SignupForm';

function HomeSection() {
  return (
    <section
      id="home"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '60px 10vw',
        minHeight: '80vh',
        background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 100%)',
        color: '#fff',
      }}
    >
      <div style={{ maxWidth: '600px', marginRight: '40px' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '20px', lineHeight: 1.2 }}>
          Take Control of Your <span style={{ color: '#ffd700', fontWeight: 'bold' }}>Finances</span>
          <br />with <span style={{ color: '#00e6e6', fontWeight: 'bold' }}>Smart Tracking</span>
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '10px' }}>
          Track your expenses, set savings goals, and manage your budget—all in one place.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
          Visualize your spending habits and make smarter financial decisions.
        </p>
        <p style={{ fontSize: '1rem', color: '#e0e0e0' }}>
          Join thousands who are achieving financial freedom with our easy-to-use tools!
        </p>
      </div>
      <div
        style={{
          background: '#fff',
          color: '#222',
          borderRadius: '18px',
          boxShadow: '0 8px 32px rgba(30,60,114,0.18)',
          padding: '36px 28px',
          minWidth: '340px',
          maxWidth: '380px',
        }}
      >
        <SignupForm />
      </div>
    </section>
  );
}

export default HomeSection;
