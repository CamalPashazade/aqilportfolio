import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404 - Not Found</h1>
      <p style={styles.text}>Sorry, the page you were looking for was not found.</p>
      <Link to="/" style={styles.link}>Return to home page</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  header: {
    fontSize: '48px',
    color: '#ff4d4f',
  },
  text: {
    fontSize: '20px',
    color: '#555',
  },
  link: {
    fontSize: '18px',
    color: '#1890ff',
    textDecoration: 'none',
    marginTop: '20px',
    display: 'inline-block',
  },
};

export default NotFound;
