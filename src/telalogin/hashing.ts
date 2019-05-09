import SHA3 from 'sha3';

export function calculateHash(password: string): string {
    const hash = new SHA3(512);
    hash.reset();
    hash.update(password);
    let hashPassword = hash.digest('hex');
    return hashPassword;
}
