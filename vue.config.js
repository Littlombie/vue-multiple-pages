const path = require('path');
const fs = require('fs');

const config = {
  entry: 'main.js',
  html: 'index.html',
  pagesRoot: path.resolve(__dirname, 'src/pages')
};

const genRoutes = () => {
  const allRoutes = [];

  const findAllRoutes = (source, routes) => {
    const files = fs.readdirSync(source);
    files.forEach(filename => {
      const fullname = path.join(source, filename);
      const stats = fs.statSync(fullname);
      if (!stats.isDirectory()) return;
      if (fs.existsSync(`${fullname}/${config.html}`)) {
        routes.push(fullname);
      } else {
        findAllRoutes(fullname, routes);
      }
    });
  };
  findAllRoutes(config.pagesRoot, allRoutes);
  return allRoutes;
};

const genPages = () => {
  const pages = {};
  genRoutes().forEach(route => {
    const filename = route.slice(config.pagesRoot.length + 1);
    pages[filename] = {
      entry: `${route}/${config.entry}`,
      template: `${route}/${config.html}`,
      filename: filename === 'index' ? config.html : `${filename}/${config.html}`,
      title: `${filename}`
    };
   });
   return pages;
};
const pages = genPages();

module.exports = {
  productionSourceMap: false,
  pages,
  chainWebpack: config => {
    Object.keys(pages).forEach(entryName => {
      config.plugins.delete(`prefetch-${entryName}`);
    });
    if (process.env.NODE_ENV === 'production') {
      config.plugins('extract-css').tap(() => [
        {
          filename: '[name]/css/[name].[contenthash:8].css',
          chunkFilename: '[name]/css/[name].[contenthash:8].css'
        }
      ]);
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output = {
        path: path.join(__dirname, './dist'),
        filename: '[name]/js/[name].[contenthash:8].js',
        publicPath: '/',
        chunkFilename: '[name]/js/[name].[contenthash:8].js'
      }
    }
  }
}

// module.exports = {
//   pages: {
//     home: {
//       // page 的入口
//       entry: 'src/pages/home/main.js',
//       // 模板来源
//       template: 'public/index.html',
//       // 在 dist/index.html 的输出
//       filename: 'index.html',
//       // 当使用 title 选项时，
//       // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
//       title: 'home page'
//     },
//     about: {
//       entry: 'src/pages/about/main.js',
//       template: 'public/about.html',
//       filename: 'about.html',
//       title: 'about page'
//     }
//   }
// }