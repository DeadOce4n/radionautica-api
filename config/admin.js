module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a5ece2665b1ca1e3499cadeeed125d5c'),
  },
});
