// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSortedAndPaginatedAllPostsData } from "@/lib/posts"

export default function handler(req, res) {
  try {
    const { page = 1, limit = 10, tags = null } = req.query

    if (limit <= 0) {
      res.status(402).json({
        status: 'FAILED',
        data: {
          error: `The limit parameter cannot be ${limit}`
        }
      })
      return
    }

    const posts = getSortedAndPaginatedAllPostsData(page, limit, tags)
    res.status(200).json({ status: 'OK', data: posts })
  } catch (error) {
    res.status(500).json({ status: 'FAILED', data: { error: error?.message || error.toString() } })
  }
}
