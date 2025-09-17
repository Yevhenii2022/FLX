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

      <?php if (have_rows('tabs')): ?>
        <div class="steps-block">
          <div class="steps-block__tabs">
            <?php
            $index = 1;
            while (have_rows('tabs')): the_row();
              $title = get_sub_field('title');
              $subtitle = get_sub_field('subtitle');
              $video = get_sub_field('video');
            ?>
              <div class="step-tab <?php echo $index === 1 ? 'active' : ''; ?>" data-video="<?php echo esc_url($video); ?>">
                <span class="step-number"><?php echo $index; ?>.</span>
                <h3 class="step-title"><?php echo esc_html($title); ?></h3>
                <?php if ($subtitle): ?>
                  <p class="step-subtitle"><?php echo esc_html($subtitle); ?></p>
                <?php endif; ?>
              </div>
            <?php
              $index++;
            endwhile;
            ?>
          </div>

          <div class="steps-block__video">
            <?php
            $first = get_field('tabs')[0]['video'] ?? '';
            if ($first): ?>
              <video loop id="custom-video" preload="auto" muted playsinline preload="metadata" controls>
                <source src="<?php echo $first; ?>#t=0.001" type="video/mp4">
                <source src="<?php echo $first; ?>#t=0.001" type="video/webm">
                <source src="<?php echo $first; ?>#t=0.001" type="video/ogg">
                <source src="<?php echo $first; ?>#t=0.001" type="video/quicktime">
                <source src="<?php echo $first; ?>#t=0.001" type="video/x-flv">
                <source src="<?php echo $first; ?>#t=0.001" type="video/x-msvideo">
              </video>
            <?php endif; ?>
          </div>
        </div>
      <?php endif; ?>

    </div>
  </div>
</section>