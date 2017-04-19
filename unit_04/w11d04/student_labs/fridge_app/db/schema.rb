# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170419204022) do

  create_table "drink_models", force: :cascade do |t|
    t.string   "name"
    t.integer  "size"
    t.boolean  "alcholic"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "fridge__model_id"
  end

  create_table "food_models", force: :cascade do |t|
    t.string   "name"
    t.integer  "weight"
    t.boolean  "vegan"
    t.datetime "timestamp"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "fridge_model_id"
  end

  create_table "fridge_models", force: :cascade do |t|
    t.string   "location"
    t.string   "brand"
    t.integer  "size"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
