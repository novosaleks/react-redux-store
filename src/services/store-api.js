export default class StoreAPI {
    data = [
        {id: 0, title: 'just do it', author: 'author1', price: 50.412},
        {id: 1, title: 'tirikar', author: 'migran', price: 700},
        {id: 2, title: 'penra', author: 'rapapam', price: 2000},
    ];

    getData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data);
            }, 700);
        });
    };
}