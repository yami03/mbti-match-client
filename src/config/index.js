const ROOT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8081'
    : 'https://api.slaspace.com';

export default ROOT;
