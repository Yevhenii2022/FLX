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
										'container'   => 'ul',
										'theme_location' => 'header_menu',
										'menu_class'  => 'nav__list',
										'items_wrap'  => '<ul id="%1$s" class="%2$s"><li>Hjem</li>%3$s</ul>',
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

						<div class="header__socials">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
								<path fill="#d9d9d9" d="M16.5 7h-2.3c-.4 0-.7.4-.7.9V10h2.9l-.4 3.4h-2.5V21H10v-7.6H8.5V10H10V9c0-2.2 1.2-3.9 4-3.9 1.1 0 2 .1 2.5.1V7z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
								<path fill="#d9d9d9" d="M7.6 20h-3V9.5h3V20zM6.1 7.3c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 20h-3v-5.3c0-1.4-.1-3.2-2.2-3.2-2.2 0-2.5 1.7-2.5 3.1V20h-3V9.5h2.8v1.4h.1c.5-.9 1.7-1.8 3.5-1.8 3.5 0 4.3 2.2 4.3 5.1V20z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
								<rect width="19" height="19" x="2.5" y="2.5" stroke="#d9d9d9" stroke-width="2" rx="5" ry="5" />
								<circle cx="12" cy="12" r="5" stroke="#d9d9d9" stroke-width="2" />
								<circle cx="17.5" cy="6.5" r="1.5" fill="#d9d9d9" />
							</svg>
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