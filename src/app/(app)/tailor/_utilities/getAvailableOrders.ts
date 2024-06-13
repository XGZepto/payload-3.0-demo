import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import type { Order } from '../payload-types'

export const getAvailableOrders = async (args: {
    quantity: number
    failRedirect?: string
  }): Promise<{ orders: Order[] }> => {

  const { quantity, failRedirect } = args || {}
  const cookieStore = cookies()
  const token = cookieStore.get('payload-token')?.value

  const orderReq = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/orders/available/${quantity}`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })

    if (failRedirect && !orderReq.ok) {
        redirect(failRedirect)
    }

    const data = await orderReq.json()
  
    console.log(data)
    return { orders: data }
}
