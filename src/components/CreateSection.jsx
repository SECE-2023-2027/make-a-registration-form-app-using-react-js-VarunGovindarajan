import image from "./download.jpeg";

function CreateSection() {
  return (
    <section
      id="create"
      style={{
        padding: '60px 10vw',
        background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
        color: '#fff',
        borderRadius: '0 0 32px 32px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '2.2rem', marginBottom: '16px', color: '#ffd700' }}>
            Create Your Budget Plan
          </h1>
          <p style={{ fontSize: '1.1rem', marginBottom: '18px' }}>
            Start by adding your monthly income and expenses. Build a budget that works for you and helps you reach your savings goals.
          </p>
          <ul style={{ marginBottom: '18px', paddingLeft: '18px' }}>
            <li>Set up custom categories for your spending</li>
            <li>Track recurring bills and subscriptions</li>
            <li>Visualize your budget with easy charts</li>
          </ul>
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
            Start Creating
          </button>
        </div>
        <img
          src={image}
          alt="Budget Planning"
          style={{
            borderRadius: '18px',
            width: '240px',
            marginLeft: '40px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          }}
        />
      </div>
    </section>
  );
}

export default CreateSection;
