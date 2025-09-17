<?php
$title = get_field('title') ?? '';
$subtitle = get_field('subtitle') ?? '';
?>

<section class="hero">
    <div class="container">
        <div class="hero__wrapper">

            <div>
                <?php if ($title) : ?>
                    <?= $title ?>
                <?php endif; ?>
                <?php if ($subtitle) : ?>
                    <p class="anim-title _anim-items"><?= $subtitle ?></p>
                <?php endif; ?>

                <div class="hero__box">
                    <button type='button' class="button anim-card _anim-items">Find revisor</button>
                    <button type='button' class="button anim-card _anim-items">Find bogholder</button>
                </div>
            </div>

            <div class="form  anim-card _anim-items">
                <?php echo do_shortcode('[contact-form-7 id="c4ea21f" title="Contact Form"]') ?>
            </div>

        </div>
    </div>
</section>