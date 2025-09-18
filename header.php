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
								<input id="search__input" type="search" class="header__input">
								<svg viewBox="0 0 19 19" fill="#959596">
									<path fill-rule="evenodd" d="M15 14.292a8 8 0 1 0-.707.707l2.353 2.355.708-.708-2.355-2.354ZM9 16A7 7 0 1 1 9 2a7 7 0 0 1 0 14Z" clip-rule="evenodd"></path>
								</svg>
							</div>
						</div>
					</div>
					<?php if ($phone) : ?>
						<a href="tel:+<?= $cleanedNumber ?>" class="header__phone--mob">
							<?= $phone ?>
						</a>
					<?php endif; ?>
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
		<button type='button' class="button button--mob">Fa op til 3 tilbud</button>