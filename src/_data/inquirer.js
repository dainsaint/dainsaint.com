const parser = require("node-html-parser");

const page = `
<div class="block sm:grid sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-x-6 sm:px-5">
  <div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="3RGDPWQBONAKNN6WHDL5EPSHRE" data-card-author="Samantha Melamed|Dain Saint"
        data-card-content-title="Exploring the scale of Philly’s juvenile detention problem"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/crime/inq2/juvenile-detention-philly-data-comparison-20250114.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-illustration-depicti-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/7TUDK742PBH4VOOOXV455UBWPU.png?auth=4cf7e79b1d91d69b08526236453d2b185ed8715f940392baae85e891ac849d13&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/7TUDK742PBH4VOOOXV455UBWPU.png?auth=4cf7e79b1d91d69b08526236453d2b185ed8715f940392baae85e891ac849d13&amp;width=800&amp;height=533&amp;smart=true 800w,https://www.inquirer.com/resizer/v2/7TUDK742PBH4VOOOXV455UBWPU.png?auth=4cf7e79b1d91d69b08526236453d2b185ed8715f940392baae85e891ac849d13&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/7TUDK742PBH4VOOOXV455UBWPU.png?auth=4cf7e79b1d91d69b08526236453d2b185ed8715f940392baae85e891ac849d13&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/7TUDK742PBH4VOOOXV455UBWPU.png?auth=4cf7e79b1d91d69b08526236453d2b185ed8715f940392baae85e891ac849d13&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/7TUDK742PBH4VOOOXV455UBWPU.png?auth=4cf7e79b1d91d69b08526236453d2b185ed8715f940392baae85e891ac849d13&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Illustration depicting abuses in Pennsylvania's juvenile justice system."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image">Youth Justice</div><a
                href="/crime/inq2/juvenile-detention-philly-data-comparison-20250114.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Exploring the scale of Philly’s
                  juvenile detention problem</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/crime/inq2/juvenile-detention-philly-data-comparison-20250114.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Cities nationwide are turning away from
                        juvenile institutions, noting widespread abuses. Philly has fallen behind.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/melamed_samantha/"
                              data-card-author="Samantha Melamed">Samantha Melamed</a> and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2025-01-14T05:00:38-05:00"
                            class="inline-block type-article-details text-secondary inline ">Jan. 14, 2025</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="SPOEPBLDCRFMPFPFPBKI6NTNHY"
        data-card-author="Sam Morris|Jasen Lo|Charmaine Runes|Dain Saint"
        data-card-content-title="Pa. State House and Senate general election 2024 results"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/2024-state-election-voting-results-pennsylvania-20241105.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-live-election-result-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/HWNXUGEV2FCCDBQQ6WMPA5E3S4.jpg?auth=4629a2b9ebaa1d491914a30a4b24768aff855e8f4956b242af1e3afb89ec7aff&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/HWNXUGEV2FCCDBQQ6WMPA5E3S4.jpg?auth=4629a2b9ebaa1d491914a30a4b24768aff855e8f4956b242af1e3afb89ec7aff&amp;width=800&amp;height=533&amp;smart=true 800w,https://www.inquirer.com/resizer/v2/HWNXUGEV2FCCDBQQ6WMPA5E3S4.jpg?auth=4629a2b9ebaa1d491914a30a4b24768aff855e8f4956b242af1e3afb89ec7aff&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/HWNXUGEV2FCCDBQQ6WMPA5E3S4.jpg?auth=4629a2b9ebaa1d491914a30a4b24768aff855e8f4956b242af1e3afb89ec7aff&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/HWNXUGEV2FCCDBQQ6WMPA5E3S4.jpg?auth=4629a2b9ebaa1d491914a30a4b24768aff855e8f4956b242af1e3afb89ec7aff&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/HWNXUGEV2FCCDBQQ6WMPA5E3S4.jpg?auth=4629a2b9ebaa1d491914a30a4b24768aff855e8f4956b242af1e3afb89ec7aff&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Live election results on inquirer.com" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/2024-state-election-voting-results-pennsylvania-20241105.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Pa. State House and Senate general
                  election 2024 results</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/2024-state-election-voting-results-pennsylvania-20241105.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">See live updates for the Pennsylvania House of
                        Representatives and state Senate.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-11-05T05:00:49-05:00"
                            class="inline-block type-article-details text-secondary inline ">Nov. 5, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="V3VKFY6JLFHHNFFVHR27ADLWMA" data-card-author="Dain Saint"
        data-card-content-title="Project 2025 aims to ‘protect America’s families.’ What would that actually mean for Pennsylvanians?"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/policy/inq2/project-2025-women-children-pennsylvania-20241017.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-how-could-project-20-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/RWBEL5RYNVFOTN63EZKELCNN54.jpg?auth=7d135d46d1ff08b59cfeb15d9dd1588cc894795297cdfcf61d411e0d8d78677c&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/RWBEL5RYNVFOTN63EZKELCNN54.jpg?auth=7d135d46d1ff08b59cfeb15d9dd1588cc894795297cdfcf61d411e0d8d78677c&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/RWBEL5RYNVFOTN63EZKELCNN54.jpg?auth=7d135d46d1ff08b59cfeb15d9dd1588cc894795297cdfcf61d411e0d8d78677c&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/RWBEL5RYNVFOTN63EZKELCNN54.jpg?auth=7d135d46d1ff08b59cfeb15d9dd1588cc894795297cdfcf61d411e0d8d78677c&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/RWBEL5RYNVFOTN63EZKELCNN54.jpg?auth=7d135d46d1ff08b59cfeb15d9dd1588cc894795297cdfcf61d411e0d8d78677c&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="How could Project 2025 impact Pennsylvanians?" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/policy" title="Policy">Policy</a></div><a
                href="/policy/inq2/project-2025-women-children-pennsylvania-20241017.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Project 2025 aims to ‘protect America’s
                  families.’ What would that actually mean for Pennsylvanians?</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/policy/inq2/project-2025-women-children-pennsylvania-20241017.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Look at how some of the proposed changes in
                        the 922-page document will impact your neighbors.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-10-17T05:00:45-04:00"
                            class="inline-block type-article-details text-secondary inline ">Oct. 17, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="MCAODESVHBAZZAO2TZPTW7VIGY" data-card-author="Dain Saint|Sam Morris"
        data-card-content-title="How the I-95 cap project will reconnect Philadelphians to the Delaware waterfront"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/news/philadelphia/inq2/i95-cap-construction-project-philadelphia-chinatown-stitch-20240821.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-rendering-of-the-pro-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/E4UM36GY2BGSBGCHC2SJNAQHUE.png?auth=be79ceef975ed43f5ce9d3bd1c41a4fd8ea8805d74b91eac57332445fb0320fa&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/E4UM36GY2BGSBGCHC2SJNAQHUE.png?auth=be79ceef975ed43f5ce9d3bd1c41a4fd8ea8805d74b91eac57332445fb0320fa&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/E4UM36GY2BGSBGCHC2SJNAQHUE.png?auth=be79ceef975ed43f5ce9d3bd1c41a4fd8ea8805d74b91eac57332445fb0320fa&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/E4UM36GY2BGSBGCHC2SJNAQHUE.png?auth=be79ceef975ed43f5ce9d3bd1c41a4fd8ea8805d74b91eac57332445fb0320fa&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/E4UM36GY2BGSBGCHC2SJNAQHUE.png?auth=be79ceef975ed43f5ce9d3bd1c41a4fd8ea8805d74b91eac57332445fb0320fa&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Rendering of the proposed Park at Penns Landing" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/news/philadelphia" title="Philadelphia News">Philadelphia News</a>
              </div><a
                href="/news/philadelphia/inq2/i95-cap-construction-project-philadelphia-chinatown-stitch-20240821.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">How the I-95 cap project will reconnect
                  Philadelphians to the Delaware waterfront</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/news/philadelphia/inq2/i95-cap-construction-project-philadelphia-chinatown-stitch-20240821.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Similar to other projects in Boston and
                        Pittsburgh, Philadelphia is starting to “cap” major roads to reclaim space lost to highways.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a> and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a></span><time datetime="2024-08-21T05:00:56-04:00"
                            class="inline-block type-article-details text-secondary inline ">Aug. 21, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="OGDA7IQVDFCC5G6ZY3XAPSKO7E" data-card-author="Dain Saint"
        data-card-content-title="What would you rename the Wells Fargo Center?" data-card-content-section="sports">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/sports/inq2/wells-fargo-center-generator-naming-rights-20240731.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-illustration-of-the--caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/MVJTVG5WRNH6DLPF35R2MSOH5M.png?auth=f9956beb8c0383fa819e121b8dd885c34d943dfe717e070a6073e0202ad7e121&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/MVJTVG5WRNH6DLPF35R2MSOH5M.png?auth=f9956beb8c0383fa819e121b8dd885c34d943dfe717e070a6073e0202ad7e121&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/MVJTVG5WRNH6DLPF35R2MSOH5M.png?auth=f9956beb8c0383fa819e121b8dd885c34d943dfe717e070a6073e0202ad7e121&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/MVJTVG5WRNH6DLPF35R2MSOH5M.png?auth=f9956beb8c0383fa819e121b8dd885c34d943dfe717e070a6073e0202ad7e121&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/MVJTVG5WRNH6DLPF35R2MSOH5M.png?auth=f9956beb8c0383fa819e121b8dd885c34d943dfe717e070a6073e0202ad7e121&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Illustration of the Wells Fargo signage being taken off the Wells Fargo Center"
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/sports" title="Sports">Sports</a></div><a
                href="/sports/inq2/wells-fargo-center-generator-naming-rights-20240731.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">What would you rename the Wells Fargo
                  Center?</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/sports/inq2/wells-fargo-center-generator-naming-rights-20240731.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Wells Fargo is not renewing the naming rights
                        deal for the arena. So let’s workshop some options.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-07-31T05:00:03-04:00"
                            class="inline-block type-article-details text-secondary inline ">July 31, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="GB3K4XYVMRC6RJ2MW77QVIR46U"
        data-card-author="Sam Morris|Jasen Lo|Charmaine Runes|Dain Saint"
        data-card-content-title="New Jersey primary election 2024 results " data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/new-jersey-2024-primary-election-results-senate-president-menendez-20240604.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-new-jersey-primary-e-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/FXH2A45LMVHIPGCOGPYATD25JA.jpg?auth=b4c138e57cc9f337665ea97f5ae5f445d78aa7e2f9eacd928e681dba28b4842b&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/FXH2A45LMVHIPGCOGPYATD25JA.jpg?auth=b4c138e57cc9f337665ea97f5ae5f445d78aa7e2f9eacd928e681dba28b4842b&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/FXH2A45LMVHIPGCOGPYATD25JA.jpg?auth=b4c138e57cc9f337665ea97f5ae5f445d78aa7e2f9eacd928e681dba28b4842b&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/FXH2A45LMVHIPGCOGPYATD25JA.jpg?auth=b4c138e57cc9f337665ea97f5ae5f445d78aa7e2f9eacd928e681dba28b4842b&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/FXH2A45LMVHIPGCOGPYATD25JA.jpg?auth=b4c138e57cc9f337665ea97f5ae5f445d78aa7e2f9eacd928e681dba28b4842b&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="New Jersey primary election 2024 results" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/new-jersey-2024-primary-election-results-senate-president-menendez-20240604.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">New Jersey primary election 2024
                  results </h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/new-jersey-2024-primary-election-results-senate-president-menendez-20240604.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Updates from the 2024 Democratic and
                        Republican NJ primaries for President, Senate, and House.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-06-04T05:00:02-04:00"
                            class="inline-block type-article-details text-secondary inline ">June 4, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="WZ6OOWDAFNERRHWJ3P4A7JJ2IE"
        data-card-author="Sam Morris|Jasen Lo|Charmaine Runes|Dain Saint"
        data-card-content-title="Pa. State House and Senate primary election 2024 results"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/pennsylvania-house-senate-2024-primary-election-results-20240423.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-pa.-state-legislatur-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/QSHPZJBVWFGFJMBXP7VF7HP4FY.jpg?auth=a07dac0b6c466ba526bd43787c7914423a6111e5801a418fe2b3d27ea218d14e&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/QSHPZJBVWFGFJMBXP7VF7HP4FY.jpg?auth=a07dac0b6c466ba526bd43787c7914423a6111e5801a418fe2b3d27ea218d14e&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/QSHPZJBVWFGFJMBXP7VF7HP4FY.jpg?auth=a07dac0b6c466ba526bd43787c7914423a6111e5801a418fe2b3d27ea218d14e&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/QSHPZJBVWFGFJMBXP7VF7HP4FY.jpg?auth=a07dac0b6c466ba526bd43787c7914423a6111e5801a418fe2b3d27ea218d14e&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/QSHPZJBVWFGFJMBXP7VF7HP4FY.jpg?auth=a07dac0b6c466ba526bd43787c7914423a6111e5801a418fe2b3d27ea218d14e&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Pa. State legislature primary election results for 2024"
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/pennsylvania-house-senate-2024-primary-election-results-20240423.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Pa. State House and Senate primary
                  election 2024 results</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/pennsylvania-house-senate-2024-primary-election-results-20240423.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Live results from the 2024 Pennsylvania
                        General Assembly Democratic and Republican primaries.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-04-23T05:00:01-04:00"
                            class="inline-block type-article-details text-secondary inline ">April 23, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="UER4T5JAWJASZOSGQLDVJTLURE"
        data-card-author="Dain Saint|Sam Morris|Jasen Lo|Charmaine Runes"
        data-card-content-title="A horse galloped down I-95 this week. Play our game to see how far you can make it."
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a href="/news/philadelphia/inq2/horse-i-95-highway-game-20240222.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-how-far-can-you-run--caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/ND5BX5ESVVBP3NZ2LCJGB57JKM.jpg?auth=820b609f50c7f8786e3b5119c0b26768739d45c743cd4d0a0b71d20ab729a9b4&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/ND5BX5ESVVBP3NZ2LCJGB57JKM.jpg?auth=820b609f50c7f8786e3b5119c0b26768739d45c743cd4d0a0b71d20ab729a9b4&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/ND5BX5ESVVBP3NZ2LCJGB57JKM.jpg?auth=820b609f50c7f8786e3b5119c0b26768739d45c743cd4d0a0b71d20ab729a9b4&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/ND5BX5ESVVBP3NZ2LCJGB57JKM.jpg?auth=820b609f50c7f8786e3b5119c0b26768739d45c743cd4d0a0b71d20ab729a9b4&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/ND5BX5ESVVBP3NZ2LCJGB57JKM.jpg?auth=820b609f50c7f8786e3b5119c0b26768739d45c743cd4d0a0b71d20ab729a9b4&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="How far can you run down I-95?" sizes="(min-width: 480px) 400px, 450px" decoding="async">
                    </div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/news/philadelphia" title="Philadelphia News">Philadelphia News</a>
              </div><a href="/news/philadelphia/inq2/horse-i-95-highway-game-20240222.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">A horse galloped down I-95 this week.
                  Play our game to see how far you can make it.</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a href="/news/philadelphia/inq2/horse-i-95-highway-game-20240222.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">On Tuesday, a horse ran along I-95 from Kelly
                        Drive to Port Richmond. Play our game to see if you can beat him.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a></span><time
                            datetime="2024-02-22T05:00:00-05:00"
                            class="inline-block type-article-details text-secondary inline ">Feb. 22, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="KRGJARNQHVG2XD7AK42WZCKE4I"
        data-card-author="Charmaine Runes|Ximena Conde|Sam Morris|Jasen Lo|Dain Saint"
        data-card-content-title="I-95 bridge collapse: What happened, the detours, and what happens next"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/news/philadelphia/inq2/i95-collapse-tanker-explosion-location-detours-septa-20230612.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-detours-are-in-place-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/TPQG5YFBLJAXJCBBQQXOPPCDRI.png?auth=2cc018521b67b873db1c8807114ce9f1b1f14a04a039994ecf764eb25140cd63&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/TPQG5YFBLJAXJCBBQQXOPPCDRI.png?auth=2cc018521b67b873db1c8807114ce9f1b1f14a04a039994ecf764eb25140cd63&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/TPQG5YFBLJAXJCBBQQXOPPCDRI.png?auth=2cc018521b67b873db1c8807114ce9f1b1f14a04a039994ecf764eb25140cd63&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/TPQG5YFBLJAXJCBBQQXOPPCDRI.png?auth=2cc018521b67b873db1c8807114ce9f1b1f14a04a039994ecf764eb25140cd63&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Detours are in place for I-95 in both directions with southbound motorists only able to go as far as the Cottman Avenue exit in June 2023."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/news/philadelphia" title="Philadelphia News">Philadelphia News</a>
              </div><a href="/news/philadelphia/inq2/i95-collapse-tanker-explosion-location-detours-septa-20230612.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">I-95 bridge collapse: What happened,
                  the detours, and what happens next</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/news/philadelphia/inq2/i95-collapse-tanker-explosion-location-detours-septa-20230612.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Mapping out everything we know so far about
                        the I-95 bridge collapse</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/conde_ximena/"
                              data-card-author="Ximena Conde">Ximena Conde</a>, <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2023-06-12T17:18:54-04:00"
                            class="inline-block type-article-details text-secondary inline ">June 12, 2023</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="6A63Q7NUAJBPBPFIRFQZKE3JJQ" data-card-author="Dain Saint|Charmaine Runes|Sam Morris"
        data-card-content-title="Which Philly mayoral candidate do you align with the most? Take our test and find out."
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/philadelphia/inq2/philadelphia-mayoral-candidates-quiz-domb-gym-rhynhart-brown-parker-voting-20230503.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-which-philly-mayoral-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/DVQEMMUEWVHZ7CVTGPP4EWWI5A.jpg?auth=ad70394475a5c24bfafe6e26219912909ac23349095ae57e49110f3705f858b4&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/DVQEMMUEWVHZ7CVTGPP4EWWI5A.jpg?auth=ad70394475a5c24bfafe6e26219912909ac23349095ae57e49110f3705f858b4&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/DVQEMMUEWVHZ7CVTGPP4EWWI5A.jpg?auth=ad70394475a5c24bfafe6e26219912909ac23349095ae57e49110f3705f858b4&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/DVQEMMUEWVHZ7CVTGPP4EWWI5A.jpg?auth=ad70394475a5c24bfafe6e26219912909ac23349095ae57e49110f3705f858b4&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/DVQEMMUEWVHZ7CVTGPP4EWWI5A.jpg?auth=ad70394475a5c24bfafe6e26219912909ac23349095ae57e49110f3705f858b4&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Which Philly mayoral candidate do you overlap with?"
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/philadelphia" title="Philadelphia Politics">Philadelphia
                  Politics</a></div><a
                href="/politics/philadelphia/inq2/philadelphia-mayoral-candidates-quiz-domb-gym-rhynhart-brown-parker-voting-20230503.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Which Philly mayoral candidate do you
                  align with the most? Take our test and find out.</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/philadelphia/inq2/philadelphia-mayoral-candidates-quiz-domb-gym-rhynhart-brown-parker-voting-20230503.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Take our quiz and find out your “political
                        thumbprint,” a visual representation of your political beliefs. We’ll then tell you who of the
                        mayoral candidates has the most and least in common with you.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a></span><time datetime="2023-05-03T05:00:01-04:00"
                            class="inline-block type-article-details text-secondary inline ">May 3, 2023</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="HH5HRPK2ERHF5ORHN3ZWPLPNNE"
        data-card-author="Dain Saint|Charmaine Runes|Lauren Schneiderman|Jenna Miller"
        data-card-content-title="Finding the words: Philadelphian poets share their secrets to crafting poetry"
        data-card-content-section="entertainment">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/arts/inq2/poetry-elements-definition-rhyme-meter-imagery-structure-20230411.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-for-national-poetry--caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/SLCE6FQN55DDDHLKBLGU4NP6Q4.jpg?auth=b33516051a4eed3ad88c7364a5cfd6d685ab63b24999257568436201c639b2c2&amp;focal=2290,975&amp;width=760&amp;height=507"
                        srcset="https://www.inquirer.com/resizer/v2/SLCE6FQN55DDDHLKBLGU4NP6Q4.jpg?auth=b33516051a4eed3ad88c7364a5cfd6d685ab63b24999257568436201c639b2c2&amp;focal=2290,975&amp;width=700&amp;height=467 700w,https://www.inquirer.com/resizer/v2/SLCE6FQN55DDDHLKBLGU4NP6Q4.jpg?auth=b33516051a4eed3ad88c7364a5cfd6d685ab63b24999257568436201c639b2c2&amp;focal=2290,975&amp;width=600&amp;height=400 600w,https://www.inquirer.com/resizer/v2/SLCE6FQN55DDDHLKBLGU4NP6Q4.jpg?auth=b33516051a4eed3ad88c7364a5cfd6d685ab63b24999257568436201c639b2c2&amp;focal=2290,975&amp;width=500&amp;height=333 500w,https://www.inquirer.com/resizer/v2/SLCE6FQN55DDDHLKBLGU4NP6Q4.jpg?auth=b33516051a4eed3ad88c7364a5cfd6d685ab63b24999257568436201c639b2c2&amp;focal=2290,975&amp;width=400&amp;height=267 400w"
                        alt="For National Poetry Month, we asked four local Philly poets to break down the fundamentals of poetry."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/arts" title="Arts &amp; Culture">Arts &amp; Culture</a></div><a
                href="/arts/inq2/poetry-elements-definition-rhyme-meter-imagery-structure-20230411.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Finding the words: Philadelphian poets
                  share their secrets to crafting poetry</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/arts/inq2/poetry-elements-definition-rhyme-meter-imagery-structure-20230411.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">For National Poetry Month, we asked four local
                        Philly poets to break down the fundamentals of poetry.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/schneiderman_lauren/"
                              data-card-author="Lauren Schneiderman">Lauren Schneiderman</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/miller_jenna/" data-card-author="Jenna Miller">Jenna
                              Miller</a></span><time datetime="2023-04-11T05:00:45-04:00"
                            class="inline-block type-article-details text-secondary inline ">April 11, 2023</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="GU4EDLHSEJEP5LS5WJYM54R67Q"
        data-card-author="Patricia Madej|Sam Morris|Jasen Lo|Dain Saint"
        data-card-content-title="Pennsylvania Senate election results 2022: Did John Fetterman or Mehmet Oz win?"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/election-results-2022-pennsylvania-senate-winner-20221108.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-u.s.-senate-race-res-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/UVUB744IHRAVXAQVSO65RCEJXY.jpg?auth=eb69a368ed554e060bcb53c0486a9b4a4164be96c8e31f634c7f4f84a3889baf&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/UVUB744IHRAVXAQVSO65RCEJXY.jpg?auth=eb69a368ed554e060bcb53c0486a9b4a4164be96c8e31f634c7f4f84a3889baf&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/UVUB744IHRAVXAQVSO65RCEJXY.jpg?auth=eb69a368ed554e060bcb53c0486a9b4a4164be96c8e31f634c7f4f84a3889baf&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/UVUB744IHRAVXAQVSO65RCEJXY.jpg?auth=eb69a368ed554e060bcb53c0486a9b4a4164be96c8e31f634c7f4f84a3889baf&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/UVUB744IHRAVXAQVSO65RCEJXY.jpg?auth=eb69a368ed554e060bcb53c0486a9b4a4164be96c8e31f634c7f4f84a3889baf&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="U.S. Senate Race Results: Fetterman v Oz" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image"><a
                  data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election/"
                  title="PA 2022 - {logo:https://media.inquirer.com/designimages/PA 2022.svg}"><img
                    src="https://media.inquirer.com/designimages/PA 2022.svg" alt="PA 2022  logo" class="h-5 ml-1"></a>
              </div><a href="/politics/election/election-results-2022-pennsylvania-senate-winner-20221108.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Pennsylvania Senate election results
                  2022: Did John Fetterman or Mehmet Oz win?</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/election-results-2022-pennsylvania-senate-winner-20221108.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">See the results in the Pennsylvania Senate
                        race as they come in.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/madej_patricia/"
                              data-card-author="Patricia Madej">Patricia Madej</a>, <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2022-11-08T20:25:06-05:00"
                            class="inline-block type-article-details text-secondary inline ">Nov. 8, 2022</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="RNGQJJXWWBDJNI4LPIOHMWFCMQ" data-card-author="Sam Morris|Jasen Lo|Dain Saint"
        data-card-content-title="See the 2022 Pennsylvania primary results" data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/pennsylvania-primary-results-2022-20220517.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-live-results-for-the-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/WYYOOVL2TRAINEYZQV3AR2R354.jpg?auth=39c1181ba657d3527b85956e4f03f2fccb3fd1996d40e4aa002ba561eb5992ff&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/WYYOOVL2TRAINEYZQV3AR2R354.jpg?auth=39c1181ba657d3527b85956e4f03f2fccb3fd1996d40e4aa002ba561eb5992ff&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/WYYOOVL2TRAINEYZQV3AR2R354.jpg?auth=39c1181ba657d3527b85956e4f03f2fccb3fd1996d40e4aa002ba561eb5992ff&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/WYYOOVL2TRAINEYZQV3AR2R354.jpg?auth=39c1181ba657d3527b85956e4f03f2fccb3fd1996d40e4aa002ba561eb5992ff&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/WYYOOVL2TRAINEYZQV3AR2R354.jpg?auth=39c1181ba657d3527b85956e4f03f2fccb3fd1996d40e4aa002ba561eb5992ff&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Live results for the 2022 Pennsylvanian Primaries" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/pennsylvania-primary-results-2022-20220517.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">See the 2022 Pennsylvania primary
                  results</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/pennsylvania-primary-results-2022-20220517.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">The Pennsylvania primary is on May 17. Follow
                        along for live results of the U.S. Senate, governor, and U.S House races.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2022-05-17T07:00:01-04:00"
                            class="inline-block type-article-details text-secondary inline ">May 17, 2022</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="IMOL4EY2FRACBEOP5XLIPFBQ44" data-card-author="Dain Saint"
        data-card-content-title="Between being Black and mixed in America, a hope for the future | Wildest Dreams"
        data-card-content-section="life">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/life/inq2/between-being-black-mixed-america-hope-future-wildest-dreams-20211123.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-is-there-a-better-fu-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/QBEIK2HVEZA47AZKNKGY4EJ4P4.jpg?auth=0bfbe0c51458c0ca78d324c6a6599590f17afd78e9aa700d29d9703d2deaa7a7&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/QBEIK2HVEZA47AZKNKGY4EJ4P4.jpg?auth=0bfbe0c51458c0ca78d324c6a6599590f17afd78e9aa700d29d9703d2deaa7a7&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/QBEIK2HVEZA47AZKNKGY4EJ4P4.jpg?auth=0bfbe0c51458c0ca78d324c6a6599590f17afd78e9aa700d29d9703d2deaa7a7&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/QBEIK2HVEZA47AZKNKGY4EJ4P4.jpg?auth=0bfbe0c51458c0ca78d324c6a6599590f17afd78e9aa700d29d9703d2deaa7a7&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/QBEIK2HVEZA47AZKNKGY4EJ4P4.jpg?auth=0bfbe0c51458c0ca78d324c6a6599590f17afd78e9aa700d29d9703d2deaa7a7&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Is there a better future in store for Black and mixed people, or will it be more of the same?"
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image"><a
                  data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/life/inq2/wildest-dreams-black-family-legacy-20210915.html"
                  title="Wildest Dreams">Wildest Dreams</a></div><a
                href="/life/inq2/between-being-black-mixed-america-hope-future-wildest-dreams-20211123.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Between being Black and mixed in
                  America, a hope for the future | Wildest Dreams</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/life/inq2/between-being-black-mixed-america-hope-future-wildest-dreams-20211123.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">I was promised a post-racial utopia that never
                        materialized. What now?</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2021-11-23T05:00:22-05:00"
                            class="inline-block type-article-details text-secondary inline ">Nov. 23, 2021</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="7NQQ3RVJTFDFBIWFXDOJPQI77I"
        data-card-author="Dain Saint|Craig R. McCoy|Tommy Rowan|Valerie Russ"
        data-card-content-title="Black and Blue: 190 years of police brutality against Black people in Philadelphia"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card--focused inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/news/inq/philadelphia-police-brutality-history-frank-rizzo-20200710.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-featured-image-for-b-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/OCVKHLIPPRB6FGELOULL72FXA4.jpg?auth=3aafc8304e4f1f19cdc7b8f1a4bca8fb709b9b95e45dd924741783c3eb3f1ad1&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/OCVKHLIPPRB6FGELOULL72FXA4.jpg?auth=3aafc8304e4f1f19cdc7b8f1a4bca8fb709b9b95e45dd924741783c3eb3f1ad1&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/OCVKHLIPPRB6FGELOULL72FXA4.jpg?auth=3aafc8304e4f1f19cdc7b8f1a4bca8fb709b9b95e45dd924741783c3eb3f1ad1&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/OCVKHLIPPRB6FGELOULL72FXA4.jpg?auth=3aafc8304e4f1f19cdc7b8f1a4bca8fb709b9b95e45dd924741783c3eb3f1ad1&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/OCVKHLIPPRB6FGELOULL72FXA4.jpg?auth=3aafc8304e4f1f19cdc7b8f1a4bca8fb709b9b95e45dd924741783c3eb3f1ad1&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Featured image for Black and Blue project" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image"><a
                  data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/special-reports/" title="Special Report">Special Report</a></div><a
                href="/news/inq/philadelphia-police-brutality-history-frank-rizzo-20200710.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Black and Blue: 190 years of police
                  brutality against Black people in Philadelphia</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/news/inq/philadelphia-police-brutality-history-frank-rizzo-20200710.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">These are some of the key events in the
                        painful history of police violence against the Black community in Philadelphia, a glimpse into
                        the legacy of racially discriminatory law enforcement in this city.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/mccoy_craig_r/"
                              data-card-author="Craig R. McCoy">Craig R. McCoy</a>, <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/rowan_tommy/" data-card-author="Tommy Rowan">Tommy
                              Rowan</a>, and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/russ_valerie/"
                              data-card-author="Valerie Russ">Valerie Russ</a></span><time
                            datetime="2020-07-10T05:00:00-04:00"
                            class="inline-block type-article-details text-secondary inline ">July 10, 2020</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
  </div>
  <div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="U3B3DA2LMVB73LLLP2FMEJTMWA"
        data-card-author="Sam Morris|Dain Saint|Jasen Lo|Charmaine Runes"
        data-card-content-title="The Inquirer’s best interactives of 2024" data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a href="/news/inq2/year-in-interactives-best-visual-stories-20241219.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-year-in-interactives-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/THKM2NRM2BCS3LE74YPMZMZBHM.jpg?auth=a2c056415557ddbb45dd4c265eeeb1a3ece6eecf9e60b357ad0f9a0cf8dea53b&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/THKM2NRM2BCS3LE74YPMZMZBHM.jpg?auth=a2c056415557ddbb45dd4c265eeeb1a3ece6eecf9e60b357ad0f9a0cf8dea53b&amp;width=800&amp;height=533&amp;smart=true 800w,https://www.inquirer.com/resizer/v2/THKM2NRM2BCS3LE74YPMZMZBHM.jpg?auth=a2c056415557ddbb45dd4c265eeeb1a3ece6eecf9e60b357ad0f9a0cf8dea53b&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/THKM2NRM2BCS3LE74YPMZMZBHM.jpg?auth=a2c056415557ddbb45dd4c265eeeb1a3ece6eecf9e60b357ad0f9a0cf8dea53b&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/THKM2NRM2BCS3LE74YPMZMZBHM.jpg?auth=a2c056415557ddbb45dd4c265eeeb1a3ece6eecf9e60b357ad0f9a0cf8dea53b&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/THKM2NRM2BCS3LE74YPMZMZBHM.jpg?auth=a2c056415557ddbb45dd4c265eeeb1a3ece6eecf9e60b357ad0f9a0cf8dea53b&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Year in Interactives 2024" sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/news" title="News">News</a></div><a
                href="/news/inq2/year-in-interactives-best-visual-stories-20241219.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">The Inquirer’s best interactives of
                  2024</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a href="/news/inq2/year-in-interactives-best-visual-stories-20241219.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Our favorite visual stories from the past
                        twelve months</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a></span><time
                            datetime="2024-12-17T05:00:00-05:00"
                            class="inline-block type-article-details text-secondary inline ">Dec. 17, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="X5RUWHYF2JFXFKJ7NA5DKNV6BA"
        data-card-author="Sam Morris|Jasen Lo|Charmaine Runes|Dain Saint"
        data-card-content-title="Pennsylvania general election 2024 results" data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/2024-election-voting-results-pennsylvania-20241105.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-live-election-result-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/GFT6GJLKGBH5PAXC32YVPR2FWU.jpg?auth=38358410b1b22dbbcab1ad7f406e7efc2668fa472abb5eeb3db5dbed6ab38992&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/GFT6GJLKGBH5PAXC32YVPR2FWU.jpg?auth=38358410b1b22dbbcab1ad7f406e7efc2668fa472abb5eeb3db5dbed6ab38992&amp;width=800&amp;height=533&amp;smart=true 800w,https://www.inquirer.com/resizer/v2/GFT6GJLKGBH5PAXC32YVPR2FWU.jpg?auth=38358410b1b22dbbcab1ad7f406e7efc2668fa472abb5eeb3db5dbed6ab38992&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/GFT6GJLKGBH5PAXC32YVPR2FWU.jpg?auth=38358410b1b22dbbcab1ad7f406e7efc2668fa472abb5eeb3db5dbed6ab38992&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/GFT6GJLKGBH5PAXC32YVPR2FWU.jpg?auth=38358410b1b22dbbcab1ad7f406e7efc2668fa472abb5eeb3db5dbed6ab38992&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/GFT6GJLKGBH5PAXC32YVPR2FWU.jpg?auth=38358410b1b22dbbcab1ad7f406e7efc2668fa472abb5eeb3db5dbed6ab38992&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Live election results on inquirer.com" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/2024-election-voting-results-pennsylvania-20241105.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Pennsylvania general election 2024
                  results</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/2024-election-voting-results-pennsylvania-20241105.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">See live updates as Pennsylvania counts
                        ballots for president, the U.S. Senate and Congress.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-11-05T05:00:34-05:00"
                            class="inline-block type-article-details text-secondary inline ">Nov. 5, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="7OJN5E2T25BT5M36EAZO7YWUEE" data-card-author="Dain Saint"
        data-card-content-title="Presidential Debate Bingo: Play along as Harris and Trump meet tonight in Philadelphia"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/presidential-debate-bingo-card-trump-harris-20240910.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-bingo-social-topper--caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/LICVZHASRVFSRKMU3J4FGRK4IQ.png?auth=d7d980e93f9b373fc2121eee3c92a42a8dd61c843cc32fcf19287b8408ea8a77&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/LICVZHASRVFSRKMU3J4FGRK4IQ.png?auth=d7d980e93f9b373fc2121eee3c92a42a8dd61c843cc32fcf19287b8408ea8a77&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/LICVZHASRVFSRKMU3J4FGRK4IQ.png?auth=d7d980e93f9b373fc2121eee3c92a42a8dd61c843cc32fcf19287b8408ea8a77&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/LICVZHASRVFSRKMU3J4FGRK4IQ.png?auth=d7d980e93f9b373fc2121eee3c92a42a8dd61c843cc32fcf19287b8408ea8a77&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/LICVZHASRVFSRKMU3J4FGRK4IQ.png?auth=d7d980e93f9b373fc2121eee3c92a42a8dd61c843cc32fcf19287b8408ea8a77&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Bingo social topper illustration" sizes="(min-width: 480px) 400px, 450px" decoding="async">
                    </div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/presidential-debate-bingo-card-trump-harris-20240910.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Presidential Debate Bingo: Play along
                  as Harris and Trump meet tonight in Philadelphia</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/presidential-debate-bingo-card-trump-harris-20240910.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Follow the debate with our interactive,
                        randomized bingo card and see if you can connect the dots during tonight's debate between Trump
                        and Harris at the National Constitution Center in Philadelphia</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-09-10T05:00:39-04:00"
                            class="inline-block type-article-details text-secondary inline ">Sept. 10, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="V5PQ4NOYWJEOLJSRHNFQGO4X4A" data-card-author="Dain Saint|Matt Mullin"
        data-card-content-title="Philly at the Paris Olympics: Local athletes at the games and when they’re scheduled to compete"
        data-card-content-section="sports">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/sports/inq2/olympic-medal-tracker-2024-summer-philadelphia-athletes-20240725.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-photo-collage-of-ash-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/RMIQYQW2EFAXHPEVFLM5TX5EKA.png?auth=4c4fe36b7aba47fcdcdc1446db47e7b1d66ca2e759b6cf382e42a3b2a813e414&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/RMIQYQW2EFAXHPEVFLM5TX5EKA.png?auth=4c4fe36b7aba47fcdcdc1446db47e7b1d66ca2e759b6cf382e42a3b2a813e414&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/RMIQYQW2EFAXHPEVFLM5TX5EKA.png?auth=4c4fe36b7aba47fcdcdc1446db47e7b1d66ca2e759b6cf382e42a3b2a813e414&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/RMIQYQW2EFAXHPEVFLM5TX5EKA.png?auth=4c4fe36b7aba47fcdcdc1446db47e7b1d66ca2e759b6cf382e42a3b2a813e414&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/RMIQYQW2EFAXHPEVFLM5TX5EKA.png?auth=4c4fe36b7aba47fcdcdc1446db47e7b1d66ca2e759b6cf382e42a3b2a813e414&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Photo collage of Ashley Sessa, Boyd Martin, Joel Embiid, and Sunny Choi — Philadelphia area athletes competing in the 2024 Summer Olympics in Paris"
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/sports" title="Sports">Sports</a></div><a
                href="/sports/inq2/olympic-medal-tracker-2024-summer-philadelphia-athletes-20240725.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Philly at the Paris Olympics: Local
                  athletes at the games and when they’re scheduled to compete</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/sports/inq2/olympic-medal-tracker-2024-summer-philadelphia-athletes-20240725.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">There are over 60 athletes with ties to the
                        Philly area competing in the Paris Olympics. Here's a look at who they are and when they're
                        competing.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a> and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/mullin_matt/" data-card-author="Matt Mullin">Matt
                              Mullin</a></span><time datetime="2024-08-08T00:17:37-04:00"
                            class="inline-block type-article-details text-secondary inline ">Aug. 8, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="J5H7TKU6INBGFKAP274VXBMQI4" data-card-author="Jasen Lo|Dain Saint|Sam Morris"
        data-card-content-title="Choose or Lose: Who would you like to see as Kamala Harris’ VP choice?"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/kamala-harris-vp-pick-vote-choose-or-lose-shapiro-20240724.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-header-image-for-kam-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/EDO2DUNDKNBG7CN3OVMJAZAPEY.png?auth=a4a4742f228c645610ecb38d31d0807467c004672e708be5303390fe106c2eb8&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/EDO2DUNDKNBG7CN3OVMJAZAPEY.png?auth=a4a4742f228c645610ecb38d31d0807467c004672e708be5303390fe106c2eb8&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/EDO2DUNDKNBG7CN3OVMJAZAPEY.png?auth=a4a4742f228c645610ecb38d31d0807467c004672e708be5303390fe106c2eb8&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/EDO2DUNDKNBG7CN3OVMJAZAPEY.png?auth=a4a4742f228c645610ecb38d31d0807467c004672e708be5303390fe106c2eb8&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/EDO2DUNDKNBG7CN3OVMJAZAPEY.png?auth=a4a4742f228c645610ecb38d31d0807467c004672e708be5303390fe106c2eb8&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Header image for Kamala Harris Choose or Lose" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/kamala-harris-vp-pick-vote-choose-or-lose-shapiro-20240724.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Choose or Lose: Who would you like to
                  see as Kamala Harris’ VP choice?</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/kamala-harris-vp-pick-vote-choose-or-lose-shapiro-20240724.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Let us know who you would like to see join the
                        Democratic ticket.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a></span><time datetime="2024-07-24T05:00:04-04:00"
                            class="inline-block type-article-details text-secondary inline ">July 24, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="XZCQJMIX5JHIHPICIPBYF45B4Y" data-card-author="Dain Saint|Charmaine Runes"
        data-card-content-title="South? Washington? Snyder? Tell us where South Philly really begins."
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/news/philadelphia/inq2/south-philly-philadelphia-snyder-washington-streets-neighborhood-boundary-20240522.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-illustration-of-sout-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/KT3NNEC6RNFDTC4SOHZAJJZEHE.jpg?auth=9aa00495781e011592746ab068a8632726a612fc7856b22ca4f530639e6fd7b5&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/KT3NNEC6RNFDTC4SOHZAJJZEHE.jpg?auth=9aa00495781e011592746ab068a8632726a612fc7856b22ca4f530639e6fd7b5&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/KT3NNEC6RNFDTC4SOHZAJJZEHE.jpg?auth=9aa00495781e011592746ab068a8632726a612fc7856b22ca4f530639e6fd7b5&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/KT3NNEC6RNFDTC4SOHZAJJZEHE.jpg?auth=9aa00495781e011592746ab068a8632726a612fc7856b22ca4f530639e6fd7b5&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/KT3NNEC6RNFDTC4SOHZAJJZEHE.jpg?auth=9aa00495781e011592746ab068a8632726a612fc7856b22ca4f530639e6fd7b5&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Illustration of South Philly (masked)" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/news/philadelphia" title="Philadelphia News">Philadelphia News</a>
              </div><a
                href="/news/philadelphia/inq2/south-philly-philadelphia-snyder-washington-streets-neighborhood-boundary-20240522.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">South? Washington? Snyder? Tell us
                  where South Philly really begins.</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/news/philadelphia/inq2/south-philly-philadelphia-snyder-washington-streets-neighborhood-boundary-20240522.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Tell us where you think Philly's most
                        well-known neighborhood starts, and see what our readers say.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a> and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a></span><time
                            datetime="2024-05-22T05:00:17-04:00"
                            class="inline-block type-article-details text-secondary inline ">May 22, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="opinion-story-card"
        data-card-content-id="BMDBK76WQBCDPOQQA36T4RN4HY" data-card-author="Dain Saint"
        data-card-content-title="I rode the I-95 horse. Here’s what it meant." data-card-content-section="life">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/life/inq2/i-95-horse-freeway-fletcher-st-urban-riding-club-20240412.html"
                data-link-type="opinion-story-card" data-card-type="opinion-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-inquirer’s-dain-sain-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/Y2YGNOT2UVH53BC2SPNLNSULCY.jpg?auth=75370529145a4aac7528d813cfe4eba94ed0a4c622b2610fb59b7b043935eb01&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/Y2YGNOT2UVH53BC2SPNLNSULCY.jpg?auth=75370529145a4aac7528d813cfe4eba94ed0a4c622b2610fb59b7b043935eb01&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/Y2YGNOT2UVH53BC2SPNLNSULCY.jpg?auth=75370529145a4aac7528d813cfe4eba94ed0a4c622b2610fb59b7b043935eb01&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/Y2YGNOT2UVH53BC2SPNLNSULCY.jpg?auth=75370529145a4aac7528d813cfe4eba94ed0a4c622b2610fb59b7b043935eb01&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/Y2YGNOT2UVH53BC2SPNLNSULCY.jpg?auth=75370529145a4aac7528d813cfe4eba94ed0a4c622b2610fb59b7b043935eb01&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Inquirer’s Dain Saint rides Freeway the horse at the Fletcher St. Urban Riding Club, Thursday, March 14, 2024."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="inq-eyebrow type-opinion-eyebrow inq-eyebrow--site inq-eyebrow--opinion">
                <div class="inq-eyebrow--text"><a data-link-type="opinion-story-card-eyebrow"
                    data-card-type="opinion-story-card" href="https://www.inquirer.com/opinion"
                    title="Opinion">Opinion</a></div>
              </div><a href="/life/inq2/i-95-horse-freeway-fletcher-st-urban-riding-club-20240412.html"
                data-link-type="opinion-story-card" data-card-type="opinion-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">I rode the I-95 horse. Here’s what it
                  meant.</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/life/inq2/i-95-horse-freeway-fletcher-st-urban-riding-club-20240412.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">The Fletcher St. Urban Riding Club is a rugged
                        patch of farm in the middle of Strawberry Mansion. I rode there for the first time in decades.
                      </p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-04-12T06:00:02-04:00"
                            class="inline-block type-article-details text-secondary inline ">April 12, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="4IGK37OFNZGCZGXQYA522Y5C7Y" data-card-author="Charmaine Runes|Sam Morris|Dain Saint"
        data-card-content-title="Can you pick the ‘real’ shade of kelly green? It’s harder than you think."
        data-card-content-section="sports">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a href="/eagles/inq2/eagles-kelly-green-vote-shade-pantone-20231214.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-illustrated-grid-of--caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/7VBMTT6MXRCRLA76XDVDQDTK44.png?auth=fef4a34719a8537192dff0e74ef7a19eeb1383f271d265b320b72528f4c8ea23&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/7VBMTT6MXRCRLA76XDVDQDTK44.png?auth=fef4a34719a8537192dff0e74ef7a19eeb1383f271d265b320b72528f4c8ea23&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/7VBMTT6MXRCRLA76XDVDQDTK44.png?auth=fef4a34719a8537192dff0e74ef7a19eeb1383f271d265b320b72528f4c8ea23&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/7VBMTT6MXRCRLA76XDVDQDTK44.png?auth=fef4a34719a8537192dff0e74ef7a19eeb1383f271d265b320b72528f4c8ea23&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/7VBMTT6MXRCRLA76XDVDQDTK44.png?auth=fef4a34719a8537192dff0e74ef7a19eeb1383f271d265b320b72528f4c8ea23&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Illustrated grid of Eagles jerseys in varying shades of green"
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/eagles" title="Eagles/NFL">Eagles/NFL</a></div><a
                href="/eagles/inq2/eagles-kelly-green-vote-shade-pantone-20231214.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Can you pick the ‘real’ shade of kelly
                  green? It’s harder than you think.</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a href="/eagles/inq2/eagles-kelly-green-vote-shade-pantone-20231214.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Let’s settle a colorful debate over the
                        Eagle’s iconic shade of green. What's the official shade — and what do fans think it is?</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2023-12-14T05:00:02-05:00"
                            class="inline-block type-article-details text-secondary inline ">Dec. 14, 2023</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="HKJVR2PMTJER5G3T2HVHOESGHA"
        data-card-author="Sam Morris|Charmaine Runes|Dain Saint|Jasen Lo"
        data-card-content-title="How the night unfolded: Cherelle Parker prevails in Mayoral Primary"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/parker-philly-democrat-mayor-unfolded-night-20230517.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-supporters-of-democr-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/LHJ6OSST5ZG2VHKTRZON5XRR7A.JPG?auth=2ba10cbbd62878145b0e6ce40fd695ac7629c3806d1aada3a5a72516b36d9115&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/LHJ6OSST5ZG2VHKTRZON5XRR7A.JPG?auth=2ba10cbbd62878145b0e6ce40fd695ac7629c3806d1aada3a5a72516b36d9115&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/LHJ6OSST5ZG2VHKTRZON5XRR7A.JPG?auth=2ba10cbbd62878145b0e6ce40fd695ac7629c3806d1aada3a5a72516b36d9115&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/LHJ6OSST5ZG2VHKTRZON5XRR7A.JPG?auth=2ba10cbbd62878145b0e6ce40fd695ac7629c3806d1aada3a5a72516b36d9115&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/LHJ6OSST5ZG2VHKTRZON5XRR7A.JPG?auth=2ba10cbbd62878145b0e6ce40fd695ac7629c3806d1aada3a5a72516b36d9115&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Supporters of Democratic candidate for mayor Cherelle Parker hug on stage afer speaking on her behalf at her watch party."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/parker-philly-democrat-mayor-unfolded-night-20230517.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">How the night unfolded: Cherelle Parker
                  prevails in Mayoral Primary</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/parker-philly-democrat-mayor-unfolded-night-20230517.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">When and where the votes came from throughout
                        the night as the AP called the race for Parker.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen
                              Lo</a></span><time datetime="2023-05-17T05:00:02-04:00"
                            class="inline-block type-article-details text-secondary inline ">May 17, 2023</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="CTJ5A5BDDVBK7EZERPYBBTGRU4" data-card-author="Dain Saint"
        data-card-content-title="5 Philly poems for National Poetry Month" data-card-content-section="entertainment">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a href="/arts/inq2/philadelphia-poems-national-poetry-month-20230413.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-five-poems-art-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/X3CVENSQIBAMZLURTZANLVCXGU.jpg?auth=8aaa091c006422a4cdfb5d864c868c48fc2552f0052d31350efffdc455064815&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/X3CVENSQIBAMZLURTZANLVCXGU.jpg?auth=8aaa091c006422a4cdfb5d864c868c48fc2552f0052d31350efffdc455064815&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/X3CVENSQIBAMZLURTZANLVCXGU.jpg?auth=8aaa091c006422a4cdfb5d864c868c48fc2552f0052d31350efffdc455064815&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/X3CVENSQIBAMZLURTZANLVCXGU.jpg?auth=8aaa091c006422a4cdfb5d864c868c48fc2552f0052d31350efffdc455064815&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/X3CVENSQIBAMZLURTZANLVCXGU.jpg?auth=8aaa091c006422a4cdfb5d864c868c48fc2552f0052d31350efffdc455064815&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Five Poems Art" sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/arts" title="Arts &amp; Culture">Arts &amp; Culture</a></div><a
                href="/arts/inq2/philadelphia-poems-national-poetry-month-20230413.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">5 Philly poems for National Poetry
                  Month</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a href="/arts/inq2/philadelphia-poems-national-poetry-month-20230413.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Queena Bergen, LindoYes, and others wrote
                        Philly poems for National Poetry Month.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2023-04-13T09:48:35-04:00"
                            class="inline-block type-article-details text-secondary inline ">April 13, 2023</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="W3UYCKD52RGMBMY7MP7JEU4KUY" data-card-author="Layla A. Jones|Dain Saint"
        data-card-content-title="The utopian plan that failed Black Philadelphians  " data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/news/inq2/more-perfect-union-city-planning-inequality-parks-transit-water-20221206.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-illustration-for-a-m-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/HO2OU35Z3REGBKJNNSKE2V3BCM.png?auth=50973b780b49288b8050e56bd26a29ed43b0ac5fa42a35d6f8fea192588f228b&amp;focal=2405,1725&amp;width=760&amp;height=507"
                        srcset="https://www.inquirer.com/resizer/v2/HO2OU35Z3REGBKJNNSKE2V3BCM.png?auth=50973b780b49288b8050e56bd26a29ed43b0ac5fa42a35d6f8fea192588f228b&amp;focal=2405,1725&amp;width=700&amp;height=467 700w,https://www.inquirer.com/resizer/v2/HO2OU35Z3REGBKJNNSKE2V3BCM.png?auth=50973b780b49288b8050e56bd26a29ed43b0ac5fa42a35d6f8fea192588f228b&amp;focal=2405,1725&amp;width=600&amp;height=400 600w,https://www.inquirer.com/resizer/v2/HO2OU35Z3REGBKJNNSKE2V3BCM.png?auth=50973b780b49288b8050e56bd26a29ed43b0ac5fa42a35d6f8fea192588f228b&amp;focal=2405,1725&amp;width=500&amp;height=333 500w,https://www.inquirer.com/resizer/v2/HO2OU35Z3REGBKJNNSKE2V3BCM.png?auth=50973b780b49288b8050e56bd26a29ed43b0ac5fa42a35d6f8fea192588f228b&amp;focal=2405,1725&amp;width=400&amp;height=267 400w"
                        alt="Illustration for A More Perfect Union." sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image"><a
                  data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/moreperfectunion/" title="A More Perfect Union">A More Perfect
                  Union</a></div><a
                href="/news/inq2/more-perfect-union-city-planning-inequality-parks-transit-water-20221206.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">The utopian plan that failed Black
                  Philadelphians </h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/news/inq2/more-perfect-union-city-planning-inequality-parks-transit-water-20221206.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">From a bus line named Jim Crow to racial
                        violence at public parks, racism shaped Philadelphia. Can we imagine a more equitable city?</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/jones_layla_a/"
                              data-card-author="Layla A. Jones">Layla A. Jones</a> and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2022-12-06T05:00:02-05:00"
                            class="inline-block type-article-details text-secondary inline ">Dec. 6, 2022</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="ULL4QJTD3FHH5CT7BMT2U476QA" data-card-author="Sam Morris|Jasen Lo|Dain Saint"
        data-card-content-title="Pennsylvania Election Results 2022" data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/pennsylvania-midterm-election-results-2022-20221108.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-2022-midterm-electio-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/GRSEYWIZE5C6BJONISRZAX3MYQ.jpg?auth=b1c20f85da27b6076e1935a6c0afa063452c17d80d79f5fae96e7e177bde20d3&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/GRSEYWIZE5C6BJONISRZAX3MYQ.jpg?auth=b1c20f85da27b6076e1935a6c0afa063452c17d80d79f5fae96e7e177bde20d3&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/GRSEYWIZE5C6BJONISRZAX3MYQ.jpg?auth=b1c20f85da27b6076e1935a6c0afa063452c17d80d79f5fae96e7e177bde20d3&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/GRSEYWIZE5C6BJONISRZAX3MYQ.jpg?auth=b1c20f85da27b6076e1935a6c0afa063452c17d80d79f5fae96e7e177bde20d3&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/GRSEYWIZE5C6BJONISRZAX3MYQ.jpg?auth=b1c20f85da27b6076e1935a6c0afa063452c17d80d79f5fae96e7e177bde20d3&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="2022 Midterm Election Results" sizes="(min-width: 480px) 400px, 450px" decoding="async">
                    </div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/pennsylvania-midterm-election-results-2022-20221108.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Pennsylvania Election Results 2022</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/pennsylvania-midterm-election-results-2022-20221108.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Follow along for live results of the
                        Pennsylvania Governor, U.S. Senate, and U.S. House races at the 2022 Midterms.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2022-11-08T16:43:31-05:00"
                            class="inline-block type-article-details text-secondary inline ">Nov. 8, 2022</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="CZ2NIM3KIBBBJD7ZLTE7M3WHDQ"
        data-card-author="Anna Orso|Chris Palmer|Dylan Purcell|Dain Saint"
        data-card-content-title="Philadelphia’s gun violence crisis through the eyes of those experiencing it  "
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/news/inq2/gun-violence-philadelphia-shooting-statistics-victims-20220421.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-(left-to-right)-cind-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/MK5NH6ITAJAWNF2D5F6WYIRV3A.jpg?auth=d70513ee8475c7a82c9279ce8fdfbf127cb28e2bdb7df0edf5c962e3435119f9&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/MK5NH6ITAJAWNF2D5F6WYIRV3A.jpg?auth=d70513ee8475c7a82c9279ce8fdfbf127cb28e2bdb7df0edf5c962e3435119f9&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/MK5NH6ITAJAWNF2D5F6WYIRV3A.jpg?auth=d70513ee8475c7a82c9279ce8fdfbf127cb28e2bdb7df0edf5c962e3435119f9&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/MK5NH6ITAJAWNF2D5F6WYIRV3A.jpg?auth=d70513ee8475c7a82c9279ce8fdfbf127cb28e2bdb7df0edf5c962e3435119f9&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/MK5NH6ITAJAWNF2D5F6WYIRV3A.jpg?auth=d70513ee8475c7a82c9279ce8fdfbf127cb28e2bdb7df0edf5c962e3435119f9&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="(Left to Right) Cindy and Bryant Heard, at the grave of their son Bryant Heard II, at Northwood Cemetary, in Philadelphia, Monday, January 31, 2022. Their son was fatally shot near their home in Olney last year."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image"><a
                  data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/special-reports/" title="Special Report">Special Report</a></div><a
                href="/news/inq2/gun-violence-philadelphia-shooting-statistics-victims-20220421.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Philadelphia’s gun violence crisis
                  through the eyes of those experiencing it </h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/news/inq2/gun-violence-philadelphia-shooting-statistics-victims-20220421.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Questions remain about how to reduce
                        shootings. A first step is understanding what drives them and who is most harmed.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/orso_anna/" data-card-author="Anna Orso">Anna
                              Orso</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/palmer_chris/" data-card-author="Chris Palmer">Chris
                              Palmer</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/purcell_dylan/"
                              data-card-author="Dylan Purcell">Dylan Purcell</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2022-04-21T05:00:04-04:00"
                            class="inline-block type-article-details text-secondary inline ">April 21, 2022</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="TMOS7J3GZJBNNCBRTSQO3I6FMA" data-card-author="Dain Saint|Cassie Owens"
        data-card-content-title="Traveling through time with Black Quantum Futurism’s ancestral exhibit"
        data-card-content-section="entertainment">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a href="/arts/afrofuturism-conversation-20210917.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-the-time-capsule-&amp;-k-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/TOUVZTMHXNHDXBN2B7AA3BYK44.jpg?auth=0773774c36b9ad883bf897822285853ee22afb85e7d0cdb79f99d9464b3acab9&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/TOUVZTMHXNHDXBN2B7AA3BYK44.jpg?auth=0773774c36b9ad883bf897822285853ee22afb85e7d0cdb79f99d9464b3acab9&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/TOUVZTMHXNHDXBN2B7AA3BYK44.jpg?auth=0773774c36b9ad883bf897822285853ee22afb85e7d0cdb79f99d9464b3acab9&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/TOUVZTMHXNHDXBN2B7AA3BYK44.jpg?auth=0773774c36b9ad883bf897822285853ee22afb85e7d0cdb79f99d9464b3acab9&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/TOUVZTMHXNHDXBN2B7AA3BYK44.jpg?auth=0773774c36b9ad883bf897822285853ee22afb85e7d0cdb79f99d9464b3acab9&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="The time capsule &amp; kindred temporal library exhibit is shown at The Hatfield House in Philadelphia, Pa. Wednesday, August 25, 2021."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/arts" title="Arts &amp; Culture">Arts &amp; Culture</a></div><a
                href="/arts/afrofuturism-conversation-20210917.html" data-link-type="standard-story-card"
                data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Traveling through time with Black
                  Quantum Futurism’s ancestral exhibit</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a href="/arts/afrofuturism-conversation-20210917.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">A mixed-media exhibition at Hatfield House
                        explores how time isn’t linear. Looking at time another way, how do we see our ancestors and
                        ourselves?</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a> and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/owens_cassie/"
                              data-card-author="Cassie Owens">Cassie Owens</a></span><time
                            datetime="2021-09-17T15:31:19-04:00"
                            class="inline-block type-article-details text-secondary inline ">Sept. 17, 2021</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="K5ETF7DKHZHM7DJOPALXFVU5AU" data-card-author="Dain Saint|Bob Fernandez|Erin Arvedlund"
        data-card-content-title="Is your college degree worth what you paid for it? Search our tool to find out."
        data-card-content-section="business">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a href="/business/inq/most-valuable-college-degrees-20200331.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-explore-the-inquirer-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/PMU3U3VFOVGQ3MN7JR7P3YTA7A.png?auth=d80e7758d368916cc5daa1c3d4d7e3f7041548a3fd0ff8dc9207ecef9c9be0c9&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/PMU3U3VFOVGQ3MN7JR7P3YTA7A.png?auth=d80e7758d368916cc5daa1c3d4d7e3f7041548a3fd0ff8dc9207ecef9c9be0c9&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/PMU3U3VFOVGQ3MN7JR7P3YTA7A.png?auth=d80e7758d368916cc5daa1c3d4d7e3f7041548a3fd0ff8dc9207ecef9c9be0c9&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/PMU3U3VFOVGQ3MN7JR7P3YTA7A.png?auth=d80e7758d368916cc5daa1c3d4d7e3f7041548a3fd0ff8dc9207ecef9c9be0c9&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/PMU3U3VFOVGQ3MN7JR7P3YTA7A.png?auth=d80e7758d368916cc5daa1c3d4d7e3f7041548a3fd0ff8dc9207ecef9c9be0c9&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Explore The Inquirer's new database to compare what you would earn vs. what you would owe with degrees from hundreds of colleges in the region."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/business" title="Business">Business</a></div><a
                href="/business/inq/most-valuable-college-degrees-20200331.html" data-link-type="standard-story-card"
                data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Is your college degree worth what you
                  paid for it? Search our tool to find out.</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a href="/business/inq/most-valuable-college-degrees-20200331.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">We compare projected incomes in your first
                        year out of college to federal student loan debt for over 3,000 programs in Pennsylvania, New
                        Jersey, and Delaware to help you decide which degrees pay the most.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/fernandez_bob/" data-card-author="Bob Fernandez">Bob
                              Fernandez</a>, and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/arvedlund_erin/"
                              data-card-author="Erin Arvedlund">Erin Arvedlund</a></span><time
                            datetime="2020-04-04T06:00:00-04:00"
                            class="inline-block type-article-details text-secondary inline ">April 4, 2020</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
  </div>
  <div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="YYNDC6GGSFCUTH3QO266KHKHQI"
        data-card-author="Sam Morris|Jasen Lo|Dain Saint|Charmaine Runes"
        data-card-content-title="2024 Presidential Elections National Results" data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/2024-national-election-results-donald-trump-kamala-harris-20241105.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-live-election-result-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/GOIF2GMRJ5GHTEDJLX7UXG72YU.jpg?auth=2503b2958b688ccef5cd1703970a5981e795d8d3be048f07ebdf742a2ac20b47&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/GOIF2GMRJ5GHTEDJLX7UXG72YU.jpg?auth=2503b2958b688ccef5cd1703970a5981e795d8d3be048f07ebdf742a2ac20b47&amp;width=800&amp;height=533&amp;smart=true 800w,https://www.inquirer.com/resizer/v2/GOIF2GMRJ5GHTEDJLX7UXG72YU.jpg?auth=2503b2958b688ccef5cd1703970a5981e795d8d3be048f07ebdf742a2ac20b47&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/GOIF2GMRJ5GHTEDJLX7UXG72YU.jpg?auth=2503b2958b688ccef5cd1703970a5981e795d8d3be048f07ebdf742a2ac20b47&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/GOIF2GMRJ5GHTEDJLX7UXG72YU.jpg?auth=2503b2958b688ccef5cd1703970a5981e795d8d3be048f07ebdf742a2ac20b47&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/GOIF2GMRJ5GHTEDJLX7UXG72YU.jpg?auth=2503b2958b688ccef5cd1703970a5981e795d8d3be048f07ebdf742a2ac20b47&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Live election results on inquirer.com" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/2024-national-election-results-donald-trump-kamala-harris-20241105.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">2024 Presidential Elections National
                  Results</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/2024-national-election-results-donald-trump-kamala-harris-20241105.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">See live updates for the presidential election
                        between Donald Trump and Kamala Harris.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a></span><time
                            datetime="2024-11-05T05:00:54-05:00"
                            class="inline-block type-article-details text-secondary inline ">Nov. 5, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="RLXJ4EKSUNE7ZJJEE6CPTK65BU"
        data-card-author="Sam Morris|Jasen Lo|Charmaine Runes|Dain Saint"
        data-card-content-title="New Jersey general election 2024 results" data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/2024-election-voting-results-nj-20241105.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-live-election-result-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/IKUDEEYESBCYDL3HACD6FTAQNQ.jpg?auth=e4a4f875ef1b46a895abf12e34178e44d399871b25d617c004f61700a7045881&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/IKUDEEYESBCYDL3HACD6FTAQNQ.jpg?auth=e4a4f875ef1b46a895abf12e34178e44d399871b25d617c004f61700a7045881&amp;width=800&amp;height=533&amp;smart=true 800w,https://www.inquirer.com/resizer/v2/IKUDEEYESBCYDL3HACD6FTAQNQ.jpg?auth=e4a4f875ef1b46a895abf12e34178e44d399871b25d617c004f61700a7045881&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/IKUDEEYESBCYDL3HACD6FTAQNQ.jpg?auth=e4a4f875ef1b46a895abf12e34178e44d399871b25d617c004f61700a7045881&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/IKUDEEYESBCYDL3HACD6FTAQNQ.jpg?auth=e4a4f875ef1b46a895abf12e34178e44d399871b25d617c004f61700a7045881&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/IKUDEEYESBCYDL3HACD6FTAQNQ.jpg?auth=e4a4f875ef1b46a895abf12e34178e44d399871b25d617c004f61700a7045881&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Live election results on inquirer.com" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/2024-election-voting-results-nj-20241105.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">New Jersey general election 2024
                  results</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/2024-election-voting-results-nj-20241105.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">See live updates as New Jersey counts ballots
                        for president, the U.S. Senate and Congress.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-11-05T05:00:12-05:00"
                            class="inline-block type-article-details text-secondary inline ">Nov. 5, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="Q6XRFSFW3VCKDL2LDN4DEAW3SA" data-card-author="Bedatri D. Choudhury|Dain Saint"
        data-card-content-title="How Jesse Krimes’ art calls attention to the harm inflicted on Rikers Island"
        data-card-content-section="entertainment">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a href="/arts/inq2/jesse-krimes-artist-rikers-quilt-20240905.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-philadelphia-based-a-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/77H63IOHU5F3NCHJVEKODOUC2I.jpg?auth=5b8b25e06831e01a2e45a3d737047efdc1e6deb24b1e145b1fbb2b6c2c2b4ef8&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/77H63IOHU5F3NCHJVEKODOUC2I.jpg?auth=5b8b25e06831e01a2e45a3d737047efdc1e6deb24b1e145b1fbb2b6c2c2b4ef8&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/77H63IOHU5F3NCHJVEKODOUC2I.jpg?auth=5b8b25e06831e01a2e45a3d737047efdc1e6deb24b1e145b1fbb2b6c2c2b4ef8&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/77H63IOHU5F3NCHJVEKODOUC2I.jpg?auth=5b8b25e06831e01a2e45a3d737047efdc1e6deb24b1e145b1fbb2b6c2c2b4ef8&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/77H63IOHU5F3NCHJVEKODOUC2I.jpg?auth=5b8b25e06831e01a2e45a3d737047efdc1e6deb24b1e145b1fbb2b6c2c2b4ef8&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Philadelphia based artist Jesse Krimes, Rikers Quilt on display, Williams Forum, Philadelphia Museum of Art, Thursday, August 22, 2024."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/arts" title="Arts &amp; Culture">Arts &amp; Culture</a></div><a
                href="/arts/inq2/jesse-krimes-artist-rikers-quilt-20240905.html" data-link-type="standard-story-card"
                data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">How Jesse Krimes’ art calls attention
                  to the harm inflicted on Rikers Island</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a href="/arts/inq2/jesse-krimes-artist-rikers-quilt-20240905.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Now on display at Philadelphia Museum of Art,
                        Jesse walks us through the many meanings within his Rikers Quilt.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/choudhury_bedatri/"
                              data-card-author="Bedatri D. Choudhury">Bedatri D. Choudhury</a> and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-09-05T05:00:24-04:00"
                            class="inline-block type-article-details text-secondary inline ">Sept. 5, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-no-image-card"
        data-card-content-id="MBULA7Y3XVBQZFVXTY5QOTU6NY"
        data-card-author="Sam Morris|Dain Saint|Charmaine Runes|Jasen Lo"
        data-card-content-title="Live Tracker: How will Tropical Storm Debby impact Philadelphia?"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--no-image
            
          "><a data-link-type="standard-story-no-image-card-eyebrow" data-card-type="standard-story-no-image-card"
                  href="https://www.inquirer.com/weather" title="Weather">Weather</a></div><a
                href="/weather/inq2/debby-storm-path-timeline-philadelphia-20240807.html"
                data-link-type="standard-story-no-image-card" data-card-type="standard-story-no-image-card"
                class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Live Tracker: How will Tropical Storm
                  Debby impact Philadelphia?</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/weather/inq2/debby-storm-path-timeline-philadelphia-20240807.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Up-to-the-minute predictions of the storm’s
                        path, rainfall forecasts, and how else Debby could impact Philly.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen
                              Lo</a></span><time datetime="2024-08-07T16:11:46-04:00"
                            class="inline-block type-article-details text-secondary inline ">Aug. 7, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="DVHIQ46CFZBY3KC4R6F7V4JOZ4" data-card-author="Thomas Fitzgerald|Dain Saint"
        data-card-content-title="SEPTA being hard to fund is nothing new. Here’s how we got here"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/transportation/inq2/septa-funding-fiances-history-timeline-shapiro-20240626.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-why-is-septa-so-hard-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/PXUX2XCPKRFH7DFWVK6PFAXYYU.jpg?auth=62137a01885a9b77e6f482611f74c0c0c948ba848314c563a95d33cd02b2aa91&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/PXUX2XCPKRFH7DFWVK6PFAXYYU.jpg?auth=62137a01885a9b77e6f482611f74c0c0c948ba848314c563a95d33cd02b2aa91&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/PXUX2XCPKRFH7DFWVK6PFAXYYU.jpg?auth=62137a01885a9b77e6f482611f74c0c0c948ba848314c563a95d33cd02b2aa91&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/PXUX2XCPKRFH7DFWVK6PFAXYYU.jpg?auth=62137a01885a9b77e6f482611f74c0c0c948ba848314c563a95d33cd02b2aa91&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/PXUX2XCPKRFH7DFWVK6PFAXYYU.jpg?auth=62137a01885a9b77e6f482611f74c0c0c948ba848314c563a95d33cd02b2aa91&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Why is SEPTA so hard to fund? A history" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/transportation" title="Transportation">Transportation</a></div><a
                href="/transportation/inq2/septa-funding-fiances-history-timeline-shapiro-20240626.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">SEPTA being hard to fund is nothing
                  new. Here’s how we got here</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/transportation/inq2/septa-funding-fiances-history-timeline-shapiro-20240626.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">SEPTA is vital to the livelihood of the entire
                        region. So why is it so hard to fund?</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/fitzgerald_thomas/"
                              data-card-author="Thomas Fitzgerald">Thomas Fitzgerald</a> and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-06-26T05:00:00-04:00"
                            class="inline-block type-article-details text-secondary inline ">June 26, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="ZCCWPOKRZZCABFENWRWMZB2BPQ"
        data-card-author="Sam Morris|Jasen Lo|Charmaine Runes|Dain Saint"
        data-card-content-title="Pennsylvania primary election 2024 results" data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/pennsylvania-2024-primary-election-results-president-20240423.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-pa.-primary-election-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/UZJPBR4LTRAO5I5QQVCUNSK3ZQ.jpg?auth=175479fbace94bdb402b84f956f57365aca876a6f987227564585c8026895a0d&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/UZJPBR4LTRAO5I5QQVCUNSK3ZQ.jpg?auth=175479fbace94bdb402b84f956f57365aca876a6f987227564585c8026895a0d&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/UZJPBR4LTRAO5I5QQVCUNSK3ZQ.jpg?auth=175479fbace94bdb402b84f956f57365aca876a6f987227564585c8026895a0d&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/UZJPBR4LTRAO5I5QQVCUNSK3ZQ.jpg?auth=175479fbace94bdb402b84f956f57365aca876a6f987227564585c8026895a0d&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/UZJPBR4LTRAO5I5QQVCUNSK3ZQ.jpg?auth=175479fbace94bdb402b84f956f57365aca876a6f987227564585c8026895a0d&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Pa. primary election results" sizes="(min-width: 480px) 400px, 450px" decoding="async">
                    </div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/pennsylvania-2024-primary-election-results-president-20240423.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Pennsylvania primary election 2024
                  results</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/pennsylvania-2024-primary-election-results-president-20240423.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Updates from the 2024 Democratic and
                        Republican Pa. primaries for President, Senate, House, and more.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2024-04-23T05:00:01-04:00"
                            class="inline-block type-article-details text-secondary inline ">April 23, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="LXYYVJOTHRE45M53TNBTLCL5TA"
        data-card-author="Sam Morris|Dain Saint|Jasen Lo|Charmaine Runes"
        data-card-content-title="A visual guide to the earthquake felt in the Philly region"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/news/philadelphia/inq2/nj-earthquake-time-epicenter-what-happened-map-20240405.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-map-of-earthquake-in-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/6P3VQN3RM5BGPBIE2CR2M7T664.png?auth=2abdb097b0f76378367eea8983b4241e343bc24745e40a45e8f0064682b40b78&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/6P3VQN3RM5BGPBIE2CR2M7T664.png?auth=2abdb097b0f76378367eea8983b4241e343bc24745e40a45e8f0064682b40b78&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/6P3VQN3RM5BGPBIE2CR2M7T664.png?auth=2abdb097b0f76378367eea8983b4241e343bc24745e40a45e8f0064682b40b78&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/6P3VQN3RM5BGPBIE2CR2M7T664.png?auth=2abdb097b0f76378367eea8983b4241e343bc24745e40a45e8f0064682b40b78&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/6P3VQN3RM5BGPBIE2CR2M7T664.png?auth=2abdb097b0f76378367eea8983b4241e343bc24745e40a45e8f0064682b40b78&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Map of earthquake intensity reports" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/news/philadelphia" title="Philadelphia News">Philadelphia News</a>
              </div><a href="/news/philadelphia/inq2/nj-earthquake-time-epicenter-what-happened-map-20240405.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">A visual guide to the earthquake felt
                  in the Philly region</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/news/philadelphia/inq2/nj-earthquake-time-epicenter-what-happened-map-20240405.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">At around 10:20 am, a 4.8 scale earthquake
                        struck near Lebanon, N.J. This is what happened.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a></span><time
                            datetime="2024-04-05T15:37:33-04:00"
                            class="inline-block type-article-details text-secondary inline ">April 5, 2024</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="GRIZVWLOVNEXTA5R2CRZJHEH7E"
        data-card-author="Thomas Fitzgerald|Dain Saint|Gabe Coffey|Sam Morris"
        data-card-content-title="SEPTA’s classic trolleys are about to hit the streets. Take a look inside."
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/transportation/inq2/septa-refurbished-trolleys-route-15-photos-20230906.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-the-transformation-f-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/7ZELNCI2DZD5TIJYIUA4NR2XAM.jpg?auth=a49bb7604713d70ac4230c3a49db0b25d162a5b7d24eec5adc97336151c9bef4&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/7ZELNCI2DZD5TIJYIUA4NR2XAM.jpg?auth=a49bb7604713d70ac4230c3a49db0b25d162a5b7d24eec5adc97336151c9bef4&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/7ZELNCI2DZD5TIJYIUA4NR2XAM.jpg?auth=a49bb7604713d70ac4230c3a49db0b25d162a5b7d24eec5adc97336151c9bef4&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/7ZELNCI2DZD5TIJYIUA4NR2XAM.jpg?auth=a49bb7604713d70ac4230c3a49db0b25d162a5b7d24eec5adc97336151c9bef4&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/7ZELNCI2DZD5TIJYIUA4NR2XAM.jpg?auth=a49bb7604713d70ac4230c3a49db0b25d162a5b7d24eec5adc97336151c9bef4&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="The transformation from old to new of the 1940s trolleys"
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/transportation" title="Transportation">Transportation</a></div><a
                href="/transportation/inq2/septa-refurbished-trolleys-route-15-photos-20230906.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">SEPTA’s classic trolleys are about to
                  hit the streets. Take a look inside.</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/transportation/inq2/septa-refurbished-trolleys-route-15-photos-20230906.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Take a virtual tour of SEPTA’s newly
                        refurbished Route 15 trolleys before they hit the streets.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/fitzgerald_thomas/"
                              data-card-author="Thomas Fitzgerald">Thomas Fitzgerald</a>, <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/coffey_gabe/" data-card-author="Gabe Coffey">Gabe
                              Coffey</a>, and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a></span><time datetime="2023-09-06T12:06:11-04:00"
                            class="inline-block type-article-details text-secondary inline ">Sept. 6, 2023</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="CH6K7MZITJFPDDHQZKTJNOY2BY"
        data-card-author="Sam Morris|Jasen Lo|Dain Saint|Charmaine Runes"
        data-card-content-title="Philadelphia Primary Election 2023 Results" data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/philly-election-results-2023-mayoral-city-council-20230516.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-philadelphia-primary-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/ZODIVGTKPBE3BI2ARUS2GY2RZ4.jpg?auth=d3d30ad8e5cd552d311cc053e9ba58e94144241a837fb000e66b6a5b03ff7d56&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/ZODIVGTKPBE3BI2ARUS2GY2RZ4.jpg?auth=d3d30ad8e5cd552d311cc053e9ba58e94144241a837fb000e66b6a5b03ff7d56&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/ZODIVGTKPBE3BI2ARUS2GY2RZ4.jpg?auth=d3d30ad8e5cd552d311cc053e9ba58e94144241a837fb000e66b6a5b03ff7d56&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/ZODIVGTKPBE3BI2ARUS2GY2RZ4.jpg?auth=d3d30ad8e5cd552d311cc053e9ba58e94144241a837fb000e66b6a5b03ff7d56&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/ZODIVGTKPBE3BI2ARUS2GY2RZ4.jpg?auth=d3d30ad8e5cd552d311cc053e9ba58e94144241a837fb000e66b6a5b03ff7d56&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Philadelphia Primary Election 2023 Results" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/philly-election-results-2023-mayoral-city-council-20230516.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Philadelphia Primary Election 2023
                  Results</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/philly-election-results-2023-mayoral-city-council-20230516.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Updates from Philadelphia municipal elections
                        in the 2023 Democratic and Republican primaries.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a></span><time
                            datetime="2023-05-16T07:00:08-04:00"
                            class="inline-block type-article-details text-secondary inline ">May 16, 2023</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="YCSK76RRJVFOVLLR27RQZ77P6Y"
        data-card-author="Jasen Lo|Dain Saint|Charmaine Runes|Sam Morris"
        data-card-content-title="What candidates and issues received the most time during the mayoral debate"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/philly-mayor-debate-candidates-issues-time-20230412.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-top-candidates-for-t-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/2W4SRM7AWBBJVAINKSCUAJ6HIU.jpg?auth=9ad16ed174afb90f25b2c3703ff331f232ea00305d9d1506e2d5afde61e5572c&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/2W4SRM7AWBBJVAINKSCUAJ6HIU.jpg?auth=9ad16ed174afb90f25b2c3703ff331f232ea00305d9d1506e2d5afde61e5572c&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/2W4SRM7AWBBJVAINKSCUAJ6HIU.jpg?auth=9ad16ed174afb90f25b2c3703ff331f232ea00305d9d1506e2d5afde61e5572c&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/2W4SRM7AWBBJVAINKSCUAJ6HIU.jpg?auth=9ad16ed174afb90f25b2c3703ff331f232ea00305d9d1506e2d5afde61e5572c&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/2W4SRM7AWBBJVAINKSCUAJ6HIU.jpg?auth=9ad16ed174afb90f25b2c3703ff331f232ea00305d9d1506e2d5afde61e5572c&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Top candidates for the Philadelphia mayor seat from left, former City Council Member Cherelle Parker, former City Council Member Derek Green, Businessman Jeff Brown, Former Philadelphia City Controller Rebecca Rhynhart, Allan Domb, Helen Gym and State Representative Amen Brown gather during a televised debate at the Temple performing arts center in Philadelphia, Pa. Tuesday, April 11, 2023."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/philly-mayor-debate-candidates-issues-time-20230412.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">What candidates and issues received the
                  most time during the mayoral debate</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/philly-mayor-debate-candidates-issues-time-20230412.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Candidates to become Philly’s 100th mayor met
                        for the first time in a televised debate. Here’s what they did with that platform.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/runes_charmaine/"
                              data-card-author="Charmaine Runes">Charmaine Runes</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a></span><time datetime="2023-04-12T16:57:04-04:00"
                            class="inline-block type-article-details text-secondary inline ">April 12, 2023</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="OZTLXH6ASJHHDLO7H2EQEAHILE"
        data-card-author="Patricia Madej|Sam Morris|Jasen Lo|Dain Saint"
        data-card-content-title="Pennsylvania governor election results 2022: Did Josh Shapiro or Doug Mastriano win?"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/election-results-2022-pennsylvania-governor-winner-20221108.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-josh-shaprio-and-dou-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/UEBLROIDN5CMDK6M7MHNHWGJIQ.jpg?auth=9ac8c6f481baaf3d64aeb845deab18fa7a1304405a03ed712c186e36990321af&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/UEBLROIDN5CMDK6M7MHNHWGJIQ.jpg?auth=9ac8c6f481baaf3d64aeb845deab18fa7a1304405a03ed712c186e36990321af&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/UEBLROIDN5CMDK6M7MHNHWGJIQ.jpg?auth=9ac8c6f481baaf3d64aeb845deab18fa7a1304405a03ed712c186e36990321af&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/UEBLROIDN5CMDK6M7MHNHWGJIQ.jpg?auth=9ac8c6f481baaf3d64aeb845deab18fa7a1304405a03ed712c186e36990321af&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/UEBLROIDN5CMDK6M7MHNHWGJIQ.jpg?auth=9ac8c6f481baaf3d64aeb845deab18fa7a1304405a03ed712c186e36990321af&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Josh Shaprio and Doug Mastriano" sizes="(min-width: 480px) 400px, 450px" decoding="async">
                    </div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image"><a
                  data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election/"
                  title="PA 2022 - {logo:https://media.inquirer.com/designimages/PA 2022.svg}"><img
                    src="https://media.inquirer.com/designimages/PA 2022.svg" alt="PA 2022  logo" class="h-5 ml-1"></a>
              </div><a href="/politics/election/election-results-2022-pennsylvania-governor-winner-20221108.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Pennsylvania governor election results
                  2022: Did Josh Shapiro or Doug Mastriano win?</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/election-results-2022-pennsylvania-governor-winner-20221108.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">See the results in the Pennsylvania governor's
                        race as they come in.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/madej_patricia/"
                              data-card-author="Patricia Madej">Patricia Madej</a>, <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2022-11-08T20:39:45-05:00"
                            class="inline-block type-article-details text-secondary inline ">Nov. 8, 2022</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="5GG54DJCGBBMBNLYN5ZFHXTCTE" data-card-author="Sam Morris|Jasen Lo|Dain Saint"
        data-card-content-title="2022 Pennsylvania State Senate and State House Election Results"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/politics/election/inq2/pennsylvania-election-results-2022-senate-house-race-20221108.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-2022-midterm-electio-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/RKJW676R4JEGLLT45JLUHWU5JM.jpg?auth=7ad0d94ebe74171663c085f328773c8179c785f09c97e6849cf9baa2022016ad&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/RKJW676R4JEGLLT45JLUHWU5JM.jpg?auth=7ad0d94ebe74171663c085f328773c8179c785f09c97e6849cf9baa2022016ad&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/RKJW676R4JEGLLT45JLUHWU5JM.jpg?auth=7ad0d94ebe74171663c085f328773c8179c785f09c97e6849cf9baa2022016ad&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/RKJW676R4JEGLLT45JLUHWU5JM.jpg?auth=7ad0d94ebe74171663c085f328773c8179c785f09c97e6849cf9baa2022016ad&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/RKJW676R4JEGLLT45JLUHWU5JM.jpg?auth=7ad0d94ebe74171663c085f328773c8179c785f09c97e6849cf9baa2022016ad&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="2022 Midterm Election Results" sizes="(min-width: 480px) 400px, 450px" decoding="async">
                    </div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/politics/election" title="Elections">Elections</a></div><a
                href="/politics/election/inq2/pennsylvania-election-results-2022-senate-house-race-20221108.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">2022 Pennsylvania State Senate and
                  State House Election Results</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/politics/election/inq2/pennsylvania-election-results-2022-senate-house-race-20221108.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Follow along for live results of the
                        Pennsylvania State House and Senate races.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="http://www.inquirer.com/author/morris_sam/" data-card-author="Sam Morris">Sam
                              Morris</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/lo_jasen/" data-card-author="Jasen Lo">Jasen Lo</a>,
                            and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2022-11-08T16:43:19-05:00"
                            class="inline-block type-article-details text-secondary inline ">Nov. 8, 2022</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="4OKVDZSR6NFVZCD76J6V7YYNWQ" data-card-author="Zoe Greenberg|Dain Saint"
        data-card-content-title="Five local artists reimagine American symbols that started right here in Philly"
        data-card-content-section="news">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/news/inq2/more-perfect-union-americana-icons-philadelphia-racism-20220406.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-a-photo-shoot-in-phi-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/BP54IZ4KP5BKLI3GR5BMO43W7U.jpg?auth=20c2522d625e0a6a65389ba1e396d2c63ca8d5c1412605d8c81a21a2c5f16a88&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/BP54IZ4KP5BKLI3GR5BMO43W7U.jpg?auth=20c2522d625e0a6a65389ba1e396d2c63ca8d5c1412605d8c81a21a2c5f16a88&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/BP54IZ4KP5BKLI3GR5BMO43W7U.jpg?auth=20c2522d625e0a6a65389ba1e396d2c63ca8d5c1412605d8c81a21a2c5f16a88&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/BP54IZ4KP5BKLI3GR5BMO43W7U.jpg?auth=20c2522d625e0a6a65389ba1e396d2c63ca8d5c1412605d8c81a21a2c5f16a88&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/BP54IZ4KP5BKLI3GR5BMO43W7U.jpg?auth=20c2522d625e0a6a65389ba1e396d2c63ca8d5c1412605d8c81a21a2c5f16a88&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="A photo shoot in Philadelphia, Thursday, March 10, 2022."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/news" title="News">News</a></div><a
                href="/news/inq2/more-perfect-union-americana-icons-philadelphia-racism-20220406.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Five local artists reimagine American
                  symbols that started right here in Philly</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/news/inq2/more-perfect-union-americana-icons-philadelphia-racism-20220406.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">A More Perfect Union asked Black and Latino
                        artists to reimagine a new Americana.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/Greenberg_Zoe/" data-card-author="Zoe Greenberg">Zoe
                              Greenberg</a> and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2022-04-06T05:00:01-04:00"
                            class="inline-block type-article-details text-secondary inline ">April 6, 2022</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="DYBTMS665ZCKFAG34NLAWXSZ5I" data-card-author="Tom Avril|Dain Saint"
        data-card-content-title="Polling voters who won’t answer the phone, and other challenges of election math"
        data-card-content-section="health-science">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a
                href="/science/poll-statistics-reliability-cell-phones-monmouth-university-20200210.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-animation-of-polling-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/5EAHRBAJLBEULAKHGPVMU3ZRDY.gif?auth=d000f65e0d0c5684047c59891f1235dc2406da9cf0be577cc8e7a3e98bd250da&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/5EAHRBAJLBEULAKHGPVMU3ZRDY.gif?auth=d000f65e0d0c5684047c59891f1235dc2406da9cf0be577cc8e7a3e98bd250da&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/5EAHRBAJLBEULAKHGPVMU3ZRDY.gif?auth=d000f65e0d0c5684047c59891f1235dc2406da9cf0be577cc8e7a3e98bd250da&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/5EAHRBAJLBEULAKHGPVMU3ZRDY.gif?auth=d000f65e0d0c5684047c59891f1235dc2406da9cf0be577cc8e7a3e98bd250da&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/5EAHRBAJLBEULAKHGPVMU3ZRDY.gif?auth=d000f65e0d0c5684047c59891f1235dc2406da9cf0be577cc8e7a3e98bd250da&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Animation of polling pretzels vs. bagels" sizes="(min-width: 480px) 400px, 450px"
                        decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="
            inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image
            
          "><a data-link-type="standard-story-card-eyebrow" data-card-type="standard-story-card"
                  href="https://www.inquirer.com/science" title="Science">Science</a></div><a
                href="/science/poll-statistics-reliability-cell-phones-monmouth-university-20200210.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">Polling voters who won’t answer the
                  phone, and other challenges of election math</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a
                    href="/science/poll-statistics-reliability-cell-phones-monmouth-university-20200210.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">Pollsters can call just a few hundred people
                        to get a valid sense of how millions are thinking. Here is how it works.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/avril_tom/" data-card-author="Tom Avril">Tom
                              Avril</a> and <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2020-09-16T00:14:00-04:00"
                            class="inline-block type-article-details text-secondary inline ">Sept. 16, 2020</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
    <div>
      <article class="inq-card-wrapper inq-card-wrapper mb-2 sm:mb-4" data-card-type="standard-story-card"
        data-card-content-id="VJUVKOFE7NA4XKMOS3VDTENKXM" data-card-author="Bob Fernandez|Erin Arvedlund|Dain Saint"
        data-card-content-title="College degrees are an investment. Here’s how to determine which ones actually pay off."
        data-card-content-section="business">
        <article class="inq-card inq-card-story inq-card-story--standard 
       inq-card-story--closed inq-card-infeed  ">
          <div class="inq-card__inner ">
            <div class="inq-story__header "><a href="/business/a/college-degrees-job-salaries-tuition-20200331.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <div class="inq-image--wrapper figure ">
                  <figure class="inq-card__figure inq-card__figure-3x2" role="figure"
                    aria-describedby="inq-fig--figcaption-level-1-nursing-stud-caption">
                    <div class="inq-image "><img
                        class="inq-image visible-inq-image  inq-card__image inq-card__image-with-ratio"
                        src="https://www.inquirer.com/resizer/v2/BJOL7YYNJJBVPOE3UNQA6QXKVY.jpg?auth=2510dcd5f80e27edd450f449192dbd8db3be37d6ab612ac703879f06c0e9b82a&amp;width=760&amp;height=507&amp;smart=true"
                        srcset="https://www.inquirer.com/resizer/v2/BJOL7YYNJJBVPOE3UNQA6QXKVY.jpg?auth=2510dcd5f80e27edd450f449192dbd8db3be37d6ab612ac703879f06c0e9b82a&amp;width=700&amp;height=467&amp;smart=true 700w,https://www.inquirer.com/resizer/v2/BJOL7YYNJJBVPOE3UNQA6QXKVY.jpg?auth=2510dcd5f80e27edd450f449192dbd8db3be37d6ab612ac703879f06c0e9b82a&amp;width=600&amp;height=400&amp;smart=true 600w,https://www.inquirer.com/resizer/v2/BJOL7YYNJJBVPOE3UNQA6QXKVY.jpg?auth=2510dcd5f80e27edd450f449192dbd8db3be37d6ab612ac703879f06c0e9b82a&amp;width=500&amp;height=333&amp;smart=true 500w,https://www.inquirer.com/resizer/v2/BJOL7YYNJJBVPOE3UNQA6QXKVY.jpg?auth=2510dcd5f80e27edd450f449192dbd8db3be37d6ab612ac703879f06c0e9b82a&amp;width=400&amp;height=267&amp;smart=true 400w"
                        alt="Level 1 nursing students Kiara Boyd (left) and Olu Atilade work together to complete their class assignment at the one-year nursing school at Eastern Center for Arts and Technology."
                        sizes="(min-width: 480px) 400px, 450px" decoding="async"></div>
                  </figure>
                </div>
              </a></div>
            <div class="inq-card-spacing"></div>
            <div class="inq-card-content 
       inq-card-content--closed">
              <div class="inq-eyebrow type-article-eyebrow inq-eyebrow--site inq-eyebrow--image">Special Report</div><a
                href="/business/a/college-degrees-job-salaries-tuition-20200331.html"
                data-link-type="standard-story-card" data-card-type="standard-story-card" class="inq-story__link">
                <h4 class="inq-headline inq-headline--standard text-8 leading-8">College degrees are an investment.
                  Here’s how to determine which ones actually pay off.</h4>
              </a>
              <div>
                <div class="inq-story-tease"><a href="/business/a/college-degrees-job-salaries-tuition-20200331.html"
                    class="no-underline text-inherit">
                    <div class="hover:text-primary-blue">
                      <p class="type-card-tease-2 xs:text-4 xs:leading-5">“Some of these outcomes are so bad that there
                        is no justification:” A new Inquirer database compares degrees at Penn, Penn State, Rutgers, and
                        hundreds of other colleges to show what recent grads earned vs. what they owed.</p>
                    </div>
                  </a>
                  <div class="inq-card-footer ">
                    <div class="type-author inq-author inq-author--compact text-primary">
                      <div class="inq-author-main inq-byline">
                        <div class="inq-author--no-breakline"><span class="text-primary font-normal  "><a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/fernandez_bob/" data-card-author="Bob Fernandez">Bob
                              Fernandez</a>, <a class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/arvedlund_erin/"
                              data-card-author="Erin Arvedlund">Erin Arvedlund</a>, and <a
                              class="no-underline  text-primary hover:text-blue-mid font-normal"
                              href="https://www.inquirer.com/author/saint_dain/" data-card-author="Dain Saint">Dain
                              Saint</a></span><time datetime="2020-03-31T05:00:59-04:00"
                            class="inline-block type-article-details text-secondary inline ">March 31, 2020</time></div>
                      </div>
                    </div>
                    <div class="inq-share">
                      <div class="inq-share__options"><button class="inq-card-footer--controls"
                          aria-label="Share this story" aria-haspopup="true" aria-expanded="false">
                          <div class="inq-card-controls-dot"></div>
                        </button></div>
                      <div class="inq-popup-menu inq-popup-menu--open hidden"><button class="inq-popup-menu__option"
                          aria-label="Copy Link">
                          <div class="inq-icon inq-icon--link inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Link Icon</title>
                              <path
                                d="M18.8083 13.8247L17.3696 12.3861L18.8083 10.9474C19.1862 10.5695 19.486 10.1208 19.6906 9.62703C19.8951 9.13324 20.0004 8.60401 20.0004 8.06954C20.0004 7.53507 19.8951 7.00584 19.6906 6.51206C19.486 6.01827 19.1862 5.56961 18.8083 5.19169C18.4304 4.81376 17.9817 4.51397 17.4879 4.30944C16.9942 4.10491 16.4649 3.99964 15.9305 3.99964C15.396 3.99964 14.8668 4.10491 14.373 4.30944C13.8792 4.51397 13.4305 4.81376 13.0526 5.19169L11.6139 6.63036L10.1753 5.19169L11.6139 3.75301C12.7619 2.62356 14.3097 1.99349 15.9202 2.00005C17.5306 2.00661 19.0732 2.64926 20.212 3.78802C21.3507 4.92679 21.9934 6.4694 21.9999 8.07984C22.0065 9.69028 21.3764 11.2381 20.247 12.3861L18.8083 13.8247ZM13.8951 18.738L12.4564 20.1767C11.8912 20.7511 11.2179 21.208 10.4753 21.5209C9.73264 21.8339 8.93541 21.9967 8.12955 21.9999C7.3237 22.0032 6.52516 21.8469 5.78002 21.5401C5.03487 21.2332 4.35786 20.7818 3.78802 20.212C3.21819 19.6421 2.76682 18.9651 2.45995 18.22C2.15307 17.4748 1.99677 16.6763 2.00005 15.8704C2.00333 15.0646 2.16613 14.2674 2.47907 13.5247C2.792 12.7821 3.24887 12.1088 3.82332 11.5436L5.26199 10.1049L6.70067 11.5436L5.26199 12.9823C4.88407 13.3602 4.58428 13.8089 4.37975 14.3027C4.17522 14.7964 4.06995 15.3257 4.06995 15.8602C4.06995 16.3946 4.17522 16.9239 4.37975 17.4176C4.58428 17.9114 4.88407 18.3601 5.26199 18.738C5.63992 19.1159 6.08858 19.4157 6.58236 19.6202C7.07615 19.8248 7.60538 19.9301 8.13985 19.9301C8.67432 19.9301 9.20355 19.8248 9.69733 19.6202C10.1911 19.4157 10.6398 19.1159 11.0177 18.738L12.4564 17.2993L13.8951 18.738ZM15.9299 6.63036L17.3696 8.07005L8.14036 17.2983L6.70067 15.8596L15.9299 6.63036Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Copy link</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on Facebook">
                          <div class="inq-icon inq-icon--facebook inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>Facebook Logo</title>
                              <path
                                d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on Facebook</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share on X">
                          <div class="inq-icon inq-icon--twitter inq-icon--medium"><svg
                              xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                              fill="currentColor">
                              <title>X</title>
                              <path
                                d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share on X</span>
                        </button><button class="inq-popup-menu__option" aria-label="Share via email">
                          <div class="inq-icon inq-icon--email inq-icon--medium"><svg xmlns="http://www.w3.org/2000/svg"
                              width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <title>Email</title>
                              <path
                                d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.06 11.683Z">
                              </path>
                            </svg></div><span class="type-author xs:leading-5 font-medium">Share via Email</span>
                        </button></div>
                      <div
                        class="inq-toast items-center inq-toast--standard inq-toast--bottom font-ringside-regular h-[58px] text-3.5 text-center ">
                        <div role="status" aria-live="polite" class="w-11/12"><span class="break-words">Link copied to
                            clipboard</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </article>
    </div>
  </div>
</div>
`

module.exports = async () => {
  
  const html = parser.parse(page);
  const articles = [...html.querySelectorAll("article.inq-card-wrapper")];

  try {
    const data = articles.map( article => ({
      title: article.getAttribute("data-card-content-title"),
      description: article.querySelector(".inq-story-tease p")?.innerText.replace(/\s+/g, " ").trim(),
      team: [...article.querySelectorAll("[data-card-author]")].map( author => ({ name: author.getAttribute("data-card-author"), link: author.getAttribute("href") }) ),
      image: article.querySelector(".inq-card__image")?.getAttribute("src"),
      url: `https://inquirer.com${ article.querySelector(".inq-story-tease a")?.getAttribute("href") }`,
      date: article.querySelector("time")?.getAttribute("datetime"),
      tags: article.querySelector(".inq-story-tease a")?.getAttribute("href").replace(/\/inq.*/, '').split('/').splice(1).filter( x => !x.includes(".html"))
    })).sort( (a, b) => a.date - b.date )


    // console.log( data );

    return data;
  } catch(e) {
    console.log(e); 
  }
  
  return {};
  
};
