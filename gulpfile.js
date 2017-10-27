var elixir = require('laravel-elixir');

elixir((mix) => {
	mix
	.sass('styles.scss', 'assets/css/styles.css', 'assets/sass')

	.scripts([
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/slick-carousel/slick/slick.min.js'], 
		'assets/js/all.js', './')
});
