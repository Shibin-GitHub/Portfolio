window.onscroll = function () {
    let winScroll = document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    document.getElementById("progress-bar").style.width =
      (winScroll / height) * 100 + "%";
  };
  