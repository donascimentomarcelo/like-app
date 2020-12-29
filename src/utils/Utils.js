export function capitalizeFristLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}

/**
 * It should filter an array, by quantity, if showAll is FALSE
 * @param {all items of an array} allItems 
 * @param {define if will return all items, case true, or will filter it } showAll 
 * @param {quantity items should be showed -1} quantity 
 */
export function filterArrayByQuantity(allItems, showAll, quantity) {
    const array = [];
    if (!showAll) {
        allItems.forEach((item, index) => {
            if (index <= quantity) {
                array.push(item);
            }
        })
        return array;
    }
    return allItems;
}