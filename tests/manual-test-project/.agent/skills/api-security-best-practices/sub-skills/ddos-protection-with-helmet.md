# DDoS Protection with Helmet

\`\`\`javascript
const helmet = require('helmet');

app.use(helmet({
  // Content Security Policy
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", 'data:', 'https:']
    }
  },
  // Prevent clickjacking
  frameguard: { action: 'deny' },
  // Hide X-Powered-By header
  hidePoweredBy: true,
  // Prevent MIME type sniffing
  noSniff: true,
  // Enable HSTS
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));
\`\`\`