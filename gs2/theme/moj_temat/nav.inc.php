<?php if(!defined('IN_GS')){ die('you cannot load this page directly.'); }?>

   <aside id="aside" role="complementary" class="js-fullheight text-center">
    <h1 id="logo">
      <a>
        <span class="img d-none d-lg-block" style="background-image: url(<?php get_theme_url(); ?>/images/logo_150px.png);"></span>
        ecg.vot.pl</a>
    </h1>
    <nav id="main-menu" role="navigation">
      <ul>

<?php get_i18n_navigation(return_page_slug(), 0, 0, I18N_SHOW_NORMAL); ?>
      </ul>
    </nav>
  </aside>