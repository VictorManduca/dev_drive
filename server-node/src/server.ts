import dotenv from 'dotenv'
import path from 'path'

import app from './app'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const port = process.env.PORT
app.listen(port, () => console.log(`server running on port: ${port}`))
