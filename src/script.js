function addItemToBasket(id, name, price) {
 
    $(`#${id} .add-to-basket`).hide();
    $(`#${id} .in-basket`).css('display', 'flex'); //show
    $(`#${id} footer`).addClass('active');

    var productnumber = id.slice(-1)
    $(`#basketitem${productnumber} .basket-item-name`).text($(`#${id} .description`).text());
    $(`#basketitem${productnumber} .basket-item-price`).text($(`#${id} .price`).text());
    $(`#basketitem${productnumber}`).show();

    $('.basket-empty').hide();
    $('.checkout-details').show();
}

function removeItemFromBasket(id) {
    $(`#${id} .add-to-basket`).show();
    $(`#${id} .in-basket`).hide();
    $(`#${id} footer`).removeClass('active');

    clearbasketitem(id);
    if(!$('.basketitem').is(':visible')){
        $('.basket-empty').show();
        $('.checkout-details').hide();
    }
}

function clearbasketitem(id) {
    var productnumber = id.slice(-1)
    $(`#basketitem${productnumber}`).hide();
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

function makepayment() {
    var cardno = $('#cardno').val();
    if(cardno.length==0){
        $('#error').text('Error: please enter payment details to proceed')
        $('#error').show();
        return;
    }
    var address = $('#address').val();
    if(address.length==0){
        $('#error').text('Error: please enter delivery address to proceed')
        $('#error').show();
        return;
    }
    if ($('.validator-email.validation-no').length > 0) {
        $('#error').text('Error: please enter valid e-mail address address to proceed')
        $('#error').show();
        return;
    }
    $('#confirmation').show();
    $('#checkout').hide();
    $('.in-basket').hide();
    $('.active').removeClass('active');
    $('.add-to-basket').css('display', 'flex'); //show

}

