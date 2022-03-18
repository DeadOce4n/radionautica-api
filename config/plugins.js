module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-smtp',
      providerOptions: {
        host: 'mail.suprachat.net',
        port: 465,
        secure: true,
        username: 'no-reply@suprachat.net',
        password: 'AVeryStrongPasswordXdXd',
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1
      },
      settings: {
        defaultFrom: 'no-reply@suprachat.net',
        defaultReplyTo: 'admin@suprachat.net'
      }
    }
  }
})
