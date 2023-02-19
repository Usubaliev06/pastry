const API = 'http://localhost:1717'


const getData = async () => {
  const response = await fetch(`${API}/pastry`)
  const data = await response.json()
  console.log(data)
  createCard(data)

  data.forEach((value) => {

    const remove = document.querySelector('.remove')
    remove.addEventListener('click', () => {
      console.log(value.id)
    })
    
  })

}

getData()


const createCard = async (data) => {

  data.forEach((value) => {

    const wrapper = document.createElement('div')
    wrapper.className = 'card-wrapper'

    document.body.append(wrapper)

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
    inputCost.className = 'inputStock'
    inputCost.setAttribute('value', value.inStock)
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

  })
}

