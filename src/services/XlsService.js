const _innAddToMapItem = (mapItem, item) => {
    return {
        name: [...mapItem.name, item[1]],
        form: [...mapItem.form, item[2]],
        num: [...mapItem.num, item[3]],
        price: [...mapItem.price, item[4]*item[3]],
        spend: 0
    }
}

const _innCreateMapItem = (item) => {
    return {
        name: [item[1]],
        form: [item[2]],
        num: [item[3]],
        price: [item[4]*item[3]],
        spend: 0
    }
}

const _averageMapData = (mapItem) => {
    const totalNum = mapItem[1].num.reduce((acc, item) => acc + item, 0);
    const totalSum = +(mapItem[1].price.reduce((acc, item) => acc + item, 0).toFixed(2));
    const totalPrice = +(totalSum / totalNum).toFixed(2)
    return {
        inn: mapItem[0],
        name: mapItem[1].name,
        form: mapItem[1].form,
        num: totalNum,
        price: totalPrice,
        spend: totalSum
    }
}

export const _totalByResultItems = (arr) => {
    const total = ["", "", "Итого:", 0, 0, 0];
    for(const item of arr) {
        total[3] += item.num;
        total[5] += item.spend;
    }
    total[4] = (total[5]/total[3]).toFixed(2);
    total[5] = total[5].toFixed(2);
    return total;
}

export const mainSetData = (items) => {
    const newItems = [];
    const total = ["", "", "Итого:", 0, 0, 0];

    items.forEach(item => {
        const result = (item[3] * item[4]).toFixed(2);
        newItems.push([...item, +result]);
        total[3] += +item[3];
        total[5] += +result;
    });
    total[4] = (total[5]/total[3]).toFixed(2);
    total[5] = total[5].toFixed(2);
    return [newItems, total];
}

export const innSetData = (items) => {
    const newItems = new Map();
    const resultItems = [];

    items.forEach(item => {
        if(newItems.has(item[0])){
            newItems.set(item[0], _innAddToMapItem(newItems.get(item[0]), item));
        } else {
            const newItem = _innCreateMapItem(item);
            newItems.set(item[0], newItem);
        }
    });
    for(const mapItem of newItems) {
        resultItems.push(_averageMapData(mapItem));
    }

    return [resultItems, _totalByResultItems(resultItems)];
}