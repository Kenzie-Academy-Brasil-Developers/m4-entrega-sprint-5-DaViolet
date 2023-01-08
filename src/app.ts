import "reflect-metadata"
import "express-async-errors"
import express from "express"
import handleError from './errors/handleError'
import userRoutes from './routes/users.routes'
import loginRoutes from "./routes/loginRoutes.routes"
import categoryRoutes from "./routes/categories.routes"
import propertyRoutes from "./routes/properties.routes"
import scheduleRoutes from "./routes/schedules.routes"

const app = express()
app.use(express.json())
app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use('/categories', categoryRoutes)
app.use('/properties', propertyRoutes)
app.use('/schedules', scheduleRoutes)

app.use(handleError)

export default app