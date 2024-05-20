# Simple Blockchain Implementation Practice

This project is an example of implementing a simple blockchain using TypeScript.

## What is TypeScript?

TypeScript is a superset of JavaScript that adds static types to the language, improving code readability and maintainability. 
Developed by Microsoft, it compiles to JavaScript, allowing it to run in any environment where JavaScript runs. Key features include a powerful type system, early adoption of new JavaScript features, and enhanced support from development tools.

## Blockchain Result 

This blockchain has a basic block chain structure, where each block contains the hash of the previous block. The result of creating the blockchain is as follows:

```typescript
[
  Block {
    prevHash: '',
    height: 1,
    data: 'First one',
    hash: 'd90f2cc6ecdb63760af30f041a06e85e9a4d3376cccc09ff807e08c749e81ca9'
  },
  Block {
    prevHash: 'd90f2cc6ecdb63760af30f041a06e85e9a4d3376cccc09ff807e08c749e81ca9',
    height: 2,
    data: 'Second one',
    hash: '21625d153b9a2ba0996ac8a8ce85b78d5512a4c0bbf647548b0befab3e9b3cfe'
  },
  Block {
    prevHash: '21625d153b9a2ba0996ac8a8ce85b78d5512a4c0bbf647548b0befab3e9b3cfe',
    height: 3,
    data: 'Third one',
    hash: '33090390c5b209e1796881ef8aa55128e9beab0941cbc6f4989260d6f5bd961b'
  }
]

## Each block has the following properties:

prevHash: The hash value of the previous block
height: The height (or order) of the block
data: The data stored in the block
hash: The hash value of the current block
