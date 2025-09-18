<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package pointer_theme
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<?php // This script uses for phone mask 
	?>
	<script src="https://unpkg.com/imask"></script>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page">
		<header class="header">
			<div class="container">
				<div class="header__wrapper">

					<div class="header__logo">
						<?= get_custom_logo(); ?>
					</div>
					<div class="header__content">
						<div class="header__left">
							<nav class="header__nav nav">
								<?php
								wp_nav_menu(
									array(
										'container' => 'ul',
										'theme_location' => 'header_menu',
										'menu_class' => 'nav__list',
									)
								);
								?>
							</nav>
						</div>

						<div class="header__right">

							<?php
							$phone = get_field('phone', 'options');
							$cleanedNumber = preg_replace('/\D/', '', $phone);
							?>
							<?php if ($phone) : ?>
								<a href="tel:+<?= $cleanedNumber ?>" class="header__phone">
									<?= $phone ?>
								</a>
							<?php endif; ?>

							<button type='button' class="button">Fa op til 3 tilbud</button>

							<div class="header__search">
								<button type="button">
									<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50">
										<circle cx="25" cy="25" r="22" fill="#fff" opacity=".5" />
										<path fill="#fff" d="m22 18 10 7-10 7z" />
									</svg>
								</button>
							</div>





						</div>
					</div>

					<div class="header__mobile-menu">
						<div class="header__burger">
							<span class="header__burger-top"></span>
							<span class="header__burger-middle"></span>
							<span class="header__burger-bottom"></span>
						</div>
					</div>

				</div>
			</div>
		</header>