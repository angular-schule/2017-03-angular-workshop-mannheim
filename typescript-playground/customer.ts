export class Customer {
    constructor(private id: number) {
        
    }

    hallo() {
        console.log(`hello world ${this.id}!`);
    }
}
