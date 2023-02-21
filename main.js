const API = 'http://localhost:1717'


const getData = async () => {
  const response = await fetch(`${API}/pastry`)
  const data = await response.json()
  console.log(data)
  createCard(data)

}

getData()


const createCard = async (data) => {

  const wrapper = document.createElement('div')
  wrapper.className = 'card-wrapper'

  document.body.append(wrapper)

  data.forEach((value) => {

    const card = document.createElement('div')
    card.className = 'card'

    wrapper.append(card)

    // ///////////////////////////////////
    // ///////////////////////////////////

    const name = document.createElement('h1')
    name.className = 'title'
    name.textContent = value.name

    card.append(name)

    const image = document.createElement('img')
    image.setAttribute('src', value.image)
    image.className = 'image'

    card.append(image)
    // ///////////////////////////////////
    // ///////////////////////////////////


    const inputStockWrapper = document.createElement('div')
    inputStockWrapper.className = 'inputStockWrapper'

    card.append(inputStockWrapper)

    const inStock = document.createElement('p')
    inStock.textContent = 'In Stock:'
    inputStockWrapper.append(inStock)

    const inputStock = document.createElement('input')
    inputStock.className = 'inputStock'
    inputStock.setAttribute('value', value.inStock)
    inputStock.setAttribute('type', 'number')

    inputStockWrapper.append(inputStock)
    // ///////////////////////////////////
    // ///////////////////////////////////

    const inputCostWrapper = document.createElement('div')
    inputCostWrapper.className = 'inputCostWrapper'

    card.append(inputCostWrapper)

    const cost = document.createElement('p')
    cost.textContent = 'Cost:'
    inputCostWrapper.append(cost)

    const inputCost = document.createElement('input')
    inputCost.className = 'inputCost'
    inputCost.setAttribute('value', value.cost)
    inputCost.setAttribute('type', 'number')
    inputCostWrapper.append(inputCost)
    // ///////////////////////////////////
    // ///////////////////////////////////

    const save = document.createElement('button')
    save.textContent = 'Save changes'
    save.className = 'save'

    card.append(save)

    const remove = document.createElement('button')
    remove.textContent = 'Remove'
    remove.className = 'remove'

    card.append(remove)
    // ///////////////////////////////////
    // ///////////////////////////////////

    const deliveryWrapper = document.createElement('div')
    deliveryWrapper.className = 'deliveryWrapper'

    card.append(deliveryWrapper)

    const delivery = document.createElement('button')
    delivery.textContent = 'Has delivery?'
    delivery.className = 'delivery'

    deliveryWrapper.append(delivery)

    const deliveryText = document.createElement('p')
    deliveryText.textContent = 'Unknown'
    inputCostWrapper.append(deliveryText)

    deliveryWrapper.append(deliveryText)

    // //////////////////////////////////////////////

    remove.addEventListener('click', () => {
      removeCard(value.id)
      console.log(value.id)
    })

    save.addEventListener('click', () => {
      saveNew(value.id, {
        cost: Number(inputCost.value),
        inStock: Number(inputStock.value),
      })
    })

    delivery.addEventListener('click', () => {
      console.log(value.id)
      showDelivery(value.id, deliveryText)
    })

  })
}

const removeCard = async (id) => {
  const response = await fetch(`${API}/pastry/delete/${id}`, {
    method: 'DELETE',
  })
  console.log(response)
}

const saveNew = async (id, data) => {
  const response = await fetch(`${API}/pastry/update/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(response)
}

const showDelivery = async (id, deliveryText) => {
  const response = await fetch(`${API}/pastry/detail/${id}`)
  const data = await response.json()

  console.log(data.hasDelivery)

  deliveryText.textContent = data.hasDelivery
}