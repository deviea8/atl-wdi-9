class Person
  attr_reader :count, :people

  @@count = 0
  @@people = []

  def initialize(name:, age:)
    @name = name
    @age = age
    @@count += 1
    @@people.push({name: @name, age: @age})
  end

  def to_s
    "Name: #{@name} | Age: #{@age}"
  end

  def can_vote
    return @age >= 18
  end

  def self.instances
    @@count
  end

  def self.list
    @@people
  end
end


josh = Person.new(age: 32, name: 'Josh')
bo = Person.new(age: 3, name: 'Bo')
luna = Person.new(age: 2, name: 'Luna')


puts josh.can_vote
puts bo.can_vote
puts luna.can_vote
puts Person.instances
puts Person.list
