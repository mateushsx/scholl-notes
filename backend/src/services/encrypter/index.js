import bcrypt from 'bcryptjs';

export class Encrypter {
    async decrypt(input) {
        const compare = await bcrypt.compare(input.plain, input.hash);
        return compare;
    }

    async encrypt(cipher) {
        const hash = await bcrypt.hash(cipher, 10);
        return hash;
    }
}
