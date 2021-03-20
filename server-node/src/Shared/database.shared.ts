import dotenv from 'dotenv'
import path from 'path'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

dotenv.config({ path: path.resolve(__dirname, '../../.env') })

createConnection()
