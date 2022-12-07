export class RegexDescription {
    regexDescription: RegExp = /^[A-Za-z0-9]{4,20}$/;
    checkRegexDescription(regexDescription: any): boolean {
        return this.regexDescription.test(regexDescription)
    }
}
