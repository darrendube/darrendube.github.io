---
template: BlogPost
path: /blog/blockchain/cryptographic-hashing-for-blockchains
date: 2020-08-12T15:19:52.718Z
title: Cryptographic Hashing for Blockchains
metaDescription: Meta description for blog post
thumbnail: /assets/0_BkjXH7Rq3s45wvpb.png
category: blockchain
type: article
---
The key to Blockchain Immutability is the hash function. If it wasn’t for this one feature, the blockchain may not even have been invented. It’s what makes transactions recorded on a blockchain permanent in that they can’t be:

* undone/removed from the blockchain, and
* altered to change something (like the amount).

In simple terms, the hash of a block is basically its ID or its fingerprint, and it’s derived from the data in that block. The goal of a hash function is to:

1. Convert data of arbitrary length into a string of text of fixed length (this string is referred to as a **hash**).
2. Changing a single bit or character in the data should completely change the hash.
3. Generally, two different pieces of data should not produce the same hash.
4. You can turn data into a hash, but you can’t derive data from a hash.

So, if you input the text ‘this is a hash function’ into the SHA256 hash function, it will give out the hash **b5962d8173c14e60259211bcf25d1263c36e0ad7da32ba9d07b224eac1834813**. If you input the character ‘a’ into the same hash function, it will output the hash **ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb**. From this, we can see that data of any length will give a hash of the same length (256 bits with the SHA256 algorithm).

![Cryptographic hashing](https://miro.medium.com/max/998/1*vjeGSA5wdptrdsBK2eB9eA.png)

## Hashing vs. Encryption

Please note that hashing is not the same as encryption. With encryption, you can decrypt the encrypted data. With hashes, you cannot obtain the data you hashed, i.e. You cannot ‘decrypt’ a hash. All the data is lost when hashed. Another property of a hash that differentiates it from encryption (and is very helpful for blockchains) is that, if you change one bit, the entire hash changes. Meaning, if someone tries to alter **anything** in a block, (like the amount sent or to which account it was sent to), the entire hash changes.

So, in summary, the hash of a block is derived from all the data in that block.

But this feature on its own doesn’t do much. How will we know if a hash has changed? We could keep a database of the hashes of all the blocks, but then this brings us back to square one — how do we prevent the hacker from tampering with that database?

## Hash of previous block

In addition to a *nonce* (which I will explain in a later article), *hash*, and *data* variable, each block in the blockchain has another variable —*previous hash*. The *previous hash* is the hash of the preceding block, and it has to match the *hash* variable of that block. If the *hash* of one block and the *previous hash* of the next block don’t match, we will know something has been changed.

![blockchain](https://miro.medium.com/max/1498/1*EleTseTqvZpfvaRN0Db2aA.png)

You might be thinking — so what’s stopping the hacker from changing the *previous hash* of all successive blocks?

Hashing is only one part of the blockchain’s solution to the [Byzantine Generals Problem](https://darrendube.com/blog/uncategorised/byzantine-generals-problem). Stay tuned for the next articles on consensus algorithms and decentralisation.
