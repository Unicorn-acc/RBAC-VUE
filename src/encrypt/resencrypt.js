
import JSEncrypt from 'jsencrypt/bin/jsencrypt.min'

// 密钥对生成 http://web.chacuo.net/netrsakeypair

const publicKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgoitkymsW4wuxcroQwUgkvd43Qx+CSgxgJIUs6Mzm9oN4+zMxBz3VMiPfF1wV8OWMXwMylnGf2GoXkco9+ucAwErXfja8gjyUdRAv3nX1COhWllmQ14MPhkedKivmreF7cFtwYOWSCwh8oLJKnvV3GzA8hICeKS3YKRkDgntr7wIDAQAB'

const privateKey = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAOCiK2TKaxbjC7FyuhDBSCS93jdDH4JKDGAkhSzozOb2g3j7MzEHPdUyI98XXBXw5YxfAzKWcZ/YaheRyj365wDAStd+NryCPJR1EC/edfUI6FaWWZDXgw+GR50qK+at4XtwW3Bg5ZILCHygskqe9XcbMDyEgJ4pLdgpGQOCe2vvAgMBAAECgYBg8hxAN4vYKMzXHGho6sGz+a15tCJZHJQSujAvnZkw5JsBD4icVD+/TxBkK7S2U2z+E9NRddQ75C6FVYovDaW7wkOzjmTnbgTm8Pq2aAlYSH/YKm/pFI1zlbl31KJYbnEzRAU2VwoC1kMJQLHg8iinlKwW/qOr/gs3CJ9YFrk/IQJBAPDm7tqX8t/BZQ8ZMk+WybT3m8wRrBjT8sS5BZab1Der6ydlUvew1kjJCT5WVdDoh8bzHpFLPLlIMk5rOD9iom0CQQDutjh8loQ9r4capSNnHyzneKui2o+pJ+NqgzW7zVswW0Xf0ezuZesAuCjzZrGukxeKOOJVTDzkOnbvXb1zF25LAkBHiezIkXMYq4/dSfg81mSUDyv/EAhxXw+rB972+NOurKkqi9Z1o9geyUSrdGwLm+ImXLBpKVShGSWHUCPl/t6JAkEAqkoTwc0eSWMOXlOwDcCPqBDNYD/KfEGYWkN/8Zltk/GIx0JaYzcRjlHR5NE9r+v+vvwVegQI7EdI0TluDMyKQQJBAKBMVXNYqy5Xw3dNFOo104MnKlXxsGDWEn94DHD6ivTaHt5wijRH2y1MrAeUND0EjgldfYN2Bp1tpG1ZiHjcdyY='


import jsrsasign from 'jsrsasign'

export function encrypt(data) {
    // console.log("进入加密方法" + data);
    data = encodeURIComponent(data);
    let ppKey = '-----BEGIN PUBLIC KEY-----';
    ppKey += publicKey;
    ppKey += '-----END PUBLIC KEY-----';
    const pubKey = jsrsasign.KEYUTIL.getKey(ppKey);
    let singResult = jsrsasign.KJUR.crypto.Cipher.encrypt(data, pubKey, "RSAOAEP")
    singResult = jsrsasign.hextob64(singResult);
    // console.log("sign加密结果是" + singResult);
    return singResult
}

// // 加密
// export function encrypt(txt) {
//     const encryptor = new JSEncrypt()
//     encryptor.setPublicKey(publicKey) // 设置公钥
//     return encryptor.encrypt(txt) // 对数据进行加密
// }

// 解密
export function decrypt(txt) {
    const encryptor = new JSEncrypt()
    encryptor.setPrivateKey(privateKey) // 设置私钥
    return encryptor.decrypt(txt) // 对数据进行解密
}

