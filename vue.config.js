module.exports = {
  pages: {
    home: {
      entry: 'src/pages/home/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'home page'
    },
    about: {
      entry: 'src/pages/about/main.js',
      template: 'public/about.html',
      filename: 'about.html',
      title: 'about page'
    }
  }
}