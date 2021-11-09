import App from './config/App'
import dotenv from 'dotenv'

const port = process.env.PORT || 3000

App.listen(port, () => {
  console.log(`Server running on port ${port}`)
})