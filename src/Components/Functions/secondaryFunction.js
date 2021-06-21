export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = (val) => 
    val.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});