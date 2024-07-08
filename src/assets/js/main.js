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
const quotes = document.querySelectorAll(".js-quote-animated");

quotes.forEach((quote) => {
  const strong = quote.querySelector("strong");
  const content = quote.dataset.quotes
    .split(", ")
    .map((pair) => pair.split("|"))
    .map(([text, icon]) =>
      text
        .split("")
        .map((letter) => `<b style="animation-delay: #s">${letter}</b>`)
        .concat(`<i class="fa ${icon}" style="animation-delay: #s"></i>`)
    )
    .map( (text) => text.map( (el, i) => el.replace("#", (i * .05).toFixed(2))));

  strong.classList.add("animate-words");
  strong.innerHTML = content
    .map((word) => `<span class="word">${word.join('')}</span>`)
    .join("\r\n");

  const cycle = () => {
    const last = strong.querySelector(".is-dial-in") || strong.firstChild;
    const next = last.nextElementSibling || strong.firstChild;
    last.classList.remove("is-dial-in");
    last.classList.add("is-dial-out");

    next.classList.remove("is-dial-out");
    next.classList.add("is-dial-in");
  };

  setInterval(cycle, 2000);
});


const static = document.querySelectorAll(".js-quote");

static.forEach((quote) => {
  const strong = quote.querySelector("strong");
  const content = quote.dataset.quotes
    .split(", ")
    .map((pair) => pair.split("|"))
    .map(([text, icon]) => `${text} <i class="fa ${icon}"></i>`);

  strong.innerHTML = content.at(Math.floor(Math.random() * content.length - 1));
});


//sizing

const updatePageMetrics = () => {
   const bounds = document
     .querySelector(".header-main")
     ?.getBoundingClientRect();
   document.body.style.setProperty("--header-height", bounds.height + "px");
}

const observer = new ResizeObserver( updatePageMetrics )
observer.observe(document.querySelector(".header-main"));


//transitioning

const setThemeColor = (color) => {
  const themeColorTag = document.querySelector('meta[name="theme-color"]');
  themeColorTag?.setAttribute("content", color);
};

const getThemeColor = () => {
  const themeColorTag = document.querySelector('meta[name="theme-color"]');
  return themeColorTag?.getAttribute("content") || "#573E79";
}



const applyTransition = (destination) => {
  destination = destination.replace(/\/*$/, "");
  const style = window.transitions[destination] || {
    primary: "#573E79",
    contrast: "light",
  };

  document.body.style.setProperty("--primary", style.primary);
  document.querySelector("header")?.classList.remove("light", "dark");
  document.querySelector("header")?.classList.add(style.contrast);
  setThemeColor(style.primary);
}

const prepareExit = () => {
  document.querySelector(".header-main")?.classList.remove("is-open");
  document.body.classList.remove("transition-fade-in");
  document.body.style.setProperty("--primary", getThemeColor() );

  setTimeout( () => document.body.classList.add("transition-fade-out"), 1 );
}

const loadTransitionData = async () => {
  const request = await fetch("/assets/data/transitions.json");
  const transitions = await request.json();

  window.transitions = transitions;
};

const initializeLinks = () => {
  const anchors = Array.from(document.getElementsByTagName("a"))
    .filter( anchor => anchor.getAttribute("href")?.startsWith("/") );

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      prepareExit();
      setTimeout(() => applyTransition(anchor.getAttribute("href")), 5);
      setTimeout(() => document.location = anchor.href, 500);
    });
  });
}

const updateRandomPost = () => {
  const random = document.getElementById("random-post");
  if(!random || !window.transitions)
    return;

  const slugs = Object.keys(window.transitions);
  const slug = slugs[Math.floor(Math.random() * slugs.length)];
  const post = window.transitions[slug];

  random?.setAttribute("href", slug);
  random.innerHTML = post.title;
}


const monitorThemeColor = () => {
  const originalColor = getThemeColor();

  let onscreen = [];
 
  const updateThemeColor = (entries) => {
    entries.forEach( entry => {
      if( entry.isIntersecting ) {
        const  color = getComputedStyle(entry.target).backgroundColor;
        setThemeColor( color );
        onscreen.push( entry.target );

      } else {
        const i = onscreen.find( x => x == entry.target );
        onscreen.splice(i, 1);
        if( !onscreen.length ) setThemeColor( originalColor );
      }
    })
  }

  let observer = new IntersectionObserver(updateThemeColor, {
    rootMargin: "0px 0px -100% 0px"
  });

  document.querySelectorAll(".colorize").forEach( block => {
    observer.observe(block);
  })
}


document.addEventListener("DOMContentLoaded", (e) => {
  loadTransitionData()
    .then(()=>{
      initializeLinks();
      updateRandomPost();
    });

  monitorThemeColor();
  updatePageMetrics();
})

window.addEventListener("pageshow", (e) => {
  if (e.persisted) {
    document.body.classList.remove("transition-fade-out");
    applyTransition( window.location.pathname );
  }
});


