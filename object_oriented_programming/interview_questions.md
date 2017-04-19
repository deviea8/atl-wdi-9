# Homework
---

### Object-Oriented Interview Questions

- **Give three different examples of inheritance. Write these class definitions 
and their inheritance relationships out in Ruby.**

- Inheriting from another class.  
Definition: You can define a class as a subclass of another, and that subclass will be able to inherit all of the features and attributes of the parent class, and add/override additional ones.
Example: *class Polar Bear < Bear*

- Using super
Super checks all the way up the parent element to find the inherited method. It should be noted that using this isn't always recommended.
Example: <br>
*class B < A<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;def a<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;super<br>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end<br>
end*

- **What is the difference (in your own words) between a local variable, an 
instance variable, and class variable.**

A local variable is declared within a particular method and only exists in the scope of that method.

An instance variable is created when an instance of a class is created, and is populated with the attributes related specifically to that instance.

A class variable is like a 'global variable' WITHIN a class, and is used to store data related to the usage of the class itself (number of instances, instances created, etc).


- **What is encapsulation?**
The ability to keep implementation details about an object inside only the object itself. This allows for more control with fewer potential ramificications outside the object and less opportunity for errors to occur.


- **What is a `private` method?**-
A method on an object that can't be called from outside that object itself.


- **What is the difference between a class and an object? What is the difference 
between a class and an instance?**
Every class is an object, but not every object is a class. You have to designate it as so. An instance is one specific version that was created from the class (like a replica with its own attributes).

- **What is "duck typing" in Ruby?**
A phrase in Ruby that says that you should treat objects based on what they can do (what methods you can call on them) as opposed to what they technically ARE. It's more of a results-oriented way of looking at objects.

- **Describe "Polymorphism"**
The ability to get a desired result out of an interface while employing a variety of different implementations under the hood. Ultimately, the end result is not tied to a specific implementation - there is flexibility.

- **What is a "base class", "sub-class", and "super class"?**
- Base class: Generic class applying to that 'level'
- Sub-class: Class that exists below that level (child element)
- Super class: Can use this to inherit from an 'ancestor'
