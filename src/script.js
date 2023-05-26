function addItemToBasket(id, name, price) {
    clearBasketItem();

    $('.in-basket').hide();
    $('.active').removeClass('active');
    $('.add-to-basket').css('display', 'flex'); //show
    $(`#${id} .add-to-basket`).hide();
    $(`#${id} .in-basket`).css('display', 'flex'); //show
    $(`#${id} footer`).addClass('active');

    $('.basket-item-name').text($(`#${id} .description`).text());
    $('.basket-item-price').text($(`#${id} .price`).text());

    $('.basket-empty').hide();
    $('.checkout-details').show();
}

function removeItemFromBasket(id) {
    $(`#${id} .add-to-basket`).show();
    $(`#${id} .in-basket`).hide();
    $(`#${id} footer`).removeClass('active');

    clearBasket();
}

function clearBasket() {
    clearBasketItem();

    $('.basket-empty').show();
    $('.checkout-details').hide();
}

function clearBasketItem() {
    $('.basket-item-name').text('');
    $('.basket-item-price').text('');
}