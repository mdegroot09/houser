module.exports = {
  getHouses: async (req, res) => {
    let db = req.app.get('db')
    let houses = await db.get_houses()
    res.status(200).send(houses)
  }
}