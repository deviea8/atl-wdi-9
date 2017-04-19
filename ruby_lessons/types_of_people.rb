class Person
  attr_reader :count
  attr_accessor :name

  def initialize(name:, age:)
    @name = name
    @age = age
  end

  def to_s
    "Name: #{@name}, Age: #{@age}"
  end

  def old_enough_to_vote?
    old_enough = @age > 17
    old_enough
  end

  def say_name
    puts "Hi, my name is " + @name + "."
  end

end

class LoudPerson < Person
  def say_name
    puts "HEY YOU, MY NAME IS #{@name.upcase}!"
  end
end

class QuietPerson < Person
  def say_name
    puts "hello my name is #{@name.downcase}..."
  end
end

class VeryLoudPerson < Person
  def say_age
    puts "I'M #{@age} YEARS OLD!!!!!"
  end
end


def print_something
  thing = 'something'
  puts thing
end

neil = Person.new(name: 'Neil', age: 22)
person = Person.new(age: 32, name: 'Josh')
young_person = Person.new(age: 15, name: 'Bob')

bo = QuietPerson.new(name: 'Bo', age: 3)
luna = VeryLoudPerson.new(name: 'Luna', age: 2)

puts luna.say_age
puts bo.say_name
