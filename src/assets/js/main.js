// EMAILS
const encEmail = "aGVsbG9AZGFpbnNhaW50LmNvbQ==";
const emails = document.querySelectorAll("a[href^='/email']");
emails.forEach( email => {
  const replacement = `mailto:${atob(encEmail)}`
  const old = email.getAttribute("href");
  email.setAttribute("href", old.replace("/email", replacement));
  if( email.innerText == "" )
    email.innerText = atob(encEmail);
})


// COPY LINKS
const links = document.querySelectorAll(".copy-link");

links.forEach( link => {
  link.addEventListener("click", async event => {
    event.preventDefault();

    if( !navigator.clipboard )
      return;

    const text = event.target.href;


    try{
      await navigator.clipboard.writeText(text);
      const parent = event.target.parentNode;
      parent.classList.add( "message-visible" );
    
      setTimeout(() => parent.classList.remove("message-visible"), 2000);
    } catch(err) {
      console.error('Failed to copy!', err);
    }

    return false;
  })

})


// fancy quotes;
const quotes = document.querySelectorAll(".js-quote");

// quotes.forEach((quote) => {
//   const strong = quote.querySelector("strong");
//   const content = quote.dataset.quotes
//     .split(", ")
//     .map((pair) => pair.split("|"))
//     .map(([text, icon]) =>
//       text
//         .split("")
//         .map((letter) => `<b style="animation-delay: #s">${letter}</b>`)
//         .concat(`<i class="fa ${icon}" style="animation-delay: #s"></i>`)
//     )
//     .map( (text) => text.map( (el, i) => el.replace("#", (i * .05).toFixed(2))));

//   strong.classList.add("animate-words");
//   strong.innerHTML = content
//     .map((word) => `<span class="word">${word.join('')}</span>`)
//     .join("\r\n");

//   const cycle = () => {
//     const last = strong.querySelector(".is-dial-in") || strong.firstChild;
//     const next = last.nextElementSibling || strong.firstChild;
//     last.classList.remove("is-dial-in");
//     last.classList.add("is-dial-out");

//     next.classList.remove("is-dial-out");
//     next.classList.add("is-dial-in");
//   };

//   setInterval(cycle, 2000);
// });


quotes.forEach((quote) => {
  const strong = quote.querySelector("strong");
  const content = quote.dataset.quotes
    .split(", ")
    .map((pair) => pair.split("|"))
    .map(([text, icon]) => `${text} <i class="fa ${icon}"></i>`)
  
    strong.innerHTML = content.at( Math.floor( Math.random() * content.length - 1 ) )
  }
)


const loadTransitionData = async () => {
  const request = await fetch("/assets/data/transitions.json");
  const transitions = await request.json();

  window.transitions = transitions;

  const anchors = Array.from(document.getElementsByTagName("a"));

  anchors.forEach((anchor) => {
    if (!anchor.getAttribute("href")?.startsWith("/")) return;

    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      let destination = anchor.getAttribute("href")?.replace(/\/*$/, '');
      const style = window.transitions[destination] || {
        primary: "#573E79",
        contrast: "light"
      };
      
      document.querySelector(".header-main")?.classList.remove("is-open");
      
      document.body.classList.remove("transition-fade-in");
      document.body.classList.add("transition-fade-out");
      document.body.style.setProperty("--primary", style.primary );
      document.querySelector("header")?.classList.remove("light", "dark");
      document.querySelector("header")?.classList.add( style.contrast );

      setTimeout(() => {
        document.location = anchor.href;
      }, 500)
    });
  });

};

document.addEventListener("load", (e) => {
  
  if( document.referrer.startsWith( window.location.origin ) ) {
    document.body.classList.add("transition-fade-in");
  }
});

window.addEventListener("onpageshow", (e) => {
  if( e.persisted ) {
    document.body.classList.remove("transition-fade-in", "transition-fade-out");
  }
}


loadTransitionData();

