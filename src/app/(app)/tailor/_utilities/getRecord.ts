import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
export const getRecord = async (args: {
  slug: string
  id: string
  failRedirect?: string
}): Promise<{
  data: any
}> => {
  const { slug, id, failRedirect } = args || {}
  const cookieStore = cookies()
  const token = cookieStore.get('payload-token')?.value

  const orderReq = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/${slug}/${id}`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })

    if (failRedirect && !orderReq.ok) {
        redirect(failRedirect)
    }

  const data = await orderReq.json()

  return {
    data
  }
}
