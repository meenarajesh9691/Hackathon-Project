
$('.slide-box1').slick({
  infinite: true,
  // slidesToShow: 1,
  // slidesToScroll: 1
  arrows: true,
  dots: true,
});
$('.slide-box2').slick({
  infinite: true,
  // slidesToShow: 1,
  // slidesToScroll: 1
  arrows: true,
  dots: true,
});
$('.slide-box3').slick({
  infinite: true,
  // slidesToShow: 1,
  // slidesToScroll: 1
  arrows: true,
  dots: true,
});

const bookRoom = document.querySelector("#btn-book_room");


bookRoom.addEventListener("click", (e) => {
  e.preventDefault();

  var fullname = document.querySelector("#FULLNAME").value;
  var checkIn = document.querySelector("#CHECK-IN").value;
  var checkOut = document.querySelector("#CHECK-OUT").value;
  var Adults = document.querySelector("#ADULTS").value;
  var Children = document.querySelector("#CHILDREN").value;

  localStorage.setItem("fullname1", fullname);
  localStorage.setItem("checkIn1", checkIn);
  localStorage.setItem("checkOut1", checkOut);
  localStorage.setItem("Adults1", Adults);
  localStorage.setItem("Children1", Children);

  confirm("Rooms Data Set In Localstorage");
  
});
// localStorage.clear();

