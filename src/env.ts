import * as zod from 'zod'

const envSchema = zod.object({
  DB_URL: zod.string().url(),
})

export const env = envSchema.parse(process.env)
