import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import * as zod from 'zod'

import { createGoalCompletion } from '../functions/create-goal-completion'

export const createGoalCompletionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/completions',
    {
      schema: {
        body: zod.object({
          goalId: zod.string(),
        }),
      },
    },
    async request => {
      const { goalId } = request.body

      await createGoalCompletion({
        goalId,
      })
    }
  )
}
