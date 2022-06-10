import IProduct from "src/components/products/model/IProduct";
import IBasket from "../contracts/IBasket";
import reddisConnection from '../../../infrastructure/connections/redis';
import IBasketConfigurable from "../contracts/IBasketConfigurable";

export default class BasketRedisProvider implements IBasket, IBasketConfigurable {
    private key: string = '';
    public config(config: string): void {
        this.key = config;
    }
    public add(product: IProduct): void {
        reddisConnection.get(this.key).then(result => {
            if (result){
                const items = JSON.parse(result as string);
                items.push(product);
                reddisConnection.set(this.key, JSON.stringify(items))
                .then(result => { })
                .catch(error => { });
            }
        }).catch( error => {
            console.log(`redis cannot fetch basket items : ${error}`);
        });
    }
    public remove(product: IProduct): void {
        const key = 'session:basket:uid'
        reddisConnection.get(key).then(result => {
            if (result){
                const items = JSON.parse(result as string);
                items.splice(items.indexof(product), 1);
                reddisConnection.set(key, JSON.stringify(items))
                .then(result => { })
                .catch(error => { });
            }
        }).catch( error => {
            console.log(`redis cannot fetch basket items : ${error}`);
        });
    }
    public async items(): Promise<IProduct[]> {
        const items = await this.getItems();
        return items;
    }
    public async count(): Promise<number> {
        const items = await this.getItems();
        return items.length;
    }
    public clear(): void {
        reddisConnection.del(this.key);
    }
    public async total(): Promise<number> {
        const items = await this.getItems();
        return items.reduce((total: number , product: IProduct) => total + product.price, 0);
    }
    public async has(product: IProduct): Promise<boolean> {
        const items = await this.getItems();
        return items.includes(product);
    }
    private async getItems(): Promise<IProduct[]> {
        const items = await reddisConnection.get(this.key)
        .then( (result) => result )
        .catch( ((error) => false) );
    if (items) {
        const decodedItems = JSON.parse(items as string);
        return decodedItems;
    }
    return [];
    }
}