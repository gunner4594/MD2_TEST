import {Product} from "./Product";
import {ProductManager} from "./ProductManager";
import {RegexName} from "./RegexName"
import {RegexPrice} from "./RegexPrice";
import {RegexQuantity} from "./RegexQuantity";
import {RegexDescription} from "./RegexDescription";

let product1 = new Product(1, 'Sam Sung Galaxy J7', 'Mobile Phone', 500, 20, '15-10-2018',  'Waterproof');
let product2 = new Product(2, 'Sam Sung Galaxy J7 Pro', 'Mobile Phone', 700, 10, '20-10-2018', 'Waterproof');
let product3 = new Product(3, 'Iphone 10', 'Mobile Phone', 1000, 10, '20-11-2018', 'Waterproof');
let product4 = new Product(4, 'Iphone 11', 'Mobile Phone', 1200, 15, '20-11-2018', 'Waterproof');
let product5 = new Product(5, 'Iphone 12', 'Mobile Phone', 1400, 5, '20-11-2018', 'Waterproof');
let productManager = new ProductManager();
productManager.add(product1);
productManager.add(product2);
productManager.add(product3);
productManager.add(product4);
productManager.add(product5);

let types = ['Mobile Phone', 'Phone Accessories', 'Personal Computer', 'Computer Accessories']
let input = require('readline-sync');
function main () {
    let menu = `--------Menu chính----------
    1.Hiển thị danh sách hàng hóa
    2.Tìm kiếm mặt hàng theo tên sản phẩm 
    3.Thêm mới một mặt hàng
    4.Chỉnh sửa thông tin một mặt hàng
    5.Xóa mặt hàng
    0.Thoát chương trình`

    let choice = -1;
    do {
        console.log(menu);
        choice = +input.question('Enter choice: ');
        switch (choice) {
            case 1:
                showProduct ();
                break;
            case 2:
                findProduct();
                break;
            case 3:
                addProduct()
                break;
            case 4:
                editProduct();
                break;
            case 5:
                removeProduct();
                break;
        }

    } while (choice !== 0);
}
main();

function showProduct () {
    console.log('-----Hiển thị danh sách hàng hóa-----');
    if (productManager.listProduct.length === 0) {
        console.log('Không có dữ liệu');
    } else {
        console.log(productManager.show());
    }
};

function findProduct() {
    console.log('-----Tìm kiếm mặt hàng theo tên sản phẩm-----');
    let str = input.question('Enter keyword: ');
    productManager.findByName(str)
};

function addProduct() {
    console.log('-----Thêm mới một mặt hàng-----');
    let id = +input.question('Enter id: ');

    let flag1 = false;
    let trueName;
    do {
        let name = input.question('Enter name: ');
        let regexName = new RegexName();
        if (regexName.checkRegexName(name)) {
            flag1 = true;
            trueName = name;
        } else {
            console.log('-----Vui lòng nhập lại tên sản phẩm-----');
        };
    } while (flag1 === false)

    let typeIndex = +input.question(`Choice type:  \n 1.Mobile Phone \n 2.Phone Accessories \n 3.Personal Computer \n 4.Computer Accessories \n`);
    let type = types[typeIndex - 1];

    let flag2 = false;
    let truePrice;
    do {
        let price = input.question('Enter price: ');
        let regexPrice = new RegexPrice();
        if (regexPrice.checkRegexPrice(price)){
            flag2 = true;
            truePrice = price;
        } else {
            console.log('-----Vui lòng nhập lại giá sản phẩm-----');
        };
    } while (flag2 === false);

    let flag3 = false;
    let trueQuantity;
    do {
        let quantity = input.question('Enter quantity: ');
        let regexQuantity = new RegexQuantity();
        if (regexQuantity.checkRegexQuantity(quantity)){
            flag3 = true;
            trueQuantity = quantity;
        } else {
            console.log('-----Vui lòng nhập lại số lượng sản phẩm-----');
        };
    } while (flag3 === false);

    let str = Date();
    let arrTime = str.split(" ");
    let day = arrTime[2];
    let month = arrTime[1];
    let year = arrTime[3];
    let dateCreate = day + '/' + month +'/' + year;

    let flag4 = false;
    let trueDescription;
    do {
        let description = input.question('Enter description: ');
        let regexDescription = new RegexDescription();
        if (regexDescription.checkRegexDescription(description)){
            flag4 = true;
            trueDescription = description;
        } else {
            console.log('-----Vui lòng nhập lại mô tả sản phẩm-----');
        };
    } while (flag4 === false);

    let product = new Product(id, trueName, type, truePrice, trueQuantity, dateCreate, trueDescription);
    productManager.add(product);
};

function editProduct() {
    console.log('-----Chỉnh sửa thông tin một mặt hàng-----');
    let id = +input.question('Enter id: ');
    let name = input.question('Enter name: ');
    let typeIndex = +input.question(`Choice type:  \n 1.Mobile Phone \n 2.Phone Accessories \n 3.Personal Computer \n 4.Computer Accessories \n`);
    let type = types[typeIndex - 1];
    let price = +input.question('Enter price: ');
    let quantity = +input.question('Enter quantity: ');
    let str = Date();
    let arrTime = str.split(" ");
    let day = arrTime[2];
    let month = arrTime[1];
    let year = arrTime[3];
    let dateCreate = day + '/' + month + '/' + year;
    let description = input.question('Enter description: ');
    let data = new Product(id, name, type, price, quantity, dateCreate,description);
    productManager.edit(id, data);
};

function removeProduct() {
    console.log('-----Xóa mặt hàng-----');
    let id = +input.question('Enter id: ');
    productManager.remove(id);
};
