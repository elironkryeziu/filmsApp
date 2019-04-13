const {Film} = require('../models')

module.exports = {
  async index (req, res) {
    try{
      const film = await Film.findAll({
        limit: 20
      })
      res.send(film)
    } catch(err){
        res.status(500).send({
            error: 'An error'
        })
    }
},
    async post (req, res) {
        try{
          const film = await Film.create(req.body)
          res.send(film)
            
        } catch(err){
            res.status(500).send({
                error: 'An error trying to create a film'
            })
        }
    }
  } 