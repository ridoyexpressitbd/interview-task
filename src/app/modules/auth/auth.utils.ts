import jwt, { JwtPayload } from 'jsonwebtoken'
import { TJwtPayload } from './auth.interface'

export const createToken = (
  jwtPayload: TJwtPayload,
  jwtSecrect: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, jwtSecrect, { expiresIn })
}

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload
}
