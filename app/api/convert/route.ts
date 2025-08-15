import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url) {
      return NextResponse.json({ success: false, error: "URL is required" }, { status: 400 })
    }

    const apiUrl = process.env.API_URL
    const apiKey = process.env.API_KEY

    if (!apiUrl || !apiKey) {
      console.error("Missing API_URL or API_KEY environment variables")
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 })
    }

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({
        url,
        platform: "youtube",
      }),
    })

    const apiData = await response.json()

    // Validate structure and return correct nested data
    if (
      apiData.success &&
      apiData.data &&
      apiData.data.data &&
      apiData.data.data.mp3 &&
      apiData.data.data.mp4
    ) {
      return NextResponse.json({
        success: true,
        data: {
          title: apiData.data.data.title,
          thumbnail: apiData.data.data.thumbnail,
          author: apiData.data.data.author,
          mp3: apiData.data.data.mp3,
          mp4: apiData.data.data.mp4,
        },
      })
    } else {
      return NextResponse.json(
        { success: false, error: apiData.error || "Failed to convert video" },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error("Conversion error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
