shopping_list = ['peanuts', 'pretzels', 'coffee', 'pretzel sticks', 'fruit snacks', 'pretzel nuggets']


puts shopping_list

puts "What is the next item on the list?"
additem = gets.chomp
puts "Adding #{additem} to the shopping list."
shopping_list.push(additem)
puts shopping_list
puts "What do you want to remove from the list?"
removeitem = gets.chomp
puts "Removing #{removeitem} from the list"
shopping_list.delete(removeitem)
puts shopping_list
puts "Replacing the second item with ice cream"
shopping_list[1] = 'ice cream'
puts shopping_list

shopping_list.each do |item|
  puts item.reverse
end

shopping_list.each_with_index do |item, index|
  puts "#{index+1}. #{item}"
end

squareoffirst = shopping_list[0].length ** 2
puts "The square of the length of the first item in the list is #{squareoffirst}."
puts "What number do you want to add to this number?"
usernumber = gets.chomp.to_i
puts "Now the number is #{usernumber + squareoffirst}"

lengthoflist = shopping_list.length
puts "There are #{lengthoflist} items on the list."
if lengthoflist.even?
  puts "There are an even number of items on the list"
else
  puts "There are an odd number of items on the list"
end

seconditem = shopping_list[1]
firstletterofseconditem = seconditem[0]
if firstletterofseconditem == "a"
  puts "The first letter of the second word is A!"
else
  puts "Nope, starts with a different letter"
end

