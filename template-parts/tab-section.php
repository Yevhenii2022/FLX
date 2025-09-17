<?php
$tabs_title = get_field('tabs_title') ?? '';
$tabs_subtitle = get_field('tabs_subtitle') ?? '';
?>

<section class="tab">
  <div class="container">
    <div class="tab__wrapper">

      <?php if (have_rows('list_items')) : ?>
        <ul class="tab__items">
          <?php while (have_rows('list_items')) :
            the_row();
            $title = get_sub_field('title'); ?>
            <?php if ($title) : ?>
              <li class="anim-card _anim-items">
                <p><?= $title ?></p>
              </li>
            <?php endif; ?>
          <?php endwhile; ?>
        </ul>
      <?php endif; ?>

      <?php if ($tabs_title) : ?>
        <h2 class="anim-title _anim-items"><?= $tabs_title ?></h2>
      <?php endif; ?>
      <?php if ($tabs_subtitle) : ?>
        <h3 class="anim-title _anim-items"><?= $tabs_subtitle ?></h3>
      <?php endif; ?>








    </div>
  </div>
</section>