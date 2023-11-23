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
      timeSelectLabel.classList.toggle(
        "select-hide",
        !radio.value.includes("phone")
      );
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
    handleRadioChange(
      contactByPhoneRadio,
      timeSelectLabel,
      contactByPhoneSpan,
      contactByEmailSpan
    );
  });

  contactByEmailRadio.addEventListener("change", function () {
    handleRadioChange(
      contactByEmailRadio,
      timeSelectLabel,
      contactByEmailSpan,
      contactByPhoneSpan
    );
  });

  contactByPhoneRadio2.addEventListener("change", function () {
    handleRadioChange(
      contactByPhoneRadio2,
      timeSelectLabel2,
      contactByPhoneSpanBuy,
      contactByEmailSpanBuy
    );
  });

  contactByEmailRadio2.addEventListener("change", function () {
    handleRadioChange(
      contactByEmailRadio2,
      timeSelectLabel2,
      contactByEmailSpanBuy,
      contactByPhoneSpanBuy
    );
  });
});

$(document).ready(function () {
  // Your existing code...

  // Function to close pop-ups
  function closePopups() {
    $(".about-content__popup").addClass("about-content__popup-hidden");
  }

  // Event listener for clicks outside the pop-up
  $(document).on("click", function (e) {
    // Check if the clicked element is not inside the pop-up
    if (
      !$(e.target).closest(".about-content__popup, .about-content__btns").length
    ) {
      closePopups();
    }
  });
});

$(function () {

  // Pop-ups
  // Function to close pop-ups
  function closePopups() {
    $(".popup").addClass("popup-hidden");
    $(".popup-appointment").addClass("popup-hidden");
    $(".popup-formbox").addClass("popup-hidden");
  }

  $(".appointment-btn").click(function () {
    closePopups();
    $(".popup").removeClass("popup-hidden");
    $(".popup-appointment").removeClass("popup-hidden");
  });

  $(".question-btn").click(function () {
    closePopups();
    $(".popup").removeClass("popup-hidden");
    $(".popup-formbox").removeClass("popup-hidden");
  });

  $(".popup-title").click(function () {
    closePopups();
  });

  $(".close-btn").click(function () {
    closePopups();
  });

  $(document).keydown(function (e) {
    if (e.key === "Escape") {
      closePopups();
    }
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(
        ".popup, .btns, .appointment-btn, .question-btn"
      ).length
    ) {
      closePopups();
    }
  });

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

  //slider
  $(".services-list").slick({
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 4,
    slideToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    horizontal: true,
    horizontalSwiping: true,
    touchThreshold: true,    
    prevArrow:
      '<button type="button" class="slick-prev"> <img src="images/icons/arrow-left2.svg" alt=""> </button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/icons/arrow-right2.svg" alt=""></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".services-list").on("wheel", function (e) {
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
      $(this).slick("slickNext");
    } else {
      $(this).slick("slickPrev");
    }
  });

  // section about btn
  $(".btn-toggle").click(function () {
    $(".about-content__text.hidden").toggleClass("hidden");
    $(this).addClass("btn-hidden");
  });


  $('.buying-guide__item-name').click(function () {
    let item = $(this).closest('.buying-guide__item');
    item.toggleClass('open');
  });
});
