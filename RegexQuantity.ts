export class RegexQuantity {
    regexQuantity: RegExp = /^[1-9]\d*$/;
    checkRegexQuantity(regexQuantity: any): boolean{
        return this.regexQuantity.test(regexQuantity)
    }
};
