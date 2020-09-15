from Fe import *

def name():
    return "vishwak"

def on(val):
    return "on " + str(val) 

def off(val):
    return "off " + str(val)

jS = {
    "functions":["name","hello","on","off"],
    "name":{
        "name":name,
        "argument":[]
        },
    "on":{
        "name":on,
        "argument":["light","fan","motor"]
        },
    "off":{
        "name":off,
        "argument":["light","fan","motor"]
        }
    }

obj = functionExecutor()
print(obj.textParsing("what is your name ",jS))
print(obj.textParsing("turn on the motor ",jS))
