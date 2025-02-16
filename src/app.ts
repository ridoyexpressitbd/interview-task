import express, { Request, Response } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import notFound from './app/middlewares/notFound'
import routers from './app/routers'

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'http://localhost:5174',
      'http://localhost:3000'
    ],
    credentials: true
  })
)

app.use('/task', routers)

// Home Route.
const homeRoute = (req: Request, res: Response) => {
  res.status(200).json({
    server: 'Active',
    success: true,
    stutas: 200,
    message: 'This is Home Route.'
  })
}

app.get('/', homeRoute)

// Error handling middleware
app.use(globalErrorHandler as unknown as express.ErrorRequestHandler)
app.use(notFound as unknown as express.ErrorRequestHandler)
export default app
