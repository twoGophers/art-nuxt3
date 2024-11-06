// server/api/getThree.ts
import { promises as fs } from 'fs'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  try {
    const data = await fs.readFile('task_json.txt', 'utf-8')
    const jsonData = JSON.parse(data)
    return jsonData
  } catch (error) {
    return { error: 'Failed to read JSON file' }
  }
})
