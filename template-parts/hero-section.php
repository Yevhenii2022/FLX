<?php
$title = get_field('title') ?? '';
$subtitle = get_field('subtitle') ?? '';
?>

<section class="hero">
    <div class="container">
        <div class="hero__wrapper">

            <div class="hero__wrapper--center">
                <?php if ($title) : ?>
                    <?= $title ?>
                <?php endif; ?>
                <?php if ($subtitle) : ?>
                    <p class="anim-title _anim-items"><?= $subtitle ?></p>
                <?php endif; ?>

                <div class="hero__box">
                    <div class="anim-card _anim-items"><button type='button' class="button">Find revisor</button></div>
                    <div class="anim-card _anim-items"><button type='button' class="button">Find bogholder</button></div>
                </div>
            </div>

            <div class="form  anim-card _anim-items">
                <?php echo do_shortcode('[contact-form-7 id="c4ea21f" title="Contact Form"]') ?>
            </div>

        </div>
    </div>
</section>