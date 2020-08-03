const API_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'LIVE_URL';

export default {
  API_URL,
};
