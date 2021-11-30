# verification-otp-generator

Verification OTP Generator is a simple and flexible verification code generator.

## Installation

Use [npm](https://github.com/npm/cli):

```npm install verification-otp-generator```

## Usage

```javascript
const otpGen = require('verification-otp-generator')
const allChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ!#$()[]{}-*+&%'
const digits = '01234567890'

let otp1 = otpGen(9, digits)

let otp2 = otpGen(9, allChars)

```
### Output examples

**otp1**: 452402813

**otp2**: 2pUFQ!5GF

## API

```javascript 
 verification-otp-generator(size, characters)
```

- size - the size of the OTP code
- characters - a string of characters to use to generate the code (it's up to you) 

## License

verification-otp-generator is licensed under the MIT license