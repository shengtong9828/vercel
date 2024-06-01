import { VercelRequest, VercelResponse } from '@vercel/node'

// export default async (req: VercelRequest, res: VercelResponse) => {
//   const data = {
//     msg: 'hello world!'
//   }
//   res.status(200).json(data)
// }

module.exports = async (req: VercelRequest, res: VercelResponse) => {
  console.log('req', req)
  console.log('res', res)

  const data = {
    msg: 'hello world!'
  }
  res.status(200).json(data)
}
