$(".video-carosual").slick({slidesToShow:5,dots:!1,infinite:!0,autoplay:!0,prevArrow:'<i class="far fa-angle-left left"></i>',nextArrow:'<i class="far fa-angle-right right"></i>',responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:3}},{breakpoint:576,settings:{slidesToShow:2}}]}),$(".more-doctor-slider").slick({slidesToShow:4,dots:!1,infinite:!0,autoplay:!0,prevArrow:'<i class="far fa-angle-left left"></i>',nextArrow:'<i class="far fa-angle-right right"></i>',responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]}),$(".playerID").click(function(){var a=$("#VdoID").attr("src"),t=$("#VdoID").attr("data-play");($(".video").addClass("play"),0==t)?($("#VdoID").attr("src",a+"?autoplay=1"),$("#VdoID").attr("data-play",1)):(a=(a=$("#VdoID").attr("src")).replace("?autoplay=1",""),$("#VdoID").prop("src",""),$("#VdoID").prop("src",a),$("#VdoID").attr("data-play",0))}),$('[data-toggle="slide-collapse"]').on("click",function(){$("body").toggleClass("active"),$(".overlay-full").toggleClass("active")});