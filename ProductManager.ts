import {Product} from "./Product";
export class ProductManager {
    listProduct: Product[] = [];
    add(product: Product) {
         this.listProduct.push(product);
    };

    show() {
        return this.listProduct;
    };

    findByName(str: string) {
        let arr = [];
        let count = 0;
        for (let i = 0; i < this.listProduct.length; i++) {
            //@ts-ignore
            if (this.listProduct[i].name.includes(str)) {
                let obj =
                    {
                        id: this.listProduct[i].id,
                        name: this.listProduct[i].name,
                        type: this.listProduct[i].type,
                        price: this.listProduct[i].price,
                        quantity: this.listProduct[i].quantity
                    }
                arr.push(obj);
                count ++;
            }
        }
        if(count === 0 ) {
            console.log('Không có dữ liệu phù hợp');
        } else {
            console.log(arr);
        }
    };

    findById(id: number) {
        for (let i = 0; i < this.listProduct.length; i++) {
            if (this.listProduct[i].id === id) {
                return i;
            }
        }
        return -1;
    };

    edit(id: number, data: Product) {
        let index = this.findById(+id);
        if (index === -1) {
            console.log('Không tồn tại mặt hàng cần update');
        } else {
            this.listProduct[index] = data;
        }

    };

    remove(id: number) {
        let index = this.findById(+id);
        if (index === -1) {
            console.log('Không tồn tại mặt hàng cần xóa');
        } else {
            this.listProduct.splice(index, 1);
            console.log('Xóa thành công');
        }
    };
};






