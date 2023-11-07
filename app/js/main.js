$(function () {
  // Header menus and submenus

  $(".header-menu__item").on("click", function () {
    const $submenuWrapper = $(this).find(".header-submenu__wrapper");

    if ($submenuWrapper.hasClass("header__submenu--active")) {
      $submenuWrapper.removeClass("header__submenu--active");
    } else {
      $(".header-submenu__wrapper").removeClass("header__submenu--active");

      $submenuWrapper.addClass("header__submenu--active");
    }
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(".header-menu__item").length &&
      !$(e.target).closest(".header-submenu__wrapper").length
    ) {
      $(".header-submenu__wrapper").removeClass("header__submenu--active");
    }
  });

  $(".header-submenu__wrapper").on("mouseleave", function () {
    $(this).removeClass("header__submenu--active");
  });

  window.onscroll = function () {
    myFunction();
  };


});
