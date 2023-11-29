const backendPort = 3001
const baseUrl = `http://localhost:${backendPort}`

/**
 * Create a checkout session with stripe
 * @param {string} priceId Id of the price
 * @param {string} successUrl Url to redirect to on success
 * @param {string} cancelUrl Url to redirect to on cancel
 */
export const checkout = async (priceId, successUrl, cancelUrl) => {
    const data = {
        priceId: priceId,
        successUrl: successUrl,
        cancelUrl: cancelUrl
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

/**
 * Create a product in stripe
 * @param {string} courseName Name of the course
 * @param {string} desc Description of the course
 * @param {number} p Price of the course
 * @returns {string} id of the product
 */
export const createProduct = async (courseName, desc, p) => {
    const data = {
        name: courseName,
        description: desc,
        price: p
    }

    const dataJson = JSON.stringify(data)

    const response = await fetch(`${baseUrl}/create-product`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: dataJson,
    })

    const id = await response.json()
    console.log(id)
    return id
}
