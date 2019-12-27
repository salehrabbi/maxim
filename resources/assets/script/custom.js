$(".video-carosual").slick({
  slidesToShow: 5,
  dots: false,
  infinite: true,
  autoplay: true,
  prevArrow: '<i class="far fa-angle-left left"></i>',
  nextArrow: '<i class="far fa-angle-right right"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1
      }
    }
  ]
});

$(".more-doctor-slider").slick({
  slidesToShow: 4,
  dots: false,
  infinite: true,
  autoplay: true,
  prevArrow: '<i class="far fa-angle-left left"></i>',
  nextArrow: '<i class="far fa-angle-right right"></i>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1
      }
    }
  ]
});

$(".playerID").click(function() {
  var videoURL = $("#VdoID").attr("src"),
    dataplay = $("#VdoID").attr("data-play");
  $(".video").addClass("play");
  //for check autoplay
  //if not set autoplay=1
  if (dataplay == 0) {
    $("#VdoID").attr("src", videoURL + "?autoplay=1");
    $("#VdoID").attr("data-play", 1);
  } else {
    var videoURL = $("#VdoID").attr("src");
    videoURL = videoURL.replace("?autoplay=1", "");
    $("#VdoID").prop("src", "");
    $("#VdoID").prop("src", videoURL);

    $("#VdoID").attr("data-play", 0);
  }
});

// ============================== bg
// $(".faq .img-bg").css({ height: $(".faq").outerHeight() + "px" });
