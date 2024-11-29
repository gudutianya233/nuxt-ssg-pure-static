import fs from 'fs'
 // https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules:['@element-plus/nuxt'],
  runtimeConfig: {
    public: {
     baseURL:'http://localhost:5000'
    }
  },
  experimental: {
    payloadExtraction: false
  },
  nitro:{
    prerender: {
      autoSubfolderIndex:true,
      crawlLinks:true,
      routes: JSON.parse(fs.readFileSync('routes.json', 'utf-8')),
    },
  },
  ssr:true
}) 
