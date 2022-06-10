import IProduct from "src/components/products/model/IProduct";
import IBasket from "../contracts/IBasket";

export default class BasketMemoryProvider implements IBasket{
    private basketItems: IProduct[] = [];

    public add(product: IProduct): void {
        this.basketItems.push(product);
    }
    public async remove(product: IProduct): Promise<void> {
        if (await this.has(product)) {
            this.basketItems.splice(this.basketItems.indexOf(product), 1);
        }
    }
    public items(): Promise<IProduct[]> {
        return Promise.resolve(this.basketItems);
    }
    public count(): Promise<number> {
        return Promise.resolve(this.basketItems.length);
    }
    public clear(): void {
        this.basketItems = [];
    }
    public total(): Promise<number> {
        const totalBasket = this.basketItems.reduce((total, product: IProduct) => total + product.price, 0);
        return Promise.resolve(totalBasket);
    }
    public has(product: IProduct): Promise<boolean> {
        return Promise.resolve(this.basketItems.includes(product));
    }

}