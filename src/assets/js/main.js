const encEmail = "aGVsbG9AZGFpbnNhaW50LmNvbQ==";
const emails = document.querySelectorAll("a[href='/email']");
emails.forEach( email => {
  email.setAttribute("href", `mailto:${atob(encEmail)}`);
  if( email.innerText == "" )
    email.innerText = atob(encEmail);
})

console.log( emails );

const links = document.querySelectorAll(".copy-link");

links.forEach( link => {
  link.addEventListener("click", async event => {
    event.preventDefault();

    if( !navigator.clipboard )
      return;

    const text = event.target.href;


    try{
      await navigator.clipboard.writeText(text);
      event.target.parentNode.classList.add( "message-visible" );
      // console.log('Copied to clipboard', event);
    } catch(err) {
      console.error('Failed to copy!', err);
    }

    return false;
  })

})

const imgs = document.querySelectorAll("img.blur")

imgs.forEach( img => {
  img.addEventListener("load", event => {
    img.classList.remove("blur");
    img.removeAttribute("style");
  })
})
