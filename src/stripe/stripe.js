const backendPort = 3001
const baseUrl = `http://localhost:${backendPort}`

export const checkout = async (priceId) => {
    const data = {
        priceId: priceId
    }

    const dataJson = JSON.stringify(data)

    const response = await fetch(`${baseUrl}/create-checkout-session`, {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: dataJson,
    })

    const body = await response.json()
    window.location.href = body.url
}
