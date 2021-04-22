module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
  env: {
    NEXT_SERVICE_ID: process.env.SERVICE_ID,
    NEXT_TEMPLATE_ID: process.env.TEMPLATE_ID,
    NEXT_USER_ID: process.env.USER_ID,
  },
};
