import dotenv from 'dotenv'
import path from 'path'

// Load environment variables from .env file
dotenv.config({ path: path.join(process.cwd(), '.env') })

// Export configuration settings from environment variables
export default {
  NODE_ENV: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 5000,
  bcrypt_salt_rounds: process.env.bcrypt || 12,
  mongo_database_url: process.env.MONGO_DATABASE_URL,
  jwt_access_token_secret: process.env.JWT_ACCESS_TOKEN_SECRET,
  jwt_refresh_token_secret: process.env.JWT_REFRESH_TOKEN_SECRET,
  jwt_access_token_expires_in: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
  jwt_refresh_token_expires_in: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN
}
