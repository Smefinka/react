class Hamburger {

    constructor(SIZE, STUFFING) {
        this.calories = 0;
        this.toping = {
            'calories': 0,
            'price': 0
        };
        this.price = 0;
        this.SIZE = SIZE;
        this.STUFFING = STUFFING;
    }

    calculateCalories() {
        this.calories = this.SIZE.calories + this.STUFFING.calories + this.toping['calories'];
        return this.calories;
    }

    calculatePrice() {

        this.price = this.SIZE.price + this.STUFFING.price + this.toping['price'];
        return this.price;

    }

    addTopping(toping) {

        this.toping['calories'] += toping.calories;
        this.toping['price'] += toping.price;

        return this.toping;
    }

}

const sizes = {
    SMALL: { price: 50, calories: 20 },
    BIG: { price: 100, calories: 40 }
};

const stuffings = {
    CHEESE: { price: 10, calories: 20 },
    SALAD: { price: 20, calories: 5 },
    POTATO: { price: 15, calories: 10 }
};

const toppings = {
    SPICE: { price: 15, calories: 0 },
    MAYONES: { price: 20, calories: 5 }
};

// маленький гамбургер із начинкою із сиру
const hamburger = new Hamburger(sizes.SMALL, stuffings.SALAD);
const hamburger2 = new Hamburger(sizes.BIG, stuffings.CHEESE);
//console.log('Calories: ' + hamburger.calculateCalories())
// Добавка з майонезу
hamburger.addTopping(toppings.MAYONES);
console.log('Calories: ' + hamburger.calculateCalories());
hamburger.addTopping(toppings.MAYONES);
console.log('Price hamburger1: ' + hamburger.calculatePrice());
hamburger.addTopping(toppings.MAYONES);
console.log('Calories hamburger1: ' + hamburger.calculateCalories());
hamburger2.addTopping(toppings.SPICE);
console.log('Calories hamburger2: ' + hamburger2.calculateCalories());
// скільки коштує
console.log('Price hamburger1: ' + hamburger.calculatePrice());
console.log('Price hamburger2: ' + hamburger2.calculatePrice());
