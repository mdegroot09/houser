module.exports = {
  getHouses: async (req, res) => {
    let db = req.app.get('db')
    let houses = await db.get_houses()
    res.status(200).send(houses)
  },

  addHouse: async (req, res) => {
    let {name, address, city, state, zip, img, mortgage, rent} = req.body
    let db = req.app.get('db')
    let newHouse = await db.add_house({name, address, city, state, zip, img, mortgage, rent})
    res.status(200).send(newHouse)
  },

  deleteHouse: async (req, res) => {
    let {id} = req.params
    let db = req.app.get('db')
    let remainingHouses = await db.delete_house(id)
    res.status(200).send(remainingHouses)
  }
}