import {convertToPigLatin1, convertToPigLatinPassing, convertToPigLatinNullOrEmptyPassing, convertToPigLatinFinal} from './pigLatin'



// I can see how this nesting works if we had a component and we wanted to verify all the fields and subcomponents were working correctly we would nest it
describe("pig latin",()=> {
        describe("pigLatin failed test",() => {
            it("should convert a word to pig latin this will fail", ()=>{       
                expect(convertToPigLatin1("pig")).toBe("igpay");
            });
        });
        
        describe("converts to pig latin",() => {
            it("should convert a word to pig latin this will not fail", ()=>{       
                expect(convertToPigLatinPassing("pig")).toBe("igpay");
            });
        });

        describe("handle null entry ",() => {
            it("should convert a word to pig latin this will not fail if word is null or emtpy", ()=>{       
                expect(convertToPigLatinNullOrEmptyPassing("")).toBe("");
                expect(convertToPigLatinNullOrEmptyPassing()).toBe();
            });
        });

        describe("handle upper cases",() => {
            it("should handle both upper case and lowercases", () =>{
            expect(convertToPigLatinFinal("Pig")).toBe("igpay");
            });
        });
});