module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    title: DataTypes.STRING,
    director: DataTypes.STRING,
    genre: DataTypes.STRING,
    actors: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    cover: DataTypes.STRING,
    description: DataTypes.TEXT,
  })

  return Film
}