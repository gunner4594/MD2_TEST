
export class RegexName {
    regexName: RegExp = /^[A-Za-z0-9]{4,12}$/;
    checkRegexName(regexName: any): boolean {
        return this.regexName.test(regexName)
    }
}
