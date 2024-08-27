import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios"

export const fetchRecord = async (resource: string, uid: string) => {
  const authToken = localStorage.getItem("access_token")

  const headers: AxiosRequestHeaders = {
    "Content-Type": "application/json",
    "x-token": "",
  }

  if (authToken) {
    headers["x-token"] = `Bearer ${authToken}`
  }

  const options: AxiosRequestConfig<any> = {
    url: `${process.env.GATSBY_API_HOST}${resource}/${uid}`,
    method: "GET",
    headers: headers,
  }

  try {
    const response = await axios(options)

    if (response) {
      return response.data
    }
  } catch (error) {
    return {
      success: false,
      error,
    }
  }
}
