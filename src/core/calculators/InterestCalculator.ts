export class InterestCalculator {
    private interestRate: number;
    private capitalMoney: number;
    private timeInvested: number;

    constructor() {
        this.interestRate = 0;
        this.capitalMoney = 0;
        this.timeInvested = 0;
    }

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

    async commonInterestCalc(capital: number, interest: number, time: number): Promise<number> {
        this.capital = capital;
        this.interestRate = interest;
        this.time = time;
    
        await this.toCompoundRate();

        return (
            this.capital * this.interest * this.time
        ) / 100;
    }

    async commonInterestAmount(capital: number, interest: number, time: number): Promise<number> {
        const totalInterest = await this.commonInterestCalc(capital, interest, time);

        return this.capital + totalInterest;
    }

    async compoundInterestCalc(capital: number, interest: number, time: number): Promise<number> {
        this.capital = capital;
        this.interestRate = interest;
        this.time = time;

        await this.toCompoundRate();

        return (
            this.capital * (100 + this.interest) ** this.time
        ) / 100 ** this.time;
    }

    async compoundInterestAmount(capital: number, interest: number, time: number): Promise<number> {
        const totalInterest = await this.compoundInterestCalc(capital, interest, time);

        return this.capital + totalInterest;
    }
}
