module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e817aeac8267326afb7ff9262ea406da'),
  },
});
