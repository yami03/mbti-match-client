let ROOT, SOCKET_ROOT;

if (process.env.NODE_ENV === 'development') {
  ROOT = 'http://localhost:8081';
  SOCKET_ROOT = 'http://localhost:8081';
} else {
  ROOT = 'https://api.slaspace.com';
  SOCKET_ROOT = 'https://api.slaspace.com';
}

export const config = {
  ROOT,
  SOCKET_ROOT
};
