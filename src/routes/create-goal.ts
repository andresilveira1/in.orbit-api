import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import * as zod from 'zod'

import { createGoal } from '../functions/create-goal'

export const createGoalRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/goals',
    {
      schema: {
        body: zod.object({
          title: zod.string(),
          desiredWeeklyFrequency: zod.number().int().min(1).max(7),
        }),
      },
    },
    async request => {
      const { title, desiredWeeklyFrequency } = request.body

      await createGoal({
        title,
        desiredWeeklyFrequency,
      })
    }
  )
}
