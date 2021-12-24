$('.events').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true
});

// добавляем плагин аудио плеер
$(function () {
    $('.header__audio').audioPlayer();
});

$(function () {
    $('.player__music').audioPlayer();
});

// находим название треков
var spanMusic = document.querySelectorAll('li span');

// клиек на трек
for (var i = 0; i < spanMusic.length; i++) {
    spanMusic[i].addEventListener('click', function () {

        //удаление элементов
        $('.player__music').remove();
        $('.player__playlist .audioplayer').remove();

        // удаление класса актив
        var activeMusic = document.querySelectorAll('.player__playlist_active');
        for (let b = 0; b < activeMusic.length; b++) {
            activeMusic[b].classList.remove('player__playlist_active');
        }

        //добавление класса актив у выбронного элемента
        var thisParent = this.parentElement;
        thisParent.classList.add('player__playlist_active');

        //ищем значение атрибута 
        var thisMusic = this.childNodes[1];
        var attributeMusic = thisMusic.getAttribute('src');

        //создаем новый плеер
        var createNewAudio = document.createElement('audio');
        createNewAudio.setAttribute('preload', 'auto');
        createNewAudio.setAttribute('controls', '');
        createNewAudio.classList.add('player__music');

        //добавляем выбранный трек в плеер
        createNewAudio.innerHTML = "<source src=" + attributeMusic + ">";

        //добавляем новый плеер в хтмл
        $(createNewAudio).insertAfter('.player__title');

        //навешиваем на плеер плагин аудио плеер
        $(function () {
            $('.player__music').audioPlayer();
        });

    }, false);
}