let listSearch = {
    getItemById: function(allItemsWithId, idToBeSearched) {
        for (let i = 0; i < allItemsWithId.length; i++) {
            if (allItemsWithId[i].id === idToBeSearched) {
                return allItemsWithId[i];
            }
        }
        return null;
    },

    getNeighborItemById: function(allItemsWithId, idToBeSearched, type) {
        for (let i = 0; i < allItemsWithId.length; i++) {
            if (allItemsWithId[i].id === idToBeSearched) {
                if (type === 'prev' && i > 0) {
                    return {
                        item: allItemsWithId[i - 1],
                        isItemAtEdge: i === 1
                    };
                }
                if (type === 'next' && i < allItemsWithId.length - 1) {
                    return {
                        item: allItemsWithId[i + 1],
                        isItemAtEdge: i === allItemsWithId.length - 2
                    };
                }
                return null;
            }
        }
        return null;
    }
};