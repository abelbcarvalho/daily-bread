export class InterestCalculator {
    private interestRate: number;
    private capitalMoney: number;
    private timeInvested: number;

    get interest(): number {
        return this.interestRate * 100;
    }

    get capital(): number {
        return this.capitalMoney;
    }

    get time(): number {
        return this.timeInvested;
    }

    set interest(interestRate: number) {
        this.interestRate = interestRate;
    }

    set capital(capitalMoney: number) {
        this.capitalMoney = capitalMoney;
    }

    set time(timeInvested: number) {
        this.timeInvested = timeInvested;
    }

    private async toCompoundRate(): Promise<void> {
        this.interest = 100 + this.interest;
    }

    constructor() {
        this.interestRate = 0;
        this.capitalMoney = 0;
        this.timeInvested = 0;
    }
}
