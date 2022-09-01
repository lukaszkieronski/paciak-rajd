import crypto from 'crypto-js'
import fs from 'fs'

const input = fs.readFileSync('public/questions.json').toString('utf-8')
const encrypted = crypto.AES.encrypt(input, 'paciak').toString()
fs.writeFileSync('public/questions.enc', encrypted)