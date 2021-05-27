// starter function or fail case
// aka what I started with
export function convertToPigLatin1(word){
    return;
}

/*
The rules used by Pig Latin are as follows from wikipedia:

For words that begin with consonant sounds, 
all letters before the initial vowel are 
placed at the end of the word sequence. 
Then, "ay" is added, as in the following examples:
"pig" = "igpay"
When words begin with consonant clusters (multiple consonants that form one sound), the whole sound is added to the end when speaking or writing.[4]

"smile" = "ilesmay"
For words that begin with vowel sounds, the vowel is left alone, and most commonly 'yay' is added to the end. But in different parts of the world, there are different 'dialects' of sorts. Some people may add 'way' or 'hay' or other endings. Examples are:

"eat" = "eatyay" or "eatay"

or tl;dr 
if there is a vowel we add yay else we add we find first bowel and shift the rest to the back and add ay
*/


// missed the export hence why it was not being recognized before 🙃 
// base passing case
export function convertToPigLatinPassing(word){
    const vowels = ['a','e','i','o','u'];

    if(vowels.indexOf(word[0]) > -1){
        // begins with bowel case
        return word + "yay";

    }else{
        // push all consonants back until we get vowel
        for(let i =0; i < word.length; i++){
            if(vowels.indexOf(word[i]) >-1){              
                let index = word.indexOf(word[i]);             
                return word.substring(index,word.length) + word.substring(0,index) +"ay";
            }
        };
        // if we got this far this mean there is no vowel     
        return word + "yay";    
    }
}

export function convertToPigLatinNullOrEmptyPassing(word){
    if(!word || word.length === 0){
        return word;
    }
    const vowels = ['a','e','i','o','u'];

    if(vowels.indexOf(word[0]) > -1){
        // begins with bowel case
        return word + "yay";

    }else{
        // push all consonants back until we get vowel
        for(let i =0; i < word.length; i++){
            if(vowels.indexOf(word[i]) >-1){              
                let index = word.indexOf(word[i]);             
                return word.substring(index,word.length) + word.substring(0,index) +"ay";
            }
        };
        // if we got this far this mean there is no vowel     
        return word + "yay";    
    }
}

// final version
export function convertToPigLatinFinal(word){

    if(!word || word.length === 0){
        return word;
    }

    const vowels = ['a','e','i','o','u','A','E','I','O','U'];

    word = word.toLowerCase();

    if(vowels.indexOf(word[0]) > -1){
        // begins with bowel case
        return word + "yay";

    }else{
        // push all consonants back until we get vowel
        for(let i =0; i < word.length; i++){
            if(vowels.indexOf(word[i]) >-1){              
                let index = word.indexOf(word[i]);             
                return word.substring(index,word.length) + word.substring(0,index) +"ay";
            }
        };
        // if we got this far this mean there is no vowel     
        return word + "yay";    
    }
}