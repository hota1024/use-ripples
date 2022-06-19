const path = require('path')
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js'
})

/** @type {import('next').NextConfig} */
module.exports = withNextra({
  reactStrictMode: true,
  webpack(config, options) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')

    return config
  }
})
