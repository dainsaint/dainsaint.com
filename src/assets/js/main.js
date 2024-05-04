// EMAILS
const encEmail = "aGVsbG9AZGFpbnNhaW50LmNvbQ==";
const emails = document.querySelectorAll("a[href='/email']");
emails.forEach( email => {
  email.setAttribute("href", `mailto:${atob(encEmail)}`);
  if( email.innerText == "" )
    email.innerText = atob(encEmail);
})


// OPY LINKS
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