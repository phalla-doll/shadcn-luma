"use client"

import { sendGAEvent } from "@next/third-parties/google"

type EventParams = Record<string, string | number | boolean>

function trackEvent(eventName: string, params?: EventParams) {
    if (!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) return
    sendGAEvent("event", eventName, params ?? {})
}

export { trackEvent }
export type { EventParams }
