let ROOT, SOCKET_ROOT;

if (process.env.NODE_ENV === 'development') {
  ROOT = 'http://localhost:8081';
  SOCKET_ROOT = 'http://localhost:8081';
} else {
  ROOT = 'http://api.slaspace.com';
  SOCKET_ROOT = 'http://13.125.6.54:8080';
}

export const config = {
  ROOT,
  SOCKET_ROOT
};
