let mix = require('laravel-mix');

mix.js('src/js/app.js', 'js');
mix.sass('src/scss/style.scss', 'css');

mix.setPublicPath('dist');

mix.version();