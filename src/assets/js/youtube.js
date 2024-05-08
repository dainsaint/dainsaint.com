function loadOnClick( event) {
  const youtube = event.target;
  const id = youtube.dataset.video;
  const iframe = document.createElement("iframe");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute(
    "src",
    `https://www.youtube.com/embed/${id}?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&color=white&autoplay=1`
  );


  youtube.innerHTML = "";
  youtube.style.backgroundImage = "";
  youtube.appendChild(iframe);
  youtube.removeEventListener("click", loadOnClick);
}

if( !window.initYoutube ) {
  
  document.addEventListener("DOMContentLoaded", function () {
    const youtubes = document.querySelectorAll(".js-youtube");
    youtubes.forEach((youtube) => {
      youtube.addEventListener("click", loadOnClick);
    });
  });

  window.initYoutube = true;
}
