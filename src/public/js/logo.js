//
// /** @var {string} imageSource   The base64 encoded image string to be used as "src". */
// /** @var {string} zoneText      The optional custom zone text. */
//
// let $brand = $("#header__client-zone");
// let titleText = zoneText !== "" ? zoneText : $brand.text();
//
// $brand.html(`
//     <div id="custom-brand" style="display:flex; align-items:center;">
//         <img style="height:100%; width:auto;" src="${imageSource}" alt="Logo">
//         ${titleText}
//     </div>
// `);
//
// $(window.parent)
//     .on("resize",
//         function()
//         {
//             let maxHeight = $("#header").height();
//
//             let $brand = $("#custom-brand");
//             $brand.css("height", maxHeight + "px");
//
//             let $menu = $(".appGlobalHeader__menu");
//
//             //if($menu.css("display") === "block")
//                 $("#header__client-zone").css("padding-left", "0");
//         }
//     )
//     .trigger("resize");
//
//
// /*
//
//
// <svg focusable="false" viewBox="0 0 128 128" aria-hidden="true" role="presentation">
//     <path d="M85.365 24.25c0-5.917 1.947-11.417 5.841-16.5 3.895-5.083 14.01-7.625 30.35-7.625V61.75l-2.794 9c-1.44 4.583-3.217 8.687-5.333 12.313-2.117 3.625-4.614 6.77-7.492 9.437a38.498 38.498 0 0 1-9.715 6.563c-3.598 1.708-7.555 2.979-11.873 3.812.339-1.833.593-3.667.762-5.5.17-1.833.254-3.625.254-5.375V24.25zM27.715 7.125h7.237v7h-7.238v-7zm7.237 10.625h7.238v7h-7.238v-7zm-7.238 8.875h7.238v7h-7.238v-7zm-7.238 10.5h7.238v7.125h-7.238v-7.125zM6 0h7.238v7.125H6V0zm36.19 92c0 6.083 1.122 11.375 3.366 15.875 2.243 4.5 4.72 8.25 7.428 11.25 2.71 3 5.185 5.23 7.429 6.688L63.778 128c-9.058 0-17.164-1.27-24.318-3.813-7.153-2.541-13.206-6.083-18.158-10.624-4.953-4.542-8.741-9.896-11.365-16.063C7.312 91.333 6 84.667 6 77.5v-58h7.238v38.75h7.238v-7h7.238v15.625h7.238v-26.25h7.238V92zm26.667 14.625c6.688.25 12.826-.25 18.413-1.5s10.603-3.312 15.047-6.188c4.445-2.875 8.276-6.583 11.493-11.124 3.216-4.542 5.798-9.98 7.746-16.313v6c0 6.833-1.164 13.187-3.493 19.063a44.989 44.989 0 0 1-10.222 15.5c-4.487 4.458-9.947 8.062-16.38 10.812-6.435 2.75-13.757 4.375-21.969 4.875l-4.317-2.25c-.339-.25-3.133-2.437-8.381-6.563-5.25-4.125-8.847-10.354-10.794-18.687 2.878 1.75 6.201 3.187 9.968 4.313 3.767 1.125 8.064 1.812 12.89 2.062zM20.477 14.25h7.11v7h-7.11v-7zM125.464 0c.676 0 1.268.242 1.775.725.507.483.761 1.062.761 1.739 0 .724-.254 1.328-.76 1.811-.508.483-1.1.725-1.776.725a2.372 2.372 0 0 1-1.74-.725c-.482-.483-.724-1.087-.724-1.811 0-.677.242-1.256.725-1.74A2.372 2.372 0 0 1 125.464 0zm0 4.638c.58 0 1.075-.206 1.485-.616.41-.41.616-.93.616-1.558 0-.58-.205-1.075-.616-1.486a2.024 2.024 0 0 0-1.485-.616c-.58 0-1.063.206-1.45.616a2.09 2.09 0 0 0-.58 1.486c0 .628.194 1.147.58 1.558.387.41.87.616 1.45.616zm1.16-2.754c0 .242-.061.423-.182.544-.12.12-.302.205-.543.253l.797 1.232h-.435l-.797-1.232h-.507v1.232h-.435V1.014h1.087c.386 0 .652.073.797.218.145.145.217.362.217.652zm-1.16.435c.193 0 .362-.024.507-.073.145-.048.217-.169.217-.362 0-.193-.06-.326-.18-.398a.906.906 0 0 0-.472-.11h-.58v.943h.508z"></path>
// </svg>
//
//  */