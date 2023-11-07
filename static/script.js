document.addEventListener('DOMContentLoaded', () => {
    const translateButton = document.getElementById('translate-button');
    const elementsToTranslate = document.querySelectorAll('.translate');
    const toggleLanguageButton = document.getElementById('toggle-language-button');
    const translationTargets = document.querySelectorAll('.translate');
    const tableHeadings = document.querySelectorAll('thead th');
    const tableData = document.querySelectorAll('tbody td');

    let isTranslated = false; // Track translation state

    if (translateButton && elementsToTranslate) {
        translateButton.addEventListener('click', () => {
            isTranslated = !isTranslated; // Toggle translation state

            elementsToTranslate.forEach((element) => {
                if (isTranslated) {
                    if (element.dataset.language === 'pt') {
                        element.style.display = 'none';
                    } else {
                        element.style.display = 'block';
                    }
                } else {
                    if (element.dataset.language === 'pt') {
                        element.style.display = 'block';
                    } else {
                        element.style.display = 'none';
                    }
                }
            });

            // Update the button text based on translation direction
            if (isTranslated) {
                translateButton.innerText = 'Natália cheat code';
            } else {
                translateButton.innerText = 'Merel cheat code';
            }
        });
    }

    if (toggleLanguageButton) {
        toggleLanguageButton.addEventListener('click', () => {
            // Toggle the button text
            if (toggleLanguageButton.innerText === 'Merel cheat code') {
                toggleLanguageButton.innerText = 'Natália cheat code';
            } else {
                toggleLanguageButton.innerText = 'Merel cheat code';
            }

            // Toggle the visibility of translations
            translationTargets.forEach((element) => {
                const currentDisplay = element.style.display;
                element.style.display = currentDisplay === 'block' ? 'none' : 'block';
            });

            // Toggle the text content of table headings
            tableHeadings.forEach((heading) => {
                if (heading.innerText === 'Nome') {
                    heading.innerText = 'Name';
                } else if (heading.innerText === 'Name') {
                    heading.innerText = 'Nome';
                } else if (heading.innerText === 'Cor Favorita') {
                    heading.innerText = 'Favorite Color';
                } else if (heading.innerText === 'Favorite Color') {
                    heading.innerText = 'Cor Favorita';
                } else if (heading.innerText === 'Tamanho de Sapato') {
                    heading.innerText = 'Shoe Size';
                } else if (heading.innerText === 'Shoe Size') {
                    heading.innerText = 'Tamanho de Sapato';
                } else if (heading.innerText === 'Tamanho de Calças') {
                    heading.innerText = 'Pants Size';
                } else if (heading.innerText === 'Pants Size') {
                    heading.innerText = 'Tamanho de Calças';
                } else if (heading.innerText === 'Tamanho de Blusa') {
                    heading.innerText = 'Blouse Size';
                } else if (heading.innerText === 'Blouse Size') {
                    heading.innerText = 'Tamanho de Blusa';
                } else if (heading.innerText === 'Hobbies') {
                    heading.innerText = 'Hobbies';
                }
            });

            // Toggle the text content of table data
            tableData.forEach((data) => {
                if (data.innerText === 'Nome') {
                    data.innerText = 'Name';
                } else if (data.innerText === 'Name') {
                    data.innerText = 'Nome';
                } else if (data.innerText === 'Cor Favorita') {
                    data.innerText = 'Favorite Color';
                } else if (data.innerText === 'Favorite Color') {
                    data.innerText = 'Cor Favorita';
                } else if (data.innerText === 'Tamanho de Sapato') {
                    data.innerText = 'Shoe Size';
                } else if (data.innerText === 'Shoe Size') {
                    data.innerText = 'Tamanho de Sapato';
                } else if (data.innerText === 'Tamanho de Calças') {
                    data.innerText = 'Pants Size';
                } else if (data.innerText === 'Pants Size') {
                    data.innerText = 'Tamanho de Calças';
                } else if (data.innerText === 'Tamanho de Blusa') {
                    data.innerText = 'Blouse Size';
                } else if (data.innerText === 'Blouse Size') {
                    data.innerText = 'Tamanho de Blusa';
                } else if (data.innerText === 'Hobbies') {
                    data.innerText = 'Hobbies';
                }
            });
        });
    }

    let myDiv = document.getElementById("santa_cursor");
    //Detect touch device
    function isTouchDevice() {
    //We try to ccreate TouchEvent (it would fail for desktops and throw error)
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
    }
    const move = (e) => {
    //try to aboidany errors for touch screens
    try {
        var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
    } catch (e) {}
    //Set left and top of div based on mouse position
    myDiv.style.left = x - 160 + "px";
    myDiv.style.top = y - 160 + "px";
    };
    //For mouse
    document.addEventListener("mousemove", (e) => {
    move(e);
    });
    //For touch
    document.addEventListener("touchmove", (e) => {
    move(e);
    });
});
