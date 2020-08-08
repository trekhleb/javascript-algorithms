import caeserCipher from '../caeserCipher';

describe('caeserCipher', () => {
    it('should subtitute each character by shifting up the alphabet by a given integer', () => {


        expect(caeserCipher('abcd', 1)).toBe('bcde');
    });
    

    it('should wrap back to the beginning of the alphabet if it shifts more than the 26 english alphabets', () => {
 

        expect(caeserCipher('xyz', 1)).toBe('yza');
    });
    it('should only shift letters and ignore non-alphabetic characters', () => {

        expect(caeserCipher('gurer ner 9 qbtf!', 13)).toBe('there are 9 dogs!');
    });

    it('should ignore case sensitivity', () => {

        expect(caeserCipher('ABCD', 13)).toBe('bcde');
    });
    
 
})