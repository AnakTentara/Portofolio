/*document.addEventListener("DOMContentLoaded", () => {
    new TypeIt("#console-typing", {
        strings: [
            `<strong>
                <a style="color: rgb(141, 141, 255);">console</a>.<a style="color: rgb(255, 253, 141);">log</a>
            </strong>
            <a style="color: rgb(255, 107, 206)">(</a>
            <a style="color: rgb(255, 152, 34)">"
                Seorang Remaja yang Tertarik Pada Dunia 
                <strong style="color: rgb(255, 152, 34)">
                    Teknologi
                </strong>
            </a>
            <a style="color: rgb(255, 152, 34)">"</a><a style="color: rgb(255, 107, 206)">)</a>;`,
            `<strong><a style="color: rgb(2, 155, 250);">print</a></strong><a style="color: white">(</a><a style="color: rgb(97, 250, 2)">"Seorang Remaja yang Tertarik Pada Dunia <strong style="color: rgb(97, 250, 2)">Teknologi</strong></a><a style="color: rgb(255, 152, 34)">"</a><a style="color: white">)</a>`,
            `<strong>
                <a style="color: white">cout </a>
                <a style="color: rgb(196, 2, 250)"><< </a>
            </strong>
            <a style="color: rgb(0, 194, 6)">"
                Seorang Remaja yang Tertarik Pada Dunia 
                <strong style="color: rgb(0, 194, 6)">
                    Teknologi
                </strong>
                "
            </a>
            <a style="color: rgb(196, 2, 250)"> <<</a>
            <a style="color: white"> endl;</a>`
        ],
        speed: 50, // Typing speed in ms
        deleteSpeed: 50, // Deleting speed in ms
        cursor: true, // Show blinking cursor
        loop: true // Infinite loop
    }).go();
});
*/
document.addEventListener("DOMContentLoaded", () => {
    new TypeIt("#console-typing", {
        speed: 50, // Typing speed in ms 
        deleteSpeed: 30, // Deleting speed in ms
        cursor: true, // Show blinking cursor
        lifeLike: true,
        loop: true,
    })
    .type(`<strong><a style="color: rgb(141, 141, 255);">console</a>.<a style="color: rgb(255, 253, 141);">log</a></strong><a style="color: rgb(255, 107, 206)">(</a><a style="color: rgb(255, 152, 34)">" Seorang Remaja yang Tertarik Pada Dunia <strong style="color: rgb(255, 152, 34)">Teknologi</strong></a><a style="color: rgb(255, 152, 34)"> "</a><a style="color: rgb(255, 107, 206)">)</a>;`, { delay: 800 })
    .pause(1000)
    .delete(null, { delay: 1000 })
    .type(`<strong><a style="color: rgb(123, 211, 234)">print</a></strong><a style="color: white">(</a><a style="color: rgb(158, 223, 156)">" Seorang Remaja yang Tertarik pada Dunia <strong>Teknologi</strong> "</a><a style="color: white">)</a>`, { delay: 800 })
    .pause(1000)
    .delete(null, { delay: 1000 })
    .type(`<strong><a style="color: white">cout</a></strong><a style="color: rgb(255, 119, 183)"> &lt;&lt; </a><a style="color: rgb(158, 223, 156)">" Seorang Remaja yang Tertarik pada Dunia <strong>Teknologi</strong> "</a><a style="color: rgb(255, 119, 183)"> &lt;&lt; </a><a style="color: white"> endl; </a>`, { delay: 800 })
    .pause(1000)
    .delete(null, { delay: 1000 })
    .go();
}); 

