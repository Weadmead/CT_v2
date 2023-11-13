document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tabs");
  const tabsBtn = document.querySelectorAll(".tabs__btn");
  const tabsContent = document.querySelectorAll(".tabs__content");

  if (tabs) {
    tabs.addEventListener("click", (e) => {
      if (e.target.classList.contains("tabs__btn")) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach((el) => {
          el.classList.remove("tabs__btn--active");
        });
        document
          .querySelector(`[data-tabs-path="${tabsPath}"]`)
          .classList.add("tabs__btn--active");
        tabsHandler(tabsPath);
      }
    });
  }

  const tabsHandler = (path) => {
    tabsContent.forEach((el) => {
      el.classList.remove("tabs__content--active");
    });
    document
      .querySelector(`[data-tabs-target="${path}"]`)
      .classList.add("tabs__content--active");
  };
});


// select hide 

document.addEventListener('DOMContentLoaded', function () {
  var contactMethodSelectSell = document.getElementById('form__contact-method-sell');
  var timeSelectLabel1 = document.getElementById('timeSelectLabel1');

  var contactMethodSelectBuy = document.getElementById('form__contact-method-buy');
  var timeSelectLabel2 = document.getElementById('timeSelectLabel2');

  function hideAllTimeSelects() {
    timeSelectLabel1.classList.add('select-hide');
    timeSelectLabel2.classList.add('select-hide');
  }

  hideAllTimeSelects();

  contactMethodSelectSell.addEventListener('change', function () {
    var selectedValue = contactMethodSelectSell.value;

    hideAllTimeSelects();

    if (selectedValue === 'phone') {
      timeSelectLabel1.classList.remove('select-hide');
    }
  });

  contactMethodSelectBuy.addEventListener('change', function () {
    var selectedValue = contactMethodSelectBuy.value;

    hideAllTimeSelects();

    if (selectedValue === 'phone') {
      timeSelectLabel2.classList.remove('select-hide');
    }
  });
});

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
