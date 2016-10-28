$(document).ready(function () {
        var numDivItems = 3;

        var lastVisibleDivItemIndex = numDivItems - 1;
        var numItemText = 1;


        var lastVisibleItemTextIndex = numItemText - 1;

        $('.right-descr').each(function (index, element) {
            var textDiv = $(this).find('div.text');

            toggleRedundantDivs(textDiv, 'div.item', false, lastVisibleDivItemIndex);
            if (textDiv.find('.item').length > numDivItems)
                textDiv.append('<a href="#" class="read-more bot-arrow">Все функции</a>');
            $(this).find('div.item-text').each(function () {
                toggleRedundantDivs($(this), 'p', false, lastVisibleItemTextIndex);
                if ($(this).find('p').length > numItemText)
                    $(this).parent().find('span.item-title').addClass('bot-arrow');
            });

        });
        $(document).on('click', '.read-more.bot-arrow', function (e) {
            e.preventDefault();
            toggleRedundantDivs($(this).parent(), 'div.item', true, lastVisibleDivItemIndex);
            $(this).removeClass('read-more bot-arrow').addClass('read-more top-arrow').text('Свернуть');
        });
        $(document).on('click', '.read-more.top-arrow', function (e) {
            e.preventDefault();
            toggleRedundantDivs($(this).parent(), 'div.item', false, lastVisibleDivItemIndex);
            $(this).removeClass('read-more top-arrow').addClass('read-more bot-arrow').text('Все функции');
        });
        $(document).on('click', 'span.item-title.bot-arrow', function (e) {
            e.preventDefault();
            toggleRedundantDivs($(this).parent(), 'p', true, lastVisibleItemTextIndex);
            $(this).removeClass('bot-arrow').addClass('top-arrow');
        });
        $(document).on('click', 'span.item-title.top-arrow', function (e) {
            e.preventDefault();
            toggleRedundantDivs($(this).parent(), 'p', false, lastVisibleItemTextIndex);
            $(this).removeClass('top-arrow').addClass('bot-arrow');
        });

        function toggleRedundantDivs(parent, element, isShow, idx) {
            if (parent != null) {
                $(parent).find(element).each(function (index, element) {
                    isShow == false && index > idx ? $(this).hide('slide') : $(this).show('slide');
               });
            }
        }
    });