let listSearch = {
    getItemById: function(allItemsWithId, idToBeSearched) {
        for (let i = 0; allItemsWithId.length; i++) {
            if (allItemsWithId[i].id === idToBeSearched) {
                return allItemsWithId[i];
            }
        }
        return null;
    },
};