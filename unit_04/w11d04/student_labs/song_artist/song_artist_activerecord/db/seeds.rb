# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Artist.destroy_all

Song.create(artist_id: 1, title: "Umbrella", genre: "Pop")
Song.create(artist_id: 2, title: "Shake It Off", genre: "Pop")
Song.create(artist_id: 3, title: "Pressure", genre: "Rock")
Song.create(artist_id: 4, title: "Hotline Bling", genre: "Rap")
Song.create(artist_id: 5, title: "Lemonade", genre: "R&B")
