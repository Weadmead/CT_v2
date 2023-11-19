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

// select hide sell/buy form MAIN PAGE
document.addEventListener("DOMContentLoaded", function () {
  function handleRadioChange(radio, timeSelectLabel, activeSpan, inactiveSpan) {
    if (radio.checked) {
      timeSelectLabel.classList.toggle("select-hide", !radio.value.includes("phone"));
      activeSpan.classList.add("active");
      inactiveSpan.classList.remove("active");
    }
  }

  const contactByPhoneRadio = document.querySelector('input[value="phone"]');
  const contactByPhoneRadio2 = document.querySelector('input[value="phone2"]');
  const contactByEmailRadio = document.querySelector('input[value="email"]');
  const contactByEmailRadio2 = document.querySelector('input[value="email2"]');
  const timeSelectLabel = document.querySelector(".select__label");
  const contactByPhoneSpan = document.getElementById("phoneSpan");
  const contactByEmailSpan = document.getElementById("emailSpan");
  const contactByPhoneSpanBuy = document.getElementById("phoneSpan-buy");
  const contactByEmailSpanBuy = document.getElementById("emailSpan-buy");

  contactByPhoneRadio.addEventListener("change", function () {
    handleRadioChange(contactByPhoneRadio, timeSelectLabel, contactByPhoneSpan, contactByEmailSpan);
  });

  contactByEmailRadio.addEventListener("change", function () {
    handleRadioChange(contactByEmailRadio, timeSelectLabel, contactByEmailSpan, contactByPhoneSpan);
  });

  contactByPhoneRadio2.addEventListener("change", function () {
    handleRadioChange(contactByPhoneRadio2, timeSelectLabel2, contactByPhoneSpanBuy, contactByEmailSpanBuy);
  });

  contactByEmailRadio2.addEventListener("change", function () {
    handleRadioChange(contactByEmailRadio2, timeSelectLabel2, contactByEmailSpanBuy, contactByPhoneSpanBuy);
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
