# Fe
Fe(Function-executor)
Fe(Function-executor)
Let me start with a short story.  My task was to build a Alexa or Google assistant skill to turn light, fan  on and off.  I finished it but i was not satisfied because the skill was more dependent.  The functionality is less but the dependency is more.  If in case some network issue occurs then the skill fails to execute.  i understood that Alexa and google assistant execute a function by understanding the input that we give.  So i though why can we build a parser that extract the function and arguments from the given input and execute the function.  For example if the user says "Turn on the light",
the parser extracts the function and arguments from the string "Turn on the light" to on("light")  and executes it.  I have initially developed in python, Soon i will release in other languages also.
