export type TError = {
  response: {
    data: {
      apiVersion: string
      error: string
      requestId: string
      statusCode: number
      success: boolean
      timestamp: string
      message?: string[] | string
    }
  }
}
