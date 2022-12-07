export class RegexPrice {
    regexPrice: RegExp = /^[1-9]\d*$/;
    checkRegexPrice(regexPrice: any): boolean {
        return this.regexPrice.test(regexPrice)
    }
};
