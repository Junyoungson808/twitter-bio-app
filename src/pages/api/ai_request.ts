// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-Jw5gFs79jK2hG6BxJqa2NoWv',
  apiKey: process.env.OPENAI_KEY
})
const openai = new OpenAIApi(configuration);

function generatePrompt(description: string) {
  return `Generate a Twitter bio using the following personal description: 

  Description: ${description}
  `
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const body = req.body;

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(req.body.description),
    temperature: 1,
    max_tokens: 200,
  })
  
  const result = completion.data.choices[0].text

  res.status(200).json({ data: result })
}
