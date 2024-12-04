document.getElementById('toggleButtonEng').addEventListener('click', function (event) {
        event.preventDefault(); 
        const rus = document.getElementById('rus');
        const eng = document.getElementById('eng');
    
        // Переключаем видимость блоков
        if (rus.style.display === 'none') {
            rus.style.display = 'block';
            eng.style.display = 'none';
        } else {
            rus.style.display = 'none';
            eng.style.display = 'block';
        }
    });